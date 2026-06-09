import type { Drug } from '@/lib/types';

export const alfentanilDrug: Drug = {
  id: "alfentanil",
  meta_data: {
    nombre_generico: "Alfentanilo",
    nombres_comerciales: ["Rapifen"],
    grupo_farmacologico: "Opioide agonista mu puro (serie fenilpiperidina)",
    status_regulatorio: "POM CD SCHEDULE 2"
  },
  resumen_clinico: {
    puntos_clave: [
      "Opioide muy potente (10–20 veces más que la morfina).",
      "Inicio de acción ultra-rápido (15–30 segundos) y duración corta.",
      "Ideal para infusión continua (CRI) durante la cirugía.",
      "Requiere equipo de ventilación mecánica o manual obligatorio por depresión respiratoria severa."
    ],
    usos_principales: "Provisión de analgesia intraoperatoria potente durante la anestesia en perros y gatos. Contribuye a una técnica de anestesia balanceada.",
    inicio_accion: "15–30 segundos",
    duracion_efecto: "Muy corta (se prefiere CRI)"
  },
  informacion_cliente: [
    "Fármaco de uso estrictamente hospitalario e intraoperatorio.",
    "No es adecuado para el control del dolor en el periodo postoperatorio inmediato debido a su corta duración."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Analgesia Intraoperatoria (Bolo único)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.003,
          dosis_min: 0.001,
          dosis_max: 0.005,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "La inyección IV rápida puede causar bradicardia severa o asistolia."
      },
      {
        indicacion: "Analgesia Intraoperatoria (CRI)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.0017,
          dosis_min: 0.001,
          dosis_max: 0.0025,
          unidad_calculo: "mg/kg/min"
        },
        notas_tecnicas: "ATENCIÓN: Dosis expresada en mg/kg por MINUTO. El resultado de la calculadora será ml/min. Reduce requerimientos de otros anestésicos en un 50%."
      }
    ],
    gato: [
      {
        indicacion: "Analgesia Intraoperatoria (Bolo único)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.001,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Inyectar muy lentamente."
      },
      {
        indicacion: "Analgesia Intraoperatoria (CRI)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.001,
          unidad_calculo: "mg/kg/min"
        },
        notas_tecnicas: "ATENCIÓN: Dosis expresada en mg/kg por MINUTO. El resultado de la calculadora será ml/min."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No usar si no se dispone de medios para ventilación por presión positiva."
    ],
    efectos_adversos: [
      "Bradicardia severa (posible asistolia con inyección rápida).",
      "Depresión respiratoria profunda que lleva al cese de la respiración espontánea.",
      "Reducción de la frecuencia cardíaca."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca (ECG continuo)",
      "Patrón respiratorio (EtCO2)",
      "Ventilación asistida"
    ],
    instrucciones_manejo: "No usar a menos que se disponga de instalaciones para ventilación por presión positiva (manual o automática).",
    sobredosis: {
      signos: ["Asistolia", "Apnea prolongada"],
      tratamiento: "Naloxona para revertir efectos, ventilación asistida y atropina para contrarrestar la bradicardia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anestésicos (Inhalados/IV)", efecto: "Reduce los requerimientos de dosis en al menos un 50%.", severidad: "Importante" },
      { farmaco: "IMAOs (Inhibidores de la monoaminooxidasa)", efecto: "Riesgo de toxicidad por serotonina (evitar combinación).", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista mu puro de la serie de la fenilpiperidina.",
    farmacocinetica: "Inicio de acción extremadamente rápido (15-30 seg). Metabolismo rápido."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "0.5 mg/ml",
      valor_concentracion: 0.5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};