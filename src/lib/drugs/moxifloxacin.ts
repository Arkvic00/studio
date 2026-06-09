import type { Drug } from '@/lib/types';

export const moxifloxacinDrug: Drug = {
  id: "moxifloxacin",
  meta_data: {
    nombre_generico: "Moxifloxacino",
    nombres_comerciales: ["Moxivig*"],
    grupo_farmacologico: "Fluoroquinolona de 4ª generación; Antibacteriano oftálmico",
    status_regulatorio: "POM. Categoría B (Restringido) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida dependiente de concentración que inhibe la ADN girasa y la topoisomerasa IV.",
      "Fluoroquinolona de cuarta generación con espectro superior contra Gram-positivos.",
      "Eficaz contra patógenos oculares resistentes como Pseudomonas y Staphylococcus.",
      "Uso restringido a infecciones graves con susceptibilidad confirmada."
    ],
    usos_principales: "Tratamiento de infecciones bacterianas oculares graves en mamíferos, aves y reptiles.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Requiere administración cada 12 horas"
  },
  informacion_cliente: [
    "Informe si nota irritación ocular excesiva tras la aplicación.",
    "Cumplir estrictamente el ciclo de tratamiento indicado.",
    "Evite que la punta del aplicador toque el ojo o cualquier superficie."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones oculares graves",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones oculares graves",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones oculares",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones oculares",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida a las fluoroquinolonas."
    ],
    efectos_adversos: [
      "Irritación local transitoria.",
      "Hiperemia conjuntival."
    ],
    monitoreo_recomendado: [
      "Resolución de los signos inflamatorios oculares",
      "Estado de la córnea"
    ],
    instrucciones_manejo: "Observar precauciones normales para productos oftálmicos estériles.",
    sobredosis: {
      signos: ["Irritación ocular marcada"],
      tratamiento: "Lavar con abundante salino estéril."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bactericida que causa daño letal al ADN bacteriano mediante la inhibición de enzimas clave de replicación.",
    farmacocinetica: "Acción tópica local con excelente penetración en la cámara anterior."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gotas oftálmicas",
      concentracion_texto: "5 mg/ml (0.5%)",
      valor_concentracion: 5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
