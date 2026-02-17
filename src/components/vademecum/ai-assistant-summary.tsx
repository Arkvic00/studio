
'use client';
import { useState } from 'react';
import type { Drug } from '@/lib/types';
import { vademecumAIAssistantSummary, VademecumAIAssistantSummaryOutput } from '@/ai/flows/vademecum-ai-assistant-summary';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertTriangle, Bot, Clipboard, User, Check } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export function AIAssistantSummary({ drug, patientSpecies }: { drug: Drug, patientSpecies: string }) {
    const [summary, setSummary] = useState<VademecumAIAssistantSummaryOutput | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState<string | null>(null);

    useState(() => {
        const generateSummary = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const result = await vademecumAIAssistantSummary(drug, patientSpecies);
                setSummary(result);
            } catch (e) {
                console.error(e);
                setError('Hubo un error al generar el resumen. Por favor, intenta de nuevo.');
            } finally {
                setIsLoading(false);
            }
        };
        generateSummary();
    });

    const handleCopy = (textToCopy: string, type: 'summary' | 'instructions') => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    if (error) {
        return (
             <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            <PinterestCard className="bg-blue-500/5 border border-blue-500/10">
                 <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                        <User className="text-blue-400" />
                        <span>Resumen Clínico (Profesional)</span>
                    </h3>
                    <button 
                        onClick={() => summary && handleCopy(summary.clinicalSummary, 'summary')}
                        className="p-2 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                        aria-label="Copiar resumen"
                    >
                        {copied === 'summary' ? <Check size={16} className="text-green-400" /> : <Clipboard size={16} />}
                    </button>
                </div>
                {isLoading ? (
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                    </div>
                ) : (
                    <p className="text-sm text-slate-300">{summary?.clinicalSummary}</p>
                )}
            </PinterestCard>
            <PinterestCard className="bg-emerald-500/5 border border-emerald-500/10">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                        <Bot className="text-emerald-400"/>
                        <span>Instrucciones para Cliente</span>
                    </h3>
                    <button 
                        onClick={() => summary && handleCopy(summary.clientInstructions.join('\n'), 'instructions')}
                        className="p-2 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                        aria-label="Copiar instrucciones"
                    >
                        {copied === 'instructions' ? <Check size={16} className="text-green-400" /> : <Clipboard size={16} />}
                    </button>
                </div>

                {isLoading ? (
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                ) : (
                    <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm">
                        {summary?.clientInstructions.map((instruction, i) => <li key={i}>{instruction}</li>)}
                    </ul>
                )}
            </PinterestCard>
        </div>
    )
}
