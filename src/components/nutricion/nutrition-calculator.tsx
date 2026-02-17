
'use client';
import React, { useState, useMemo } from 'react';
import { Utensils, Droplet, TrendingDown, TrendingUp } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { GlassInput } from '@/components/ui/glass-input';

export function NutritionCalculator() {
    const [activeTab, setActiveTab] = useState('rer'); 
    const [weight, setWeight] = useLocalStorage('nutriWeight', "");
    const [factor, setFactor] = useLocalStorage('nutriFactor', 1.0);
    const [targetWeight, setTargetWeight] = useLocalStorage('nutriTargetWeight', "");
    const [foodMoisture, setFoodMoisture] = useLocalStorage('nutriMoisture', "10"); 
    const [foodAmount, setFoodAmount] = useLocalStorage('nutriAmount', ""); 
    
    const rerResult = useMemo(() => {
        const w = parseFloat(weight) || 0;
        if (w <= 0) return 0;
        return (70 * Math.pow(w, 0.75) * factor).toFixed(0);
    }, [weight, factor]);

    const weightLossResult = useMemo(() => {
        const w = parseFloat(targetWeight) || 0;
        if (w <= 0) return 0;
        return (70 * Math.pow(w, 0.75) * 0.6).toFixed(0);
    }, [targetWeight]);

    const waterResult = useMemo(() => {
        const amt = parseFloat(foodAmount) || 0;
        const moist = parseFloat(foodMoisture) || 0;
        return ((amt * moist) / 100).toFixed(0);
    }, [foodAmount, foodMoisture]);

    return (
        <PinterestCard>
            <div className="flex gap-4 mb-6 border-b border-border pb-4 overflow-x-auto">
                <button onClick={() => setActiveTab('rer')} className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'rer' ? 'bg-orange-600 text-white' : 'text-muted-foreground hover:text-white'}`}>RER / MER</button>
                <button onClick={() => setActiveTab('clinic')} className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'clinic' ? 'bg-amber-600 text-white' : 'text-muted-foreground hover:text-white'}`}>Clínica (Peso/Agua)</button>
                <button onClick={() => setActiveTab('growth')} className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'growth' ? 'bg-yellow-600 text-white' : 'text-muted-foreground hover:text-white'}`}>Crecimiento</button>
            </div>

            {activeTab === 'rer' && (
                <div className="animate-in fade-in duration-300">
                <div className="flex items-center gap-4 mb-8"><div className="p-4 bg-orange-500/10 rounded-2xl text-orange-400 border border-orange-500/20"><Utensils size={28}/></div><div><h2 className="text-2xl font-bold text-white">Requerimientos</h2><p className="text-xs text-muted-foreground font-medium">Calorías diarias</p></div></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <GlassInput label="Peso (kg)" type="number" value={weight} onChange={setWeight} />
                        <div className="space-y-2"><label className="text-[11px] font-bold text-slate-400 uppercase ml-2">Factor</label><select value={factor} onChange={e=>setFactor(parseFloat(e.target.value))} className="w-full bg-card rounded-2xl p-4 text-white font-bold outline-none border-2 border-transparent focus:border-orange-500/30"><option value="1.0">RER (Reposo)</option><option value="1.2">Cirugía Leve</option><option value="1.4">Trauma / Sepsis</option><option value="1.6">Crecimiento / Lactancia</option></select></div>
                    </div>
                    <div className="bg-card p-8 rounded-4xl border border-border flex flex-col justify-center text-center"><p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-2">Total Diario</p><p className="text-5xl sm:text-6xl font-black text-white">{rerResult}</p><p className="text-sm font-bold text-muted-foreground mt-2 uppercase">kcal / día</p></div>
                </div>
                </div>
            )}

            {activeTab === 'clinic' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                    <div className="bg-card p-6 rounded-3xl border border-border">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><TrendingDown className="text-red-400"/> Pérdida de Peso</h3>
                        <div className="space-y-4">
                            <GlassInput label="Peso Objetivo (kg)" type="number" value={targetWeight} onChange={setTargetWeight} />
                            <div className="text-center pt-4 border-t border-border">
                                <p className="text-2xl sm:text-3xl font-black text-white">{weightLossResult}</p>
                                <p className="text-[10px] text-muted-foreground font-bold uppercase">Kcal/día para reducir</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-6 rounded-3xl border border-border">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Droplet className="text-blue-400"/> Agua en Alimento</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <GlassInput label="Cantidad (g)" type="number" value={foodAmount} onChange={setFoodAmount} />
                                <GlassInput label="Humedad %" type="number" value={foodMoisture} onChange={setFoodMoisture} />
                            </div>
                            <div className="text-center pt-4 border-t border-border">
                                <p className="text-2xl sm:text-3xl font-black text-white">{waterResult} ml</p>
                                <p className="text-[10px] text-muted-foreground font-bold uppercase">Agua ingerida</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'growth' && (
                <div className="text-center py-12 text-muted-foreground animate-in fade-in duration-300">
                    <TrendingUp size={48} className="mx-auto mb-4 opacity-50"/>
                    <p className="font-bold">Módulo de Curvas de Crecimiento</p>
                    <p className="text-xs opacity-70">Próximamente disponible</p>
                </div>
            )}
        </PinterestCard>
    );
};
