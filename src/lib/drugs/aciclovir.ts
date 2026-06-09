import type { Drug } from '@/lib/types';

export const aciclovirDrug: Drug = {
  id: "aciclovir",
  meta_data: {
    nombre_generico: "Aciclovir",
    nombres_comerciales: ["Zovirax", "Aciclovir*"],
    grupo_farmacologico: "Antiviral",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la replicación viral (ADN polimerasa viral).",
      "Es virostático: incapaz de erradicar infecciones virales latentes.",
      "La eficacia clínica en gatos es cuestionable; requiere aplicaciones frecuentes (5 veces al día) para alcanzar concentraciones corneales.",
      "En casos graves de ulceración por FHV-1, considerar famciclovir o ganciclovir antes que aciclovir."
    ],
    usos_principales: "Manejo de lesiones por herpesvirus ocular en mamíferos. Infecciones sistémicas por herpesvirus en aves (ej: enfermedad de Pacheco en psitácidas). Tratamiento de herpesvirus en quelonios (reptiles).",
    inicio_accion: "Variable (depende de la replicación viral)",
    duracion_efecto: "Requiere administración frecuente debido a su naturaleza virostática"
  },
  informacion_cliente: [
    "No continuar el tratamiento por más de 3 semanas.",
    "Puede causar irritación en el ojo; si esto ocurre, se debe reducir la frecuencia de aplicación.",
    "Informar si el animal presenta vómitos (especialmente en aves)."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Gatos: Herpesvirus felino-1 (FHV-1) ocular",
        vias: ["Tópica ocular (Ungüento 3%)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación pequeña"
        },
        frecuencia: {
          texto_ui: "5 veces al día (Máximo 3 semanas)",
          intervalo_horas: 4
        },
        notas_tecnicas: "¡ADVERTENCIA!: El aciclovir sistémico (oral/inyectable) es TÓXICO en gatos. Usar solo la preparación oftálmica."
      }
    ],
    conejo: [
      {
        indicacion: "Conejos: Lesiones por herpesvirus",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación"
        },
        frecuencia: {
          texto_ui: "1 a 5 veces al día",
          intervalo_horas: 6
        }
      }
    ],
    ave: [
      {
        indicacion: "Aves Rapaces (Raptors): Herpesvirus sistémico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 330,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        duracion_tratamiento: "7 a 14 días"
      },
      {
        indicacion: "Aves Psitácidas: Herpesvirus (Enfermedad de Pacheco)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          dosis_min: 20,
          dosis_max: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        duracion_tratamiento: "7 días"
      },
      {
        indicacion: "Aves Psitácidas: Herpesvirus (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 80,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        },
        duracion_tratamiento: "7 días"
      },
      {
        indicacion: "Aves Psitácidas: Herpesvirus (En aviarios)",
        vias: ["PO (en alimento)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 400,
          unidad_calculo: "mg/kg de alimento"
        },
        notas_tecnicas: "Uso para profilaxis en brotes de herpesvirus."
      },
      {
        indicacion: "Canarios: Canary Pox",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 80,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 horas",
          intervalo_horas: 6
        },
        duracion_tratamiento: "10 días"
      }
    ],
    reptil: [
      {
        indicacion: "Especies Testudo (Tortugas): Herpesvirus",
        vias: ["PO", "Tópica (lesiones orales)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 80,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 24 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Usado para tratar infecciones por herpesvirus en quelonios."
      },
      {
        indicacion: "Especies Terrapene (Tortugas de caja): Herpesvirus",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay información disponible para la preparación oftálmica en la mayoría de especies."
    ],
    contraindicaciones_especie: {
      "Gato": "¡TÓXICO!: El aciclovir SISTÉMICO (oral o inyectable) es altamente tóxico en gatos. Usar solo preparaciones tópicas oculares bajo estricta vigilancia.",
      "Perro": "No aplicable / No recomendado según literatura provista."
    },
    efectos_adversos: [
      "Irritación ocular (reducir frecuencia si ocurre).",
      "Vómitos (reportado en aves)."
    ],
    monitoreo_recomendado: [
      "Integridad de la superficie ocular",
      "Estado digestivo en aves"
    ],
    instrucciones_manejo: "Observar precauciones normales de manejo clínico.",
    sobredosis: {
      signos: ["Vómitos", "Irritación severa"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      {
        farmaco: "Bencilpenicilina",
        efecto: "Asociado con la reducción de la eliminación de aciclovir en tortugas de orejas rojas (Red-eared sliders).",
        severidad: "Importante"
      }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la replicación viral mediante la inhibición de la ADN polimerasa viral. Depende de la timidina quinasa viral para su fosforilación (activación).",
    farmacocinetica: "Es virostático. Requiere niveles terapéuticos constantes para ser efectivo."
  },
  presentaciones_comerciales: [
    {
      tipo: "Ungüento oftálmico",
      concentracion_texto: "3%",
      valor_concentracion: 30,
      unidad_concentracion: "mg/g",
      es_divisible: false
    },
    {
      tipo: "Tableta oral",
      concentracion_texto: "200 mg, 800 mg",
      valor_concentracion: 200,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Suspensión oral",
      concentracion_texto: "200 mg/5 ml, 400 mg/5 ml",
      valor_concentracion: 40,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "250 mg, 500 mg",
      valor_concentracion: 250,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Ungüento tópico",
      concentracion_texto: "5%",
      valor_concentracion: 50,
      unidad_concentracion: "mg/g",
      es_divisible: false
    }
  ]
};