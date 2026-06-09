import type { Pathology } from '../types';

export const pathologiesN: Pathology[] = [
  {
    id: 'tumores-nasales',
    nombre: 'Tumores de Cavidad Nasal',
    descripcion: 'Neoplasias malignas que se originan en el epitelio respiratorio o nasal.',
    etiology: 'Multifactorial; mayor incidencia en perros de hocico largo (dolicocéfalos).',
    sintomas: [
      'Descarga nasal persistente (a menudo unilateral y hemorrágica)',
      'Estornudos frecuentes',
      'Deformidad facial (casos avanzados)',
      'Dificultad respiratoria'
    ],
    diagnostico: [
      'Rinoscopia con biopsia',
      'Tomografía Computarizada (TC) de cráneo',
      'Radiografía de tórax (metástasis)'
    ],
    tratamiento: 'Radioterapia es el tratamiento de elección. Cirugía y quimioterapia tienen éxito limitado.',
    prevencion_control: 'Evitar exposición a carcinógenos ambientales (humo de tabaco).',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
