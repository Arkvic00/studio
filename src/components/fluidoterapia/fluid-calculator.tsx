'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { Droplet, HelpCircle, Activity, Settings, Timer, Beaker } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { GlassInput } from '@/components/ui/glass-input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FluidCalculator() {
  const [activeTab, setActiveTab] = useState('maintenance'); 
  const [params, setParams] = useLocalStorage('fluidParams', { peso: "", deshid: "", mant: 60, perdidas: "", horas: 24, factor: 60, especie: 'Perro', bagSize: 250 });
  const [criParams, setCriParams] = useLocalStorage('criParams', { drugConc: "", dose: "", fluidRate: "", weight: "" }); 
  const [dilutionParams, setDilutionParams] = useLocalStorage('dilutionParams', { finalVol: "100", drugConc: "", desiredConc: "" });
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
      const p = parseFloat(params.peso);
      if (p > 10 && params.factor === 60) setParams(prev => ({ ...prev, factor: 20 }));
      else if (p <= 10 && params.factor === 20) setParams(prev => ({ ...prev, factor: 60 }));
  }, [params.peso, params.factor, setParams]);

  const results = useMemo(() => {
    const p = parseFloat(params.peso) || 0; const d = parseFloat(params.deshid) || 0; const m = parseFloat(params.mant) || 0; const l = parseFloat(params.perdidas) || 0; const h = parseFloat(params.horas) || 24; const f = parseFloat(params.factor) || 20;
    const deficit = p * d * 10; const mantenimiento = p * m; const total = deficit + mantenimiento + l;
    const mlHr = h > 0 ? total / h : 0; const gtsMin = (mlHr * f) / 60; const segGota = gtsMin > 0 ? 60 / gtsMin : 0;
    const bagDuration = mlHr > 0 ? params.bagSize / mlHr : 0;
    return { total, mlHr, gtsMin, segGota, bagDuration };
  }, [params]);

  const criResult = useMemo(() => {
      const w = parseFloat(criParams.weight) || 0;
      const dose = parseFloat(criParams.dose) || 0; 
      const rate = parseFloat(criParams.fluidRate) || 0;
      const conc = parseFloat(criParams.drugConc) || 0;
      const bag = parseFloat(params.bagSize) || 250;
      
      if(w > 0 && dose > 0 && rate > 0 && conc > 0) {
          const mgPerHr = (dose * w * 60) / 1000;
          const mlDrugPerHr = mgPerHr / conc;
          const duration = bag / rate;
          const totalMlDrug = mlDrugPerHr * duration;
          return { mgPerHr, mlDrugPerHr, totalMlDrug, duration };
      }
      return null;
  }, [criParams, params.bagSize]);

    const dilutionResult = useMemo(() => {
        const vF = parseFloat(dilutionParams.finalVol) || 0;
        const cD = parseFloat(dilutionParams.drugConc) || 0;
        const cF = parseFloat(dilutionParams.desiredConc) || 0;

        if (vF > 0 && cD > 0 && cF > 0 && cD >= cF) {
            const drugVol = (vF * cF) / cD;
            const diluentVol = vF - drugVol;
            return { drugVol: drugVol.toFixed(2), diluentVol: diluentVol.toFixed(2) };
        }
        return null;
    }, [dilutionParams]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="lg:col-span-7 space-y-6">
        <PinterestCard>
            <div className="flex gap-4 mb-6 border-b border-border pb-4">
                <button onClick={() => setActiveTab('maintenance')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'maintenance' ? 'bg-blue-600 text-white' : 'text-muted-foreground hover:text-white'}`}>Reposición</button>
                <button onClick={() => setActiveTab('cri')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'cri' ? 'bg-purple-600 text-white' : 'text-muted-foreground hover:text-white'}`}>Infusión Continua (CRI)</button>
                <button onClick={() => setActiveTab('dilution')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'dilution' ? 'bg-teal-600 text-white' : 'text-muted-foreground hover:text-white'}`}>Diluciones</button>
            </div>

            {activeTab === 'maintenance' && (
                <>
                  <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4"><div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 border border-blue-500/20"><Droplet size={28}/></div><div><h2 className="text-2xl font-bold text-white">Fluidoterapia</h2><p className="text-xs text-muted-foreground font-medium">Plan de reposición</p></div></div>
                      <button onClick={() => setShowHelp(!showHelp)} className="p-2 bg-card text-muted-foreground hover:text-white rounded-full border border-border hover:bg-blue-600 transition-all"><HelpCircle size={20}/></button>
                  </div>
                    {showHelp && (
                        <Accordion type="single" collapsible className="w-full bg-card p-4 rounded-2xl border border-border mb-6 text-xs text-slate-300 space-y-2 animate-in fade-in">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-blue-400">¿Cómo se calcula el volumen total?</AccordionTrigger>
                                <AccordionContent className="text-slate-300 space-y-2">
                                    El volumen total se compone de tres partes: <br/><br/>
                                    <p><strong>1. Déficit:</strong> El líquido perdido por deshidratación. Se calcula como: <code className="bg-background p-1 rounded-md text-white">Peso (kg) * % Deshidratación * 10</code>.</p>
                                    <p><strong>2. Mantenimiento:</strong> El líquido necesario para las funciones corporales normales en 24h. Se calcula como <code className="bg-background p-1 rounded-md text-white">Peso (kg) * Tasa de Mantenimiento (ml/kg/día)</code>.</p>
                                    <p><strong>3. Pérdidas Continuas:</strong> Líquido extra perdido por vómito, diarrea, etc. Es una estimación que se suma al total.</p>
                                    <p className="mt-2 text-white font-bold">Total (ml) = Déficit + Mantenimiento + Pérdidas</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-blue-400">¿Qué es el factor de goteo?</AccordionTrigger>
                                <AccordionContent className="text-slate-300 space-y-2">
                                    Es el número de gotas que equivalen a 1 mililitro (ml) según el equipo de venoclisis que uses.<br/><br/>
                                    <p><strong>- Normogotero:</strong> Usualmente 20 gotas/ml. Ideal para pacientes medianos a grandes.</p>
                                    <p><strong>- Microgotero:</strong> 60 gotas/ml. Ideal para pacientes pequeños (&lt;10kg) o para infusiones muy precisas.</p>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-3">
                                <AccordionTrigger className="text-blue-400">Explicación de las tasas de infusión</AccordionTrigger>
                                <AccordionContent className="text-slate-300 space-y-2">
                                     <p><strong>ml/hora:</strong> Es la velocidad a la que se infunde el volumen total. <code className="bg-background p-1 rounded-md text-white">Volumen Total (ml) / Horas a reponer</code>.</p>
                                     <p><strong>Gotas/min:</strong> Es la velocidad de goteo manual. <code className="bg-background p-1 rounded-md text-white">(ml/hora * Factor de Goteo) / 60</code>.</p>
                                     <p><strong>Intervalo:</strong> Es el tiempo que debe pasar entre cada gota. <code className="bg-background p-1 rounded-md text-white">60 / Gotas por minuto</code>.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2"><label className="text-[11px] font-bold text-slate-400 uppercase ml-2">Especie</label><select value={params.especie} onChange={e => setParams({...params, especie: e.target.value})} className="w-full bg-card rounded-2xl p-4 text-white font-bold outline-none border-2 border-transparent focus:border-blue-500/30"><option value="Perro">Perro</option><option value="Gato">Gato</option></select></div>
                      <GlassInput label="Peso (kg)" type="number" value={params.peso} onChange={v => setParams({...params, peso: v})} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <GlassInput label="% Deshid" type="number" value={params.deshid} onChange={v => setParams({...params, deshid: v})} />
                    <GlassInput label="Mant. (ml/kg)" type="number" value={params.mant} onChange={v => setParams({...params, mant: v})} />
                    <GlassInput label="Pérdidas (ml)" type="number" value={params.perdidas} onChange={v => setParams({...params, perdidas: v})} />
                    <GlassInput label="Horas a pasar" type="number" value={params.horas} onChange={v => setParams({...params, horas: v})} />
                  </div>
                </>
            )}

            {activeTab === 'cri' && (
                <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-8"><div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400 border border-purple-500/20"><Activity size={28}/></div><div><h2 className="text-2xl font-bold text-white">CRI Calculator</h2><p className="text-xs text-muted-foreground font-medium">Analgesia y Anestesia</p></div></div>
                    <div className="grid grid-cols-2 gap-4">
                        <GlassInput label="Peso (kg)" type="number" value={criParams.weight} onChange={v => setCriParams({...criParams, weight: v})} />
                        <GlassInput label="Dosis (mcg/kg/min)" type="number" value={criParams.dose} onChange={v => setCriParams({...criParams, dose: v})} />
                        <GlassInput label="Conc. Fármaco (mg/ml)" type="number" value={criParams.drugConc} onChange={v => setCriParams({...criParams, drugConc: v})} />
                        <GlassInput label="Velocidad Fluidos (ml/hr)" type="number" value={criParams.fluidRate} onChange={v => setCriParams({...criParams, fluidRate: v})} />
                    </div>
                </div>
            )}
            
            {activeTab === 'dilution' && (
                 <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-8"><div className="p-4 bg-teal-500/10 rounded-2xl text-teal-400 border border-teal-500/20"><Beaker size={28}/></div><div><h2 className="text-2xl font-bold text-white">Calculadora de Diluciones</h2><p className="text-xs text-muted-foreground font-medium">Fórmula C1V1 = C2V2</p></div></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <GlassInput label="Conc. Fármaco (mg/ml)" type="number" value={dilutionParams.drugConc} onChange={v => setDilutionParams({...dilutionParams, drugConc: v})} />
                        <GlassInput label="Conc. Deseada (mg/ml)" type="number" value={dilutionParams.desiredConc} onChange={v => setDilutionParams({...dilutionParams, desiredConc: v})} />
                        <GlassInput label="Volumen Final (ml)" type="number" value={dilutionParams.finalVol} onChange={v => setDilutionParams({...dilutionParams, finalVol: v})} />
                    </div>
                </div>
            )}
        </PinterestCard>
        
        {activeTab !== 'dilution' && (
            <PinterestCard color="bg-card">
                <h3 className="text-sm font-black text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2"><Settings size={16}/> Configuración Venoclisis</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2"><label className="text-[11px] font-bold text-slate-400 uppercase ml-2">Equipo</label><select value={params.factor} onChange={e => setParams({...params, factor: parseFloat(e.target.value)})} className="w-full bg-secondary rounded-2xl p-4 text-white font-bold outline-none border border-border focus:border-blue-500/30"><option value="60">Micro (60)</option><option value="20">Normo (20)</option></select></div>
                    <div className="space-y-2"><label className="text-[11px] font-bold text-slate-400 uppercase ml-2">Bolsa</label><select value={params.bagSize} onChange={e => setParams({...params, bagSize: parseFloat(e.target.value)})} className="w-full bg-secondary rounded-2xl p-4 text-white font-bold outline-none border border-border focus:border-blue-500/30"><option value="100">100 ml</option><option value="250">250 ml</option><option value="500">500 ml</option><option value="1000">1L</option></select></div>
                </div>
            </PinterestCard>
        )}
      </div>

      <div className="lg:col-span-5 space-y-6">
        {activeTab === 'maintenance' ? (
            <>
                <PinterestCard color="bg-card" className="relative overflow-hidden border-2 border-blue-500/20">
                  <div className="text-center space-y-6 relative z-10">
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Velocidad Infusión</Badge>
                      <div><h3 className="text-8xl font-black text-white tracking-tighter drop-shadow-2xl">{results.mlHr.toFixed(1)}</h3><p className="text-muted-foreground font-bold uppercase text-xs tracking-[0.3em] mt-2">ml / hora</p></div>
                      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border"><div><p className="text-[10px] font-black text-muted-foreground uppercase mb-1">Gotas/min</p><p className="text-2xl font-bold text-white">{results.gtsMin.toFixed(0)}</p></div><div><p className="text-[10px] font-black text-muted-foreground uppercase mb-1">Intervalo</p><p className="text-2xl font-bold text-blue-400">1 gota c/{results.segGota.toFixed(1)}s</p></div></div>
                  </div>
                </PinterestCard>
                <PinterestCard color="bg-emerald-500/10" className="border-emerald-500/20">
                    <div className="flex justify-between items-center mb-4"><h3 className="text-sm font-black text-emerald-400 flex items-center gap-2 uppercase tracking-widest"><Timer size={16}/> Duración Bolsa</h3><Badge className="bg-emerald-900/30 text-emerald-400 border-emerald-500/20">{params.bagSize} ml</Badge></div>
                    <div className="text-center bg-card/50 p-6 rounded-2xl border border-border"><p className="text-5xl font-black text-white tracking-tighter">{results.bagDuration.toFixed(1)} <span className="text-lg text-emerald-500/50">hrs</span></p><p className="text-[10px] font-bold text-muted-foreground uppercase mt-2">Para terminar</p></div>
                </PinterestCard>
            </>
        ) : activeTab === 'cri' ? (
            <PinterestCard color="bg-card" className="border-2 border-purple-500/20">
                {criResult ? (
                    <div className="text-center space-y-6">
                          <div><p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Añadir a la bolsa</p><h3 className="text-6xl font-black text-white tracking-tighter">{criResult.totalMlDrug.toFixed(2)} ml</h3><p className="text-purple-400 font-bold text-sm">del fármaco</p></div>
                          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border text-left">
                             <div><p className="text-[10px] text-muted-foreground uppercase">Dosis Hora</p><p className="text-xl font-bold text-white">{criResult.mgPerHr.toFixed(2)} mg/hr</p></div>
                             <div><p className="text-[10px] text-muted-foreground uppercase">Duración</p><p className="text-xl font-bold text-white">{criResult.duration.toFixed(1)} hrs</p></div>
                          </div>
                    </div>
                ) : (
                    <div className="text-center py-12 text-muted-foreground font-bold">Ingresa datos para calcular CRI</div>
                )}
            </PinterestCard>
        ) : (
            <PinterestCard color="bg-card" className="border-2 border-teal-500/20">
                {dilutionResult ? (
                    <div className="text-center space-y-6">
                        <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Volumen de Fármaco</p>
                            <h3 className="text-6xl font-black text-white tracking-tighter">{dilutionResult.drugVol} ml</h3>
                        </div>
                        <div className="pt-6 border-t border-border">
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Volumen de Diluyente</p>
                            <h3 className="text-6xl font-black text-teal-400 tracking-tighter">{dilutionResult.diluentVol} ml</h3>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12 text-muted-foreground font-bold">Ingresa datos para calcular la dilución</div>
                )}
            </PinterestCard>
        )}
      </div>
    </div>
  );
};
