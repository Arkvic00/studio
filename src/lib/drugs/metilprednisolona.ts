import type { Drug } from '@/lib/types';

export const metilprednisolonaDrug: Drug = {
  id: "metilprednisolona",
  meta_data: {
    nombre_generico: "Metilprednisolona",
    nombres_comerciales: ["Depo-Medrone", "Medrone", "Solu-Medrone"],
    grupo_farmacologico: "Glucocorticoide",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potente agente antiinflamatorio e inmunosupresor.",
      "0.8 mg equivalen a 1 mg de prednisolona (es un 20% más potente).",
      "La forma oral es adecuada para terapia de días alternos.",
      "Uso controversial en shock y trauma espinal agudo (beneficio declina rápido tras inicio).",
      "Requiere una retirada gradual (tapering) para prevenir crisis adrenales."
    ],
    usos_principales: "Tratamiento de la inflamación, asma felina, alergia a pulgas, enfermedades inmunomediadas y crisis de Addison.",
    inicio_accion: "Rápido (especialmente Solu-Medrone IV)",
    duracion_efecto: "Intermedia (Oral); Larga (Depot)"
  },
  informacion_cliente: [
    "No suspenda el medicamento repentinamente tras un uso prolongado.",
    "Puede causar un aumento notable de la sed y el hambre.",
    "Informe si nota vómitos, diarrea o cambios en el comportamiento.",
    "No usar en hembras gestantes.",
    "La inyección 'Depot' puede durar hasta 3 semanas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Inflamación (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.2,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Inflamación (Depósito)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 1 a 3 semanas", intervalo_horas: 336 }
      },
      {
        indicacion: "Inmunosupresión",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12h reduciendo a q48h", intervalo_horas: 12 }
      },
      {
        indicacion: "Crisis de Addison (Aguda)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas hasta inicio de vía oral", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Asma felina (Depósito)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 1 a 3 semanas", intervalo_horas: 336 }
      },
      {
        indicacion: "Inflamación / Alergia (Depósito)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 2 meses", intervalo_horas: 1440 }
      },
      {
        indicacion: "Inflamación (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas reduciendo a 2-5 mg/gato q48h", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación.",
      "Diabetes mellitus.",
      "Enfermedad renal severa.",
      "Infecciones fúngicas sistémicas."
    ],
    efectos_adversos: [
      "PU/PD (bebe y orina mucho).",
      "Atrofia muscular y cutánea.",
      "Hiperadrenocorticismo iatrogénico (Cushing).",
      "Vómitos y diarrea.",
      "Retraso en la cicatrización.",
      "Inmunosupresión."
    ],
    monitoreo_recomendado: [
      "Glucosa en sangre",
      "Función adrenal en tratamientos crónicos",
      "Signos de infección secundaria"
    ],
    instrucciones_manejo: "Tapering obligatorio. No usar en shock si han pasado más de unas pocas horas.",
    sobredosis: {
      signos: ["Signos de Cushing agudos", "Poliuria severa"],
      tratamiento: "Retirada gradual y soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs", efecto: "Riesgo extremo de ulceración GI.", severidad: "Grave" },
      { farmaco: "Insulina", efecto: "Reduce la eficacia de la insulina.", severidad: "Importante" },
      { farmaco: "Diuréticos (Furosemida)", efecto: "Riesgo de hipopotasemia.", severidad: "Moderada" },
      { farmaco: "Itraconazol", efecto: "Reduce el metabolismo de la metilprednisolona, aumentando su efecto.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Modula la transcripción del ADN resultando en efectos antiinflamatorios, inmunosupresores y antifibróticos potentes.",
    farmacocinetica: "Metabolismo hepático. Excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable Depot", concentracion_texto: "40 mg/ml (Depo-Medrone)", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Vial inyectable IV", concentracion_texto: "125 mg, 500 mg (Solu-Medrone)", valor_concentracion: 125, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "2 mg, 4 mg (Medrone)", valor_concentracion: 2, unidad_concentracion: "mg", es_divisible: true }
  ]
};
