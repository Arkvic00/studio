import type { Drug } from '@/lib/types';

export const codeineDrug: Drug = {
  id: "codeine",
  meta_data: {
    nombre_generico: "Codeína (Fosfato de Codeína)",
    nombres_comerciales: ["Codeine*", "Pardale-V (con paracetamol)"],
    grupo_farmacologico: "Analgésico opioide; Antitusivo",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Opioide utilizado principalmente por su efecto antitusivo y analgésico leve.",
      "También eficaz para el control de diarreas refractarias.",
      "La formulación Pardale-V contiene paracetamol; no puede usarse para alcanzar dosis altas de codeína por riesgo de toxicidad de paracetamol.",
      "¡PARACETAMOL ES MORTAL EN GATOS!: Nunca usar Pardale-V en esta especie."
    ],
    usos_principales: "Supresión de la tos no productiva, analgesia leve y tratamiento de la diarrea.",
    inicio_accion: "Rápido (30-60 min)",
    duracion_efecto: "6 a 12 horas"
  },
  informacion_cliente: [
    "Puede causar somnolencia o estreñimiento.",
    "Informe si nota que el animal tiene dificultad para respirar o está muy decaído.",
    "¡NUNCA dar Pardale-V a gatos! Contiene paracetamol, que es altamente tóxico para ellos.",
    "No usar en perros con tos productiva (con flemas)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Antitusivo / Analgesia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "No usar Pardale-V para alcanzar estas dosis de codeína; la dosis de paracetamol sería excesiva."
      },
      {
        indicacion: "Diarrea",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas",
          intervalo_horas: 8
        }
      }
    ],
    gato: [
      {
        indicacion: "Analgesia (¡SIN PARACETAMOL!)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "¡ADVERTENCIA!: Solo usar codeína pura. El paracetamol es letal en gatos. Puede causar excitación del SNC."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal severa.",
      "Hipoadrenocorticismo (Cushing).",
      "Presión intracraneal aumentada.",
      "Hipotiroidismo.",
      "Compromiso respiratorio severo."
    ],
    contraindicaciones_especie: {
      "Gato": "¡PROHIBIDO Pardale-V! (Contiene paracetamol). Solo usar codeína sola."
    },
    efectos_adversos: [
      "Sedación y ataxia.",
      "Depresión respiratoria.",
      "Estreñimiento.",
      "Gatos: Posible estimulación del SNC."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria",
      "Estado de alerta",
      "Consistencia de las heces"
    ],
    instrucciones_manejo: "Observar precauciones normales para opioides.",
    sobredosis: {
      signos: ["Depresión respiratoria profunda", "Coma"],
      tratamiento: "Naloxona como antagonista específico. Soporte ventilatorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Depresores del SNC", efecto: "Efectos sedantes y depresores respiratorios aditivos.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de los receptores opioides mu en el SNC y en los plexos mientéricos intestinales.",
    farmacocinetica: "Metabolismo hepático. Excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "15 mg, 30 mg, 60 mg", valor_concentracion: 15, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Jarabe/Solución", concentracion_texto: "3 mg/ml, 5 mg/ml", valor_concentracion: 3, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Pardale-V", concentracion_texto: "9 mg Codeína + 400 mg Paracetamol", valor_concentracion: 9, unidad_concentracion: "mg", es_divisible: true }
  ]
};
