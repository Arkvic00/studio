import type { Pathology } from '../types';

export const pathologiesN: Pathology[] = [
  {
    id: 'tumores-nasales',
    nombre: 'Tumores de Cavidad Nasal',
    descripcion: 'Neoplasias agresivas que crecen en los cornetes nasales y senos paranasales.',
    etiology: 'Base genética (Airedales) agravada por contaminantes ambientales.',
    sintomas: [
      'Estornudos crónicos',
      'Descarga nasal unilateral o bilateral (mucosa o con sangre)',
      'Deformidad de la cara o el puente nasal',
      'Exoftalmos (ojo que sobresale)'
    ],
    diagnostico: [
      'Tomografía Computarizada (TC) de cráneo',
      'Rinoscopia con toma de biopsia',
      'Radiografía de tórax (para buscar metástasis)'
    ],
    tratamiento: 'Radioterapia es la opción principal; quimioterapia paliativa.',
    prevencion_control: 'Evitar humo de tabaco.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
