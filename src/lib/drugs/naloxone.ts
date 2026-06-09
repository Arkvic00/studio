import type { Drug } from '@/lib/types';

export const naloxoneDrug: Drug = {
  id: "naloxone",
  meta_data: {
    nombre_generico: "Naloxona",
    nombres_comerciales: ["Narcan", "Naloxone*"],
    grupo_farmacologico: "Antagonista opioide puro",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antagonista competitivo de todos los receptores opioides.",
      "Revierte los efectos de los agonistas opioides (sedación, apnea).",
      "Inicio de acción casi instantáneo tras administración IV.",
      "Duración de acción corta (30–60 min); riesgo de resedación.",
      "No tiene actividad agonista intrínseca."
    ],
    usos_principales: "Reversión de la sobredosis de opioides y manejo de la depresión respiratoria severa inducida por estos.",
    inicio_accion: "1-2 min (IV); 5 min (IM)",
    duracion_efecto: "30 a 60 minutos"
  },
  informacion_cliente: [
    "Medicamento de emergencia utilizado para despertar al animal tras una sobredosis de morfina o similares.",
    "El efecto es breve, por lo que el animal debe permanecer bajo vigilancia continua.",
    "Su uso elimina completamente el alivio del dolor provocado por el opioide."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Reversión de opioides",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.04,
          dosis_min: 0.01,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir según necesidad (resedación probable)", intervalo_horas: 1 }
      }
    ],
    gato: [
      {
        indicacion: "Reversión de opioides",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.04,
          dosis_min: 0.01,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Reversión de opioides",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          dosis_min: 0.01,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas en emergencias vitales.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Reversión súbita de la analgesia (dolor agudo).",
      "Taquicardia e hipertensión (respuesta al dolor).",
      "Vómitos (raro)."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria",
      "Nivel de consciencia",
      "Puntuación de dolor"
    ],
    instrucciones_manejo: "Administrar IV lentamente para titular a efecto. Estar preparado para administrar analgésicos de otra clase.",
    sobredosis: {
      signos: ["Generalmente seguro incluso en dosis altas."],
      tratamiento: "No requerido."
    },
    interacciones_farmacologicas: [
      { farmaco: "Opioides", efecto: "Antagonismo completo de sus efectos.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueador competitivo de alta afinidad por los receptores opioides mu, kappa y delta.",
    farmacocinetica: "Metabolismo hepático rápido. Vida media de eliminación corta."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "0.4 mg/ml",
      valor_concentracion: 0.4,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};