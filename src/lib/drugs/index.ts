'use client';

import { groupAC } from './group-a-c';
import { groupDF } from './group-d-f';
import { groupGL } from './group-g-l';
import { groupMP } from './group-m-p';
import { groupRS } from './group-r-s';

/**
 * Base de datos global del Vademécum.
 * Los fármacos se cargan de forma modular por grupos alfabéticos para mejorar 
 * el rendimiento de la compilación y la robustez del sistema.
 */
export const DB_MEDICAMENTOS = [
    ...groupAC,
    ...groupDF,
    ...groupGL,
    ...groupMP,
    ...groupRS,
];
