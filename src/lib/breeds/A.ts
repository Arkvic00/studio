import type { Breed } from '../types';

export const breedsA: Breed[] = [
  {
    id: 'affenpinscher',
    nombre: 'Affenpinscher',
    especie: 'Perro',
    descripcion: 'Originario de Alemania, el Affenpinscher (perro mono) es una de las razas de juguete más antiguas y valientes. Originalmente criados para ser cazadores de roedores en establos alemanes, destacan por su cara traviesa de expresión casi humana y un temperamento inquisitivo que no conoce el miedo ante perros más grandes.',
    icon: '🐶',
    predisposiciones: [
      { patologiaId: 'alopecia-estacional-flancos', nota_especifica: 'Reportado en series de casos; no ligado a niveles bajos de hormonas sexuales en esta raza.' }
    ]
  },
  {
    id: 'afghan-hound',
    nombre: 'Afghan Hound (Galgo Afgano)',
    especie: 'Perro',
    descripcion: 'Una de las razas más antiguas y aristocráticas del mundo. Desarrollado originalmente para cazar presas grandes como leopardos y gacelas en las montañas de Afganistán, es un galgo de vista con una agilidad y velocidad asombrosas. Su pelaje largo y sedoso servía como protección contra el frío extremo de las alturas, mientras que su personalidad es una mezcla fascinante de lealtad profunda e independencia felina.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'bloqueo-cardiaco-alto-grado', nota_especifica: 'Predispuestos a bloqueos de 2do y 3er grado. Hembras enteras y perros pesados en mayor riesgo.' },
      { patologiaId: 'panosteitis', nota_especifica: 'Machos jóvenes predispuestos (Riesgo 1.9 veces mayor que mestizos).' },
      { patologiaId: 'mielopatia-afgana', nota_especifica: 'Hereditario autosómico recesivo; inicio típico en adolescentes jóvenes.' },
      { patologiaId: 'cataratas-caninas', nota_especifica: 'Prevalencia de 2.36%. Mayor incidencia entre 1 y 2 años.' },
      { patologiaId: 'edema-corneal-adenovirus', nota_especifica: 'Susceptibilidad aumentada tras infección o vacunación con CAV-1.' },
      { patologiaId: 'quilotorax-idiopatico', nota_especifica: 'Representan el 37.5% de los casos idiopáticos reportados.' },
      { patologiaId: 'paralisis-laringea', nota_especifica: 'Posible herencia autosómica dominante.' },
      { patologiaId: 'torsion-lobulo-pulmonar', nota_especifica: 'Raza significativamente sobrerrepresentada en casos clínicos.' }
    ]
  },
  {
    id: 'african-boerboel',
    nombre: 'African Boerboel',
    especie: 'Perro',
    descripcion: 'Mastín masivo y poderoso originario de Sudáfrica, diseñado para la protección de granjas contra depredadores peligrosos. Es un perro de trabajo robusto, de musculatura imponente y una naturaleza protectora inquebrantable hacia su familia. Requiere un manejo firme y socialización temprana debido a su fuerte instinto territorial.',
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
    descripcion: 'Conocido como el "Rey de los Terriers", es el más grande de su grupo y uno de los perros de trabajo más versátiles que existen. Ha servido históricamente como perro policía, mensajero de guerra y cazador de nutrias. Posee un pelaje duro, una inteligencia aguda y una energía inagotable que lo hace destacar en deportes caninos y búsqueda y rescate.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'cardiomiopatia-dilatada', nota_especifica: 'Prevalencia aumenta con la edad; común en machos.' },
      { patologiaId: 'anomalias-ecg-airedale', nota_especifica: 'Bloqueos AV de 1er grado y desviaciones del eje eléctrico comunes.' },
      { patologiaId: 'migracion-espigas-gramineas', nota_especifica: 'Alta incidencia de problemas por cuerpos extraños vegetales en verano.' },
      { patologiaId: 'alopecia-estacional-flancos', nota_especifica: 'Hembras castradas predispuestas; inicio entre los 2 y 4 años.' },
      { patologiaId: 'hipotiroidismo', nota_especifica: 'Riesgo aumentado significativo, a menudo a edades tempranas (2-3 años).' },
      { patologiaId: 'hemofilia-b', nota_especifica: 'Deficiencia de factor IX, de carácter familiar documentado.' },
      { patologiaId: 'von-willebrand', nota_especifica: 'Tipo I reportado en líneas genéticas específicas.' },
      { patologiaId: 'hernia-umbilical-congenita', nota_especifica: 'Significativamente sobrerrepresentados; hembras en mayor riesgo.' },
      { patologiaId: 'displasia-cadera', nota_especifica: 'Riesgo 3.9 veces mayor que en mestizos.' },
      { patologiaId: 'tumores-vesicales-uretrales', nota_especifica: 'Sobrerrepresentados en poblaciones de oncología.' },
      { patologiaId: 'tumores-nasales', nota_especifica: 'Riesgo relativo de 4.6; edad media de 9 años.' },
      { patologiaId: 'piometra', nota_especifica: 'Riesgo moderadamente aumentado.' }
    ]
  },
  {
    id: 'alaskan-husky',
    nombre: 'Alaskan Husky',
    especie: 'Perro',
    descripcion: 'Más que una raza pura, es una categoría de perros de trineo criados estrictamente por su rendimiento, velocidad y resistencia en climas extremos. Son atletas de élite capaces de recorrer distancias masivas tirando de cargas. Poseen un metabolismo único y una estructura física optimizada para el trabajo invernal, siendo animales sumamente activos y sociables.',
    icon: '🐕',
    predisposiciones: [
      { patologiaId: 'hipotiroidismo', nota_especifica: 'Alta prevalencia de autoanticuerpos tiroideos (THAA).' },
      { patologiaId: 'gangliosidosis-gm1', nota_especifica: 'Causa enanismo y ataxia desde los 5 meses.' },
      { patologiaId: 'encefalopatia-mitocondrial', nota_especifica: 'Defecto genético en el transportador de tiamina.' }
    ]
  },
  {
    id: 'alaskan-klee-kai',
    nombre: 'Alaskan Klee Kai',
    especie: 'Perro',
    descripcion: 'Una raza joven desarrollada para ser una versión de compañía del Husky de Alaska. Es pequeño pero conserva el aspecto y la energía de sus ancestros nórdicos. Son perros sumamente inteligentes, reservados con los extraños pero extremadamente leales y afectuosos con su núcleo familiar, destacando por su agilidad y limpieza.',
    icon: '🐺',
    predisposiciones: [
      { patologiaId: 'deficiencia-factor-vii', nota_especifica: 'Condición hereditaria identificada frecuentemente en la raza.' }
    ]
  },
  {
    id: 'alaskan-malamute',
    nombre: 'Alaskan Malamute',
    especie: 'Perro',
    descripcion: 'Poderoso perro de trineo originario del Ártico, diseñado para mover cargas pesadas a través de largas distancias. De estructura ósea sólida y pelaje denso e impermeable, es uno de los perros más antiguos del mundo. A diferencia del Husky Siberiano, el Malamute es más pesado y lento, con un carácter independiente pero profundamente afectuoso y digno.',
    icon: '🐺',
    predisposiciones: [
      { patologiaId: 'hipotiroidismo', nota_especifica: 'Más del 30% presenta niveles bajos de T4.' },
      { patologiaId: 'pancreatitis', nota_especifica: 'Raza reportada como predispuesta en estudios hospitalarios.' },
      { patologiaId: 'estomatocitosis', nota_especifica: 'Asociado a condrodisplasia y anemia.' },
      { patologiaId: 'condrodisplasia-malamute', nota_especifica: 'Herencia autosómica recesiva.' },
      { patologiaId: 'ruptura-ligamento-cruzado-craneal', nota_especifica: 'Prevalencia de 3.25%; hembras castradas predispuestas.' },
      { patologiaId: 'displasia-cadera', nota_especifica: 'Prevalencia de 7.8% (Riesgo 2.33 veces mayor).' },
      { patologiaId: 'tumores-traqueales-laringeos', nota_especifica: 'Frecuente en oncología respiratoria.' },
      { patologiaId: 'tumores-glandulas-sebaceas', nota_especifica: 'Predisposición a adenomas y epiteliomas.' },
      { patologiaId: 'polineuropatia-idiopatica-malamute', nota_especifica: 'Afecta a adultos jóvenes; herencia recesiva.' },
      { patologiaId: 'degeneracion-conos-hemeralopia', nota_especifica: 'Causa ceguera diurna.' }
    ]
  }
];
