import type { Drug } from '@/lib/types';

export const acidoFusidicoDrug: Drug = {
  id: "acido_fusidico",
  meta_data: {
    nombre_generico: "Ácido Fusídico",
    nombres_comerciales: ["Canaural", "Isathal", "Isaderm", "Betafuse", "Trigoderm", "Fuciderm"],
    grupo_farmacologico: "Antibacteriano tópico",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis proteica bacteriana.",
      "Eficaz contra Gram-positivos, especialmente Staphylococcus pseudintermedius.",
      "Alta capacidad de penetración en piel, córnea y cámara anterior del ojo.",
      "El vehículo de carbómero en gotas oftálmicas actúa como lubricante.",
      "A menudo formulado con corticosteroides (prednisolona/betametasona)."
    ],
    usos_principales: "Manejo tópico de infecciones estafilocócicas en conjuntiva, piel y oídos.",
    inicio_accion: "Inmediato (tópico)",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "No permita que la mascota se lama la zona tratada tras la aplicación.",
    "Evite que la punta del aplicador toque el ojo u otras superficies para evitar contaminación.",
    "Si usa preparaciones con corticoides, informe si su perra está preñada.",
    "Completar el ciclo de tratamiento indicado por el veterinario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Otitis externa (Canaural)",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "gotas por oído"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Conjuntivitis bacteriana (Isathal)",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Dermatitis localizada (Isaderm)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación sobre la zona afectada"
        },
        frecuencia: { texto_ui: "Cada 12 horas por 5 días", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones oculares / óticas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota / aplicación"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Conjuntivitis estafilocócica (Isathal)",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones cutáneas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "capa fina"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Conjuntivitis",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida.",
      "Preparaciones con corticosteroides en animales gestantes."
    ],
    efectos_adversos: [
      "Irritación local leve.",
      "Efectos sistémicos de corticosteroides si se usan preparaciones combinadas en animales muy pequeños."
    ],
    monitoreo_recomendado: [
      "Resolución de los signos clínicos",
      "Estado de la superficie corneal"
    ],
    instrucciones_manejo: "Evitar la contaminación del envase.",
    sobredosis: {
      signos: ["Irritación local marcada"],
      tratamiento: "Lavar con abundante salino estéril; suspender el tratamiento."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la síntesis de proteínas bacterianas mediante el bloqueo de la translocación del factor de elongación G.",
    farmacocinetica: "Acción tópica local con excelente penetración tisular profunda."
  },
  presentaciones_comerciales: [
    { tipo: "Gotas oftálmicas", concentracion_texto: "10 mg/g (1%)", valor_concentracion: 10, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Gel tópico / Crema", concentracion_texto: "5 mg/g (0.5%)", valor_concentracion: 5, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Suspensión ótica", concentracion_texto: "5 mg/g", valor_concentracion: 5, unidad_concentracion: "mg/g", es_divisible: false }
  ]
};
