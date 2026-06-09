import type { Drug } from '@/lib/types';

export const octreotideDrug: Drug = {
  id: "octreotide",
  meta_data: {
    nombre_generico: "Octreotida",
    nombres_comerciales: ["Sandostatin", "Sandostatin LAR"],
    grupo_farmacologico: "Análogo de la somatostatina",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo sintético de la somatostatina de acción prolongada.",
      "Inhibe la liberación de insulina, glucagón, hormona del crecimiento (GH) y gastrina.",
      "Uso en tumores endocrinos pancreáticos (gastrinoma, insulinoma).",
      "Manejo de la acromegalia en gatos y perros.",
      "Eficacia limitada en insulinomas si el tumor no expresa receptores de somatostatina.",
      "Información clínica limitada en especies veterinarias."
    ],
    usos_principales: "Tratamiento paliativo de insulinomas, gastrinomas y acromegalia.",
    inicio_accion: "Rápido (vía SC)",
    duracion_efecto: "8 a 12 horas (Forma acuosa); Semanas (Forma LAR)"
  },
  informacion_cliente: [
    "Medicamento inyectable especializado para tumores hormonales.",
    "Informe si nota pérdida de apetito, vómitos o dolor abdominal.",
    "El ajuste de la dosis depende de la respuesta de los niveles de azúcar o síntomas clínicos.",
    "La inyección puede ser dolorosa momentáneamente."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Insulinoma / Gastrinoma / Acromegalia",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg (10 μg/kg)"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "Dosis alternativa: 10-20 μg/perro total cada 8-12 horas."
      }
    ],
    gato: [
      {
        indicacion: "Acromegalia / Tumores endocrinos",
        vias: ["SC"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.015,
          dosis_min: 0.01,
          dosis_max: 0.02,
          unidad_calculo: "mg/gato (10-20 μg/gato)"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    huron: [
      {
        indicacion: "Insulinoma / Gastrinoma",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.0015,
          dosis_min: 0.001,
          dosis_max: 0.002,
          unidad_calculo: "mg/kg (1-2 μg/kg)"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal o hepática (usar con precaución)."
    ],
    efectos_adversos: [
      "Trastornos GI (anorexia, vómitos, dolor abdominal, hinchazón, diarrea, esteatorrea).",
      "Hepatopatía transitoria.",
      "Dolor en el sitio de inyección.",
      "Hipotiroidismo leve por inhibición de TSH (teórico)."
    ],
    monitoreo_recomendado: [
      "Niveles de glucosa en sangre",
      "Función hepática",
      "Signos digestivos"
    ],
    instrucciones_manejo: "Observar precauciones normales. Mantener refrigerado.",
    sobredosis: {
      signos: ["Vómitos", "Dolor abdominal severo"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a los receptores de somatostatina, inhibiendo la secreción basal y estimulada de múltiples hormonas peptídicas.",
    farmacocinetica: "Absorción SC rápida. Metabolismo hepático parcial."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable (Acuosa)",
      concentracion_texto: "50 a 500 μg/ml",
      valor_concentracion: 0.1,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Inyectable Depot (LAR)",
      concentracion_texto: "10 mg, 20 mg, 30 mg",
      valor_concentracion: 10,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
