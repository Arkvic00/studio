import { pathologiesA } from './A';
import { pathologiesB } from './B';
import { pathologiesC } from './C';
import { pathologiesD } from './D';
import { pathologiesE } from './E';
import { pathologiesL } from './L';
import { pathologiesM } from './M';
import { pathologiesP } from './P';
import { pathologiesQ } from './Q';
import { pathologiesT } from './T';
import type { Pathology } from '../types';

export const ALL_PATHOLOGIES: Pathology[] = [
  ...pathologiesA,
  ...pathologiesB,
  ...pathologiesC,
  ...pathologiesD,
  ...pathologiesE,
  ...pathologiesL,
  ...pathologiesM,
  ...pathologiesP,
  ...pathologiesQ,
  ...pathologiesT,
];

export const getPathologyById = (id: string) => ALL_PATHOLOGIES.find(p => p.id === id);
