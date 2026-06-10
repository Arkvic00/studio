import { Drug } from '../drug.model';

export const sevofluraneDrug: Drug = {
  id: 'sevoflurane',
  meta_data: {
    nombre_generico: 'Sevoflurano',
    nombres_comerciales: ['SevoFlo', 'Sevohale', 'Sevotek'],
    grupo_farmacologico: 'Anestésico inhalatorio',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Inducción y mantenimiento de la anestesia.',
      'Menos soluble en sangre que el isoflurano, por lo que la inducción y la recuperación son más rápidas.',
      'Olor menos penetrante que el isoflurano, bien tolerado para la inducción con mascarilla.',
      'Causa hipotensión dosis-dependiente.',
      'Atraviesa la barrera placentaria.',
      'Evitar flujos de gas bajos y altas temperaturas del absorbente en cirugías largas.',
      'Los agonistas opioides, las benzodiacepinas y el óxido nitroso reducen la concentración requerida.',
    ],
    usos_principales: 'Inducción y mantenimiento de la anestesia general.',
  },
  informacion_cliente: [
    'Gas anestésico que se administra mediante un vaporizador calibrado.',
    'El animal estará completamente monitorizado durante todo el procedimiento anestésico.',
    'La recuperación de la anestesia es rápida.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        indicacion: 'Anestesia general',
        vias: ['Inhalatoria'],
        math: {
          tipo_calculo: 'concentracion',
          induccion_min: 6,
          induccion_max: 8,
          mantenimiento_min: 2.5,
          mantenimiento_max: 3.7,
          unidad_calculo: '%'
        },
        notas_tecnicas: 'La concentración espirada requerida para mantener la anestesia quirúrgica en el 50% de los receptores es de aproximadamente 2.5% en la mayoría de los animales (concentración alveolar mínima, CAM). La CAM en conejos es de 3.7%. La administración de otros agentes anestésicos y analgésicos opioides reduce los requerimientos de dosis de sevoflurano.'
      }
    ],
    aves: [
      {
        indicacion: 'Anestesia general',
        vias: ['Inhalatoria'],
        math: {
          tipo_calculo: 'concentracion',
          induccion_min: 6,
          induccion_max: 8,
          mantenimiento_min: 2.5,
          mantenimiento_max: 2.5,
          unidad_calculo: '%'
        },
        notas_tecnicas: 'La concentración espirada requerida para mantener la anestesia quirúrgica en el 50% de los receptores es de aproximadamente 2.5% (CAM).'
      }
    ],
    reptiles: [
      {
        indicacion: 'Anestesia general',
        vias: ['Inhalatoria'],
        math: {
          tipo_calculo: 'concentracion',
          induccion_min: 6,
          induccion_max: 8,
          mantenimiento_min: 3,
          mantenimiento_max: 5,
          unidad_calculo: '%'
        },
        notas_tecnicas: 'Inducción: 6-8% en oxígeno al 100%; Mantenimiento: 3-5% en oxígeno al 100%.'
      }
    ],
    anfibios: [
      {
        indicacion: 'Anestesia general',
        vias: ['Tópica', 'Inhalatoria'],
        math: {
          tipo_calculo: 'dosis_unitaria',
        },
        notas_tecnicas: 'Inducción: 37.5 µl/g de una mezcla tópica (3 partes de sevoflurano líquido, 3.5 partes de gel KY, 1.5 partes de agua destilada) en una cámara cerrada. Inducción en cámara gaseosa: En sapos de caña, 1.75% de sevoflurano resultó en la pérdida del reflejo de enderezamiento en 15 minutos en el 50% de los sapos.'
      }
    ]
  }
};
