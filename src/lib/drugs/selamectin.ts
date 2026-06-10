import { Drug } from '../drug.model';

export const selamectinDrug: Drug = {
  id: 'selamectin',
  meta_data: {
    nombre_generico: 'Selamectina',
    nombres_comerciales: ['Evicto', 'Selehold', 'Stronghold', 'Stronghold Plus'],
    grupo_farmacologico: 'Endectocida',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Tratamiento y prevención de pulgas, ácaros de los oídos, Trixascaris, Cheyletiella, sarna sarcóptica, piojos mordedores, anquilostomas y ascárides.',
      'Prevención de la dirofilariosis.',
      'Puede usarse en lactancia y preñez.',
      'Altamente tóxico para organismos acuáticos.',
      'No usar en quelonios por riesgo de neurotoxicidad.',
    ],
    usos_principales: 'Tratamiento y prevención de una amplia gama de parásitos externos e internos.',
  },
  informacion_cliente: [
    'Aplicar el producto directamente sobre la piel, apartando el pelo.',
    'No bañar al animal hasta pasadas al menos 24 horas de la aplicación.',
    'Evitar el contacto del producto con los ojos y la boca del animal y del aplicador.',
    'Desechar el envase de forma segura.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        especie: ['hurones', 'conejos', 'roedores'],
        indicacion: 'Parasitosis',
        vias: ['Tópica'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 6,
          dosis_max: 15,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'Mensual'
      },
      {
        especie: ['petauros_del_azucar', 'erizos'],
        indicacion: 'Parasitosis',
        vias: ['Tópica'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 6,
          dosis_max: 18,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'Mensual'
      },
      {
        especie: ['primates'],
        indicacion: 'Parasitosis',
        vias: ['Tópica'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 6,
          dosis_max: 6,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'Mensual'
      }
    ],
    aves: [
      {
        indicacion: 'Parasitosis',
        vias: ['Tópica'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 20,
          dosis_max: 20,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'Dosis única'
      }
    ],
    anfibios: [
      {
        especie: ['ranas_toro'],
        indicacion: 'Parasitosis',
        vias: ['Tópica'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 6,
          dosis_max: 6,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'Dosis única'
      }
    ]
  }
};
