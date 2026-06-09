import type { Drug } from '@/lib/types';

export const metronidazoleDrug: Drug = {
  id: "metronidazole",
  meta_data: {
    nombre_generico: "Metronidazol",
    nombres_comerciales: ["Metrobactin", "Stomorgyl", "Eradia", "Flagyl"],
    grupo_farmacologico: "Nitroimidazol; Antibacteriano y Antiprotozoario",
    status_regulatorio: "POM-V, POM. Categoría D (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Antibiótico bactericida para bacterias anaerobias obligadas.",
      "Antiprotozoario eficaz contra Giardia, Hexamita y Trichomonas.",
      "Atraviesa excelentemente barreras (SNC, hueso, abscesos).",
      "Posee efectos inmunomoduladores en la mucosa intestinal.",
      "Fármaco de elección para enterotoxemia por Clostridium en conejos.",
      "Riesgo de neurotoxicidad dosis-dependiente (ataxia, nystagmus)."
    ],
    usos_principales: "Tratamiento de infecciones por anaerobios, giardiasis, encefalopatía hepática y estomatitis (con espiramicina).",
    inicio_accion: "Rápido (pico oral en 1-2 horas)",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Sabor muy amargo; puede causar babeo excesivo en gatos.",
    "Informe inmediatamente si nota falta de coordinación, temblores o movimientos oculares rápidos.",
    "Evitar el uso en animales embarazados, especialmente en el primer trimestre.",
    "Completar el ciclo de tratamiento según lo indicado.",
    "Utilizar guantes para manipular el medicamento si es posible."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones anaerobias / Giardiasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 7.5,
          dosis_max: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "La dosis estándar suele ser 10-15 mg/kg. Dosis altas >25 mg/kg aumentan riesgo neurológico."
      },
      {
        indicacion: "Infecciones graves / Sepsis",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Stomorgyl (con Espiramicina)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          unidad_calculo: "mg/kg de Metronidazol"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 5 a 10 días", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones anaerobias / Enteropatías",
        vias: ["PO", "IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 7.5,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Helicobacter mustelae (Triple terapia)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 17.5,
          dosis_min: 15,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas por 14 días", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Enterotoxemia (Clostridium spiroforme)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas / Hámsteres: Giardiasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          dosis_min: 20,
          dosis_max: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Tricomoniasis / Giardia (Loros)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Palomas (Dosis única)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Protozoos (Quelonios)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 112.5,
          dosis_min: 100,
          dosis_max: 125,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única, repetir en 14 días", intervalo_horas: 336 }
      },
      {
        indicacion: "Estimulante del apetito",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 20, unidad_calculo: "mg/kg" }
      }
    ],
    axolote: [
      {
        indicacion: "Hexamitiasis / Protozoos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 3 a 5 días", intervalo_horas: 24 }
      }
    ],
    peces: [
      {
        indicacion: "Flagelados internos (Hexamita)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 25,
          unidad_calculo: "mg/l"
        },
        frecuencia: { texto_ui: "Cada 48 horas (3 dosis)", intervalo_horas: 48 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Embarazo (potencial teratógeno).",
      "Fallo hepático severo (requiere reducción drástica de dosis).",
      "Serpientes Índigo, Rey o de Cascabel (¡MORTAL!).",
      "Aves muy pequeñas (Zebra finches)."
    ],
    contraindicaciones_especie: {
      "Serpiente Índigo": "¡PROHIBIDO!: Altamente tóxico a dosis >40 mg/kg.",
      "Serpiente Rey": "¡PROHIBIDO!: Altamente tóxico.",
      "Ave": "No usar en diamantes mandarines (zebra finches)."
    },
    efectos_adversos: [
      "Neurotoxicidad: Ataxia, nystagmus, temblores, convulsiones.",
      "Vómitos y náuseas.",
      "Ptialismo (salivación por mal sabor).",
      "Hepatotoxicidad.",
      "Impairment del olfato en perros de detección."
    ],
    monitoreo_recomendado: [
      "Estado neurológico y marcha",
      "Función hepática",
      "Hematología en tratamientos largos"
    ],
    instrucciones_manejo: "Usar guantes. Inyectable IV debe ser una infusión lenta. Relativamente insoluble en agua (mezclar bien para peces).",
    sobredosis: {
      signos: ["Neurotoxicidad aguda", "Convulsiones"],
      tratamiento: "Cese inmediato. Diazepam IV para controlar signos neurológicos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina", efecto: "Inhibe el metabolismo del metronidazol, aumentando su toxicidad.", severidad: "Importante" },
      { farmaco: "Fenobarbital", efecto: "Acelera el metabolismo del metronidazol, bajando su eficacia.", severidad: "Moderada" },
      { farmaco: "Espiramicina", efecto: "Sinergia en infecciones orales.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se reduce espontáneamente en condiciones anaerobias a metabolitos que dañan el ADN y causan la muerte celular.",
    farmacocinetica: "Excelente absorción oral y distribución tisular profunda (incluye SNC y hueso)."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable IV", concentracion_texto: "5 mg/ml", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "250 mg, 500 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "40 mg/ml, 125 mg/ml", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Stomorgyl 10", concentracion_texto: "125 mg Metr. + 234.4 mg Spir.", valor_concentracion: 125, unidad_concentracion: "mg", es_divisible: true }
  ]
};
