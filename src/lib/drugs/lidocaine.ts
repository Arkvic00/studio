import type { Drug } from '@/lib/types';

export const lidocaineDrug: Drug = {
  id: "lidocaine",
  meta_data: {
    nombre_generico: "Lidocaína (Lignocaína)",
    nombres_comerciales: ["EMLA", "Intubeaze", "Lignol", "Locaine", "Locovetic", "Lidoderm"],
    grupo_farmacologico: "Anestésico local; Antiarrítmico Clase 1b",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueo reversible de los canales de sodio, impidiendo la conducción nerviosa.",
      "Acción antiarrítmica clase 1b (acorta el periodo refractario ventricular).",
      "Inicio de acción muy rápido; duración intermedia.",
      "La adición de adrenalina prolonga su efecto pero está contraindicada en ciertos sitios y especies.",
      "¡EXTREMA SENSIBILIDAD EN GATOS!: Calcular dosis con precisión quirúrgica.",
      "El spray para humanos puede causar edema laríngeo en gatos por el propelente."
    ],
    usos_principales: "Analgesia local/regional, tratamiento de arritmias ventriculares, desensibilización laríngea y analgesia sistémica (perros).",
    inicio_accion: "Inmediato (IV/Mucosas); 5-10 min (Infiltración)",
    duracion_efecto: "60 a 90 minutos (sin adrenalina)"
  },
  informacion_cliente: [
    "Utilizado en el hospital para bloquear el dolor durante o después de procedimientos.",
    "La crema EMLA requiere ser aplicada 45-60 min antes bajo vendaje para funcionar.",
    "En gatos, el uso del spray de garganta debe ser supervisado por el riesgo de inflamación.",
    "Informe si nota temblores o convulsiones tras la administración del anestésico."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Bloqueo local / Infiltración",
        vias: ["Infiltración"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "No exceder 4 mg/kg total inyectado. 1 mg/kg = 0.05 ml/kg de solución al 2%."
      },
      {
        indicacion: "Arritmias Ventriculares",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 2,
          dosis_max: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Bolo inicial, seguido de CRI (25-100 μg/kg/min)", intervalo_horas: 0 },
        notas_tecnicas: "Administrar en bolos de 2 mg/kg hasta control o dosis máxima."
      },
      {
        indicacion: "Analgesia Sistémica (CRI)",
        vias: ["IV (Infusión)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg (Carga lenta 15 min)"
        },
        notas_tecnicas: "Seguir con infusión de 20-50 μg/kg/min. Reduce requerimientos de gases anestésicos."
      }
    ],
    gato: [
      {
        indicacion: "Arritmias Ventriculares",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "¡ALERTA!: NO usar CRI para analgesia en gatos debido a toxicidad cardiovascular severa."
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia sistémica / Procinético",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg (Bolo)"
        },
        frecuencia: { texto_ui: "Seguido de CRI 50-100 μg/kg/min", intervalo_horas: 0 },
        notas_tecnicas: "Excelente efecto procinético indirecto al aliviar el dolor visceral."
      },
      {
        indicacion: "Anestesia epidural",
        vias: ["Epidural"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          unidad_calculo: "mg/kg (0.3 ml/kg sol. 2%)"
        }
      }
    ],
    ave: [
      {
        indicacion: "Bloqueo local / Regional",
        vias: ["Infiltración"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "¡CONTRAINDICADO!: No usar preparaciones con Adrenalina en aves."
      }
    ],
    reptil: [
      {
        indicacion: "Bloqueo local",
        vias: ["Infiltración"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Anestesia Neuraxial (Dragones Barbudos)",
        vias: ["Neuraxial"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Anestesia Neuraxial (Tortugas)",
        vias: ["Neuraxial"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 4, unidad_calculo: "mg/kg" }
      }
    ],
    axolote: [
      {
        indicacion: "Anestesia local (Anfibios)",
        vias: ["Infiltración"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosis altas causan sedación profunda y depresión respiratoria severa."
      }
    ],
    peces: [
      {
        indicacion: "Anestesia local",
        vias: ["Infiltración"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "¡CUIDADO!: En peces pequeños, no exceder 1-2 mg/kg de dosis total absoluta."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Uso de Adrenalina en extremidades (cola, orejas, dedos) - riesgo de necrosis.",
      "Uso de Adrenalina vía IV.",
      "Arritmias por digitálicos (relativo).",
      "Shock cardiogénico severo."
    ],
    contraindicaciones_especie: {
      "Ave": "¡PROHIBIDA la Adrenalina!: Causa arritmias fatales.",
      "Gato": "¡ALERTA!: No usar CRI sistémica para analgesia. Riesgo de muerte por colapso cardiovascular.",
      "Peces": "No exceder 2 mg/kg total en peces pequeños."
    },
    efectos_adversos: [
      "Neurotoxicidad: temblores, convulsiones, depresión del SNC.",
      "Cardiotoxicidad: bradicardia, hipotensión, asistolia (sobredosis).",
      "Vómitos (perro).",
      "Edema laríngeo (gatos, spray con propelentes).",
      "Depresión respiratoria (anfibios)."
    ],
    monitoreo_recomendado: [
      "ECG continuo (vital)",
      "Presión arterial",
      "Frecuencia respiratoria",
      "Estado mental"
    ],
    instrucciones_manejo: "Asegurar que no haya entrada a vasos sanguíneos en infiltraciones locales. Tener diazepam a mano para convulsiones.",
    sobredosis: {
      signos: ["Convulsiones", "Bradicardia extrema", "Paro cardíaco", "Apnea"],
      tratamiento: "Soporte vital avanzado. Diazepam IV para convulsiones. Fluidoterapia y soporte de presión."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina / Propranolol", efecto: "Reducen el aclaramiento de lidocaína, aumentando el riesgo de toxicidad.", severidad: "Importante" },
      { farmaco: "Otros antiarrítmicos", efecto: "Potenciación de la depresión miocárdica.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los canales de sodio dependientes de voltaje en las membranas neuronales y miocárdicas, impidiendo la despolarización.",
    farmacocinetica: "Metabolismo hepático rápido. Vida media corta en perros (~1h)."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "1% (10 mg/ml) o 2% (20 mg/ml)", valor_concentracion: 20, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Crema EMLA", concentracion_texto: "2.5% Lidocaína + 2.5% Prilocaina", valor_concentracion: 25, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Gel tópico", concentracion_texto: "2% (Intubeaze)", valor_concentracion: 20, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
