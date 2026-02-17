'use client';
import { useState } from 'react';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Zap, HelpCircle, Shuffle, Pill, CheckCircle2, XCircle } from 'lucide-react';
import { DxAssistantInput, DxAssistantOutput, dxAssistantFlow } from '@/ai/flows/dx-assistant-flow';
import { Skeleton } from '../ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

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
                          <Skeleton className="h-8 w-1/3 mb-6" />
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                               <div className="space-y-3">
                                    <Skeleton className="h-6 w-1/2 mb-4" />
                                    <Skeleton className="h-5 w-full" />
                                    <Skeleton className="h-5 w-full" />
                                    <Skeleton className="h-5 w-4/5" />
                               </div>
                                <div className="space-y-3">
                                    <Skeleton className="h-12 w-full" />
                                    <Skeleton className="h-12 w-full" />
                                    <Skeleton className="h-12 w-full" />
                                </div>
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
                <div className="mt-8 animate-in fade-in duration-500 space-y-8">
                    <h3 className="text-3xl font-black text-white text-center">Resultados del Asistente de Diagnóstico</h3>
                    {result.differentials.map((d, i) => (
                        <PinterestCard key={i} className="!p-8 border-l-4 border-red-500">
                            <div className="flex justify-between items-start mb-6">
                                <h4 className="text-3xl font-black text-red-400">{d.diagnosis}</h4>
                                <div className="text-right flex-shrink-0 ml-4">
                                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Coincidencia</p>
                                    <p className="text-3xl font-extrabold text-white">{d.matchPercentage}%</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                                {/* Left Column: Key Signs */}
                                <div>
                                    <h5 className="font-bold text-white mb-4 text-lg">Signos Clínicos Clave</h5>
                                    <div className="space-y-3">
                                        {d.keySigns.map((s, j) => (
                                            <div key={j} className="flex items-center gap-3">
                                                {s.isPresent ? (
                                                    <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                                                ) : (
                                                    <XCircle size={20} className="text-red-500 flex-shrink-0" />
                                                )}
                                                <span className={cn("text-sm", s.isPresent ? "text-slate-200" : "text-slate-400")}>
                                                    {s.sign}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column: Accordions */}
                                <Accordion type="single" collapsible className="w-full space-y-3">
                                    <AccordionItem value="explanation" className="border-none bg-card rounded-2xl overflow-hidden">
                                        <AccordionTrigger className="px-4 py-3 text-white font-bold text-sm hover:no-underline hover:bg-white/5 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <HelpCircle size={18} className="text-blue-400" />
                                                Explicación
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-4 pb-4 pt-0 text-sm text-slate-300">
                                            <p>{d.explanation}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    
                                    <AccordionItem value="etiology" className="border-none bg-card rounded-2xl overflow-hidden">
                                        <AccordionTrigger className="px-4 py-3 text-white font-bold text-sm hover:no-underline hover:bg-white/5 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <Shuffle size={18} className="text-purple-400" />
                                                Etiología y Transmisión
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-4 pb-4 pt-0 text-sm text-slate-300">
                                            <p>{d.etiology}</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="treatment" className="border-none bg-card rounded-2xl overflow-hidden">
                                        <AccordionTrigger className="px-4 py-3 text-white font-bold text-sm hover:no-underline hover:bg-white/5 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <Pill size={18} className="text-emerald-400" />
                                                Tratamiento
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-4 pb-4 pt-0 text-sm text-slate-300">
                                            <p>{d.treatment}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </PinterestCard>
                    ))}
                </div>
            )}
        </div>
    );
}
