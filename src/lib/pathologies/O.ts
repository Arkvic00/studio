import type { Pathology } from '../types';

export const pathologiesO: Pathology[] = [
  {
    id: 'degeneracion-conos-hemeralopia',
    nombre: 'Degeneración de Conos (Hemeralopia)',
    descripcion: 'Trastorno retinal que causa ceguera diurna debido a la disfunción de los fotorreceptores de conos.',
    etiology: 'Defecto genético hereditario autosómico recesivo.',
    sintomas: [
      'Ceguera solo con luz brillante/día',
      'Visión normal en penumbra o noche',
      'Fotofobia (entrecerrar los ojos ante la luz)',
      'Desorientación en exteriores'
    ],
    diagnostico: [
      'Prueba de comportamiento en laberinto (luz vs oscuridad)',
      'Electrorretinografía (ERG) específica de conos',
      'Prueba genética'
    ],
    tratamiento: 'No hay cura. Manejo ambiental y uso de lentes protectoras especiales.',
    prevencion_control: 'Pruebas genéticas de portadores.',
    especies_afectadas: ['Perro'],
    categoria: 'Ocular'
  }
];
