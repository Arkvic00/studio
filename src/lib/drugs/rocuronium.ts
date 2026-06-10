import { Drug } from '../drug.model';

export const rocuroniumDrug: Drug = {
  id: 'rocuronium',
  meta_data: {
    nombre_generico: 'Rocuronio',
    nombres_comerciales: ['Esmeron'],
    grupo_farmacologico: 'Bloqueante neuromuscular no despolarizante',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Inhibe la acción de la acetilcolina en la unión neuromuscular.',
      'Inicio de acción más rápido y duración más corta que el vecuronio.',
      'Conveniente por su solución acuosa y mayor vida útil.',
      'Se recomienda monitorización y reversión del bloqueo neuromuscular.',
      'Reversible con sugammadex (8 mg/kg IV en perros).',
      'La hipotermia, acidosis e hipopotasemia prolongan su efecto.',
      'La enfermedad hepática puede prolongar la duración del efecto.',
      'No administrar sin anestesia adecuada y soporte ventilatorio.',
      'Puede causar aumento de la frecuencia cardíaca e hipertensión leve a dosis altas.',
      'El bloqueo se prolonga con anestésicos volátiles, aminoglucósidos, clindamicina y lincomicina.',
    ],
    usos_principales: 'Proporcionar bloqueo neuromuscular durante la anestesia para mejorar el acceso quirúrgico, facilitar la ventilación por presión positiva o en cirugía intraocular.',
    inicio_accion: 'Rápido',
    duracion_efecto: 'Corta',
  },
  informacion_cliente: [
    'Fármaco de uso estrictamente hospitalario bajo anestesia profunda.',
    'El animal requerirá ventilación asistida mientras dure el efecto del medicamento.',
    'Se monitorizará la recuperación completa de la fuerza muscular antes de despertar al paciente.',
  ],
  parametros_dosificacion: {
    aves: [
      {
        indicacion: 'Cirugía ocular',
        vias: ['Tópica ocular'],
        math: {
          tipo_calculo: 'dosis_unitaria',
        },
        notas_tecnicas: 'Lechuzas comunes: 0.35 mg/ojo. Mochuelos: 0.2 mg/ojo. Autillos: 0.15 mg/ojo. Cernícalos: 0.12 mg/ojo. Loros amazónicos: 20 µl/ojo. Las dosis pueden repetirse.'
      }
    ],
    reptiles: [
      {
        indicacion: 'Bloqueo neuromuscular',
        vias: ['IM'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: 'mg/kg'
        },
        notas_tecnicas: 'No sustituye a la analgesia o anestesia general.'
      }
    ]
  }
};
