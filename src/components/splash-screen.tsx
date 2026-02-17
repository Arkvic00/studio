
'use client';
import { useEffect } from 'react';

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center animate-in fade-in duration-500">
      <div className="relative w-32 h-64 mb-8">
        <svg
          viewBox="0 0 100 200"
          className="w-full h-full drop-shadow-[0_0_30px_hsl(var(--destructive)_/_0.3)]"
        >
          <rect
            x="30"
            y="40"
            width="40"
            height="120"
            rx="4"
            fill="none"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="4"
          />
          <line
            x1="15"
            y1="40"
            x2="85"
            y2="40"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="160"
            x2="50"
            y2="190"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="3"
          />
          <rect
            x="34"
            y="44"
            width="32"
            height="112"
            fill="hsl(var(--destructive))"
            className="origin-bottom animate-syringe-fill"
          />
        </svg>
      </div>
      <h1 className="text-6xl font-extrabold text-white tracking-tighter mb-2">
        DOSIS <span className="text-destructive">PERRONAS</span>
      </h1>
      <p className="text-slate-400 text-xl font-bold uppercase tracking-[0.2em]">
        By: Arturo Alvarado
      </p>
    </div>
  );
}
