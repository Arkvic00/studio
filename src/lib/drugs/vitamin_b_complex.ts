import type { Drug } from '../index';

export const vitaminBComplexDrug: Drug = {
  id: 'vitamin_b_complex',
  meta_data: {
    nombre_generico: 'Complejo de vitamina B',
    nombres_comerciales: [
      'Anivit 4BC',
      'Duphafral',
      'Duphafral Extravite',
      'Multivitamin injection',
      'Vitamin B tablets',
    ],
    grupo_farmacologico: 'Vitamina',
    status_regulatorio: 'POM-VPS, venta general',
  },
  resumen_clinico: {
    puntos_clave: [
      'Cofactores para enzimas del metabolismo intermedio y la biosíntesis.',
      'Pueden ocurrir deficiencias múltiples de vitaminas B en pacientes con enfermedad renal o hepática o anorexia significativa.',
      'Las dosis y vías varían con los productos individuales. Verifique las recomendaciones del fabricante antes de usar.',
    ],
    usos_principales: 'Suplementación en deficiencias de vitamina B.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'Todas las vitaminas B son fotosensibles y deben protegerse de la luz.',
    'Los viales multidosis requieren técnica aséptica para su uso repetido.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No hay información disponible.'],
    precauciones: [
      'La anafilaxia se puede observar cuando se usa por vía i.v. y los productos deben administrarse lentamente y/o diluirse con fluidos i.v.',
      'El uso de productos para animales grandes que también contienen vitaminas liposolubles (A, D, E, K) puede provocar toxicidad.',
    ],
  },
  reacciones_adversas: {
    comunes: [],
    raras: ['Anafilaxia (cuando se administra por vía i.v.)'],
  },
  interacciones_farmacos: {
    observadas: [],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion: 'Cofactores para enzimas del metabolismo intermedio y la biosíntesis.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Parenteral',
      forma_farmaceutica: 'Varias',
      concentraciones: ['Varía según el producto'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Conejos',
        dosis: '0.02–0.4 ml/conejo s.c., i.m. c/24h o según sea necesario',
        indicacion: 'Deficiencia de vitamina B',
      },
      {
        especie: 'Roedores',
        dosis: '0.02–0.2 ml/kg s.c., i.m. c/24h o según sea necesario',
        indicacion: 'Deficiencia de vitamina B',
      },
      {
        especie: 'Marsupiales',
        dosis: '0.01–0.02 ml/kg i.m. c/24h o según sea necesario',
        indicacion: 'Deficiencia de vitamina B',
      },
      {
        especie: 'Petauros del azúcar',
        dosis: '0.01–0.2 ml/kg s.c, i.m.',
        indicacion: 'Deficiencia de vitamina B',
      },
      {
        especie: 'Erizos',
        dosis: '1 ml/kg s.c., i.m. c/24h o según sea necesario',
        indicacion: 'Deficiencia de vitamina B',
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '1–3 mg/kg i.m. una vez. Debe intentar alcanzar 10–30 mg/kg de tiamina. Se debe tener cuidado de no exceder los 3 mg/kg de clorhidrato de piridoxina (vitamina B6).',
        indicacion: 'Deficiencia de vitamina B',
      },
    ],
  },
};
