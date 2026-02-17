import type { Constante, Vacuna, GestationData, ReptileVariant } from './types';
import { DB_MEDICAMENTOS as drugs } from './drugs';

export const DB_MEDICAMENTOS = drugs;

export const SPECIES_ICONS: { [key: string]: string } = { 
    'perro': '🐶', 'gato': '🐱', 'caballo': '🐴', 'bovino': '🐮', 
    'huron': '🦦', 'conejo': '🐰', 'cobaya': '🐹', 'erizo': '🦔',
    'ave': '🦜', 'reptil': '🦎', 'cerdo': '🐷', 'ovino_caprino': '🐐', 'roedores': '🐀'
};

export const CONSTANTES_DATA: Constante[] = [
  { esp: 'Perro', icon: '🐶', t_min: 37.5, t_max: 39.2, fc_min: 60, fc_max: 160, fr_min: 10, fr_max: 30, tllc: '< 2s', hemograma: { hto: '37-55%', gb: '6-17', plaq: '200-500' } },
  { esp: 'Gato', icon: '🐱', t_min: 38.0, t_max: 39.2, fc_min: 140, fc_max: 220, fr_min: 20, fr_max: 42, tllc: '< 2s', hemograma: { hto: '24-45%', gb: '5.5-19.5', plaq: '300-800' } },
  { esp: 'Caballo', icon: '🐴', t_min: 37.5, t_max: 38.5, fc_min: 28, fc_max: 40, fr_min: 8, fr_max: 16, tllc: '< 2.5s', hemograma: { hto: '32-52%', gb: '5-12.5', plaq: '100-350' } },
  { esp: 'Bovino', icon: '🐮', t_min: 38.0, t_max: 39.0, fc_min: 40, fc_max: 80, fr_min: 10, fr_max: 30, tllc: '< 2s', hemograma: { hto: '24-46%', gb: '4-12', plaq: '100-800' } },
  { esp: 'Cerdo', icon: '🐷', t_min: 38.0, t_max: 39.5, fc_min: 60, fc_max: 80, fr_min: 8, fr_max: 18, tllc: '< 2s', hemograma: { hto: '32-50%', gb: '11-22', plaq: '300-700' } },
  { esp: 'Conejo', icon: '🐰', t_min: 38.3, t_max: 39.4, fc_min: 130, fc_max: 325, fr_min: 30, fr_max: 60, tllc: '< 2s', hemograma: { hto: '30-50%', gb: '5-13', plaq: '250-650' } },
  { esp: 'Hurón', icon: '🦦', t_min: 37.8, t_max: 40.0, fc_min: 200, fc_max: 400, fr_min: 33, fr_max: 36, tllc: '< 2s', hemograma: { hto: '36-48%', gb: '2-8', plaq: '200-900' } },
  { esp: 'Cobaya', icon: '🐹', t_min: 37.2, t_max: 39.5, fc_min: 240, fc_max: 310, fr_min: 40, fr_max: 100, tllc: '< 2s', hemograma: { hto: '39-55%', gb: '5-15', plaq: '250-850' } },
  { esp: 'Erizo', icon: '🦔', t_min: 36.0, t_max: 37.5, fc_min: 180, fc_max: 280, fr_min: 25, fr_max: 50, tllc: '< 2s', hemograma: { hto: '35-50%', gb: '6-13', plaq: '150-400' } },
  { esp: 'Ave', icon: '🦜', t_min: 40.0, t_max: 42.0, fc_min: 150, fc_max: 350, fr_min: 30, fr_max: 50, tllc: '< 2s', hemograma: { hto: '35-55%', gb: '5-11', plaq: 'N/A' } },
  { esp: 'Reptil', icon: '🦎', t_min: 0, t_max: 0, fc_min: 0, fc_max: 0, fr_min: 0, fr_max: 0, tllc: 'N/A', hemograma: null },
];

