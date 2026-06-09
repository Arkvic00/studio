'use client';
import Link from 'next/link';
import { 
    ChevronRight, Plus, Search, BookOpen, HeartPulse, Info, 
    Stethoscope, Shield, Pill, TriangleAlert, Bone, Eye, Zap, Activity
} from 'lucide-react';
import Image from 'next/image';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { useAppContext } from '@/contexts/app-context';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { fuzzySearch, cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { Skeleton } from '../ui/skeleton';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { BREED_PREDISPOSITIONS } from '@/lib/predispositions';
import type { BreedPredisposition } from '@/lib/types';

// Sub-component for Fármacos list
function DrugList() {
    const { drugImages, triggerUpload } = useAppContext();
    const [searchTerm, setSearchTerm] = useState('');
    const allDrugs = DB_MEDICAMENTOS;
    const isLoading = !allDrugs;

    const filteredDrugs = useMemo(() => {
        if (!allDrugs) return [];
        if (!searchTerm.trim()) {
            return allDrugs;
        }

        return allDrugs.filter(drug => {
            const q = searchTerm.toLowerCase();
            const matchName = fuzzySearch(searchTerm, drug.meta_data.nombre_generico);
            const matchCommercial = drug.meta_data.nombres_comerciales.some(n => fuzzySearch(searchTerm, n));
            const matchFamily = drug.meta_data.grupo_farmacologico.toLowerCase().includes(q);
            
            const matchUse = Object.values(drug.parametros_dosificacion || {})
                .flat()
                .some((d: any) => d.indicacion.toLowerCase().includes(q));

            return matchName || matchCommercial || matchFamily || matchUse;
        });
    }, [searchTerm, allDrugs]);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative mb-8">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={24} />
                <Input
                    type="text"
                    placeholder="Buscar fármaco por nombre, uso, grupo..."
                    className="w-full rounded-full bg-card p-6 pl-16 text-lg font-bold text-white border-2 border-border focus:border-emerald-500/50 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            {isLoading && (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({length: 6}).map((_, i) => (
                        <PinterestCard key={i} className="h-full">
                            <div className="flex items-center gap-4">
                                <Skeleton className="w-16 h-16 rounded-2xl flex-shrink-0" />
                                <div className="space-y-2">
                                    <Skeleton className="h-6 w-40" />
                                    <Skeleton className="h-4 w-24" />
                                </div>
                            </div>
                        </PinterestCard>
                    ))}
                 </div>
            )}

            {!isLoading && allDrugs && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDrugs.map(drug => (
                        <Link key={drug.id} href={`/vademecum/${drug.id}`} passHref>
                            <PinterestCard className="hover:bg-secondary cursor-pointer group transition-all hover:border-emerald-500/30 h-full">
                                <div className="flex justify-between items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <button 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                triggerUpload(e, drug.id)
                                            }}
                                            className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all flex-shrink-0 overflow-hidden relative group/img"
                                        >
                                            {drugImages[drug.id] ? (
                                                <Image src={drugImages[drug.id]} alt={drug.meta_data.nombre_generico} fill className="object-cover" />
                                            ) : (
                                                <Plus size={24} className="group-hover/img:scale-110 transition-transform" />
                                            )}
                                        </button>
                                        
                                        <div>
                                            <h3 className="text-2xl font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">{drug.meta_data.nombre_generico}</h3>
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{drug.meta_data.grupo_farmacologico.split(',')[0]}</p>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-card rounded-full group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-all text-muted-foreground"><ChevronRight size={20} /></div>
                                </div>
                            </PinterestCard>
                        </Link>
                    ))}
                    {filteredDrugs.length === 0 && (
                        <div className="md:col-span-2 lg:col-span-3 text-center py-20">
                            <p className="text-muted-foreground font-bold">No se encontraron fármacos para "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

// Sub-component for Predisposición view
function PredisposicionList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBreed, setSelectedBreed] = useState<BreedPredisposition | null>(null);

    const filteredBreeds = useMemo(() => {
        if (!searchTerm.trim()) return BREED_PREDISPOSITIONS;
        return BREED_PREDISPOSITIONS.filter(b => 
            fuzzySearch(searchTerm, b.breed) || b.species.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const getIcon = (type: string) => {
        switch (type) {
            case 'Ortopédico': return <Bone size={16} className="text-orange-400" />;
            case 'Cardíaco': return <HeartPulse size={16} className="text-red-400" />;
            case 'Ocular': return <Eye size={16} className="text-blue-400" />;
            case 'Endocrino': return <Zap size={16} className="text-yellow-400" />;
            case 'Dermatológico': return <Shield size={16} className="text-purple-400" />;
            case 'Neurológico': return <Activity size={16} className="text-pink-400" />;
            default: return <Info size={16} className="text-slate-400" />;
        }
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
            <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={24} />
                <Input
                    type="text"
                    placeholder="Buscar raza (Ej: Pastor Alemán, Siamés...)"
                    className="w-full rounded-full bg-card p-6 pl-16 text-lg font-bold text-white border-2 border-border focus:border-rose-500/50 transition-all"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setSelectedBreed(null);
                    }}
                />
            </div>

            {selectedBreed ? (
                <div className="space-y-6 animate-in zoom-in-95 duration-300">
                    <PinterestCard className="border-l-8 border-l-rose-500">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="text-7xl">{selectedBreed.icon}</div>
                            <div>
                                <Badge variant="secondary" className="mb-2">{selectedBreed.species}</Badge>
                                <h2 className="text-5xl font-black text-white tracking-tighter">{selectedBreed.breed}</h2>
                                <p className="text-muted-foreground font-medium">Predisposiciones Genéticas y Clínicas</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedBreed.conditions.map((cond, i) => (
                                <div key={i} className="bg-background/40 border border-border p-5 rounded-3xl hover:bg-background/60 transition-all">
                                    <div className="flex justify-between items-center mb-3">
                                        <h4 className="font-bold text-white text-lg">{cond.name}</h4>
                                        <Badge variant="outline" className="flex items-center gap-2">
                                            {getIcon(cond.type)} {cond.type}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-slate-300 leading-relaxed">{cond.description}</p>
                                </div>
                            ))}
                        </div>
                        <button 
                            onClick={() => setSelectedBreed(null)}
                            className="mt-8 text-sm font-black text-rose-400 uppercase tracking-widest hover:text-white transition-colors"
                        >
                            ← Volver al listado
                        </button>
                    </PinterestCard>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBreeds.map(item => (
                        <PinterestCard 
                            key={item.id} 
                            onClick={() => setSelectedBreed(item)}
                            className="hover:bg-secondary cursor-pointer group transition-all hover:border-rose-500/30"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-black text-white group-hover:text-rose-400 transition-colors">{item.breed}</h3>
                                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{item.species}</p>
                                    </div>
                                </div>
                                <div className="p-2 bg-card rounded-full group-hover:bg-rose-500 group-hover:text-rose-950 transition-all text-muted-foreground">
                                    <ChevronRight size={18} />
                                </div>
                            </div>
                        </PinterestCard>
                    ))}
                    {filteredBreeds.length === 0 && (
                        <div className="md:col-span-2 lg:col-span-3 text-center py-20">
                            <p className="text-muted-foreground font-bold">No se encontraron resultados para "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

// Main Vademecum view with tabs
export function VademecumList() {
    const [activeTab, setActiveTab] = useState('farmacos');

    return (
        <div className="animate-in fade-in duration-500">
             <div className="flex items-center gap-4 mb-10 bg-card/50 p-2 rounded-full w-fit border border-white/5 mx-auto md:mx-0">
                 <button
                    onClick={() => setActiveTab('farmacos')}
                    className={cn(
                        'px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all',
                        activeTab === 'farmacos' 
                            ? 'bg-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/20' 
                            : 'text-muted-foreground hover:text-white'
                    )}
                >
                    Fármacos
                </button>
                <button
                    onClick={() => setActiveTab('predisposicion')}
                    className={cn(
                        'px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all',
                        activeTab === 'predisposicion' 
                            ? 'bg-rose-500 text-rose-950 shadow-lg shadow-rose-500/20' 
                            : 'text-muted-foreground hover:text-white'
                    )}
                >
                    Predisposición
                </button>
            </div>

            {activeTab === 'farmacos' ? <DrugList /> : <PredisposicionList />}
        </div>
    );
}
