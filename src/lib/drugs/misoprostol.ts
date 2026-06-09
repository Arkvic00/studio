import type { Drug } from '@/lib/types';

export const misoprostolDrug: Drug = {
  id: "misoprostol",
  meta_data: {
    nombre_generico: "Misoprostol",
    nombres_comerciales: ["Cytotec"],
    grupo_farmacologico: "Análogo de prostaglandina E1; Citoprotector gástrico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Protege la mucosa gástrica inhibiendo la secreción de ácido e incrementando moco y bicarbonato.",
      "Fundamental en la prevención y tratamiento de úlceras inducidas por AINEs.",
      "Puede no ser efectivo para prevenir úlceras por dosis altas de corticosteroides.",
      "Se ha utilizado para inducir el aborto en combinación con aglepristona.",
      "Administrar con comida."
    ],
    usos_principales: "Protección gástrica contra toxicidad por AINEs y manejo de úlceras duodenales.",
    inicio_accion: "Rápido (acción local y sistémica)",
    duracion_efecto: "Corta (requiere dosis cada 8-12 horas)"
  },
  informacion_cliente: [
    "¡PELIGRO!: Las mujeres embarazadas o que planeen estarlo NO deben manipular este medicamento (puede causar aborto).",
    "Administrar siempre junto con alimento.",
    "Informe si nota diarrea o dolor abdominal (efectos comunes).",
    "No usar en hembras gestantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Prevención de úlceras por AINEs",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.0035,
          dosis_min: 0.002,
          dosis_max: 0.005,
          unidad_calculo: "mg/kg (2-5 μg/kg)"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Atopia canina (Adyuvante)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.0045,
          dosis_min: 0.003,
          dosis_max: 0.006,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Prevención de úlceras por AINEs",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.005,
          unidad_calculo: "mg/kg (5 μg/kg)"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    huron: [
      {
        indicacion: "Protección gástrica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.003,
          dosis_min: 0.001,
          dosis_max: 0.005,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación (provoca contracciones uterinas y aborto).",
      "Hipersensibilidad a prostaglandinas."
    ],
    efectos_adversos: [
      "Diarrea y cólicos abdominales.",
      "Vómitos y náuseas.",
      "Aborto.",
      "Hipotensión transitoria."
    ],
    monitoreo_recomendado: [
      "Consistencia de las heces",
      "Estado de hidratación",
      "Presencia de dolor abdominal"
    ],
    instrucciones_manejo: "Personas embarazadas deben usar guantes y evitar contacto.",
    sobredosis: {
      signos: ["Diarrea severa", "Vómitos", "Dolor abdominal"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Gentamicina", efecto: "Puede exacerbar la disfunción renal.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Análogo sintético de la PGE1 que aumenta la secreción de moco y bicarbonato y disminuye la secreción ácida gástrica.",
    farmacocinetica: "Absorción rápida. Vida media muy corta."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "200 μg", valor_concentracion: 0.2, unidad_concentracion: "mg", es_divisible: true }
  ]
};
