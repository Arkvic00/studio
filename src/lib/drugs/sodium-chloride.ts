import { Drug } from '../drug.model';

export const sodiumChlorideDrug: Drug = {
  id: 'sodium-chloride',
  meta_data: {
    nombre_generico: 'Cloruro de sodio',
    nombres_comerciales: ['Aqupharm', 'Hypertonic saline', 'Sodium chloride', 'Vetivex'],
    grupo_farmacologico: 'Solución de cristaloides',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Expande el volumen plasmático y reemplaza el líquido extracelular perdido.',
      'En los peces de agua dulce, los iones de cloruro inhiben la absorción de nitritos a través del epitelio branquial y reducen el efecto tóxico.',
      'Las soluciones salinas hipertónicas se utilizan para expandir rápidamente el volumen sanguíneo circulante en animales en estado de shock.',
      'No utilizar si se utiliza zeolita en el sistema de filtración.',
      'La pomada oftálmica puede causar una sensación de escozor.',
    ],
    usos_principales: 'Cuando se utiliza para la reposición de líquidos, el NaCl (0.45% y 0.9%) expandirá el compartimento del volumen plasmático. El suero salino normal es también el tratamiento de elección para los pacientes con hipercalcemia o alcalosis hiperclorémica. Las soluciones de cloruro de sodio se utilizan a menudo como diluyente de fármacos. Las soluciones salinas hipertónicas se utilizan para expandir rápidamente el volumen sanguíneo circulante en animales con shock, especialmente durante el período preoperatorio. La pomada oftálmica hipertónica se utiliza en el tratamiento del edema corneal. El suplemento oral de sodio es recomendado por algunos autores en el tratamiento a largo plazo del hipoadrenocorticismo. Se utiliza para el tratamiento de protozoos externos en anfibios y peces.',
  },
  informacion_cliente: [
    'Solución para fluidoterapia intravenosa.',
    'Se utiliza para corregir la deshidratación y los desequilibrios electrolíticos.',
    'La pomada oftálmica puede causar escozor.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        indicacion: 'Edema corneal',
        vias: ['Oftálmica'],
        math: {
          tipo_calculo: 'aplicacion_directa',
        },
        intervalo: 'q4-24h',
        notas_tecnicas: 'Aplicar una pequeña cantidad de pomada.'
      },
      {
        indicacion: 'Hipotensión/shock',
        vias: ['IV'],
        math: {
          tipo_calculo: 'ml_kg',
          dosis_min: 5,
          dosis_max: 5,
          unidad_calculo: 'ml/kg'
        },
        notas_tecnicas: 'De solución al 7.5% durante 5-10 minutos. Las soluciones de esta concentración son hipertónicas, por lo que deben utilizarse con precaución y con otras estrategias de reposición de líquidos apropiadas. El NaCl hipertónico puede combinarse con soluciones coloides para estabilizar el aumento del volumen vascular proporcionado por la solución hipertónica.'
      }
    ],
    anfibios: [
      {
        indicacion: 'Protozoos externos',
        vias: ['Inmersión'],
        math: {
          tipo_calculo: 'concentracion_g_l',
          dosis_min: 6,
          dosis_max: 6,
        },
        notas_tecnicas: 'Como un baño de 24 horas durante 3-5 días.'
      }
    ],
    peces: [
      {
        indicacion: 'Protozoos externos',
        vias: ['Inmersión'],
        math: {
          tipo_calculo: 'concentracion_g_l',
          dosis_min: 6,
          dosis_max: 6,
        },
        notas_tecnicas: 'Como un baño de 24 horas durante 3-5 días.'
      },
      {
        indicacion: 'Control de ectoparásitos',
        vias: ['Inmersión'],
        math: {
          tipo_calculo: 'concentracion_g_l',
          dosis_min: 30,
          dosis_max: 30,
        },
        notas_tecnicas: 'Como un baño durante 5-10 minutos semanalmente o según sea necesario.'
      },
      {
        indicacion: 'Osmorregulación',
        vias: ['Inmersión'],
        math: {
          tipo_calculo: 'concentracion_g_l',
          dosis_min: 1,
          dosis_max: 5,
        },
        notas_tecnicas: 'Por inmersión prolongada.'
      }
    ]
  }
};
