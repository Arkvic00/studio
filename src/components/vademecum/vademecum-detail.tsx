'use client';
import { useMemo, useState } from 'react';
import { 
  Zap, AlertOctagon, Shield, Calculator, FileText, 
  GitCompareArrows, Search, Loader2, Timer, Eye, 
  ShieldAlert, ArrowDownUp, Info, AlertTriangle
} from 'lucide-react';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { Badge } from '@/components/ui/badge';
import { getSpeciesInfo } from '@/lib/config';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { fuzzySearch } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { notFound, useParams } from 'next/navigation';

function DrugCompareModal({ currentDrugId }: { currentDrugId: string }) {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const allDrugs = DB_MEDICAMENTOS;
    const isLoading = !allDrugs;

    const filteredDrugs = useMemo(() => {
        if (!allDrugs) return [];
        const otherDrugs = allDrugs.filter(d => d.id !== currentDrugId);

        if (!searchTerm.trim()) {
            return otherDrugs;
        }

        return otherDrugs.filter(drug => {
            const q = searchTerm.toLowerCase();
            const matchName = fuzzySearch(searchTerm, drug.meta_data.nombre_generico);
            const matchCommercial = drug.meta_data.nombres_comerciales.some(n => fuzzySearch(searchTerm, n));
            const matchFamily = drug.meta_data.grupo_farmacologico.toLowerCase().includes(q);
            return matchName || matchCommercial || matchFamily;
        });
    }, [searchTerm, currentDrugId, allDrugs]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="bg-white/5 border-white/10 hover:bg-white/10">
                    <GitCompareArrows size={20} className="mr-2"/>
                    Comparar Fármaco
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl bg-popover p-0 border-white/10">
                <DialogHeader className="p-6 pb-4">
                    <DialogTitle className="text-2xl font-black text-white uppercase tracking-tight">Comparar con...</DialogTitle>
                </DialogHeader>
                <div className="px-6 pb-6 border-b border-border">
                     <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                        <Input
                            type="text"
                            placeholder="Buscar otro fármaco..."
                            className="w-full bg-background pl-12 h-12 rounded-2xl border-white/10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <ScrollArea className="max-h-[60vh]">
                    <div className="p-6 pt-0">
                    {isLoading && <div className="flex justify-center items-center py-10"><Loader2 className="animate-spin text-muted-foreground"/></div>}
                    {!isLoading && filteredDrugs.map((drug) => (
                        <div
                            key={drug.id}
                            onClick={() => setOpen(false)}
                            className="p-4 -mx-4 rounded-xl hover:bg-secondary cursor-pointer border-b border-transparent last:border-0 transition-colors group"
                        >
                            <div className="flex justify-between items-center">
                                <h4 className="text-foreground font-bold text-base group-hover:text-primary transition-colors">
                                    {drug.meta_data.nombre_generico}
                                </h4>
                                <Badge variant="secondary" className="text-[9px]">
                                    {drug.meta_data.grupo_farmacologico.split(',')[0]}
                                </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                {drug.meta_data.nombres_comerciales.join(', ')}
                            </p>
                        </div>
                    ))}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}

export function VademecumDetail() {
    const params = useParams();
    const drugId = params.drugId as string;

    const drug = DB_MEDICAMENTOS.find(d => d.id === drugId);

    if (!drug) {
        notFound();
    }

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in duration-500 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-12">
                  <PinterestCard className="relative overflow-hidden border-l-8 border-l-accent bg-gradient-to-br from-secondary/40 to-background/40">
                      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-8">
                          <div className="flex-1">
                              <div className="flex flex-wrap gap-3 mb-4">
                                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 font-bold uppercase tracking-widest text-[10px]">{drug.meta_data.grupo_farmacologico}</Badge>
                                  <Badge variant="outline" className="border-white/10 text-slate-400">{drug.meta_data.status_regulatorio}</Badge>
                              </div>
                              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter leading-tight">{drug.meta_data.nombre_generico}</h1>
                              <p className="text-lg text-muted-foreground font-medium italic opacity-80 break-words">{drug.meta_data.nombres_comerciales.join(" • ")}</p>
                          </div>
                           <div className="flex flex-col gap-3 w-full md:w-auto flex-shrink-0">
                              <DrugCompareModal currentDrugId={drug.id} />
                           </div>
                      </div>
                  </PinterestCard>
              </div>

              {(drug.resumen_clinico.inicio_accion || drug.resumen_clinico.duracion_efecto) && (
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-4xl flex items-center gap-6">
                        <div className="p-4 bg-emerald-500/20 rounded-2xl text-emerald-400">
                            <Timer size={32} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-emerald-500/70 uppercase tracking-[0.2em] mb-1">Inicio de Acción</p>
                            <p className="text-2xl font-black text-white">{drug.resumen_clinico.inicio_accion || 'No especificado'}</p>
                        </div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-4xl flex items-center gap-6">
                        <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400">
                            <Timer size={32} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-blue-500/70 uppercase tracking-[0.2em] mb-1">Duración del Efecto</p>
                            <p className="text-2xl font-black text-white">{drug.resumen_clinico.duracion_efecto || 'No especificada'}</p>
                        </div>
                    </div>
                </div>
              )}

              <div className="lg:col-span-12 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        <PinterestCard className="h-fit">
                            <h3 className="text-sm font-black text-accent uppercase tracking-widest mb-6 flex items-center gap-3">
                                <Zap size={18} className="text-accent"/> Mecanismo y Farmacología
                            </h3>
                            <div className="space-y-6">
                                <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                                    <p className="text-xs font-black text-slate-500 uppercase mb-2 tracking-widest">Acción</p>
                                    <p className="text-sm text-slate-200 leading-relaxed">{drug.farmacologia_clinica.mecanismo_accion}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-500 uppercase mb-3 tracking-widest">Resumen Clínico</p>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                                        {drug.resumen_clinico.puntos_clave.map((p, i) => <li key={i}>{p}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </PinterestCard>

                        <PinterestCard className="border-orange-500/20 h-fit">
                            <h3 className="text-sm font-black text-orange-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                                <ShieldAlert size={18} className="text-orange-400"/> Monitoreo y Seguridad
                            </h3>
                            <div className="space-y-6">
                                {drug.seguridad_y_alertas.monitoreo_recomendado && (
                                    <div className="bg-orange-500/5 border border-orange-500/10 p-5 rounded-3xl">
                                        <p className="text-[10px] font-black text-orange-500/70 uppercase tracking-widest mb-3 flex items-center gap-2">
                                            <Eye size={14}/> Vigilar constantes
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {drug.seguridad_y_alertas.monitoreo_recomendado.map((m, i) => (
                                                <Badge key={i} variant="outline" className="bg-orange-500/10 border-orange-500/20 text-orange-200 text-[10px] py-1 px-3 font-bold">
                                                    {m}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="bg-slate-500/5 p-5 rounded-3xl border border-slate-500/10">
                                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2 tracking-widest">Instrucciones de Manejo</p>
                                    <p className="text-sm text-slate-300 leading-relaxed italic">{drug.seguridad_y_alertas.instrucciones_manejo || 'Seguir protocolos estándar de bioseguridad.'}</p>
                                </div>
                            </div>
                        </PinterestCard>

                        {drug.seguridad_y_alertas.contraindicaciones_especie && (
                            <PinterestCard className="border-red-500/40 bg-red-500/5">
                                <h3 className="text-sm font-black text-red-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                                    <AlertTriangle size={18} className="text-red-500"/> Alarmas de Especie
                                </h3>
                                <div className="space-y-4">
                                    {Object.entries(drug.seguridad_y_alertas.contraindicaciones_especie).map(([sp, msg]) => (
                                        <div key={sp} className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl">
                                            <span className="font-black text-red-400 text-xs uppercase">{sp}:</span>
                                            <p className="text-sm text-red-200 mt-1">{msg}</p>
                                        </div>
                                    ))}
                                </div>
                            </PinterestCard>
                        )}
                    </div>

                    <div className="space-y-8">
                        <PinterestCard className="border-red-500/20 h-fit">
                            <h3 className="text-sm font-black text-red-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                                <AlertOctagon size={18} className="text-red-400"/> Contraindicaciones y Adversos
                            </h3>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 gap-3">
                                    {drug.seguridad_y_alertas.contraindicaciones.map((c, i) => (
                                        <div key={i} className="bg-red-500/10 border border-red-500/20 p-3 rounded-2xl flex items-center gap-3">
                                            <Badge className="bg-red-600 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                                            <span className="text-xs font-bold text-red-200">{c}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-[10px] font-black text-slate-500 uppercase mb-3 tracking-widest">Efectos Adversos</p>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                                        {drug.seguridad_y_alertas.efectos_adversos.map((e, i) => <li key={i}>{e}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </PinterestCard>

                        <PinterestCard className="border-purple-500/20 h-fit">
                             <h3 className="text-sm font-black text-purple-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                                <GitCompareArrows size={18} className="text-purple-400"/> Interacciones
                             </h3>
                             <div className="grid grid-cols-1 gap-3">
                                {drug.seguridad_y_alertas.interacciones_farmacologicas.map((int, i) => (
                                    <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="flex justify-between items-center mb-2 gap-4">
                                            <span className="font-black text-white text-sm">{int.farmaco}</span>
                                            <Badge 
                                                variant={int.severidad === 'Grave' || int.severidad === 'Importante' ? 'destructive' : 'secondary'} 
                                                className="text-[9px] uppercase font-black flex-shrink-0"
                                            >
                                                {int.severidad}
                                            </Badge>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed">{int.efecto}</p>
                                    </div>
                                ))}
                             </div>
                        </PinterestCard>
                    </div>
                </div>
              </div>

              <div className="lg:col-span-12 mt-4">
                <PinterestCard className="bg-secondary/40 border-2 border-accent/10">
                    <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                        <Calculator size={32} className="text-accent"/> Protocolos de Dosificación
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(drug.parametros_dosificacion).map(([sp, doses]) => {
                            const spInfo = getSpeciesInfo(sp);
                            if (!spInfo) return null;
                            const theme = spInfo.theme;
                            return (
                            <div key={sp} className={`${theme.bg} ${theme.border} p-6 rounded-4xl relative overflow-hidden transition-all shadow-xl h-fit`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-5xl">{spInfo.icon}</div>
                                    <h4 className={`font-black uppercase text-3xl tracking-tighter ${theme.text}`}>{spInfo.label}</h4>
                                </div>
                                <div className="space-y-4">
                                    {doses.map((d, i) => (
                                        <div key={i} className="bg-background/60 backdrop-blur-md p-5 rounded-3xl border border-white/5 shadow-inner">
                                            <div className="flex justify-between items-start mb-3 gap-2">
                                                <span className={`text-[10px] font-black uppercase tracking-widest flex-1 ${theme.text}`}>{d.indicacion}</span>
                                                <Badge variant="outline" className="text-[9px] uppercase border-white/10 text-slate-400 flex-shrink-0">
                                                    {Array.isArray(d.vias) ? d.vias.join(' / ') : d.vias}
                                                </Badge>
                                            </div>
                                            <p className="text-3xl font-black text-white tracking-tight mb-1">
                                              {d.math.dosis_recomendada} <span className="text-sm text-slate-400">{d.math.unidad_calculo}</span>
                                            </p>
                                            
                                            {(d.math.dosis_min !== undefined || d.math.dosis_max !== undefined) && (
                                                <div className="flex items-center gap-2 text-[10px] text-accent font-black uppercase mb-3 bg-accent/10 px-2 py-1 rounded-md w-fit border border-accent/20">
                                                    <ArrowDownUp size={12} />
                                                    Rango: {d.math.dosis_min ?? '—'} a {d.math.dosis_max ?? '—'}
                                                </div>
                                            )}

                                            {d.frecuencia && (
                                                <div className="flex items-center gap-2 text-white/70 bg-white/5 px-3 py-1.5 rounded-full w-fit">
                                                    <Timer size={12}/>
                                                    <span className="text-[10px] font-black uppercase tracking-widest">{d.frecuencia.texto_ui}</span>
                                                </div>
                                            )}
                                            {d.notas_tecnicas && <p className="text-[11px] text-slate-400 italic mt-4 leading-normal border-t border-white/5 pt-3">{d.notas_tecnicas}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )})}
                    </div>
                </PinterestCard>
              </div>

              <div className="lg:col-span-12">
                  <PinterestCard className="border-blue-500/10">
                      <h3 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                        <FileText size={18} className="text-blue-400" /> Comunicación y Resumen
                      </h3>
                      <ul className="space-y-4">
                          {drug.informacion_cliente.map((info, i) => (
                            <li key={i} className="text-sm text-slate-300 flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 flex-shrink-0">
                                    <FileText size={14} />
                                </div>
                                <span className="leading-normal">{info}</span>
                            </li>
                          ))}
                      </ul>
                  </PinterestCard>
              </div>
          </div>
      </div>
  );
};