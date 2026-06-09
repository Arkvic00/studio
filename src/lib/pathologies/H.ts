import type { Pathology } from '../types';

export const pathologiesH: Pathology[] = [
  {
    id: 'hipotiroidismo',
    nombre: 'Hipotiroidismo Canino',
    descripcion: 'Falla en la producción de hormona tiroidea.',
    etiology: 'Tiroiditis inmunomediada o atrofia idiopática.',
    sintomas: [
      'Aumento de peso',
      'Letargo',
      'Alopecia bilateral',
      'Cola de rata'
    ],
    diagnostico: [
      'T4 total y libre',
      'TSH endógena elevada'
    ],
    tratamiento: 'Levotiroxina sódica de por vida.',
    prevencion_control: 'Chequeos anuales.',
    especies_afectadas: ['Perro'],
    categoria: 'Metabólica'
  },
  {
    id: 'hemofilia-b',
    nombre: 'Hemofilia B (Factor IX)',
    descripcion: 'Trastorno hemorrágico severo ligado al sexo.',
    etiology: 'Deficiencia genética de Factor IX.',
    sintomas: [
      'Sangrado articular',
      'Hematomas gigantes',
      'Muerte post-quirúrgica'
    ],
    diagnostico: [
      'TTPA prolongado',
      'Ensayo Factor IX'
    ],
    tratamiento: 'Transfusión de plasma fresco.',
    prevencion_control: 'Control genético.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
