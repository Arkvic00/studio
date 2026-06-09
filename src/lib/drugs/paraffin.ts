import type { Drug } from '@/lib/types';

export const paraffinDrug: Drug = {
  id: "paraffin",
  meta_data: {
    nombre_generico: "Parafina líquida (Aceite mineral / Vaselina líquida)",
    nombres_comerciales: ["Katalax", "Lacri-Lube", "Liquid Paraffin", "Simple Eye Ointment"],
    grupo_farmacologico: "Laxante emoliente; Lubricante ocular",
    status_regulatorio: "AVM-GSL, P"
  },
  resumen_clinico: {
    puntos_clave: [
      "Ablanda las heces al interferir con la reabsorción de agua intestinal.",
      "Lubricante ocular de larga duración que imita la capa lipídica de la lágrima.",
      "¡ALERTA!: Al ser insípida, el riesgo de neumonía por aspiración es muy alto si se administra a la fuerza con jeringa.",
      "El uso crónico oral reduce la absorción de vitaminas liposolubles (A, D, E, K).",
      "No recomendada vía oral en conejos (riesgo de aspiración e interferencia con hidratación cecal)."
    ],
    usos_principales: "Manejo del estreñimiento, bolas de pelo (gatos) y lubricación ocular (KCS, anestesia).",
    inicio_accion: "Variable (6-12h oral; inmediato ocular)",
    duracion_efecto: "Durante el tránsito intestinal (oral); hasta 8-12h (ocular)"
  },
  informacion_cliente: [
    "No forzar la administración oral si el animal se resiste; use pastas palatables si es posible.",
    "Para uso en ojos, aplicar la pomada por la noche o antes de la anestesia.",
    "Vigile si el animal tose tras la administración oral (signo de aspiración).",
    "La pomada ocular puede nublar la visión temporalmente."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estreñimiento / Laxante",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "cucharadas con la comida"
        }
      },
      {
        indicacion: "Lubricación ocular (KCS / Anestesia)",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "aplicación de pomada" },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Bolas de pelo / Estreñimiento",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 25,
          dosis_min: 10,
          dosis_max: 25,
          unidad_calculo: "mm de pasta Katalax"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "Adultos: 25 mm. Gatitos: 10 mm."
      },
      {
        indicacion: "Lubricación ocular",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "aplicación" }
      }
    ],
    huron: [
      {
        indicacion: "Estreñimiento",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "mm de pasta Katalax"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Lubricación ocular",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "aplicación" },
        notas_tecnicas: "¡PROHIBIDA VÍA ORAL!: Alto riesgo de neumonía lipoidea e interferencia con motilidad cecal."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales con reflejo de deglución reducido (riesgo de aspiración).",
      "Vía oral en conejos.",
      "Obstrucción intestinal completa."
    ],
    efectos_adversos: [
      "Neumonía lipoidea por aspiración (frecuente y fatal).",
      "Filtración anal (incontinencia oleosa).",
      "Hipovitaminosis en uso crónico.",
      "Visión borrosa (pomada ocular)."
    ],
    monitoreo_recomendado: [
      "Consistencia de las heces",
      "Patrón respiratorio post-dosis",
      "Niveles de vitaminas A, D, E, K en uso prolongado"
    ],
    instrucciones_manejo: "No administrar con jeringa si es posible; mezclar con comida sabrosa.",
    sobredosis: {
      signos: ["Diarrea profusa", "Aspiración pulmonar"],
      tratamiento: "Soporte sintomático; oxigenoterapia si hay aspiración."
    },
    interacciones_farmacologicas: [
      { farmaco: "Docusato sódico", efecto: "Aumenta la absorción sistémica de la parafina (riesgo de granulomas).", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Laxante mecánico que lubrica y ablanda el bolo fecal. Ocularmente evita la evaporación lagrimal.",
    farmacocinetica: "No se absorbe sistémicamente si la mucosa está intacta."
  },
  presentaciones_comerciales: [
    { tipo: "Pasta oral (Katalax)", concentracion_texto: "Parafina blanca suave", valor_concentracion: 1, unidad_concentracion: "unidad", es_divisible: false },
    { tipo: "Pomada oftálmica", concentracion_texto: "Parafina blanca + líquida", valor_concentracion: 1, unidad_concentracion: "unidad", es_divisible: false },
    { tipo: "Emulsión oral", concentracion_texto: "50% aceite/agua", valor_concentracion: 0.5, unidad_concentracion: "ml/ml", es_divisible: false }
  ]
};
