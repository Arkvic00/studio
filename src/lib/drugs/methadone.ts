import type { Drug } from '@/lib/types';

export const methadoneDrug: Drug = {
  id: "methadone",
  meta_data: {
    nombre_generico: "Metadona",
    nombres_comerciales: ["Comfortan", "Synthadon"],
    grupo_farmacologico: "Opioide agonista mu (OP3) puro",
    status_regulatorio: "POM-V CD SCHEDULE 2 (Estupefaciente)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Opioide potente con propiedades similares a la morfina.",
      "No causa liberación de histamina al administrarse IV.",
      "Efecto analgésico de 3 a 4 horas.",
      "Menos propenso a causar vómitos preoperatorios que la morfina.",
      "Puede administrarse vía epidural (duración ~8h en perros).",
      "Sufre un alto metabolismo de primer paso; vía oral poco eficaz en carnívoros."
    ],
    usos_principales: "Manejo del dolor moderado a severo perioperatorio y premedicación anestésica.",
    inicio_accion: "Rápido (IV inmediato; IM 15-20 min)",
    duracion_efecto: "3 a 4 horas"
  },
  informacion_cliente: [
    "Medicamento sujeto a estricto control legal; uso hospitalario.",
    "Puede causar sedación y, en raras ocasiones, una ligera excitación tras la inyección.",
    "El veterinario monitoreará la respiración del animal.",
    "En gatos, puede administrarse en la boca (mucosa oral) con buena absorción."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Analgesia / Premedicación",
        vias: ["IM", "IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.1,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Según sea necesario", intervalo_horas: 4 }
      },
      {
        indicacion: "Analgesia Epidural",
        vias: ["Epidural"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          dosis_min: 0.1,
          dosis_max: 0.3,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Proporciona aproximadamente 8 horas de analgesia."
      }
    ],
    gato: [
      {
        indicacion: "Analgesia / Premedicación",
        vias: ["IM", "IV lenta", "Transmucosa Oral"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.1,
          dosis_max: 0.6,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "La dosis de 0.6 mg/kg es adecuada para la vía transmucosa oral (OTM)."
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia",
        vias: ["IV lenta", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.3,
          dosis_max: 0.7,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    primates: [
      {
        indicacion: "Analgesia",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a los opioides.",
      "Insuficiencia respiratoria severa.",
      "Presión intracraneal elevada."
    ],
    efectos_adversos: [
      "Depresión respiratoria dosis-dependiente.",
      "Bradicardia sinusal.",
      "Reducción de la motilidad gastrointestinal.",
      "Sedación profunda.",
      "Jadeo tras administración IV."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria y EtCO2",
      "Frecuencia y ritmo cardíaco",
      "Nivel de dolor post-administración"
    ],
    instrucciones_manejo: "Administrar IV de forma lenta. Almacenar en caja de seguridad bajo normativa de estupefacientes.",
    sobredosis: {
      signos: ["Apnea", "Sedación extrema", "Bradicardia severa"],
      tratamiento: "Naloxona como antagonista específico. Soporte ventilatorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Depresores del SNC", efecto: "Potenciación del efecto sedante y depresor respiratorio.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista selectivo de los receptores mu-opioides en el SNC.",
    farmacocinetica: "Metabolismo hepático. Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "10 mg/ml",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
