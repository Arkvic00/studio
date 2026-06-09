import type { Drug } from '@/lib/types';

export const ciproheptadinaDrug: Drug = {
  id: "ciproheptadina",
  meta_data: {
    nombre_generico: "Ciproheptadina",
    nombres_comerciales: ["Periactin"],
    grupo_farmacologico: "Antihistamínico H1 y bloqueador de serotonina",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea los receptores de histamina H1 y los receptores de serotonina.",
      "Utilizado principalmente como estimulante del apetito, especialmente en gatos.",
      "Útil en el manejo de alergias y como parte del tratamiento del tromboembolismo aórtico felino.",
      "La serotonina contribuye a la vasoconstricción colateral; su bloqueo ayuda en la recuperación del tromboembolismo.",
      "Uso con precaución en pacientes con glaucoma o retención urinaria."
    ],
    usos_principales: "Estimulación del apetito, manejo de enfermedades alérgicas y soporte en tromboembolismo aórtico felino.",
    inicio_accion: "Rápido (pico en 1-2 horas)",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota parece muy somnolienta o si gana peso excesivo.",
    "No usar en animales con dificultad para orinar sin supervisión.",
    "En gatos con falta de apetito, el efecto suele ser rápido.",
    "Puede reducir el umbral de convulsiones en animales epilépticos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Alergias / Estimulación del apetito",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.1,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Estimulación del apetito / Alergias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.1,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Tromboembolismo Aórtico (Soporte)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Ayuda a mantener la circulación colateral bloqueando la vasoconstricción por serotonina."
      }
    ],
    huron: [
      {
        indicacion: "Estimulación del apetito",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/hurón"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Chinchillas / Cobayas: Apetito",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/animal"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Glaucoma de ángulo cerrado.",
      "Retención urinaria.",
      "Obstrucción gastrointestinal."
    ],
    efectos_adversos: [
      "Sedación leve.",
      "Polifagia (hambre excesiva) y ganancia de peso.",
      "Boca seca.",
      "Reducción del umbral convulsivo."
    ],
    monitoreo_recomendado: [
      "Peso corporal e ingesta de alimento",
      "Estado de alerta"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Sedación profunda", "Excitación paradójica", "Ataxia"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores H1 de histamina y de los receptores 5-HT de serotonina.",
    farmacocinetica: "Absorción oral rápida. Metabolismo hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "4 mg", valor_concentracion: 4, unidad_concentracion: "mg", es_divisible: true }
  ]
};
