import type { Drug } from '@/lib/types';

export const betamethasoneDrug: Drug = {
  id: "betamethasone",
  meta_data: {
    nombre_generico: "Betametasona",
    nombres_comerciales: ["Isaderm", "Osurnia", "Otomax", "Betnesol", "Maxidex", "Fuciderm", "Norbet"],
    grupo_farmacologico: "Glucocorticoide de larga duración",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potente actividad glucocorticoide con mínima actividad mineralocorticoide.",
      "Larga duración de acción (no apto para terapia de días alternos).",
      "0.12 mg de betametasona equivale a 1 mg de prednisolona.",
      "Antagoniza los efectos de la insulina y la hormona antidiurética (ADH).",
      "En aves, existe un alto riesgo de hepatopatía e inmunosupresión severa."
    ],
    usos_principales: "Alivio a corto plazo de condiciones inflamatorias no infecciosas.",
    inicio_accion: "Variable (rápido vía parenteral)",
    duracion_efecto: "Larga (persistente)"
  },
  informacion_cliente: [
    "No suspender repentinamente tras un uso prolongado; requiere dosis decrecientes (tapering).",
    "Usar guantes al aplicar cremas tópicas.",
    "En tratamientos óticos de larga duración (Osurnia), no limpiar el oído hasta 21 días después de la segunda dosis.",
    "Puede aumentar significativamente la sed y el apetito.",
    "En hurones estresados, vigilar signos de úlceras gástricas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Antiinflamatorio sistémico (General)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Antiinflamatorio de depósito (Inyectable)",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.04,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 3 semanas (máximo 4 inyecciones)", intervalo_horas: 504 }
      },
      {
        indicacion: "Antiinflamatorio sistémico (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.025,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Ótico (Preparados polifarmacéuticos)",
        vias: ["Tópica Ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 4,
          unidad_calculo: "gotas"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Oftálmico",
        vias: ["Tópica Ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Piel (Crema)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación fina"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Antiinflamatorio sistémico",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Antiinflamatorio de depósito",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.04,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 3 semanas", intervalo_horas: 504 }
      },
      {
        indicacion: "Oftálmico",
        vias: ["Tópica Ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      }
    ],
    huron: [
      {
        indicacion: "Antiinflamatorio sistémico",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Muy susceptibles a úlceras GI. Se recomienda el uso de protectores gástricos concurrentes, especialmente en animales estresados."
      }
    ],
    conejo: [
      {
        indicacion: "Uso sistémico (Extrema precaución)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Incluso dosis únicas pequeñas pueden causar reacciones adversas severas en esta especie."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales gestantes.",
      "Diabetes mellitus (debido al antagonismo de la insulina).",
      "Enfermedad renal (sistémico).",
      "Úlceras corneales (tópico ocular)."
    ],
    contraindicaciones_especie: {
      "Ave": "NO RECOMENDADO: Alto riesgo de inmunosupresión, hepatopatía y síndrome similar a diabetes mellitus.",
      "Conejo": "ALERTA: Extrema sensibilidad; dosis mínimas pueden ser tóxicas.",
      "Huron": "ALERTA: Alta susceptibilidad a úlceras gastrointestinales."
    },
    efectos_adversos: [
      "Efectos catabólicos: pérdida de peso, atrofia muscular y cutánea.",
      "Hiperadrenocorticismo iatrogénico (uso prolongado).",
      "Vómitos, diarrea y ulceración GI.",
      "Poliuria y polidipsia.",
      "Retraso en la cicatrización de heridas."
    ],
    monitoreo_recomendado: [
      "Niveles de glucosa en sangre",
      "Función adrenal en uso crónico",
      "Niveles de T3 y T4 (pueden disminuir)"
    ],
    instrucciones_manejo: "Usar guantes para aplicación tópica. El uso en shock suele no ser beneficioso y puede ser perjudicial.",
    sobredosis: {
      signos: ["Poliuria/Polidipsia severa", "Debilidad muscular", "Hiperglucemia"],
      tratamiento: "Soporte sintomático y retiro gradual."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs", efecto: "Riesgo aumentado de ulceración GI.", severidad: "Importante" },
      { farmaco: "Insulina", efecto: "Antagoniza el efecto hipoglucemiante.", severidad: "Importante" },
      { farmaco: "Furosemida / Anfotericina B", efecto: "Riesgo aumentado de hipopotasemia.", severidad: "Moderada" },
      { farmaco: "Fenobarbital", efecto: "Acelera el metabolismo de los corticosteroides.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Altera la transcripción del ADN, produciendo cambios en el metabolismo celular que reducen la respuesta inflamatoria.",
    farmacocinetica: "Sustancia de larga duración; no apta para regímenes de días alternos."
  },
  presentaciones_comerciales: [
    { tipo: "Tabletas", concentracion_texto: "0.25 mg", valor_concentracion: 0.25, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Inyectable", concentracion_texto: "4 mg/ml", valor_concentracion: 4, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Crema/Gel tópico", concentracion_texto: "0.1%", valor_concentracion: 0.1, unidad_concentracion: "%", es_divisible: false }
  ]
};
