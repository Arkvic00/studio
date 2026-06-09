import type { Pathology } from '../types';

export const pathologiesH: Pathology[] = [
  {
    id: 'hipotiroidismo',
    nombre: 'Hipotiroidismo Canino',
    descripcion: 'Producción insuficiente de hormonas tiroideas por la glándula tiroides.',
    etiology: 'Tiroiditis linfocítica (inmunomediada) o atrofia idiopática de la glándula.',
    sintomas: [
      'Aumento de peso sin aumento de apetito',
      'Letargo y búsqueda de calor',
      'Alopecia bilateral simétrica (cola de rata)',
      'Piel seca e infecciones cutáneas recurrentes'
    ],
    diagnostico: [
      'T4 total y T4 libre por diálisis',
      'TSH endógena (elevada en hipotiroidismo primario)',
      'Presencia de autoanticuerpos tiroideos'
    ],
    tratamiento: 'Suplementación de por vida con Levotiroxina sódica.',
    prevencion_control: 'Chequeos anuales en razas predispuestas.',
    especies_afectadas: ['Perro'],
    categoria: 'Metabólica'
  },
  {
    id: 'hemofilia-b',
    nombre: 'Hemofilia B (Deficiencia de Factor IX)',
    descripcion: 'Trastorno hemorrágico hereditario ligado al cromosoma X.',
    etiology: 'Deficiencia del Factor IX de la coagulación.',
    sintomas: [
      'Hemorragias espontáneas en articulaciones (hemartrosis)',
      'Hematomas extensos',
      'Sangrado severo tras procedimientos menores'
    ],
    diagnostico: [
      'Tiempo de Tromboplastina Parcial Activada (TTPA) prolongado',
      'Ensayo de actividad del Factor IX',
      'Ensayo genético'
    ],
    tratamiento: 'Transfusión de plasma fresco congelado o criosobrenadante.',
    prevencion_control: 'Excluir hembras portadoras y machos afectados de la cría.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
