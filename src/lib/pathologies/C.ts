import type { Pathology } from '../types';

export const pathologiesC: Pathology[] = [
  {
    id: 'cataratas-caninas',
    nombre: 'Cataratas Caninas',
    descripcion: 'Opacidad del cristalino que bloquea el paso de la luz hacia la retina, pudiendo causar ceguera total.',
    etiology: 'Hereditaria (más común), diabetes mellitus, trauma, uveítis o senilidad.',
    sintomas: [
      'Opacidad blanquecina en el centro del ojo',
      'Pérdida progresiva de visión',
      'Desorientación en ambientes nuevos',
      'Ojos que brillan de forma inusual bajo luz directa'
    ],
    diagnostico: [
      'Examen con lámpara de hendidura',
      'Oftalmoscopia indirecta',
      'Ecografía ocular',
      'Electrorretinografía previa a cirugía'
    ],
    tratamiento: 'Facoemulsificación (cirugía) con implante de lente intraocular.',
    prevencion_control: 'Control glucémico estricto y tamizaje genético de padres.',
    especies_afectadas: ['Perro', 'Gato', 'Caballo'],
    categoria: 'Ocular'
  },
  {
    id: 'cardiomiopatia-dilatada',
    nombre: 'Cardiomiopatía Dilatada (MCD)',
    descripcion: 'Agrandamiento de las cámaras cardíacas con paredes delgadas y contracción débil.',
    etiology: 'Primaria (genética) o secundaria (déficit de taurina, dietas BEG, infecciones).',
    sintomas: [
      'Tos nocturna',
      'Dificultad respiratoria',
      'Síncope',
      'Abdomen con líquido (ascitis)',
      'Arritmias'
    ],
    diagnostico: [
      'Ecocardiografía (Diagnóstico definitivo)',
      'Radiografía de tórax',
      'Electrocardiograma (ECG)',
      'Niveles de Pro-BNP'
    ],
    tratamiento: 'Pimobendan, diuréticos, IECA y dieta balanceada.',
    prevencion_control: 'Suplementación nutricional y ecografía preventiva anual.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Cardíaca'
  }
];
