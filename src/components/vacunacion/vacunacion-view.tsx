
'use client';
import { useState } from "react";
import { Syringe } from "lucide-react";
import { VACUNAS_DATA } from "@/lib/data";
import { PinterestCard } from "@/components/ui/pinterest-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const speciesWithOptions = Object.keys(VACUNAS_DATA);

export function VacunacionView() {
    const [selectedSpecies, setSelectedSpecies] = useState(speciesWithOptions[0]);

    const schedule = VACUNAS_DATA[selectedSpecies as keyof typeof VACUNAS_DATA] || [];
    
    const getBadgeVariant = (type: string) => {
        switch (type) {
            case 'Esencial': return 'default';
            case 'Refuerzo': return 'secondary';
            case 'Zona Riesgo': return 'destructive';
            default: return 'outline';
        }
    };

    return (
        <div className="animate-in fade-in duration-500">
            <PinterestCard>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400 border border-cyan-500/20">
                            <Syringe size={28}/>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Vacunación</h2>
                            <p className="text-xs text-muted-foreground font-medium">Esquemas recomendados</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-400 uppercase ml-2">Especie</label>
                        <select 
                            value={selectedSpecies} 
                            onChange={(e) => setSelectedSpecies(e.target.value)}
                            className="w-full sm:w-48 bg-card rounded-2xl p-4 text-white font-bold outline-none border-2 border-transparent focus:border-cyan-500/30"
                        >
                            {speciesWithOptions.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                </div>

                <div className="overflow-hidden border border-border rounded-2xl">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-secondary/50">
                                <TableHead className="w-[150px]">Edad</TableHead>
                                <TableHead>Vacuna</TableHead>
                                <TableHead className="text-right">Tipo</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {schedule.map((item, index) => (
                                <TableRow key={index} className="border-border">
                                    <TableCell className="font-medium text-white">{item.edad}</TableCell>
                                    <TableCell>{item.vacuna}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant={getBadgeVariant(item.tipo)}>{item.tipo}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </PinterestCard>
        </div>
    );
}
