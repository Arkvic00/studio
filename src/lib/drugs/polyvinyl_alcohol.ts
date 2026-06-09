import type { Drug } from '@/lib/types';

export const polyvinylAlcoholDrug: Drug = {
  id: "polyvinyl_alcohol",
  meta_data: {
    nombre_generico: "Alcohol Polivinílico",
    nombres_comerciales: ["Liquifilm Tears", "Sno Tears"],
    grupo_farmacologico: "Sustituto lagrimal; Lacrimomimético",
    status_regulatorio: "P"
  },
  resumen_clinico: {
    puntos_clave: [
      "Sustituto lagrimal sintético de base acuosa.",
      "Imita la capa acuosa de la película lagrimal.",
      "Más adherente y menos viscoso que la hipromelosa.",
      "Mejora el confort en casos de queratoconjuntivitis seca (KCS).",
      "Requiere aplicaciones frecuentes para ser efectivo."
    ],
    usos_principales: "Lubricación ocular en ojo seco y protección corneal inicial.",
    inicio_accion: "Inmediato",
    duracion_efecto: "Corta (requiere dosis q1h en casos severos)"
  },
  informacion_cliente: [
    "Aplique las gotas según el horario indicado; si el animal parpadea mucho, puede necesitar más frecuencia.",
    "No permita que la punta del frasco toque el ojo.",
    "Si nota que el animal no mejora con aplicaciones cada 4 horas, consulte para cambiar a un gel de mayor duración.",
    "Muy seguro para su uso frecuente."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ojo seco / Lubricación",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 1 hora (según necesidad)", intervalo_horas: 1 }
      }
    ],
    gato: [
      {
        indicacion: "Lubricación ocular",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 1 hora", intervalo_horas: 1 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Ninguna conocida."],
    efectos_adversos: ["Visión borrosa momentánea."],
    monitoreo_recomendado: ["Integridad de la córnea"],
    instrucciones_manejo: "Observar asepsia en la punta del frasco.",
    sobredosis: {
      signos: ["No aplica"],
      tratamiento: "No requerido."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Resina sintética que aumenta la humectabilidad corneal y el tiempo de ruptura de la lágrima.",
    farmacocinetica: "Acción puramente local."
  },
  presentaciones_comerciales: [
    { tipo: "Gotas oftálmicas", concentracion_texto: "1.4%", valor_concentracion: 14, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};