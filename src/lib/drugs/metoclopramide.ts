import type { Drug } from '@/lib/types';

export const metoclopramideDrug: Drug = {
  id: "metoclopramide",
  meta_data: {
    nombre_generico: "Metoclopramida",
    nombres_comerciales: ["Emeprid", "Metomotyl", "Vomend", "Maxolon"],
    grupo_farmacologico: "Antiemético; Procinético gastrointestinal superior",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antiemético central (D2/5HT3) y procinético gastrointestinal (5HT4/ACh).",
      "Aumenta el tono del esfínter esofágico inferior y el vaciado gástrico.",
      "Menos efectivo como antiemético en gatos que en perros.",
      "No afecta significativamente la motilidad del colon o intestino distal.",
      "Útil para prevenir el íleo postoperatorio en conejos adultos."
    ],
    usos_principales: "Tratamiento del vómito, reflujo esofágico, vaciado gástrico previo a la anestesia y estasis gastrointestinal.",
    inicio_accion: "Rápido (IV inmediato; PO 30-60 min)",
    duracion_efecto: "Corta (8 a 12 horas)"
  },
  informacion_cliente: [
    "Informe si nota cambios de comportamiento (nerviosismo, inquietud o agresividad), especialmente en gatos.",
    "No usar si sospecha que su mascota ha ingerido un objeto extraño (obstrucción).",
    "La presentación inyectable debe protegerse de la luz.",
    "Puede causar sedación leve."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Vómitos / Procinético",
        vias: ["IV", "IM", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Infusión Continua (CRI)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg/día"
        }
      }
    ],
    gato: [
      {
        indicacion: "Vómitos / Reflujo",
        vias: ["IV", "IM", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Vómitos / Estasis",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Estasis gastrointestinal (Adultos)",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Ineficaz en conejos juveniles. Solo para uso procinético tras descartar obstrucción."
      }
    ],
    cobaya: [
      {
        indicacion: "Hipomotilidad GI",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Hámsteres / Jerbos: Hipomotilidad",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.2,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Vómitos / Estasis de buche",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.15,
          dosis_min: 0.3,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 12 }
      }
    ],
    reptil: [
      {
        indicacion: "Hipomotilidad (Anecdótico)",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.05,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Reportado como ineficaz en tortugas del desierto."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción gastrointestinal mecánica.",
      "Perforación gastrointestinal.",
      "Hemorragia gastrointestinal activa.",
      "Epilepsia (puede reducir umbral convulsivo).",
      "Feocromocitoma (riesgo de crisis hipertensiva)."
    ],
    efectos_adversos: [
      "Extraparamidalismo (movimientos anormales, agitación).",
      "Sedación.",
      "Gatos: Comportamiento frenético o desorientado.",
      "Reducción del flujo sanguíneo renal.",
      "Ginecomastia (raro)."
    ],
    monitoreo_recomendado: [
      "Estado mental y conducta",
      "Función renal en pacientes geriátricos",
      "Frecuencia cardíaca en pacientes con riesgo"
    ],
    instrucciones_manejo: "La inyección es sensible a la luz. Cubrir la bolsa si se usa en CRI.",
    sobredosis: {
      signos: ["Inquietud extrema", "Temblores", "Ataxia", "Agresividad"],
      tratamiento: "Cese del tratamiento; soporte sintomático; los efectos suelen revertir rápidamente."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anticolinérgicos (Atropina)", efecto: "Antagonismo del efecto procinético.", severidad: "Importante" },
      { farmaco: "Opioides / Sedantes", efecto: "Potenciación del efecto depresor del SNC.", severidad: "Importante" },
      { farmaco: "Fenotiazinas (Acepromazina)", efecto: "Aumentan el riesgo de efectos extrapiramidales.", severidad: "Moderada" },
      { farmaco: "Digoxina / Cimetidina", efecto: "Puede disminuir su absorción al acelerar el tránsito.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista de receptores D2 (central y local) y 5-HT3; agonista de 5-HT4. Sensibiliza los tejidos a la acetilcolina.",
    farmacocinetica: "Metabolismo hepático y excreción renal. Reducir dosis un 50% en insuficiencia severa."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "5 mg/ml", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Solución oral", concentracion_texto: "1 mg/ml", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "10 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true }
  ]
};
