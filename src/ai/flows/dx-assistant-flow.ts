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
    matchPercentage: z.number().describe('A numerical value (0-100) calculated from the ratio of present signs to total key signs. Formula: (present signs / total signs) * 100.'),
    keySigns: z.array(z.object({
        sign: z.string().describe('A key clinical sign relevant to this diagnosis.'),
        isPresent: z.boolean().describe('MUST be true if the sign is mentioned in the anamnesis, otherwise MUST be false.'),
    })).describe('A list of 5-7 key clinical signs for this diagnosis. The `isPresent` flag indicates if they are in the anamnesis.'),
    explanation: z.string().describe("A clinical explanation of why this diagnosis is being considered, linking the patient's signs to the disease pathology."),
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
  prompt: `You are an expert veterinary clinician AI. Your role is to assist a veterinary professional by providing a detailed differential diagnosis report based on the provided clinical signs and patient history.

Analyze the patient information and generate a ranked list of 2-3 most likely differential diagnoses.

For EACH differential diagnosis, you MUST provide the following information:
1.  **diagnosis**: The name of the disease.
2.  **keySigns**: A list of 5-7 key clinical signs for that specific disease. For each sign, you MUST determine if it is mentioned or strongly implied in the provided anamnesis and set the 'isPresent' field to a boolean ('true' if present, 'false' if absent).
3.  **matchPercentage**: A confidence score from 0 to 100. This score MUST be calculated strictly using this formula: (number of key signs with isPresent: true) / (total number of key signs listed) * 100. Round the result to the nearest integer.
4.  **explanation**: A detailed clinical explanation of why this diagnosis is a potential fit, directly linking the patient's 'present' signs to the disease's typical pathology.
5.  **etiology**: The causative agent(s) and common modes of transmission for the disease.
6.  **treatment**: A concise summary of the standard treatment protocol for this diagnosis. Do not invent treatments.

Return the response as a single, valid JSON object matching the defined output schema.

Patient Information:
- Species: {{{species}}}
- Clinical Signs & History (Anamnesis): {{{anamnesis}}}
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
