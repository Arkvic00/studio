import type { Drug } from '@/lib/types';

export const hypromelloseDrug: Drug = {
  id: "hypromellose",
  meta_data: {
    nombre_generico: "Hipromelosa",
    nombres_comerciales: ["Isopto Plain", "Tears Naturale"],
    grupo_farmacologico: "Sustituto lagrimal; Lacrimomimético",
    status_regulatorio: "Venta libre (P)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Sustituto lagrimal acuoso basado en celulosa.",
      "Reemplaza el componente acuoso de la película lagrimal.",
      "Mejora el confort en casos de queratoconjuntivitis seca (KCS).",
      "Útil para lubricación ocular durante la anestesia.",
      "Si requiere administración > q4h, considerar sustitutos de mayor duración."
    ],
    usos_principales: "Lubricación de ojos secos y protección corneal durante la anestesia.",
    inicio_accion: "Inmediato",
    duracion_efecto: "Corta (requiere aplicaciones frecuentes)"
  },
  informacion_cliente: [
    "Aplique las gotas según el horario indicado por el veterinario.",
    "No permita que la punta del envase toque el ojo u otras superficies.",
    "El cumplimiento suele ser difícil si se requiere aplicar cada hora fuera del entorno hospitalario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Lubricación / Ojo seco",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 1 hora", intervalo_horas: 1 }
      }
    ],
    gato: [
      {
        indicacion: "Lubricación / Ojo seco",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 1 hora", intervalo_horas: 1 }
      }
    ],
    roedores: [
      {
        indicacion: "Lubricación durante anestesia",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 1 hora mientras dure la anestesia", intervalo_horas: 1 }
      }
    ],
    conejo: [
      {
        indicacion: "Lubricación durante anestesia",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 1 hora mientras dure la anestesia", intervalo_horas: 1 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Ninguna conocida."],
    efectos_adversos: ["Visión borrosa momentánea."],
    monitoreo_recomendado: ["Integridad de la superficie corneal"],
    instrucciones_manejo: "Observar precauciones de esterilidad.",
    sobredosis: {
      signos: ["No aplica"],
      tratamiento: "No requerido."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agente viscoelástico que aumenta el tiempo de retención de la lágrima en la córnea.",
    farmacocinetica: "Acción puramente local."
  },
  presentaciones_comerciales: [
    { tipo: "Gotas oftálmicas", concentracion_texto: "0.3%, 0.5%", valor_concentracion: 3, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};