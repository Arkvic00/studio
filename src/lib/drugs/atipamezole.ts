import type { Drug } from '@/lib/types';

export const atipamezoleDrug: Drug = {
  id: "atipamezole",
  meta_data: {
    nombre_generico: "Atipamezol",
    nombres_comerciales: ["Alzane", "Antisedan", "Atipam", "Revertor", "Sedastop", "Tipafar"],
    grupo_farmacologico: "Antagonista selectivo de los receptores alfa-2 adrenérgicos",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Revierte los efectos sedantes, analgésicos, cardiovasculares y respiratorios de los agonistas alfa-2 (medetomidina/dexmedetomidina).",
      "No altera el metabolismo del agonista, sino que ocupa competitivamente el receptor.",
      "La duración de acción es similar a la del agonista, por lo que la resedación es poco común.",
      "La administración IV rutinaria no se recomienda por riesgo de excitación (reservar para emergencias).",
      "En gatos, esperar 30 min tras la administración de ketamina para evitar excitación en la recuperación."
    ],
    usos_principales: "Reversión de la sedación y anestesia inducida por agonistas alfa-2. Tratamiento de la toxicidad por amitraz en perros.",
    inicio_accion: "Inmediato (IV), 5-10 min (IM)",
    duracion_efecto: "Variable (similar a la medetomidina)"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario estrictamente.",
    "El animal puede mostrarse excesivamente alerta o inquieto temporalmente tras la inyección.",
    "Se debe permitir que el animal se recupere en un lugar tranquilo y con pocos estímulos externos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Reversión de Medetomidina / Dexmedetomidina",
        vias: ["IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dosis = 5x la de Medetomidina o 10x la de Dexmedetomidina"
        },
        notas_tecnicas: "Volumen igual al volumen de Medetomidina/Dexmedetomidina si se usó la concentración de 0.5 mg/ml. Reducir a la mitad si el agonista se dio hace >1 hora."
      },
      {
        indicacion: "Toxicidad por Amitraz",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.025,
          dosis_min: 0.025,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Puede repetirse o aumentarse cada 30 min", intervalo_horas: 0.5 },
        notas_tecnicas: "Dosis inicial de 25 μg/kg. Incrementar si no hay beneficio."
      }
    ],
    gato: [
      {
        indicacion: "Reversión de Medetomidina / Dexmedetomidina",
        vias: ["IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dosis = 2.5x la de Medetomidina o 5x la de Dexmedetomidina"
        },
        notas_tecnicas: "Volumen igual a la MITAD del volumen de Medetomidina/Dexmedetomidina (0.5 mg/ml). Esperar 30 min tras usar ketamina."
      }
    ],
    huron: [
      {
        indicacion: "Reversión de sedación",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dosis = 5x medetomidina o 10x dexmedetomidina"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Reversión de sedación",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dosis = 2.5x medetomidina o 5x dexmedetomidina"
        },
        notas_tecnicas: "Volumen igual a la mitad del agonista (0.5 mg/ml)."
      }
    ],
    roedores: [
      {
        indicacion: "Reversión de sedación",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dosis = 5x medetomidina o 10x dexmedetomidina"
        }
      }
    ],
    petauro: [
      {
        indicacion: "Reversión de sedación",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dosis = 2.5x medetomidina o 5x dexmedetomidina"
        }
      }
    ],
    erizo: [
      {
        indicacion: "Reversión de sedación",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dosis = 5x medetomidina o 10x dexmedetomidina"
        }
      }
    ],
    ave: [
      {
        indicacion: "Reversión de sedación",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dosis = 2.5 a 5x la del agonista"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Reversión de sedación",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dosis = 5x medetomidina o 5-10x dexmedetomidina"
        }
      }
    ],
    axolote: [
      {
        indicacion: "Reversión de sedación (Anfibios)",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dosis = 5x medetomidina o 5-10x dexmedetomidina"
        }
      }
    ],
    peces: [
      {
        indicacion: "Reversión de sedación",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dosis = 5x la del agonista"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación (uso no recomendado por falta de estudios)."
    ],
    efectos_adversos: [
      "Sobre-alerta transitoria.",
      "Taquicardia (tras sobredosis).",
      "Vómito ocasional.",
      "Excitación (especialmente tras administración IV rápida)."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Estado de consciencia y excitación",
      "Temperatura corporal"
    ],
    instrucciones_manejo: "EVITAR CONTACTO CON LA PIEL. Usar guantes impermeables durante la administración. En caso de contacto accidental, lavar con abundante agua.",
    sobredosis: {
      signos: ["Taquicardia", "Hiperactividad extrema", "Inquietud"],
      tratamiento: "Minimizar estímulos externos y permitir recuperación tranquila."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo altamente selectivo de los receptores alfa-2 adrenérgicos presinápticos y postsinápticos.",
    farmacocinetica: "Absorción rápida tras inyección IM. El efecto máximo se alcanza a los 10-15 min."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "5 mg/ml",
      valor_concentracion: 5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};