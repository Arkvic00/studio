import type { Drug } from '@/lib/types';

export const clemastineDrug: Drug = {
  id: "clemastine",
  meta_data: {
    nombre_generico: "Clemastina",
    nombres_comerciales: ["Tavegil", "Meclastin"],
    grupo_farmacologico: "Antihistamínico (Antagonista de receptores H1)",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antihistamínico de primera generación que bloquea los receptores H1.",
      "Utilizado para el control del prurito y signos alérgicos.",
      "La eficacia terapéutica tras la administración oral en perros es a menudo inconsistente.",
      "Uso con precaución en pacientes con glaucoma o retención urinaria."
    ],
    usos_principales: "Manejo de enfermedades alérgicas cutáneas y reacciones de hipersensibilidad.",
    inicio_accion: "Rápido",
    duracion_efecto: "12 horas"
  },
  informacion_cliente: [
    "Informe si nota a su mascota excesivamente somnolienta o, por el contrario, muy inquieta.",
    "El medicamento se administra dos veces al día.",
    "No usar en animales con dificultad para orinar sin supervisión veterinaria."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Manejo de alergias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Manejo de alergias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas reportadas para uso respiratorio básico.",
      "Uso con precaución en glaucoma de ángulo cerrado y obstrucción piloroduodenal."
    ],
    efectos_adversos: [
      "Sedación.",
      "Hiperexcitabilidad (en dosis altas).",
      "Puede reducir el umbral convulsivo.",
      "Boca seca."
    ],
    monitoreo_recomendado: [
      "Resolución del prurito",
      "Estado de alerta"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Sedación profunda", "Incoordinación"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores H1 de histamina.",
    farmacocinetica: "Niveles terapéuticos difíciles de alcanzar oralmente en perros."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "1 mg",
      valor_concentracion: 1,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
