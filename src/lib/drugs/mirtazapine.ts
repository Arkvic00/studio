import type { Drug } from '@/lib/types';

export const mirtazapineDrug: Drug = {
  id: "mirtazapine",
  meta_data: {
    nombre_generico: "Mirtazapina",
    nombres_comerciales: ["Zispin", "Mirataz"],
    grupo_farmacologico: "Antidepresivo tricíclico; Estimulante del apetito",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antagonista de receptores alfa-2 centrales, aumentando noradrenalina y serotonina.",
      "Potente estimulante del apetito en perros y gatos.",
      "Eficaz en gatos con enfermedad renal crónica estable.",
      "Posee efectos antieméticos adyuvantes.",
      "Efecto de sedación marcado en algunos individuos."
    ],
    usos_principales: "Estimulación del apetito en anorexia crónica o aguda y manejo de náuseas.",
    inicio_accion: "Rápido (horas)",
    duracion_efecto: "24 a 48 horas"
  },
  informacion_cliente: [
    "Medicamento para ayudar a que su mascota vuelva a comer.",
    "Puede causar sueño profundo o cambios en el comportamiento (maullidos más frecuentes).",
    "No usar si el animal tiene problemas de médula ósea.",
    "Informe si nota temblores o agitación extrema.",
    "Existe una versión en gel para aplicar en la oreja del gato."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estimulación del apetito",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.2,
          dosis_min: 1.1,
          dosis_max: 1.3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Estimulación del apetito",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.9,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 48 horas (puede aumentarse a q24h según respuesta)", intervalo_horas: 48 },
        notas_tecnicas: "Reducir dosis o frecuencia en gatos con enfermedad renal o hepática avanzada."
      }
    ],
    conejo: [
      {
        indicacion: "Estimulación del apetito",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 2 días", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedades hematológicas (discrasias sanguíneas).",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Sedación profunda.",
      "Vocalización aumentada.",
      "Ataxia e inquietud.",
      "Hipotensión.",
      "Dermatitis en el sitio de aplicación (si es transdérmico)."
    ],
    monitoreo_recomendado: [
      "Ingesta de alimento y peso",
      "Estado mental",
      "Hemograma en tratamientos largos"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Sedación extrema", "Agitación", "Taquicardia"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "IMAOs / ISRS", efecto: "Riesgo de síndrome de serotonina.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista de receptores alfa-2 adrenérgicos centrales, 5-HT2 y 5-HT3, y H1 de histamina.",
    farmacocinetica: "Metabolismo hepático y excreción renal/fecal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "15 mg", valor_concentracion: 15, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Gel transdérmico", concentracion_texto: "20 mg/g", valor_concentracion: 20, unidad_concentracion: "mg/g", es_divisible: false }
  ]
};
