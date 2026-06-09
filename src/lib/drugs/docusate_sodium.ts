import type { Drug } from '@/lib/types';

export const docusateSodiumDrug: Drug = {
  id: "docusate_sodium",
  meta_data: {
    nombre_generico: "Docusato Sódico (Dioctilsulfosuccinato sódico / DSS)",
    nombres_comerciales: ["Dioctyl", "Docusol", "DulcoEase", "Norgalax", "Waxsol"],
    grupo_farmacologico: "Laxante emoliente; Surfactante; Ceruminolítico",
    status_regulatorio: "P, GSL (Venta libre)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Surfactante aniónico que disminuye la tensión superficial entre agua y grasa.",
      "Permite la penetración de fluidos en las masas fecales, ablandándolas.",
      "Uso tópico para disolver el cerumen en el conducto auditivo.",
      "No administrar junto con aceite mineral (aumenta su absorción sistémica)."
    ],
    usos_principales: "Tratamiento del estreñimiento y manejo de la otitis ceruminosa (limpieza previa).",
    inicio_accion: "Variable (oral 12-72h; rectal rápido)",
    duracion_efecto: "Durante el tránsito GI"
  },
  informacion_cliente: [
    "Asegúrese de que su mascota beba mucha agua para que el laxante funcione mejor.",
    "No lo use si sospecha que su mascota tiene una obstrucción intestinal.",
    "Para uso en oídos, aplique unas gotas y espere 15 minutos antes de la limpieza.",
    "No combinar con vaselina líquida o aceite mineral por boca."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estreñimiento (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 75,
          dosis_min: 50,
          dosis_max: 100,
          unidad_calculo: "mg/perro"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Estreñimiento (Enema)",
        vias: ["Rectal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 12.5,
          unidad_calculo: "ml de solución al 5% (mezclada en 100 ml agua)"
        },
        frecuencia: { texto_ui: "Según sea necesario", intervalo_horas: 0 }
      },
      {
        indicacion: "Otitis ceruminosa",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3,
          unidad_calculo: "gotas por oído"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas (o 15 min antes de lavado)", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Estreñimiento",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 50,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Otitis ceruminosa",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "gotas"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción intestinal mecánica.",
      "Tímpano perforado (riesgo de ototoxicidad)."
    ],
    efectos_adversos: [
      "Diarrea leve.",
      "Náuseas.",
      "Irritación local en el sitio de aplicación ótica.",
      "Potencial toxicidad hepática si se absorbe sistémicamente con aceites."
    ],
    monitoreo_recomendado: [
      "Frecuencia y consistencia de las heces",
      "Estado de la piel del conducto auditivo"
    ],
    instrucciones_manejo: "Evitar contacto con los ojos.",
    sobredosis: {
      signos: ["Diarrea profusa", "Cólicos abdominales"],
      tratamiento: "Soporte sintomático; fluidoterapia si hay deshidratación."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aceite mineral / Vaselina líquida", efecto: "Docusato aumenta drásticamente la absorción de los aceites, pudiendo causar granulomas hepáticos. NO COMBINAR.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agente humectante que emulsiona las heces y facilita la hidratación de la masa fecal. Ceruminolítico por disolución de lípidos.",
    farmacocinetica: "Absorción sistémica mínima en condiciones normales."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula oral", concentracion_texto: "100 mg", valor_concentracion: 100, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Solución oral/pediátrica", concentracion_texto: "2.5 mg/ml, 10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Enema rectal", concentracion_texto: "120 mg", valor_concentracion: 120, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Gotas óticas", concentracion_texto: "0.5% (Waxsol)", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
