
import { roedoresData } from './roedores';
import { conejoData } from './conejo';
import { mustelidosData } from './mustelidos';
import type { ExoticSpeciesData } from '@/lib/types';

// Helper function to create placeholder data
const createPlaceholderData = (id: string, name: string): ExoticSpeciesData => ({
    id,
    name,
    sections: {
        general: {
            title: `Formulario de ${name}`,
            icon: 'Info',
            content: `La información para ${name} estará disponible próximamente.`
        }
    }
});

export const EXOTICS_DATA: { [key: string]: ExoticSpeciesData } = {
    roedores: roedoresData,
    conejo: conejoData,
    mustelidos: mustelidosData,
    cobaya: createPlaceholderData('cobaya', 'Cobayas'),
    erizo: createPlaceholderData('erizo', 'Erizos'),
    ave: createPlaceholderData('ave', 'Aves'),
    reptil: createPlaceholderData('reptil', 'Reptiles'),
    peces: createPlaceholderData('peces', 'Peces'),
    primates: createPlaceholderData('primates', 'Primates'),
    axolote: createPlaceholderData('axolote', 'Axolotes'),
};

    