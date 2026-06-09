import type { Drug } from '@/lib/types';

export const amoxicilinaDrug: Drug = {
  id: "amoxicilina",
  meta_data: {
    nombre_generico: "Amoxicilina",
    nombres_comerciales: ["Amoxibactin", "Amoxycare", "Amoxypen", "Betamox", "Bimoxyl", "Clamoxyl", "Amoxinsol", "Duphamox", "Huvamox", "Rhemox", "Solamocta"],
    grupo_farmacologico: "Penicilina (Beta-lactámico)",
    status_regulatorio: "POM-V. Categoría D (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente.",
      "Activo contra Gram-positivos, algunos Gram-negativos y muchos anaerobios obligados.",
      "Inactivado por beta-lactamasas (ej: E. coli, S. aureus resistentes).",
      "La regularidad en el intervalo de dosis es crítica para mantener niveles por encima de la MIC.",
      "Excreción biliar y renal (altas concentraciones en orina)."
    ],
    usos_principales: "Infecciones sistémicas, cistitis, infecciones de piel y tejidos blandos. En hurones, parte de la 'triple terapia' para Helicobacter mustelae.",
    inicio_accion: "Rápido tras administración oral o parenteral.",
    duracion_efecto: "Corta (requiere dosis frecuentes excepto en formulaciones de depósito/LA)."
  },
  informacion_cliente: [
    "Puede administrarse con o sin comida.",
    "Refrigerar la suspensión oral tras reconstitución; desechar tras 7 días o si oscurece.",
    "Completar el ciclo de tratamiento aunque el animal parezca mejor.",
    "Informar si nota diarrea severa o erupciones en la piel."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas (Parenteral)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 7, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Infecciones sistémicas (Parenteral LA)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 15, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 48 horas", intervalo_horas: 48 }
      },
      {
        indicacion: "Infecciones sistémicas (Oral)",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 10, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Cistitis bacteriana",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 13, dosis_min: 11, dosis_max: 15, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas (Parenteral)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 7, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Infecciones sistémicas (Parenteral LA)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 15, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 48 horas", intervalo_horas: 48 }
      },
      {
        indicacion: "Infecciones sistémicas (Oral)",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 10, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Cistitis bacteriana",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 13, dosis_min: 11, dosis_max: 15, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_min: 10, dosis_max: 30, dosis_recomendada: 20, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones sistémicas (Parenteral)",
        vias: ["SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 7, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas y Ratones: Infecciones sistémicas",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_min: 100, dosis_max: 150, dosis_recomendada: 125, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    primates: [
      {
        indicacion: "Primates: Oral",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 11, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Primates: Parenteral",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 11, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Prosimios: Oral",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_min: 10, dosis_max: 20, dosis_recomendada: 15, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    petauro: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 30, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 },
        duracion_tratamiento: "14 días"
      }
    ],
    erizo: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 15, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Aves: General (Parenteral)",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_min: 150, dosis_max: 175, dosis_recomendada: 160, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8 a 12 horas (LA q24h)", intervalo_horas: 12 }
      },
      {
        indicacion: "Rapaces y Loros (Oral)",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 175, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Palomas: Oral",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_min: 100, dosis_max: 200, dosis_recomendada: 150, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Palomas: Agua de bebida",
        vias: ["PO (Agua)"],
        math: { tipo_calculo: "fija", dosis_min: 1, dosis_max: 1.5, dosis_recomendada: 1.25, unidad_calculo: "g/l" },
        frecuencia: { texto_ui: "Cada 24 horas por 3-5 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Aves acuáticas: Agua de bebida",
        vias: ["PO (Agua)"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "g/l" },
        frecuencia: { texto_ui: "Días alternos por 3-5 días", intervalo_horas: 48 }
      },
      {
        indicacion: "Aves acuáticas: En alimento blando",
        vias: ["PO (Alimento)"],
        math: { tipo_calculo: "mg_kg", dosis_min: 300, dosis_max: 500, dosis_recomendada: 400, unidad_calculo: "mg/kg" },
        duracion_tratamiento: "3-5 días"
      },
      {
        indicacion: "Paseriformes: Agua de bebida",
        vias: ["PO (Agua)"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1.5, unidad_calculo: "g/l" },
        duracion_tratamiento: "3-5 días"
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IM", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_min: 10, dosis_max: 20, dosis_recomendada: 15, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    peces: [
      {
        indicacion: "Infecciones bacterianas (En alimento)",
        vias: ["PO (Alimento)"],
        math: { tipo_calculo: "mg_kg", dosis_min: 40, dosis_max: 80, dosis_recomendada: 60, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas por 10 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Infecciones bacterianas (LA)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 12.5, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a penicilinas.",
      "No usar antibióticos orales en pacientes críticos (absorción poco fiable).",
      "No usar vía oral en conejos."
    ],
    contraindicaciones_especie: {
      "Cobaya": "¡PROHIBIDO!: No administrar por ninguna vía (riesgo de enterotoxemia fatal).",
      "Chinchilla": "¡PROHIBIDO!: No administrar por ninguna vía.",
      "Hamster": "¡PROHIBIDO!: No administrar por ninguna vía (enterotoxemia fatal).",
      "Jerbo": "¡PROHIBIDO!: No administrar por ninguna vía (enterotoxemia fatal).",
      "Degu": "¡PROHIBIDO!: No administrar por ninguna vía.",
      "Conejo": "¡ALERTA!: Prohibida la vía oral (enterotoxemia fatal). Usar solo SC.",
      "Gato": "Evitar si hay sensibilidad a penicilinas."
    },
    efectos_adversos: [
      "Náuseas y vómitos.",
      "Diarrea.",
      "Erupciones cutáneas (reacción tipo 1 mediada por IgE).",
      "Enterotoxemia fatal en herbívoros pequeños (si se da oral)."
    ],
    monitoreo_recomendado: ["Función gastrointestinal", "Signos de hipersensibilidad"],
    instrucciones_manejo: "Reconstituir la suspensión oral y refrigerar. Desechar tras 7 días.",
    sobredosis: {
      signos: ["Trastornos GI severos", "Enterotoxemia en especies sensibles"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antibióticos bacteriostáticos (Tetraciclinas, Eritromicina)", efecto: "Antagonismo potencial.", severidad: "Moderada" },
      { farmaco: "Aminoglucósidos", efecto: "Sinergia positiva in vivo, pero se inactivan si se mezclan en la misma jeringa.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a las proteínas de unión a penicilina (PBP) involucradas en la síntesis de la pared celular bacteriana, disminuyendo su fuerza y rigidez.",
    farmacocinetica: "Excreción biliar y renal elevada. Buena biodisponibilidad oral en la mayoría de especies permitidas."
  },
  presentaciones_comerciales: [
    { tipo: "Suspensión inyectable", concentracion_texto: "150 mg/ml", valor_concentracion: 150, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "40 mg, 50 mg, 200 mg, 250 mg, 500 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral reconstituida", concentracion_texto: "50 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};