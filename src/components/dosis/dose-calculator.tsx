'use client';
import { useMemo } from 'react';
import type { Patient, Calculation } from '@/lib/types';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { getSpeciesKey, SPECIES_CONFIG } from '@/lib/config';
import { Plus, Trash2, Save, Printer } from 'lucide-react';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { GlassInput } from '@/components/ui/glass-input';
import { DrugSelector } from '@/components/dosis/drug-selector';
import { getSpeciesInfo } from '@/lib/config';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface DoseCalculatorProps {
  patient: Patient;
  setPatient: (patient: Patient | ((prev: Patient) => Patient)) => void;
  calculations: Calculation[];
  setCalculations: (
    calculations: Calculation[] | ((prev: Calculation[]) => Calculation[])
  ) => void;
}

// Species from the screenshot, in order.
const speciesList = [
  'perro', 'gato', 'caballo', 'bovino', 'cerdo', 'ovino_caprino', 
  'roedores', 'conejo', 'mustelidos', 'cobaya', 'erizo', 'ave', 
  'reptil', 'peces', 'primates', 'axolote'
];


export function DoseCalculator({
  patient,
  setPatient,
  calculations,
  setCalculations,
}: DoseCalculatorProps) {
  const speciesKey = getSpeciesKey(patient.especie);

  const addDrug = () =>
    setCalculations([
      ...calculations,
      {
        id: Date.now(),
        drugId: '',
        dose: 0,
        concentration: 0,
        indicationIndex: 0,
        presentationIndex: 0,
      },
    ]);

  const removeDrug = (id: number) => {
    setCalculations(calculations.filter((c) => c.id !== id));
  };

  const updateDrug = (id: number, data: Partial<Calculation>) => {
    setCalculations(
      calculations.map((c) => {
        if (c.id === id) {
          const drug = DB_MEDICAMENTOS.find((d) => d.id === (data.drugId || c.drugId));
          if (drug && data.dose) {
            const speciesKey = getSpeciesKey(patient.especie);
            const doses = drug?.parametros_dosificacion?.[speciesKey] || [];
            const indicationIndex = data.indicationIndex ?? c.indicationIndex;
            const doseConfig = doses[indicationIndex];

            if (doseConfig && doseConfig.math.tipo_calculo === 'mg_kg') {
              const { dosis_min, dosis_max } = doseConfig.math;
              if (dosis_min && dosis_max) {
                if (data.dose < dosis_min || data.dose > dosis_max) {
                  alert('La dosis está fuera del rango recomendado.');
                }
              }
            }
          }
          return { ...c, ...data };
        }
        return c;
      })
    );
  };
  
  const bsa = useMemo(() => {
    const pesoKg = parseFloat(patient.peso as string);
    if (!pesoKg || pesoKg <= 0) return null;
    const k = speciesKey === 'gato' ? 10.0 : 10.1;
    const bsaValue = (k * Math.pow(pesoKg * 1000, 2/3)) / 10000;
    return bsaValue.toFixed(2);
  }, [patient.peso, speciesKey]);

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
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mb-8">
            {speciesList.map(key => {
                const info = getSpeciesInfo(key);
                if (!info) return null;
                const isActive = patient.especie === info.label;
                return (
                    <button 
                        key={key}
                        onClick={() => setPatient(p => ({...p, especie: info.label}))}
                        className={cn(
                            "flex flex-col items-center justify-center gap-2 p-2 rounded-2xl transition-all duration-200",
                            isActive ? 'bg-primary/20 scale-110' : 'hover:bg-secondary'
                        )}
                    >
                        <div className="text-4xl">{info.icon}</div>
                        <span className={cn("text-[10px] font-bold uppercase tracking-wider text-center", isActive ? 'text-primary' : 'text-muted-foreground')}>{info.label}</span>
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
          {bsa && <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full">ASC: {bsa} m²</div>}
        </div>
      </PinterestCard>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={addDrug}
          className="w-full py-10 rounded-4xl border-4 border-dashed border-border text-muted-foreground hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all flex flex-col items-center justify-center gap-4 group"
        >
          <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-xl">
            <Plus size={32} />
          </div>
          <span className="font-black text-xs uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">
            Añadir Medicamento
          </span>
        </button>
        <button
          className="w-full py-10 rounded-4xl border-4 border-dashed border-border text-muted-foreground hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all flex flex-col items-center justify-center gap-4 group"
        >
          <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center group-hover:bg-blue-400 group-hover:text-accent-foreground transition-all duration-300 shadow-xl">
            <Save size={32} />
          </div>
          <span className="font-black text-xs uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">
            Guardar en Historial
          </span>
        </button>
        <button
          className="w-full py-10 rounded-4xl border-4 border-dashed border-border text-muted-foreground hover:text-purple-400 hover:border-purple-400/30 hover:bg-purple-400/5 transition-all flex flex-col items-center justify-center gap-4 group"
        >
          <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center group-hover:bg-purple-400 group-hover:text-accent-foreground transition-all duration-300 shadow-xl">
            <Printer size={32} />
          </div>
          <span className="font-black text-xs uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">
            Imprimir
          </span>
        </button>
      </div>


      <div className="grid grid-cols-1 gap-6">
        {calculations.map((calc, index) => {
          const drug = DB_MEDICAMENTOS.find((d) => d.id === calc.drugId);
          const doses = drug?.parametros_dosificacion?.[speciesKey] || [];
          const doseConfig = doses[calc.indicationIndex];
          const presentations = drug?.presentaciones_comerciales || [];
          const selectedPresentation =
            presentations[calc.presentationIndex || 0];

          let result = 0;
          let resultUnit = 'ml';
          let calcType = 'mg_kg';

          if (drug && doseConfig && selectedPresentation) {
            const concentration = calc.concentration;
            if (
              selectedPresentation.tipo.toLowerCase().includes('tableta') ||
              selectedPresentation.tipo.toLowerCase().includes('cápsula')
            )
              resultUnit = 'tabletas';

            calcType = doseConfig.math.tipo_calculo;

            if (concentration > 0) {
              if (calcType === 'fija') {
                result = calc.dose / concentration;
              } else {
                result =
                  (parseFloat(patient.peso as string) * calc.dose) /
                  concentration;
              }
            }
          }

          const rangeDisplay =
            doseConfig?.math.tipo_calculo === 'mg_kg' &&
            (doseConfig.math.dosis_min || doseConfig.math.dosis_max)
              ? `Rango: ${doseConfig.math.dosis_min} - ${doseConfig.math.dosis_max} ${doseConfig.math.unidad_calculo}`
              : '';

          const borderColorClass =
            borderColors[index % borderColors.length];

          return (
            <PinterestCard
              key={calc.id}
              className={`group relative border-l-4 ${borderColorClass} transition-all`}
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => removeDrug(calc.id)}
                  className="p-2 text-slate-500 hover:text-destructive bg-card hover:bg-destructive/10 rounded-xl border border-border transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-10">
                <div className="flex-1 w-full space-y-6">
                  <DrugSelector
                    selectedDrugId={calc.drugId}
                    speciesKey={speciesKey}
                    onSelect={(id) => {
                      if (!id) return;
                      const selected = DB_MEDICAMENTOS.find((d) => d.id === id);
                      const initialDoses =
                        selected?.parametros_dosificacion?.[speciesKey] || [];
                      const initialDoseConfig = initialDoses[0];
                      const initialPres =
                        selected?.presentaciones_comerciales?.[0];

                      const rawDose = initialDoseConfig
                        ? initialDoseConfig.math.dosis_recomendada
                        : 0;
                      const parsedConc = initialPres
                        ? initialPres.valor_concentracion
                        : 0;

                      updateDrug(calc.id, {
                        drugId: id,
                        dose: rawDose,
                        presentationIndex: 0,
                        concentration: parsedConc,
                        indicationIndex: 0,
                      });
                    }}
                  />

                  {drug && (
                    <div className="space-y-6 animate-in slide-in-from-left-4 duration-500">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-2 flex items-center gap-2">
                          Presentación
                        </label>
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
                            <option key={i} value={i}>
                              {p.tipo} ({p.concentracion_texto})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-2">
                            Protocolo
                          </label>
                          <select
                            disabled={doses.length === 0}
                            className="w-full bg-background rounded-2xl p-4 text-sm font-bold text-slate-200 outline-none border-2 border-transparent focus:border-ring/30 disabled:opacity-50"
                            value={calc.indicationIndex}
                            onChange={(e) => {
                              const idx = parseInt(e.target.value);
                              const d = doses[idx];
                              const rawDose = d.math.dosis_recomendada;
                              updateDrug(calc.id, {
                                indicationIndex: idx,
                                dose: rawDose,
                              });
                            }}
                          >
                            {doses.map((d, i) => (
                              <option key={i} value={i}>
                                {d.indicacion}
                              </option>
                            ))}
                            {doses.length === 0 && <option>Sin dosis</option>}
                          </select>
                        </div>

                        <div className="flex flex-col gap-2">
                          <div className="grid grid-cols-2 gap-4">
                            <GlassInput
                              label={
                                calcType === 'fija'
                                  ? 'Dosis Total'
                                  : 'Dosis (mg/kg)'
                              }
                              type="number"
                              value={calc.dose}
                              onChange={(v) => updateDrug(calc.id, { dose: parseFloat(v) || 0 })}
                            />
                            <GlassInput
                              label="Concentración"
                              type="number"
                              value={calc.concentration}
                              onChange={(v) =>
                                updateDrug(calc.id, { concentration: parseFloat(v) || 0 })
                              }
                            />
                          </div>
                          {rangeDisplay && (
                            <span className="text-[10px] text-accent font-bold ml-2">
                              {rangeDisplay}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={`w-full lg:w-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-4xl p-8 text-center transition-all duration-500 shadow-2xl relative overflow-hidden border border-border flex-shrink-0`}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-2 ${borderColorClass.replace(
                      'border-l-',
                      'bg-'
                    )}`}
                  ></div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                    Administrar
                  </p>
                  <h2 className="text-7xl font-extrabold text-white tracking-tighter drop-shadow-md">
                    {result.toFixed(2)}
                  </h2>
                  <p className="text-sm font-bold text-slate-300 uppercase mt-2 opacity-80">
                    {resultUnit}
                  </p>

                  {doseConfig && (
                    <div className="mt-6 pt-6 border-t border-white/10 flex flex-col items-center gap-2">
                      {doseConfig.vias && (
                        <span className="text-[10px] font-black text-white uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
                          {Array.isArray(doseConfig.vias)
                            ? doseConfig.vias.join(' / ')
                            : doseConfig.vias}
                        </span>
                      )}
                      {doseConfig.frecuencia && (
                        <span className="text-[9px] font-bold text-accent uppercase tracking-wider">
                          {doseConfig.frecuencia.texto_ui}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {drug && drug.informacion_cliente && (
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="bg-blue-500/5 border border-blue-500/10 p-5 rounded-3xl">
                    <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Info size={14} /> Indicaciones al Cliente
                    </h4>
                    <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                      {drug.informacion_cliente.slice(0, 3).map((info, i) => (
                        <li key={i}>{info}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </PinterestCard>
          );
        })}
      </div>
    </div>
  );
}
