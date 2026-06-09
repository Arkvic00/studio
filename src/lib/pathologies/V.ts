import type { Pathology } from '../types';

export const pathologiesV: Pathology[] = [
  {
    id: 'von-willebrand',
    nombre: 'Enfermedad de Von Willebrand (EvW)',
    descripcion: 'El trastorno hemorrágico hereditario más común en perros.',
    etiology: 'Deficiencia o disfunción del factor de von Willebrand (vWF), crucial para la adhesión plaquetaria.',
    sintomas: [
      'Sangrado de mucosas (epistaxis, hematuria)',
      'Sangrado prolongado de encías',
      'Hemorragia excesiva tras corte de uñas o cirugía'
    ],
    diagnostico: [
      'Prueba de tiempo de sangría de la mucosa bucal (BMBT)',
      'Ensayo cuantitativo de antígeno vWF:Ag',
      'Pruebas genéticas de ADN'
    ],
    tratamiento: 'Administración de desmopresina (DDAVP) antes de cirugías; crioprecipitado.',
    prevencion_control: 'Tamizaje genético de reproductores.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
