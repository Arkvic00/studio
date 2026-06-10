import { groupAC } from './drugs/group-a-c';
import { groupDF } from './drugs/group-d-f';
import { groupGL } from './drugs/group-g-l';
import { groupMP } from './drugs/group-m-p';
import { groupRS } from './drugs/group-r-s';
import { groupTZ } from './drugs/group-t-z';
import { groupV } from './drugs/group-v';
import { groupXYZ } from './drugs/group-xyz';

export const DB_MEDICAMENTOS = [
  ...groupAC,
  ...groupDF,
  ...groupGL,
  ...groupMP,
  ...groupRS,
  ...groupTZ,
  ...groupV,
  ...groupXYZ,
];
