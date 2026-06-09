import type { Drug } from '@/lib/types';

export const ceftiofurDrug: Drug = {
  id: "ceftiofur",
  meta_data: {
    nombre_generico: "Ceftiofur",
    nombres_comerciales: ["Cefenil", "Excenel"],
    grupo_farmacologico: "Cefalosporina de 3ª generación",
    status_regulatorio: "POM-V. Categoría B (Restringido) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente único entre las cefalosporinas por su metabolismo a desfuroylceftiofur (metabolito activo).",
      "Clasificado como antibiótico de importancia crítica de alta prioridad.",
      "Reservar para sepsis aguda o infecciones graves donde otros tratamientos no son apropiados.",
      "Excelente farmacocinética en algunos reptiles: una dosis puede durar de 5 a 12 días.",
      "Requiere refrigeración tras reconstitución."
    ],
    usos_principales: "Tratamiento de sepsis aguda, infecciones graves por Gram-negativos (no Pseudomonas) e infecciones urinarias en perros. Uso en exóticos bajo susceptibilidad confirmada.",
    inicio_accion: "Rápido (parenteral)",
    duracion_efecto: "Variable (desde 24h en perros hasta >12 días en algunos reptiles)"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario para infecciones severas.",
    "La inyección puede ser dolorosa.",
    "Desechar el producto reconstituido tras 24h si se mantiene refrigerado (algunas marcas hasta 7 días).",
    "¡NUNCA dar vía oral a conejos o cobayas! Riesgo de muerte por diarrea severa.",
    "Informe si nota que el animal presenta debilidad o moretones inusuales (raro)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones urinarias susceptibles",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Sepsis / Bacteriemia",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    primates: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.65,
          dosis_min: 1.1,
          dosis_max: 2.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    erizo: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Halcón de cola roja (Gram-positivos)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 96 a 120 horas", intervalo_horas: 96 }
      },
      {
        indicacion: "Halcón de cola roja (Gram-negativos)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 36 a 45 horas", intervalo_horas: 36 }
      },
      {
        indicacion: "Águilas calvas",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 60 a 80 horas", intervalo_horas: 60 }
      },
      {
        indicacion: "Loros Amazona",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Ninfas (Cockatiels)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 horas", intervalo_horas: 4 },
        notas_tecnicas: "Requiere dosis muy frecuentes en esta especie; considerar alternativas."
      }
    ],
    reptil: [
      {
        indicacion: "Quelonios (Tortugas)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Iguanas verdes",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Dragones barbudos",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única (Eficaz por >12 días)", intervalo_horas: 288 }
      },
      {
        indicacion: "Pitón bola",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 5 días", intervalo_horas: 120 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a cefalosporinas o penicilinas.",
      "No administrar vía oral en pequeños herbívoros."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO VÍA ORAL!: Riesgo de enterotoxemia fatal.",
      "Cobaya": "¡PROHIBIDO VÍA ORAL!: Riesgo de enterotoxemia fatal."
    },
    efectos_adversos: [
      "Dolor en el sitio de inyección.",
      "Vómitos y diarrea.",
      "Anemia y trombocitopenia dosis-dependiente en perros (uso prolongado).",
      "Enterotoxemia en especies sensibles (oral)."
    ],
    monitoreo_recomendado: [
      "Función renal en pacientes de riesgo",
      "Hemograma en tratamientos prolongados en perros",
      "Signos de hipersensibilidad"
    ],
    instrucciones_manejo: "Mantener refrigerado. Estable 24h tras reconstitución (Cefenil) o 7 días (Excenel).",
    sobredosis: {
      signos: ["Trastornos hematológicos", "Gastroenteritis"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos", efecto: "Sinergia positiva; no mezclar en la misma jeringa.", severidad: "Leve" },
      { farmaco: "Furosemida / Anfotericina B", efecto: "Aumentan el riesgo de nefrotoxicidad.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bactericida tiempo-dependiente que inhibe la síntesis de la pared celular. Metabolizado a desfuroylceftiofur (activo).",
    farmacocinetica: "Eliminación renal predominante. Larga duración en reptiles por alta unión proteica o metabolismo lento."
  },
  presentaciones_comerciales: [
    { tipo: "Polvo para reconstitución", concentracion_texto: "1 g, 4 g", valor_concentracion: 1000, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Suspensión inyectable", concentracion_texto: "50 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
