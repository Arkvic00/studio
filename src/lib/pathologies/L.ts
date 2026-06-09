import type { Pathology } from '../types';

export const pathologiesL: Pathology[] = [
  {
    id: 'paralisis-laringea',
    nombre: 'Parálisis Laríngea',
    descripcion: 'Incapacidad de los cartílagos aritenoides para abrirse durante la inspiración.',
    etiology: 'Disfunción del nervio laríngeo recurrente, puede ser hereditaria (congénita) o adquirida (GOLPP).',
    sintomas: [
      'Estridor laríngeo (ruido fuerte al respirar)',
      'Intolerancia al calor y ejercicio',
      'Cambio en el tono del ladrido',
      'Cianosis o colapso en crisis'
    ],
    diagnostico: [
      'Laringoscopia bajo sedación ligera',
      'Ecografía laríngea'
    ],
    tratamiento: 'Cirugía de lateralización del aritenoides ("Tie-back"). Manejo ambiental (evitar calor).',
    prevencion_control: 'Uso de arnés en lugar de collar.',
    especies_afectadas: ['Perro', 'Caballo'],
    categoria: 'Otros'
  }
];
