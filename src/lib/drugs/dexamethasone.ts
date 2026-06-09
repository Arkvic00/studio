import type { Drug } from '@/lib/types';

export const dexamethasoneDrug: Drug = {
  id: "dexamethasone",
  meta_data: {
    nombre_generico: "Dexametasona",
    nombres_comerciales: [
      "Aurizon", "Dexadreson", "Dexafort", "Dexa-ject", 
      "Duphacort Q", "Rapidexon", "Voren", "Maxidex", "Maxitrol"
    ],
    grupo_farmacologico: "Glucocorticoide de larga duración",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potente actividad antiinflamatoria (7.5 veces más que la prednisolona).",
      "0.15 mg de dexametasona equivalen a 1 mg de prednisolona.",
      "Larga duración de acción y mínima actividad mineralocorticoide.",
      "Ideal para terapias de dosis alta a corto plazo donde no se desea retención de agua.",
      "No apto para uso prolongado en días alternos debido a su persistencia.",
      "En aves, alto riesgo de inmunosupresión y hepatopatía."
    ],
    usos_principales: "Tratamiento de inflamación, shock (uso controversial), anafilaxia, inmunosupresión y pruebas de diagnóstico de la función adrenal.",
    inicio_accion: "Rápido (especialmente fosfatos sódicos IV)",
    duracion_efecto: "Larga (supresión adrenal hasta 32h tras dosis única)"
  },
  informacion_cliente: [
    "No suspenda el medicamento de forma repentina tras un uso prolongado; requiere reducción gradual.",
    "Puede aumentar significativamente la sed y el apetito de su mascota.",
    "No usar en hembras gestantes.",
    "Informe si nota cambios en el comportamiento, vómitos o diarrea.",
    "En conejos, incluso dosis únicas pequeñas pueden ser peligrosas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Inflamación (General)",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.08, dosis_min: 0.01, dosis_max: 0.16, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas (máx 3-5 días)", intervalo_horas: 24 }
      },
      {
        indicacion: "Inmunosupresión",
        vias: ["IV", "IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, dosis_min: 0.3, dosis_max: 5.0, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas por hasta 5 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Anafilaxia (Emergencia)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.5, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Prueba de supresión (Dosis Baja)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.0125, dosis_min: 0.01, dosis_max: 0.015, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Para diagnóstico de Hiperadrenocorticismo (HAC)."
      },
      {
        indicacion: "Oftálmico (0.1%)",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "gota" },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Inflamación / Inmunosupresión",
        vias: ["IV", "IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.1, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Prueba de supresión (Dosis alta)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.125, dosis_min: 0.1, dosis_max: 0.15, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Los gatos requieren dosis 10 veces superiores a los perros para esta prueba."
      }
    ],
    huron: [
      {
        indicacion: "Inflamación / Post-adrenalectomía",
        vias: ["SC", "IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1, dosis_min: 0.5, dosis_max: 2.0, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Muy susceptibles a úlceras GI; considerar protectores gástricos."
      }
    ],
    conejo: [
      {
        indicacion: "Antiinflamatorio (Extrema precaución)",
        vias: ["SC", "IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.4, dosis_min: 0.2, dosis_max: 0.6, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Riesgo de inmunosupresión severa y muerte tras dosis únicas pequeñas."
      }
    ],
    cobaya: [
      {
        indicacion: "Toxemia de la gestación",
        vias: ["IV", "IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.6, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Antiinflamatorio (Solo si es vital)",
        vias: ["IV", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 4, dosis_min: 2, dosis_max: 6, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "Evitar si hay sospecha de Aspergilosis. Riesgo de diabetes inducida."
      }
    ],
    reptil: [
      {
        indicacion: "Inflamación",
        vias: ["IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.5, dosis_min: 0.1, dosis_max: 4.0, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    axolote: [
      {
        indicacion: "Antiinflamatorio (Anfibios)",
        vias: ["SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    peces: [
      {
        indicacion: "Shock / Estrés crónico / Trauma",
        vias: ["IM", "Intracelómica"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, dosis_min: 1, dosis_max: 2, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 a 24 horas (o baño 10mg/L)", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación (puede inducir aborto).",
      "Enfermedad renal.",
      "Diabetes mellitus.",
      "Úlceras corneales (tópico ocular).",
      "Infecciones bacterianas o fúngicas no controladas."
    ],
    contraindicaciones_especie: {
        "Ave": "ALERTA: Alto riesgo de inmunosupresión severa y hepatopatía.",
        "Conejo": "ALERTA: Extrema sensibilidad a corticosteroides.",
        "Huron": "Riesgo elevado de ulceración GI."
    },
    efectos_adversos: [
      "PU/PD (bebe y orina mucho).",
      "Hiperglucemia.",
      "Atrofia cutánea y muscular.",
      "Retraso en cicatrización.",
      "Hepatomegalia y elevación de enzimas hepáticas.",
      "Vómitos y diarrea."
    ],
    monitoreo_recomendado: [
      "Glucosa en sangre",
      "Enzimas hepáticas",
      "Función adrenal (en uso crónico)",
      "Niveles de T4"
    ],
    instrucciones_manejo: "Evitar el uso de esteroides de larga duración en shock o trauma espinal si es posible; pueden ser perjudiciales.",
    sobredosis: {
      signos: ["Cushing iatrogénico severo", "Infecciones secundarias"],
      tratamiento: "Retirada gradual y soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs", efecto: "Riesgo extremo de ulceración GI.", severidad: "Importante" },
      { farmaco: "Insulina", efecto: "Antagonismo del efecto hipoglucemiante.", severidad: "Importante" },
      { farmaco: "Amphotericin B / Diuréticos de asa", efecto: "Riesgo de hipopotasemia severa.", severidad: "Moderada" },
      { farmaco: "Fenobarbital", efecto: "Acelera el metabolismo de la dexametasona.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Modula la expresión génica a través del receptor de glucocorticoides, inhibiendo mediadores proinflamatorios y reduciendo la respuesta inmune celular.",
    farmacocinetica: "Metabolismo hepático. Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "0.5 mg", valor_concentracion: 0.5, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Oftálmico (Maxidex)", concentracion_texto: "0.1%", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
