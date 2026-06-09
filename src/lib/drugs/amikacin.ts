import type { Drug } from '@/lib/types';

export const amikacinDrug: Drug = {
  id: "amikacin",
  meta_data: {
    nombre_generico: "Amikacina",
    nombres_comerciales: ["Amikacin*", "Amikin*"],
    grupo_farmacologico: "Aminoglucósido",
    status_regulatorio: "POM. Clasificado como categoría C (Precaución) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida dependiente de concentración con marcado efecto post-antibiótico.",
      "Permite intervalos de dosificación prolongados, lo que puede reducir la toxicidad.",
      "Indicado solo tras pruebas de sensibilidad si hay resistencia a otros aminoglucósidos.",
      "Pobre penetración en SNC y fluidos oculares.",
      "La fluidoterapia concurrente es esencial para minimizar la nefrotoxicidad."
    ],
    usos_principales: "Tratamiento de bacterias Gram-negativas resistentes (incluyendo Pseudomonas), Staphylococcus aureus y Nocardia spp.",
    inicio_accion: "Rápido (tras administración parenteral)",
    duracion_efecto: "Prolongada (efecto post-antibiótico)"
  },
  informacion_cliente: [
    "Es vital mantener al animal bien hidratado durante el tratamiento.",
    "Se requieren análisis de sangre frecuentes para monitorear la función de los riñones.",
    "Las dosis intravenosas deben administrarse muy lentamente (30-60 minutos)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas (Dosis general)",
        vias: ["IV lenta", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 22.5,
          dosis_min: 15,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Administrar IV en 30-60 min. Algunos autores sugieren dosis más altas en sepsis (riesgo aumentado)."
      },
      {
        indicacion: "Galgos (Greyhounds) y Lebreles",
        vias: ["IV lenta", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Dosis menor recomendada debido a un menor volumen de distribución en esta raza."
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IV lenta", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12,
          dosis_min: 8,
          dosis_max: 16,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Nebulización",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "mg (en 10 ml de agua)"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 },
        duracion_tratamiento: "15-30 minutos"
      }
    ],
    roedores: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          dosis_min: 5,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Nebulización",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "mg (en 10 ml de agua)"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Halcón de cola roja (Red-tailed hawks)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 17.5,
          dosis_min: 15,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Precaución extrema: los aminoglucósidos son altamente nefrotóxicos en aves."
      },
      {
        indicacion: "Ninfas y Loros Amazona",
        vias: ["IM", "SC", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Nebulización",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 6,
          unidad_calculo: "mg/ml"
        },
        notas_tecnicas: "Puede combinarse con acetilcisteína."
      }
    ],
    reptil: [
      {
        indicacion: "Tortugas Gopher",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 horas", intervalo_horas: 48 }
      },
      {
        indicacion: "Serpientes Gopher",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dar 5 mg/kg una vez, luego 2.5 mg/kg cada 72 horas (mantener a 25°C). Fluidoterapia obligatoria."
      },
      {
        indicacion: "Pitón Bola (Ball Pythons)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.48,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Nebulización",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 5,
          unidad_calculo: "mg/ml"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        duracion_tratamiento: "15-30 minutos"
      }
    ],
    axolote: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas", intervalo_horas: 24 }
      }
    ],
    peces: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IM", "Intracoelómica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 72 horas", intervalo_horas: 72 },
        notas_tecnicas: "Total de 3 tratamientos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Evitar en animales con función renal reducida o deshidratación severa.",
      "Hipersensibilidad a aminoglucósidos."
    ],
    efectos_adversos: [
      "Nefrotoxicidad (daño renal).",
      "Ototoxicidad (daño auditivo y vestibular).",
      "Bloqueo neuromuscular (raro)."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina, BUN, densidad urinaria).",
      "Niveles séricos de amikacina (pico y valle).",
      "Estado de hidratación."
    ],
    instrucciones_manejo: "Administrar IV lentamente en un periodo de 30-60 minutos. No mezclar con beta-lactámicos o heparina en la misma jeringa.",
    sobredosis: {
      signos: ["Fallo renal agudo", "Ataxia", "Sordera"],
      tratamiento: "Fluidoterapia intensiva y soporte renal."
    },
    interacciones_farmacologicas: [
      { farmaco: "Furosemida / Anfotericina B", efecto: "Aumentan significativamente el riesgo de nefrotoxicidad y ototoxicidad.", severidad: "Grave" },
      { farmaco: "Beta-lactámicos (Penicilinas/Cefalosporinas)", efecto: "Sinergia positiva in vivo, pero se inactivan si se mezclan en la misma jeringa.", severidad: "Moderada" },
      { farmaco: "Bloqueadores neuromusculares", efecto: "Puede potenciar el bloqueo neuromuscular.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis proteica bacteriana al unirse a la subunidad ribosomal 30S.",
    farmacocinetica: "Pobre absorción oral. Requiere administración parenteral para niveles sistémicos."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "50 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "250 mg/ml", valor_concentracion: 250, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
