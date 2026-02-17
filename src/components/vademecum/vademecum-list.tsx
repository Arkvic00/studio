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

export function VademecumList() {
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
        <div className="animate-in fade-in duration-500">
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
        </div>
    );
}
