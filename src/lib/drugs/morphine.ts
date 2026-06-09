import type { Drug } from '@/lib/types';

export const morphineDrug: Drug = {
  id: "morphine",
  meta_data: {
    nombre_generico: "Morfina",
    nombres_comerciales: ["Morphine*", "Oramorph*"],
    grupo_farmacologico: "Opioide agonista mu (OP3) puro",
    status_regulatorio: "POM CD SCHEDULE 2 (Estupefaciente)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Opioide de referencia para el dolor moderado a severo.",
      "Causa liberación de histamina si se administra IV rápido (diluir y dar lento).",
      "Comúnmente induce vómito en animales que no tienen dolor (pre-anestesia).",
      "Provoca miosis en perros y midriasis en gatos/caballos.",
      "Excelente para analgesia epidural (hasta 24h de efecto).",
      "Marcada variación entre especies (especialmente en reptiles y peces)."
    ],
    usos_principales: "Manejo del dolor agudo severo perioperatorio, sedación (en combinación) y analgesia epidural.",
    inicio_accion: "Rápido (IV inmediato; IM 15-30 min)",
    duracion_efecto: "Corta (2-4 horas en perros/gatos; 24h epidural)"
  },
  informacion_cliente: [
    "Medicamento sujeto a estricto control legal; uso hospitalario.",
    "Puede causar somnolencia, babeo o vómitos poco después de la inyección.",
    "El veterinario vigilará la respiración del animal constantemente.",
    "Informe si nota que el animal parece muy inquieto o respira muy lento tras la cirugía."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Analgesia / Premedicación",
        vias: ["IM", "SC", "IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.1,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 2 a 4 horas", intervalo_horas: 2 }
      },
      {
        indicacion: "Analgesia Sistémica (CRI)",
        vias: ["IV (Infusión)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.175,
          dosis_min: 0.15,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg/h"
        }
      },
      {
        indicacion: "Analgesia Epidural (Sin conservantes)",
        vias: ["Epidural"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.15,
          dosis_min: 0.1,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Diluir con salino (0.26 ml/kg). Latencia 30-60 min; Duración 18-24 horas."
      }
    ],
    gato: [
      {
        indicacion: "Analgesia / Premedicación",
        vias: ["IM", "SC", "IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.1,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 3 a 4 horas", intervalo_horas: 4 }
      }
    ],
    huron: [
      {
        indicacion: "Analgesia",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.75,
          dosis_min: 0.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 2 a 6 horas", intervalo_horas: 4 }
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia / Mantenimiento (CRI)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.1,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg/h"
        }
      },
      {
        indicacion: "Analgesia (Bolo)",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.25, dosis_min: 0.5, dosis_max: 2, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 2 a 4 horas", intervalo_horas: 3 }
      }
    ],
    primates: [
      {
        indicacion: "Analgesia",
        vias: ["PO", "SC", "IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.25, dosis_min: 0.5, dosis_max: 2, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 4 horas", intervalo_horas: 4 }
      }
    ],
    reptil: [
      {
        indicacion: "Analgesia (Rango general)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 3, dosis_min: 1, dosis_max: 5, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Dosis altas pueden causar depresión respiratoria severa. Iniciar en el rango bajo."
      },
      {
        indicacion: "Dragón Barbudo (Regional)",
        vias: ["Inyección Neuraxial"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.5, unidad_calculo: "mg/kg" }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Analgesia",
        vias: ["SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 40, dosis_min: 38, dosis_max: 42, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Anfibios: Anestesia por Inmersión",
        vias: ["Inmersión"],
        math: { tipo_calculo: "fija", dosis_recomendada: 5, unidad_calculo: "mg/100 ml (con alfaxalona)" }
      }
    ],
    peces: [
      {
        indicacion: "Carpas Koi: Analgesia",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 5, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Goldfish: Analgesia",
        vias: ["Intracelómica"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 40, unidad_calculo: "mg/kg" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a los opioides.",
      "Insuficiencia respiratoria severa.",
      "Presión intracraneal elevada.",
      "Animales con riesgo de vómito (ej. glaucoma o hernia diafragmática)."
    ],
    efectos_adversos: [
      "Depresión respiratoria.",
      "Hipotensión por liberación de histamina (si es IV rápido).",
      "Vómitos y salivación.",
      "Bradicardia sinusal.",
      "Retención urinaria.",
      "Gatos: Midriasis y potencial excitación si la dosis es excesiva."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria y EtCO2",
      "Frecuencia y ritmo cardíaco (ECG)",
      "Plan de analgesia (escalas de dolor)"
    ],
    instrucciones_manejo: "Administrar IV de forma muy lenta y diluida. Almacenar bajo estricta seguridad legal.",
    sobredosis: {
      signos: ["Apnea", "Sedación profunda", "Hipotensión severa"],
      tratamiento: "Naloxona como antagonista específico. Soporte ventilatorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Depresores del SNC", efecto: "Potenciación de la sedación y depresión respiratoria.", severidad: "Importante" },
      { farmaco: "Anestésicos inhalados", efecto: "Reduce significativamente los requerimientos de dosis.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista selectivo de los receptores mu-opioides en el SNC.",
    farmacocinetica: "Metabolismo hepático. Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "10 mg/ml a 30 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Solución oral", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
