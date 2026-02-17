
'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Baby,
  BookOpen,
  Calculator,
  DollarSign,
  Droplet,
  HeartPulse,
  Syringe,
  Thermometer,
  Utensils,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'dosis', label: 'Calculadora Dosis', icon: Calculator, color: 'text-primary', bg: 'bg-primary/10' },
  { id: 'vademecum', label: 'Vademécum', icon: BookOpen, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { id: 'fluidoterapia', label: 'Fluidoterapia', icon: Droplet, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { id: 'nutricion', label: 'Nutrición', icon: Utensils, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { id: 'gestacion', label: 'Gestación', icon: Baby, color: 'text-pink-400', bg: 'bg-pink-500/10' },
  { id: 'transfusion', label: 'Transfusión', icon: HeartPulse, color: 'text-rose-400', bg: 'bg-rose-500/10' },
  { id: 'costos', label: 'Costos', icon: DollarSign, color: 'text-green-400', bg: 'bg-green-500/10' },
  { id: 'constantes', label: 'Constantes', icon: Thermometer, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { id: 'vacunacion', label: 'Vacunación', icon: Syringe, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
];

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
     <div className={`fixed inset-0 z-[90] transition-all duration-500 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
       <div className="absolute inset-0 bg-popover/80 backdrop-blur-md transition-opacity duration-500" onClick={() => setIsSidebarOpen(false)} />
       <aside className={`absolute top-0 left-0 w-80 h-full bg-background p-10 shadow-2xl transform transition-transform duration-500 border-r border-border flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter leading-none mb-2">DOSIS <br/><span className="text-destructive">PERRONAS</span></h1>
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
                        'w-full p-4 rounded-2xl flex items-center gap-4 transition-all group',
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
          <div className="mt-8">
            <button
                onClick={() => setIsSidebarOpen(true)} 
                className="hidden md:block w-full p-4 rounded-2xl items-center gap-4 transition-all group bg-secondary/50 hover:bg-secondary"
            >
                <div className="flex items-center gap-4">
                <div className={cn('p-2 rounded-xl transition-colors bg-card')}>
                    <Menu size={18} className='text-muted-foreground group-hover:text-white' />
                </div>
                <span className={cn('text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-white')}>
                    Menú
                </span>
                </div>
            </button>
        </div>
       </aside>
    </div>
  );
}
