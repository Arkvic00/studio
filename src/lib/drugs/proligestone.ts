import type { Drug } from '@/lib/types';

export const proligestoneDrug: Drug = {
  id: "proligestone",
  meta_data: {
    nombre_generico: "Proligestona",
    nombres_comerciales: ["Delvosteron"],
    grupo_farmacologico: "Progestágeno",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Progestágeno de duración prolongada.",
      "Utilizado para posponer el celo de forma temporal o permanente.",
      "Eficaz en el control de la dermatitis miliar felina.",
      "Riesgo de cambios de temperamento y aumento de peso.",
      "La inyección puede causar cambios permanentes en el color del pelo."
    ],
    usos_principales: "Posposición del oestrus en perras y gatas. Tratamiento de dermatitis miliar felina.",
    inicio_accion: "Variable",
    duracion_efecto: "Meses"
  },
  informacion_cliente: [
    "Medicamento hormonal inyectable para controlar el celo.",
    "El pelo puede cambiar de color o caerse en el lugar de la inyección.",
    "Informe si nota que su mascota bebe u orina más de lo normal.",
    "No usar en hembras que nunca han tenido el primer celo.",
    "No usar en animales diabéticos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Posposición del celo",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 33,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Protocolo: Dosis inicial, repetir a los 3, 7 y 12 meses", intervalo_horas: 2160 },
        notas_tecnicas: "Inyectar en la cara medial del pliegue del flanco para ocultar posibles cambios de pelo."
      }
    ],
    gato: [
      {
        indicacion: "Posposición del celo",
        vias: ["SC"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 100,
          unidad_calculo: "mg/gato"
        }
      },
      {
        indicacion: "Dermatitis miliar felina",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 42.5,
          dosis_min: 33,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir tras 14 días si no hay respuesta", intervalo_horas: 336 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Diabetes mellitus.",
      "Gestación.",
      "Antes del primer oestrus.",
      "Tumores mamarios previos."
    ],
    efectos_adversos: [
      "PU/PD (bebe y orina mucho).",
      "Polifagia y aumento de peso.",
      "Cambios de temperamento (letargo/depresión).",
      "Hiperplasia endometrial / Piometra.",
      "Reacción local en sitio de inyección."
    ],
    monitoreo_recomendado: [
      "Glucosa en sangre",
      "Estado de las glándulas mamarias",
      "Conducta"
    ],
    instrucciones_manejo: "Agitar bien antes de usar. Inyectar de forma aséptica.",
    sobredosis: {
      signos: ["Letargo marcado", "Poliuria severa"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Insulina", efecto: "Los progestágenos antagonizan el efecto de la insulina.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Modula la transcripción del ADN, mimetizando los efectos de la progesterona natural y suprimiendo las gonadotropinas.",
    farmacocinetica: "Absorción muy lenta desde el depósito SC."
  },
  presentaciones_comerciales: [
    { tipo: "Suspensión inyectable", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};