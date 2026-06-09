import type { Pathology } from '../types';

export const pathologiesE: Pathology[] = [
  {
    id: 'edema-corneal-adenovirus',
    nombre: 'Edema Corneal (Ojo Azul)',
    descripcion: 'Acumulación de líquido en el estroma corneal que le da un aspecto azulado.',
    etiology: 'Reacción de hipersensibilidad tipo III tras infección o vacunación con CAV-1.',
    sintomas: [
      'Córnea opaca azul brillante',
      'Fotofobia',
      'Lagrimeo'
    ],
    diagnostico: [
      'Historia clínica',
      'Examen con lámpara de hendidura'
    ],
    tratamiento: 'Suele ser autolimitante. Corticoides tópicos (sin úlcera).',
    prevencion_control: 'Vacunas modernas (Adenovirus tipo 2).',
    especies_afectadas: ['Perro'],
    categoria: 'Ocular'
  },
  {
    id: 'espondilomielopatia-cervical-wobbler',
    nombre: 'Espondilomielopatía Cervical (Wobbler)',
    descripcion: 'Compresión de la médula espinal cervical.',
    etiology: 'Genética y relacionada con el crecimiento rápido.',
    sintomas: [
      'Ataxia del tren posterior',
      'Debilidad',
      'Cuello bajo y rígido'
    ],
    diagnostico: [
      'Resonancia Magnética',
      'Mielografía'
    ],
    tratamiento: 'Cirugía o restricción de ejercicio y corticoides.',
    prevencion_control: 'Evitar suplementación excesiva de calcio.',
    especies_afectadas: ['Perro', 'Caballo'],
    categoria: 'Neurológica'
  },
  {
    id: 'encefalopatia-mitocondrial',
    nombre: 'Encefalopatía Mitocondrial',
    descripcion: 'Trastorno neurológico degenerativo causado por una disfunción en las mitocondrias de las células nerviosas.',
    etiology: 'Genética, mutación en el transportador de tiamina identificado en el Husky de Alaska.',
    sintomas: [
      'Convulsiones',
      'Déficits sensoriales (ceguera)',
      'Desorientación',
      'Ataxia progresiva'
    ],
    diagnostico: [
      'Resonancia Magnética (lesiones simétricas en tálamo)',
      'Pruebas genéticas',
      'Análisis de niveles de lactato/piruvato'
    ],
    tratamiento: 'Soporte paliativo. La suplementación con tiamina rara vez es efectiva en la forma genética.',
    prevencion_control: 'Pruebas genéticas en reproductores.',
    especies_afectadas: ['Perro'],
    categoria: 'Genética'
  }
];
