export const SPECIES_THEMES = {
    Perro: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', accent: 'bg-blue-500', decoration: 'shadow-blue-500/10' },
    Gato: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', accent: 'bg-purple-500', decoration: 'shadow-purple-500/10' },
    Caballo: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', accent: 'bg-orange-500', decoration: 'shadow-orange-500/10' },
    Bovino: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', accent: 'bg-emerald-500', decoration: 'shadow-emerald-500/10' },
    Ovino: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400', accent: 'bg-teal-500', decoration: 'shadow-teal-500/10' },
    Caprino: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', accent: 'bg-cyan-500', decoration: 'shadow-cyan-500/10' },
    Cerdo: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', accent: 'bg-rose-500', decoration: 'shadow-rose-500/10' },
    Conejo: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400', accent: 'bg-pink-500', decoration: 'shadow-pink-500/10' },
    Huron: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400', accent: 'bg-yellow-500', decoration: 'shadow-yellow-500/10' },
    Cobaya: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', accent: 'bg-amber-500', decoration: 'shadow-amber-500/10' },
    Erizo: { bg: 'bg-stone-500/10', border: 'border-stone-500/20', text: 'text-stone-400', accent: 'bg-stone-500', decoration: 'shadow-stone-500/10' },
    Ave: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', accent: 'bg-sky-500', decoration: 'shadow-sky-500/10' },
    Reptil: { bg: 'bg-lime-500/10', border: 'border-lime-500/20', text: 'text-lime-400', accent: 'bg-lime-500', decoration: 'shadow-lime-500/10' },
    Roedores: { bg: 'bg-gray-500/10', border: 'border-gray-500/20', text: 'text-gray-400', accent: 'bg-gray-500', decoration: 'shadow-gray-500/10' },
    Primates: { bg: 'bg-orange-600/10', border: 'border-orange-600/20', text: 'text-orange-500', accent: 'bg-orange-600', decoration: 'shadow-orange-600/10' },
    Axolote: { bg: 'bg-pink-400/10', border: 'border-pink-400/20', text: 'text-pink-300', accent: 'bg-pink-400', decoration: 'shadow-pink-400/10' },
    petauro: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', accent: 'bg-indigo-500', decoration: 'shadow-indigo-500/10' },
    Peces: { bg: 'bg-cyan-600/10', border: 'border-cyan-600/20', text: 'text-cyan-500', accent: 'bg-cyan-600', decoration: 'shadow-cyan-600/10' },
    default: { bg: 'bg-slate-500/10', border: 'border-slate-500/20', text: 'text-slate-400', accent: 'bg-slate-500', decoration: 'shadow-slate-500/10' }
};

export const SPECIES_CONFIG: Record<string, { label: string; icon: string; theme: typeof SPECIES_THEMES.default }> = {
  perro: { label: 'Perro', icon: '🐩', theme: SPECIES_THEMES.Perro },
  gato: { label: 'Gato', icon: '🐱', theme: SPECIES_THEMES.Gato },
  caballo: { label: 'Caballo', icon: '🐴', theme: SPECIES_THEMES.Caballo },
  bovino: { label: 'Bovino', icon: '🐮', theme: SPECIES_THEMES.Bovino },
  ovino: { label: 'Ovino', icon: 'RAM', theme: SPECIES_THEMES.Ovino },
  caprino: { label: 'Caprino', icon: '🐐', theme: SPECIES_THEMES.Caprino },
  cerdo: { label: 'Cerdo', icon: '🐷', theme: SPECIES_THEMES.Cerdo },
  roedores: { label: 'Roedores', icon: '🐭', theme: SPECIES_THEMES.Roedores },
  conejo: { label: 'Conejo', icon: '🐰', theme: SPECIES_THEMES.Conejo },
  huron: { label: 'Hurón', icon: '🦦', theme: SPECIES_THEMES.Huron },
  cobaya: { label: 'Cobaya', icon: '🐹', theme: SPECIES_THEMES.Cobaya },
  erizo: { label: 'Erizo', icon: '🦔', theme: SPECIES_THEMES.Erizo },
  ave: { label: 'Ave', icon: '🦜', theme: SPECIES_THEMES.Ave },
  reptil: { label: 'Reptil', icon: '🦎', theme: SPECIES_THEMES.Reptil },
  primates: { label: 'Primates', icon: '🐒', theme: SPECIES_THEMES.Primates },
  axolote: { label: 'Axolote', icon: '👾', theme: SPECIES_THEMES.Axolote },
  petauro: { label: 'Sugar Glider', icon: '🐿️', theme: SPECIES_THEMES.petauro },
  peces: { label: 'Peces', icon: '🐠', theme: SPECIES_THEMES.Peces },
};

export const speciesList = [
  'perro', 'gato', 'caballo', 'bovino', 'ovino', 'caprino', 'cerdo', 
  'roedores', 'conejo', 'huron', 'cobaya', 'erizo', 'ave', 
  'reptil', 'primates', 'axolote', 'petauro', 'peces'
];

export const normalizeStr = (str: string): string => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

export const getSpeciesKey = (s: string) => s ? normalizeStr(s) : 'perro';

export const getSpeciesInfo = (key: string) => {
    const normalized = normalizeStr(key);
    return SPECIES_CONFIG[normalized as keyof typeof SPECIES_CONFIG] || null;
};
