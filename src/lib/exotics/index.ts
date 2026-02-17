import { roedoresData } from './roedores';
import type { ExoticSpeciesData } from '@/lib/types';

// Helper function to create placeholder data
const createPlaceholderData = (id: string, name: string): ExoticSpeciesData => ({
    id,
    name,
    sections: {
        general: {
            title: `Formulario de ${name}`,
            content: `La información para ${name} estará disponible próximamente.`
        }
    }
});

export const EXOTICS_DATA: { [key: string]: ExoticSpeciesData } = {
    roedores: roedoresData,
    conejo: createPlaceholderData('conejo', 'Conejos'),
    mustelidos: createPlaceholderData('mustelidos', 'Mustélidos'),
    cobaya: createPlaceholderData('cobaya', 'Cobayas'),
    erizo: createPlaceholderData('erizo', 'Erizos'),
    ave: createPlaceholderData('ave', 'Aves'),
    reptil: createPlaceholderData('reptil', 'Reptiles'),
    peces: createPlaceholderData('peces', 'Peces'),
    primates: createPlaceholderData('primates', 'Primates'),
    axolote: createPlaceholderData('axolote', 'Axolotes'),
};
