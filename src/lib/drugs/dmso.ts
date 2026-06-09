import type { Drug } from '@/lib/types';

export const dmsoDrug: Drug = {
  id: "dmso",
  meta_data: {
    nombre_generico: "Dimetilsulfóxido (DMSO)",
    nombres_comerciales: ["Rimso-50"],
    grupo_farmacologico: "Antiinflamatorio; Antioxidante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Se absorbe muy rápidamente a través de la piel y se distribuye por todo el cuerpo.",
      "Posee actividad antioxidante y antiinflamatoria potente.",
      "Utilizado para tratar la extravasación de agentes citotóxicos vesicantes (ej. doxorrubicina).",
      "Produce un olor sulfúrico característico en el aliento y la piel tras su uso.",
      "En humanos, produce una sensación de sabor a ajo."
    ],
    usos_principales: "Tratamiento de extravasación de doxorrubicina, cistitis hemorrágica por ciclofosfamida, amiloidosis renal, calcinosis cutis en perros y pododermatitis (bumblefoot) en aves.",
    inicio_accion: "Inmediato (absorción percutánea)",
    duracion_efecto: "Variable"
  },
  informacion_cliente: [
    "Usar siempre guantes para la aplicación tópica; el fármaco se absorbe instantáneamente por la piel humana.",
    "El animal y su aliento pueden desprender un fuerte olor a azufre o ajo durante el tratamiento.",
    "Mantener el envase bien cerrado ya que absorbe la humedad del aire (higroscópico).",
    "Informe si nota irritación severa o enrojecimiento en la zona tratada."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Calcinosis cutis",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación de solución al 90% en la mitad del área afectada"
        },
        frecuencia: { texto_ui: "Días alternos", intervalo_horas: 48 },
        notas_tecnicas: "La reabsorción rápida de calcio puede causar calcificación renal. Monitorear calcio sérico."
      },
      {
        indicacion: "Amiloidosis renal",
        vias: ["SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 80,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "SC 3 veces por semana; PO cada 24 horas (125-300 mg/kg)", intervalo_horas: 24 },
        notas_tecnicas: "Eficacia no totalmente probada pero reportada en protocolos clínicos."
      },
      {
        indicacion: "Extravasación de Doxorrubicina",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación tópica q8-12h"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas por 14 días", intervalo_horas: 12 },
        notas_tecnicas: "No exceder 20 ml totales al día. No aplicar por más de 14 días."
      }
    ],
    ave: [
      {
        indicacion: "Pododermatitis (Bumblefoot) / Antiinflamatorio",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación local"
        },
        notas_tecnicas: "Puede usarse como vehículo para otros fármacos tópicos para mejorar su penetración."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas conocidas en el manejo de extravasación."
    ],
    efectos_adversos: [
      "Irritación local y eritema (por liberación de histamina).",
      "Opacidad del cristalino en perros tras uso crónico a dosis altas (reversible).",
      "Hemólisis y diuresis si se administra IV en concentraciones >20%.",
      "Calcificación renal secundaria en tratamiento de calcinosis cutis."
    ],
    monitoreo_recomendado: [
      "Niveles de calcio sérico en calcinosis cutis",
      "Estado de la superficie ocular en uso crónico",
      "Integridad de la piel en el sitio de aplicación"
    ],
    instrucciones_manejo: "Higroscópico. Mantener en envase hermético. El DMSO de grado industrial no debe usarse con fines médicos.",
    sobredosis: {
      signos: ["Irritación cutánea severa", "Signos de hemólisis (si IV)"],
      tratamiento: "Lavar la piel con abundante agua; soporte renal si hay hemólisis."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fármacos tópicos tóxicos", efecto: "Aumenta drásticamente su absorción sistémica y toxicidad.", severidad: "Grave" },
      { farmaco: "Dexrazoxano", efecto: "El DMSO puede reducir la eficacia del dexrazoxano en extravasación.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Actúa como barrendero de radicales libres (antioxidante), estabiliza membranas y tiene propiedades analgésicas y vasodilatadoras locales.",
    farmacocinetica: "Absorción percutánea inmediata. Excreción renal y pulmonar (causando el olor)."
  },
  presentaciones_comerciales: [
    { tipo: "Líquido médico", concentracion_texto: "50% (Rimso-50)", valor_concentracion: 500, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Gel tópico", concentracion_texto: "90%", valor_concentracion: 900, unidad_concentracion: "mg/g", es_divisible: false }
  ]
};
