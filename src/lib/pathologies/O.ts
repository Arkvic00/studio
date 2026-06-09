import type { Pathology } from '../types';

export const pathologiesO: Pathology[] = [
  {
    id: 'degeneracion-conos-hemeralopia',
    nombre: 'Degeneración de Conos (Hemeralopia)',
    descripcion: 'Ceguera que solo ocurre de día o bajo luz brillante.',
    etiology: 'Defecto genético recesivo.',
    sintomas: [
      'Ceguera diurna',
      'Visión nocturna normal',
      'Fotofobia'
    ],
    diagnostico: [
      'ERG específico',
      'Prueba genética'
    ],
    tratamiento: 'Lentes protectoras.',
    prevencion_control: 'Control de portadores.',
    especies_afectadas: ['Perro'],
    categoria: 'Ocular'
  }
];
