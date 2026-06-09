import type { Drug } from '@/lib/types';

export const pentosanPolysulphateDrug: Drug = {
  id: "pentosan_polysulphate",
  meta_data: {
    nombre_generico: "Pentosan Polisulfato",
    nombres_comerciales: ["Cartrophen", "Osteopen"],
    grupo_farmacologico: "Condroprotector; Modificador de la enfermedad",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula la síntesis de nuevos glicosaminoglicanos (GAG) en el cartílago.",
      "Inhibe enzimas que destruyen el cartílago.",
      "Preserva el contenido de proteoglicanos y mejora el flujo sanguíneo articular.",
      "Posee propiedades similares a la heparina (anticoagulante leve).",
      "Mínimo valor en casos agudos; efecto es acumulativo y regenerativo."
    ],
    usos_principales: "Tratamiento de la osteoartritis en perros, conejos y cobayas. Manejo adyuvante de la cistitis idiopática felina.",
    inicio_accion: "Lento (mejoría tras completar ciclo de 4 dosis)",
    duracion_efecto: "Semanas a meses tras el ciclo"
  },
  informacion_cliente: [
    "Se administra mediante inyecciones debajo de la piel una vez por semana.",
    "El protocolo estándar son 4 inyecciones seguidas.",
    "Informe si nota sangrado inusual o moretones en su mascota.",
    "No es un calmante de efecto inmediato, sino que ayuda a reparar la articulación."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Osteoartritis",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Semanal por 4 semanas", intervalo_horas: 168 },
        notas_tecnicas: "Equivalente a 0.3 ml por cada 10 kg. Usar jeringa de insulina para precisión."
      },
      {
        indicacion: "Uso Intra-articular",
        vias: ["Intra-articular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg por articulación"
        }
      }
    ],
    gato: [
      {
        indicacion: "Cistitis Idiopática Felina (FLUTD)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Semanal por 4 semanas", intervalo_horas: 168 }
      }
    ],
    conejo: [
      {
        indicacion: "Osteoartritis",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 5-7 días por 4 dosis", intervalo_horas: 168 }
      }
    ],
    cobaya: [
      {
        indicacion: "Osteoartritis / Cistitis idiopática",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 5-7 días por 4 dosis", intervalo_horas: 168 }
      }
    ],
    reptil: [
      {
        indicacion: "Enfermedad articular",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Semanal por 4 dosis", intervalo_horas: 168 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Artritis séptica.",
      "Insuficiencia renal o hepática severa.",
      "Trastornos de la coagulación o hemorragias activas.",
      "Tumores (por riesgo de hemorragia paraneoplásica)."
    ],
    efectos_adversos: [
      "Dolor leve en el sitio de inyección.",
      "Vómitos (raro).",
      "Sangrado espontáneo (en animales predispuestos).",
      "Hipotensión transitoria."
    ],
    monitoreo_recomendado: [
      "Signos de sangrado",
      "Hematocrito en tratamientos repetidos"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Hemorragias", "Hematomas extensos"],
      tratamiento: "Soporte sintomático; considerar agentes procoagulantes si es necesario."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides / Aspirina", efecto: "Aumentan el riesgo de hemorragia.", severidad: "Importante" },
      { farmaco: "Heparina / Anticoagulantes", efecto: "Potenciación del efecto anticoagulante.", severidad: "Importante" },
      { farmaco: "AINEs modernos (COX-2)", efecto: "Riesgo de sangrado probablemente bajo en animales sanos.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Polímero de pentosa que modula citoquinas y estimula la síntesis de GAGs y ácido hialurónico.",
    farmacocinetica: "Absorción SC rápida. Persiste en el cartílago articular."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
