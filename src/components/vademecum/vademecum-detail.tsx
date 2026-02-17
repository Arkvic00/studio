'use client';
import { useState, useMemo } from 'react';
import { Zap, AlertOctagon, Shield, Calculator, FileText, GitCompareArrows, Search } from 'lucide-react';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { Badge } from '@/components/ui/badge';
import { getSpeciesInfo } from '@/lib/config';
import type { Drug } from '@/lib/types';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { fuzzySearch } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';

// New Component for the search/comparison modal
function DrugCompareModal({ currentDrugId }: { currentDrugId: string }) {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDrugs = useMemo(() => {
        // Exclude the current drug from the list and filter by search term
        const otherDrugs = DB_MEDICAMENTOS.filter(d => d.id !== currentDrugId);

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
    }, [searchTerm, currentDrugId]);

    // For now, selecting a drug will just close the modal.
    // The next step is to build the comparison view.
    const handleSelectDrug = (drug: Drug) => {
        console.log("Compare", currentDrugId, "with", drug.id);
        setOpen(false); 
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                    <GitCompareArrows size={20} className="mr-2"/>
                    Comparar Fármaco
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl bg-popover p-0">
                <DialogHeader className="p-6 pb-4">
                    <DialogTitle>Comparar con...</DialogTitle>
                </DialogHeader>
                <div className="px-6 pb-6 border-b border-border">
                     <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                        <Input
                            type="text"
                            placeholder="Buscar otro fármaco..."
                            className="w-full bg-background pl-12"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <ScrollArea className="max-h-[60vh]">
                    <div className="p-6 pt-0">
                    {filteredDrugs.map((drug) => (
                        <div
                            key={drug.id}
                            onClick={() => handleSelectDrug(drug)}
                            className="p-4 -mx-4 rounded-lg hover:bg-secondary cursor-pointer border-b border-transparent last:border-0 transition-colors group"
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
                    {filteredDrugs.length === 0 && (
                        <div className="text-center py-10 text-muted-foreground text-sm">
                            No se encontraron fármacos.
                        </div>
                    )}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}

export function VademecumDetail({ drug }: { drug: Drug }) {

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-12">
                  <PinterestCard className="relative overflow-hidden border-l-8 border-l-accent">
                      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-8">
                          <div>
                              <div className="flex flex-wrap gap-3 mb-4">
                                  <Badge variant="secondary">{drug.meta_data.grupo_farmacologico}</Badge>
                                  <Badge variant="outline">{drug.meta_data.status_regulatorio}</Badge>
                              </div>
                              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter">{drug.meta_data.nombre_generico}</h1>
                              <p className="text-lg text-muted-foreground font-medium italic">{drug.meta_data.nombres_comerciales.join(" • ")}</p>
                          </div>
                           <DrugCompareModal currentDrugId={drug.id} />
                      </div>
                  </PinterestCard>
              </div>

              <div className="lg:col-span-12 mt-8">
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Detalles Técnicos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <PinterestCard>
                            <h3 className="text-sm font-black text-accent uppercase tracking-widest mb-4 flex items-center gap-2"><Zap size={16} className="text-accent"/> Farmacología</h3>
                            <p className="text-sm text-slate-300 mb-4">{drug.farmacologia_clinica.mecanismo_accion}</p>
                            {drug.farmacologia_clinica.farmacocinetica.datos_especie && Object.entries(drug.farmacologia_clinica.farmacocinetica.datos_especie).map(([esp, data]) => (
                                <div key={esp} className="mb-2 bg-white/5 p-3 rounded-lg">
                                    <p className="text-xs font-bold text-white capitalize mb-1">{esp}:</p>
                                    <p className="text-xs text-slate-300">{data as string}</p>
                                </div>
                            ))}
                        </PinterestCard>
                        
                        <PinterestCard>
                            <h3 className="text-sm font-black text-pink-400 uppercase tracking-widest mb-4 flex items-center gap-2"><AlertOctagon size={16} className="text-pink-400"/> Sobredosis</h3>
                            <p className="text-sm text-slate-300 mb-2"><strong>Signos:</strong> {drug.seguridad_y_alertas.sobredosis.signos.join(", ")}</p>
                            <p className="text-sm text-slate-300 mb-2"><strong>Tratamiento:</strong> {drug.seguridad_y_alertas.sobredosis.tratamiento}</p>
                            {drug.seguridad_y_alertas.sobredosis.contraindicado_en_urgencia.length > 0 && (
                                <p className="text-xs font-bold text-red-400 mt-2">⛔ PROHIBIDO: {drug.seguridad_y_alertas.sobredosis.contraindicado_en_urgencia.join(", ")}</p>
                            )}
                        </PinterestCard>
                    </div>

                    <div className="space-y-6">
                        <PinterestCard>
                            <h3 className="text-sm font-black text-orange-400 uppercase tracking-widest mb-4 flex items-center gap-2"><AlertOctagon size={16} className="text-orange-400"/> Precauciones y Adversos</h3>
                            <div className="mb-4">
                                <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Precauciones</p>
                                <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
                                    {drug.seguridad_y_alertas.precauciones.map((p,i) => <li key={i}>{p}</li>)}
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Efectos Adversos</p>
                                <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
                                    {drug.seguridad_y_alertas.efectos_adversos.map((e,i) => <li key={i}>{e}</li>)}
                                </ul>
                            </div>
                        </PinterestCard>

                        <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-4xl">
                            <h3 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Shield size={16} className="text-blue-400"/> Reproducción</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div><p className="text-xs text-blue-300 font-bold">Gestación</p><p className="text-xs text-slate-400">{drug.seguridad_y_alertas.seguridad_reproductiva.gestacion}</p></div>
                                <div><p className="text-xs text-blue-300 font-bold">Lactancia</p><p className="text-xs text-slate-400">{drug.seguridad_y_alertas.seguridad_reproductiva.lactancia}</p></div>
                            </div>
                        </div>

                        <PinterestCard><h3 className="text-sm font-black text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2"><AlertOctagon size={16} className="text-yellow-400"/> Interacciones</h3>
                             <ul className="space-y-2">
                                {drug.seguridad_y_alertas.interacciones_farmacologicas.map((int, i) => (
                                    <li key={i} className="text-xs bg-white/5 p-2 rounded-lg">
                                        <div className="flex justify-between mb-1"><span className="font-bold text-white">{int.farmaco}</span>
                                        <Badge variant={int.severidad === 'Grave' || int.severidad === 'Importante' ? 'destructive' : 'secondary'} className="text-[9px]">{int.severidad}</Badge>
                                        </div>
                                        <span className="text-slate-400">{int.efecto}</span>
                                    </li>
                                ))}
                             </ul>
                        </PinterestCard>
                    </div>
                </div>
              </div>

              <div className="lg:col-span-12 mt-8">
                <PinterestCard className="bg-secondary border-2 border-accent/20">
                    <h3 className="text-xl font-black text-white mb-8 flex items-center gap-2"><Calculator size={24} className="text-accent"/> Dosis y Protocolos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(drug.parametros_dosificacion).map(([sp, doses]) => {
                            const spInfo = getSpeciesInfo(sp);
                            if (!spInfo) return null;
                            const theme = spInfo.theme;
                            return (
                            <div key={sp} className={`${theme.bg} ${theme.border} p-6 rounded-4xl relative overflow-hidden transition-all hover:scale-[1.01] shadow-lg ${theme.decoration}`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-4xl">{spInfo.icon}</div>
                                    <h4 className={`font-black capitalize text-3xl ${theme.text}`}>{spInfo.label}</h4>
                                </div>
                                <div className="space-y-4">
                                    {doses.map((d, i) => (
                                        <div key={i} className="bg-background/40 backdrop-blur-sm p-5 rounded-2xl border border-white/5 hover:bg-background/60 transition-all">
                                            <div className="flex justify-between mb-2"><span className={`text-xs font-bold uppercase ${theme.text}`}>{d.indicacion}</span><Badge variant="outline">{Array.isArray(d.vias) ? d.vias.join('/') : d.vias}</Badge></div>
                                            <p className="text-2xl font-black text-white">
                                              {d.math.tipo_calculo === 'fija' 
                                                ? `${d.math.dosis_recomendada} ${d.math.unidad_calculo}` 
                                                : `${d.math.dosis_recomendada} ${d.math.unidad_calculo}`}
                                            </p>
                                            {d.math.dosis_min && <p className="text-xs text-muted-foreground font-bold mb-2">Rango: {d.math.dosis_min} - {d.math.dosis_max}</p>}
                                            {d.frecuencia && <p className="text-xs text-accent font-bold mt-1 uppercase tracking-wider">{d.frecuencia.texto_ui}</p>}
                                            {d.notas_tecnicas && <p className="text-xs text-slate-400 italic mt-2">{d.notas_tecnicas}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )})}
                    </div>
                </PinterestCard>
              </div>
              
              <div className="lg:col-span-12">
                  <PinterestCard>
                      <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2"><FileText size={16} className="text-slate-400" /> Información para el Cliente</h3>
                      <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm">
                          {drug.informacion_cliente.map((info, i) => <li key={i}>{info}</li>)}
                      </ul>
                  </PinterestCard>
              </div>
          </div>
      </div>
  );
};
