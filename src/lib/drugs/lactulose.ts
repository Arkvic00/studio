import type { Drug } from '@/lib/types';

export const lactuloseDrug: Drug = {
  id: "lactulose",
  meta_data: {
    nombre_generico: "Lactulosa",
    nombres_comerciales: ["Duphalac", "Lactugal", "Laevolac"],
    grupo_farmacologico: "Laxante osmótico; Reductor de amoníaco",
    status_regulatorio: "P"
  },
  resumen_clinico: {
    puntos_clave: [
      "Metabolizada por bacterias colónicas en ácidos orgánicos (láctico, acético).",
      "Acidifica el contenido colónico atrapando amoníaco como iones amonio.",
      "Aumenta la presión osmótica provocando un efecto laxante.",
      "Útil en encefalopatía hepática y estreñimiento crónico.",
      "Reducir dosis si se desarrolla diarrea."
    ],
    usos_principales: "Reducción de niveles de amoníaco en encefalopatía hepática y tratamiento del estreñimiento en perros, gatos y exóticos.",
    inicio_accion: "12 a 24 horas (oral)",
    duracion_efecto: "Durante el tránsito intestinal"
  },
  informacion_cliente: [
    "A muchos gatos y algunos perros no les gusta el sabor dulce del jarabe.",
    "Provocará heces blandas; el objetivo son 2 a 3 defecaciones suaves al día.",
    "Si el animal presenta diarrea líquida o cólicos, informe al veterinario.",
    "Contiene pequeñas cantidades de lactosa y galactosa; precaución en diabéticos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estreñimiento / Encefalopatía crónica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Ajustar para obtener 2-3 heces blandas al día."
      },
      {
        indicacion: "Encefalopatía hepática aguda (Enema)",
        vias: ["Rectal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 19,
          dosis_min: 18,
          dosis_max: 20,
          unidad_calculo: "ml/kg (Solución 3:7 con agua)"
        },
        duracion_tratamiento: "Retener por 4 a 8 horas"
      }
    ],
    gato: [
      {
        indicacion: "Estreñimiento / Encefalopatía",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2.75,
          dosis_min: 0.5,
          dosis_max: 5.0,
          unidad_calculo: "ml/gato"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Estreñimiento / Encefalopatía",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.45,
          dosis_min: 0.15,
          dosis_max: 0.75,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Estreñimiento (Ratas/Ratones)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Estimulante del apetito / Encefalopatía",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.6,
          dosis_min: 0.2,
          dosis_max: 1.0,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    reptil: [
      {
        indicacion: "Estreñimiento",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción gastrointestinal mecánica.",
      "Perforación intestinal.",
      "Animales gravemente deprimidos con riesgo de aspiración (vía oral)."
    ],
    efectos_adversos: [
      "Flatulencia y ruidos intestinales.",
      "Diarrea y cólicos abdominales en dosis altas.",
      "Deshidratación si la diarrea es profusa."
    ],
    monitoreo_recomendado: [
      "Consistencia de las heces",
      "Niveles de glucosa en diabéticos",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Asegurar un aporte de agua adecuado.",
    sobredosis: {
      signos: ["Diarrea profusa", "Deshidratación", "Hipopotasemia"],
      tratamiento: "Suspensión del fármaco y fluidoterapia con electrolitos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Neomicina / Antibióticos orales", efecto: "Pueden potenciar el efecto de la lactulosa.", severidad: "Leve" },
      { farmaco: "Antiácidos orales", efecto: "Pueden reducir la acidificación colónica de la lactulosa.", severidad: "Moderada" },
      { farmaco: "Mesalazina (5-ASA)", efecto: "Puede inactivarse por el pH colónico bajo inducido por lactulosa.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Laxante osmótico que acidifica el contenido intestinal, convirtiendo el amoníaco (absorbible) en amonio (no absorbible y excretable).",
    farmacocinetica: "No se absorbe en el intestino delgado; llega intacta al colon."
  },
  presentaciones_comerciales: [
    { tipo: "Jarabe oral", concentracion_texto: "3.3 g / 5 ml", valor_concentracion: 660, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
