import type { Pathology } from '../types';

export const pathologiesT: Pathology[] = [
  {
    id: 'torsion-lobulo-pulmonar',
    nombre: 'Torsión de Lóbulo Pulmonar',
    descripcion: 'Pulmón que se gira sobre sí mismo.',
    etiology: 'Trauma o efusión.',
    sintomas: [
      'Tos con sangre',
      'Shock'
    ],
    diagnostico: [
      'TC torácico'
    ],
    tratamiento: 'Cirugía de urgencia.',
    prevencion_control: 'N/A.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  },
  {
    id: 'tumores-traqueales-laringeos',
    nombre: 'Tumores Laríngeos/Traqueales',
    descripcion: 'Masas obstructivas respiratorias.',
    etiology: 'Neoplasia.',
    sintomas: [
      'Estridor',
      'Tos'
    ],
    diagnostico: [
      'Endoscopia'
    ],
    tratamiento: 'Resección.',
    prevencion_control: 'Detección temprana.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  },
  {
    id: 'tumores-vesicales-uretrales',
    nombre: 'Tumores de Vejiga y Uretra',
    descripcion: 'Cáncer en vías urinarias.',
    etiology: 'Genética/Químicos.',
    sintomas: [
      'Hematuria',
      'Dificultad orinar'
    ],
    diagnostico: [
      'Ecografía',
      'Prueba BRAF'
    ],
    tratamiento: 'Piroxicam/Quimio.',
    prevencion_control: 'Evitar herbicidas.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
