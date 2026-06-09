import type { Pathology } from '../types';

export const pathologiesU: Pathology[] = [
  {
    id: 'hernia-umbilical-congenita',
    nombre: 'Hernia Umbilical Congénita',
    descripcion: 'Defecto en el cierre del anillo umbilical que permite la protrusión de contenido abdominal.',
    etiology: 'Fallo hereditario en el desarrollo de la pared abdominal.',
    sintomas: [
      'Masa blanda y reducible en el ombligo',
      'Dolor y vómitos (si hay estrangulamiento de asa intestinal)',
      'Decoloración de la piel umbilical'
    ],
    diagnostico: [
      'Examen físico y palpación',
      'Ecografía (para evaluar contenido y tamaño del anillo)'
    ],
    tratamiento: 'Reducción quirúrgica manual y cierre del anillo (a menudo durante la castración).',
    prevencion_control: 'No criar con animales afectados debido al componente hereditario.',
    especies_afectadas: ['Perro', 'Gato', 'Cerdo'],
    categoria: 'Ortopédica'
  }
];
