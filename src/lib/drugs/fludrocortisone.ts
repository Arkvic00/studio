import type { Drug } from '@/lib/types';

export const fludrocortisoneDrug: Drug = {
  id: "fludrocortisone",
  meta_data: {
    nombre_generico: "Fludrocortisona (Acetato de fludrocortisona)",
    nombres_comerciales: ["Florinef"],
    grupo_farmacologico: "Mineralocorticoide; Glucocorticoide",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo de la aldosterona que retiene sodio y elimina potasio.",
      "Posee una actividad glucocorticoide significativa (12 veces más que la hidrocortisona y 3 veces más que la prednisolona).",
      "Alternativa al pivalato de desoxicortona (DOCP) para el manejo crónico del Addison.",
      "Requiere monitoreo frecuente de electrolitos durante el ajuste de dosis.",
      "Puede requerir suplementación adicional con prednisolona en periodos de estrés."
    ],
    usos_principales: "Tratamiento de la insuficiencia adrenocortical primaria (Enfermedad de Addison) y post-adrenalectomía en hurones.",
    inicio_accion: "Rápido tras administración oral",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "No suspenda el medicamento de forma repentina; es vital para la vida del animal.",
    "Informe si nota que su mascota bebe u orina en exceso, o si presenta debilidad.",
    "Se requieren análisis de sangre periódicos para controlar el sodio y el potasio.",
    "Informe si el animal va a ser sometido a una situación de estrés (cirugía, mudanza), ya que puede requerir un ajuste de dosis temporal."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipoadrenocorticismo (Mantenimiento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          dosis_max: 0.05,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Iniciar con 0.01 mg/kg q12h. La mayoría de los perros estabilizados requieren menos de 0.05 mg/kg q12h. Monitorear electrolitos 4-6h post-toma."
      }
    ],
    gato: [
      {
        indicacion: "Hipoadrenocorticismo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    huron: [
      {
        indicacion: "Post-adrenalectomía",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
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
      "Fallo cardíaco congestivo severo.",
      "Hipertensión sistémica descontrolada.",
      "Edema cerebral."
    ],
    efectos_adversos: [
      "Hipertensión.",
      "Edema.",
      "Hipopotasemia (niveles bajos de potasio).",
      "Signos de hipercortisolismo (Cushing iatrogénico) en sobredosis a largo plazo.",
      "PU/PD (bebe y orina mucho)."
    ],
    monitoreo_recomendado: [
      "Sodio y Potasio séricos regularmente (no solo la relación)",
      "Presión arterial",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Algunas formulaciones magistrales pueden requerir refrigeración.",
    sobredosis: {
      signos: ["Hipertensión", "Debilidad muscular por hipopotasemia", "Edema"],
      tratamiento: "Reducción de dosis y corrección de desequilibrios electrolíticos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Diuréticos (Furosemida / Tiazidas)", efecto: "Riesgo severo de hipopotasemia.", severidad: "Importante" },
      { farmaco: "Anfotericina B", efecto: "Aumenta el riesgo de hipopotasemia.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Actúa como un potente mineralocorticoide aumentando la reabsorción de sodio y cloruro y la excreción de potasio en el túbulo distal renal.",
    farmacocinetica: "Absorción oral rápida. Vida media corta pero efectos biológicos prolongados."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "0.1 mg",
      valor_concentracion: 0.1,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};