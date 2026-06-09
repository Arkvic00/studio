import type { Drug } from '@/lib/types';

export const fluoxetineDrug: Drug = {
  id: "fluoxetine",
  meta_data: {
    nombre_generico: "Fluoxetina",
    nombres_comerciales: ["Reconcile", "Prozac"],
    grupo_farmacologico: "Inhibidor Selectivo de la Recaptación de Serotonina (ISRS)",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea selectivamente la recaptación de serotonina en el cerebro.",
      "Eleva el umbral de actividad motora y mejora el estado de ánimo.",
      "Tratamiento de elección para ansiedad por separación en perros.",
      "Útil para el marcaje urinario en gatos y picaje de plumas en aves.",
      "Requiere periodos de lavado largos al cambiar desde o hacia un IMAO."
    ],
    usos_principales: "Manejo de la ansiedad por separación, trastornos compulsivos, marcaje urinario felino y picaje de plumas en aves psitácidas.",
    inicio_accion: "Lento (4-6 semanas para efecto conductual completo)",
    duracion_efecto: "Prolongada; requiere administración diaria"
  },
  informacion_cliente: [
    "El efecto del medicamento no es inmediato; puede tardar hasta un mes en verse mejoría.",
    "Debe acompañarse siempre de un plan de modificación de conducta.",
    "Puede causar somnolencia o una disminución temporal del apetito.",
    "Informe inmediatamente si nota un aumento inesperado de la agresividad.",
    "No use este medicamento si su mascota tiene antecedentes de convulsiones (epilepsia)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ansiedad por separación / Trastornos de ansiedad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
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
        indicacion: "Marcado urinario / Alopecia psicógena / Ansiedad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Trastornos de conducta",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 1.0,
          dosis_max: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    primates: [
      {
        indicacion: "Ansiedad / Comportamientos estereotipados",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.45,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    petauro: [
      {
        indicacion: "Trastornos de ansiedad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ],
    ave: [
      {
        indicacion: "Picaje de plumas / Comportamientos compulsivos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 1,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
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
      "Historial de convulsiones (Epilepsia).",
      "Hipersensibilidad a los ISRS.",
      "Fallo hepático severo."
    ],
    efectos_adversos: [
      "Letargo y depresión.",
      "Anorexia y pérdida de peso moderada.",
      "Vómitos y temblores.",
      "Aumento paradójico de la ansiedad o agresividad.",
      "Riesgo de sangrado aumentado tras trauma (si se usa con aspirina)."
    ],
    monitoreo_recomendado: [
      "Peso corporal",
      "Frecuencia de convulsiones en pacientes de riesgo",
      "Estado conductual (agresividad)"
    ],
    instrucciones_manejo: "Periodo de lavado de 2 semanas tras IMAO y de 6 semanas antes de iniciar un IMAO tras fluoxetina.",
    sobredosis: {
      signos: ["Convulsiones", "Vómitos severos", "Agitación extrema"],
      tratamiento: "Soporte sintomático; diazepam para convulsiones."
    },
    interacciones_farmacologicas: [
      { farmaco: "IMAOs (Selegilina)", efecto: "Riesgo de síndrome de serotonina fatal. NO USAR CONJUNTAMENTE.", severidad: "Grave" },
      { farmaco: "Aspirina / Anticoagulantes", efecto: "Aumenta el riesgo de hemorragia tras trauma tisular.", severidad: "Importante" },
      { farmaco: "Fenotiazinas (Acepromazina)", efecto: "Reduce el umbral convulsivo.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor selectivo de la recaptación de serotonina (ISRS) en las neuronas del SNC.",
    farmacocinetica: "Metabolismo hepático a norfluoxetina (activo). Vida media larga."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "8 mg, 16 mg, 20 mg, 32 mg, 64 mg",
      valor_concentracion: 20,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Solución oral",
      concentracion_texto: "4 mg/ml",
      valor_concentracion: 4,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
