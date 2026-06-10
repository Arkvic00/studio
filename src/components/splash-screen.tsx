'use client';
import { useEffect } from 'react';

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0b111e] flex flex-col items-center justify-center animate-in fade-in duration-700 font-sans">
      <div className="relative w-32 h-64 mb-12 flex items-center justify-center">
        <svg
          viewBox="0 0 100 200"
          className="w-24 h-48 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          {/* Main Syringe Body */}
          <rect
            x="35"
            y="40"
            width="30"
            height="110"
            rx="2"
            fill="none"
            stroke="#475569"
            strokeWidth="3"
          />
          {/* Top Handle */}
          <line
            x1="20"
            y1="40"
            x2="80"
            y2="40"
            stroke="#475569"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Needle Base */}
          <line
            x1="50"
            y1="150"
            x2="50"
            y2="175"
            stroke="#475569"
            strokeWidth="2"
          />
          {/* Liquid Filling */}
          <rect
            x="38"
            y="43"
            width="24"
            height="104"
            fill="#991b1b"
            className="origin-bottom animate-syringe-fill"
          />
          {/* Inner Plunger line */}
          <line
            x1="50"
            y1="20"
            x2="50"
            y2="40"
            stroke="#475569"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      <div className="text-center space-y-2">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase flex items-baseline justify-center gap-2">
          <span className="text-white">DOSIS</span>
          <span className="text-[#991b1b]">PERRONAS</span>
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-8 bg-slate-700"></div>
          <p className="text-slate-400 text-sm md:text-base font-bold uppercase tracking-[0.4em] translate-x-[0.2em]">
            BY: ARTURO ALVARADO
          </p>
          <div className="h-[1px] w-8 bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
}