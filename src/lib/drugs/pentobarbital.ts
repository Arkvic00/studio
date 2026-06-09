import type { Drug } from '@/lib/types';

export const pentobarbitalDrug: Drug = {
  id: "pentobarbital",
  meta_data: {
    nombre_generico: "Pentobarbital",
    nombres_comerciales: ["Dolethal", "Euthatal", "Lethobarb", "Euthasol", "Pentoject"],
    grupo_farmacologico: "Barbitúrico; Agente de eutanasia",
    status_regulatorio: "POM-V CD SCHEDULE 3"
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca una depresión profunda del SNC y del centro respiratorio.",
      "Uso exclusivo para la eutanasia humanitaria.",
      "Causa paro respiratorio rápido seguido de paro cardíaco.",
      "Requiere sedación previa en animales agresivos o estresados para evitar 'fase de excitación'.",
      "¡PROHIBIDO!: No usar las soluciones de eutanasia para controlar convulsiones."
    ],
    usos_principales: "Eutanasia humanitaria en mamíferos, aves, reptiles, anfibios y peces.",
    inicio_accion: "Ultra-rápido (segundos tras inyección IV)",
    duracion_efecto: "Letal"
  },
  informacion_cliente: [
    "Fármaco utilizado exclusivamente para la terminación indolora de la vida.",
    "El animal pierde la consciencia en segundos.",
    "Es normal ver 'jadeos agónicos' tras la muerte; son reflejos musculares que no implican consciencia.",
    "En peces, el corazón puede seguir latiendo brevemente tras la muerte cerebral."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Eutanasia",
        vias: ["IV rápida"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 140,
          dosis_min: 80,
          dosis_max: 160,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Usar dosis alta en animales jóvenes y sanos. La vía intracardíaca solo debe usarse bajo anestesia profunda."
      }
    ],
    gato: [
      {
        indicacion: "Eutanasia",
        vias: ["IV rápida", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 140,
          dosis_min: 80,
          dosis_max: 160,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "La vía intraperitoneal (IP) es preferida si la IV es difícil, pero tarda más en actuar."
      }
    ],
    conejo: [
      {
        indicacion: "Eutanasia",
        vias: ["IV", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 150,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Eutanasia",
        vias: ["IV", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 150,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Eutanasia",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 150,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Eutanasia",
        vias: ["IV", "Intracelómica", "Intracardíaca"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 80,
          dosis_min: 60,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "La vía intracardíaca requiere anestesia previa obligatoria."
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Eutanasia",
        vias: ["IV", "Intracelómica", "Sacos linfáticos"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 60,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    peces: [
      {
        indicacion: "Eutanasia",
        vias: ["IV", "Intracelómica", "Intracardíaca"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 80,
          dosis_min: 60,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No inyectar IM (es doloroso y lento).",
      "No usar soluciones de eutanasia para tratar convulsiones.",
      "Inyección intracardíaca sin anestesia previa."
    ],
    efectos_adversos: [
      "Excitación narcótica si el animal está muy agitado.",
      "Jadeos agónicos post-mortem.",
      "Tos si se inyecta accidentalmente en pulmón (vía intratorácica)."
    ],
    monitoreo_recomendado: [
      "Cese del latido cardíaco y pulso",
      "Ausencia de reflejo corneal",
      "Ausencia de respiración por al menos 5 min"
    ],
    instrucciones_manejo: "Manejar con cuidado extremo; la inyección accidental en humanos es letal. Mantener bajo llave.",
    sobredosis: {
      signos: ["Muerte cerebral y cardíaca irreversible"],
      tratamiento: "No aplica; efecto buscado."
    },
    interacciones_farmacologicas: [
      { farmaco: "Opioides / Antihistamínicos", efecto: "Potencian el efecto depresor del pentobarbital.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Depresor central masivo que paraliza los centros respiratorios de la médula seguidos del miocardio.",
    farmacocinetica: "Distribución sistémica ultra-rápida tras IV."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "200 mg/ml a 500 mg/ml", valor_concentracion: 200, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
