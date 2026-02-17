
'use client';
import type { Patient, Calculation } from '@/lib/types';
import { DB_MEDICAMENTOS } from '@/lib/data';
import { getSpeciesKey } from '@/lib/config';
import { Plus, Trash2 } from 'lucide-react';
import { PinterestCard } from '@/components/ui/pinterest-card';
import { GlassInput } from '@/components/ui/glass-input';
import { DrugSelector } from '@/components/dosis/drug-selector';
import { getSpeciesInfo } from '@/lib/config';
import { Info } from 'lucide-react';

interface DoseCalculatorProps {
  patient: Patient;
  setPatient: (patient: Patient | ((prev: Patient) => Patient)) => void;
  calculations: Calculation[];
  setCalculations: (
    calculations: Calculation[] | ((prev: Calculation[]) => Calculation[])
  ) => void;
}

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
      calculations.map((c) => (c.id === id ? { ...c, ...data } : c))
    );
  };

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
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 bg-card border-2 border-border rounded-4xl flex items-center justify-center text-7xl shadow-2xl relative flex-shrink-0">
            {getSpeciesInfo(patient.especie).icon}
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-4">
              <GlassInput
                label="Nombre Paciente"
                value={patient.nombre}
                onChange={(v) => setPatient({ ...patient, nombre: v })}
                placeholder="Ej: Firulais"
              />
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase ml-2">
                  Especie
                </label>
                <select
                  value={patient.especie}
                  onChange={(e) =>
                    setPatient({ ...patient, especie: e.target.value })
                  }
                  className="w-full bg-card border-2 border-transparent focus:border-ring/30 rounded-2xl p-4 text-white font-bold appearance-none outline-none"
                >
                  {Object.values(getSpeciesInfo).map((s: any) => (
                    <option key={s.label} value={s.label}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
              <GlassInput
                label="Peso (kg)"
                type="number"
                value={patient.peso}
                onChange={(v) => setPatient({ ...patient, peso: v })}
                placeholder="0.0"
              />
            </div>
          </div>
        </div>
      </PinterestCard>

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
      </div>
    </div>
  );
}
