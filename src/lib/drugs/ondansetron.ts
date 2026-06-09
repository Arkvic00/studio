import type { Drug } from '@/lib/types';

export const ondansetronDrug: Drug = {
  id: "ondansetron",
  meta_data: {
    nombre_generico: "Ondansetrón",
    nombres_comerciales: ["Zofran", "Setofilm"],
    grupo_farmacologico: "Antiemético (Antagonista de receptores 5-HT3)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antiemético potente que actúa tanto en el tracto GI como en la zona gatillo central.",
      "Especialmente eficaz para el control de vómitos inducidos por quimioterapia.",
      "Útil en vómitos causados por estímulos periféricos (irritación GI severa).",
      "La biodisponibilidad oral es baja; en gatos la vía SC es preferible para una exposición prolongada."
    ],
    usos_principales: "Manejo de náuseas y vómitos refractarios a otros fármacos (maropitant, metoclopramida).",
    inicio_accion: "Rápido",
    duracion_efecto: "12 a 24 horas (oral); requiere infusión o dosis repetidas para uso IV"
  },
  informacion_cliente: [
    "Medicamento para tratar náuseas y vómitos intensos, especialmente durante tratamientos de cáncer.",
    "Informe si nota estreñimiento severo en su mascota.",
    "En gatos, el veterinario puede preferir inyecciones debajo de la piel para asegurar que el fármaco se absorba bien."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Vómitos refractarios / Quimioterapia",
        vias: ["IV", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas (PO) o carga IV + infusión",
          intervalo_horas: 12
        },
        notas_tecnicas: "Protocolo IV: Carga de 0.5 mg/kg seguida de infusión de 0.5 mg/kg/h por 6 horas."
      }
    ],
    gato: [
      {
        indicacion: "Vómitos refractarios",
        vias: ["SC", "PO", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "La vía SC es más biodisponible en gatos que la oral."
      }
    ],
    huron: [
      {
        indicacion: "Antiemético",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción gastrointestinal mecánica."
    ],
    efectos_adversos: [
      "Estreñimiento.",
      "Dolor de cabeza (inferido de humanos).",
      "Alteraciones leves y ocasionales de enzimas hepáticas.",
      "Reacciones de hipersensibilidad (raras)."
    ],
    monitoreo_recommended: [
      "Frecuencia de las deposiciones",
      "Resolución de los vómitos",
      "Enzimas hepáticas en uso prolongado"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Estreñimiento severo", "Sedación"],
      tratamiento: "Soporte sintomático."
    },
    interactions_farmacologicas: [
      { farmaco: "Tramadol", efecto: "Ondansetrón puede reducir la efectividad analgésica del tramadol.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista selectivo y potente de los receptores 5-HT3 de serotonina, bloqueando las señales de náusea en el vago periférico y el centro del vómito central.",
    farmacocinetica: "Metabolismo hepático. Excreción renal y fecal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable",
      concentracion_texto: "2 mg/ml",
      valor_concentracion: 2,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Tableta oral",
      concentracion_texto: "4, 8 mg",
      valor_concentracion: 4,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Jarabe oral",
      concentracion_texto: "4 mg/5 ml",
      valor_concentracion: 0.8,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
