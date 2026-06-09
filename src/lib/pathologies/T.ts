import type { Pathology } from '../types';

export const pathologiesT: Pathology[] = [
  {
    id: 'torsion-lobulo-pulmonar',
    nombre: 'Torsión de Lóbulo Pulmonar',
    descripcion: 'Rotación de un lóbulo del pulmón sobre su propio eje, estrangulando el suministro de sangre y aire.',
    etiology: 'Espontánea en razas predispuestas (pecho profundo) o secundaria a efusión pleural.',
    sintomas: [
      'Tos con sangre (hemoptisis)',
      'Disnea severa súbita',
      'Shock',
      'Dolor torácico'
    ],
    diagnostico: [
      'Radiografía de tórax',
      'Tomografía Computarizada (diagnóstico definitivo)',
      'Ecografía torácica'
    ],
    tratamiento: 'Estabilización de emergencia y lobectomía quirúrgica (extracción del lóbulo afectado).',
    prevencion_control: 'Difícil de prevenir por su naturaleza súbita.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  },
  {
    id: 'tumores-traqueales-laringeos',
    nombre: 'Tumores Traqueales y Laríngeos',
    descripcion: 'Neoplasias malignas o benignas que obstruyen las vías respiratorias superiores.',
    etiology: 'Multifactorial; reportada predisposición en Alaskan Malamute.',
    sintomas: [
      'Estridor respiratorio',
      'Dificultad para tragar',
      'Tos persistente',
      'Cambio en el tono de la voz'
    ],
    diagnostico: [
      'Endoscopia respiratoria',
      'Radiografía cervical y torácica',
      'Biopsia'
    ],
    tratamiento: 'Resección quirúrgica si es posible, radioterapia o manejo paliativo.',
    prevencion_control: 'Detección temprana ante cambios en la respiración.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  },
  {
    id: 'tumores-vesicales-uretrales',
    nombre: 'Tumores de Vejiga y Uretra',
    descripcion: 'Neoplasias malignas, siendo el Carcinoma de Células Transicionales (TCC) el más común.',
    etiology: 'Genética, carcinógenos ambientales (herbicidas) y obesidad.',
    sintomas: [
      'Hematuria (sangre en orina)',
      'Disuria (dificultad para orinar)',
      'Polaquiuria (orinar frecuentemente)',
      'Infecciones urinarias recurrentes'
    ],
    diagnostico: [
      'Ecografía de vías urinarias',
      'Citología de sedimento urinario',
      'Cistoscopia con biopsia',
      'Prueba de antígeno BRAF en orina'
    ],
    tratamiento: 'AINEs (Piroxicam), quimioterapia, cirugía (difícil por ubicación).',
    prevencion_control: 'Evitar exposición a químicos de jardín.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
