
'use client';
import { DoseCalculator } from '@/components/dosis/dose-calculator';
import { useAppContext } from '@/contexts/app-context';

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
