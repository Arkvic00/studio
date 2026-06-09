import type { Drug } from '@/lib/types';

export const prednisoloneDrug: Drug = {
  id: "prednisolone",
  meta_data: {
    nombre_generico: "Prednisolona",
    nombres_comerciales: ["Prednicare", "Prednidale", "Pred-forte", "PLT"],
    grupo_farmacologico: "Glucocorticoide",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Glucocorticoide de duración intermedia apto para terapia de días alternos.",
      "4 mg equivalen a 5 mg de metilprednisolona.",
      "Inhibe la inflamación y suprime la respuesta inmune dosis-dependiente.",
      "Antagonista de la hormona antidiurética (ADH) en perros.",
      "Requiere una retirada gradual (tapering) obligatoria tras uso crónico."
    ],
    usos_principales: "Alergias, enfermedades inmunomediadas (IMHA), hipoadrenocorticismo, neoplasias linfoides e inflamación crónica.",
    inicio_accion: "Rápido",
    duracion_efecto: "Intermedia (12 a 36 horas)"
  },
  informacion_cliente: [
    "No suspenda el medicamento de forma repentina; siga el plan de reducción del veterinario.",
    "El animal beberá y orinará mucho más de lo normal; no restrinja el agua.",
    "Puede causar un aumento notable del hambre y cambios en el pelaje.",
    "Informe si nota vómitos con sangre o heces negras.",
    "No usar en animales con diabetes o úlceras en los ojos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Alergia / Inflamación crónica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas inicial; reducir a q48h", intervalo_horas: 12 }
      },
      {
        indicacion: "Inmunosupresión (IMHA / Pénfigo)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Hipoadrenocorticismo (Reemplazo)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.15,
          dosis_min: 0.1,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Alergia / Asma felina",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Inmunosupresión",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Los gatos requieren dosis más altas que los perros para lograr el mismo efecto inmunosupresor."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Úlceras corneales.",
      "Diabetes mellitus.",
      "Infecciones bacterianas o fúngicas no controladas.",
      "Enfermedad renal severa.",
      "Gestación."
    ],
    efectos_adversos: [
      "PU/PD (poliuria/polidipsia).",
      "Polifagia y aumento de peso.",
      "Atrofia muscular y debilidad.",
      "Hiperadrenocorticismo iatrogénico (Cushing).",
      "Vómitos, diarrea y úlceras GI.",
      "Proteinuria notable en perros."
    ],
    monitoreo_recomendado: [
      "Glucosa en sangre",
      "Función adrenal (en uso crónico)",
      "Análisis de orina (proteinuria)"
    ],
    instrucciones_manejo: "Retirar de forma gradual. No usar en shock traumático si ha pasado tiempo del evento.",
    sobredosis: {
      signos: ["Signos de Cushing agudos", "Retención de líquidos", "Hiperglucemia"],
      tratamiento: "Reducción gradual de la dosis."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs", efecto: "Riesgo extremo de ulceración GI.", severidad: "Grave" },
      { farmaco: "Insulina", efecto: "Antagonismo del efecto hipoglucemiante.", severidad: "Importante" },
      { farmaco: "Diuréticos (Furosemida)", efecto: "Riesgo de hipopotasemia severa.", severidad: "Moderada" },
      { farmaco: "Fenobarbital", efecto: "Acelera el metabolismo de la prednisolona.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Altera la expresión génica para reducir la producción de citoquinas proinflamatorias y suprimir la actividad de macrófagos y linfocitos.",
    farmacocinetica: "Metabolismo hepático a prednisona (activo) y viceversa. Excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "1 mg, 5 mg, 25 mg", valor_concentracion: 5, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oftálmica", concentracion_texto: "0.5%, 1%", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};