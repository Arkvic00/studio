'use client';
import React, { useMemo } from 'react';
import { HeartPulse, FlaskConical, ClipboardList, AlertTriangle } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { GlassInput } from '@/components/ui/glass-input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export function TransfusionCalc() {
    const [state, setState] = useLocalStorage('transfusion', {weight: '', pcvRec: '', pcvDon: '40', pcvTarget: '25', species: 'Perro', hours: '4', volDon: '450', factor: '20'});
    
    const vol = useMemo(() => { 
        const w = parseFloat(state.weight)||0; 
        const pr = parseFloat(state.pcvRec)||0; 
        const pd = parseFloat(state.pcvDon)||0; 
        const pt = parseFloat(state.pcvTarget)||0; 
        if (pd===0) return 0; 
        const k = state.species === 'Perro' ? 90 : 66; 
        const res = (k * w * (pt - pr)) / pd; 
        return res > 0 ? res.toFixed(1) : "0.0"; 
    }, [state.weight, state.pcvRec, state.pcvDon, state.pcvTarget, state.species]);
    
    const rates = useMemo(() => {
        const totalVol = parseFloat(vol as string) || 0;
        const h = parseFloat(state.hours) || 0;
        const f = parseFloat(state.factor) || 0;

        if (totalVol <= 0 || h <= 0) return { mlHr: "0.0", gtsMin: "0", segGota: "0.0" };

        const mlHr = totalVol / h;
        const gtsMin = (mlHr * f) / 60;
        const segGota = gtsMin > 0 ? 60 / gtsMin : 0;

        return { mlHr: mlHr.toFixed(1), gtsMin: gtsMin.toFixed(0), segGota: segGota.toFixed(1) };
    }, [vol, state.hours, state.factor]);

    const anticoagulant = useMemo(() => {
        const vol = parseFloat(state.volDon) || 0;
        if (vol <= 0) return { cpda: "0.0" };
        const cpda = vol / 7; // Standard 1:7 ratio for CPDA-1
        return { cpda: cpda.toFixed(1) };
    }, [state.volDon]);

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <PinterestCard>
                <div className="flex items-center gap-4 mb-8"><div className="p-4 bg-rose-500/10 rounded-2xl text-rose-400 border border-rose-500/20"><HeartPulse size={28}/></div><div><h2 className="text-2xl font-bold text-white">Transfusión</h2><p className="text-xs text-muted-foreground font-medium">Plan de transfusión y extracción</p></div></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                    <div className="lg:col-span-3 space-y-4 bg-card p-6 rounded-3xl border border-border">
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Parámetros del Receptor</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <GlassInput label="Peso (kg)" type="number" value={state.weight} onChange={v=>setState({...state, weight: v})} />
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-slate-400 uppercase ml-2">Especie</label>
                                <select value={state.species} onChange={e=>setState({...state, species: e.target.value})} className="w-full bg-secondary rounded-2xl p-4 text-white font-bold outline-none border-2 border-transparent focus:border-rose-500/30">
                                    <option value="Perro">Perro</option>
                                    <option value="Gato">Gato</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <GlassInput label="HT Receptor %" type="number" value={state.pcvRec} onChange={v=>setState({...state, pcvRec: v})} />
                            <GlassInput label="HT Meta %" type="number" value={state.pcvTarget} onChange={v=>setState({...state, pcvTarget: v})} />
                            <GlassInput label="HT Donante %" type="number" value={state.pcvDon} onChange={v=>setState({...state, pcvDon: v})} />
                        </div>
                         <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                            <GlassInput label="Horas a Transfundir" type="number" value={state.hours} onChange={v=>setState({...state, hours: v})} />
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-slate-400 uppercase ml-2">Gotero</label>
                                <select value={state.factor} onChange={e=>setState({...state, factor: e.target.value})} className="w-full bg-secondary rounded-2xl p-4 text-white font-bold outline-none border-2 border-transparent focus:border-rose-500/30">
                                    <option value="20">Normogotero (20)</option>
                                    <option value="60">Microgotero (60)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-destructive rounded-4xl p-6 flex flex-col justify-center text-center shadow-lg shadow-red-900/20">
                            <p className="text-[10px] font-bold text-red-200 uppercase tracking-widest mb-2">Volumen a Transfundir</p>
                            <p className="text-5xl sm:text-6xl font-black text-white tracking-tighter">{vol} <span className="text-lg text-red-200">ml</span></p>
                        </div>
                         <div className="grid grid-cols-3 gap-2 text-center bg-card p-4 rounded-3xl border border-border">
                            <div><p className="text-[10px] text-muted-foreground uppercase font-bold">ml/hr</p><p className="text-xl font-bold text-white">{rates.mlHr}</p></div>
                            <div><p className="text-[10px] text-muted-foreground uppercase font-bold">Gotas/min</p><p className="text-xl font-bold text-white">{rates.gtsMin}</p></div>
                            <div><p className="text-[10px] text-muted-foreground uppercase font-bold">Seg/Gota</p><p className="text-xl font-bold text-rose-400">{rates.segGota}</p></div>
                        </div>
                    </div>
                </div>
            </PinterestCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PinterestCard>
                    <h3 className="text-sm font-black text-rose-400 uppercase tracking-widest mb-4 flex items-center gap-2"><FlaskConical size={16}/> Cálculo Anticoagulante (CPDA-1)</h3>
                    <div className="flex items-end gap-4">
                        <GlassInput label="Volumen a Extraer (ml)" type="number" value={state.volDon} onChange={v => setState({...state, volDon: v})} />
                        <div className="bg-card p-4 rounded-2xl text-center border border-border flex-1">
                             <p className="text-[10px] font-bold text-muted-foreground uppercase">CPDA-1</p>
                             <p className="text-2xl sm:text-3xl font-extrabold text-white">{anticoagulant.cpda}<span className="text-base ml-1 text-rose-400">ml</span></p>
                        </div>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-3 ml-2">Calculado a una proporción estándar de 1:7.</p>
                </PinterestCard>
                <PinterestCard>
                    <h3 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2"><ClipboardList size={16}/> Guía de Compatibilidad</h3>
                     <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle className="font-bold text-white">¡Siempre realizar pruebas cruzadas!</AlertTitle>
                        <AlertDescription className="text-xs">Esta es solo una guía rápida.</AlertDescription>
                    </Alert>
                    <div className="mt-4 space-y-3">
                        <div>
                            <h4 className="font-bold text-white flex items-center gap-2">🐩 Perros (DEA 1)</h4>
                            <p className="text-xs text-muted-foreground">Donante Universal: <Badge variant="destructive">DEA 1 Negativo</Badge></p>
                             <p className="text-xs text-muted-foreground">Receptor Universal: <Badge variant="secondary">DEA 1 Positivo</Badge></p>
                        </div>
                         <div>
                            <h4 className="font-bold text-white flex items-center gap-2">🐱 Gatos (AB)</h4>
                            <p className="text-xs text-muted-foreground">Tipo A puede recibir de <Badge variant="secondary">A</Badge></p>
                             <p className="text-xs text-muted-foreground">Tipo B puede recibir de <Badge variant="destructive">B</Badge></p>
                            <p className="text-xs text-muted-foreground">Tipo AB puede recibir de <Badge variant="secondary">A</Badge>, <Badge variant="destructive">B</Badge>, y <Badge>AB</Badge> (Receptor Universal)</p>
                        </div>
                    </div>
                </PinterestCard>
            </div>
        </div>
    );
};
