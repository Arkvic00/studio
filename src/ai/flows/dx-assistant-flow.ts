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
    reasoning: z.string().describe('A brief, clear explanation of why this diagnosis is considered, based on the provided signs.'),
  })).describe('A ranked list of 3-5 most likely differential diagnoses.'),
  nextSteps: z.array(z.string()).describe('A list of recommended diagnostic tests or next steps to confirm or rule out the differentials.')
});
export type DxAssistantOutput = z.infer<typeof DxAssistantOutputSchema>;

// Define the prompt
const dxPrompt = ai.definePrompt({
  name: 'dxAssistantPrompt',
  input: { schema: DxAssistantInputSchema },
  output: { schema: DxAssistantOutputSchema },
  prompt: `You are an expert veterinary clinician AI. Your role is to assist a veterinary professional by providing a list of differential diagnoses based on clinical signs and history.

Your response MUST be a ranked list of the most probable diagnoses, not a single definitive answer. For each diagnosis, provide a concise reasoning. Also, provide a list of recommended next steps (diagnostic tests).

Return the response as a JSON object matching the defined schema.

Patient Information:
- Species: {{{species}}}
- Clinical Signs & History: {{{anamnesis}}}

Based on this information, generate:
1.  A ranked list of 3 to 5 differential diagnoses.
2.  The clinical reasoning for including each diagnosis.
3.  A list of suggested next steps or diagnostic tests to pursue.
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
