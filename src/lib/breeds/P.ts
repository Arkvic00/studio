import type { Breed } from '../types';

export const breedsP: Breed[] = [
  {
    id: 'pastor-aleman',
    nombre: 'Pastor Alemán',
    especie: 'Perro',
    descripcion: 'Raza de trabajo versátil, inteligente y leal. Conocida por su capacidad de entrenamiento pero predispuesta a diversas condiciones genéticas debido a su conformación.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'displasia-cadera', nota_especifica: 'Muy común en líneas de belleza con angulación exagerada.' },
      { patologiaId: 'mielopatia-degenerativa', nota_especifica: 'Enfermedad progresiva de la médula espinal.' }
    ]
  }
];