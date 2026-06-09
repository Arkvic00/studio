import type { Drug } from '@/lib/types';

export const hydroxyzineDrug: Drug = {
  id: "hydroxyzine",
  meta_data: {
    nombre_generico: "Hidroxicina",
    nombres_comerciales: ["Atarax", "Ucerax"],
    grupo_farmacologico: "Antihistamínico (Antagonista H1)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea los receptores H1 de histamina.",
      "Se metaboliza a cetirizina.",
      "Utilizado para el manejo de enfermedades alérgicas.",
      "En aves, se emplea para el control del picaje de plumas.",
      "Uso con precaución en casos de retención urinaria o glaucoma."
    ],
    usos_principales: "Manejo de enfermedades alérgicas en perros y gatos. Control del picaje en aves.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Puede causar una sedación leve en su mascota.",
    "Informe si su mascota tiene antecedentes de convulsiones, ya que puede reducir el umbral convulsivo.",
    "Utilizar con precaución en animales con dificultad para orinar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Antihistamínico / Alergias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.1,
          dosis_min: 2.0,
          dosis_max: 2.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Antihistamínico / Alergias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.1,
          dosis_min: 2.0,
          dosis_max: 2.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    huron: [
      {
        indicacion: "Antihistamínico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    conejo: [
      {
        indicacion: "Antihistamínico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Picaje de plumas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Retención urinaria.",
      "Glaucoma de ángulo cerrado.",
      "Obstrucción piloroduodenal."
    ],
    efectos_adversos: [
      "Sedación leve.",
      "Reducción del umbral de convulsiones."
    ],
    monitoreo_recomendado: [
      "Estado de alerta",
      "Frecuencia de convulsiones en animales epilépticos"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Sedación profunda", "Convulsiones"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores H1 de la histamina.",
    farmacocinetica: "Metabolismo hepático a cetirizina."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "10 mg, 25 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Jarabe oral", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};