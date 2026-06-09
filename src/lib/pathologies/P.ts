import type { Pathology } from '../types';

export const pathologiesP: Pathology[] = [
  {
    id: 'panosteitis',
    nombre: 'Panosteitis',
    descripcion: 'Inflamación de huesos largos en crecimiento.',
    etiology: 'Desconocida.',
    sintomas: [
      'Cojera cambiante',
      'Dolor óseo agudo'
    ],
    diagnostico: [
      'Radiografía (aumento opacidad medular)'
    ],
    tratamiento: 'AINEs.',
    prevencion_control: 'Dieta equilibrada.',
    especies_afectadas: ['Perro'],
    categoria: 'Ortopédica'
  },
  {
    id: 'pancreatitis',
    nombre: 'Pancreatitis',
    descripcion: 'Inflamación dolorosa del páncreas.',
    etiology: 'Grasas, fármacos o genética.',
    sintomas: [
      'Vómitos',
      'Dolor abdominal agudo',
      'Anorexia'
    ],
    diagnostico: [
      'Prueba cPLI/fPLI',
      'Ecografía'
    ],
    tratamiento: 'Fluidos y analgesia potente.',
    prevencion_control: 'Dieta baja en grasa.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Metabólica'
  }
];
