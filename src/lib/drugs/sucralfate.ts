import { Drug } from '../drug.model';

export const sucralfateDrug: Drug = {
  id: 'sucralfate',
  meta_data: {
    nombre_generico: 'Sucralfato',
    nombres_comerciales: ['Antepsin', 'Carafate'],
    grupo_farmacologico: 'Protector de la mucosa gastrointestinal',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Tratamiento de la ulceración esofágica, gástrica y duodenal.',
      'Forma una barrera química sobre los sitios de la úlcera, previniendo una mayor erosión por ácido, pepsina y sales biliares.',
      'Estimula los mecanismos de defensa y reparación de la mucosa.',
      'Puede disminuir la biodisponibilidad de los antagonistas H2, la fenitoína y la tetraciclina.',
    ],
    usos_principales: 'Tratamiento de la ulceración esofágica, gástrica y duodenal, utilizado con un antagonista del receptor H2 o un inhibidor de la bomba de protones, pero administrado por separado.',
  },
  informacion_cliente: [
    'Administrar con el estómago vacío, al menos una hora antes de las comidas.',
    'Si se administran otros medicamentos, darlos al menos 2 horas antes del sucralfato.',
    'El efecto secundario más común es el estreñimiento.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        especie: ['hurones'],
        indicacion: 'Ulceración gastrointestinal',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 25,
          dosis_max: 125,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q6-12h'
      },
      {
        especie: ['conejos'],
        indicacion: 'Ulceración gastrointestinal',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 25,
          dosis_max: 25,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q8-12h'
      },
      {
        especie: ['roedores'],
        indicacion: 'Ulceración gastrointestinal',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 25,
          dosis_max: 50,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q6-8h'
      },
      {
        especie: ['primates'],
        indicacion: 'Ulceración gastrointestinal',
        vias: ['PO'],
        math: {
          tipo_calculo: 'dosis_unitaria',
        },
        intervalo: 'q6-12h',
        notas_tecnicas: '500 mg/animal'
      },
      {
        especie: ['erizos'],
        indicacion: 'Ulceración gastrointestinal',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 10,
          dosis_max: 10,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q8-12h'
      }
    ],
    aves: [
      {
        indicacion: 'Ulceración gastrointestinal',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 25,
          dosis_max: 100,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q8-24h'
      }
    ],
    reptiles: [
      {
        indicacion: 'Ulceración gastrointestinal',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 200,
          dosis_max: 1000,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q6-24h'
      }
    ]
  }
};
