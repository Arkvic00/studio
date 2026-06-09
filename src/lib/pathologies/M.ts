import type { Pathology } from '../types';

export const pathologiesM: Pathology[] = [
  {
    id: 'mielopatia-afgana',
    nombre: 'Mielopatía Afgana',
    descripcion: 'Enfermedad desmielinizante degenerativa específica de la médula espinal en galgos afganos.',
    etiology: 'Hereditaria, de carácter autosómico recesivo.',
    sintomas: [
      'Ataxia progresiva en jóvenes (3-12 meses)',
      'Parálisis de las cuatro patas (tetraplejia)',
      'Ausencia de dolor en la columna',
      'Deterioro rápido en semanas'
    ],
    diagnostico: [
      'Resonancia Magnética (desmielinizacion)',
      'Análisis de LCR',
      'Biopsia post-mortem (diagnóstico definitivo)'
    ],
    tratamiento: 'No existe tratamiento efectivo; es una enfermedad fatal o que requiere eutanasia por bienestar.',
    prevencion_control: 'Pruebas genéticas y selección de reproductores.',
    especies_afectadas: ['Perro'],
    categoria: 'Neurológica'
  }
];
