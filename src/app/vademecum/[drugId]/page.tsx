
import { VademecumDetail } from '@/components/vademecum/vademecum-detail';
import { DB_MEDICAMENTOS } from '@/lib/data';
import type { Drug } from '@/lib/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return DB_MEDICAMENTOS.map((drug) => ({
        drugId: drug.id,
    }));
}

export default function VademecumDetailPage({ params }: { params: { drugId: string } }) {
    const drug = DB_MEDICAMENTOS.find(d => d.id === params.drugId) as Drug | undefined;

    if (!drug) {
        notFound();
    }

    return <VademecumDetail drug={drug} />;
}
