'use client';
import { useEffect } from 'react';

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0b111e] flex flex-col items-center justify-center animate-in fade-in duration-700 font-sans overflow-hidden">
      {/* Fondo con resplandores sutiles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative w-48 h-48 mb-12 flex items-center justify-center">
        {/* Logo Moderno Geométrico en Rojo */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10 drop-shadow-[0_0_30px_rgba(220,38,38,0.3)] animate-in zoom-in-50 duration-1000"
        >
          <defs>
            <linearGradient id="red-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
          </defs>

          {/* Escudo Clínico */}
          <path
            d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z"
            fill="none"
            stroke="url(#red-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-40"
          />

          {/* Huella Geométrica con Cruz Médica Integrada */}
          <g className="animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            {/* Almohadillas superiores */}
            <circle cx="32" cy="38" r="7" fill="url(#red-gradient)" />
            <circle cx="50" cy="30" r="7" fill="url(#red-gradient)" />
            <circle cx="68" cy="38" r="7" fill="url(#red-gradient)" />

            {/* Almohadilla principal (Metacarpal) */}
            <path
              d="M50 48 C35 48 25 60 25 72 C25 85 35 93 50 93 C65 93 75 85 75 72 C75 60 65 48 50 48 Z"
              fill="url(#red-gradient)"
            />

            {/* Cruz Médica (Espacio Negativo) */}
            <rect x="48" y="62" width="4" height="20" rx="1" fill="#0b111e" />
            <rect x="40" y="70" width="20" height="4" rx="1" fill="#0b111e" />
          </g>
        </svg>

        {/* Anillo Orbital de Carga */}
        <div className="absolute inset-0 border-2 border-red-500/10 rounded-full animate-[spin_10s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full shadow-[0_0_15px_#ef4444]"></div>
        </div>
      </div>

      <div className="text-center space-y-3 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase flex items-baseline justify-center gap-2 drop-shadow-sm">
          <span className="text-white">DOSIS</span>
          <span className="text-red-600">
            PERRONAS
          </span>
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-red-900/50"></div>
          <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
            By: Arturo Alvarado
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-red-900/50"></div>
        </div>
      </div>
    </div>
  );
}
