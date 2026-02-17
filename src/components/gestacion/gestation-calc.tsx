
'use client';
import React, { useMemo } from 'react';
import { Baby, Calendar, Activity, Pill, Camera } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { GESTATION_DATA_FULL, SPECIES_ICONS } from '@/lib/data';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { GlassInput } from '@/components/ui/glass-input';

export function GestationCalc() {
  const [date, setDate] = useLocalStorage('gestationDate', ''); 
  const [species, setSpecies] = useLocalStorage('gestationSpecies', 'perro');
  
  const timeline = useMemo(() => {
     if (!date || !species) return null;
     const d = new Date(date); 
     const addDays = (days: number) => { 
         const x = new Date(d.getTime() + d.getTimezoneOffset()*60000); 
         x.setDate(x.getDate() + days); 
         return x; 
    };
     const key = species.toLowerCase();
     const data = GESTATION_DATA_FULL[key as keyof typeof GESTATION_DATA_FULL] || GESTATION_DATA_FULL['perro'];
     const formatDate = (d: Date) => d.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });
     
     return { 
         start: formatDate(addDays(0)), 
         eco: formatDate(addDays(data.eco)), 
         deworm: data.deworm > 0 ? formatDate(addDays(data.deworm)) : null, 
         rx: data.rx > 0 ? formatDate(addDays(data.rx)) : null, 
         due: formatDate(addDays(data.avg)), 
         duration: data.avg 
    };
  }, [date, species]);

  return (
    <div className="animate-in fade-in duration-500">
    <PinterestCard>
        <div className="flex items-center gap-4 mb-8"><div className="p-4 bg-pink-500/10 rounded-2xl text-pink-400 border border-pink-500/20"><Baby size={28}/></div><div><h2 className="text-2xl font-bold text-white">Gestación</h2><p className="text-xs text-muted-foreground font-medium">Calendario reproductivo</p></div></div>
        <div className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-6">
                    <GlassInput label="Fecha Monta" type="date" value={date} onChange={setDate} />
                    <div className="space-y-2"><label className="text-[11px] font-bold text-slate-400 uppercase ml-2">Especie</label><select value={species} onChange={e=>setSpecies(e.target.value)} className="w-full bg-card rounded-2xl p-4 text-white font-bold outline-none border-2 border-transparent focus:border-pink-500/30">
                        {Object.keys(GESTATION_DATA_FULL).map(k => <option key={k} value={k}>{k.charAt(0).toUpperCase() + k.slice(1)}</option>)}
                    </select></div>
                </div>
                <div className="flex justify-center">
                    <div className="w-32 h-32 bg-card border-2 border-border rounded-4xl flex items-center justify-center text-7xl shadow-2xl relative">
                        {SPECIES_ICONS[species.toLowerCase() as keyof typeof SPECIES_ICONS] || '🐾'}
                    </div>
                </div>
            </div>
            {timeline ? (
                <div className="bg-card p-8 rounded-4xl border border-border space-y-8">
                    <div className="relative pt-4 pb-2 px-2">
                        <div className="absolute top-[1.6rem] left-0 w-full h-1 bg-gradient-to-r from-pink-900 to-pink-500 rounded-full opacity-30"></div>
                        <div className="flex justify-between relative z-10 text-center">
                            {[
                                { label: "Monta", date: timeline.start, color: "pink-600", icon: <Calendar size={14}/> },
                                { label: "Eco", date: timeline.eco, color: "pink-500", icon: <Activity size={14}/> },
                                timeline.deworm ? { label: "Despar.", date: timeline.deworm, color: "purple-500", icon: <Pill size={14}/> } : null,
                                timeline.rx ? { label: "Rayos X", date: timeline.rx, color: "blue-500", icon: <Camera size={14}/> } : null,
                                { label: "Parto", date: timeline.due, color: "pink-400", icon: <Baby size={16}/> }
                            ].filter(Boolean).map((step, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 flex-1">
                                    <div className={`w-8 h-8 rounded-full border-4 border-card shadow-[0_0_0_2px_currentColor] text-${step?.color} bg-secondary flex items-center justify-center text-white`}>{step?.icon}</div>
                                    <div>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase">{step?.label}</p>
                                        <p className="text-xs font-bold text-white mt-1">{step?.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center pt-6 border-t border-border">
                        <p className="text-[10px] font-black text-pink-400 uppercase tracking-widest mb-2">Fecha Estimada de Parto</p>
                        <p className="text-5xl font-black text-white">{timeline.due}</p>
                        <p className="text-xs font-bold text-muted-foreground mt-2">Duración prom: {timeline.duration} días</p>
                    </div>
                </div>
            ) : <div className="bg-card rounded-4xl border border-border flex items-center justify-center text-muted-foreground font-bold text-sm py-12">Selecciona una fecha de monta</div>}
        </div>
    </PinterestCard>
    </div>
  );
};
