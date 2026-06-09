import type { Pathology } from '../types';

export const pathologiesL: Pathology[] = [
  {
    id: 'paralisis-laringea',
    nombre: 'Parálisis Laríngea',
    descripcion: 'Incapacidad de los cartílagos aritenoides para abrirse durante la inspiración.',
    etiology: 'Disfunción del nervio laríngeo recurrente, hereditaria o adquirida.',
    sintomas: [
      'Estridor laríngeo',
      'Intolerancia al calor',
      'Cambio en el tono del ladrido'
    ],
    diagnostico: [
      'Laringoscopia bajo sedación ligera',
      'Ecografía laríngea'
    ],
    tratamiento: 'Cirugía de lateralización (Tie-back).',
    prevencion_control: 'Uso de arnés en lugar de collar.',
    especies_afectadas: ['Perro', 'Caballo'],
    categoria: 'Otros'
  },
  {
    id: 'ruptura-ligamento-cruzado-craneal',
    nombre: 'Ruptura de Ligamento Cruzado Craneal (LCC)',
    descripcion: 'Lesión ortopédica común que causa inestabilidad en la articulación de la rodilla.',
    etiology: 'Degeneración crónica del ligamento (común en perros grandes) o trauma agudo.',
    sintomas: [
      'Cojera súbita o progresiva del tren posterior',
      'Sentado lateralizado',
      'Hinchazón de la rodilla (derrame)',
      'Atrofia del cuádriceps'
    ],
    diagnostico: [
      'Prueba de cajón positivo',
      'Prueba de compresión tibial',
      'Radiografía (desplazamiento de la grasa infrapatelar)'
    ],
    tratamiento: 'Manejo médico (casos leves) o cirugía (TPLO, TTA, Sutura extracapsular).',
    prevencion_control: 'Control estricto de peso y ejercicio regular.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Ortopédica'
  }
];
