'use client';

import { useState } from 'react';
import { doc } from 'firebase/firestore';
import { useFirestore, useUser } from '@/firebase';
import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CloudCog, CheckCircle } from 'lucide-react';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';
import { useAuth } from '@/firebase/provider';

export default function SyncVademecumPage() {
  const [progress, setProgress] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const firestore = useFirestore();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();

  const handleSync = async () => {
    if (!firestore) {
      alert('Firestore no está disponible. Asegúrate de estar conectado.');
      return;
    }

    if (!user) {
        alert('Debes iniciar sesión para sincronizar. Iniciando sesión anónima...');
        initiateAnonymousSignIn(auth);
        // User will have to click the button again after sign in completes.
        return;
    }

    setIsSyncing(true);
    setIsComplete(false);
    setProgress(0);

    const totalDrugs = DB_MEDICAMENTOS.length;

    for (let i = 0; i < totalDrugs; i++) {
      const drug = DB_MEDICAMENTOS[i];
      const docRef = doc(firestore, 'vademecum', drug.id);
      
      // We use the non-blocking version to avoid overwhelming the main thread
      // and to allow for UI updates.
      setDocumentNonBlocking(docRef, drug, { merge: true });

      // Update progress. Use requestAnimationFrame for smoother UI updates.
      await new Promise(resolve => {
        requestAnimationFrame(() => {
          setProgress(((i + 1) / totalDrugs) * 100);
          resolve(null);
        });
      });
    }
    
    setIsSyncing(false);
    setIsComplete(true);
  };

  return (
    <PinterestCard>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gray-500/10 rounded-2xl text-gray-400 border border-gray-500/20">
          <CloudCog size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Sincronizar Vademécum a la Nube</h2>
          <p className="text-xs text-muted-foreground font-medium">
            Este proceso subirá la base de datos local de medicamentos a Firestore.
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <Alert>
          <AlertTitle>¡Acción de un solo uso!</AlertTitle>
          <AlertDescription>
            Ejecuta esta acción una sola vez para poblar la base de datos en la nube.
            Hacerlo múltiples veces sobrescribirá los datos existentes pero no es necesario.
          </AlertDescription>
        </Alert>
        
        {isUserLoading ? (
             <p className="text-center text-muted-foreground">Cargando estado de autenticación...</p>
        ) : (
            <Button
                onClick={handleSync}
                disabled={isSyncing || isUserLoading}
                className="w-full text-lg py-6"
                size="lg"
            >
                {isSyncing ? 'Sincronizando...' : 'Iniciar Sincronización'}
            </Button>
        )}

        {(isSyncing || isComplete) && (
          <div className="space-y-4">
            <Progress value={progress} />
            <p className="text-center text-sm font-medium text-muted-foreground">
              {isSyncing ? `${Math.round(progress)}% completado` : ''}
            </p>
          </div>
        )}
        
        {isComplete && (
             <Alert variant="default" className="bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
                <CheckCircle className="h-4 w-4" color='hsl(var(--accent))'/>
                <AlertTitle>¡Sincronización Completa!</AlertTitle>
                <AlertDescription>
                    La base de datos de medicamentos ha sido migrada a la nube. La aplicación ahora leerá los datos desde Firestore.
                </AlertDescription>
            </Alert>
        )}
      </div>
    </PinterestCard>
  );
}

    