import type { Drug } from '@/lib/types';

export const levamisoleDrug: Drug = {
  id: "levamisole",
  meta_data: {
    nombre_generico: "Levamisol",
    nombres_comerciales: ["Chanaverm", "Levacide", "Levamole"],
    grupo_farmacologico: "Antihelmíntico (Imidatiazol); Inmunoestimulante",
    status_regulatorio: "POM-VPS, ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Interfiere con la transmisión nerviosa del parásito causando parálisis espástica.",
      "Inmunoestimulante útil en algunas especies.",
      "Tratamiento de nematodos pulmonares en erizos.",
      "Tratamiento de nematodos GI no enquistados en peces (ej. Camallanus).",
      "Eficacia limitada contra huevos; repetir a las 3 semanas.",
      "Bajo índice terapéutico en aves; riesgo de toxicidad severa."
    ],
    usos_principales: "Tratamiento de nematodos en erizos, peces, reptiles y anfibios. Inmunoestimulante en primates.",
    inicio_accion: "Rápido",
    duracion_efecto: "Ciclo de tratamiento puntual"
  },
  informacion_cliente: [
    "Informe si nota pérdida de apetito o debilidad tras el tratamiento.",
    "En peces, seguir estrictamente las guías para no contaminar el agua.",
    "No se recomienda su uso en aves debido al riesgo de envenenamiento.",
    "Puede causar esterilidad transitoria en peces cebra (Zebrafish)."
  ],
  parametros_dosificacion: {
    primates: [
      {
        indicacion: "Nematodos (Parenteral)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir a los 14 días si es necesario", intervalo_horas: 336 }
      },
      {
        indicacion: "Nematodos (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_min: 5,
          dosis_max: 10,
          dosis_recomendada: 7.5,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    erizo: [
      {
        indicacion: "Nematodos pulmonares",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir a las 48h, luego a los 14 días", intervalo_horas: 48 }
      }
    ],
    petauro: [
      {
        indicacion: "Nematodos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "¡NO RECOMENDADO!",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "N/A"
        },
        notas_tecnicas: "Bajo índice terapéutico. Riesgo de toxicidad severa y muerte reportada en múltiples especies."
      }
    ],
    reptil: [
      {
        indicacion: "Nematodos",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_min: 5,
          dosis_max: 10,
          dosis_recomendada: 7.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Parásitos",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          dosis_min: 6.5,
          dosis_max: 13.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir a los 10 días", intervalo_horas: 240 }
      }
    ],
    peces: [
      {
        indicacion: "Nematodos GI (En alimento)",
        vias: ["PO (Alimento)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6.25,
          dosis_min: 2.5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 7 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Inmersión (General)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_min: 1,
          dosis_max: 2,
          dosis_recomendada: 1.5,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "24 horas"
      },
      {
        indicacion: "Inmersión corta (Choque)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 50,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "2 horas"
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales debilitados.",
      "Aves (Toxicidad severa).",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Anorexia en dosis altas.",
      "Vómitos y salivación en mamíferos.",
      "Esterilidad en pez cebra.",
      "Incoordinación motora tras sobredosis."
    ],
    monitoreo_recomendado: [
      "Comportamiento de nado en peces",
      "Estado general del animal"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos severos", "Temblores", "Parálisis muscular"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista colinérgico que estimula los ganglios nerviosos del parásito, provocando contracción muscular tónica y parálisis.",
    farmacocinetica: "Absorción rápida por múltiples vías."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "7.5% (75 mg/ml)", valor_concentracion: 75, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Solución oral", concentracion_texto: "7.5%", valor_concentracion: 75, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
