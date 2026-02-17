'use client';

import { VademecumDetail } from '@/components/vademecum/vademecum-detail';
import type { Drug } from '@/lib/types';
import { notFound, useParams } from 'next/navigation';
import { useDoc, useFirestore } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';

function VademecumDetailLoading() {
    return (
         <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-12">
                    <Skeleton className="h-48 w-full rounded-4xl" />
                </div>
                 <div className="lg:col-span-12 mt-8">
                    <Skeleton className="h-10 w-1/3 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <Skeleton className="h-64 w-full rounded-4xl" />
                            <Skeleton className="h-48 w-full rounded-4xl" />
                        </div>
                        <div className="space-y-6">
                            <Skeleton className="h-64 w-full rounded-4xl" />
                            <Skeleton className="h-48 w-full rounded-4xl" />
                        </div>
                    </div>
                </div>
              </div>
         </div>
    )
}


export default function VademecumDetailPage() {
    const params = useParams();
    const drugId = params.drugId as string;
    const firestore = useFirestore();

    const docRef = useMemo(() => doc(firestore, 'vademecum', drugId), [firestore, drugId]);
    const { data: drug, isLoading, error } = useDoc<Drug>(docRef);

    if (isLoading) {
        return <VademecumDetailLoading />;
    }

    if (error) {
        console.error(error);
        return <div>Error al cargar el fármaco.</div>
    }

    if (!drug && !isLoading) {
        notFound();
    }

    return <VademecumDetail drug={drug} />;
}

    