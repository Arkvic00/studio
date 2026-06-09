import type { Pathology } from '../types';

export const pathologiesL: Pathology[] = [
  {
    id: 'paralisis-laringea',
    nombre: 'Parálisis Laríngea',
    descripcion: 'Fallo en la apertura de los cartílagos de la laringe al respirar.',
    etiology: 'Disfunción del nervio laríngeo recurrente, hereditaria o geriátrica.',
    sintomas: [
      'Estridor (ruido al inhalar)',
      'Cambio en el ladrido',
      'Cianosis al ejercitarse'
    ],
    diagnostico: [
      'Laringoscopia bajo sedación',
      'Ecografía laríngea'
    ],
    tratamiento: 'Cirugía de lateralización (Tie-back).',
    prevencion_control: 'Uso de arnés.',
    especies_afectadas: ['Perro', 'Caballo'],
    categoria: 'Otros'
  },
  {
    id: 'ruptura-ligamento-cruzado-craneal',
    nombre: 'Ruptura de Ligamento Cruzado Craneal (LCC)',
    descripcion: 'Inestabilidad de la rodilla por fallo del ligamento estabilizador.',
    etiology: 'Degeneración crónica o trauma agudo.',
    sintomas: [
      'Cojera súbita',
      'Rodilla hinchada',
      'Atrofia muscular'
    ],
    diagnostico: [
      'Prueba de cajón',
      'Compresión tibial'
    ],
    tratamiento: 'Cirugía estabilizadora (TPLO/TTA).',
    prevencion_control: 'Control de peso.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Ortopédica'
  }
];
