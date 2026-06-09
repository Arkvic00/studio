import type { Drug } from '@/lib/types';

export const cabergolineDrug: Drug = {
  id: "cabergoline",
  meta_data: {
    nombre_generico: "Cabergolina",
    nombres_comerciales: ["Galastop", "Kelactin"],
    grupo_farmacologico: "Inhibidor de la prolactina; Agonista dopaminérgico (D2)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibición potente y selectiva de la secreción de prolactina.",
      "Utilizado para la inducción del estro en perras.",
      "Control de la pseudogestación (embarazo psicológico) y sus problemas conductuales.",
      "Tratamiento de la galactostasis en perras lactantes.",
      "Manejo de adenomas hipofisarios en ratas.",
      "Puede inducir el aborto en perras y gatas tras el día 30 de gestación."
    ],
    usos_principales: "Tratamiento de la pseudogestación, inducción de estro, galactostasis, inducción del aborto en perras/gatas, y manejo de adenomas hipofisarios en ratas.",
    inicio_accion: "Rápido (inhibición de prolactina en horas)",
    duracion_efecto: "Prolongada"
  },
  informacion_cliente: [
    "Vigilar si el animal presenta vómitos o falta de apetito tras las primeras dosis; suele ser transitorio.",
    "Puede causar una ligera somnolencia en los primeros 2 días de tratamiento.",
    "No usar en hembras gestantes a menos que el objetivo sea interrumpir el embarazo.",
    "Informe si su mascota parece estar muy débil o si sus encías están pálidas (posible hipotensión)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Pseudogestación / Inducción de estro / Galactostasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.005,
          unidad_calculo: "mg/kg (5 μg/kg)"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 4 a 6 días",
          intervalo_horas: 24
        },
        notas_tecnicas: "El control de signos conductuales (agresividad) puede requerir hasta 2 semanas de tratamiento."
      },
      {
        indicacion: "Inducción del aborto (Días 30-42)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.015,
          unidad_calculo: "mg/kg (15 μg/kg)"
        },
        frecuencia: {
          texto_ui: "Dosis única o según protocolo",
          intervalo_horas: 0
        }
      }
    ],
    gato: [
      {
        indicacion: "Inducción del aborto (Días 30-42)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.015,
          unidad_calculo: "mg/kg (15 μg/kg)"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Adenoma hipofisario / Patología mamaria",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.03,
          dosis_min: 0.01,
          dosis_max: 0.05,
          unidad_calculo: "mg/kg (10-50 μg/kg)"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Ratas: Protocolo de pulso (Adenoma)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.6,
          unidad_calculo: "mg/kg (600 μg/kg)"
        },
        frecuencia: {
          texto_ui: "Cada 72 horas",
          intervalo_horas: 72
        }
      }
    ],
    ave: [
      {
        indicacion: "Puesta crónica de huevos / Trastornos hormonales",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.03,
          dosis_min: 0.01,
          dosis_max: 0.05,
          unidad_calculo: "mg/kg (10-50 μg/kg)"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Debe combinarse con cambios en el manejo y fotoperiodo para resultados óptimos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales gestantes (a menos que se desee el aborto).",
      "Hipotensión sistémica o estados de shock.",
      "Insuficiencia renal o hepática severa."
    ],
    efectos_adversos: [
      "Vómitos y anorexia (especialmente en las primeras 2 dosis).",
      "Somnolencia.",
      "Hipotensión transitoria.",
      "Aborto no deseado."
    ],
    monitoreo_recomendado: [
      "Estado de hidratación y apetito",
      "Presión arterial en pacientes de riesgo",
      "Resolución de signos de pseudogestación"
    ],
    instrucciones_manejo: "Administrar con una pequeña cantidad de comida si ocurren vómitos.",
    sobredosis: {
      signos: ["Vómitos severos", "Hipotensión profunda", "Colapso"],
      tratamiento: "Metoclopramida (antagonista) y soporte cardiovascular con fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Metoclopramida", efecto: "Antagoniza los efectos de la cabergolina sobre la prolactina.", severidad: "Importante" },
      { farmaco: "Hipotensores", efecto: "Potencia el riesgo de hipotensión severa.", severidad: "Importante" },
      { farmaco: "Fenotiazinas (Acepromazina)", efecto: "Pueden antagonizar los efectos dopaminérgicos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista selectivo de los receptores dopaminérgicos D2 en la pituitaria anterior, lo que provoca una inhibición directa y prolongada de la secreción de prolactina.",
    farmacocinetica: "Absorción oral rápida. Efecto prolongado debido a su lenta disociación del receptor."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución oral",
      concentracion_texto: "50 μg/ml (0.05 mg/ml)",
      valor_concentracion: 0.05,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
