import type { Drug } from '@/lib/types';

export const cefalexinDrug: Drug = {
  id: "cefalexin",
  meta_data: {
    nombre_generico: "Cefalexina",
    nombres_comerciales: ["Cefaseptin", "Cephacare", "Cephorum", "Ceporex", "Rilexine", "Therios", "Tsefalen"],
    grupo_farmacologico: "Cefalosporina de 1ª generación",
    status_regulatorio: "POM-V. Categoría C (Precaución) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente que inhibe la síntesis de la pared celular bacteriana.",
      "Activo contra la mayoría de Gram-positivos (excepto Enterococcus) y algunos Gram-negativos (Pasteurella, Klebsiella, E. coli).",
      "Resistente a algunas beta-lactamasas estafilocócicas.",
      "Mantener niveles por encima de la MIC es crítico; dosis omitidas comprometen la respuesta.",
      "Ineficaz contra estafilococos resistentes a la meticilina (MRSA/MRSP)."
    ],
    usos_principales: "Tratamiento de pioderma superficial, infecciones de tejidos blandos, infecciones del tracto urinario y ortopédicas.",
    inicio_accion: "Rápido tras administración oral o parenteral.",
    duracion_efecto: "Corta (requiere administración frecuente q8-q12h)."
  },
  informacion_cliente: [
    "Administrar con comida para reducir la posibilidad de vómitos o diarrea.",
    "La inyección puede resultar dolorosa temporalmente.",
    "Las gotas orales reconstituidas deben guardarse en el refrigerador y desecharse a los 10 días.",
    "¡NUNCA dar vía oral a conejos o cobayas! Puede ser mortal.",
    "Completar el ciclo de tratamiento según lo prescrito."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones de rutina (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Pioderma superficial / Infecciones graves / Ortopedia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          dosis_min: 20,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Infecciones sistémicas (Inyectable)",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Infecciones sistémicas (Inyectable)",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 22.5,
          dosis_min: 15,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones sistémicas (¡SOLO SC!)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 17.5,
          dosis_min: 15,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "¡ADVERTENCIA!: La vía oral es mortal en conejos debido a enterotoxemia fatal."
      }
    ],
    cobaya: [
      {
        indicacion: "Infecciones sistémicas (¡SOLO IM!)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "¡ADVERTENCIA!: Evitar la vía oral (riesgo de enterotoxemia fatal)."
      }
    ],
    primates: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          dosis_min: 20,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    petauro: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    erizo: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones sistémicas (Loros/Rapaces)",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 67.5,
          dosis_min: 35,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          dosis_min: 20,
          dosis_max: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a cefalosporinas o penicilinas.",
      "Administración oral en pequeños herbívoros (conejos, cobayas, etc.)."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO VÍA ORAL!: Causa enterotoxemia fatal. Usar solo SC.",
      "Cobaya": "¡PROHIBIDO VÍA ORAL!: Causa enterotoxemia fatal. Usar solo IM.",
      "Hamster": "¡PROHIBIDO VÍA ORAL!: Riesgo de enterotoxemia mortal.",
      "Chinchilla": "¡PROHIBIDO VÍA ORAL!: Riesgo de enterotoxemia mortal."
    },
    efectos_adversos: [
      "Vómitos y diarrea (especialmente si no se da con comida).",
      "Enterotoxemia fatal en herbívoros (si se da oral).",
      "Reacción dolorosa en el sitio de inyección.",
      "Hipersensibilidad cutánea (rara)."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) si se usa con otros nefrotóxicos.",
      "Estado gastrointestinal."
    ],
    instrucciones_manejo: "Refrigerar suspensión reconstituida (máx 10 días). No mezclar con aminoglucósidos en la misma jeringa.",
    sobredosis: {
      signos: ["Trastornos gastrointestinales severos", "Enterotoxemia en especies sensibles"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos / Anfotericina B / Furosemida", efecto: "Aumento del riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Antibióticos bacteriostáticos (Eritromicina, Tetraciclinas)", efecto: "Antagonismo del efecto bactericida.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a las PBPs (proteínas de unión a penicilina) de la pared bacteriana, debilitándola y causando la lisis celular. Efecto bactericida tiempo-dependiente.",
    farmacocinetica: "Excreción renal predominante (altas concentraciones en orina)."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "50 mg a 1000 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión inyectable", concentracion_texto: "180 mg/ml (18%)", valor_concentracion: 180, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Jarabe oral (reconstituido)", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};