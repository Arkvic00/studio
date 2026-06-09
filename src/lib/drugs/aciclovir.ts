import type { Drug } from '@/lib/types';

export const aciclovirDrug: Drug = {
  id: "aciclovir",
  meta_data: {
    nombre_generico: "Aciclovir",
    nombres_comerciales: ["Zovirax", "Aciclovir*"],
    grupo_farmacologico: "Antiviral (Inhibidor de la ADN polimerasa viral)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la replicación viral; depende de la timidina quinasa viral para su activación.",
      "Virostático: no erradica infecciones latentes.",
      "Eficacia cuestionable en gatos; considerar ganciclovir o famciclovir primero.",
      "Sistémicamente tóxico en gatos (usar solo vía oftálmica en esta especie).",
      "Útil en enfermedad de Pacheco en psitácidas y herpesvirus en quelonios."
    ],
    usos_principales: "Manejo de herpesvirus ocular (FHV-1) en gatos y mamíferos. Infecciones sistémicas por herpesvirus en aves (Pacheco) y reptiles (quelonios).",
    inicio_accion: "Variable",
    duracion_efecto: "Requiere aplicaciones frecuentes"
  },
  informacion_cliente: [
    "No continuar el tratamiento por más de 3 semanas.",
    "Puede causar irritación ocular; si esto ocurre, reducir la frecuencia.",
    "En aves, puede llegar a causar vómitos."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Herpesvirus felino-1 (FHV-1) ocular",
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
        notas_tecnicas: "La eficacia clínica es cuestionable. La administración sistémica está contraindicada por toxicidad."
      }
    ],
    conejo: [
      {
        indicacion: "Lesiones por herpesvirus",
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
        indicacion: "Rapaces (Raptors): Herpesvirus sistémico",
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
        indicacion: "Psitácidas (Psittacids): Herpesvirus (Pacheco)",
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
        indicacion: "Psitácidas (Psittacids): Herpesvirus (Pacheco)",
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
        indicacion: "Psitácidas (Psittacids): Profilaxis en brotes",
        vias: ["PO (En alimento)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 400,
          unidad_calculo: "mg/kg de alimento"
        }
      },
      {
        indicacion: "Canarios (Canaries): Canary Pox",
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
        indicacion: "Especies Testudo (Tortugas terrestres): Herpesvirus",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 80,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 24 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Especies Testudo: Lesiones orales",
        vias: ["Tópica (Lesiones orales)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 24 horas",
          intervalo_horas: 12
        }
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
      "Administración sistémica en gatos (tóxica).",
      "No hay contraindicaciones reportadas para preparaciones oftálmicas."
    ],
    efectos_adversos: [
      "Irritación ocular localizada.",
      "Vómitos en aves."
    ],
    monitoreo_recomendado: [
      "Integridad de la superficie corneal",
      "Estado digestivo en aves"
    ],
    instrucciones_manejo: "Precauciones normales.",
    sobredosis: {
      signos: ["Vómitos", "Irritación ocular severa"],
      tratamiento: "Soporte."
    },
    interacciones_farmacologicas: [
      { farmaco: "Bencilpenicilina", efecto: "Reducción de la eliminación de aciclovir en tortugas de orejas rojas (Red-eared sliders).", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la replicación viral al bloquear la ADN polimerasa viral.",
    farmacocinetica: "Requiere activación por la timidina quinasa del propio virus."
  },
  presentaciones_comerciales: [
    { tipo: "Ungüento oftálmico", concentracion_texto: "3%", valor_concentracion: 30, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "200 mg, 800 mg", valor_concentracion: 200, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "200 mg/5ml, 400 mg/5ml", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "250 mg, 500 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Ungüento tópico", concentracion_texto: "5%", valor_concentracion: 50, unidad_concentracion: "mg/g", es_divisible: false }
  ]
};
