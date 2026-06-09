import type { Pathology } from '../types';

export const pathologiesQ: Pathology[] = [
  {
    id: 'quilotorax-idiopatico',
    nombre: 'Quilotórax Idiopático',
    descripcion: 'Líquido linfático en el tórax.',
    etiology: 'Desconocida.',
    sintomas: [
      'Dificultad respiratoria',
      'Tos'
    ],
    diagnostico: [
      'Radiografía',
      'Análisis líquido (triglicéridos)'
    ],
    tratamiento: 'Drenaje o cirugía.',
    prevencion_control: 'N/A.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
