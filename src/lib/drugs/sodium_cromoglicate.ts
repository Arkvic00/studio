import type { Drug } from '@/lib/types';

export const sodiumCromoglicateDrug: Drug = {
  id: "sodium_cromoglicate",
  meta_data: {
    nombre_generico: "Cromoglicato de Sodio",
    nombres_comerciales: ["Opticrom", "Vividrin", "Catacrom"],
    grupo_farmacologico: "Estabilizador de la membrana de mastocitos",
    status_regulatorio: "P, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Evita la degranulación de los mastocitos tras la exposición a alérgenos.",
      "Acción puramente local en el sitio de aplicación.",
      "Uso preventivo; poco efecto si el proceso alérgico ya es severo y está establecido.",
      "Requiere administración frecuente inicial."
    ],
    usos_principales: "Manejo de la conjuntivitis alérgica y rinitis alérgica en perros y gatos.",
    inicio_accion: "Rápido (local)",
    duracion_efecto: "Corta (6 horas)"
  },
  informacion_cliente: [
    "Medicamento para tratar alergias en ojos o nariz.",
    "Aplique las gotas 4 veces al día para que sea efectivo.",
    "Informe si nota irritación local inusual.",
    "Evite que la punta del envase toque el ojo o la nariz."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Conjuntivitis / Rinitis alérgica",
        vias: ["Tópica ocular", "Intranasal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "gotas"
        },
        frecuencia: {
          texto_ui: "Cada 6 horas",
          intervalo_horas: 6
        }
      }
    ],
    gato: [
      {
        indicacion: "Alergias oculares/nasales",
        vias: ["Tópica ocular", "Intranasal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "gotas"
        },
        frecuencia: {
          texto_ui: "Cada 6 horas",
          intervalo_horas: 6
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Irritación local transitoria.",
      "Estornudos tras aplicación nasal."
    ],
    monitoreo_recomendado: [
      "Resolución de signos alérgicos (picor, lagrimeo)"
    ],
    instrucciones_manejo: "Observar precauciones normales para productos estériles.",
    sobredosis: {
      signos: ["Irritación local marcada"],
      tratamiento: "Lavar con abundante salino estéril o agua limpia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los canales de calcio regulados por IgE en la membrana del mastocito, impidiendo la liberación de histamina y otros mediadores.",
    farmacocinetica: "No se absorbe sistémicamente de forma significativa."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gotas oftálmicas",
      concentracion_texto: "2% (20 mg/ml)",
      valor_concentracion: 20,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Spray nasal",
      concentracion_texto: "2% o 4%",
      valor_concentracion: 20,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};