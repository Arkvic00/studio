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
      'Comercializado como desinfectante de agua y comprende una mezcla de ozonos, sales de ácidos de frutas y monopersulfato de potasio.',
      'Para la reducción de virus, bacterias y algunos parásitos en estanques de carpas koi.',
      'Esta es una versión modificada de Virkon S con la cantidad de detergente reducida, ya que es tóxico para los animales acuáticos, y se eliminó la fragancia.',
      'Las tabletas deben disolverse en agua antes de agregarlas lentamente al estanque.',
    ],
    usos_principales: 'Reducción de virus, bacterias y algunos parásitos en estanques de carpas koi.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'El polvo es irritante para la piel y el sistema respiratorio y puede causar daños oculares graves.',
    'No añadir directamente al estanque: las tabletas deben disolverse en agua antes de añadirlas lentamente al estanque en el punto donde el agua entra desde el sistema de filtración, para ayudar a la dispersión.',
    'El producto se desactiva con la luz ultravioleta.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No hay información disponible.'],
    precauciones: [
      'La dosificación repetida puede dar lugar a una acumulación del tensioactivo, lo que produce algo de espuma, que puede reducirse mediante cambios parciales de agua.',
    ],
  },
  reacciones_adversas: {
    comunes: [],
    raras: ['No hay información disponible.'],
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
      forma_farmaceutica: 'Tableta de 5 g para disolución en agua',
    },
  ],
  dosis: {
    fish: [
      {
        especie: 'Peces',
        dosis: '2-8 mg/l por inmersión prolongada inicialmente, luego 2 mg/l semanalmente según sea necesario.',
        indicacion: 'Desinfección de agua',
        notas: [
          'Se recomienda una dosis inicial de 8 mg/l. Si se requiere una dosificación semanal adicional a 2 mg/l, se debe cambiar el 10% del agua del estanque antes de la dosificación.',
        ],
      },
    ],
  },
};
