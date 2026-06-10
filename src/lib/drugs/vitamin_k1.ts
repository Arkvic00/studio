import type { Drug } from '../index';

export const vitaminK1Drug: Drug = {
  id: 'vitamin_k1',
  meta_data: {
    nombre_generico: 'Vitamina K1 (Fitomenadiona)',
    nombres_comerciales: ['Konakion', 'Aqua-Mephyton', 'Vitamin K1'],
    grupo_farmacologico: 'Vitamina',
    status_regulatorio: 'POM, POM-V, venta general',
  },
  resumen_clinico: {
    puntos_clave: [
      'Nutriente liposoluble necesario para la carboxilación de los factores de coagulación II, VII, IX y X.',
      'El uso principal es el tratamiento de la intoxicación por rodenticidas antagonistas de la vitamina K (cumarinas).',
      'Se administra por vía s.c.; la vía i.v. solo debe usarse en casos de emergencia, ya que pueden producirse reacciones anafilácticas.',
      'La absorción después de la administración oral puede ser errática.',
    ],
    usos_principales: 'Tratamiento de la intoxicación por rodenticidas antagonistas de la vitamina K.',
    inicio_accion: '1-2 horas',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'Proteger de la luz.',
    'Administrar con alimentos grasos para mejorar la absorción.',
    'No lo use si la solución está turbia.',
    'El veterinario determinará la duración del tratamiento en función de la identidad del veneno.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No usar por vía i.v. a menos que sea una emergencia.'],
    precauciones: [
      'La respuesta puede verse afectada en animales con enfermedad hepática grave.',
      'La administración i.v. rápida puede provocar reacciones anafilácticas graves.',
    ],
  },
  reacciones_adversas: {
    comunes: ['Hinchazón dolorosa en el lugar de la inyección.'],
    raras: ['Reacciones anafilácticas graves (administración i.v. rápida)'],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Anticoagulantes orales (por ejemplo, cumarinas)',
        descripcion: 'La vitamina K1 antagoniza los efectos de los anticoagulantes orales.',
      },
      {
        farmaco: 'Aceites minerales, sucralfato',
        descripcion: 'Pueden inhibir la absorción de vitamina K.',
      },
      {
        farmaco: 'Antibióticos de amplio espectro',
        descripcion: 'Pueden reducir la producción de vitamina K por la microflora intestinal.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'La vitamina K es un cofactor esencial en la activación de los factores de coagulación II, VII, IX y X, así como de las proteínas C y S.',
    farmacocinetica:
      'Absorción mejorada con alimentos grasos. Se concentra en el hígado. Se une altamente a las proteínas plasmáticas.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Solución',
      concentracion_texto: '10 mg/ml',
    },
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Tabletas',
      concentraciones: ['10 mg', '50 mg'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Hurones, Conejos',
        dosis: '1.5–2.5 mg/kg s.c. inicialmente, luego 1.5–2.5 mg/kg p.o. c/12h durante 21–30 días (dependiendo del tipo de rodenticida).',
        indicacion: 'Intoxicación por rodenticidas antagonistas de la vitamina K',
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '2.5–5 mg/kg s.c., i.m., p.o. c/12h',
        indicacion: 'Intoxicación por rodenticidas antagonistas de la vitamina K',
      },
    ],
  },
};
