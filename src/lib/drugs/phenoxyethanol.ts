import type { Drug } from '@/lib/types';

export const phenoxyethanolDrug: Drug = {
  id: "phenoxyethanol",
  meta_data: {
    nombre_generico: "Fenoxietanol (Phenoxetol)",
    nombres_comerciales: ["Aqua-sed", "Koi Sedate"],
    grupo_farmacologico: "Anestésico para peces; Sedante",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Sedante y anestésico específico para peces.",
      "Actúa probablemente sobre las membranas neuronales suprimiendo el SNC.",
      "Muy soluble en agua pero requiere agitación vigorosa para disolverse totalmente.",
      "No se acumula en los tejidos; permite anestesias prolongadas.",
      "Más seguro y potente en temperaturas bajas del agua.",
      "Posee propiedades antibacterianas leves incorporadas en algunas fórmulas."
    ],
    usos_principales: "Sedación, inmovilización, anestesia y eutanasia en peces.",
    inicio_accion: "Variable (inducción puede ser larga)",
    duracion_efecto: "Dependiente del tiempo de inmersión"
  },
  informacion_cliente: [
    "Uso exclusivo para peces de estanque o acuario.",
    "Requiere mezclarse muy bien con el agua del tanque antes de introducir a los peces.",
    "Asegurar una oxigenación vigorosa del agua durante el procedimiento.",
    "Para eutanasia, el pez debe permanecer en la solución por un periodo prolongado.",
    "Producto irritante; evitar contacto con piel y ojos humanos."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Anestesia (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.3,
          dosis_min: 0.1,
          dosis_max: 0.5,
          unidad_calculo: "ml/l"
        },
        notas_tecnicas: "Seguir estrictamente las recomendaciones del fabricante para productos comerciales."
      },
      {
        indicacion: "Eutanasia (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "ml/l"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No se han reportado contraindicaciones absolutas específicas."
    ],
    efectos_adversos: [
      "Inducción prolongada en algunas especies.",
      "Hiperactividad transitoria durante la inducción o recuperación.",
      "Margen de seguridad estrecho en ciertas especies exóticas.",
      "Fasciculaciones musculares involuntarias bajo anestesia."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria (movimiento opercular)",
      "Reflejo de enderezamiento",
      "Temperatura del agua"
    ],
    instrucciones_manejo: "IRRITANTE. Usar guantes y protección ocular durante la preparación de la mezcla.",
    sobredosis: {
      signos: ["Apnea profunda", "Muerte"],
      tratamiento: "Transferencia inmediata a agua limpia, fresca y altamente oxigenada."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Supresor del SNC mediante la alteración de la permeabilidad iónica de las membranas neuronales.",
    farmacocinetica: "Absorción branquial rápida. Eliminación rápida sin residuos significativos."
  },
  presentaciones_comerciales: [
    {
      tipo: "Líquido puro para inmersión",
      concentracion_texto: "100% (Phenoxyethanol)",
      valor_concentracion: 100,
      unidad_concentracion: "%",
      es_divisible: false
    }
  ]
};