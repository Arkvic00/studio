import type { Pathology } from '../types';

export const pathologiesU: Pathology[] = [
  {
    id: 'hernia-umbilical-congenita',
    nombre: 'Hernia Umbilical Congénita',
    descripcion: 'Fallo en cierre del ombligo.',
    etiology: 'Hereditaria.',
    sintomas: [
      'Masa en ombligo'
    ],
    diagnostico: [
      'Examen físico'
    ],
    tratamiento: 'Cirugía.',
    prevencion_control: 'No criar.',
    especies_afectadas: ['Perro', 'Gato', 'Cerdo'],
    categoria: 'Otros'
  }
];
