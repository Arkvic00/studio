import type { Drug } from '@/lib/types';

export const prochlorperazineDrug: Drug = {
  id: "prochlorperazine",
  meta_data: {
    nombre_generico: "Proclorperazina",
    nombres_comerciales: ["Stemetil"],
    grupo_farmacologico: "Antiemético (Fenotiazina)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antagonista dopaminérgico, muscarínico y 5-HT3.",
      "Efecto antiemético potente para causas vestibulares.",
      "Menos potente para emesis de origen sistémico que maropitant.",
      "Uso común en el mareo por movimiento (cinetosis)."
    ],
    usos_principales: "Control de mareo por movimiento y vómitos asociados a enfermedad vestibular.",
    inicio_accion: "Rápido",
    duracion_efecto: "6 a 12 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota está excesivamente somnolienta o rígida.",
    "Se administra generalmente tres veces al día.",
    "Informe si el animal tiene problemas de corazón o hígado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Vómitos / Mareo",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.1,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Control oral",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Emesis vestibular",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipotensión severa.",
      "Fallo hepático o cardíaco severo.",
      "Obstrucción intestinal."
    ],
    efectos_adversos: [
      "Sedación profunda.",
      "Hipotensión.",
      "Reacciones extrapiramidales (rigidez muscular, temblores).",
      "Sequedad de mucosas."
    ],
    monitoreo_recomendado: [
      "Estado de alerta",
      "Presión arterial"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Letargo extremo", "Hipotensión", "Rigidez"],
      tratamiento: "Soporte sintomático; difenhidramina para efectos extrapiramidales."
    },
    interacciones_farmacologicas: [
      { farmaco: "Depresores del SNC", efecto: "Potenciación del efecto sedante.", severidad: "Importante" },
      { farmaco: "Adrenalina", efecto: "Puede causar hipotensión paradójica.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea receptores de dopamina, muscarínicos y de serotonina en el centro del vómito y zona gatillo.",
    farmacocinetica: "Metabolismo hepático. Excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "12.5 mg/ml", valor_concentracion: 12.5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "3 mg, 5 mg", valor_concentracion: 5, unidad_concentracion: "mg", es_divisible: true }
  ]
};