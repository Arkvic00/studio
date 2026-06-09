import type { Drug } from '@/lib/types';

export const penicillinGDrug: Drug = {
  id: "penicillin_g",
  meta_data: {
    nombre_generico: "Penicilina G (Bencilpenicilina)",
    nombres_comerciales: ["Crystapen", "Depocillin", "Neopen", "Norocillin", "Duphapen"],
    grupo_farmacologico: "Penicilina (Beta-lactámico)",
    status_regulatorio: "POM-V. Categoría D (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente que inhibe la síntesis de la pared celular.",
      "Espectro reducido: Gram-positivos aeróbicos, anaerobios obligados (Clostridium) y algunas espiroquetas.",
      "Susceptible a la degradación por ácidos gástricos (solo uso parenteral).",
      "Susceptible a beta-lactamasas (Staphylococcus resistentes).",
      "La sal sódica es altamente soluble (IV); la procaína es de liberación lenta (SC/IM)."
    ],
    usos_principales: "Tratamiento de infecciones sistémicas por organismos sensibles, sífilis del conejo y leptospirosis.",
    inicio_accion: "Inmediato (Sódica IV); 1-3h (Procaína SC)",
    duracion_efecto: "4-6h (Sódica); 24h (Procaína); 72h (Benzatínica)"
  },
  informacion_cliente: [
    "¡PELIGRO!: Nunca administrar por vía oral a conejos o cobayas; causa una diarrea mortal.",
    "Informe si nota erupciones en la piel, hinchazón de cara o dificultad respiratoria.",
    "La inyección puede ser algo dolorosa.",
    "La Penicilina G Sódica debe refrigerarse tras su preparación y dura 24h-7 días."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas (Sódica)",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 15,
          dosis_max: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 a 6 horas", intervalo_horas: 6 }
      },
      {
        indicacion: "Infecciones sistémicas (Procaína)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 24 horas según sal", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Sífilis del conejo (Treponema cuniculi)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Una vez cada 7 días por 3 dosis", intervalo_horas: 168 },
        notas_tecnicas: "¡NUNCA VÍA ORAL! Riesgo de enterotoxemia fatal."
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Infecciones sistémicas (No procaína)",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 22,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    primates: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_min: 20,
          dosis_max: 40,
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a penicilinas.",
      "Vía oral en herbívoros pequeños (Mortal).",
      "Animales con insuficiencia renal severa (requiere ajuste)."
    ],
    contraindicaciones_especie: {
      "Cobaya": "¡PROHIBIDO!: Enterotoxemia fatal por cualquier vía.",
      "Hamster": "¡PROHIBIDO!: Enterotoxemia fatal.",
      "Jerbo": "¡PROHIBIDO!: Enterotoxemia fatal.",
      "Chinchilla": "¡PROHIBIDO!: Enterotoxemia fatal."
    },
    efectos_adversos: [
      "Reacciones anafilácticas (tipo I).",
      "Enterotoxemia fatal en herbívoros (oral).",
      "Dolor e inflamación local (inyección IM).",
      "Anemia hemolítica inmunomediada (uso prolongado)."
    ],
    monitoreo_recomendado: [
      "Signos de hipersensibilidad inmediata post-inyección",
      "Estado gastrointestinal en conejos"
    ],
    instrucciones_manejo: "Sódica: 24h estable a temp. ambiente, 7 días refrigerada tras reconstitución.",
    sobredosis: {
      signos: ["Neurotoxicidad (convulsiones) en dosis masivas IV"],
      tratamiento: "Soporte sintomático; diazepam para convulsiones."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos", efecto: "Sinergia positiva in vivo; no mezclar físicamente.", severidad: "Leve" },
      { farmaco: "Antibióticos bacteriostáticos", efecto: "Antagonismo del efecto bactericida.", severidad: "Moderada" },
      { farmaco: "Sulfonamidas", efecto: "La procaína puede antagonizar su acción.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bactericida tiempo-dependiente que bloquea la formación de los enlaces cruzados de peptidoglicano en la pared celular.",
    farmacocinetica: "Excreción renal rápida por secreción tubular."
  },
  presentaciones_comerciales: [
    { tipo: "Vial inyectable (Sódica)", concentracion_texto: "3 g (Polvo)", valor_concentracion: 3000, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Suspensión inyectable (Procaína)", concentracion_texto: "300 mg/ml", valor_concentracion: 300, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Larga Acción (Proc + Benz)", concentracion_texto: "15% + 11.5%", valor_concentracion: 265, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
