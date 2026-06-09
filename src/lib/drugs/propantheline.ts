import type { Drug } from '@/lib/types';

export const propanthelineDrug: Drug = {
  id: "propantheline",
  meta_data: {
    nombre_generico: "Propantelina",
    nombres_comerciales: ["Pro-Banthine"],
    grupo_farmacologico: "Anticolinérgico cuaternario",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antimuscarínico que reduce el tono y la motilidad del músculo liso.",
      "No atraviesa la barrera hematoencefálica (pocos efectos en SNC).",
      "Útil en bradicardias que responden a anticolinérgicos.",
      "Manejo de la incontinencia urinaria por hiperreflexia del detrusor.",
      "Reducción de espasmos gastrointestinales."
    ],
    usos_principales: "Tratamiento de bradicardia, incontinencia por urgencia y espasmos GI.",
    inicio_accion: "Rápido",
    duracion_efecto: "6 a 12 horas"
  },
  informacion_cliente: [
    "Puede causar boca seca y pupilas grandes.",
    "Asegúrese de que el animal tenga siempre agua fresca.",
    "Informe si nota que el perro tiene dificultad para orinar o defecar.",
    "No suspenda sin consultar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Bradicardia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.375,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Incontinencia de urgencia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Incontinencia de urgencia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.375,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción intestinal o urinaria.",
      "Glaucoma.",
      "Íleo paralítico."
    ],
    efectos_adversos: [
      "Boca seca (xerostomía).",
      "Taquicardia.",
      "Midriasis y visión borrosa.",
      "Estreñimiento.",
      "Retención urinaria."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Estado de la micción",
      "Consistencia de heces"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Taquicardia severa", "Íleo", "Retención urinaria extrema"],
      tratamiento: "Soporte sintomático; fisostigmina en casos críticos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides", efecto: "Pueden aumentar la presión intraocular conjuntamente.", severidad: "Leve" },
      { farmaco: "Metoclopramida", efecto: "Propantelina antagoniza su efecto procinético.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista de receptores muscarínicos en los tejidos diana periféricos.",
    farmacocinetica: "Absorción oral incompleta."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "15 mg", valor_concentracion: 15, unidad_concentracion: "mg", es_divisible: true }
  ]
};