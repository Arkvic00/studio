import type { Breed } from '../types';

export const breedsA: Breed[] = [
  {
    id: 'affenpinscher',
    nombre: 'Affenpinscher',
    especie: 'Perro',
    descripcion: 'Pequeño perro de origen alemán, valiente y de cara simiesca. A pesar de su tamaño, es un excelente perro guardián y compañero leal, con un pelaje característico que requiere mantenimiento. Es conocido por su temperamento curioso y su agilidad.',
    icon: '🐶',
    predisposiciones: [
      { 
        patologiaId: 'alopecia-estacional-flancos', 
        nota_especifica: 'Reportado en series de casos pequeños; niveles bajos de hormonas sexuales no se consideran la causa en esta raza.' 
      }
    ]
  },
  {
    id: 'afghan-hound',
    nombre: 'Afghan Hound (Galgo Afgano)',
    especie: 'Perro',
    descripcion: 'Elegante perro de caza de origen antiguo, conocido por su pelaje largo y sedoso y su porte aristocrático. Es un corredor veloz con una personalidad independiente y digna. Requiere ejercicio intenso y cuidado meticuloso del manto.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'bloqueo-cardiaco-alto-grado', nota_especifica: 'Predispuestos a bloqueos de 2do y 3er grado, especialmente hembras enteras, pesadas y maduras.' },
      { patologiaId: 'panosteitis', nota_especifica: 'Machos jóvenes predispuestos (Riesgo 1.9 veces mayor).' },
      { patologiaId: 'mielopatia-afgana', nota_especifica: 'Hereditario autosómico recesivo; inicio en adolescentes jóvenes.' },
      { patologiaId: 'cataratas-caninas', nota_especifica: 'Prevalencia de 2.36%. Mayor incidencia entre 1 y 2 años.' },
      { patologiaId: 'edema-corneal-adenovirus', nota_especifica: 'Susceptibilidad aumentada tras infección o vacunación con CAV-1.' },
      { patologiaId: 'quilotorax-idiopatico', nota_especifica: 'Suelen representar el 37.5% de los casos idiopáticos.' },
      { patologiaId: 'paralisis-laringea', nota_especifica: 'Posible herencia autosómica dominante.' },
      { patologiaId: 'torsion-lobulo-pulmonar', nota_especifica: 'Raza sobrerrepresentada en casos clínicos.' }
    ]
  },
  {
    id: 'african-boerboel',
    nombre: 'African Boerboel',
    especie: 'Perro',
    descripcion: 'Poderoso perro tipo mastín originario de Sudáfrica, desarrollado como protector de granjas. Es masivo, valiente y protector con su familia, requiriendo un manejo experto debido a su fuerza y territorialidad.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'displasia-codo', nota_especifica: 'Común en la raza (incidencia >38%), machos predispuestos.' },
      { patologiaId: 'espondilomielopatia-cervical-wobbler', nota_especifica: 'Visto en los primeros 2 años de vida.' }
    ]
  }
];
