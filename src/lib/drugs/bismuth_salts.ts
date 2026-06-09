import type { Drug } from '@/lib/types';

export const bismuthSaltsDrug: Drug = {
  id: "bismuth_salts",
  meta_data: {
    nombre_generico: "Sales de Bismuto (Carbonato, Subnitrato, Subsalicilato, Quelato)",
    nombres_comerciales: ["Pepto-Bismol", "De-Noltab"],
    grupo_farmacologico: "Citoprotector gástrico; Antidiarreico",
    status_regulatorio: "AVM-GSL, P (Venta libre/Farmacia)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Citoprotector gástrico con actividad contra bacterias espirales (Helicobacter).",
      "Estimula la secreción de prostaglandinas y bicarbonato en la mucosa.",
      "El subsalicilato de bismuto tiene un efecto antiinflamatorio leve.",
      "Útil en diarreas agudas y como parte de la terapia contra Helicobacter.",
      "Puede teñir las heces de color gris, verde oscuro o negro."
    ],
    usos_principales: "Tratamiento de ulceración gástrica, diarrea y terapia combinada para infecciones por Helicobacter spp. Manejo sintomático de intoxicaciones orales agudas.",
    inicio_accion: "Rápido (acción local)",
    duracion_efecto: "Requiere administración frecuente (cada 4-8 horas)"
  },
  informacion_cliente: [
    "Agite bien la suspensión antes de usar.",
    "No se alarme si las heces de su mascota se vuelven oscuras o negras; es un efecto normal del medicamento.",
    "En gatos, use solo bajo estricta supervisión veterinaria.",
    "No lo use por periodos prolongados sin consultar al veterinario debido al riesgo de toxicidad."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Gastritis / Diarrea / Helicobacter",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.6,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "ml/kg (suspensión 17.5 mg/ml)"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 8 horas",
          intervalo_horas: 6
        }
      }
    ],
    gato: [
      {
        indicacion: "Gastritis / Diarrea / Helicobacter",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "ml/kg (suspensión 17.5 mg/ml)"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 8 horas (Usar con precaución)",
          intervalo_horas: 8
        },
        notas_tecnicas: "Los gatos son sensibles a los salicilatos; monitorear estrechamente si se usa subsalicilato de bismuto."
      }
    ],
    huron: [
      {
        indicacion: "Diarrea / Gastritis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 17.6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 8 horas",
          intervalo_horas: 6
        }
      }
    ],
    conejo: [
      {
        indicacion: "Manejo de diarrea / Flatulencia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.45,
          dosis_min: 0.3,
          dosis_max: 0.6,
          unidad_calculo: "ml/kg (Pepto-Bismol)"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 6 horas",
          intervalo_horas: 4
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción intestinal sospechada o confirmada.",
      "Animales inconscientes o con reflejo de tos reducido (riesgo de aspiración).",
      "Animales con convulsiones (fitting).",
      "Uso previo a cirugías intestinales (enterotomía/enterectomía).",
      "Fallo renal (especialmente para quelatos de bismuto)."
    ],
    contraindicaciones_especie: {
      "Gato": "PRECAUCIÓN: Contiene salicilatos. Riesgo de toxicidad si se usa a dosis altas o por tiempo prolongado."
    },
    efectos_adversos: [
      "Coloración oscura de las heces (gris/verde/negro).",
      "Náuseas y vómitos (reportado en humanos).",
      "Neurotoxicidad (solo en uso crónico por absorción sistémica)."
    ],
    monitoreo_recomendado: [
      "Frecuencia y consistencia de las heces",
      "Función renal en tratamientos prolongados"
    ],
    instrucciones_manejo: "Observar precauciones normales. El bismuto puede interferir con radiografías abdominales al ser radiopaco.",
    sobredosis: {
      signos: ["Neurotoxicidad", "Vómitos severos", "Acidosis (si es subsalicilato)"],
      tratamiento: "Soporte sintomático y cese inmediato del fármaco."
    },
    interacciones_farmacologicas: [
      { farmaco: "Tetraciclinas", efecto: "El bismuto reduce significativamente su absorción oral.", severidad: "Importante" },
      { farmaco: "Antídotos orales específicos", efecto: "Puede reducir su eficacia en casos de intoxicación.", severidad: "Moderada" },
      { farmaco: "Antagonistas H2", efecto: "Uso sinérgico común para úlceras gástricas.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Forma una capa protectora sobre el tejido ulcerado, estimula prostaglandinas y tiene efectos tóxicos directos sobre Helicobacter pylori.",
    farmacocinetica: "Acción principalmente local. El bismuto absorbido sistémicamente se excreta vía renal y biliar."
  },
  presentaciones_comerciales: [
    {
      tipo: "Suspensión oral",
      concentracion_texto: "17.5 mg/ml (1.75%)",
      valor_concentracion: 17.5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Tabletas",
      concentracion_texto: "120 mg bismuto / 240 mg calcio",
      valor_concentracion: 120,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
