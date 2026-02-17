'use client';

import { VademecumDetail } from '@/components/vademecum/vademecum-detail';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { notFound, useParams } from 'next/navigation';

export default function VademecumDetailPage() {
    const params = useParams();
    const drugId = params.drugId as string;

    const drug = DB_MEDICAMENTOS.find(d => d.id === drugId);

    if (!drug) {
        notFound();
    }

    return <VademecumDetail drug={drug} />;
}
