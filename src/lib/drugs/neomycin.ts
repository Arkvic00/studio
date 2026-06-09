import type { Drug } from '@/lib/types';

export const neomycinDrug: Drug = {
  id: "neomycin",
  meta_data: {
    nombre_generico: "Neomicina",
    nombres_comerciales: ["Neopen", "Maxitrol", "Nivemycin", "Neoiven"],
    grupo_farmacologico: "Aminoglucósido; Antibiótico bactericida",
    status_regulatorio: "POM-V, POM. Categoría C (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Aminoglucósido bactericida dependiente de concentración.",
      "Acción primaria contra bacterias Gram-negativas.",
      "Extremadamente nefrotóxico y ototóxico si se usa vía parenteral.",
      "Vía oral: No se absorbe en un tracto GI intacto; se usa para reducir la flora bacteriana.",
      "Vía tópica: Muy común en preparados para piel, ojos y oídos.",
      "Ineficaz contra bacterias anaerobias obligadas."
    ],
    usos_principales: "Manejo de la encefalopatía hepática (vía oral/rectal). Tratamiento tópico de infecciones en piel, mucosas, ojos y oídos.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Requiere dosis frecuentes (q6-12h)"
  },
  informacion_cliente: [
    "No utilizar en oídos si sospecha que el tímpano está roto.",
    "El uso oral para problemas de hígado puede causar diarrea.",
    "Asegúrese de que el animal tenga siempre agua fresca disponible.",
    "Complete el ciclo de tratamiento indicado aunque los síntomas desaparezcan."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Encefalopatía hepática (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas (reducir a q12h en estabilizados)", intervalo_horas: 8 }
      },
      {
        indicacion: "Encefalopatía hepática aguda (Enema)",
        vias: ["Rectal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar como enema de retención."
      },
      {
        indicacion: "Oftálmico / Ótico",
        vias: ["Tópica"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "gota / aplicación" },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Encefalopatía hepática / Tópico",
        vias: ["PO", "Tópica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg (Oral)"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones sistémicas (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 }
      }
    ],
    conejo: [
      {
        indicacion: "Reducción de flora intestinal",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    cobaya: [
      {
        indicacion: "Infecciones intestinales",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas/Ratones/Jerbos (En agua)",
        vias: ["PO (Agua)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2.6,
          unidad_calculo: "mg/ml en agua de bebida"
        }
      },
      {
        indicacion: "Hámsteres (En agua)",
        vias: ["PO (Agua)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/ml en agua de bebida"
        }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones intestinales",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Tímpano perforado (riesgo de ototoxicidad irreversible).",
      "Insuficiencia renal previa (uso sistémico).",
      "Ulceración gastrointestinal severa (riesgo de absorción)."
    ],
    efectos_adversos: [
      "Ototoxicidad (sordera, pérdida de equilibrio).",
      "Nefrotoxicidad (daño renal).",
      "Diarrea y malabsorción.",
      "Irritación local en el ojo."
    ],
    monitoreo_recomendado: [
      "Integridad de la membrana timpánica",
      "Función renal (Creatinina/BUN) en uso oral prolongado",
      "Estado de las heces"
    ],
    instrucciones_manejo: "Observar precauciones normales. No usar vía parenteral por toxicidad extrema.",
    sobredosis: {
      signos: ["Fallo renal agudo", "Ataxia", "Sordera"],
      tratamiento: "Cese inmediato; soporte renal intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Furosemida", efecto: "Aumenta drásticamente el riesgo de ototoxicidad y nefrotoxicidad.", severidad: "Grave" },
      { farmaco: "Digoxina / Metotrexato", efecto: "La neomicina oral puede reducir su absorción.", severidad: "Moderada" },
      { farmaco: "Vitamina K", efecto: "Puede reducir su producción intestinal.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis proteica bacteriana al unirse irreversiblemente a la subunidad ribosomal 30S.",
    farmacocinetica: "Absorción nula por vía oral o rectal en condiciones normales."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "500 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Pomada oftálmica / Gotas", concentracion_texto: "0.25% - 0.5%", valor_concentracion: 3.5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};