import type { Drug } from '../index';

export const vitaminB1Drug: Drug = {
  id: 'vitamin_b1',
  meta_data: {
    nombre_generico: 'Vitamina B1',
    nombres_comerciales: ['Inyección de vitamina B1'],
    nombres_alternativos: ['Tiamina'],
    grupo_farmacologico: 'Vitamina',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Las deficiencias de vitamina B pueden ocurrir en pacientes con enfermedad renal o hepática o anorexia significativa.',
      'La tiamina se puede administrar de forma segura en dosis más altas que las vitaminas B compuestas, y el riesgo de reacciones a la piridoxina es menor.',
      'Generalmente seguro de usar, ya que las vitaminas B son solubles en agua y se excretan en la orina si se administran en exceso.',
    ],
    usos_principales: 'Prevención y tratamiento de la deficiencia de vitamina B1.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'Los productos autorizados están destinados a animales grandes y son POM-V. La mayoría de las prácticas utilizan la preparación veterinaria especial más diluida (POM-VPS).',
    'Varios productos están disponibles.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: [],
    precauciones: [
      'Las preparaciones de vitaminas B deben protegerse de la luz.',
      'Las preparaciones de vitaminas del complejo B también contienen piridoxina (B6), que es neurotóxica para las aves en dosis altas.',
    ],
  },
  reacciones_adversas: {
    comunes: [],
    raras: [
      'Se puede observar anafilaxia cuando se usa por vía intravenosa y los productos deben administrarse lentamente y/o diluirse con líquidos intravenosos.',
    ],
  },
  interacciones_farmacos: {
    observadas: [],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion: 'La tiamina es un cofactor de la transcetolasa, una enzima del metabolismo de los carbohidratos.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Solución',
      concentracion_texto: '100 mg/ml',
      valor_concentracion: 100,
      unidad_concentracion: 'mg/ml',
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Hurones',
        dosis: '12.5-25 mg/hurón i.m., s.c.',
        indicacion: 'Deficiencia de vitamina B1',
      },
      {
        especie: 'Conejos',
        dosis: '25 mg/conejo s.c., i.m.',
        indicacion: 'Deficiencia de vitamina B1',
      },
      {
        especie: 'Cobayas',
        dosis: '10-20 mg/kg i.m., s.c.',
        indicacion: 'Deficiencia de vitamina B1',
      },
      {
        especie: 'Chinchillas',
        dosis: '50-100 mg/kg i.m., s.c.',
        indicacion: 'Deficiencia de vitamina B1',
      },
      {
        especie: 'Ratas, ratones',
        dosis: '10-30 mg/kg i.m., s.c.',
        indicacion: 'Deficiencia de vitamina B1',
      },
      {
        especie: 'Erizos',
        dosis: '100 mg/kg i.m., s.c.',
        indicacion: 'Deficiencia de vitamina B1',
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '30 mg/kg i.m.',
        indicacion: 'Deficiencia de vitamina B1',
      },
    ],
  },
};
