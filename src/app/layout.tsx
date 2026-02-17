import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { AppProvider } from '@/contexts/app-context';
import { AppShell } from '@/components/layout/app-shell';
import { Toaster } from '@/components/ui/toaster';

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontSourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
  title: 'DosisPaws',
  description: 'Herramienta clínica veterinaria todo en uno.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'antialiased',
          fontInter.variable,
          fontSourceCodePro.variable
        )}
      >
        <AppProvider>
          <AppShell>{children}</AppShell>
        </AppProvider>
        <Toaster />
      </body>
    </html>
  );
}
