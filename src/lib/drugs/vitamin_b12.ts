import type { Drug } from '../index';

export const vitaminB12Drug: Drug = {
  id: 'vitamin_b12',
  meta_data: {
    nombre_generico: 'Vitamina B12 (Cianocobalamina, Hidroxocobalamina)',
    nombres_comerciales: ['Anacobin', 'Cobalin-H', 'Cytran', 'Cytacon', 'Cytamen'],
    grupo_farmacologico: 'Vitamina',
    status_regulatorio: 'POM, venta general',
  },
  resumen_clinico: {
    puntos_clave: [
      'La vitamina B12 es un cofactor esencial para varias enzimas.',
      'La deficiencia puede ocurrir por falta de ingesta dietética o por una incapacidad para absorber la vitamina B12 en el íleon.',
      'Los conejos son propensos a la disbiosis intestinal, la sobrecarga cecal y la enfermedad del hígado graso, que pueden conducir a la deficiencia de vitamina B12.',
    ],
    usos_principales: 'Suplementación en deficiencias de vitamina B12.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'Proteger de la luz solar.',
    'Se requiere una técnica aséptica para los viales multidosis.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No hay información disponible.'],
    precauciones: [
      'Las reacciones anafilácticas son raras después de la administración parenteral, pero pueden ocurrir.',
    ],
  },
  reacciones_adversas: {
    comunes: [],
    raras: ['Anafilaxia (uso parenteral)'],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Cloranfenicol',
        descripcion: 'Puede disminuir la eficacia de la vitamina B12.',
      },
      {
        farmaco: 'Neomicina oral',
        descripcion: 'Puede disminuir la absorción gastrointestinal de la vitamina B12.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'La vitamina B12 es un cofactor esencial para varias enzimas. La metilcobalamina y la 5-desoxiadenosilcobalamina son formas activas de vitamina B12. La vitamina B12 es esencial para el crecimiento, la división celular, la hematopoyesis, la nucleoproteína y la síntesis de mielina.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Solución',
      concentracion_texto: '1000 μg/ml',
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Conejos',
        dosis: '12.5–25 μg/conejo s.c., i.m., i.v. una vez a la semana según sea necesario.',
        indicacion: 'Deficiencia de vitamina B12',
      },
    ],
  },
};
