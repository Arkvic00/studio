import type { Drug } from '@/lib/types';

export const medetomidineDrug: Drug = {
  id: "medetomidine",
  meta_data: {
    nombre_generico: "Medetomidina",
    nombres_comerciales: ["Domitor", "Dorbene", "Dormilan", "Medetor", "Sedastart", "Sedator", "Sededorm"],
    grupo_farmacologico: "Agonista alfa-2 adrenérgico",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agonista alfa-2 que produce sedación dosis-dependiente, relajación muscular y analgesia.",
      "Provoca vasoconstricción periférica inicial con bradicardia compensatoria.",
      "Reduce significativamente la dosis necesaria de otros agentes anestésicos (hasta un 70%).",
      "Reversible con Atipamezol (usar 5 veces la dosis de medetomidina).",
      "En ratas, puede causar opacidad corneal transitoria (1-2 horas)."
    ],
    usos_principales: "Sedación, premedicación y analgesia perioperatoria. Inmovilización química en exóticos y peces.",
    inicio_accion: "Rápido (IV inmediato; IM 10-15 min)",
    duracion_efecto: "Sedación 1-2 horas; Analgesia ~1 hora"
  },
  informacion_cliente: [
    "Medicamento de uso estrictamente hospitalario.",
    "Su mascota puede presentar encías pálidas o azuladas momentáneamente tras la inyección.",
    "Vigilar la temperatura corporal tras el procedimiento.",
    "No usar en animales diabéticos o con enfermedades del corazón."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Premedicación / Sedación",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          dosis_min: 0.005,
          dosis_max: 0.02,
          unidad_calculo: "mg/kg (5-20 μg/kg)"
        },
        notas_tecnicas: "Usar dosis bajas en combinación con opioides. Dosis >20 μg/kg aumentan disturbios fisiológicos."
      },
      {
        indicacion: "Analgesia perioperatoria (CRI)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.003,
          dosis_min: 0.002,
          dosis_max: 0.004,
          unidad_calculo: "mg/kg/h (2-4 μg/kg/h)"
        }
      }
    ],
    gato: [
      {
        indicacion: "Premedicación / Sedación",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.0125,
          dosis_min: 0.005,
          dosis_max: 0.02,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    huron: [
      {
        indicacion: "Sedación combinada",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.09,
          dosis_min: 0.08,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg (80-100 μg/kg)"
        },
        notas_tecnicas: "Combinar con opioides y ketamina."
      }
    ],
    conejo: [
      {
        indicacion: "Sedación / Premedicación",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.175,
          dosis_min: 0.05,
          dosis_max: 0.3,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "IV: 0.05-0.1 mg/kg. IM/SC: 0.1-0.3 mg/kg. Combinar con ketamina."
      }
    ],
    roedores: [
      {
        indicacion: "Inmovilización / Premedicación",
        vias: ["IP", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.15,
          dosis_min: 0.1,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Sedación (Ver protocolos específicos)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Sedación / Anestesia ligera",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.125,
          dosis_min: 0.05,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 },
        notas_tecnicas: "Tortugas del desierto: 0.15 mg/kg IM."
      }
    ],
    peces: [
      {
        indicacion: "Anestesia (Peces óseos)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Combinar con 1-2 mg/kg de ketamina. Revertir con atipamezol."
      },
      {
        indicacion: "Tiburones y Rayas",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.07,
          dosis_min: 0.06,
          dosis_max: 0.08,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Combinar con 5 mg/kg de ketamina."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedad cardiovascular o sistémica severa.",
      "Animales geriátricos o muy debilitados.",
      "Gestación.",
      "Diabetes mellitus.",
      "Animales con riesgo de torsión o cuerpos extraños (induce vómito)."
    ],
    efectos_adversos: [
      "Bradicardia marcada y bloqueos AV.",
      "Hipertensión inicial seguida de normotensión.",
      "Vómitos (muy común tras IM).",
      "Poliuria (inhibe ADH).",
      "Hiperglucemia transitoria.",
      "Hipotermia."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca (ECG obligatorio si es posible)",
      "Saturación de oxígeno (SpO2)",
      "Temperatura corporal",
      "Profundidad de la sedación (rousable arousal)"
    ],
    instrucciones_manejo: "Respuesta de despertar súbito por ruidos o tacto; manejar con cuidado en animales agresivos. Suplementar con O2.",
    sobredosis: {
      signos: ["Bradicardia severa", "Depresión respiratoria profunda", "Hipotensión"],
      tratamiento: "Atipamezol (5 mg por cada 1 mg de medetomidina) vía IM."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminas simpaticomiméticas (Adrenalina)", efecto: "Riesgo de arritmias fatales. NO USAR.", severidad: "Grave" },
      { farmaco: "Anestésicos inhalados/IV", efecto: "Reduce las dosis necesarias hasta en un 70%.", severidad: "Importante" },
      { farmaco: "Anticolinérgicos (Atropina)", efecto: "Puede causar hipertensión severa y arritmias; no usar preventivamente.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista selectivo de los receptores alfa-2 adrenérgicos en el locus coeruleus del tronco encefálico.",
    farmacocinetica: "Metabolismo hepático y excreción renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "1 mg/ml",
      valor_concentracion: 1,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
