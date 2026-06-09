'use client';
import { useMemo, useRef, useEffect } from 'react';
import type { Patient, Calculation } from '@/lib/types';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { getSpeciesKey, getSpeciesInfo, speciesList } from '@/lib/config';
import { Plus, Trash2, Save, Printer, ArrowDownUp, Info, AlertTriangle } from 'lucide-react';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { GlassInput } from '@/components/ui/glass-input';
import { DrugSelector } from '@/components/dosis/drug-selector';
import { cn } from '@/lib/utils';
import { useAppContext } from '@/contexts/app-context';

interface DoseCalculatorProps {
  patient: Patient;
  setPatient: (patient: Patient | ((prev: Patient) => Patient)) => void;
  calculations: Calculation[];
  setCalculations: (
    calculations: Calculation[] | ((prev: Calculation[]) => Calculation[])
  ) => void;
}

export default function DosisPage() {
  const { patient, setPatient, calculations, setCalculations } = useAppContext();

  return (
    <DoseCalculator
      patient={patient}
      setPatient={setPatient}
      calculations={calculations}
      setCalculations={setCalculations}
    />
  );
}

export function DoseCalculator({
  patient,
  setPatient,
  calculations,
  setCalculations,
}: DoseCalculatorProps) {
  const speciesKey = getSpeciesKey(patient.especie);
  const lastAddedId = useRef<number | null>(null);

  const addDrug = () => {
    const newId = Date.now();
    lastAddedId.current = newId;
    setCalculations([
      ...calculations,
      {
        id: newId,
        drugId: '',
        dose: 0,
        concentration: 0,
        indicationIndex: 0,
        presentationIndex: 0,
      },
    ]);
  }

  const removeDrug = (id: number) => {
    setCalculations(calculations.filter((c) => c.id !== id));
  };

  const updateDrug = (id: number, data: Partial<Calculation>) => {
    setCalculations(
      calculations.map((c) => (c.id === id ? { ...c, ...data } : c))
    );
  };
  
  const bsa = useMemo(() => {
    const pesoKg = parseFloat(patient.peso as string);
    if (!pesoKg || pesoKg <= 0) return null;
    const k = speciesKey === 'gato' ? 10.0 : 10.1;
    const bsaValue = (k * Math.pow(pesoKg * 1000, 2/3)) / 10000;
    return bsaValue.toFixed(2);
  }, [patient.peso, speciesKey]);

  useEffect(() => {
    if (lastAddedId.current) {
      const element = document.getElementById(`calc-${lastAddedId.current}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
      lastAddedId.current = null;
    }
  }, [calculations]);

  const borderColors = [
    'border-l-primary',
    'border-l-blue-500',
    'border-l-emerald-500',
    'border-l-purple-500',
    'border-l-orange-500',
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-32 animate-in fade-in duration-700">
      <PinterestCard>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-3 mb-8">
            {speciesList.map(key => {
                const info = getSpeciesInfo(key);
                if (!info) return null;
                const isActive = patient.especie === info.label;
                return (
                    <button 
                        key={key}
                        onClick={() => setPatient(p => ({...p, especie: info.label}))}
                        className={cn(
                            "flex flex-col items-center justify-center gap-2 p-2 rounded-2xl transition-all duration-200 border-2",
                            isActive ? 'bg-primary/20 border-primary scale-105 shadow-lg' : 'border-transparent hover:bg-secondary'
                        )}
                    >
                        <div className="text-2xl sm:text-4xl">{info.icon}</div>
                        <span className={cn("text-[9px] font-bold uppercase tracking-wider text-center line-clamp-1", isActive ? 'text-primary' : 'text-muted-foreground')}>{info.label}</span>
                    </button>
                )
            })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <GlassInput
            label="Nombre Paciente"
            value={patient.nombre}
            onChange={(v) => setPatient({ ...patient, nombre: v })}
            placeholder="Ej: Firulais"
          />
          <GlassInput
            label="Peso (kg)"
            type="number"
            value={patient.peso}
            onChange={(v) => setPatient({ ...patient, peso: v })}
            placeholder="0.0"
          />
          {bsa && <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-500/20 text-green-300 text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">ASC: {bsa} m²</div>}
        </div>
      </PinterestCard>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button onClick={addDrug} className="w-full py-10 rounded-4xl border-4 border-dashed border-border text-muted-foreground hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all flex flex-col items-center justify-center gap-4 group">
          <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-xl"><Plus size={32} /></div>
          <span className="font-black text-xs uppercase tracking-[0.2em]">Añadir Medicamento</span>
        </button>
        <button className="w-full py-10 rounded-4xl border-4 border-dashed border-border text-muted-foreground hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all flex flex-col items-center justify-center gap-4 group">
          <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center group-hover:bg-blue-400 group-hover:text-white transition-all duration-300 shadow-xl"><Save size={32} /></div>
          <span className="font-black text-xs uppercase tracking-[0.2em]">Guardar en Historial</span>
        </button>
        <button className="w-full py-10 rounded-4xl border-4 border-dashed border-border text-muted-foreground hover:text-purple-400 hover:border-purple-400/30 hover:bg-purple-400/5 transition-all flex flex-col items-center justify-center gap-4 group">
          <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center group-hover:bg-purple-400 group-hover:text-white transition-all duration-300 shadow-xl"><Printer size={32} /></div>
          <span className="font-black text-xs uppercase tracking-[0.2em]">Imprimir</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {calculations.map((calc, index) => {
          const drug = DB_MEDICAMENTOS.find((d) => d.id === calc.drugId);
          const doses = drug?.parametros_dosificacion?.[speciesKey] || [];
          const doseConfig = doses[calc.indicationIndex];
          const presentations = drug?.presentaciones_comerciales || [];
          const selectedPresentation = presentations[calc.presentationIndex || 0];

          const isContraindicated = drug?.seguridad_y_alertas.contraindicaciones_especie?.[patient.especie];

          let result = 0;
          let resultUnit = 'ml';
          let calcType = 'mg_kg';

          if (drug && doseConfig && selectedPresentation) {
            const concentration = calc.concentration;
            if (selectedPresentation.tipo.toLowerCase().includes('tableta')) resultUnit = 'tabletas';
            calcType = doseConfig.math.tipo_calculo;

            if (concentration > 0) {
              if (calcType === 'fija') result = calc.dose / concentration;
              else if (calcType === 'mg_m2') {
                const bsaValue = parseFloat(bsa || '0');
                result = (bsaValue * calc.dose) / concentration;
              }
              else result = (parseFloat(patient.peso as string) * calc.dose) / concentration;
            }
          }

          const hasRange = doseConfig?.math.dosis_min !== undefined || doseConfig?.math.dosis_max !== undefined;
          const rangeText = hasRange 
            ? `Rango: ${doseConfig.math.dosis_min ?? '—'} a ${doseConfig.math.dosis_max ?? '—'} ${doseConfig.math.unidad_calculo}`
            : null;

          const borderColorClass = borderColors[index % borderColors.length];

          return (
            <div key={calc.id} id={`calc-${calc.id}`}>
              <PinterestCard className={`group relative border-l-4 ${borderColorClass} transition-all`}>
                <div className="absolute top-4 right-4 z-10">
                  <button onClick={() => removeDrug(calc.id)} className="p-2 text-slate-500 hover:text-destructive bg-card hover:bg-destructive/10 rounded-xl border border-border transition-all">
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
                  <div className="flex-1 w-full space-y-6">
                    <DrugSelector
                      selectedDrugId={calc.drugId}
                      speciesKey={speciesKey}
                      onSelect={(id) => {
                        if (!id) return;
                        const selected = DB_MEDICAMENTOS.find((d) => d.id === id);
                        const initialDoses = selected?.parametros_dosificacion?.[speciesKey] || [];
                        const initialDoseConfig = initialDoses[0];
                        const initialPres = selected?.presentaciones_comerciales?.[0];
                        updateDrug(calc.id, {
                          drugId: id,
                          dose: initialDoseConfig?.math.dosis_recomendada || 0,
                          presentationIndex: 0,
                          concentration: initialPres?.valor_concentracion || 0,
                          indicationIndex: 0,
                        });
                      }}
                    />

                    {isContraindicated && (
                        <div className="bg-red-500/10 border-2 border-red-500/30 p-6 rounded-3xl animate-in zoom-in-95 duration-300">
                            <div className="flex items-center gap-3 text-red-500 mb-2">
                                <AlertTriangle size={24} />
                                <h4 className="font-black uppercase tracking-tighter text-xl">Alarma de Especie</h4>
                            </div>
                            <p className="text-red-200 font-bold text-sm leading-relaxed">{isContraindicated}</p>
                        </div>
                    )}

                    {drug && !isContraindicated && (
                      <div className="space-y-6 animate-in slide-in-from-left-4 duration-500">
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-2">Presentación</label>
                          <select
                            className="w-full bg-background rounded-2xl p-4 text-sm font-bold text-white outline-none border-2 border-transparent focus:border-ring/30"
                            value={calc.presentationIndex}
                            onChange={(e) => {
                              const idx = parseInt(e.target.value);
                              const pres = presentations[idx];
                              updateDrug(calc.id, {
                                presentationIndex: idx,
                                concentration: pres ? pres.valor_concentracion : 0,
                              });
                            }}
                          >
                            {presentations.map((p, i) => (
                              <option key={i} value={i}>{p.tipo} ({p.concentracion_texto})</option>
                            ))}
                          </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-2">Protocolo</label>
                            <select
                              disabled={doses.length === 0}
                              className="w-full bg-background rounded-2xl p-4 text-sm font-bold text-slate-200 outline-none border-2 border-transparent focus:border-ring/30 disabled:opacity-50"
                              value={calc.indicationIndex}
                              onChange={(e) => {
                                const idx = parseInt(e.target.value);
                                const d = doses[idx];
                                updateDrug(calc.id, {
                                  indicationIndex: idx,
                                  dose: d.math.dosis_recomendada,
                                });
                              }}
                            >
                              {doses.map((d, i) => <option key={i} value={i}>{d.indicacion}</option>)}
                            </select>
                          </div>

                          <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                              <GlassInput
                                label={calcType === 'fija' ? 'Dosis Total' : (calcType === 'mg_m2' ? 'Dosis (mg/m²)' : 'Dosis (mg/kg)')}
                                type="number"
                                value={calc.dose}
                                onChange={(v) => updateDrug(calc.id, { dose: parseFloat(v) || 0 })}
                              />
                              <GlassInput
                                label="Concentración"
                                type="number"
                                value={calc.concentration}
                                onChange={(v) => updateDrug(calc.id, { concentration: parseFloat(v) || 0 })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {!isContraindicated && (
                      <div className={`w-full lg:w-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-4xl p-8 text-center transition-all duration-500 shadow-2xl relative overflow-hidden border border-border flex-shrink-0`}>
                        <div className={`absolute top-0 left-0 w-full h-2 ${borderColorClass.replace('border-l-', 'bg-')}`}></div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Administrar</p>
                        <h2 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tighter drop-shadow-md">{result.toFixed(2)}</h2>
                        <p className="text-sm font-bold text-slate-300 uppercase mt-2 opacity-80">{resultUnit}</p>

                        {rangeText && (
                            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-accent font-black uppercase bg-accent/10 px-3 py-1.5 rounded-full mx-auto w-fit border border-accent/20">
                                <ArrowDownUp size={12} /> {rangeText}
                            </div>
                        )}

                        {doseConfig && (
                          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col items-center gap-2">
                            {doseConfig.vias && (
                              <span className="text-[10px] font-black text-white uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
                                {Array.isArray(doseConfig.vias) ? doseConfig.vias.join(' / ') : doseConfig.vias}
                              </span>
                            )}
                            {doseConfig.frecuencia && (
                              <span className="text-[9px] font-bold text-accent uppercase tracking-wider">{doseConfig.frecuencia.texto_ui}</span>
                            )}
                          </div>
                        )}
                      </div>
                  )}
                </div>

                {drug && !isContraindicated && (doseConfig?.notas_tecnicas || (drug.informacion_cliente && drug.informacion_cliente.length > 0)) && (
                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="bg-blue-500/5 border border-blue-500/10 p-5 rounded-3xl">
                      <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Info size={14} /> Notas Técnicas</h4>
                      <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                        {drug.informacion_cliente.slice(0, 2).map((info, i) => <li key={i}>{info}</li>)}
                        {doseConfig?.notas_tecnicas && <li className="text-accent font-bold italic">{doseConfig.notas_tecnicas}</li>}
                      </ul>
                    </div>
                  </div>
                )}
              </PinterestCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}