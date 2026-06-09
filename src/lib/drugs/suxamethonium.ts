import type { Drug } from '@/lib/types';

export const suxamethoniumDrug: Drug = {
  id: "suxamethonium",
  meta_data: {
    nombre_generico: "Suxametonio (Succinilcolina)",
    nombres_comerciales: ["Suxamethonium*"],
    grupo_farmacologico: "Bloqueante neuromuscular despolarizante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Produce parálisis muscular mediante despolarización persistente.",
      "Inicio de acción ultra-rápido (5-15 seg) y duración muy corta (3-5 min).",
      "Uso principal: facilitar la intubación endotraqueal en gatos.",
      "Superado por bloqueadores no despolarizantes más seguros.",
      "Obligatorio disponer de ventilación asistida inmediata.",
      "No existe antagonista (reversión); el efecto cesa por degradación enzimática."
    ],
    usos_principales: "Facilitación de la intubación endotraqueal en gatos difíciles.",
    inicio_accion: "Ultra-rápido (5-15 segundos)",
    duracion_efecto: "3 a 5 minutos"
  },
  informacion_cliente: [
    "Fármaco de uso hospitalario bajo anestesia profunda.",
    "Provoca parálisis completa de todos los músculos, incluidos los respiratorios.",
    "El efecto dura muy poco tiempo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "¡NO RECOMENDADO!",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "N/A" }
      }
    ],
    gato: [
      {
        indicacion: "Facilitación de intubación",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosis total máxima de 3.5 mg por gato. Ventilación asistida inmediata obligatoria."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Falta de equipo de ventilación asistida.",
      "Quemaduras graves o traumas musculares extensos (riesgo de hiperpotasemia fatal).",
      "Exposición reciente a organofosforados.",
      "Glaucoma (aumenta presión intraocular)."
    ],
    efectos_adversos: [
      "Apnea (efecto deseado pero mortal sin ventilación).",
      "Arritmias cardíacas (bradicardia sinusal).",
      "Hiperpotasemia severa.",
      "Fasciculaciones musculares dolorosas.",
      "Aumento de la presión intragástrica e intraocular."
    ],
    monitoreo_recomendado: [
      "Ventilación asistida constante",
      "ECG continuo (vital)",
      "Saturación de oxígeno (SpO2)"
    ],
    instrucciones_manejo: "Mantener en refrigeración (2-8°C).",
    sobredosis: {
      signos: ["Parálisis prolongada", "Apnea", "Colapso"],
      tratamiento: "Mantener ventilación asistida hasta recuperación espontánea."
    },
    interacciones_farmacologicas: [
      { farmaco: "Inhibidores de colinesterasa (Neostigmina)", efecto: "Prolongan drásticamente el bloqueo (antagonismo de la enzima de degradación).", severidad: "Grave" },
      { farmaco: "Beta-bloqueadores / Lidocaína", efecto: "Pueden potenciar el efecto.", severidad: "Moderada" },
      { farmaco: "Díazepam", efecto: "Puede reducir la duración del efecto.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Imita a la acetilcolina uniéndose al receptor nicotínico pero no se disocia rápido, manteniendo la membrana despolarizada e impidiendo nuevos impulsos.",
    farmacocinetica: "Degradación por pseudocolinesterasas plasmáticas."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "50 mg/ml",
      valor_concentracion: 50,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
