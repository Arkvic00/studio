
'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export function VademecumDetailHeader() {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto mb-10">
      <button 
        onClick={() => router.push('/vademecum')}
        className="flex items-center gap-3 px-6 py-3 bg-secondary/80 backdrop-blur-xl border border-border rounded-full text-muted-foreground hover:text-white hover:bg-accent hover:border-accent/50 transition-all shadow-xl group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/>
        <span className="text-xs font-black uppercase tracking-widest">Regresar al Vademécum</span>
      </button>
    </div>
  );
}
