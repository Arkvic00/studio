import type { Drug } from '@/lib/types';

export const meloxicamDrug: Drug = {
  id: "meloxicam",
  meta_data: {
    nombre_generico: "Meloxicam",
    nombres_comerciales: ["Metacam", "Inflacam", "Loxicom", "Meloxidyl", "Meloxivet", "Rheumocam"],
    grupo_farmacologico: "AINE (Inhibidor preferencial de COX-2)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe preferencialmente la enzima COX-2, limitando la producción de prostaglandinas inflamatorias.",
      "Excelente para el alivio del dolor crónico (osteoartritis) y agudo (postoperatorio).",
      "En gatos, se requiere precaución extrema con la dosis debido a su vida media más larga.",
      "Autorizado en cobayas para dolor postoperatorio de tejidos blandos.",
      "La enfermedad hepática prolonga su metabolismo.",
      "Asegurar normotensión e hidratación antes de la administración perioperatoria."
    ],
    usos_principales: "Alivio de la inflamación y el dolor en trastornos musculoesqueléticos agudos y crónicos. Reducción del dolor postoperatorio.",
    inicio_accion: "Rápido (pico plasmático en 2-4 horas)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Agite bien la suspensión antes de usar.",
    "Puede administrarse directamente en la boca o mezclado con la comida.",
    "Informe inmediatamente si nota heces negras, vómitos con sangre o pérdida de apetito.",
    "No usar en hembras gestantes o lactantes.",
    "Asegúrese de que el animal tenga siempre acceso a agua fresca.",
    "Completar el ciclo de tratamiento indicado por el veterinario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Trastornos musculoesqueléticos / Dolor",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg (Día 1)"
        },
        frecuencia: { texto_ui: "Día 1: 0.2 mg/kg; Mantenimiento: 0.1 mg/kg q24h", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Dolor agudo / Postoperatorio (Inyectable)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg (Dosis única)"
        },
        notas_tecnicas: "Para continuar hasta 5 días, seguir con 0.05 mg/kg PO cada 24h a partir del día 2."
      },
      {
        indicacion: "Dolor Postoperatorio (Alternativa segura)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          unidad_calculo: "mg/kg (Dosis única)"
        },
        notas_tecnicas: "No se recomienda seguir con dosis orales tras esta dosis inyectable de 0.3 mg/kg."
      },
      {
        indicacion: "Dolor crónico (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg (Día 1)"
        },
        frecuencia: { texto_ui: "Día 1: 0.1 mg/kg; Mantenimiento: 0.05 mg/kg q24h", intervalo_horas: 24 },
        notas_tecnicas: "Suspender si no hay mejoría tras 14 días."
      }
    ],
    huron: [
      {
        indicacion: "Analgesia / Inflamación",
        vias: ["PO", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia / Inflamación",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.45,
          dosis_min: 0.3,
          dosis_max: 0.6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "Dosis de hasta 1.5 mg/kg son bien toleradas por 5 días en esta especie."
      }
    ],
    cobaya: [
      {
        indicacion: "Dolor postoperatorio (Tejidos blandos)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg (Día 1)"
        },
        frecuencia: { texto_ui: "Día 1: 0.2 mg/kg; Mantenimiento: 0.1 mg/kg q24h", intervalo_horas: 24 },
        notas_tecnicas: "Dosis individuales de hasta 0.5 mg/kg pueden ser necesarias."
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Analgesia",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_min: 1,
          dosis_max: 2,
          dosis_recomendada: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Ratones: Analgesia",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Aves Rapaces / Loros",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_min: 0.5,
          dosis_max: 1.5,
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Diamante Mandarín",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 horas (máx 4 días)", intervalo_horas: 12 }
      }
    ],
    reptil: [
      {
        indicacion: "Analgesia (Eficacia no siempre probada)",
        vias: ["PO", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_min: 0.1,
          dosis_max: 0.5,
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Dragón Barbudo",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.4, unidad_calculo: "mg/kg" }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Analgesia",
        vias: ["PO", "SC", "Intracelómica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Deshidratación, hipovolemia o hipotensión.",
      "Enfermedad gastrointestinal activa o sangrado.",
      "Trastornos de la coagulación.",
      "Insuficiencia renal o hepática severa.",
      "Animales menores de 6 semanas.",
      "Hembras gestantes o lactantes."
    ],
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Ulceración gastrointestinal.",
      "Nefrotoxicidad (especialmente si hay hipotensión).",
      "Fallo cardíaco (riesgo pequeño reportado en humanos)."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN)",
      "Proteínas plasmáticas",
      "Signos de sangrado GI (melena)"
    ],
    instrucciones_manejo: "Agitar bien antes de usar. Vida útil tras apertura: 6 meses (oral) o 28 días (inyectable).",
    sobredosis: {
      signos: ["Vómitos severos", "Melena", "Fallo renal agudo"],
      tratamiento: "Lavado gástrico, carbón activado y soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Corticosteroides", efecto: "Riesgo extremo de úlceras GI. Esperar 1-2 semanas entre cambios.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Aumento significativo del riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Diuréticos", efecto: "Pueden reducir la eficacia diurética y aumentar el riesgo renal.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor preferencial de la ciclooxigenasa-2 (COX-2), bloqueando la cascada de las prostaglandinas proinflamatorias.",
    farmacocinetica: "Metabolismo hepático extenso. Excreción biliar y renal. Los gatos tienen un aclaramiento más lento."
  },
  presentaciones_comerciales: [
    { tipo: "Suspensión oral (Dogs)", concentracion_texto: "1.5 mg/ml", valor_concentracion: 1.5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Suspensión oral (Cats/Exotics)", concentracion_texto: "0.5 mg/ml", valor_concentracion: 0.5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "2 mg/ml, 5 mg/ml", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "1.0 mg, 2.5 mg", valor_concentracion: 1, unidad_concentracion: "mg", es_divisible: true }
  ]
};
