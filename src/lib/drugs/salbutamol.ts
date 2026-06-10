import { Drug } from '../drug.model';

export const salbutamolDrug: Drug = {
  id: 'salbutamol',
  meta_data: {
    nombre_generico: 'Salbutamol',
    nombres_comerciales: ['Ventolin'],
    grupo_farmacologico: 'Agonista beta-2 adrenérgico',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'La estimulación selectiva de los receptores beta-2 provoca la relajación del músculo liso y la broncodilatación.',
      'Utilizado en el tratamiento del broncoespasmo en enfermedades inflamatorias de las vías respiratorias e irritación.',
      'Utilizado en ratas para la enfermedad pulmonar obstructiva crónica (EPOC) relacionada con micoplasmosis.',
      'Los efectos secundarios incluyen taquicardia, arritmias y vasodilatación periférica.',
      'Mayor riesgo de efectos secundarios si se usa con diuréticos, digoxina, teofilina o corticosteroides.',
    ],
    usos_principales: 'Tratamiento del broncoespasmo en enfermedades inflamatorias de las vías respiratorias e irritación.',
  },
  informacion_cliente: [
    'En caso de usar un inhalador, asegurarse de que el animal inhale la dosis correctamente.',
    'Vigilar la aparición de efectos secundarios como nerviosismo o temblores.',
    'No administrar más dosis de las prescritas por el veterinario.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        especie: ['ratas'],
        indicacion: 'Broncoespasmo',
        vias: ['Inhalatoria'],
        math: {
          tipo_calculo: 'dosis_unitaria',
        },
        intervalo: 'q4-6h o según necesidad',
        notas_tecnicas: '100 µg/rata (usar una cámara pequeña)'
      }
    ],
    aves: [
      {
        indicacion: 'Broncoespasmo',
        vias: ['SC', 'IM', 'IV'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 0.05,
          dosis_max: 0.05,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q8h'
      }
    ]
  }
};
