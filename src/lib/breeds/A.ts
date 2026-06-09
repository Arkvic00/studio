import type { Breed } from '../types';

export const breedsA: Breed[] = [
  {
    id: 'affenpinscher',
    nombre: 'Affenpinscher',
    especie: 'Perro',
    descripcion: 'Originario de Alemania, el Affenpinscher (perro mono) es una de las razas de juguete más antiguas y carismáticas. Originalmente criados para ser cazadores de roedores en establos y cocinas, estos perros destacan por su cara traviesa similar a la de un mono y su temperamento valiente, inquisitivo y leal. A pesar de su pequeño tamaño, poseen un coraje inmenso y una personalidad vibrante que los convierte en excelentes compañeros de hogar.',
    icon: '🐶',
    predisposiciones: [
      { patologiaId: 'alopecia-estacional-flancos', nota_especifica: 'Reportado en series de casos; no ligado a niveles bajos de hormonas sexuales en esta raza.' }
    ]
  },
  {
    id: 'afghan-hound',
    nombre: 'Afghan Hound (Galgo Afgano)',
    especie: 'Perro',
    descripcion: 'Una de las razas más antiguas y distintivas del mundo, el Galgo Afgano es la personificación de la elegancia aristocrática. Con su pelaje largo y sedoso y su porte digno, fue desarrollado para cazar presas grandes como leopardos y gacelas en las traicioneras montañas de Afganistán. Es un cazador de vista (sighthound) con una velocidad increíble y una agilidad sorprendente, poseyendo una personalidad independiente, a veces distante, pero profundamente leal a su familia.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'bloqueo-cardiaco-alto-grado', nota_especifica: 'Predispuestos a bloqueos de 2do y 3er grado. Hembras enteras y perros pesados en mayor riesgo.' },
      { patologiaId: 'panosteitis', nota_especifica: 'Machos jóvenes predispuestos (Riesgo 1.9 veces mayor que mestizos).' },
      { patologiaId: 'mielopatia-afgana', nota_especifica: 'Hereditario autosómico recesivo; inicio típico en adolescentes jóvenes.' },
      { patologiaId: 'cataratas-caninas', nota_especifica: 'Prevalencia de 2.36%. Mayor incidencia observada entre 1 y 2 años de edad.' },
      { patologiaId: 'edema-corneal-adenovirus', nota_especifica: 'Susceptibilidad aumentada tras infección o vacunación con CAV-1.' },
      { patologiaId: 'quilotorax-idiopatico', nota_especifica: 'Representan el 37.5% de los casos idiopáticos reportados en estudios.' },
      { patologiaId: 'paralisis-laringea', nota_especifica: 'Posible herencia autosómica dominante en esta raza.' },
      { patologiaId: 'torsion-lobulo-pulmonar', nota_especifica: 'Raza significativamente sobrerrepresentada en casos clínicos.' }
    ]
  },
  {
    id: 'african-boerboel',
    nombre: 'African Boerboel',
    especie: 'Perro',
    descripcion: 'El Boerboel es un mastín masivo y poderoso originario de Sudáfrica, desarrollado por colonos para proteger granjas y familias contra depredadores peligrosos. Es un perro de trabajo robusto, estructuralmente sólido y con una musculatura impresionante. Son conocidos por su valentía inquebrantable, inteligencia territorial y naturaleza protectora. Debido a su tamaño y fuerza, requieren un dueño con experiencia que pueda proporcionar un manejo firme pero afectuoso.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'displasia-codo', nota_especifica: 'Muy común en la raza (incidencia >38%), especialmente en machos.' },
      { patologiaId: 'espondilomielopatia-cervical-wobbler', nota_especifica: 'Suele manifestarse en los primeros 2 años de vida.' }
    ]
  },
  {
    id: 'airedale-terrier',
    nombre: 'Airedale Terrier',
    especie: 'Perro',
    descripcion: 'Conocido como el "Rey de los Terriers", el Airedale es el más grande de su grupo y proviene del valle del Aire en Yorkshire. Es un perro extremadamente versátil e inteligente que ha desempeñado roles como cazador de nutrias, perro policía, guardián y mensajero valiente durante las guerras mundiales. Posee un pelaje duro y alambrado, una energía inagotable y un espíritu audaz que lo hace destacar en cualquier disciplina deportiva o de trabajo.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'cardiomiopatia-dilatada', nota_especifica: 'Prevalencia aumenta con la edad; el doble de común en machos que en hembras.' },
      { patologiaId: 'anomalias-ecg-airedale', nota_especifica: 'Común encontrar bloqueos AV de 1er grado y desviaciones del eje eléctrico en tamizajes.' },
      { patologiaId: 'migracion-espigas-gramineas', nota_especifica: 'Alta incidencia de problemas por cuerpos extraños vegetales, especialmente en verano.' },
      { patologiaId: 'alopecia-estacional-flancos', nota_especifica: 'Hembras castradas predispuestas; inicio típico entre los 2 y 4 años.' },
      { patologiaId: 'hipotiroidismo', nota_especifica: 'Riesgo aumentado significativo, a menudo a edades tempranas (2-3 años).' },
      { patologiaId: 'hemofilia-b', nota_especifica: 'Deficiencia grave de factor IX, de carácter familiar documentado.' },
      { patologiaId: 'von-willebrand', nota_especifica: 'Tipo I reportado en líneas genéticas específicas.' },
      { patologiaId: 'hernia-umbilical-congenita', nota_especifica: 'Significativamente sobrerrepresentados; las hembras tienen un riesgo mayor.' },
      { patologiaId: 'displasia-cadera', nota_especifica: 'Riesgo 3.9 veces mayor que en mestizos; machos castrados en mayor riesgo.' },
      { patologiaId: 'tumores-vesicales-uretrales', nota_especifica: 'Significativamente sobrerrepresentados en poblaciones de oncología.' },
      { patologiaId: 'tumores-nasales', nota_especifica: 'Riesgo relativo de 4.6; edad media de diagnóstico a los 9 años.' },
      { patologiaId: 'piometra', nota_especifica: 'Riesgo moderadamente aumentado en poblaciones europeas.' }
    ]
  },
  {
    id: 'alaskan-husky',
    nombre: 'Alaskan Husky',
    especie: 'Perro',
    descripcion: 'El Husky de Alaska no es una raza pura en el sentido tradicional, sino una categoría de perros de trineo criados estrictamente por su rendimiento, resistencia y velocidad. Son el resultado de cruces expertos entre razas nórdicas, perros de caza y lebreles. Son considerados los mejores atletas de larga distancia del mundo canino, capaces de recorrer cientos de kilómetros en condiciones árticas extremas manteniendo una actitud alegre y enfocada.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'hipotiroidismo', nota_especifica: 'Alta prevalencia de autoanticuerpos tiroideos; OR de 1.45 comparado con otras razas.' },
      { patologiaId: 'gangliosidosis-gm1', nota_especifica: 'Herencia autosómica recesiva; causa enanismo y ataxia desde los 5 meses.' },
      { patologiaId: 'encefalopatia-mitocondrial', nota_especifica: 'Defecto genético específico en el transportador de tiamina.' }
    ]
  },
  {
    id: 'alaskan-klee-kai',
    nombre: 'Alaskan Klee Kai',
    especie: 'Perro',
    descripcion: 'Desarrollado en Alaska a finales del siglo XX para ser una versión de compañía del Husky, el Klee Kai es un perro pequeño, inteligente y lleno de energía. Aunque se parecen a sus parientes más grandes, tienen una personalidad más reservada con extraños pero son extremadamente leales a sus familias. Son excelentes perros de alerta y se adaptan bien a la vida en interiores si reciben suficiente estímulo mental.',
    icon: '🐺',
    predisposiciones: [
      { patologiaId: 'deficiencia-factor-vii', nota_especifica: 'Condición hereditaria identificada frecuentemente en la raza.' }
    ]
  },
  {
    id: 'alaskan-malamute',
    nombre: 'Alaskan Malamute',
    especie: 'Perro',
    descripcion: 'Uno de los perros de trineo más antiguos y poderosos del Ártico, el Malamute de Alaska es una raza pesada y sustancial diseñada para transportar grandes cargas a través del hielo. Con una estructura poderosa, pecho profundo y un pelaje denso, emana una apariencia de gran fuerza y dignidad. Son conocidos por ser perros "de un solo dueño" o de manada familiar, con un carácter afectuoso pero independiente y un fuerte instinto de caza.',
    icon: '🐺',
    predisposiciones: [
      { patologiaId: 'hipotiroidismo', nota_especifica: 'Más del 30% de la población presenta niveles bajos de T4.' },
      { patologiaId: 'pancreatitis', nota_especifica: 'Raza reportada como predispuesta en estudios hospitalarios.' },
      { patologiaId: 'estomatocitosis', nota_especifica: 'Asociado a menudo con condrodisplasia y anemia.' },
      { patologiaId: 'condrodisplasia-malamute', nota_especifica: 'Herencia autosómica recesiva con penetrancia completa y expresión variable.' },
      { patologiaId: 'ruptura-ligamento-cruzado-craneal', nota_especifica: 'Prevalencia de 3.25%; hembras castradas predispuestas.' },
      { patologiaId: 'displasia-cadera', nota_especifica: 'Prevalencia de 7.8% (Riesgo 2.33 veces mayor).' },
      { patologiaId: 'tumores-traqueales-laringeos', nota_especifica: 'Frecuente en revisiones de oncología respiratoria.' },
      { patologiaId: 'tumores-glandulas-sebaceas', nota_especifica: 'Alta predisposición a adenomas y epiteliomas sebáceos.' },
      { patologiaId: 'polineuropatia-idiopatica-malamute', nota_especifica: 'Herencia autosómica recesiva; afecta a adultos jóvenes.' },
      { patologiaId: 'degeneracion-conos-hemeralopia', nota_especifica: 'Causa ceguera diurna; herencia autosómica recesiva documentada.' }
    ]
  }
];
