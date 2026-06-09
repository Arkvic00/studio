import type { Pathology } from '../types';

export const pathologiesF: Pathology[] = [
  {
    id: 'deficiencia-factor-vii',
    nombre: 'Deficiencia de Factor VII',
    descripcion: 'Trastorno de la coagulación que afecta la vía extrínseca.',
    etiology: 'Defecto genético hereditario.',
    sintomas: [
      'Generalmente asintomático',
      'Sangrado prolongado tras cirugías o traumas graves',
      'Hematomas inusuales'
    ],
    diagnostico: [
      'Tiempo de Protrombina (TP) prolongado',
      'Ensayo específico de Factor VII',
      'Prueba genética'
    ],
    tratamiento: 'Transfusión de plasma fresco congelado si hay sangrado activo.',
    prevencion_control: 'Tamizaje genético antes de cirugías.',
    especies_afectadas: ['Perro'],
    categoria: 'Otros'
  }
];
