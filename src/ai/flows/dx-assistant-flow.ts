'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * @fileOverview AI flow to generate differential diagnoses based on clinical signs.
 *
 * - dxAssistantFlow - The main function to call the AI assistant.
 * - DxAssistantInput - The input type for the dxAssistantFlow function.
 * - DxAssistantOutput - The return type for the dxAssistantFlow function.
 */

// Define Input Schema
const DxAssistantInputSchema = z.object({
  species: z.string().describe("The species of the patient."),
  anamnesis: z.string().describe("A summary of the clinical signs and patient history."),
});
export type DxAssistantInput = z.infer<typeof DxAssistantInputSchema>;

// Define Output Schema
const DxAssistantOutputSchema = z.object({
  differentials: z.array(z.object({
    diagnosis: z.string().describe('The name of the potential diagnosis.'),
    matchPercentage: z.number().describe('A numerical value (0-100) representing the confidence of this diagnosis based on the provided signs.'),
    keySigns: z.array(z.object({
        sign: z.string().describe('A key clinical sign relevant to this diagnosis.'),
        isPresent: z.boolean().describe('Set to true if this sign is mentioned or strongly implied in the anamnesis, otherwise false.'),
    })).describe('A list of 5-7 key clinical signs for this diagnosis, indicating if they are present in the patient.'),
    explanation: z.string().describe('A detailed clinical explanation for why this diagnosis is being considered based on the presented signs.'),
    etiology: z.string().describe('The cause (etiology) and common transmission methods of the disease.'),
    treatment: z.string().describe('A concise summary of the standard treatment approach for this diagnosis.'),
  })).describe('A ranked list of 2-3 most likely differential diagnoses with detailed information.')
});
export type DxAssistantOutput = z.infer<typeof DxAssistantOutputSchema>;

// Define the prompt
const dxPrompt = ai.definePrompt({
  name: 'dxAssistantPrompt',
  input: { schema: DxAssistantInputSchema },
  output: { schema: DxAssistantOutputSchema },
  prompt: `You are an expert veterinary clinician AI. Your role is to assist a veterinary professional by providing a detailed differential diagnosis report based on clinical signs and history.

Analyze the patient information provided and generate a ranked list of 2-3 most likely differential diagnoses.

For EACH diagnosis, you MUST provide the following information:
1.  **diagnosis**: The name of the disease.
2.  **matchPercentage**: A confidence score from 0 to 100, representing how well the patient's signs match this diagnosis.
3.  **keySigns**: A list of 5-7 key clinical signs for the disease. For each sign, determine if it is present in the provided anamnesis. The 'isPresent' field must be a boolean (true or false).
4.  **explanation**: A detailed clinical explanation of why this diagnosis fits, linking the patient's signs to the disease pathology.
5.  **etiology**: The causative agent(s) and common modes of transmission.
6.  **treatment**: A concise summary of the standard treatment protocol.

Return the response as a single JSON object matching the defined output schema.

Patient Information:
- Species: {{{species}}}
- Clinical Signs & History: {{{anamnesis}}}
`,
});

// Define the Genkit flow
export const dxAssistantFlow = ai.defineFlow(
  {
    name: 'dxAssistantFlow',
    inputSchema: DxAssistantInputSchema,
    outputSchema: DxAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await dxPrompt(input);
    return output!;
  }
);
