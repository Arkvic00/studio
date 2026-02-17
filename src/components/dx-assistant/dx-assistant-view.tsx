'use client';
import { useState } from 'react';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Lightbulb, Zap } from 'lucide-react';
import { DxAssistantInput, DxAssistantOutput, dxAssistantFlow } from '@/ai/flows/dx-assistant-flow';
import { Skeleton } from '../ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const speciesOptions = ["Perro", "Gato", "Caballo", "Bovino", "Conejo", "Hurón", "Cerdo", "Ovino/Caprino", "Ave"];

export function DxAssistantView() {
    const [species, setSpecies] = useState('Perro');
    const [anamnesis, setAnamnesis] = useState('');
    const [result, setResult] = useState<DxAssistantOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        if (!anamnesis.trim()) {
            setError("Por favor, introduce los signos clínicos.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setResult(null);
        try {
            const input: DxAssistantInput = { species, anamnesis };
            const res = await dxAssistantFlow(input);
            setResult(res);
        } catch (e) {
            console.error(e);
            setError("Hubo un error al generar los diagnósticos. Inténtalo de nuevo.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <PinterestCard>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-red-500/10 rounded-2xl text-red-400 border border-red-500/20">
                        <Bot size={28}/>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Asistente de Diagnósticos Diferenciales</h2>
                        <p className="text-xs text-muted-foreground font-medium">IA para guiar tu razonamiento clínico</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-400 uppercase ml-2">Especie</label>
                        <select 
                            value={species}
                            onChange={(e) => setSpecies(e.target.value)}
                            className="w-full bg-card rounded-2xl p-4 text-white font-bold outline-none border-2 border-transparent focus:border-red-500/30"
                        >
                            {speciesOptions.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-[11px] font-bold text-slate-400 uppercase ml-2">Signos Clínicos y Anamnesis</label>
                        <Textarea 
                            value={anamnesis}
                            onChange={(e) => setAnamnesis(e.target.value)}
                            placeholder="Ej: Perro de 2 meses con vómito, diarrea e inapetencia, sin vacunas..."
                            className="bg-card rounded-2xl p-4 text-white font-bold outline-none border-2 border-transparent focus:border-red-500/30 min-h-[100px]"
                        />
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <Button onClick={handleSubmit} disabled={isLoading} className="bg-red-600 hover:bg-red-700 text-white font-bold text-base px-8 py-6 rounded-2xl shadow-lg shadow-red-900/30">
                        <Zap className="mr-2" size={20}/>
                        {isLoading ? 'Generando...' : 'Generar Diagnósticos'}
                    </Button>
                </div>
            </PinterestCard>
            
            {isLoading && (
                 <PinterestCard className="mt-8">
                    <div className="space-y-6">
                       <div>
                          <Skeleton className="h-6 w-1/3 mb-4" />
                           <div className="space-y-3">
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-12 w-full" />
                           </div>
                       </div>
                        <div>
                          <Skeleton className="h-6 w-1/4 mt-6 mb-4" />
                           <div className="space-y-3">
                            <Skeleton className="h-5 w-4/5" />
                             <Skeleton className="h-5 w-3/5" />
                           </div>
                       </div>
                    </div>
                 </PinterestCard>
            )}

            {error && 
                <Alert variant="destructive" className="mt-8">
                    <AlertTitle>Error de IA</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            }

            {result && (
                <PinterestCard className="mt-8 animate-in fade-in duration-500">
                    <h3 className="text-xl font-black text-white mb-6">Resultados del Asistente</h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2"><Lightbulb /> Diagnósticos Diferenciales</h4>
                            <div className="space-y-4">
                                {result.differentials.map((d, i) => (
                                    <div key={i} className="bg-card p-4 rounded-xl border border-border">
                                        <p className="font-bold text-white">{i + 1}. {d.diagnosis}</p>
                                        <p className="text-sm text-muted-foreground mt-1">{d.reasoning}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                         <div>
                            <h4 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2"><Bot /> Pasos Sugeridos</h4>
                            <ul className="list-decimal pl-5 space-y-2 text-slate-300">
                                {result.nextSteps.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                        </div>
                    </div>
                </PinterestCard>
            )}
        </div>
    );
}
