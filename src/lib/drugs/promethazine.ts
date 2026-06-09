import type { Drug } from '@/lib/types';

export const promethazineDrug: Drug = {
  id: "promethazine",
  meta_data: {
    nombre_generico: "Prometazina",
    nombres_comerciales: ["Phenergan"],
    grupo_farmacologico: "Antihistamínico H1",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador de receptores de histamina H1.",
      "Efecto sedante marcado.",
      "Útil en anafilaxia temprana y alergias cutáneas.",
      "Posee propiedades antieméticas y anticolinérgicas leves."
    ],
    usos_principales: "Tratamiento de reacciones alérgicas y prevención de anafilaxia.",
    inicio_accion: "Rápido",
    duracion_efecto: "6 a 8 horas"
  },
  informacion_cliente: [
    "Causa somnolencia notable en el animal.",
    "Utilizar con precaución en animales con problemas de micción.",
    "Informe si nota temblores o excitación inusual."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Alergias / Anafilaxia",
        vias: ["IV lenta", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.2,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Manejo oral",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 18.75,
          dosis_min: 12.5,
          dosis_max: 25,
          unidad_calculo: "mg/perro"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Reacciones alérgicas",
        vias: ["IM", "IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Retención urinaria.",
      "Glaucoma de ángulo cerrado.",
      "Obstrucción intestinal."
    ],
    efectos_adversos: [
      "Sedación profunda.",
      "Boca seca.",
      "Reducción del umbral convulsivo."
    ],
    monitoreo_recomendado: [
      "Estado de alerta",
      "Frecuencia cardíaca"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Sedación extrema", "Excitación paradójica"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Opiáceos / Sedantes", efecto: "Potenciación de la depresión del SNC.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores H1 de histamina.",
    farmacocinetica: "Metabolismo hepático. Atraviesa la barrera hematoencefálica."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "10 mg, 25 mg", valor_concentracion: 25, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Inyectable", concentracion_texto: "25 mg/ml", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};