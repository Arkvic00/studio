import type { Drug } from '../index';

export const virkonSDrug: Drug = {
  id: 'virkon_s',
  meta_data: {
    nombre_generico: 'Virkon S',
    nombres_comerciales: ['Virkon Aquatic tablets'],
    grupo_farmacologico: 'Desinfectante',
    status_regulatorio: 'GSL',
  },
  resumen_clinico: {
    puntos_clave: [
      'Comercializado como desinfectante de agua y comprende una mezcla de oxizonas, sales de ácidos de frutas y monopersulfato de potasio.',
      'Para la reducción de virus, bacterias y algunos parásitos en estanques de carpas koi.',
      'No agregar directamente al estanque: las tabletas deben disolverse en agua antes de agregarlas lentamente al estanque.',
      'Una dosis inicial de 8 mg/l es recomendada.',
      'El producto es desactivado por la luz UV.',
    ],
    usos_principales: 'Reducción de virus, bacterias y parásitos en estanques de carpas koi.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'Observar las precauciones normales.',
    'El polvo es irritante para la piel y el sistema respiratorio y puede causar daño ocular grave.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No hay información disponible.'],
    precauciones: [],
  },
  reacciones_adversas: {
    comunes: [],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion: 'No hay información disponible.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inmersión',
      forma_farmaceutica: 'Tabletas',
      concentraciones: ['5 g'],
    },
  ],
  dosis: {
    fish: [
      {
        especie: 'Peces',
        dosis: '2-8 mg/l por inmersión prolongada inicialmente, luego 2 mg/l semanalmente según sea necesario.',
        indicacion: 'Desinfección de agua',
      },
    ],
  },
};