export const REPTILE_VARIANTS: ReptileVariant = {
  'Tortuga de Tierra': { t_min: 26, t_max: 32, fc_min: 40, fc_max: 80, fr_min: 10, fr_max: 30 },
  'Camaleón': { t_min: 24, t_max: 30, fc_min: 60, fc_max: 100, fr_min: 15, fr_max: 35 },
  'Pitón Bola': { t_min: 28, t_max: 32, fc_min: 30, fc_max: 60, fr_min: 5, fr_max: 20 },
  'Dragón Barbudo': { t_min: 35, t_max: 43, fc_min: 60, fc_max: 90, fr_min: 10, fr_max: 30 },
  'Gecko Leopardo': { t_min: 28, t_max: 32, fc_min: 40, fc_max: 80, fr_min: 10, fr_max: 30 },
  'Iguana Verde': { t_min: 29, t_max: 35, fc_min: 40, fc_max: 75, fr_min: 15, fr_max: 30 },
};

export const VACUNAS_DATA: { [key: string]: Vacuna[] } = {
  Perro: [
    { edad: '6-8 Semanas', vacuna: 'Puppy DP (Parvo/Moquillo)', tipo: 'Esencial' }, 
    { edad: '10-12 Semanas', vacuna: 'Quíntuple (Refuerzo 1)', tipo: 'Esencial' }, 
    { edad: '14-16 Semanas', vacuna: 'Quíntuple + Rabia', tipo: 'Esencial' },
    { edad: 'Anual', vacuna: 'Quíntuple + Rabia + Bordetella', tipo: 'Refuerzo' }
  ],
  Gato: [
    { edad: '8-9 Semanas', vacuna: 'Triple Felina', tipo: 'Esencial' }, 
    { edad: '11-12 Semanas', vacuna: 'Triple + Leucemia', tipo: 'Esencial' },
    { edad: '16 Semanas', vacuna: 'Rabia', tipo: 'Esencial' }
  ],
  Hurón: [
    { edad: '6-8 Semanas', vacuna: 'Moquillo (Canino)', tipo: 'Esencial' },
    { edad: '10-12 Semanas', vacuna: 'Moquillo (Refuerzo)', tipo: 'Esencial' },
    { edad: '14-16 Semanas', vacuna: 'Rabia', tipo: 'Esencial' }
  ],
  Conejo: [
    { edad: '5 Semanas', vacuna: 'Mixomatosis', tipo: 'Zona Riesgo' },
    { edad: '10 Semanas', vacuna: 'Enf. Hemorrágica Viral', tipo: 'Esencial' }
  ],
  Caballo: [
    { edad: '4-6 Meses', vacuna: 'Tétanos, Encefalitis, Influenza', tipo: 'Esencial' },
    { edad: 'Anual', vacuna: 'Refuerzo Triple + Rabia', tipo: 'Refuerzo' }
  ],
  Bovino: [
    { edad: '3-4 Meses', vacuna: 'Clostridial (Mancha)', tipo: 'Esencial' },
    { edad: '4-5 Meses', vacuna: 'Viral Respiratoria', tipo: 'Esencial' },
    { edad: 'Pre-Servicio', vacuna: 'Reproductiva (IBR/DVB/Lepto)', tipo: 'Estratégica' }
  ],
  Cerdo: [
    { edad: '3 Semanas', vacuna: 'Micoplasma', tipo: 'Esencial' },
    { edad: '6-7 Semanas', vacuna: 'Erisipela + Circovirus', tipo: 'Esencial' }
  ]
};

export const GESTATION_DATA_FULL: GestationData = {
  'perro': { avg: 63, eco: 25, deworm: 40, rx: 45 },
  'gato': { avg: 65, eco: 25, deworm: 40, rx: 45 },
  'caballo': { avg: 340, eco: 14, deworm: 0, rx: 0 },
  'bovino': { avg: 283, eco: 30, deworm: 0, rx: 0 },
  'cerdo': { avg: 114, eco: 25, deworm: 100, rx: 0 },
  'conejo': { avg: 31, eco: 10, deworm: 0, rx: 0 },
  'huron': { avg: 42, eco: 20, deworm: 0, rx: 35 },
  'cobaya': { avg: 65, eco: 25, deworm: 0, rx: 45 },
  'erizo': { avg: 35, eco: 0, deworm: 0, rx: 0 },
};