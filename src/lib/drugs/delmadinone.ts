import type { Drug } from '@/lib/types';

export const delmadinoneDrug: Drug = {
  id: "delmadinone",
  meta_data: {
    nombre_generico: "Delmadinona (Acetato de delmadinona)",
    nombres_comerciales: ["Tardak"],
    grupo_farmacologico: "Progestágeno",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Progestágeno que suprime la producción de FSH y LH.",
      "Utilizado para el manejo de conductas ligadas a hormonas sexuales masculinas.",
      "Efecto calmante central adicional.",
      "La respuesta a la delmadinona no garantiza que la castración quirúrgica sea efectiva en casos de agresividad por ansiedad.",
      "Suprime significativamente la respuesta de cortisol al test de ACTH."
    ],
    usos_principales: "Tratamiento de la hipersexualidad (perros/gatos), hipertrofia prostática benigna, adenomas de glándulas perianales y agresividad impulsada por hormonas.",
    inicio_accion: "Variable (evaluar a los 8 días)",
    duracion_efecto: "3 a 4 semanas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota bebe u orina más de lo habitual.",
    "Puede causar un aumento del apetito.",
    "En el lugar de la inyección, el pelo puede cambiar de color temporalmente.",
    "Si se usa para agresividad, es fundamental un plan de manejo conductual conjunto.",
    "No usar en animales con diabetes mellitus."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipertrofia prostática / Hipersexualidad (Perros <10 kg)",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.75,
          dosis_min: 1.5,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Repetir a los 8 días si no hay respuesta; luego cada 3-4 semanas",
          intervalo_horas: 192
        }
      },
      {
        indicacion: "Hipertrofia prostática / Hipersexualidad (Perros 10-20 kg)",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 1.0,
          dosis_max: 1.5,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Hipertrofia prostática / Hipersexualidad (Perros >20 kg)",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    gato: [
      {
        indicacion: "Hipersexualidad",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Repetir a los 8 días si no hay respuesta; luego cada 3-4 semanas",
          intervalo_horas: 192
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Diabetes mellitus (los progestágenos antagonizan la insulina).",
      "Insuficiencia renal o hepática severa.",
      "Uso en hembras (riesgo de piometra/hiperplasia)."
    ],
    efectos_adversos: [
      "Reducción transitoria de la fertilidad y libido.",
      "Poliuria y polidipsia (bebe/orina mucho).",
      "Polifagia (aumento del apetito).",
      "Cambio de color del pelo en el sitio de inyección.",
      "Supresión del eje adrenal."
    ],
    monitoreo_recomendado: [
      "Niveles de glucosa en sangre",
      "Función hepática y renal",
      "Respuesta conductual"
    ],
    instrucciones_manejo: "Agitar bien la suspensión antes de usar.",
    sobredosis: {
      signos: ["Poliuria/Polidipsia severa", "Depresión marcada"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Insulina", efecto: "La delmadinona reduce la eficacia de la insulina.", severidad: "Importante" },
      { farmaco: "Corticosteroides", efecto: "Efecto aditivo en la supresión adrenal.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Progestágeno sintético que bloquea la liberación de gonadotropinas pituitarias, reduciendo los niveles de testosterona circulante. Tiene efectos directos en el SNC.",
    farmacocinetica: "Absorción lenta desde el depósito IM/SC."
  },
  presentaciones_comerciales: [
    {
      tipo: "Suspensión inyectable",
      concentracion_texto: "10 mg/ml",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
