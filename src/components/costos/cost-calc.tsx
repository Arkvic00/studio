
'use client';
import React, { useState, useMemo } from 'react';
import { DollarSign, Utensils } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { GlassInput } from '@/components/ui/glass-input';

export function CostCalc() {
  const [inputs, setInputs] = useLocalStorage('costInputs', { price: "", vol: "", dose: "" });
  const [dailyParams, setDailyParams] = useLocalStorage('costDailyParams', { bagPrice: "", bagWeight: "", portionGrams: "" });
  const [activeTab, setActiveTab] = useState('clinical'); 

  const clinicalRes = useMemo(() => {
    const p=parseFloat(inputs.price)||0; const v=parseFloat(inputs.vol)||0; const d=parseFloat(inputs.dose)||0;
    return v>0 ? { unit: (p/v).toFixed(2), total: ((p/v)*d).toFixed(2) } : { unit: "0.00", total: "0.00" };
  }, [inputs]);

  const dailyRes = useMemo(() => {
    const price = parseFloat(dailyParams.bagPrice) || 0;
    const weightKg = parseFloat(dailyParams.bagWeight) || 0;
    const portion = parseFloat(dailyParams.portionGrams) || 0;
    
    if (price > 0 && weightKg > 0 && portion > 0) {
        const costPerGram = price / (weightKg * 1000);
        const dailyCost = costPerGram * portion;
        return { daily: dailyCost.toFixed(2), monthly: (dailyCost * 30).toFixed(2) };
    }
    return { daily: "0.00", monthly: "0.00" };
  }, [dailyParams]);

  return (
    <div className="animate-in fade-in duration-500">
    <PinterestCard>
        <div className="flex gap-4 mb-6 border-b border-border pb-4">
             <button onClick={() => setActiveTab('clinical')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'clinical' ? 'bg-green-600 text-white' : 'text-muted-foreground hover:text-white'}`}>Costo Procedimiento</button>
             <button onClick={() => setActiveTab('daily')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'daily' ? 'bg-emerald-600 text-white' : 'text-muted-foreground hover:text-white'}`}>Costo Alimentación</button>
        </div>

        {activeTab === 'clinical' ? (
            <div className="animate-in fade-in duration-300">
                <div className="flex items-center gap-4 mb-8"><div className="p-4 bg-green-500/10 rounded-2xl text-green-400 border border-green-500/20"><DollarSign size={28}/></div><div><h2 className="text-2xl font-bold text-white">Costos Clínicos</h2><p className="text-xs text-muted-foreground font-medium">Rentabilidad por dosis</p></div></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6"><GlassInput label="Precio Frasco ($)" type="number" value={inputs.price} onChange={v=>setInputs({...inputs, price:v})} /><GlassInput label="Volumen Total (ml)" type="number" value={inputs.vol} onChange={v=>setInputs({...inputs, vol:v})} /><GlassInput label="Dosis Paciente (ml)" type="number" value={inputs.dose} onChange={v=>setInputs({...inputs, dose:v})} /></div>
                <div className="grid grid-cols-2 gap-6 mt-8"><div className="bg-card p-8 rounded-4xl text-center border border-border"><p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Costo por mL</p><p className="text-4xl font-extrabold text-white">${clinicalRes.unit}</p></div><div className="bg-green-600 p-8 rounded-4xl text-center shadow-lg shadow-green-900/20"><p className="text-[10px] font-bold text-green-200 uppercase tracking-wider mb-2">Costo Total</p><p className="text-5xl font-extrabold text-white">${clinicalRes.total}</p></div></div>
            </div>
        ) : (
            <div className="animate-in fade-in duration-300">
                <div className="flex items-center gap-4 mb-8"><div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20"><Utensils size={28}/></div><div><h2 className="text-2xl font-bold text-white">Costo Diario</h2><p className="text-xs text-muted-foreground font-medium">Presupuesto de alimentación</p></div></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6"><GlassInput label="Precio Bulto ($)" type="number" value={dailyParams.bagPrice} onChange={v=>setDailyParams({...dailyParams, bagPrice:v})} /><GlassInput label="Peso Bulto (kg)" type="number" value={dailyParams.bagWeight} onChange={v=>setDailyParams({...dailyParams, bagWeight:v})} /><GlassInput label="Ración Diaria (g)" type="number" value={dailyParams.portionGrams} onChange={v=>setDailyParams({...dailyParams, portionGrams:v})} /></div>
                <div className="grid grid-cols-2 gap-6 mt-8"><div className="bg-card p-8 rounded-4xl text-center border border-border"><p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Costo Diario</p><p className="text-4xl font-extrabold text-white">${dailyRes.daily}</p></div><div className="bg-emerald-600 p-8 rounded-4xl text-center shadow-lg shadow-emerald-900/20"><p className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider mb-2">Costo Mensual</p><p className="text-5xl font-extrabold text-white">${dailyRes.monthly}</p></div></div>
            </div>
        )}
    </PinterestCard>
    </div>
  );
};
