import type { Drug } from '@/lib/types';

export const papaveretumDrug: Drug = {
  id: "papaveretum",
  meta_data: {
    nombre_generico: "Papaveretum (Omnopon)",
    nombres_comerciales: ["Omnopon*", "Papaveretum*"],
    grupo_farmacologico: "Mezcla de alcaloides del opio; Analgésico opioide",
    status_regulatorio: "POM CD SCHEDULE 2"
  },
  resumen_clinico: {
    puntos_clave: [
      "Mezcla de morfina (85.5%), codeína (6.8%) y papaverina (7.8%).",
      "Analgesia potente similar a la morfina pura.",
      "Utilizado tradicionalmente en combinación con acepromazina para perros agresivos.",
      "Causa menos liberación de histamina que la morfina.",
      "Duración de acción de aproximadamente 4 horas."
    ],
    usos_principales: "Manejo del dolor moderado a severo perioperatorio y sedación profunda (en combinación).",
    inicio_accion: "Rápido (IV 2-5 min; IM 15-20 min)",
    duracion_efecto: "4 horas"
  },
  informacion_cliente: [
    "Medicamento sujeto a estricto control legal; uso hospitalario.",
    "Provoca sedación profunda y puede inducir el vómito.",
    "El veterinario monitoreará la respiración constantemente.",
    "7.7 mg de papaveretum equivalen a 5 mg de morfina anhidra."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Analgesia / Sedación profunda",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.2,
          dosis_max: 0.8,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Usar dosis bajas vía IV. Dosis altas solo si se busca sedación profunda/neuroleptanalgesia."
      }
    ],
    gato: [
      {
        indicacion: "Analgesia",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.2,
          dosis_max: 0.3,
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
      "Depresión respiratoria.",
      "Vómitos y salivación.",
      "Reducción de la motilidad gastrointestinal.",
      "Bradicardia sinusal.",
      "Excitación (raro vía IV)."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria y EtCO2",
      "Frecuencia cardíaca",
      "Estado de consciencia"
    ],
    instrucciones_manejo: "Administrar IV muy lentamente. Almacenar bajo normativa de estupefacientes.",
    sobredosis: {
      signos: ["Apnea", "Sedación profunda", "Coma"],
      tratamiento: "Naloxona como antagonista específico. Soporte ventilatorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Depresores del SNC", efecto: "Potenciación del efecto sedante y depresión respiratoria.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de los receptores opioides mu en el SNC.",
    farmacocinetica: "Metabolismo hepático y excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "15.4 mg/ml (Equiv. 10 mg Morfina)", valor_concentracion: 15.4, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};