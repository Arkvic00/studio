import type { Drug } from '@/lib/types';

export const potassiumSaltsDrug: Drug = {
  id: "potassium_salts",
  meta_data: {
    nombre_generico: "Sales de Potasio (Cloruro de potasio, Gluconato de potasio)",
    nombres_comerciales: ["Kaminox", "Tumil-K", "Potassium chloride*"],
    grupo_farmacologico: "Suplemento electrolítico",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Reemplazo de potasio en estados hipopotasémicos.",
      "Anorexia prolongada y fallo renal crónico son las causas más comunes de deficiencia.",
      "Como el potasio es principalmente intracelular, los niveles séricos no siempre reflejan el efecto clínico inmediato.",
      "¡PELIGRO!: No administrar inyecciones rápidas IV (riesgo de paro cardíaco)."
    ],
    usos_principales: "Tratamiento y prevención de la hipopotasemia en perros y gatos.",
    inicio_accion: "Inmediato (IV); Lento (PO)",
    duracion_efecto: "Variable"
  },
  informacion_cliente: [
    "Medicamento para reponer los niveles de potasio.",
    "En forma oral, administrar mezclado con la comida.",
    "Informe si nota debilidad extrema o latidos cardíacos inusuales.",
    "El uso de suplementos de potasio requiere análisis de sangre frecuentes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Corrección de hipopotasemia (IV)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "mmol/kg/h (Tasa máxima)"
        },
        notas_tecnicas: "Diluir soluciones concentradas (20-60 mmol/l). No exceder 0.5 mmol/kg/h."
      },
      {
        indicacion: "Suplementación oral",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "mEq por cada 4.5 kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Hipopotasemia (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 4,
          dosis_min: 2,
          dosis_max: 6,
          unidad_calculo: "mEq/gato/día"
        },
        frecuencia: { texto_ui: "Dosis diaria total dividida q8-12h", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hiperpotasemia.",
      "Fallo renal agudo u obstructivo.",
      "Enfermedad de Addison no tratada.",
      "Deshidratación aguda."
    ],
    efectos_adversos: [
      "Hiperpotasemia (debilidad, arritmias, paro cardíaco).",
      "Malestar gastrointestinal.",
      "Sclerosis de venas periféricas en infusiones concentradas."
    ],
    monitoreo_recomendado: [
      "Potasio sérico regularmente",
      "ECG durante infusión IV rápida",
      "Función renal"
    ],
    instrucciones_manejo: "Diluir al menos 70 veces su volumen para uso IV. No mezclar con sales de sodio en la misma línea si es posible.",
    sobredosis: {
      signos: ["Arritmias", "Debilidad muscular profunda", "Colapso"],
      tratamiento: "Cese inmediato de potasio. Administrar Gluconato de Calcio IV, Dextrosa e Insulina."
    },
    interacciones_farmacologicas: [
      { farmaco: "IECAs (Enalapril) / Espironolactona", efecto: "Riesgo extremo de hiperpotasemia severa.", severidad: "Grave" },
      { farmaco: "Digoxina", efecto: "Usar con precaución; la hiperpotasemia inhibe la digoxina.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Catión intracelular principal esencial para la transmisión nerviosa, contracción muscular y función cardíaca.",
    farmacocinetica: "Excreción renal (80-90%)."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable (KCl)", concentracion_texto: "20% (2.6 mmol K+ / ml)", valor_concentracion: 200, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "2 mEq", valor_concentracion: 2, unidad_concentracion: "mEq", es_divisible: true },
    { tipo: "Líquido oral", concentracion_texto: "1 mEq/ml", valor_concentracion: 1, unidad_concentracion: "mEq/ml", es_divisible: false }
  ]
};