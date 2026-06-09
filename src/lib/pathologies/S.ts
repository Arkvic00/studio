import type { Pathology } from '../types';

export const pathologiesS: Pathology[] = [
  {
    id: 'estomatocitosis',
    nombre: 'Estomatocitosis',
    descripcion: 'Glóbulos rojos deformados.',
    etiology: 'Defecto membrana eritrocitaria.',
    sintomas: [
      'Anemia leve',
      'Hallazgo incidental'
    ],
    diagnostico: [
      'Frotis sanguíneo'
    ],
    tratamiento: 'Soporte.',
    prevencion_control: 'Monitoreo.',
    especies_afectadas: ['Perro'],
    categoria: 'Otros'
  },
  {
    id: 'tumores-glandulas-sebaceas',
    nombre: 'Tumores Sebáceos',
    descripcion: 'Verrugas cutáneas comunes.',
    etiology: 'Edad/Genética.',
    sintomas: [
      'Nódulos verrugosos'
    ],
    diagnostico: [
      'Biopsia'
    ],
    tratamiento: 'Extirpación.',
    prevencion_control: 'Revisiones.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
