'use client';
import { useEffect } from 'react';

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0b111e] flex flex-col items-center justify-center animate-in fade-in duration-700 font-sans overflow-hidden">
      {/* Background Glows for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 blur-[80px] rounded-full pointer-events-none delay-700"></div>

      <div className="relative w-48 h-48 mb-12 flex items-center justify-center">
        {/* Animated Modern Logo */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10 drop-shadow-[0_0_30px_rgba(168,85,247,0.2)] animate-in zoom-in-50 duration-1000"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Clinical Shield Border */}
          <path
            d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z"
            fill="none"
            stroke="url(#logo-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-40"
          />

          {/* Geometric Paw with Integrated Medical Cross */}
          <g className="animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            {/* Toe Pads */}
            <circle cx="32" cy="38" r="7" fill="url(#logo-gradient)" />
            <circle cx="50" cy="30" r="7" fill="url(#logo-gradient)" />
            <circle cx="68" cy="38" r="7" fill="url(#logo-gradient)" />

            {/* Main Pad with Cross Cutout */}
            <path
              d="M50 48 C35 48 25 60 25 72 C25 85 35 93 50 93 C65 93 75 85 75 72 C75 60 65 48 50 48 Z"
              fill="url(#logo-gradient)"
            />

            {/* Medical Cross (Negative Space) */}
            <rect x="48.5" y="60" width="3" height="24" rx="1.5" fill="#0b111e" />
            <rect x="38" y="70.5" width="24" height="3" rx="1.5" fill="#0b111e" />
          </g>
        </svg>

        {/* Outer Orbital Ring */}
        <div className="absolute inset-0 border-2 border-primary/10 rounded-full animate-[spin_10s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_hsl(var(--accent))]"></div>
        </div>
      </div>

      <div className="text-center space-y-3 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase flex items-baseline justify-center gap-2 drop-shadow-sm">
          <span className="text-white">DOSIS</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            PERRONAS
          </span>
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-slate-700"></div>
          <p className="text-slate-400 text-xs md:text-sm font-black uppercase tracking-[0.5em] translate-x-[0.25em]">
            V 2.0 CLINICAL SUITE
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-slate-700"></div>
        </div>
      </div>
    </div>
  );
}
