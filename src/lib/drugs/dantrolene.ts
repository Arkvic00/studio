import type { Drug } from '@/lib/types';

export const dantroleneDrug: Drug = {
  id: "dantrolene",
  meta_data: {
    nombre_generico: "Dantroleno",
    nombres_comerciales: ["Dantrium"],
    grupo_farmacologico: "Relajante muscular (bloqueador de la liberación de calcio)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Relajante muscular de acción directa sobre el músculo estriado.",
      "Desacopla el proceso de excitación-contracción impidiendo la liberación de calcio del retículo sarcoplásmico.",
      "No afecta significativamente al músculo liso vascular ni al cardiaco.",
      "Uso crítico en la prevención y tratamiento de la hipertermia maligna.",
      "La preparación inyectable es altamente irritante (pH 9.5)."
    ],
    usos_principales: "Manejo de espasmos musculares (tetania, espasmo uretral) y prevención o tratamiento de la hipertermia maligna en perros y gatos.",
    inicio_accion: "Rápido (IV); Variable (Oral)",
    duracion_efecto: "Requiere administración cada 12 horas (oral)"
  },
  informacion_cliente: [
    "Medicamento utilizado para relajar músculos en situaciones graves.",
    "Puede causar debilidad muscular generalizada o somnolencia.",
    "El uso prolongado requiere análisis de sangre para vigilar el hígado.",
    "Informe si nota que su mascota tiene dificultad para respirar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipertermia Maligna (Emergencia)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar a través de una vía venosa grande o infusión rápida para reducir riesgo de flebitis."
      },
      {
        indicacion: "Espasmo Uretral / Tétanos / Otros",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Hipertermia Maligna / Espasmos",
        vias: ["IV", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas (PO)",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedad hepática severa.",
      "Uso concurrente con bloqueadores de canales de calcio."
    ],
    efectos_adversos: [
      "Debilidad muscular generalizada (incluyendo músculos respiratorios en sobredosis).",
      "Hepatitis (asociado a uso crónico).",
      "Efusión pleural (raro).",
      "Tromboflebitis y necrosis si hay extravasación IV.",
      "Diuresis (por el manitol en la fórmula inyectable)."
    ],
    monitoreo_recomendado: [
      "Función hepática en tratamientos prolongados",
      "Esfuerzo y eficacia respiratoria",
      "Sitio de inyección IV"
    ],
    instrucciones_manejo: "Reconstituir con 60 ml de agua. La solución debe ser clara. Proteger de la luz y usar en 6 horas.",
    sobredosis: {
      signos: ["Debilidad extrema", "Fallo respiratorio", "Letargo"],
      tratamiento: "Soporte ventilatorio y sintomático inmediato."
    },
    interacciones_farmacologicas: [
      { farmaco: "Bloqueadores de canales de calcio (Verapamilo/Diltiazem)", efecto: "Combinación NO RECOMENDADA por riesgo de colapso cardiovascular.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la liberación de iones calcio desde el retículo sarcoplásmico al citoplasma en las fibras del músculo estriado.",
    farmacocinetica: "Metabolismo hepático. Excreción renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsulas",
      concentracion_texto: "25 mg, 100 mg",
      valor_concentracion: 25,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "20 mg (con 3 g de manitol)",
      valor_concentracion: 20,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
