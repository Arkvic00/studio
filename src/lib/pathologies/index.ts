import { pathologiesD } from './D';
import { pathologiesP } from './P';
import type { Pathology } from '../types';

export const ALL_PATHOLOGIES: Pathology[] = [
  ...pathologiesD,
  ...pathologiesP,
  // Aquí se irán agregando los archivos de la A a la Z
];

export const getPathologyById = (id: string) => ALL_PATHOLOGIES.find(p => p.id === id);