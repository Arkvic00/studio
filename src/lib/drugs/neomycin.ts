import type { Drug } from '@/lib/types';

export const neomycinDrug: Drug = {
  id: "neomycin",
  meta_data: {
    nombre_generico: "Neomicina",
    nombres_comerciales: ["Neopen", "Maxitrol"],
    grupo_farmacologico: "Aminoglucósido",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida Gram-negativo.",
      "Extremadamente nefrotóxico vía parenteral.",
      "Vía oral: No se absorbe, acción local.",
      "Uso tópico común en piel y ojos."
    ],
    usos_principales: "Encefalopatía hepática (oral) e infecciones tópicas.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "8-12 horas"
  },
  informacion_cliente: [
    "No usar en oídos si el tímpano está roto.",
    "El uso oral puede causar diarrea.",
    "Asegurar agua fresca disponible."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Encefalopatía hepática",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Encefalopatía hepática",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Tímpano perforado.",
      "Insuficiencia renal (uso sistémico)."
    ],
    efectos_adversos: [
      "Ototoxicidad.",
      "Nefrotoxicidad.",
      "Diarrea."
    ],
    monitoreo_recomendado: [
      "Integridad del tímpano",
      "Función renal"
    ],
    instrucciones_manejo: "Evitar uso parenteral.",
    sobredosis: {
      signos: ["Fallo renal", "Sordera"],
      tratamiento: "Cese inmediato y soporte renal."
    },
    interacciones_farmacologicas: [
      { farmaco: "Furosemida", efecto: "Aumenta ototoxicidad.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe síntesis proteica (30S).",
    farmacocinetica: "Absorción nula oral/rectal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "500 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: true }
  ]
};