import { Drug } from '../drug.model';

export const sodiumBicarbonateDrug: Drug = {
  id: 'sodium-bicarbonate',
  meta_data: {
    nombre_generico: 'Bicarbonato de sodio',
    nombres_comerciales: ['Bicarbonato de sodio'],
    grupo_farmacologico: 'Alcalinizante',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Tratamiento de la acidosis metabólica grave.',
      'Alcalinización de la orina.',
      'Terapia coadyuvante en el tratamiento de la crisis hipercalcémica o hiperpotasémica.',
      'No debe utilizarse en animales que no pueden expulsar eficazmente el dióxido de carbono.',
      'El uso excesivo puede provocar alcalosis metabólica, hipernatremia e insuficiencia cardíaca congestiva.',
    ],
    usos_principales: 'Tratamiento de la acidosis metabólica grave, alcalinización de la orina y como terapia coadyuvante en el tratamiento de la crisis hipercalcémica o hiperpotasémica.',
  },
  informacion_cliente: [
    'Fármaco de uso exclusivo veterinario.',
    'Se requiere una monitorización cuidadosa de los gases en sangre y del estado clínico del paciente.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        indicacion: 'Acidosis metabólica grave',
        vias: ['IV'],
        math: {
          tipo_calculo: 'formula',
          formula: 'Déficit de base × 0.5 × peso corporal (kg)',
          unidad_calculo: 'mmol'
        },
        notas_tecnicas: 'Administrar la mitad de la dosis lentamente por vía intravenosa durante 3-4 horas, volver a comprobar los gases en sangre y reevaluar clínicamente al paciente. Evitar la sobrealcalinización.'
      },
      {
        indicacion: 'Situaciones agudamente críticas (p. ej., parada cardíaca)',
        vias: ['IV'],
        math: {
          tipo_calculo: 'mmol_kg',
          dosis_min: 1,
          dosis_max: 1,
          unidad_calculo: 'mmol/kg'
        },
        notas_tecnicas: 'Administrar durante 1-2 minutos seguido de 0.5 mmol/kg a intervalos de 10 minutos durante la parada.'
      },
      {
        indicacion: 'Terapia coadyuvante de la hipercalcemia',
        vias: ['IV'],
        math: {
          tipo_calculo: 'mmol_kg',
          dosis_min: 0.5,
          dosis_max: 1,
          unidad_calculo: 'mmol/kg'
        },
        notas_tecnicas: 'Administrar durante 30 minutos.'
      },
      {
        indicacion: 'Terapia coadyuvante de la hiperpotasemia',
        vias: ['IV'],
        math: {
          tipo_calculo: 'mmol_kg',
          dosis_min: 2,
          dosis_max: 3,
          unidad_calculo: 'mmol/kg'
        },
        notas_tecnicas: 'Administrar durante 30 minutos.'
      },
      {
        indicacion: 'Acidosis metabólica secundaria a insuficiencia renal o para alcalinizar la orina',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 8,
          dosis_max: 12,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q8h',
        notas_tecnicas: 'Ajustar la dosis para mantener las concentraciones de CO2 total en 18-24 mEq/l. La dosis puede aumentarse a 50 mg/kg para ajustar el pH de la orina en pacientes con función renal, hepática y cardíaca normales.'
      }
    ],
    peces: [
      {
        indicacion: 'Tamponamiento del agua',
        vias: ['Inmersión'],
        math: {
          tipo_calculo: 'aplicacion_directa',
        },
        notas_tecnicas: 'Añadir el polvo según sea necesario al agua del acuario y controlar el pH con un medidor de pH digital.'
      }
    ]
  }
};
