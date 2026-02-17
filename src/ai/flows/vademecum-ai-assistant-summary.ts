'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * @fileOverview A GenAI flow that generates a concise clinical summary and easy-to-understand client instructions
 * for a specific medication, tailored to the patient's species.
 *
 * - vademecumAIAssistantSummary - The main function to call the AI assistant.
 * - VademecumAIAssistantSummaryInput - The input type for the vademecumAIAssistantSummary function.
 * - VademecumAIAssistantSummaryOutput - The return type for the vademecumAIAssistantSummary function.
 */

// Define Input Schema
const VademecumAIAssistantSummaryInputSchema = z.object({
  drugName: z.string().describe("The generic name of the drug."),
  commercialNames: z.string().describe("Comma-separated commercial names of the drug."),
  drugGroup: z.string().describe("The pharmacological group of the drug."),
  keyClinicalPoints: z.string().describe("Bullet-point list of key clinical points."),
  speciesSpecificDosage: z.string().describe("Formatted species-specific dosage information."),
  contraindications: z.string().describe("Bullet-point list of contraindications."),
  precautions: z.string().describe("Bullet-point list of precautions."),
  adverseEffects: z.string().describe("Bullet-point list of adverse effects."),
  interactions: z.string().describe("Bullet-point list of drug interactions."),
  genericClientInfo: z.string().describe("Bullet-point list of general client information."),
  patientSpecies: z.string().describe("The species of the patient."),
});
export type VademecumAIAssistantSummaryInput = z.infer<typeof VademecumAIAssistantSummaryInputSchema>;

// Define Output Schema
const VademecumAIAssistantSummaryOutputSchema = z.object({
  clinicalSummary: z.string().describe("A concise clinical summary for veterinary professionals."),
  clientInstructions: z.array(z.string()).describe("Easy-to-understand, actionable client instructions for pet owners, provided as bullet points."),
});
export type VademecumAIAssistantSummaryOutput = z.infer<typeof VademecumAIAssistantSummaryOutputSchema>;

// Define the prompt
const vademecumPrompt = ai.definePrompt({
  name: 'vademecumAIAssistantPrompt',
  input: { schema: VademecumAIAssistantSummaryInputSchema },
  output: { schema: VademecumAIAssistantSummaryOutputSchema },
  prompt: `You are a highly skilled veterinary assistant AI, expert in pharmacology and client communication. Your task is to provide a concise clinical summary and clear, easy-to-understand instructions for pet owners regarding a specific medication, tailored to the patient's species.\n\nReturn the response as a JSON object. Ensure the 'clientInstructions' field is an array of strings, where each string is a clear, actionable bullet point.\n\nHere is the medication data:\nDrug Name: {{{drugName}}}\nCommercial Names: {{{commercialNames}}}\nPharmacological Group: {{{drugGroup}}}\nKey Clinical Points:\n{{{keyClinicalPoints}}}\n\nSpecies-specific dosage for {{{patientSpecies}}}:\n{{{speciesSpecificDosage}}}\n\nContraindications:\n{{{contraindications}}}\n\nPrecautions:\n{{{precautions}}}\n\nAdverse Effects:\n{{{adverseEffects}}}\n\nInteractions:\n{{{interactions}}}\n\nGeneral Client Information from Manufacturer:\n{{{genericClientInfo}}}\n\nGiven the above information for a {{{patientSpecies}}} patient, generate:\n\n1.  A concise clinical summary (for veterinary professionals) of the drug. Focus on its main uses, key considerations, and potential risks relevant to a {{{patientSpecies}}}.\n2.  Easy-to-understand, actionable client instructions (for pet owners) as bullet points. Translate medical terms into simple language. Include how to administer, what to watch for (side effects specific to {{{patientSpecies}}} if applicable), and any crucial warnings or dietary advice. Leverage the "General Client Information" but rephrase and tailor it specifically for a {{{patientSpecies}}} owner.\n`,
});

// Define the Genkit flow
const vademecumAIAssistantFlow = ai.defineFlow(
  {
    name: 'vademecumAIAssistantFlow',
    inputSchema: VademecumAIAssistantSummaryInputSchema,
    outputSchema: VademecumAIAssistantSummaryOutputSchema,
  },
  async (input) => {
    const {output} = await vademecumPrompt(input);
    return output!;
  }
);

// Helper to normalize species string to match database keys (e.g., 'Hurón' -> 'huron')
const normalizeStr = (str: string) => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

/**
 * Calls the GenAI Vademecum Assistant to generate a clinical summary and client instructions.
 * @param drugData The full medication data object (e.g., from DB_MEDICAMENTOS).
 * @param patientSpecies The species of the patient (e.g., 'Perro', 'Gato').
 * @returns A promise that resolves to an object containing the clinical summary and client instructions.
 */
export async function vademecumAIAssistantSummary(
  drugData: any,
  patientSpecies: string
): Promise<VademecumAIAssistantSummaryOutput> {
  const patientSpeciesKey = normalizeStr(patientSpecies);

  // Format species-specific dosage
  const speciesDosages = drugData.parametros_dosificacion?.[patientSpeciesKey] || [];
  let formattedDosage = '';
  if (speciesDosages && speciesDosages.length > 0) {
      formattedDosage = speciesDosages.map((d: any) => {
          let doseInfo = `${d.indicacion}: `;
          if (d.math.tipo_calculo === 'fija') {
              doseInfo += `${d.math.dosis_recomendada} ${d.math.unidad_calculo}`;
          } else { // mg_kg
              doseInfo += `${d.math.dosis_recomendada} ${d.math.unidad_calculo}`;
              if (d.math.dosis_min && d.math.dosis_max) {
                  doseInfo += ` (Range: ${d.math.dosis_min}-${d.math.dosis_max} ${d.math.unidad_calculo})`;
              }
          }
          doseInfo += ` via ${Array.isArray(d.vias) ? d.vias.join('/') : d.vias}`;
          if (d.frecuencia && d.frecuencia.texto_ui) {
              doseInfo += ` ${d.frecuencia.texto_ui}.`;
          }
          if (d.notas_tecnicas) {
              doseInfo += ` Notes: ${d.notas_tecnicas}`;
          }
          return doseInfo;
      }).join('\n');
  } else {
      formattedDosage = `No specific dosage information available for ${patientSpecies}.`;
  }

  const promptInput: VademecumAIAssistantSummaryInput = {
      drugName: drugData.meta_data.nombre_generico,
      commercialNames: drugData.meta_data.nombres_comerciales.join(', '),
      drugGroup: drugData.meta_data.grupo_farmacologico,
      keyClinicalPoints: drugData.resumen_clinico.puntos_clave.map((p: string) => `- ${p}`).join('\n'),
      speciesSpecificDosage: formattedDosage,
      contraindications: drugData.seguridad_y_alertas.contraindicaciones.map((c: string) => `- ${c}`).join('\n'),
      precautions: drugData.seguridad_y_alertas.precauciones.map((p: string) => `- ${p}`).join('\n'),
      adverseEffects: drugData.seguridad_y_alertas.efectos_adversos.map((e: string) => `- ${e}`).join('\n'),
      interactions: drugData.seguridad_y_alertas.interacciones_farmacologicas.map((i: any) => `- Drug: ${i.farmaco}, Effect: ${i.efecto}, Severity: ${i.severidad}`).join('\n'),
      genericClientInfo: drugData.informacion_cliente.map((i: string) => `- ${i}`).join('\n'),
      patientSpecies: patientSpecies,
  };

  return vademecumAIAssistantFlow(promptInput);
}
