
'use client';
import { Menu } from 'lucide-react';

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  activeTabLabel: string;
  isVademecumDetail: boolean;
}

export function Header({ isSidebarOpen, setIsSidebarOpen, activeTabLabel, isVademecumDetail }: HeaderProps) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none md:hidden">
        <button 
          onClick={() => setIsSidebarOpen(true)} 
          className="pointer-events-auto p-4 bg-secondary/90 backdrop-blur-xl border border-border rounded-3xl text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all shadow-xl group"
        >
          <Menu size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

       <header className="max-w-5xl mx-auto mb-12 flex-col items-center justify-center gap-4 border-b border-border pb-8 flex">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-2">{activeTabLabel}</h1>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Herramienta Clínica</p>
          </div>
      </header>
    </>
  );
}
