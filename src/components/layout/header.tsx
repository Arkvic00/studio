'use client';

interface HeaderProps {
  activeTabLabel: string;
}

export function Header({ activeTabLabel }: HeaderProps) {
  return (
    <>
      <header className="max-w-5xl mx-auto mb-12 flex-col items-center justify-center gap-4 border-b border-border pb-8 flex">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-2 text-center">{activeTabLabel}</h1>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs text-center">Herramienta Clínica</p>
          </div>
      </header>
    </>
  );
}
