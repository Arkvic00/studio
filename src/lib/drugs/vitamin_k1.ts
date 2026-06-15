import type { Drug } from '../index';

export const vitaminK1Drug: Drug = {
  id: 'vitamin_k1',
  meta_data: {
    nombre_generico: 'Vitamina K1',
    nombres_comerciales: ['Konakion', 'Vitamina K1'],
    nombres_alternativos: ['Fitomenadiona'],
    grupo_farmacologico: 'Vitamina',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'La vitamina K es esencial para la síntesis de los factores de coagulación II, VII, IX y X.',
      'El principal uso de la vitamina K1 es en el tratamiento de la intoxicación por rodenticidas antagonistas de la vitamina K.',
      'La vitamina K3 (menadiona) es nefrotóxica y no debe usarse en especies de pequeños mamíferos.',
      'La sobredosis de vitamina K1 puede causar anemia hemolítica con formación de cuerpos de Heinz en los glóbulos rojos.',
    ],
    usos_principales: 'Tratamiento de la intoxicación por rodenticidas antagonistas de la vitamina K.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'La sobredosis de vitamina K1 puede causar anemia hemolítica con formación de cuerpos de Heinz en los glóbulos rojos.',
    'Administrar con alimentos.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: [
      'No administrar por vía intravenosa, ya que puede producirse un colapso anafiláctico.',
      'No usar vitamina K3 (menadiona) en ninguna especie, ya que es nefrotóxica.',
    ],
    precauciones: [
      'Los pacientes deben ser monitoreados para detectar evidencia de anemia hemolítica.',
      'Las preparaciones parenterales no deben administrarse a pacientes con insuficiencia hepática grave.',
    ],
  },
  reacciones_adversas: {
    comunes: [
      'La inyección de Konakion puede causar reacciones en el lugar de la inyección.',
      'Se han informado reacciones anafilácticas después de la administración parenteral.',
    ],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Anticoagulantes orales',
        descripcion:
          'La vitamina K1 puede antagonizar los efectos de los anticoagulantes orales.',
      },
      {
        farmaco: 'Fármacos que compiten por la albúmina sérica',
        descripcion: 'No administrar junto con fármacos que compiten por la albúmina sérica, por ejemplo, sulfonamidas.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion: 'La vitamina K1 es un cofactor en la carboxilación post-traduccional de los residuos de ácido glutámico de las proteínas precursoras de los factores de coagulación II, VII, IX y X.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Emulsión',
      concentracion_texto: '10 mg/ml',
      valor_concentracion: 10,
      unidad_concentracion: 'mg/ml',
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
        especie: 'Hurones',
        dosis: '1-2.5 mg/kg s.c., i.m., p.o. q12h',
        indicacion: 'Intoxicación por rodenticidas antagonistas de la vitamina K',
        notas: [
          'Dividir las dosis altas en varios sitios para evitar la irritación local. Tratar durante 1-4 semanas dependiendo del veneno ingerido.',
        ],
      },
      {
        especie: 'Conejos',
        dosis: '0.5-2.5 mg/kg s.c., p.o. q12h',
        indicacion: 'Intoxicación por rodenticidas antagonistas de la vitamina K',
      },
      {
        especie: 'Roedores',
        dosis: '2-5 mg/kg s.c., p.o. q12h',
        indicacion: 'Intoxicación por rodenticidas antagonistas de la vitamina K',
      },
      {
        especie: 'Petauros del azúcar',
        dosis: '1-5 mg/kg s.c., p.o. q12h',
        indicacion: 'Intoxicación por rodenticidas antagonistas de la vitamina K',
      },
      {
        especie: 'Erizos',
        dosis: '1-5 mg/kg s.c., p.o. q12h',
        indicacion: 'Intoxicación por rodenticidas antagonistas de la vitamina K',
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '2.5-5 mg/kg s.c., i.m., p.o. q8-12h',
        indicacion: 'Intoxicación por rodenticidas antagonistas de la vitamina K',
        notas: [
          'Para el tratamiento de la intoxicación por rodenticidas, la terapia debe continuar durante 1 a 4 semanas, dependiendo del veneno ingerido. La dosis de mantenimiento es de 0.25-2.5 mg/kg p.o. q12-24h.',
        ],
      },
    ],
    reptiles: [
      {
        especie: 'Reptiles',
        dosis: '0.5-2.5 mg/kg s.c., i.m., p.o. q24h',
        indicacion: 'Intoxicación por rodenticidas antagonistas de la vitamina K',
        notas: ['Tratar durante 1-4 semanas dependiendo del veneno ingerido.'],
      },
    ],
  },
};
