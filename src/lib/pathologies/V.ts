import type { Pathology } from '../types';

export const pathologiesV: Pathology[] = [
  {
    id: 'von-willebrand',
    nombre: 'Enfermedad de Von Willebrand (EvW)',
    descripcion: 'Trastorno de coagulación común.',
    etiology: 'Defecto genético.',
    sintomas: [
      'Sangrado de encías',
      'Sangrado prolongado'
    ],
    diagnostico: [
      'Ensayo vWF:Ag',
      'Prueba ADN'
    ],
    tratamiento: 'Desmopresina.',
    prevencion_control: 'Tamizaje genético.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
