
export const SPECIES_THEMES = {
    Perro: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', accent: 'bg-blue-500', decoration: 'shadow-blue-500/10' },
    Gato: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', accent: 'bg-purple-500', decoration: 'shadow-purple-500/10' },
    Caballo: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', accent: 'bg-orange-500', decoration: 'shadow-orange-500/10' },
    Bovino: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', accent: 'bg-emerald-500', decoration: 'shadow-emerald-500/10' },
    Conejo: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400', accent: 'bg-pink-500', decoration: 'shadow-pink-500/10' },
    Hurón: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400', accent: 'bg-yellow-500', decoration: 'shadow-yellow-500/10' },
    Cobaya: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', accent: 'bg-amber-500', decoration: 'shadow-amber-500/10' },
    Erizo: { bg: 'bg-stone-500/10', border: 'border-stone-500/20', text: 'text-stone-400', accent: 'bg-stone-500', decoration: 'shadow-stone-500/10' },
    Cerdo: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', accent: 'bg-rose-500', decoration: 'shadow-rose-500/10' },
    Ave: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', accent: 'bg-sky-500', decoration: 'shadow-sky-500/10' },
    Reptil: { bg: 'bg-lime-500/10', border: 'border-lime-500/20', text: 'text-lime-400', accent: 'bg-lime-500', decoration: 'shadow-lime-500/10' },
    ovino_caprino: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400', accent: 'bg-teal-500', decoration: 'shadow-teal-500/10' },
    roedores: { bg: 'bg-gray-500/10', border: 'border-gray-500/20', text: 'text-gray-400', accent: 'bg-gray-500', decoration: 'shadow-gray-500/10' },
    default: { bg: 'bg-slate-500/10', border: 'border-slate-500/20', text: 'text-slate-400', accent: 'bg-slate-500', decoration: 'shadow-slate-500/10' }
};

export const SPECIES_CONFIG = {
  perro: { label: 'Perro', icon: '🐶', theme: SPECIES_THEMES.Perro },
  gato: { label: 'Gato', icon: '🐱', theme: SPECIES_THEMES.Gato },
  caballo: { label: 'Caballo', icon: '🐴', theme: SPECIES_THEMES.Caballo },
  bovino: { label: 'Bovino', icon: '🐮', theme: SPECIES_THEMES.Bovino },
  conejo: { label: 'Conejo', icon: '🐰', theme: SPECIES_THEMES.Conejo },
  huron: { label: 'Hurón', icon: '🦦', theme: SPECIES_THEMES.Hurón },
  cobaya: { label: 'Cobaya', icon: '🐹', theme: SPECIES_THEMES.Cobaya },
  erizo: { label: 'Erizo', icon: '🦔', theme: SPECIES_THEMES.Erizo },
  cerdo: { label: 'Cerdo', icon: '🐷', theme: SPECIES_THEMES.Cerdo },
  ave: { label: 'Ave', icon: '🦜', theme: SPECIES_THEMES.Ave },
  reptil: { label: 'Reptil', icon: '🦎', theme: SPECIES_THEMES.Reptil },
  ovino_caprino: { label: 'Ovino/Caprino', icon: '🐐', theme: SPECIES_THEMES.ovino_caprino },
  roedores: { label: 'Roedores', icon: '🐀', theme: SPECIES_THEMES.roedores }
};

export const normalizeStr = (str: string): string => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

export const getSpeciesKey = (s: string) => s ? normalizeStr(s) : 'perro';

export const getSpeciesInfo = (key: string) => {
    const normalized = normalizeStr(key);
    return SPECIES_CONFIG[normalized as keyof typeof SPECIES_CONFIG] || { label: key, icon: '🐾', theme: SPECIES_THEMES.default };
};
