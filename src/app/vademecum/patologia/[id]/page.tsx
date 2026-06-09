'use client';
import { useParams, useRouter } from 'next/navigation';
import { getPathologyById } from '@/lib/pathologies';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowLeft, Bug, Activity, Stethoscope, Pill, ShieldCheck, 
    Users, AlertCircle, ImageIcon
} from 'lucide-react';
import { notFound } from 'next/navigation';

export default function PathologyDetailPage() {
    const params = useParams();
    const router = useRouter();
    const patho = getPathologyById(params.id as string);

    if (!patho) notFound();

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
            <button 
                onClick={() => router.back()}
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors font-bold uppercase text-xs tracking-widest"
            >
                <ArrowLeft size={16} /> Volver
            </button>

            <PinterestCard className="border-l-8 border-l-amber-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Stethoscope size={120} />
                </div>
                <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-amber-500 text-amber-950 font-black">{patho.categoria}</Badge>
                        {patho.especies_afectadas.map(s => (
                            <Badge key={s} variant="outline" className="border-amber-500/50 text-amber-500">{s}</Badge>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">{patho.nombre}</h1>
                    <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">{patho.descripcion}</p>
                </div>
            </PinterestCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PinterestCard>
                    <h3 className="text-sm font-black text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Bug size={18} /> Etiología / Origen
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed bg-white/5 p-4 rounded-2xl">{patho.etiology}</p>
                </PinterestCard>

                <PinterestCard>
                    <h3 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Activity size={18} /> Signos Clínicos
                    </h3>
                    <ul className="space-y-2">
                        {patho.sintomas.map((s, i) => (
                            <li key={i} className="text-sm text-slate-300 flex items-start gap-3 bg-blue-500/5 p-3 rounded-xl">
                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                {s}
                            </li>
                        ))}
                    </ul>
                </PinterestCard>

                <PinterestCard>
                    <h3 className="text-sm font-black text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Stethoscope size={18} /> Métodos de Diagnóstico
                    </h3>
                    <ul className="space-y-2">
                        {patho.diagnostico.map((d, i) => (
                            <li key={i} className="text-sm text-slate-300 flex items-start gap-3 bg-purple-500/5 p-3 rounded-xl">
                                <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                                {d}
                            </li>
                        ))}
                    </ul>
                </PinterestCard>

                <PinterestCard className="border-emerald-500/20">
                    <h3 className="text-sm font-black text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Pill size={18} /> Tratamiento Sugerido
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10">
                        {patho.tratamiento}
                    </p>
                </PinterestCard>
            </div>

            <PinterestCard className="bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border-indigo-500/20">
                <h3 className="text-sm font-black text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <ShieldCheck size={18} /> Prevención y Control
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{patho.prevencion_control}</p>
            </PinterestCard>

            <PinterestCard className="border-dashed border-2 border-border flex flex-col items-center justify-center py-12 gap-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-muted-foreground">
                    <ImageIcon size={32} />
                </div>
                <div className="text-center">
                    <p className="font-bold text-white">Galería de Imágenes</p>
                    <p className="text-xs text-muted-foreground">Próximamente: Atlas visual de patologías</p>
                </div>
            </PinterestCard>
        </div>
    );
}