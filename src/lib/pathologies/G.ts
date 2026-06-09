import type { Pathology } from '../types';

export const pathologiesG: Pathology[] = [
  {
    id: 'gangliosidosis-gm1',
    nombre: 'Gangliosidosis GM1',
    descripcion: 'Enfermedad de almacenamiento lisosómico que causa acumulación de gangliósidos en el cerebro y otros órganos.',
    etiology: 'Deficiencia de la enzima beta-galactosidasa, hereditaria autosómica recesiva.',
    sintomas: [
      'Enanismo proporcional',
      'Ataxia y dismetría (paso descoordinado)',
      'Temblores de cabeza',
      'Deterioro neurológico progresivo rápido'
    ],
    diagnostico: [
      'Signos clínicos en jóvenes (5-7 meses)',
      'Ensayo enzimático',
      'Prueba de ADN (mutación identificada)'
    ],
    tratamiento: 'No hay tratamiento; enfermedad fatal.',
    prevencion_control: 'Eliminación de portadores de la población reproductora.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Genética'
  }
];
