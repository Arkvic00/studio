import type { Drug } from '@/lib/types';

export const sterculiaDrug: Drug = {
  id: "sterculia",
  meta_data: {
    nombre_generico: "Sterculia",
    nombres_comerciales: ["Peridale", "Normacol"],
    grupo_farmacologico: "Laxante formador de masa",
    status_regulatorio: "AVM-GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Fibra natural inerte que aumenta el volumen fecal.",
      "Estimula el peristaltismo intestinal por estiramiento de las paredes.",
      "Útil en el manejo de sacos anales impactados.",
      "Debe administrarse con abundante agua para evitar obstrucciones.",
      "Seguro para uso a largo plazo."
    ],
    usos_principales: "Tratamiento del estreñimiento, diarrea y manejo de sacos anales impactados en perros y gatos.",
    inicio_accion: "12 a 24 horas",
    duracion_efecto: "Durante el tránsito intestinal"
  },
  informacion_cliente: [
    "Asegúrese de que su mascota beba mucha agua durante el tratamiento.",
    "Puede espolvorear los gránulos directamente sobre la comida.",
    "Informe si nota hinchazón abdominal o si el animal no defeca en 24h.",
    "No usar si sospecha de una obstrucción intestinal completa."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estreñimiento / Sacos anales / Diarrea",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3,
          dosis_min: 1.5,
          dosis_max: 4,
          unidad_calculo: "gramos por perro"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "<5kg: 1.5g q24h. 5-15kg: 3g q12-24h. >15kg: 4g q12-24h."
      }
    ],
    gato: [
      {
        indicacion: "Estreñimiento / Bolas de pelo",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "cápsula (Adultos 1 q12h; Gatitos 1 q24h)"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción intestinal mecánica.",
      "Antes de cirugías intestinales (enterotomía).",
      "Animales gravemente deshidratados."
    ],
    efectos_adversos: [
      "Flatulencia.",
      "Hinchazón abdominal.",
      "Impactación (si no se aporta suficiente agua)."
    ],
    monitoreo_recomendado: [
      "Consistencia de las heces",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Administrar con abundante líquido. No forzar la ingestión de gránulos secos.",
    sobredosis: {
      signos: ["Hinchazón severa", "Dolor abdominal"],
      tratamiento: "Soporte con fluidos y cese del tratamiento."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Polisacárido no absorbible que retiene agua y aumenta el volumen fecal, estimulando mecánicamente la motilidad.",
    farmacocinetica: "Acción puramente local."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gránulos orales",
      concentracion_texto: "98% Sterculia",
      valor_concentracion: 98,
      unidad_concentracion: "%",
      es_divisible: false
    }
  ]
};
