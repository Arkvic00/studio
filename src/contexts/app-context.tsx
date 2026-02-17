
'use client';

import React, { createContext, useContext, useRef, type ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import type { Calculation, Patient, DrugImage } from '@/lib/types';

interface AppContextType {
  patient: Patient;
  setPatient: (patient: Patient | ((prev: Patient) => Patient)) => void;
  calculations: Calculation[];
  setCalculations: (calculations: Calculation[] | ((prev: Calculation[]) => Calculation[])) => void;
  drugImages: DrugImage;
  setDrugImages: (images: DrugImage | ((prev: DrugImage) => DrugImage)) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  triggerUpload: (e: React.MouseEvent<HTMLButtonElement>, drugId: string) => void;
  uploadingDrugId: string | null;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [patient, setPatient] = useLocalStorage<Patient>('patientData', { nombre: '', especie: 'Perro', peso: '' });
  const [calculations, setCalculations] = useLocalStorage<Calculation[]>('doseCalculations', []);
  const [drugImages, setDrugImages] = useLocalStorage<DrugImage>('drugImages', {});
  const [uploadingDrugId, setUploadingDrugId] = React.useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && uploadingDrugId) {
      if (file.size > 500000) {
        alert("Imagen muy grande. Usa una menor a 500KB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setDrugImages(prev => ({ ...prev, [uploadingDrugId]: reader.result as string }));
        setUploadingDrugId(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = (e: React.MouseEvent<HTMLButtonElement>, drugId: string) => {
    e.stopPropagation();
    setUploadingDrugId(drugId);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset file input
      fileInputRef.current.click();
    }
  };

  const value: AppContextType = {
    patient,
    setPatient,
    calculations,
    setCalculations,
    drugImages,
    setDrugImages,
    fileInputRef,
    triggerUpload,
    uploadingDrugId,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
