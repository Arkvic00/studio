
'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/layout/sidebar';
import { SplashScreen } from '@/components/splash-screen';
import { Header } from '@/components/layout/header';
import { VademecumDetailHeader } from '@/components/vademecum/vademecum-detail-header';

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
      
      <main className="flex-1 relative z-10 p-4 md:p-8 lg:p-12 overflow-y-auto custom-scrollbar pt-28 md:pt-0">
        <div className="md:pt-12">
            <Header 
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              activeTabLabel={activeTabLabel}
              isVademecumDetail={isVademecumDetail}
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
