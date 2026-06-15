import type { Drug } from '../index';

export const vitaminB12Drug: Drug = {
  id: 'vitamin_b12',
  meta_data: {
    nombre_generico: 'Vitamina B12',
    nombres_comerciales: ['Anacobin', 'Cytacon', 'Cytamen', 'Cobalin-H', 'Vitamina B12'],
    nombres_alternativos: ['Cianocobalamina', 'Hidroxocobalamina'],
    grupo_farmacologico: 'Vitamina',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Las deficiencias de vitamina B pueden ocurrir en pacientes con enfermedad renal o hepática, anorexia significativa o enfermedad ileal.',
      'La cobalamina es un cofactor en la vía del folato y, por lo tanto, es importante en la síntesis de ADN.',
      'Generalmente seguro de usar, ya que las vitaminas B son solubles en agua y se excretan en la orina si se administran en exceso.',
    ],
    usos_principales: 'Prevención y tratamiento de la deficiencia de vitamina B12.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'La hidroxocobalamina se retiene en el cuerpo por más tiempo que la cianocobalamina y, por lo tanto, es la preparación preferida.',
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
    mecanismo_accion: 'La cobalamina es un cofactor en la vía del folato y, por lo tanto, es importante en la síntesis de ADN.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Solución',
      concentracion_texto: '1 mg/ml',
      valor_concentracion: 1,
      unidad_concentracion: 'mg/ml',
      notas: ['Hidroxocobalamina'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Hurones',
        dosis: '250 μg/hurón s.c., i.m.',
        indicacion: 'Deficiencia de vitamina B12',
      },
      {
        especie: 'Conejos',
        dosis: '50 μg/conejo s.c., i.m.',
        indicacion: 'Deficiencia de vitamina B12',
      },
      {
        especie: 'Roedores',
        dosis: '500 μg/kg s.c., i.m.',
        indicacion: 'Deficiencia de vitamina B12',
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '250 μg/kg s.c., i.m.',
        indicacion: 'Deficiencia de vitamina B12',
      },
    ],
    reptiles: [
      {
        especie: 'Reptiles',
        dosis: '500 μg/kg s.c., i.m.',
        indicacion: 'Deficiencia de vitamina B12',
      },
    ],
  },
};
