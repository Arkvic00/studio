import type { Breed } from '../types';

export const breedsA: Breed[] = [
  {
    id: 'affenpinscher',
    nombre: 'Affenpinscher',
    especie: 'Perro',
    descripcion: 'Pequeño perro de origen alemán, valiente y de cara simiesca. A pesar de su tamaño, es un excelente perro guardián y compañero leal. Es conocido por su temperamento curioso, agilidad y su característico "beard" (barba).',
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
  },
  {
    id: 'airedale-terrier',
    nombre: 'Airedale Terrier',
    especie: 'Perro',
    descripcion: 'Conocido como el "Rey de los Terriers", es el más grande de todas las razas terrier. Originario de Yorkshire, fue criado para cazar nutrias y ratas. Es un perro versátil, inteligente y valiente, utilizado históricamente como perro mensajero y de policía.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'cardiomiopatia-dilatada', nota_especifica: 'Prevalencia aumenta con la edad; doblemente común en machos.' },
      { patologiaId: 'hipotiroidismo', nota_especifica: 'Riesgo aumentado significativo (p<0.01), a menudo a edades tempranas (2-3 años).' },
      { patologiaId: 'alopecia-estacional-flancos', nota_especifica: 'Hembras castradas predispuestas; inicio entre 2 y 4 años.' },
      { patologiaId: 'hemofilia-b', nota_especifica: 'Deficiencia grave de factor IX, de carácter familiar.' },
      { patologiaId: 'von-willebrand', nota_especifica: 'Tipo I reportado en la raza.' },
      { patologiaId: 'hernia-umbilical-congenita', nota_especifica: 'Significativamente sobrerrepresentados, hembras en mayor riesgo.' },
      { patologiaId: 'displasia-cadera', nota_especifica: 'Riesgo 3.9 veces mayor que mestizos; machos castrados predispuestos.' },
      { patologiaId: 'tumores-nasales', nota_especifica: 'Riesgo relativo de 4.6; edad media de 9 años.' },
      { patologiaId: 'piometra', nota_especifica: 'Riesgo moderadamente aumentado.' }
    ]
  },
  {
    id: 'alaskan-husky',
    nombre: 'Alaskan Husky',
    especie: 'Perro',
    descripcion: 'No es una raza pura propiamente dicha, sino una categoría de perros de trineo criados por su rendimiento, resistencia y velocidad en lugar de su apariencia. Son el resultado de cruces de diversas razas nórdicas y de caza.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'hipotiroidismo', nota_especifica: 'Alta prevalencia de autoanticuerpos tiroideos (THAA); OR de 1.45.' },
      { patologiaId: 'gangliosidosis-gm1', nota_especifica: 'Herencia autosómica recesiva; causa enanismo y ataxia desde los 5 meses.' },
      { patologiaId: 'encefalopatia-mitocondrial', nota_especifica: 'Defecto genético en el transportador de tiamina.' }
    ]
  },
  {
    id: 'alaskan-klee-kai',
    nombre: 'Alaskan Klee Kai',
    especie: 'Perro',
    descripcion: 'Una raza joven desarrollada para ser una versión de compañía del Husky de Alaska. Son inteligentes, activos y pueden ser reservados con extraños. Mantienen la apariencia de los perros nórdicos en un tamaño pequeño.',
    icon: '🐺',
    predisposiciones: [
      { patologiaId: 'deficiencia-factor-vii', nota_especifica: 'Condición hereditaria identificada en la raza.' }
    ]
  },
  {
    id: 'alaskan-malamute',
    nombre: 'Alaskan Malamute',
    especie: 'Perro',
    descripcion: 'Uno de los perros de trineo más antiguos y pesados del Ártico. De estructura poderosa y gran resistencia, no fue diseñado para velocidad sino para carga pesada. Son perros leales, afectuosos y poseen un fuerte instinto de manada.',
    icon: '🐺',
    predisposiciones: [
      { patologiaId: 'hipotiroidismo', nota_especifica: 'Más del 30% de la población presenta T4 baja.' },
      { patologiaId: 'pancreatitis', nota_especifica: 'Raza reportada como predispuesta.' },
      { patologiaId: 'estomatocitosis', nota_especifica: 'Asociado a menudo con condrodisplasia y anemia.' },
      { patologiaId: 'condrodisplasia-malamute', nota_especifica: 'Herencia autosómica recesiva con penetrancia completa.' },
      { patologiaId: 'ruptura-ligamento-cruzado-craneal', nota_especifica: 'Prevalencia de 3.25%; hembras castradas predispuestas.' },
      { patologiaId: 'displasia-cadera', nota_especifica: 'Prevalencia de 7.8% (OR 2.33).' },
      { patologiaId: 'tumores-traqueales-laringeos', nota_especifica: 'Frecuente en revisiones de literatura de la raza.' },
      { patologiaId: 'tumores-glandulas-sebaceas', nota_especifica: 'Predisposición a adenomas y epiteliomas.' },
      { patologiaId: 'polineuropatia-idiopatica-malamute', nota_especifica: 'Herencia autosómica recesiva; afecta a adultos jóvenes maduros.' },
      { patologiaId: 'degeneracion-conos-hemeralopia', nota_especifica: 'Causa ceguera diurna; herencia autosómica recesiva.' }
    ]
  }
];
