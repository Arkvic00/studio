import type { Drug } from '@/lib/types';

export const fentanylDrug: Drug = {
  id: "fentanyl",
  meta_data: {
    nombre_generico: "Fentanilo",
    nombres_comerciales: ["Fentadon", "Durogesic", "Sublimaze", "Fentora"],
    grupo_farmacologico: "Opioide agonista mu (OP3) puro",
    status_regulatorio: "POM-V CD SCHEDULE 2 (Estupefaciente)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Opioide sintético extremadamente potente (50 veces más que la morfina).",
      "Inicio de acción ultra-rápido (IV) y duración muy corta (10-20 min).",
      "Ideal para analgesia intraoperatoria profunda y rescate analgésico.",
      "Los parches transdérmicos tardan 7h (gatos) a 24h (perros) en ser efectivos.",
      "La saturación de tejidos en administraciones prolongadas alarga su efecto.",
      "Obligatorio disponer de ventilación asistida por riesgo de apnea."
    ],
    usos_principales: "Analgesia profunda intraoperatoria, manejo del dolor postoperatorio severo (CRI) y dolor crónico (parches).",
    inicio_accion: "1-2 min (IV); 7-24h (Parche)",
    duracion_efecto: "10–20 min (Bolo IV); 72h (Parche)"
  },
  informacion_cliente: [
    "Medicamento sujeto a estricto control legal; solo para uso hospitalario.",
    "Si el animal va a casa con un parche, es VITAL evitar que lo ingiera (el animal o personas/niños), ya que es mortal.",
    "No aplicar calor directo sobre el parche (mantas térmicas), ya que aumenta la absorción a niveles peligrosos.",
    "Informe si nota que su mascota respira muy lento o está excesivamente sedada."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Analgesia intraoperatoria (Bolo)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.005,
          unidad_calculo: "mg/kg (5 μg/kg)"
        },
        frecuencia: { texto_ui: "Cada 20 minutos según necesidad", intervalo_horas: 0.33 },
        notas_tecnicas: "Inyectar muy lentamente para evitar bradicardia severa."
      },
      {
        indicacion: "Analgesia intraoperatoria (CRI)",
        vias: ["IV (Infusión)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.00625,
          dosis_min: 0.0025,
          dosis_max: 0.01,
          unidad_calculo: "mg/kg/h (2.5-10 μg/kg/h)"
        },
        notas_tecnicas: "Preceder de un bolo de carga lento de 2.5-10 μg/kg."
      },
      {
        indicacion: "Dolor crónico / postoperatorio (Parche)",
        vias: ["Tópica (Parche)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.004,
          unidad_calculo: "mg/kg/h (4 μg/kg/h)"
        },
        notas_tecnicas: "Ej: Parche de 100 μg/h para un perro de 25 kg. Cambiar cada 72 horas."
      }
    ],
    gato: [
      {
        indicacion: "Analgesia intraoperatoria (Bolo)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.005,
          unidad_calculo: "mg/kg (5 μg/kg)"
        }
      },
      {
        indicacion: "Analgesia postoperatoria (CRI)",
        vias: ["IV (Infusión)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.003,
          dosis_min: 0.001,
          dosis_max: 0.005,
          unidad_calculo: "mg/kg/h"
        }
      },
      {
        indicacion: "Parche transdérmico",
        vias: ["Tópica (Parche)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 25,
          unidad_calculo: "μg/h (Parche)"
        },
        notas_tecnicas: "Parche de 25 μg/h para gatos de 3-5 kg. Gatitos: usar parche de 12.5 μg/h."
      }
    ],
    huron: [
      {
        indicacion: "Analgesia (CRI)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          dosis_min: 0.01,
          dosis_max: 0.03,
          unidad_calculo: "mg/kg/h"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia intraoperatoria",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.065,
          dosis_min: 0.03,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg/h (CRI)"
        }
      }
    ],
    ave: [
      {
        indicacion: "Analgesia (Loros Amazona)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          unidad_calculo: "mg/kg (20 μg/animal)"
        },
        notas_tecnicas: "Causa efecto ahorrador de isoflurano pero con bradicardia e hipotensión significativa."
      }
    ],
    reptil: [
      {
        indicacion: "Parche transdérmico (Snakes)",
        vias: ["Tópica (Parche)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 12,
          unidad_calculo: "μg/h"
        },
        notas_tecnicas: "Niveles por encima del umbral analgésico reportados en Pitones Bola. Eficacia clínica anecdótica."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Falta de equipo de ventilación asistida (presión positiva).",
      "Hipersensibilidad a los opioides."
    ],
    efectos_adversos: [
      "Depresión respiratoria profunda (Apnea).",
      "Bradicardia severa y posible asistolia si se inyecta IV rápido.",
      "Hipotermia.",
      "Retención urinaria.",
      "Gatos: Posible excitación postoperatoria si la dosis es alta."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria y EtCO2 constante",
      "Frecuencia y ritmo cardíaco (ECG continuo)",
      "Presión arterial",
      "Saturación de oxígeno (SpO2)"
    ],
    instrucciones_manejo: "Administrar IV MUY LENTAMENTE. Tener Atropina cargada para revertir bradicardia. Naloxona disponible para reversión total.",
    sobredosis: {
      signos: ["Apnea", "Asistolia", "Coma"],
      tratamiento: "Cese de infusión, ventilación manual/mecánica con O2 al 100%, Naloxona y Atropina."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anestésicos inhalados", efecto: "Reduce drásticamente (hasta 50%) los requerimientos de dosis.", severidad: "Importante" },
      { farmaco: "Depresores del SNC", efecto: "Efectos sedantes y respiratorios aditivos.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista selectivo de los receptores mu-opioides en el sistema nervioso central, modulando la percepción del dolor.",
    farmacocinetica: "Altamente lipofílico. Metabolismo hepático y excreción renal. Vida media de eliminación prolongada por volumen de distribución alto."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "50 μg/ml (0.05 mg/ml)", valor_concentracion: 0.05, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Parches transdérmicos", concentracion_texto: "12.5, 25, 50, 75 o 100 μg/h", valor_concentracion: 0.025, unidad_concentracion: "mg/h", es_divisible: false },
    { tipo: "Tabletas bucales/orales", concentracion_texto: "100 μg a 800 μg", valor_concentracion: 0.1, unidad_concentracion: "mg", es_divisible: false }
  ]
};
