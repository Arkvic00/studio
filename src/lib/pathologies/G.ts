import type { Pathology } from '../types';

export const pathologiesG: Pathology[] = [
  {
    id: 'gangliosidosis-gm1',
    nombre: 'Gangliosidosis GM1',
    descripcion: 'Acumulación tóxica de lípidos en el cerebro.',
    etiology: 'Deficiencia enzimática hereditaria recesiva.',
    sintomas: [
      'Enanismo',
      'Temblores de cabeza',
      'Ataxia progresiva rápida'
    ],
    diagnostico: [
      'Signos en cachorros jóvenes',
      'Prueba de ADN'
    ],
    tratamiento: 'Ninguno; fatal.',
    prevencion_control: 'Eliminar portadores.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Genética'
  }
];
