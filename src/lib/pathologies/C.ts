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
  }
];
