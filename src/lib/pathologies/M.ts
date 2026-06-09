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
  },
  {
    id: 'migracion-espigas-gramineas',
    nombre: 'Migración de Espigas de Gramíneas (Grass Awn)',
    descripcion: 'Cuerpos extraños vegetales que penetran la piel o cavidades y migran por el cuerpo.',
    etiology: 'Exposición ambiental a gramíneas en meses de verano.',
    sintomas: [
      'Fístulas con drenaje',
      'Estornudos (si es nasal)',
      'Cojera (si es interdigital)',
      'Dolor localizado e inflamación'
    ],
    diagnostico: [
      'Examen físico detallado',
      'Ecografía de tejidos blandos',
      'Exploración quirúrgica'
    ],
    tratamiento: 'Extracción del cuerpo extraño y antibióticos.',
    prevencion_control: 'Revisión del pelaje tras paseos y corte de pelo en zonas de riesgo.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
