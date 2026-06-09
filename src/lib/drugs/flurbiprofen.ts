import type { Drug } from '@/lib/types';

export const flurbiprofenDrug: Drug = {
  id: "flurbiprofen",
  meta_data: {
    nombre_generico: "Flurbiprofeno",
    nombres_comerciales: ["Ocufen"],
    grupo_farmacologico: "AINE oftálmico; Inhibidor de COX",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor de la ciclooxigenasa (COX) que reduce la producción de prostaglandinas.",
      "Efecto antiinflamatorio y analgésico local potente.",
      "Fundamental en la prevención de la miosis intraoperatoria en cirugía de cataratas.",
      "Útil en uveítis anterior y queratitis ulcerativa (si los corticoides están contraindicados).",
      "Puede retrasar la cicatrización epitelial de la córnea."
    ],
    usos_principales: "Prevención de miosis quirúrgica y manejo de la inflamación ocular en mamíferos, aves y reptiles.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Corta (requiere dosis frecuentes)"
  },
  informacion_cliente: [
    "Administre las gotas según el horario quirúrgico indicado por su veterinario.",
    "Puede causar una ligera molestia momentánea al aplicar la gota.",
    "Informe si nota un enrojecimiento inusual o dolor marcado en el ojo.",
    "Use con precaución si su mascota tiene glaucoma, ya que puede aumentar la presión ocular."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Uveítis / Inflamación ocular",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Pre-operatorio (Cirugía cataratas)",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota cada 30 min por 4 dosis"
        }
      }
    ],
    gato: [
      {
        indicacion: "Uveítis / Inflamación ocular",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    ave: [
      {
        indicacion: "Inflamación ocular",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    reptil: [
      {
        indicacion: "Inflamación ocular",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a los AINEs.",
      "Glaucoma no controlado (usar con precaución extrema)."
    ],
    efectos_adversos: [
      "Irritación local.",
      "Retraso en la cicatrización epitelial de la córnea.",
      "Riesgo de 'melting' corneal (basado en medicina humana).",
      "Aumento de la presión intraocular."
    ],
    monitoreo_recomendado: [
      "Presión intraocular regular",
      "Integridad epitelial corneal (Fluoresceína)"
    ],
    instrucciones_manejo: "Observar precauciones de esterilidad. Desechar viales monodosis tras su uso.",
    sobredosis: {
      signos: ["Irritación ocular marcada", "Hipertensión ocular"],
      tratamiento: "Lavar el ojo con abundante salino estéril."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides tópicos", efecto: "Aumento del riesgo de complicaciones corneales.", severidad: "Importante" },
      { farmaco: "Gentamicina / Otros antibióticos", efecto: "Pueden aumentar la penetración del AINE al dañar el epitelio.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la enzima ciclooxigenasa (COX) que bloquea la síntesis de prostaglandinas en los tejidos oculares.",
    farmacocinetica: "Acción tópica local con penetración corneal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución oftálmica",
      concentracion_texto: "0.03% (0.3 mg/ml)",
      valor_concentracion: 0.3,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
