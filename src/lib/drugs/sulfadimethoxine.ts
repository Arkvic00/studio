import { Drug } from '../drug.model';

export const sulfadimethoxineDrug: Drug = {
  id: 'sulfadimethoxine',
  meta_data: {
    nombre_generico: 'Sulfadimetoxina',
    nombres_comerciales: ['Coxi Plus'],
    grupo_farmacologico: 'Sulfonamida',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Inhibe competitivamente la síntesis bacteriana y protozoaria del ácido fólico.',
      'Tratamiento de la coccidiosis en hurones, erizos, primates, conejos, aves y reptiles.',
      'Tratamiento de la atoxoplasmosis en aves paseriformes.',
      'Utilizar con precaución en reptiles con función renal reducida, insuficiencia renal o deshidratación.',
    ],
    usos_principales: 'Coccidiosis en hurones, erizos, primates, conejos, aves y reptiles; atoxoplasmosis en aves paseriformes.',
  },
  informacion_cliente: [
    'Administrar según la pauta prescrita por el veterinario.',
    'Asegurarse de que el animal tenga acceso a agua fresca en todo momento.',
    'Completar el tratamiento completo aunque los síntomas desaparezcan.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        especie: ['hurones'],
        indicacion: 'Coccidiosis',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 25,
          dosis_max: 50,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'Ver notas',
        notas_tecnicas: '50 mg/kg una vez, luego 25 mg/kg q24h durante 5-10 días'
      },
      {
        especie: ['conejos', 'roedores'],
        indicacion: 'Coccidiosis',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 25,
          dosis_max: 50,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'Ver notas',
        notas_tecnicas: '50 mg/kg una vez, luego 25 mg/kg q24h durante 10-20 días'
      },
      {
        especie: ['primates'],
        indicacion: 'Coccidiosis',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 25,
          dosis_max: 50,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q24h'
      },
      {
        especie: ['erizos'],
        indicacion: 'Coccidiosis',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 2,
          dosis_max: 20,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q24h'
      },
      {
        especie: ['otros_mamiferos_pequenos'],
        indicacion: 'Coccidiosis',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q12h'
      }
    ],
    aves: [
      {
        indicacion: 'Coccidiosis',
        vias: ['Agua de bebida'],
        math: {
          tipo_calculo: 'concentracion_g_l',
          dosis_min: 1,
          dosis_max: 1,
        },
        notas_tecnicas: '1 g/l de agua de bebida al día durante 2 días, luego 3 días de descanso y 2 días de tratamiento.'
      }
    ],
    reptiles: [
      {
        indicacion: 'Coccidiosis',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 50,
          dosis_max: 50,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q24h',
        notas_tecnicas: 'Durante 21 días para el tratamiento de la coccidiosis en dragones barbudos.'
      }
    ]
  }
};
