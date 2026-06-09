import type { Drug } from '@/lib/types';

export const cetirizineDrug: Drug = {
  id: "cetirizine",
  meta_data: {
    nombre_generico: "Cetirizina",
    nombres_comerciales: ["Piriteze", "Zirtec"],
    grupo_farmacologico: "Antihistamínico (Antagonista de receptores H1)",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Se une a los receptores de histamina H1 para evitar la unión de la histamina.",
      "Es un metabolito de la hidroxicina.",
      "Menor efecto sedante en humanos que la clorfenamina (clorfeniramina)."
    ],
    usos_principales: "Manejo de enfermedades alérgicas. Prevención y tratamiento temprano de la anafilaxia."
  },
  informacion_cliente: [
    "Medicamento utilizado para tratar alergias.",
    "Informe si su mascota tiene antecedentes de convulsiones, ya que puede reducir el umbral convulsivo.",
    "Generalmente causa menos somnolencia que otros antihistamínicos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Manejo de alergias / Antihistamínico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Manejo de alergias / Antihistamínico",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 5,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Ninguna reportada."
    ],
    efectos_adversos: [
      "Puede reducir el umbral convulsivo (usar con precaución en animales epilépticos).",
      "Somnolencia leve (menos común que en otros antihistamínicos)."
    ],
    monitoreo_recomendado: [
      "Frecuencia de convulsiones (en animales predispuestos)",
      "Eficacia en el control de signos alérgicos"
    ],
    sobredosis: {
      signos: ["Sedación", "Trastornos gastrointestinales"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueador selectivo de los receptores H1 periféricos de la histamina.",
    farmacocinetica: "Metabolito activo de la hidroxicina."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "10 mg",
      valor_concentracion: 10,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Solución oral",
      concentracion_texto: "1 mg/ml (5mg/5ml)",
      valor_concentracion: 1,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
