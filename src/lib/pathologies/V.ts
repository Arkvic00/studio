import type { Pathology } from '../types';

export const pathologiesV: Pathology[] = [
  {
    id: 'von-willebrand',
    nombre: 'Enfermedad de Von Willebrand (EvW)',
    descripcion: 'Trastorno de la coagulación causado por la deficiencia o disfunción del factor de Von Willebrand.',
    etiology: 'Defecto genético hereditario (Tipo I, II o III).',
    sintomas: [
      'Sangrado de mucosas (epistaxis, encías)',
      'Sangrado prolongado tras cortes o cirugías',
      'Hematomas',
      'Hemorragia intestinal (melena)'
    ],
    diagnostico: [
      'Tiempo de sangrado de la mucosa bucal (BMBT) prolongado',
      'Ensayo de antígeno del factor Von Willebrand (vWF:Ag)',
      'Prueba de ADN'
    ],
    tratamiento: 'Administración de Desmopresina (DDAVP) antes de cirugías en Tipo I. Transfusión de crioprecipitado.',
    prevencion_control: 'Pruebas genéticas antes de la cría.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
