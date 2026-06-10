'use client';
import Link from 'next/link';
import { 
    ChevronRight, Search, Pill, TriangleAlert, 
    Stethoscope as PathoIcon, GraduationCap, Globe
} from 'lucide-react';
import Image from 'next/image';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { useAppContext } from '@/contexts/app-context';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { fuzzySearch, cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { ALL_BREEDS } from '@/lib/breeds';
import { ALL_PATHOLOGIES } from '@/lib/pathologies';
import { getSpeciesInfo, speciesList, normalizeStr } from '@/lib/config';

export function VademecumList() {
    const [activeTab, setActiveTab] = useState('farmacos');
    const [selectedSpecies, setSelectedSpecies] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');
    const { drugImages } = useAppContext();

    const filteredContent = useMemo(() => {
        const q = searchTerm.toLowerCase();
        const normalizedSelected = normalizeStr(selectedSpecies);
        
        if (activeTab === 'farmacos') {
            return DB_MEDICAMENTOS.filter(d => {
                const matchesSpecies = selectedSpecies === 'Todos' || (d.parametros_dosificacion[normalizedSelected] && d.parametros_dosificacion[normalizedSelected].length > 0);
                if (!matchesSpecies) return false;
                if (!q) return true;
                return fuzzySearch(q, d.meta_data.nombre_generico) || 
                       (d.meta_data.grupo_farmacologico || '').toLowerCase().includes(q);
            });
        }
        
        if (activeTab === 'predisposicion') {
            return ALL_BREEDS.filter(b => {
                const matchesSpecies = selectedSpecies === 'Todos' || normalizeStr(b.especie) === normalizedSelected;
                if (!matchesSpecies) return false;
                if (!q) return true;
                return fuzzySearch(q, b.nombre);
            });
        }

        if (activeTab === 'patologias') {
            return ALL_PATHOLOGIES.filter(p => {
                const matchesSpecies = selectedSpecies === 'Todos' || p.especies_afectadas.some(s => normalizeStr(s) === normalizedSelected);
                if (!matchesSpecies) return false;
                if (!q) return true;
                return fuzzySearch(q, p.nombre) || p.categoria?.toLowerCase().includes(q);
            });
        }

        return [];
    }, [activeTab, selectedSpecies, searchTerm]);

    return (
        <div className="animate-in fade-in duration-500 space-y-10">
            <PinterestCard className="!p-4">
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                    <button 
                        onClick={() => setSelectedSpecies('Todos')}
                        className={cn(
                            "flex flex-col items-center justify-center gap-1 p-2 rounded-2xl transition-all duration-200 border-2",
                            selectedSpecies === 'Todos' ? 'bg-primary/10 border-primary scale-105 shadow-md' : 'border-transparent hover:bg-secondary'
                        )}
                    >
                        <div className="text-2xl sm:text-3xl"><Globe/></div>
                        <span className={cn("text-[8px] font-bold uppercase tracking-wider text-center", selectedSpecies === 'Todos' ? 'text-primary' : 'text-muted-foreground')}>Todos</span>
                    </button>
                    {speciesList.map(key => {
                        const info = getSpeciesInfo(key);
                        if (!info) return null;
                        const isActive = selectedSpecies === info.label;
                        return (
                            <button 
                                key={key}
                                onClick={() => setSelectedSpecies(info.label)}
                                className={cn(
                                    "flex flex-col items-center justify-center gap-1 p-2 rounded-2xl transition-all duration-200 border-2",
                                    isActive ? 'bg-primary/10 border-primary scale-105 shadow-md' : 'border-transparent hover:bg-secondary'
                                )}
                            >
                                <div className="text-2xl sm:text-3xl">{info.icon}</div>
                                <span className={cn("text-[8px] font-bold uppercase tracking-wider text-center", isActive ? 'text-primary' : 'text-muted-foreground')}>{info.label}</span>
                            </button>
                        )
                    })}
                </div>
            </PinterestCard>

            <div className="flex items-center gap-4 bg-card/50 p-2 rounded-full w-full md:w-fit border border-white/5 mx-auto md:mx-0 overflow-x-auto">
                 <button
                    onClick={() => { setActiveTab('farmacos'); setSearchTerm(''); }}
                    className={cn(
                        'px-6 md:px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 whitespace-nowrap',
                        activeTab === 'farmacos' 
                            ? 'bg-emerald-500 text-emerald-950 shadow-lg' 
                            : 'text-muted-foreground hover:text-white'
                    )}
                >
                    <Pill size={16} /> Fármacos
                </button>
                <button
                    onClick={() => { setActiveTab('predisposicion'); setSearchTerm(''); }}
                    className={cn(
                        'px-6 md:px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 whitespace-nowrap',
                        activeTab === 'predisposicion' 
                            ? 'bg-rose-500 text-rose-950 shadow-lg' 
                            : 'text-muted-foreground hover:text-white'
                    )}
                >
                    <GraduationCap size={16} /> Predisposición
                </button>
                <button
                    onClick={() => { setActiveTab('patologias'); setSearchTerm(''); }}
                    className={cn(
                        'px-6 md:px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 whitespace-nowrap',
                        activeTab === 'patologias' 
                            ? 'bg-amber-500 text-amber-950 shadow-lg' 
                            : 'text-muted-foreground hover:text-white'
                    )}
                >
                    <PathoIcon size={16} /> Patologías
                </button>
            </div>

            <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={24} />
                <Input
                    type="text"
                    placeholder={`Buscar en ${activeTab === 'farmacos' ? 'fármacos' : activeTab === 'predisposicion' ? 'razas' : 'patologías'}...`}
                    className="w-full rounded-4xl bg-card p-6 pl-16 text-lg font-bold text-white border-2 border-border focus:border-primary/50 transition-all h-16"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeTab === 'farmacos' && filteredContent.map((drug: any) => (
                    <Link key={drug.id} href={`/vademecum/${drug.id}`}>
                        <PinterestCard className="hover:bg-secondary cursor-pointer group transition-all hover:border-emerald-500/30 h-full border-l-4 border-l-emerald-500">
                            <div className="flex justify-between items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                                        {drugImages[drug.id] ? <Image src={drugImages[drug.id]} alt="" fill className="object-cover" /> : <Pill className="text-emerald-500/50" />}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">{drug.meta_data.nombre_generico}</h3>
                                        <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{(drug.meta_data.grupo_farmacologico || 'N/A').split(',')[0]}</p>
                                    </div>
                                </div>
                                <ChevronRight size={20} className="text-muted-foreground group-hover:text-white" />
                            </div>
                        </PinterestCard>
                    </Link>
                ))}

                {activeTab === 'predisposicion' && filteredContent.map((breed: any) => (
                    <Link key={breed.id} href={`/vademecum/raza/${breed.id}`}>
                        <PinterestCard className="hover:bg-secondary cursor-pointer group transition-all hover:border-rose-500/30 h-full border-l-4 border-l-rose-500">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl">{breed.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-black text-white group-hover:text-rose-400 transition-colors">{breed.nombre}</h3>
                                        <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{breed.especie}</p>
                                    </div>
                                </div>
                                <ChevronRight size={20} className="text-muted-foreground group-hover:text-white" />
                            </div>
                        </PinterestCard>
                    </Link>
                ))}

                {activeTab === 'patologias' && filteredContent.map((patho: any) => (
                    <Link key={patho.id} href={`/vademecum/patologia/${patho.id}`}>
                        <PinterestCard className="hover:bg-secondary cursor-pointer group transition-all hover:border-amber-500/30 h-full border-l-4 border-l-amber-500">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-amber-500/10 rounded-2xl">
                                        <PathoIcon className="text-amber-500" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors leading-tight">{patho.nombre}</h3>
                                        <Badge variant="outline" className="text-[8px] uppercase mt-1">{patho.categoria}</Badge>
                                    </div>
                                </div>
                                <ChevronRight size={20} className="text-muted-foreground group-hover:text-white" />
                            </div>
                        </PinterestCard>
                    </Link>
                ))}
            </div>

            {filteredContent.length === 0 && (
                <div className="text-center py-20 bg-card/20 rounded-4xl border border-dashed border-border">
                    <TriangleAlert className="mx-auto text-muted-foreground mb-4" size={48} />
                    <p className="text-muted-foreground font-bold">No se encontraron resultados en esta categoría para {selectedSpecies}.</p>
                </div>
            )}
        </div>
    );
}