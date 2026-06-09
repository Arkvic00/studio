import type { Drug } from '@/lib/types';

export const metoprenoDrug: Drug = {
  id: "metopreno",
  meta_data: {
    nombre_generico: "Metopreno (S-Metopreno)",
    nombres_comerciales: ["Acclaim", "Broadline", "Duoflect", "Frontline Combo/Plus"],
    grupo_farmacologico: "Análogo de la hormona juvenil; Regulador del crecimiento de insectos",
    status_regulatorio: "POM-V, NFA-VPS, GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo de la hormona juvenil que inhibe el desarrollo larvario y la eclosión de huevos.",
      "No mata pulgas adultas; siempre se utiliza en combinación con adulticidas (ej. Fipronil).",
      "Los sprays ambientales tienen eficacia contra ácaros del polvo doméstico.",
      "Seguro para hembras gestantes y lactantes.",
      "Eficaz en el control de infestaciones en el hogar al interrumpir el ciclo de vida."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por pulgas en perros, gatos y hurones.",
    inicio_accion: "Inmediato (interrupción del desarrollo)",
    duracion_efecto: "30 días (tópico); hasta 12 meses (ambiental)"
  },
  informacion_cliente: [
    "Aplicar la pipeta directamente sobre la piel de la nuca.",
    "No bañar al animal 48h antes ni 24h después de la aplicación.",
    "Si usa el spray ambiental, mantenga alejados a aves y peces durante la aplicación.",
    "Tratar a todos los animales del hogar simultáneamente para mejores resultados."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Prevención de Pulgas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta según peso"
        },
        frecuencia: { texto_ui: "Cada 4 semanas", intervalo_horas: 672 }
      }
    ],
    gato: [
      {
        indicacion: "Prevención de Pulgas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta"
        },
        frecuencia: { texto_ui: "Cada 4 semanas", intervalo_horas: 672 }
      }
    ],
    huron: [
      {
        indicacion: "Prevención de Pulgas y Garrapatas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "ml (pipeta de 50mg fipronil + 60mg metopreno)"
        },
        frecuencia: { texto_ui: "Cada 4 semanas", intervalo_horas: 672 },
        notas_tecnicas: "No usar en hurones menores de 6 meses."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hurones menores de 6 meses.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Prurito o alopecia local transitoria en el sitio de aplicación.",
      "Toxicidad en organismos acuáticos (evitar que el animal nade en ríos tras la aplicación)."
    ],
    monitoreo_recomendado: [
      "Presencia de estadios inmaduros en el ambiente",
      "Integridad de la piel en el sitio de aplicación"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Lavarse las manos tras su uso.",
    sobredosis: {
      signos: ["Irritación local marcada"],
      tratamiento: "Lavar con detergente suave; soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Imita la hormona juvenil de los insectos, manteniendo al parásito en estadios inmaduros e impidiendo la formación de la cutícula adulta, lo que lleva a la muerte larvaria.",
    farmacocinetica: "Se distribuye por los lípidos cutáneos y se almacena en las glándulas sebáceas."
  },
  presentaciones_comerciales: [
    {
      tipo: "Pipeta Spot-on",
      concentracion_texto: "Variable (siempre en combinación)",
      valor_concentracion: 0,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
