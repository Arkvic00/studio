'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Baby,
  BookOpen,
  Calculator,
  Droplet,
  HeartPulse,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'dosis', label: 'Calculadora Dosis', icon: Calculator, color: 'text-primary', bg: 'bg-primary/10' },
  { id: 'vademecum', label: 'Vademécum', icon: BookOpen, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { id: 'fluidoterapia', label: 'Fluidoterapia', icon: Droplet, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { id: 'gestacion', label: 'Gestación', icon: Baby, color: 'text-pink-400', bg: 'bg-pink-500/10' },
  { id: 'transfusion', label: 'Transfusión', icon: HeartPulse, color: 'text-rose-400', bg: 'bg-rose-500/10' },
];

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const pathname = usePathname();

  const sidebarContent = (
    <>
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tighter leading-none mb-2">DOSIS <br/><span className="text-destructive">PERRONAS</span></h1>
          <p className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">By: Arturo Alvarado</p>
        </div>
        <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
          <X size={20}/>
        </button>
      </div>
      <nav className="space-y-3 flex-1 overflow-y-auto custom-scrollbar -mr-4 pr-4">
         {navItems.map(item => {
            const isActive = pathname.startsWith(`/${item.id}`);
            return (
             <Link 
                key={item.id} 
                href={`/${item.id}`}
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                    'w-full p-3 rounded-2xl flex items-center gap-3 transition-all group',
                    isActive ? `${item.bg} border border-white/5 shadow-lg` : 'hover:bg-white/5'
                )}
              >
                 <div className={cn(
                    'p-2 rounded-xl transition-colors',
                    isActive ? 'bg-card' : 'bg-secondary group-hover:bg-card'
                  )}>
                    <item.icon size={18} className={cn(isActive ? item.color : 'text-muted-foreground group-hover:text-white')} />
                 </div>
                 <span className={cn(
                    'text-xs font-bold uppercase tracking-widest',
                    isActive ? 'text-white' : 'text-muted-foreground group-hover:text-white'
                 )}>
                    {item.label}
                 </span>
             </Link>
         )})}
      </nav>
    </>
  )

  return (
    <div className={cn(
        'fixed inset-0 z-[60]',
        isSidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'
    )}>
        <div 
            className={cn(
                'absolute inset-0 bg-popover/80 backdrop-blur-sm transition-opacity',
                isSidebarOpen ? 'opacity-100' : 'opacity-0'
            )}
            onClick={() => setIsSidebarOpen(false)}
        />
        <aside 
            className={cn(
                'absolute top-0 left-0 h-full w-4/5 sm:w-72 bg-background p-6 shadow-2xl border-r border-border flex flex-col transition-transform duration-300 ease-in-out',
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            )}
        >
            {sidebarContent}
        </aside>
    </div>
  );
}
