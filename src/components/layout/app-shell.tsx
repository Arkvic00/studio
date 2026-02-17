'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/layout/sidebar';
import { SplashScreen } from '@/components/splash-screen';
import { Header } from '@/components/layout/header';
import { VademecumDetailHeader } from '@/components/vademecum/vademecum-detail-header';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const TABS: { [key: string]: string } = {
  '/dosis': 'Calculadora Dosis',
  '/vademecum': 'Vademécum',
  '/fluidoterapia': 'Fluidoterapia',
  '/nutricion': 'Cálculo Nutrición',
  '/gestacion': 'Gestación',
  '/transfusion': 'Transfusión',
  '/costos': 'Costos',
  '/constantes': 'Constantes',
  '/vacunacion': 'Vacunación',
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isVademecumDetail = pathname.startsWith('/vademecum/') && pathname.length > '/vademecum/'.length;
  
  const activeTabLabel = isVademecumDetail 
    ? 'Vademécum' 
    : Object.entries(TABS).find(([path]) => pathname.startsWith(path))?.[1] || 'DosisPaws';

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      
      <button 
        onClick={() => setIsSidebarOpen(true)} 
        className="fixed top-8 left-8 z-50 p-4 bg-secondary/90 backdrop-blur-xl border border-border rounded-full text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all shadow-xl group"
      >
        <Menu size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      <main className={cn(
        "flex-1 relative z-10 p-4 md:p-8 lg:p-12 overflow-y-auto custom-scrollbar transition-all duration-300",
        isSidebarOpen ? "blur-sm scale-[0.98] brightness-50" : ""
        )}>
        <div className={cn("pt-12 md:pt-0", isSidebarOpen ? 'pointer-events-none' : '')}>
            <Header 
              activeTabLabel={activeTabLabel}
            />
            
            {isVademecumDetail && <VademecumDetailHeader />}
            
            <div className="max-w-5xl mx-auto pb-40">
              {children}
            </div>
        </div>
      </main>
    </div>
  );
}
