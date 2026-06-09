'use client';
import { useParams, useRouter } from 'next/navigation';
import { getBreedById } from '@/lib/breeds';
import { getPathologyById } from '@/lib/pathologies';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, Info, AlertTriangle } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function BreedDetailPage() {
    const params = useParams();
    const router = useRouter();
    const breed = getBreedById(params.id as string);

    if (!breed) notFound();

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
            <button 
                onClick={() => router.back()}
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors font-bold uppercase text-xs tracking-widest"
            >
                <ArrowLeft size={16} /> Volver
            </button>

            <PinterestCard className="border-l-8 border-l-rose-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 grayscale">{breed.icon}</div>
                <div className="relative z-10">
                    <Badge className="bg-rose-500 text-rose-950 font-black mb-4 uppercase">{breed.especie}</Badge>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">{breed.nombre}</h1>
                    <div className="flex items-start gap-4 bg-white/5 p-6 rounded-3xl border border-white/5 max-w-3xl">
                        <Info className="text-rose-400 flex-shrink-0 mt-1" size={24} />
                        <p className="text-slate-300 leading-relaxed">{breed.descripcion}</p>
                    </div>
                </div>
            </PinterestCard>

            <div className="space-y-6">
                <div className="flex items-center gap-3 ml-2">
                    <AlertTriangle className="text-rose-500" size={24} />
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">Predisposiciones Clínicas</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {breed.predisposiciones.map((pred, i) => {
                        const patho = getPathologyById(pred.patologyId);
                        return (
                            <PinterestCard key={i} className="hover:bg-secondary transition-all group border border-white/5">
                                <div className="flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-black text-white group-hover:text-rose-400 transition-colors">{patho?.nombre || 'Patología Desconocida'}</h3>
                                            <Badge variant="outline" className="text-[9px] mt-1 uppercase border-rose-500/30 text-rose-300">{patho?.categoria}</Badge>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-slate-400 mb-6 flex-1 line-clamp-3">
                                        {pred.nota_especifica || patho?.descripcion}
                                    </p>

                                    <Link href={`/vademecum/patologia/${pred.patologyId}`} className="w-full">
                                        <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl h-12 gap-2 shadow-lg shadow-rose-900/20">
                                            Ver Ficha Técnica <ChevronRight size={18} />
                                        </Button>
                                    </Link>
                                </div>
                            </PinterestCard>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}