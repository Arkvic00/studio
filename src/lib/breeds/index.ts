import { breedsA } from './A';
import { breedsP } from './P';
import type { Breed } from '../types';

export const ALL_BREEDS: Breed[] = [
  ...breedsA,
  ...breedsP,
];

export const getBreedById = (id: string) => ALL_BREEDS.find(b => b.id === id);
