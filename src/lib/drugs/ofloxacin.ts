import type { Drug } from '@/lib/types';

export const ofloxacinDrug: Drug = {
  id: "ofloxacin",
  meta_data: {
    nombre_generico: "Ofloxacina",
    nombres_comerciales: ["Exocin"],
    grupo_farmacologico: "Fluoroquinolona; Antibacteriano oftálmico",
    status_regulatorio: "POM. Categoría B (Restringido) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida dependiente de concentración que inhibe la ADN girasa.",
      "Uso restringido a infecciones donde otros agentes sean ineficaces.",
      "Excelente penetración corneal, superior a la ciprofloxacina.",
      "Activo contra Pseudomonas aeruginosa y Staphylococcus spp.",
      "Creciente resistencia en estafilococos y estreptococos."
    ],
    usos_principales: "Tratamiento de infecciones bacterianas oculares graves, especialmente aquellas que afectan la córnea.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Requiere aplicaciones frecuentes (q6h)"
  },
  informacion_cliente: [
    "Aplique las gotas según el horario indicado para evitar fallos en el tratamiento.",
    "Informe si nota irritación o enrojecimiento excesivo tras la aplicación.",
    "Evite que la punta del frasco toque el ojo.",
    "Completar el ciclo de tratamiento indicado."
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
          texto_ui: "Cada 6 horas (intensivo q30-120min inicial)",
          intervalo_horas: 6
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
          texto_ui: "Cada 6 horas",
          intervalo_horas: 6
        }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones oculares",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 6 horas (Carga: q15min x 4)",
          intervalo_horas: 6
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
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a las fluoroquinolonas."
    ],
    efectos_adversos: [
      "Irritación local transitoria.",
      "Ardor leve tras la aplicación."
    ],
    monitoreo_recomendado: [
      "Integridad de la superficie corneal",
      "Resolución de los signos clínicos"
    ],
    instrucciones_manejo: "Observar precauciones normales para productos oftálmicos estériles.",
    sobredosis: {
      signos: ["Irritación marcada"],
      tratamiento: "Lavar con abundante salino estéril."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interfiere con la replicación bacteriana al inhibir la ADN girasa y la topoisomerasa IV.",
    farmacocinetica: "Excelente penetración corneal local."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución oftálmica",
      concentracion_texto: "0.3% (3 mg/ml)",
      valor_concentracion: 3,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
