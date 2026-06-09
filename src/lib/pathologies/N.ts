import type { Pathology } from '../types';

export const pathologiesN: Pathology[] = [
  {
    id: 'tumores-nasales',
    nombre: 'Tumores de Cavidad Nasal',
    descripcion: 'Cáncer en el epitelio respiratorio.',
    etiology: 'Genética y carcinógenos ambientales.',
    sintomas: [
      'Descarga nasal con sangre',
      'Estornudos',
      'Deformidad facial'
    ],
    diagnostico: [
      'Rinoscopia con biopsia',
      'TC de cráneo'
    ],
    tratamiento: 'Radioterapia.',
    prevencion_control: 'Evitar humo de tabaco.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
