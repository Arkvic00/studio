import type { Drug } from '@/lib/types';

export const haloperidolDrug: Drug = {
  id: "haloperidol",
  meta_data: {
    nombre_generico: "Haloperidol",
    nombres_comerciales: ["Haldol", "Halkid"],
    grupo_farmacologico: "Antipsicótico; Antagonista dopaminérgico (Butirofenona)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potente antagonista de los receptores de dopamina D2 en el SNC.",
      "Uso principal en aves para el control de picaje y automutilación.",
      "Debe acompañarse siempre de un plan de modificación conductual y enriquecimiento ambiental.",
      "En peces koi, se usa para inducir la ovulación junto con LHRHa.",
      "Riesgo de efectos secundarios extrapiramidales (temblores, rigidez)."
    ],
    usos_principales: "Tratamiento de trastornos compulsivos en aves y primates. Inducción de la ovulación en carpas koi.",
    inicio_accion: "Rápido",
    duracion_efecto: "12 a 24 horas (oral); hasta 3 semanas (inyectable de depósito)"
  },
  informacion_cliente: [
    "Medicamento para trastornos de comportamiento severos.",
    "Puede causar somnolencia o cambios en la forma de caminar.",
    "En aves, vigilar si el animal deja de comer o parece muy rígido.",
    "El efecto máximo puede tardar días en observarse."
  ],
  parametros_dosificacion: {
    primates: [
      {
        indicacion: "Trastornos conductuales",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.04,
          dosis_min: 0.03,
          dosis_max: 0.05,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Picaje de plumas / Automutilación (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.1,
          dosis_max: 0.9,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Picaje (Inyectable de larga duración)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 14 a 21 días", intervalo_horas: 336 }
      }
    ],
    reptil: [
      {
        indicacion: "Boidos: Trastornos conductuales",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 0.5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 7 a 14 días", intervalo_horas: 168 }
      }
    ],
    peces: [
      {
        indicacion: "Inducción de ovulación (Carpas Koi)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar junto con extracto hipofisario y LHRHa."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a las butirofenonas.",
      "Enfermedad cardíaca preexistente.",
      "Historial de convulsiones.",
      "Hipopotasemia severa."
    ],
    efectos_adversos: [
      "Efectos extrapiramidales (temblores, rigidez, ataxia).",
      "Sedación profunda.",
      "Anorexia.",
      "Arritmias (prolongación del intervalo QT)."
    ],
    monitoreo_recomendado: [
      "Estado neurológico y motor",
      "Ingesta de alimento en aves",
      "Frecuencia cardíaca"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Rigidez muscular severa", "Depresión profunda", "Coma"],
      tratamiento: "Soporte sintomático; difenhidramina puede ayudar con los efectos extrapiramidales."
    },
    interacciones_farmacologicas: [
      { farmaco: "IMAOs / Tramadol", efecto: "Evitar uso conjunto; riesgo de toxicidad central.", severidad: "Importante" },
      { farmaco: "Itraconazol", efecto: "Puede inhibir el metabolismo del haloperidol.", severidad: "Moderada" },
      { farmaco: "Fármacos que prolongan el QT", efecto: "Aumenta riesgo de arritmias fatales.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista potente de los receptores dopaminérgicos D2 centrales. También bloquea receptores alfa-1, histaminérgicos y colinérgicos.",
    farmacocinetica: "Metabolismo hepático. Excreción renal y fecal."
  },
  presentaciones_comerciales: [
    { tipo: "Solución oral", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "5 mg/ml", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
