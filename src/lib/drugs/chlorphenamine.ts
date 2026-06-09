import type { Drug } from '@/lib/types';

export const chlorphenamineDrug: Drug = {
  id: "chlorphenamine",
  meta_data: {
    nombre_generico: "Clorfenamina (Clorfeniramina)",
    nombres_comerciales: ["Piriton"],
    grupo_farmacologico: "Antihistamínico (Antagonista H1)",
    status_regulatorio: "POM, GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antihistamínico H1 clásico con efectos sedantes leves.",
      "Utilizado para el manejo de alergias y reacciones anafilácticas.",
      "Comúnmente empleado como premedicación antes de transfusiones sanguíneas o quimioterapia.",
      "Uso con precaución en pacientes con glaucoma o retención urinaria.",
      "Dosis para perros y gatos basadas en recomendaciones empíricas."
    ],
    usos_principales: "Tratamiento de enfermedades alérgicas, prevención de anafilaxia y premedicación hospitalaria.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Puede causar una sedación leve; informe si nota a su mascota excesivamente somnolienta.",
    "Utilizado comúnmente para picaduras de insectos o reacciones alérgicas cutáneas.",
    "Informe si su mascota tiene antecedentes de convulsiones.",
    "No usar sin supervisión en animales con dificultad para orinar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Manejo de alergias (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 6,
          dosis_min: 4,
          dosis_max: 8,
          unidad_calculo: "mg/perro"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Emergencia / Premedicación (Parenteral)",
        vias: ["IM", "IV lenta"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 6.25,
          dosis_min: 2.5,
          dosis_max: 10,
          unidad_calculo: "mg/perro"
        }
      }
    ],
    gato: [
      {
        indicacion: "Manejo de alergias (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 10 }
      },
      {
        indicacion: "Emergencia / Premedicación (Parenteral)",
        vias: ["IM", "IV lenta"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/gato"
        }
      }
    ],
    huron: [
      {
        indicacion: "Antihistamínico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 10 }
      }
    ],
    conejo: [
      {
        indicacion: "Antihistamínico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.2,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Antihistamínico (Dosis general)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    primates: [
      {
        indicacion: "Antihistamínico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad al fármaco.",
      "Uso con precaución en retención urinaria.",
      "Glaucoma de ángulo cerrado.",
      "Obstrucción piloroduodenal."
    ],
    efectos_adversos: [
      "Sedación leve.",
      "Boca seca.",
      "Puede reducir el umbral convulsivo."
    ],
    monitoreo_recomendado: [
      "Frecuencia de convulsiones en animales epilépticos",
      "Estado de alerta",
      "Facilidad de micción"
    ],
    instrucciones_manejo: "Administrar IV de forma muy lenta.",
    sobredosis: {
      signos: ["Sedación profunda", "Letargo", "Inquietud (reacción paradójica)"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueador competitivo de los receptores H1 de histamina.",
    farmacocinetica: "Metabolismo hepático y excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "4 mg", valor_concentracion: 4, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Jarabe oral", concentracion_texto: "0.4 mg/ml", valor_concentracion: 0.4, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
