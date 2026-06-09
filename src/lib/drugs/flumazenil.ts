import type { Drug } from '@/lib/types';

export const flumazenilDrug: Drug = {
  id: "flumazenil",
  meta_data: {
    nombre_generico: "Flumazenilo",
    nombres_comerciales: ["Romazicon"],
    grupo_farmacologico: "Antagonista de los receptores de benzodiazepinas",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Desplaza competitivamente a las benzodiazepinas de su receptor en el SNC.",
      "Revierte los efectos sedantes y la depresión respiratoria de fármacos como el diazepam y midazolam.",
      "Inicio de acción ultra rápido (1-2 min post IV).",
      "Duración de acción corta (aprox. 1 hora); el animal puede resedarse si la benzodiazepina original es de larga duración.",
      "En aves, requiere dosificación muy precisa por riesgo de arritmias."
    ],
    usos_principales: "Reversión completa o parcial de la sedación por benzodiazepinas y manejo de sobredosis.",
    inicio_accion: "Inmediato (1-2 min post IV)",
    duracion_efecto: "Corta (< 1 hora)"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario para despertar al animal tras una sedación.",
    "El efecto puede desaparecer antes que el de la sedación original, por lo que el animal debe seguir bajo vigilancia.",
    "Informe si el animal ha estado recibiendo antidepresivos tricíclicos, ya que esto aumenta el riesgo de convulsiones con este fármaco."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Reversión de Benzodiazepinas",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.01,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Puede repetirse si reaparece la depresión respiratoria", intervalo_horas: 1 },
        notas_tecnicas: "El efecto máximo se alcanza a los 6-10 min post-inyección."
      }
    ],
    gato: [
      {
        indicacion: "Reversión de Benzodiazepinas",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.01,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    huron: [
      {
        indicacion: "Reversión de sedación",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Reversión de sedación",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.01,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Chinchillas: Reversión",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    primates: [
      {
        indicacion: "Reversión de sedación",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    erizo: [
      {
        indicacion: "Reversión de sedación",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Reversión General",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.06,
          dosis_min: 0.02,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Loros Amazona / Canarios (Intranasal)",
        vias: ["Intranasal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.15,
          dosis_min: 0.05,
          dosis_max: 0.3,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Amazonas: 0.05 mg/kg; Periquitos: 0.13 mg/kg; Canarios: 0.25-0.31 mg/kg. Cuidado con arritmias cardíacas en aves si hay sobredosis."
      }
    ],
    reptil: [
      {
        indicacion: "Reversión (General)",
        vias: ["IM", "SC", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "En Pitones Bola (0.08 mg/kg SC) puede ocurrir re-sedación tras 3 horas."
      }
    ],
    axolote: [
      {
        indicacion: "Rana dardo azul: Reversión",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Sobredosis de antidepresivos tricíclicos (riesgo de convulsiones fatales).",
      "Animales epilépticos que reciben benzodiazepinas para el control crónico."
    ],
    efectos_adversos: [
      "Convulsiones (en pacientes dependientes o con tricíclicos).",
      "Arritmias cardíacas (especialmente en aves tras sobredosis).",
      "Palpitaciones y ansiedad transitoria.",
      "Vómitos ocasionales."
    ],
    monitoreo_recomendado: [
      "Nivel de consciencia y respiración por al menos 2 horas post-reversión",
      "ECG en aves"
    ],
    instrucciones_manejo: "Administrar IV lentamente. Estar preparado para manejar convulsiones.",
    sobredosis: {
      signos: ["Convulsiones", "Arritmias"],
      tratamiento: "Soporte vital avanzado y control de arritmias/convulsiones."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antidepresivos Tricíclicos", efecto: "Riesgo extremo de convulsiones.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo puro en el sitio de unión de las benzodiazepinas en el complejo del receptor GABA-A.",
    farmacocinetica: "Distribución y metabolismo ultra-rápido. Vida media muy corta."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "0.1 mg/ml",
      valor_concentracion: 0.1,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};