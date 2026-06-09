import type { Drug } from '@/lib/types';

export const apomorfinaDrug: Drug = {
  id: "apomorfina",
  meta_data: {
    nombre_generico: "Apomorfina",
    nombres_comerciales: ["Apometic", "Apovomin", "Emedog"],
    grupo_farmacologico: "Agonista dopaminérgico; Emetógeno",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula el vómito a través de los receptores de dopamina D2 en la zona gatillo quimiorreceptora.",
      "Inducción de emesis autolimitada en pocos minutos (máximo 10 min).",
      "Si una inyección no induce el vómito, las dosis repetidas serán ineficaces y pueden deprimir el centro del vómito.",
      "Eficacia comprobada en perros y hurones."
    ],
    usos_principales: "Inducción del vómito tras la ingestión de sustancias tóxicas no cáusticas o material extraño no punzante.",
    inicio_accion: "Rápido (2-10 minutos)",
    duracion_efecto: "Corta (emesis autolimitada)"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario inmediato tras ingestiones accidentales.",
    "No inducir el vómito si han pasado más de 2 horas desde la ingestión.",
    "Es normal que el animal presente sedación leve tras vomitar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Inducción del vómito (Dosis autorizada)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 },
        notas_tecnicas: "No repetir si falla la primera dosis. En Collies (MDR1+), evitar o reducir dosis drásticamente."
      },
      {
        indicacion: "Inducción del vómito (Vía Intravenosa)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.03,
          dosis_min: 0.02,
          dosis_max: 0.04,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosis no autorizada pero reportada como altamente efectiva y rápida."
      }
    ],
    huron: [
      {
        indicacion: "Inducción del vómito",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.07,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosis de 70 μg/kg."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Ingestión de ácidos o álcalis fuertes (cáusticos).",
      "Cuerpos extraños gástricos punzantes.",
      "Intoxicación por piretroides.",
      "Animales inconscientes, con convulsiones o reflejo de tos reducido.",
      "Ingestión de hidrocarburos, petróleo o productos volátiles (riesgo de neumonía por aspiración)."
    ],
    contraindicaciones_especie: {
      "Gato": "NO RECOMENDADO: La xilacina es un emético mucho más potente y seguro en esta especie.",
      "Conejo": "¡PROHIBIDO!: Los conejos son fisiológicamente incapaces de vomitar.",
      "Roedores": "¡PROHIBIDO!: Sus paredes estomacales carecen de la fuerza para tolerar la emesis forzada.",
      "Perro": "ALERTA: Evitar en razas sensibles a la Ivermectina (mutación MDR1) como el Collie, a menos que sea inevitable (reducir dosis)."
    },
    efectos_adversos: [
      "Vómitos excesivos o prolongados.",
      "Depresión respiratoria.",
      "Sedación marcada.",
      "Hipotensión dosis-dependiente."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria",
      "Estado de consciencia post-emesis",
      "Presencia de contenido gástrico en el vómito"
    ],
    instrucciones_manejo: "No mezclar con otros productos en la misma jeringa. Sensible a la luz.",
    sobredosis: {
      signos: ["Sedación profunda", "Apnea", "Hipotensión severa"],
      tratamiento: "Antidopaminérgicos (fenotiazinas) para detener el vómito; Naloxona puede ayudar con la depresión del SNC."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fenotiazinas (Acepromazina)", efecto: "Antagonizan el efecto emético de la apomorfina.", severidad: "Importante" },
      { farmaco: "Opioides", efecto: "Potenciación de la depresión respiratoria y del SNC.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista directo de los receptores de dopamina D2 en la zona gatillo quimiorreceptora (CRTZ) del área postrema.",
    farmacocinetica: "Absorción muy rápida. Metabolismo hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "1 mg/ml (Emedog)", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "3 mg/ml (Apovomin)", valor_concentracion: 3, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Ampollas", concentracion_texto: "10 mg/ml (Apometic)", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};