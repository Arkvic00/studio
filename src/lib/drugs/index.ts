import type { Drug } from '@/lib/types';
import { acarbosaDrug } from './acarbosa';
import { aceiteMineralDrug } from './aceite_mineral';
import { acepromazinaMaleatoDrug } from './acepromazina_maleato';
import { acetaminofenDrug } from './acetaminofen';
import { acetatoDeCalcioDrug } from './acetato_de_calcio';


export const DB_MEDICAMENTOS: Drug[] = [
    acarbosaDrug,
    aceiteMineralDrug,
    acepromazinaMaleatoDrug,
    acetaminofenDrug,
    acetatoDeCalcioDrug,
];
