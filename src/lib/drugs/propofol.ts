import type { Drug } from '@/lib/types';

export const propofolDrug: Drug = {
  id: "propofol",
  meta_data: {
    nombre_generico: "Propofol",
    nombres_comerciales: ["Rapinovet", "Norofol", "PropoFlo"],
    grupo_farmacologico: "Anestésico inyectable (GABAérgico)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anestésico de acción ultra-corta con recuperación rápida.",
      "No posee efectos analgésicos; debe combinarse con opioides.",
      "Causa depresión respiratoria y apnea si se inyecta rápido.",
      "La versión con preservativo (alcohol bencílico) dura 28 días tras apertura pero NO sirve para CRI.",
      "En gatos, el uso repetido (días seguidos) causa anemia por cuerpos de Heinz."
    ],
    usos_principales: "Inducción anestésica y mantenimiento mediante bolos o infusión continua.",
    inicio_accion: "Inmediato (IV)",
    duracion_efecto: "Muy corta (5-10 min)"
  },
  informacion_cliente: [
    "Anestésico de uso hospitalario exclusivo.",
    "El animal despierta muy rápido y con la 'mente clara'.",
    "Riesgo de apnea momentánea al dormir al animal."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Inducción (Premedicado)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 1,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar lentamente en 30-60 segundos. Si no está premedicado: 6-7 mg/kg."
      },
      {
        indicacion: "Infusión Continua (CRI)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.1,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg/min"
        }
      }
    ],
    gato: [
      {
        indicacion: "Inducción (Premedicado)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Sin premedicación: 8 mg/kg. Recuperación más lenta en gatos que en perros."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Pacientes con hipovolemia severa o shock.",
      "Fallo hepático severo (metabolismo lento).",
      "Gatos: No usar para CRI prolongado."
    ],
    efectos_adversos: [
      "Apnea post-inducción (común).",
      "Hipotensión severa por vasodilatación.",
      "Bradicardia.",
      "Dolor en el sitio de inyección.",
      "Anemia por cuerpos de Heinz (gatos, uso repetido)."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria y EtCO2 (vital)",
      "Saturación de oxígeno (SpO2)",
      "Presión arterial",
      "Profundidad anestésica"
    ],
    instrucciones_manejo: "Agitar bien la emulsión lipídica. No mezclar con otros fluidos antes de inyectar.",
    sobredosis: {
      signos: ["Paro respiratorio", "Hipotensión profunda", "Colapso"],
      tratamiento: "Intubación inmediata y ventilación manual con O2 al 100%. Fluidos IV."
    },
    interacciones_farmacologicas: [
      { farmaco: "Sedantes / Opioides", efecto: "Reducen drásticamente la dosis necesaria de propofol.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Modula la actividad inhibidora del GABA en el receptor GABAA, provocando pérdida de consciencia.",
    farmacocinetica: "Distribución ultra-rápida. Metabolismo hepático y extra-hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Emulsión inyectable", concentracion_texto: "10 mg/ml (1%)", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};