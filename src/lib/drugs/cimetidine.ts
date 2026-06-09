import type { Drug } from '@/lib/types';

export const cimetidineDrug: Drug = {
  id: "cimetidine",
  meta_data: {
    nombre_generico: "Cimetidina",
    nombres_comerciales: ["Zitac", "Cimetidine*", "Tagamet*", "Dyspamet*"],
    grupo_farmacologico: "Antagonista de los receptores H2 de histamina",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Reduce la secreción de ácido gástrico inducida por la histamina.",
      "No es un antiemético; reduce el vómito solo si es secundario a acidez o ulceración.",
      "Requiere una retirada gradual (tapering) para evitar la hipersecreción ácida de rebote.",
      "Menos potente que los bloqueadores H2 modernos (como famotidina) o los IBP (omeprazol).",
      "La administración IV debe realizarse en un periodo de 30 minutos para evitar arritmias cardíacas e hipotensión."
    ],
    usos_principales: "Manejo de gastritis erosiva (idiopática, urémica o por fármacos), úlceras gástricas y duodenales, esofagitis y condiciones hipersecretoras secundarias a gastrinoma o mastocitoma.",
    inicio_accion: "Rápido (pico plasmático en 1-2 horas)",
    duracion_efecto: "Corta (requiere dosis cada 8 a 12 horas)"
  },
  informacion_cliente: [
    "Administrar según el horario indicado para mantener la protección gástrica.",
    "El tratamiento suele durar al menos 28 días (2 semanas tras la remisión de los síntomas).",
    "No suspenda el medicamento de forma repentina; requiere una reducción gradual de la dosis.",
    "Espacie la administración de este fármaco al menos 2 horas de otros medicamentos como sucralfato, antiácidos o digoxina.",
    "Informe si nota cambios en el comportamiento o debilidad."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Gastritis / Úlceras / Esofagitis",
        vias: ["PO", "IV lenta", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "Administrar IV en 30 minutos. Reducir dosis en pacientes con insuficiencia renal."
      }
    ],
    gato: [
      {
        indicacion: "Gastritis / Úlceras / Esofagitis",
        vias: ["PO", "IV lenta", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.75,
          dosis_min: 2.5,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    huron: [
      {
        indicacion: "Gastritis / Úlceras",
        vias: ["PO", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        }
      }
    ],
    conejo: [
      {
        indicacion: "Gastritis / Protección gástrica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas",
          intervalo_horas: 8
        }
      }
    ],
    roedores: [
      {
        indicacion: "Dosis general gástrica",
        vias: ["PO", "SC", "IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 8
        }
      }
    ],
    primates: [
      {
        indicacion: "Gastritis",
        vias: ["PO", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        }
      }
    ],
    erizo: [
      {
        indicacion: "Gastritis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        }
      }
    ],
    ave: [
      {
        indicacion: "Protección gástrica",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    reptil: [
      {
        indicacion: "Protección gástrica",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas reportadas.",
      "Usar con extrema precaución en pacientes con insuficiencia renal o hepática (requiere ajuste de dosis)."
    ],
    efectos_adversos: [
      "Arritmias cardíacas e hipotensión (con inyección IV rápida).",
      "Trombocitopenia (reportada en perros).",
      "Ligera hinchazón de las glándulas mamarias en hembras (transitoria).",
      "Hipersecreción gástrica de rebote al suspender bruscamente.",
      "Ginecomastia y disminución de la libido (en humanos; potencial en animales)."
    ],
    monitoreo_recomendado: [
      "Frecuencia y ritmo cardíaco durante la infusión IV",
      "Función renal (Creatinina/BUN)",
      "Recuento de plaquetas en tratamientos prolongados"
    ],
    instrucciones_manejo: "Administrar IV lentamente en un periodo de 30 minutos.",
    sobredosis: {
      signos: ["Arritmias", "Vómitos", "Letargo"],
      tratamiento: "Soporte sintomático; atropina si hay bradicardia severa."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fármacos metabolizados por CYP450 (Benzodiazepinas, Lidocaína, Metronidazol, Teofilina)", efecto: "La cimetidina inhibe su metabolismo, aumentando el riesgo de toxicidad.", severidad: "Importante" },
      { farmaco: "Beta-bloqueadores / Calcio-antagonistas", efecto: "Aumento de los niveles plasmáticos de estos fármacos.", severidad: "Importante" },
      { farmaco: "Sucralfato", efecto: "Puede reducir la absorción de la cimetidina. Espaciar 2 horas.", severidad: "Moderada" },
      { farmaco: "Digoxina / Itraconazol", efecto: "Reducción de la absorción oral por cambio de pH gástrico.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores H2 de histamina en las células parietales gástricas, bloqueando la producción de ácido clorhídrico.",
    farmacocinetica: "Rápida absorción y alta biodisponibilidad. Metabolismo hepático (inhibidor de P450) y excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tabletas", concentracion_texto: "100 mg, 200 mg, 400 mg, 800 mg", valor_concentracion: 200, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Jarabe oral", concentracion_texto: "40 mg/ml", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};