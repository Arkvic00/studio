import type { Drug } from '@/lib/types';

export const ondansetronDrug: Drug = {
  id: "ondansetron",
  meta_data: {
    nombre_generico: "Ondansetrón",
    nombres_comerciales: ["Zofran"],
    grupo_farmacologico: "Antagonista 5-HT3",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antiemético potente central y periférico.",
      "Eficaz en vómitos por quimioterapia.",
      "No posee efectos procinéticos."
    ],
    usos_principales: "Manejo de náuseas y vómitos refractarios.",
    inicio_accion: "Rápido",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Para náuseas intensas.",
    "Informe si nota estreñimiento.",
    "Vía SC preferible en gatos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Vómitos refractarios",
        vias: ["IV", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Vómitos refractarios",
        vias: ["SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Obstrucción GI."],
    efectos_adversos: ["Estreñimiento.", "Sedación."],
    monitoreo_recomendado: ["Resolución de náuseas"],
    instrucciones_manejo: "Higiene normal.",
    sobredosis: {
      signos: ["Sedación"],
      tratamiento: "Soporte."
    },
    interacciones_farmacologicas: [
      { farmaco: "Tramadol", efecto: "Reduce su efectividad.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista potente de receptores 5-HT3.",
    farmacocinetica: "Metabolismo hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};