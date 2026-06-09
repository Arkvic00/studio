import type { Drug } from '@/lib/types';

export const salbutamolDrug: Drug = {
  id: "salbutamol",
  meta_data: {
    nombre_generico: "Salbutamol (Albuterol)",
    nombres_comerciales: ["Ventolin"],
    grupo_farmacologico: "Agonista beta-2 adrenérgico selectivo; Broncodilatador",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula los receptores beta-2 provocando relajación del músculo liso bronquial.",
      "Uso de rescate para el broncoespasmo agudo.",
      "El uso crónico en gatos puede exacerbar la inflamación pulmonar.",
      "Requiere el uso de cámaras espaciadoras.",
      "Poco efecto sobre la frecuencia cardíaca en dosis terapéuticas."
    ],
    usos_principales: "Tratamiento de la bronconstricción en asma felina y bronquitis crónica canina.",
    inicio_accion: "Muy rápido (minutos tras inhalación)",
    duracion_efecto: "4 a 6 horas"
  },
  informacion_cliente: [
    "Medicamento de rescate; úselo solo cuando el animal tenga dificultad para respirar.",
    "Debe usarse con una máscara y cámara espaciadora (AeroKat/AeroDawg).",
    "Informe si nota temblores o si su mascota se pone muy inquieta.",
    "En gatos, no debe usarse diariamente por tiempo prolongado sin supervisión."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Broncoespasmo agudo",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 200,
          dosis_min: 100,
          dosis_max: 300,
          unidad_calculo: "μg (microgramos) por perro"
        },
        frecuencia: { texto_ui: "Cada 4 a 6 horas según necesidad", intervalo_horas: 4 }
      }
    ],
    gato: [
      {
        indicacion: "Asma felina (Rescate)",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 100,
          unidad_calculo: "μg (1 pulsación) por gato"
        },
        frecuencia: { texto_ui: "Cada 4 a 6 horas según necesidad", intervalo_horas: 4 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales con arritmias cardíacas severas.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Taquicardia.",
      "Temblores musculares y agitación.",
      "Hipopotasemia (en dosis altas).",
      "Exacerbación de la inflamación si se usa crónicamente en gatos."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Esfuerzo respiratorio",
      "Potasio sérico en uso intensivo"
    ],
    instrucciones_manejo: "Asegurar que la máscara selle bien para garantizar la dosis.",
    sobredosis: {
      signos: ["Taquicardia extrema", "Temblores severos", "Hipertensión"],
      tratamiento: "Soporte sintomático; considerar beta-bloqueadores selectivos si la taquicardia es crítica."
    },
    interacciones_farmacologicas: [
      { farmaco: "Digoxina / Teofilina", efecto: "Aumento del riesgo de arritmias.", severidad: "Moderada" },
      { farmaco: "Beta-bloqueadores", efecto: "Antagonismo directo de efectos.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Activación de la adenilato ciclasa que aumenta el AMPc intracelular, reduciendo el tono del músculo liso bronquial.",
    farmacocinetica: "Acción tópica pulmonar con mínima absorción sistémica inicial."
  },
  presentaciones_comerciales: [
    { tipo: "Inhalador (Evohaler)", concentracion_texto: "100 μg por pulsación", valor_concentracion: 100, unidad_concentracion: "μg", es_divisible: false }
  ]
};
