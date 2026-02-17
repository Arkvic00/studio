'use client';
import Link from 'next/link';
import { 
    ChevronRight, Plus, Search, BookOpen, Calendar, HeartPulse, AlertCircle, Utensils, Atom, Snowflake, Users, 
    VenetianMask, Info, Home, Ban, Hand, Syringe, FlaskConical, Stethoscope, Microscope, TestTube, Dna, Bone, Shield, 
    Pill, Bug, TriangleAlert, Beaker, Droplet, Brain, Thermometer
} from 'lucide-react';
import Image from 'next/image';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { useAppContext } from '@/contexts/app-context';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { fuzzySearch, cn } from '@/lib/utils';
import { SPECIES_CONFIG } from '@/lib/config';
import { EXOTICS_DATA } from '@/lib/exotics';
import type { ExoticSpeciesData } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '../ui/badge';

// Sub-component for Fármacos list
function DrugList() {
    const { drugImages, triggerUpload } = useAppContext();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDrugs = useMemo(() => {
        if (!searchTerm.trim()) {
            return DB_MEDICAMENTOS;
        }

        return DB_MEDICAMENTOS.filter(drug => {
            const q = searchTerm.toLowerCase();
            const matchName = fuzzySearch(searchTerm, drug.meta_data.nombre_generico);
            const matchCommercial = drug.meta_data.nombres_comerciales.some(n => fuzzySearch(searchTerm, n));
            const matchFamily = drug.meta_data.grupo_farmacologico.toLowerCase().includes(q);
            
            const matchUse = Object.values(drug.parametros_dosificacion)
                .flat()
                .some(d => d.indicacion.toLowerCase().includes(q));

            return matchName || matchCommercial || matchFamily || matchUse;
        });
    }, [searchTerm]);

    return (
        <>
            <div className="relative mb-8">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={24} />
                <Input
                    type="text"
                    placeholder="Buscar fármaco por nombre, uso, grupo..."
                    className="w-full rounded-full bg-card p-6 pl-16 text-lg font-bold text-white border-2 border-border focus:border-primary transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDrugs.map(drug => (
                    <Link key={drug.id} href={`/vademecum/${drug.id}`} passHref>
                        <PinterestCard className="hover:bg-secondary cursor-pointer group transition-all hover:border-accent/30 h-full">
                            <div className="flex justify-between items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <button 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            triggerUpload(e, drug.id)
                                        }}
                                        className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all flex-shrink-0 overflow-hidden relative group/img"
                                    >
                                        {drugImages[drug.id] ? (
                                            <Image src={drugImages[drug.id]} alt={drug.meta_data.nombre_generico} fill className="object-cover" />
                                        ) : (
                                            <Plus size={24} className="group-hover/img:scale-110 transition-transform" />
                                        )}
                                    </button>
                                    
                                    <div>
                                        <h3 className="text-2xl font-black text-white mb-1 group-hover:text-accent transition-colors">{drug.meta_data.nombre_generico}</h3>
                                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{drug.meta_data.grupo_farmacologico.split(',')[0]}</p>
                                    </div>
                                </div>
                                <div className="p-3 bg-card rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-all text-muted-foreground"><ChevronRight size={20} /></div>
                            </div>
                        </PinterestCard>
                    </Link>
                ))}
                {filteredDrugs.length === 0 && (
                    <div className="md:col-span-2 lg:col-span-3 text-center py-20">
                        <p className="text-muted-foreground font-bold">No se encontraron fármacos para "{searchTerm}"</p>
                    </div>
                )}
            </div>
        </>
    );
}

// Order of species for the UI
const exoticSpeciesOrder = [
    'roedores', 'conejo', 'mustelidos', 'cobaya', 'erizo', 
    'ave', 'reptil', 'peces', 'primates', 'axolote'
];
const exoticSpecies = exoticSpeciesOrder.map(key => ({
    key,
    ...SPECIES_CONFIG[key]
}));

