import { EXOTICS_FORMULARY_DATA } from '@/lib/exotics-data';
import { notFound } from 'next/navigation';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { SPECIES_CONFIG } from '@/lib/config';

// To generate static pages for the species we have data for
export function generateStaticParams() {
    return Object.keys(EXOTICS_FORMULARY_DATA).map((speciesId) => ({
        speciesId: speciesId,
    }));
}

export default function ExoticSpeciesDetailPage({ params }: { params: { speciesId: string } }) {
    const speciesData = EXOTICS_FORMULARY_DATA[params.speciesId as keyof typeof EXOTICS_FORMULARY_DATA];
    const speciesInfo = SPECIES_CONFIG[params.speciesId as keyof typeof SPECIES_CONFIG];

    if (!speciesInfo) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto animate-in fade-in duration-500 space-y-8">
             <PinterestCard className="relative overflow-hidden border-l-8 border-l-accent">
                <div className="flex items-center gap-6">
                    <div className="text-7xl">{speciesInfo.icon}</div>
                     <div>
                        <h1 className="text-6xl font-black text-white mb-2 tracking-tighter">{speciesInfo.label}</h1>
                        <p className="text-lg text-muted-foreground font-medium">Formulario de Especies Exóticas</p>
                    </div>
                </div>
            </PinterestCard>

            {speciesData ? (
                Object.entries(speciesData.sections).map(([key, section]) => (
                    <PinterestCard key={key} id={key}>
                        <h2 className="text-2xl font-bold text-accent mb-4">{section.title}</h2>
                        <div className="text-slate-300 space-y-2">
                            {section.content.split('\n').map((line, i) => (
                                <p key={i}>{line.replace('* ', '• ')}</p>
                            ))}
                        </div>
                    </PinterestCard>
                ))
            ) : (
                <PinterestCard>
                    <div className="text-center py-20 text-muted-foreground">
                        <h2 className="text-2xl font-bold text-white mb-2">En Construcción</h2>
                        <p>El formulario para {speciesInfo.label} estará disponible próximamente.</p>
                    </div>
                </PinterestCard>
            )}
        </div>
    );
}
