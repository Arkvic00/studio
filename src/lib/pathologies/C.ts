import type { Pathology } from '../types';

export const pathologiesC: Pathology[] = [
  {
    id: 'cataratas-caninas',
    nombre: 'Cataratas Caninas',
    descripcion: 'Opacidad del cristalino que impide el paso de la luz hacia la retina.',
    etiology: 'Hereditaria (más común), diabetes mellitus, trauma, inflamación (uveítis) o senilidad.',
    sintomas: [
      'Opacidad blanquecina o azulada en el centro del ojo',
      'Pérdida progresiva de visión',
      'Desorientación',
      'Choque con objetos en ambientes nuevos'
    ],
    diagnostico: [
      'Examen con lámpara de hendidura',
      'Oftalmoscopia indirecta',
      'Ecografía ocular (si la catarata es madura)',
      'Electrorretinografía (antes de cirugía)'
    ],
    tratamiento: 'Cirugía de facoemulsificación con implante de lente intraocular.',
    prevencion_control: 'Control glucémico en diabéticos y selección genética de reproductores.',
    especies_afectadas: ['Perro', 'Gato', 'Caballo'],
    categoria: 'Ocular'
  },
  {
    id: 'cardiomiopatia-dilatada',
    nombre: 'Cardiomiopatía Dilatada (MCD)',
    descripcion: 'Enfermedad del músculo cardíaco caracterizada por el agrandamiento de las cámaras y la reducción de la contractilidad.',
    etiology: 'Primaria (genética/familiar) o secundaria (deficiencia de taurina, carnitina o infecciosa).',
    sintomas: [
      'Tos y dificultad respiratoria',
      'Letargo y debilidad',
      'Síncope (desmayos)',
      'Abdomen distendido (ascitis)',
      'Arritmias'
    ],
    diagnostico: [
      'Ecocardiografía (dilatación y baja fracción de acortamiento)',
      'Radiografía de tórax (cardiomegalia)',
      'Electrocardiograma (ECG)',
      'Pro-BNP'
    ],
    tratamiento: 'Inotrópicos positivos (Pimobendan), diuréticos, inhibidores de la ECA y antiarrítmicos.',
    prevencion_control: 'Suplementación nutricional en razas de riesgo y tamizaje ecográfico regular.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Cardíaca'
  }
];
