import type { Drug } from '@/lib/types';

export const diphenhydramineDrug: Drug = {
  id: "diphenhydramine",
  meta_data: {
    nombre_generico: "Difenhidramina",
    nombres_comerciales: ["Benadryl", "Nytol"],
    grupo_farmacologico: "Antihistamínico H1 de primera generación; Antiemético",
    status_regulatorio: "P"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea los receptores H1 de histamina.",
      "Posee efectos antieméticos, ansiolíticos y sedantes leves.",
      "Utilizado para controlar el prurito y prevenir el mareo por movimiento.",
      "En hurones, se usa como premedicación para prevenir reacciones adversas a las vacunas.",
      "En conejos, puede ayudar a reducir las náuseas asociadas al tortícolis.",
      "La solución líquida es muy poco palatable (amarga)."
    ],
    usos_principales: "Control del prurito leve, prevención de cinetosis (mareo), manejo de reacciones alérgicas y premedicación vacunal (específicamente hurones).",
    inicio_accion: "Rápido (30-60 min)",
    duracion_efecto: "6 a 12 horas"
  },
  informacion_cliente: [
    "Puede causar somnolencia o un estado de sedación leve en su mascota.",
    "En gatos, en raras ocasiones puede causar el efecto contrario (excitación).",
    "Si se usa para viajes, administrar 30-60 minutos antes de partir.",
    "Informe si nota que su mascota tiene dificultad para orinar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Antiemesis (Mareo por movimiento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas",
          intervalo_horas: 8
        }
      },
      {
        indicacion: "Prurito / Alergias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "General (Antiemesis / Prurito)",
        vias: ["PO", "IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 1,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "La dosis oral suele ser de 2-4 mg/kg, mientras que la parenteral se mantiene en 1 mg/kg."
      }
    ],
    huron: [
      {
        indicacion: "Reacciones alérgicas",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Pre-vacunación (Prevención de reacciones)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar vía IM antes de la vacunación si ha habido reacciones previas."
      }
    ],
    conejo: [
      {
        indicacion: "Náuseas por tortícolis",
        vias: ["PO", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    cobaya: [
      {
        indicacion: "General",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Según sea necesario (prn)",
          intervalo_horas: 0
        }
      }
    ],
    roedores: [
      {
        indicacion: "Hamsters / Ratas / Ratones: General",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    primates: [
      {
        indicacion: "General",
        vias: ["PO", "IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg/día"
        },
        frecuencia: {
          texto_ui: "Dosis diaria total dividida cada 6-8 horas",
          intervalo_horas: 8
        }
      }
    ],
    ave: [
      {
        indicacion: "Rinitis alérgica / Dermatopatías alérgicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 1,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 10
        },
        notas_tecnicas: "Riesgo de hipotensión en aves; monitorear de cerca."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Retención urinaria.",
      "Glaucoma.",
      "Hipertiroidismo.",
      "Enfermedad cardiovascular severa."
    ],
    efectos_adversos: [
      "Sedación leve.",
      "Xerostomía (boca seca).",
      "Retención urinaria.",
      "Gatos: Excitación paradójica.",
      "Aves: Potencial hipotensión."
    ],
    monitoreo_recomendado: [
      "Estado de alerta",
      "Frecuencia cardíaca y presión arterial en aves",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "La presentación líquida es muy amarga; puede requerir técnicas de enmascaramiento.",
    sobredosis: {
      signos: ["Sedación profunda", "Taquicardia", "Ataxia", "Convulsiones"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Benzodiazepinas / Sedantes", efecto: "Aumento marcado del efecto depresor del SNC.", severidad: "Importante" },
      { farmaco: "Adrenalina", efecto: "Puede potenciar sus efectos.", severidad: "Moderada" },
      { farmaco: "Heparina", efecto: "Puede contrarrestar parcialmente sus efectos anticoagulantes.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores H1 de histamina. Atraviesa la barrera hematoencefálica causando sedación y efectos antieméticos centrales.",
    farmacocinetica: "Metabolismo hepático. Excreción renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "25 mg",
      valor_concentracion: 25,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Solución oral",
      concentracion_texto: "2 mg/ml",
      valor_concentracion: 2,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
