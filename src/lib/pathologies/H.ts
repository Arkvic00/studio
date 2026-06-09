import type { Pathology } from '../types';

export const pathologiesH: Pathology[] = [
  {
    id: 'hipotiroidismo',
    nombre: 'Hipotiroidismo Canino',
    descripcion: 'Deficiencia de hormonas tiroideas que afecta el metabolismo sistémico.',
    etiology: 'Tiroiditis linfocítica inmunomediada (común en Huskies) o atrofia idiopática de la glándula.',
    sintomas: [
      'Aumento de peso sin exceso de apetito',
      'Letargo y búsqueda de calor',
      'Alopecia bilateral simétrica y cola de rata',
      'Hiperpigmentación cutánea'
    ],
    diagnostico: [
      'Medición de T4 libre por diálisis',
      'TSH canina endógena elevada',
      'Autoanticuerpos tiroideos (THAA)'
    ],
    tratamiento: 'Suplementación de por vida con Levotiroxina sódica.',
    prevencion_control: 'Monitoreo anual de niveles hormonales.',
    especies_afectadas: ['Perro'],
    categoria: 'Metabólica'
  },
  {
    id: 'hemofilia-b',
    nombre: 'Hemofilia B (Deficiencia de Factor IX)',
    descripcion: 'Trastorno de coagulación severo ligado al cromosoma X.',
    etiology: 'Mutación genética que causa deficiencia funcional del Factor IX.',
    sintomas: [
      'Hemorragias articulares (hemartrosis)',
      'Hematomas musculares profundos',
      'Sangrado prolongado tras trauma o cirugía'
    ],
    diagnostico: [
      'TTPA prolongado con TP normal',
      'Ensayo de actividad específica de Factor IX'
    ],
    tratamiento: 'Transfusión de plasma fresco congelado o concentrados de factor.',
    prevencion_control: 'No criar con animales afectados o portadoras.',
    especies_afectadas: ['Perro'],
    categoria: 'Otros'
  }
];
