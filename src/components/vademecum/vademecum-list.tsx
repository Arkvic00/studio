'use client';
import Link from 'next/link';
import { ChevronRight, Plus, Search } from 'lucide-react';
import Image from 'next/image';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { useAppContext } from '@/contexts/app-context';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { fuzzySearch } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { SPECIES_CONFIG } from '@/lib/config';

// Sub-component for Fármacos list
function DrugList() {
    const { drugImages, triggerUpload } = useAppContext();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDrugs = useMemo(() => {
        if (!searchTerm.trim()) {
            return DB_MEDICAMENTOS;
        }

        return DB_MEDICAMENTOS.filter(drug => {
            const q = searchTerm.toLowerCase();
            const matchName = fuzzySearch(searchTerm, drug.meta_data.nombre_generico);
            const matchCommercial = drug.meta_data.nombres_comerciales.some(n => fuzzySearch(searchTerm, n));
            const matchFamily = drug.meta_data.grupo_farmacologico.toLowerCase().includes(q);
            
            const matchUse = Object.values(drug.parametros_dosificacion)
                .flat()
                .some(d => d.indicacion.toLowerCase().includes(q));

            return matchName || matchCommercial || matchFamily || matchUse;
        });
    }, [searchTerm]);

    return (
        <>
            <div className="relative mb-8">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={24} />
                <Input
                    type="text"
                    placeholder="Buscar fármaco por nombre, uso, grupo..."
                    className="w-full rounded-full bg-card p-6 pl-16 text-lg font-bold text-white border-2 border-border focus:border-primary transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDrugs.map(drug => (
                    <Link key={drug.id} href={`/vademecum/${drug.id}`} passHref>
                        <PinterestCard className="hover:bg-secondary cursor-pointer group transition-all hover:border-accent/30 h-full">
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
                                        <h3 className="text-2xl font-black text-white mb-1 group-hover:text-accent transition-colors">{drug.meta_data.nombre_generico}</h3>
                                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{drug.meta_data.grupo_farmacologico.split(',')[0]}</p>
                                    </div>
                                </div>
                                <div className="p-3 bg-card rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-all text-muted-foreground"><ChevronRight size={20} /></div>
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
        </>
    );
}

// Sub-component for Exotics list
const exoticSpeciesOrder = [
    'roedores', 'conejo', 'mustelidos', 'cobaya', 'erizo', 
    'ave', 'reptil', 'peces', 'primates', 'axolote'
];
const exoticSpecies = exoticSpeciesOrder.map(key => ({
    key,
    ...SPECIES_CONFIG[key]
}));

function ExoticsList() {
    return (
        <PinterestCard>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 text-center">
                {exoticSpecies.map((species, index) => {
                    if (!species.label) return null;
                    const isSelected = index === 0; // Highlight the first one as per screenshot
                    return (
                        <Link 
                            href={`/vademecum/exoticos/${species.key}`} 
                            key={species.key}
                            className={cn(
                                "flex flex-col items-center justify-start gap-2 p-3 rounded-2xl transition-all duration-200",
                                isSelected ? 'ring-2 ring-destructive' : 'hover:bg-secondary'
                            )}
                        >
                            <div className="text-4xl md:text-5xl flex-grow flex items-center">{species.icon}</div>
                            <span className={cn(
                                "text-[10px] font-bold uppercase tracking-wider min-h-[20px]",
                                isSelected ? 'text-destructive' : 'text-muted-foreground'
                            )}>{species.label}</span>
                        </Link>
                    )
                })}
            </div>
        </PinterestCard>
    );
}

// Main Vademecum view with tabs
export function VademecumList() {
    const [activeTab, setActiveTab] = useState('farmacos');

    return (
        <div className="animate-in fade-in duration-500">
             <div className="flex items-center gap-2 mb-8">
                 <button
                    onClick={() => setActiveTab('farmacos')}
                    className={cn(
                        'px-6 py-2 rounded-full text-base font-bold transition-all',
                        activeTab === 'farmacos' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-white'
                    )}
                >
                    Fármacos
                </button>
                <button
                    onClick={() => setActiveTab('exoticos')}
                    className={cn(
                        'px-6 py-2 rounded-full text-base font-bold transition-all',
                        activeTab === 'exoticos' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-white'
                    )}
                >
                    Exóticos
                </button>
            </div>

            {activeTab === 'farmacos' ? <DrugList /> : <ExoticsList />}
        </div>
    );
}
