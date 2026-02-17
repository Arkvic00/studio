
'use client';
import React, { useState } from 'react';
import { Thermometer, HeartPulse, Activity, RotateCcw } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { CONSTANTES_DATA, REPTILE_VARIANTS } from '@/lib/data';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { RangeVisual } from '@/components/constantes/range-visual';
import type { Constante } from '@/lib/types';

export function ConstantesView() {
    const [selectedReptile, setSelectedReptile] = useLocalStorage('selectedReptile', 'Tortuga de Tierra');
    const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

    const toggleFlip = (index: number) => {
        setFlippedCards(prev => ({...prev, [index]: !prev[index]}));
    };
    
    return (
    <div className="space-y-6 animate-in fade-in duration-500">
        <PinterestCard>
            <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-yellow-500/10 rounded-2xl text-yellow-400 border border-yellow-500/20">
                    <Thermometer size={28}/>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Constantes Fisiológicas</h2>
                    <p className="text-xs text-muted-foreground font-medium">Click para ver hemograma (excepto reptiles)</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CONSTANTES_DATA.map((c, i) => {
                    const isReptil = c.esp === 'Reptil';
                    const reptileData = isReptil ? { ...REPTILE_VARIANTS[selectedReptile], icon: c.icon, esp: c.esp } : null;
                    const data = isReptil && reptileData ? reptileData : c;
                    const isFlipped = flippedCards[i];
                    
                    return (
                    <div key={i} onClick={() => !isReptil && toggleFlip(i)} className={`relative h-[22rem] rounded-4xl cursor-pointer perspective-1000 group`}>
                        <div className={`w-full h-full relative transform-style-3d transition-all duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
                            {/* Front Side */}
                            <div className="absolute inset-0 backface-hidden bg-card rounded-4xl p-6 border border-border overflow-hidden group-hover:border-yellow-500/30 transition-all">
                                <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl grayscale pointer-events-none">{data.icon}</div>
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl font-black text-white flex items-center gap-3"><span className="text-3xl">{data.icon}</span> {isReptil ? 'Reptil' : data.esp}</h3>
                                        {isReptil && (
                                            <select onClick={(e) => e.stopPropagation()} value={selectedReptile} onChange={(e) => setSelectedReptile(e.target.value)} className="bg-secondary text-[10px] font-bold text-yellow-400 py-1 px-3 rounded-lg border border-yellow-500/30 outline-none w-32">
                                                {Object.keys(REPTILE_VARIANTS).map(r => <option key={r} value={r}>{r}</option>)}
                                            </select>
                                        )}
                                    </div>
                                    <div className="space-y-4 flex-1">
                                        <RangeVisual label={isReptil ? "POTZ" : "Temperatura"} min={data.t_min} max={data.t_max} unit="°C" icon={Thermometer} colorClass="text-orange-400" />
                                        <RangeVisual label="Frec. Cardíaca" min={data.fc_min} max={data.fc_max} unit="lpm" icon={HeartPulse} colorClass="text-red-400" />
                                        <RangeVisual label="Frec. Resp." min={data.fr_min} max={data.fr_max} unit="rpm" icon={Activity} colorClass="text-blue-400" />
                                    </div>
                                    {!isReptil && <div className="mt-4 text-center text-[10px] text-muted-foreground font-bold uppercase tracking-widest flex items-center justify-center gap-2"><RotateCcw size={12}/> Ver Hemograma</div>}
                                </div>
                            </div>
                            
                            {/* Back Side (Hemograma) */}
                            {!isReptil && c.hemograma && (
                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-secondary rounded-4xl p-6 border border-border flex flex-col justify-center">
                                    <h3 className="text-xl font-black text-white mb-6 text-center">Hemograma {data.esp}</h3>
                                    <div className="space-y-4">
                                        <div className="bg-card p-4 rounded-xl border border-border flex justify-between items-center">
                                            <span className="text-xs font-bold text-muted-foreground">Hematocrito</span>
                                            <span className="text-lg font-black text-white">{c.hemograma?.hto}</span>
                                        </div>
                                        <div className="bg-card p-4 rounded-xl border border-border flex justify-between items-center">
                                            <span className="text-xs font-bold text-muted-foreground">Leucocitos (x10⁹/L)</span>
                                            <span className="text-lg font-black text-white">{c.hemograma?.gb}</span>
                                        </div>
                                        <div className="bg-card p-4 rounded-xl border border-border flex justify-between items-center">
                                            <span className="text-xs font-bold text-muted-foreground">Plaquetas (x10⁹/L)</span>
                                            <span className="text-lg font-black text-white">{c.hemograma?.plaq}</span>
                                        </div>
                                    </div>
                                    <div className="mt-auto text-center text-[10px] text-muted-foreground font-bold uppercase tracking-widest flex items-center justify-center gap-2"><RotateCcw size={12}/> Ver Constantes</div>
                                </div>
                            )}
                        </div>
                    </div>
                )})}
            </div>
        </PinterestCard>
    </div>
    );
};
