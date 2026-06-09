import { pathologiesA } from './A';
import { pathologiesB } from './B';
import { pathologiesC } from './C';
import { pathologiesD } from './D';
import { pathologiesE } from './E';
import { pathologiesF } from './F';
import { pathologiesG } from './G';
import { pathologiesH } from './H';
import { pathologiesL } from './L';
import { pathologiesM } from './M';
import { pathologiesN } from './N';
import { pathologiesO } from './O';
import { pathologiesP } from './P';
import { pathologiesQ } from './Q';
import { pathologiesS } from './S';
import { pathologiesT } from './T';
import { pathologiesU } from './U';
import { pathologiesV } from './V';
import type { Pathology } from '../types';

export const ALL_PATHOLOGIES: Pathology[] = [
  ...pathologiesA,
  ...pathologiesB,
  ...pathologiesC,
  ...pathologiesD,
  ...pathologiesE,
  ...pathologiesF,
  ...pathologiesG,
  ...pathologiesH,
  ...pathologiesL,
  ...pathologiesM,
  ...pathologiesN,
  ...pathologiesO,
  ...pathologiesP,
  ...pathologiesQ,
  ...pathologiesS,
  ...pathologiesT,
  ...pathologiesU,
  ...pathologiesV,
];

export const getPathologyById = (id: string) => ALL_PATHOLOGIES.find(p => p.id === id);
