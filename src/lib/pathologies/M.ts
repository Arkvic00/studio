import type { Pathology } from '../types';

export const pathologiesM: Pathology[] = [
  {
    id: 'mielopatia-afgana',
    nombre: 'Mielopatía Afgana',
    descripcion: 'Degeneración medular severa en galgos afganos.',
    etiology: 'Hereditaria autosómica recesiva.',
    sintomas: [
      'Ataxia progresiva rápida',
      'Parálisis total en semanas',
      'Ausencia de dolor'
    ],
    diagnostico: [
      'RM medular',
      'Exclusión de otras causas'
    ],
    tratamiento: 'Paliativo; usualmente fatal.',
    prevencion_control: 'Selección genética.',
    especies_afectadas: ['Perro'],
    categoria: 'Neurológica'
  },
  {
    id: 'migracion-espigas-gramineas',
    nombre: 'Migración de Espigas de Gramíneas',
    descripcion: 'Cuerpos extraños vegetales que penetran y viajan por los tejidos.',
    etiology: 'Exposición ambiental en verano.',
    sintomas: [
      'Fístulas',
      'Estornudos',
      'Dolor localizado'
    ],
    diagnostico: [
      'Ecografía',
      'Exploración quirúrgica'
    ],
    tratamiento: 'Extracción y antibióticos.',
    prevencion_control: 'Revisar tras paseos.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
