import type { Pathology } from '../types';

export const pathologiesF: Pathology[] = [
  {
    id: 'deficiencia-factor-vii',
    nombre: 'Deficiencia de Factor VII',
    descripcion: 'Trastorno leve de la coagulación que afecta la vía extrínseca.',
    etiology: 'Defecto genético hereditario.',
    sintomas: [
      'Normalmente asintomático',
      'Sangrado excesivo tras cirugía mayor',
      'Hematomas tras traumas leves'
    ],
    diagnostico: [
      'Tiempo de Protrombina (TP) prolongado',
      'Ensayo específico de Factor VII'
    ],
    tratamiento: 'Transfusión de plasma si hay hemorragia.',
    prevencion_control: 'Prueba de coagulación antes de cirugías en razas de riesgo.',
    especies_afectadas: ['Perro'],
    categoria: 'Otros'
  }
];