const iconMap: { [key: string]: React.ElementType } = {
    Calendar, HeartPulse, AlertCircle, Utensils, Atom, Snowflake, Users, VenetianMask, Info, Home, Ban, Hand, Syringe,
    FlaskConical, Stethoscope, Microscope, TestTube, Dna, Bone, Shield, Pill, Bug, TriangleAlert, Beaker, Droplet, Brain, Thermometer
};

function ExoticDetailView({ speciesKey }: { speciesKey: string | null }) {
    if (!speciesKey) {
        return null;
    }
    const speciesData = EXOTICS_DATA[speciesKey as keyof typeof EXOTICS_DATA];
    const speciesInfo = SPECIES_CONFIG[speciesKey as keyof typeof SPECIES_CONFIG];
    
    if (!speciesData || !speciesData.sections) {
        return (
             <PinterestCard>
                <div className="text-center py-20 text-muted-foreground">
                    <h2 className="text-2xl font-bold text-white mb-2">En Construcción</h2>
                    <p>El formulario para {speciesInfo?.label || speciesKey} estará disponible próximamente.</p>
                </div>
            </PinterestCard>
        )
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
             <PinterestCard className="relative overflow-hidden border-l-8 border-l-destructive">
                <div className="flex items-center gap-6">
                    <div className="text-7xl">{speciesInfo.icon}</div>
                     <div>
                        <h1 className="text-6xl font-black text-white mb-2 tracking-tighter">{speciesInfo.label}</h1>
                        <p className="text-lg text-muted-foreground font-medium">Formulario de Especies Exóticas</p>
                    </div>
                </div>
            </PinterestCard>

            {Object.entries(speciesData.sections).map(([key, section]) => {
                const { content, title, icon } = section;
                if (!content) return null;
                const SectionIcon = iconMap[icon as string] || BookOpen;

                return (
                    <PinterestCard key={key} id={key}>
                        <h2 className="text-2xl font-bold text-accent mb-6 flex items-center gap-3"><SectionIcon size={24}/> {title}</h2>
                        
                        {typeof content === 'string' && <p className="text-sm text-slate-300">{content}</p>}

                        {key === 'patologias' && Array.isArray(content) && (
                            <Accordion type="multiple" className="w-full space-y-3">
                                {content.map((cat: any, index: number) => {
                                    const Icon = iconMap[cat.icon] || TriangleAlert;
                                    return (
                                        <AccordionItem key={index} value={cat.category} className="border-none bg-card rounded-2xl overflow-hidden">
                                            <AccordionTrigger className="px-4 py-3 text-white font-bold text-sm hover:no-underline hover:bg-white/5 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <Icon size={18} className="text-accent" />
                                                    {cat.category}
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-4 pb-4 pt-0 text-sm text-slate-300">
                                                <ul className="space-y-3 mt-2">
                                                {cat.diseases.map((d: any, dIndex: number) => (
                                                    <li key={dIndex} className="p-3 bg-background/50 rounded-lg border border-border">
                                                        <h5 className="font-bold text-white">{d.name}</h5>
                                                        <p className="text-xs text-slate-400">{d.description}</p>
                                                        {d.tags && <div className="flex gap-2 mt-2">{d.tags.map((t:string, tIndex: number) => <Badge key={tIndex} variant={t === 'Urgencia' || t === 'Mortal' ? 'destructive' : 'secondary'} className="text-[9px]">{t}</Badge>)}</div>}
                                                    </li>
                                                ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    )
                                })}
                            </Accordion>
                        )}
                        
                        {key !== 'patologias' && Array.isArray(content) && (
                             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {content.map((item: any, index: number) => {
                                    const ItemIcon = iconMap[item.icon as string] || TriangleAlert;
                                    return (
                                    <div key={index} className={cn("bg-card p-6 rounded-3xl border border-border h-full", item.isCritical && 'border-destructive')}>
                                        <h3 className="font-bold text-white mb-3 flex items-center gap-2 text-base"><ItemIcon size={18} className={cn("text-accent", item.isCritical && "text-destructive")} /> {item.title}</h3>
                                        {item.text && <p className="text-sm text-slate-300">{item.text}</p>}
                                        {item.items && <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
                                            {item.items.map((li: string, i: number) => <li key={i}>{li}</li>)}
                                        </ul>}
                                         {item.points && <ul className="space-y-3">
                                            {item.points.map((p: any, i:number) => (
                                                 <li key={i} className="flex gap-3 items-start text-sm text-slate-300">
                                                    {p.isProhibited ? <Ban size={20} className="text-destructive flex-shrink-0 mt-0.5"/> : <ChevronRight size={16} className="text-accent flex-shrink-0 mt-1"/>}
                                                    <span>{p.text}</span>
                                                </li>
                                            ))}
                                        </ul>}
                                        {item.description && <p className="text-sm text-slate-300">{item.description}</p>}
                                    </div>
                                )})}
                            </div>
                        )}

                        {typeof content === 'object' && !Array.isArray(content) && (
                            <div className="space-y-8">
                                {content.text && <p className="text-sm text-slate-300 mb-6">{content.text}</p>}
                                
                                {content.sexing && (
                                    <div>
                                        <h3 className="font-bold text-white mb-2 text-lg">{content.sexing.title}</h3>
                                        <p className="text-sm text-slate-300">{content.sexing.text}</p>
                                    </div>
                                )}
                                
                                {(content.table || content.repro_table) && (
                                     <div className="overflow-x-auto">
                                        <h3 className="font-bold text-white mb-4 text-lg">{content.repro_table?.title || content.table?.title || 'Parámetros Reproductivos'}</h3>
                                        <Table>
                                            <TableHeader><TableRow>{(content.repro_table?.headers || content.table?.headers).map((h: string) => <TableHead key={h}>{h}</TableHead>)}</TableRow></TableHeader>
                                            <TableBody>{(content.repro_table?.rows || content.table?.rows).map((row: any, i: number) => (<TableRow key={i}>{Object.values(row).map((cell: any, j: number) => <TableCell key={j} className={j===0 ? 'font-medium text-white': ''}>{cell}</TableCell>)}</TableRow>))}</TableBody>
                                        </Table>
                                    </div>
                                )}
                                
                                {content.considerations && (
                                    <div>
                                        <h3 className="font-bold text-white mb-2 text-lg">{content.considerations.title}</h3>
                                        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                                            {content.considerations.items.map((item: string, i: number) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>
                                )}
                                
                                {content.points && Array.isArray(content.points) && (
                                     <ul className="space-y-3">
                                        {content.points.map((p: any, i:number) => (
                                             <li key={i} className="flex gap-3 items-start text-sm text-slate-300">
                                                {p.isProhibited ? <Ban size={20} className="text-destructive flex-shrink-0 mt-0.5"/> : <ChevronRight size={16} className="text-accent flex-shrink-0 mt-1"/>}
                                                <span>{p.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {content.injection_table && (
                                    <div className="overflow-x-auto">
                                        <h3 className="font-bold text-white mb-4 text-lg">Vías y Volúmenes de Inyección</h3>
                                        <Table>
                                            <TableHeader><TableRow>{content.injection_table.headers.map((h: string) => <TableHead key={h}>{h}</TableHead>)}</TableRow></TableHeader>
                                            <TableBody>{content.injection_table.rows.map((row: any, i: number) => (<TableRow key={i}>{Object.values(row).map((cell: any, j: number) => <TableCell key={j} className={j===0 ? 'font-medium text-white': ''}>{cell}</TableCell>)}</TableRow>))}</TableBody>
                                        </Table>
                                    </div>
                                )}

                                {(content.critical_points || content.anesthesia_risks) && (
                                    <div className="space-y-4">
                                        {content.critical_points?.map((item:any, i: number) => (
                                            <div key={i} className="flex gap-3 items-start bg-card p-4 rounded-xl border border-border">
                                                <div className="p-2 bg-background rounded-md"><item.icon size={20} className={cn("flex-shrink-0", item.isCritical ? "text-destructive" : "text-accent")} /></div>
                                                <div>
                                                    <h4 className="font-bold text-white">{item.title}</h4>
                                                    <p className="text-xs text-slate-300">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                        {content.anesthesia_risks?.map((item:any, i: number) => (
                                            <div key={i} className="p-3 bg-card rounded-xl border border-border text-sm text-slate-300">{item.text}</div>
                                        ))}
                                    </div>
                                )}

                                 {(content.hematology || content.biochemistry) && (
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {content.hematology && (
                                            <div className="overflow-x-auto">
                                                <h3 className="font-bold text-white mb-4">{content.hematology.title || 'Hematología'}</h3>
                                                <Table><TableHeader><TableRow>{content.hematology.headers.map((h: string) => <TableHead key={h}>{h}</TableHead>)}</TableRow></TableHeader><TableBody>{content.hematology.rows.map((row: any, i:number) => (<TableRow key={i}>{Object.values(row).map((cell: any, j: number) => <TableCell key={j} className={j===0 ? 'font-medium text-white': ''}>{cell}</TableCell>)}</TableRow>))}</TableBody></Table>
                                            </div>
                                        )}
                                        {content.biochemistry && (
                                            <div className="overflow-x-auto">
                                                <h3 className="font-bold text-white mb-4">{content.biochemistry.title || 'Bioquímica'}</h3>
                                                <Table><TableHeader><TableRow>{content.biochemistry.headers.map((h: string) => <TableHead key={h}>{h}</TableHead>)}</TableRow></TableHeader><TableBody>{content.biochemistry.rows.map((row: any, i:number) => (<TableRow key={i}>{Object.values(row).map((cell: any, j: number) => <TableCell key={j} className={j===0 ? 'font-medium text-white': ''}>{cell}</TableCell>)}</TableRow>))}</TableBody></Table>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {content.blood_volume && (
                                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {content.blood_volume.map((item: any) => (
                                            <div key={item.species} className="bg-card p-3 rounded-xl border border-border text-center">
                                                <p className="text-sm font-bold text-white">{item.species}</p>
                                                <p className="text-[10px] text-muted-foreground font-bold">Vol: {item.volume} ml/kg</p>
                                                <p className="text-[10px] text-muted-foreground font-bold">Ext. Máx: {item.max_extraction} ml</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </PinterestCard>
                )
            })}
        </div>
    );
}

function ExoticsList() {
    const [selectedSpeciesKey, setSelectedSpeciesKey] = useState<string | null>(null);

    return (
        <div className="space-y-8">
            <PinterestCard>
                 <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 text-center">
                    {exoticSpecies.map((species) => {
                        if (!species.label) return null;
                        const isSelected = selectedSpeciesKey === species.key;
                        return (
                            <button 
                                onClick={() => setSelectedSpeciesKey(species.key)}
                                key={species.key}
                                className={cn(
                                    "flex flex-col items-center justify-start gap-2 p-3 rounded-2xl transition-all duration-200",
                                    isSelected ? 'ring-2 ring-destructive bg-destructive/10' : 'hover:bg-secondary'
                                )}
                            >
                                <div className="text-4xl md:text-5xl flex-grow flex items-center">{species.icon}</div>
                                <span className={cn(
                                    "text-[10px] font-bold uppercase tracking-wider min-h-[20px]",
                                    isSelected ? 'text-destructive' : 'text-muted-foreground'
                                )}>{species.label}</span>
                            </button>
                        )
                    })}
                </div>
            </PinterestCard>

            {selectedSpeciesKey && <ExoticDetailView speciesKey={selectedSpeciesKey} />}
        </div>
    );
}


// Main Vademecum view with tabs
export function VademecumList() {
    const [activeTab, setActiveTab] = useState('farmacos');

    return (
        <div className="animate-in fade-in duration-500">
             <div className="flex items-center gap-2 mb-8">
                 <button
                    onClick={() => setActiveTab('farmacos')}
                    className={cn(
                        'px-6 py-2 rounded-full text-base font-bold transition-all',
                        activeTab === 'farmacos' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-white'
                    )}
                >
                    Fármacos
                </button>
                <button
                    onClick={() => setActiveTab('exoticos')}
                    className={cn(
                        'px-6 py-2 rounded-full text-base font-bold transition-all',
                        activeTab === 'exoticos' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-white'
                    )}
                >
                    Exóticos
                </button>
            </div>

            {activeTab === 'farmacos' ? <DrugList /> : <ExoticsList />}
        </div>
    );
}
