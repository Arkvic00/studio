import type { Drug } from '@/lib/types';

export const ciprofloxacinDrug: Drug = {
  id: "ciprofloxacin",
  meta_data: {
    nombre_generico: "Ciprofloxacina",
    nombres_comerciales: ["Ciloxan", "Ciproxin"],
    grupo_farmacologico: "Fluoroquinolona; Inhibidor de la ADN girasa",
    status_regulatorio: "POM. Categoría B (Restringido) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida dependiente de concentración.",
      "Uso reservado para infecciones donde las pruebas de sensibilidad indiquen que otros antibióticos no serán efectivos.",
      "Amplio espectro contra Gram-negativos y algunos Gram-positivos aeróbicos.",
      "Activo contra patógenos oculares importantes como Pseudomonas aeruginosa.",
      "Relativamente contraindicado en animales jóvenes por riesgo de daño articular."
    ],
    usos_principales: "Tratamiento de infecciones oculares graves en perros y gatos. Manejo sistémico de infecciones en exóticos. Uso tópico en reptiles para heridas o estomatitis.",
    inicio_accion: "Rápido",
    duracion_efecto: "Requiere administración cada 12 a 24 horas (sistémico)"
  },
  informacion_cliente: [
    "La presentación en gotas para ojos puede causar picor o irritación momentánea.",
    "Completar el ciclo de tratamiento estrictamente según lo prescrito para evitar resistencias.",
    "No usar en cachorros o gatitos en crecimiento a menos que sea vital, por riesgo de problemas en las articulaciones.",
    "Informe si nota que su mascota tiene dificultad para caminar o dolor articular."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infección ocular susceptible",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 6 horas (en casos graves q30-120min inicial)",
          intervalo_horas: 6
        }
      }
    ],
    gato: [
      {
        indicacion: "Infección ocular susceptible",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 6 horas (en casos graves q30-120min inicial)",
          intervalo_horas: 6
        }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Tópico ocular",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "gota" },
        frecuencia: { texto_ui: "Cada 6 horas (Carga: q15min x 4)", intervalo_horas: 6 }
      }
    ],
    cobaya: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 5,
          dosis_max: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    roedores: [
      {
        indicacion: "Chinchillas / Hámsteres: Sistémica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 5,
          dosis_max: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Otros Roedores: Sistémica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 16,
          dosis_min: 7,
          dosis_max: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    primates: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    petauro: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    erizo: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 5,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones sistémicas (General)",
        vias: ["PO", "IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 5,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Aves Rapaces",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 a 48 horas",
          intervalo_horas: 36
        }
      },
      {
        indicacion: "Tópico (Heridas / Estomatitis / Ocular)",
        vias: ["Tópica"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "gota" },
        notas_tecnicas: "Aplicar en heridas, ojos o áreas de estomatitis según sea necesario."
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Sistémica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 a 48 horas por 7 días",
          intervalo_horas: 36
        }
      },
      {
        indicacion: "Anfibios: Baño terapéutico",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 625,
          dosis_min: 500,
          dosis_max: 750,
          unidad_calculo: "mg en 75 l"
        },
        frecuencia: {
          texto_ui: "Baño de 6 a 8 horas cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    peces: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 2 a 5 días",
          intervalo_horas: 72
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No usar en mamíferos pequeños en crecimiento (riesgo de artropatía).",
      "Hipersensibilidad a las quinolonas."
    ],
    precauciones: [
      "Usar con precaución en hembras reproductoras.",
      "Ajustar dosis en pacientes con insuficiencia renal severa."
    ],
    efectos_adversos: [
      "Irritación local en uso oftálmico.",
      "Alteraciones en el cartílago articular en animales jóvenes.",
      "Trastornos gastrointestinales (vómitos, anorexia).",
      "Fotosensibilidad (en humanos)."
    ],
    monitoreo_recomendado: [
      "Respuesta clínica de la infección",
      "Estado de las articulaciones en animales jóvenes",
      "Presencia de irritación ocular"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Trastornos GI severos", "Signos neurológicos raros"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Teofilina", efecto: "La ciprofloxacina puede aumentar sus niveles séricos.", severidad: "Moderada" },
      { farmaco: "Cationes divalentes (Ca, Mg, Al)", efecto: "Los antiácidos y suplementos de calcio reducen drásticamente su absorción oral.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor bactericida de la ADN girasa bacteriana, impidiendo la replicación y transcripción del material genético.",
    farmacocinetica: "Absorción oral buena en la mayoría de especies, pero varía significativamente. Buena penetración tisular."
  },
  presentaciones_comerciales: [
    { tipo: "Gotas oftálmicas", concentracion_texto: "0.3% (3 mg/ml)", valor_concentracion: 3, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Ungüento oftálmico", concentracion_texto: "0.3%", valor_concentracion: 3, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "100 mg, 250 mg, 500 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "50 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
