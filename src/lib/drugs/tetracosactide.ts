import type { Drug } from '../index';

export const tetracosactideDrug: Drug = {
  id: 'tetracosactide',
  meta_data: {
    nombre_generico: 'Tetracosactida',
    nombres_comerciales: ['Synacthen'],
    grupo_farmacologico: 'Análogo de la ACTH',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Análogo de la ACTH que se une a receptores en las células adrenocorticales para inducir la producción de esteroides.',
      'Se utiliza para estimular la producción de cortisol en el diagnóstico de hipoadrenocorticismo en hurones.',
      'Se recomienda reservar para el diagnóstico de hipoadrenocorticismo.',
    ],
    usos_principales: 'Diagnóstico de hipoadrenocorticismo en hurones.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'Pequeñas alícuotas de las preparaciones intravenosas e intramusculares pueden congelarse y descongelarse una vez sin pérdida indebida de actividad.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No hay información disponible.'],
    precauciones: ['Observar las precauciones normales.'],
  },
  reacciones_adversas: {
    comunes: ['Ninguna reportada.'],
    raras: ['Ninguna reportada.'],
  },
  interacciones_farmacos: {
    observadas: [],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Se une a receptores específicos en la membrana celular de las células adrenocorticales e induce la producción de esteroides a partir del colesterol.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      concentracion_texto: '0.25 mg/ml',
      valor_concentracion: 0.25,
      unidad_concentracion: 'mg/ml',
      es_divisible: false,
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Hurones',
        dosis: '1 µg/kg i.m.',
        indicacion: 'Diagnóstico de hipoadrenocorticismo',
      },
    ],
  },
};
