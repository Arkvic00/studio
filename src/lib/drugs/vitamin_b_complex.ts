import type { Drug } from '../index';

export const vitaminBComplexDrug: Drug = {
  id: 'vitamin_b_complex',
  meta_data: {
    nombre_generico: 'Complejo de vitamina B',
    nombres_comerciales: [
      'Anivit 4BC',
      'Duphafral',
      'Duphafral Extravite',
      'Inyección multivitamínica',
      'Tabletas de vitamina B',
    ],
    grupo_farmacologico: 'Vitaminas',
    status_regulatorio: 'POM-VPS, venta general',
  },
  resumen_clinico: {
    puntos_clave: [
      'Las deficiencias múltiples de vitaminas B pueden ocurrir en pacientes con enfermedad renal o hepática o anorexia significativa.',
      'Las dosis y vías varían según los productos individuales.',
    ],
    usos_principales: 'Suplementación en deficiencias de vitamina B.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'Todas las vitaminas B son fotosensibles y deben protegerse de la luz.',
    'Los viales multidosis requieren una técnica aséptica para su uso repetido.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No hay información disponible.'],
    precauciones: [],
  },
  reacciones_adversas: {
    comunes: [],
    raras: [
      'Se puede observar anafilaxia cuando se usa por vía intravenosa y los productos deben administrarse lentamente y/o diluirse con líquidos intravenosos.',
      'El uso de productos para animales grandes que también contienen vitaminas liposolubles (A, D, E, K) puede provocar toxicidad.',
    ],
  },
  interacciones_farmacos: {
    observadas: [],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion: 'Cofactores para las enzimas del metabolismo intermedio y la biosíntesis.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Varias',
      forma_farmaceutica: 'Varias preparaciones que contienen cantidades variables de vitaminas están disponibles, autorizadas solo para animales de granja. La mayoría son para uso parenteral y todas son POM-VPS.',
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Conejos',
        dosis: '0.02-0.4 ml/conejo s.c., i.m. q24h o según sea necesario',
        indicacion: 'Deficiencia de vitamina B',
      },
      {
        especie: 'Roedores',
        dosis: '0.02-0.2 ml/kg s.c., i.m. q24h o según sea necesario',
        indicacion: 'Deficiencia de vitamina B',
      },
      {
        especie: 'Marsupiales',
        dosis: '0.01-0.02 ml/kg i.m. q24h o según sea necesario',
        indicacion: 'Deficiencia de vitamina B',
      },
      {
        especie: 'Petauros del azúcar',
        dosis: '0.01-0.2 ml/kg s.c., i.m.',
        indicacion: 'Deficiencia de vitamina B',
      },
      {
        especie: 'Erizos',
        dosis: '1 ml/kg s.c., i.m. q24h o según sea necesario',
        indicacion: 'Deficiencia de vitamina B',
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '1-3 mg/kg i.m. una vez. Debe intentar alcanzar 10-30 mg/kg de tiamina.',
        indicacion: 'Deficiencia de vitamina B',
        notas: [
          'Se debe tener cuidado de no exceder los 3 mg/kg de piridoxina HCl (vitamina B6), ya que se ha registrado toxicidad (muerte aguda en 24-48 horas) en rapaces y palomas.',
        ],
      },
    ],
  },
};
