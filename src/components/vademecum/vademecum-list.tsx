
'use client';
import Link from 'next/link';
import { ChevronRight, Plus } from 'lucide-react';
import Image from 'next/image';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { useAppContext } from '@/contexts/app-context';

export function VademecumList() {
    const { drugImages, triggerUpload } = useAppContext();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
        {DB_MEDICAMENTOS.map(drug => (
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
      </div>
    )
}
