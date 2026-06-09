import { breedsP } from './P';
import type { Breed } from '../types';

export const ALL_BREEDS: Breed[] = [
  ...breedsP,
  // Aquí se irán agregando los archivos de la A a la Z
];

export const getBreedById = (id: string) => ALL_BREEDS.find(b => b.id === id);