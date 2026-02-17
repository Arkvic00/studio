
'use client';
import React, { useMemo } from 'react';
import { HeartPulse } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { GlassInput } from '@/components/ui/glass-input';

export function TransfusionCalc() {
    const [state, setState] = useLocalStorage('transfusion', {weight: '', pcvRec: '', pcvDon: '40', pcvTarget: '25', species: 'Perro'});
    
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
    
    return (
        <div className="animate-in fade-in duration-500">
        <PinterestCard>
            <div className="flex items-center gap-4 mb-8"><div className="p-4 bg-rose-500/10 rounded-2xl text-rose-400 border border-rose-500/20"><HeartPulse size={28}/></div><div><h2 className="text-2xl font-bold text-white">Transfusión</h2><p className="text-xs text-muted-foreground font-medium">Cálculo de volumen sanguíneo</p></div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                    <GlassInput label="Peso (kg)" type="number" value={state.weight} onChange={v=>setState({...state, weight: v})} />
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-400 uppercase ml-2">Especie</label>
                        <select value={state.species} onChange={e=>setState({...state, species: e.target.value})} className="w-full bg-card rounded-2xl p-4 text-white font-bold outline-none border-2 border-transparent focus:border-rose-500/30">
                            <option value="Perro">Perro</option>
                            <option value="Gato">Gato</option>
                        </select>
                    </div>
                </div>
                <div className="bg-destructive rounded-4xl p-6 flex flex-col justify-center text-center shadow-lg shadow-red-900/20">
                    <p className="text-[10px] font-bold text-red-200 uppercase tracking-widest mb-2">Volumen a Transfundir</p>
                    <p className="text-6xl font-black text-white tracking-tighter">{vol} <span className="text-lg text-red-200">ml</span></p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <GlassInput label="HT Rec %" type="number" value={state.pcvRec} onChange={v=>setState({...state, pcvRec: v})} />
                <GlassInput label="HT Meta %" type="number" value={state.pcvTarget} onChange={v=>setState({...state, pcvTarget: v})} />
                <GlassInput label="HT Don %" type="number" value={state.pcvDon} onChange={v=>setState({...state, pcvDon: v})} />
            </div>
        </PinterestCard>
        </div>
    );
};
