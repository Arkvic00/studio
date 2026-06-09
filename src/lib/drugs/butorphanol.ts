import type { Drug } from '@/lib/types';

export const butorphanolDrug: Drug = {
  id: "butorphanol",
  meta_data: {
    nombre_generico: "Butorfanol",
    nombres_comerciales: ["Alvegesic", "Butador", "Dolorex", "Torbugesic", "Torbutrol", "Torphadine", "Torphasol"],
    grupo_farmacologico: "Opioide agonista kappa y antagonista mu; Antitusivo",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Analgesia por afinidad al receptor kappa y propiedades antagonistas mu.",
      "Potente antitusivo por depresión central del mecanismo de la tos.",
      "Inicio de acción muy rápido pero duración corta (45 min a 4 horas).",
      "Suele combinarse con acepromazina o agonistas alfa-2 para sedación profunda.",
      "Puede antagonizar parcialmente los efectos de agonistas mu puros (ej. metadona, fentanilo).",
      "No es adecuado para el manejo del dolor severo."
    ],
    usos_principales: "Manejo del dolor perioperatorio leve, sedación (en combinación) y control de la tos no productiva aguda o crónica.",
    inicio_accion: "Muy rápido (minutos)",
    duracion_efecto: "45 min a 4 horas"
  },
  informacion_cliente: [
    "Medicamento sujeto a control veterinario.",
    "Puede causar una sedación leve cuando se usa como antitusivo.",
    "Informe si nota que el animal parece muy decaído o si la tos no mejora.",
    "No usar en perros con tos productiva (con flemas)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Analgesia perioperatoria",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.2,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Antitusivo (Parenteral)",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Antitusivo (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Analgesia perioperatoria",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.2,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "La duración de la analgesia en gatos suele ser de 2 a 4 horas."
      }
    ],
    huron: [
      {
        indicacion: "Analgesia",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.1,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 a 6 horas", intervalo_horas: 4 }
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.1,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 horas", intervalo_horas: 4 }
      }
    ],
    cobaya: [
      {
        indicacion: "Analgesia",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.1,
          dosis_min: 0.2,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 horas", intervalo_horas: 4 }
      }
    ],
    roedores: [
      {
        indicacion: "Chinchillas: Analgesia",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 horas", intervalo_horas: 4 }
      },
      {
        indicacion: "Ratas, Ratones, Hámsteres: Analgesia",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 horas", intervalo_horas: 4 }
      }
    ],
    primates: [
      {
        indicacion: "Analgesia",
        vias: ["IV", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.015,
          dosis_min: 0.01,
          dosis_max: 0.02,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      }
    ],
    petauro: [
      {
        indicacion: "Analgesia",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    erizo: [
      {
        indicacion: "Analgesia",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.2,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Analgesia General",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.15,
          dosis_min: 0.3,
          dosis_max: 4.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 2 a 12 horas", intervalo_horas: 6 },
        notas_tecnicas: "Usar el extremo inferior del rango en aves rapaces."
      }
    ],
    reptil: [
      {
        indicacion: "Sedación (No analgésico probado)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Proporciona sedación pero no hay evidencia clara de eficacia analgésica en reptiles."
      },
      {
        indicacion: "Dragones barbudos e Iguanas verdes",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Ranas leopardo",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.2,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    peces: [
      {
        indicacion: "Analgesia (General)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 0.25,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Carpas Koi (Cirugía abdominal)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Ha mostrado beneficios tras cirugía abdominal en Koi. Vigilar flotabilidad."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedades del tracto respiratorio inferior con producción copiosa de moco.",
      "Premedicación cuando se anticipa el uso de agonistas mu potentes (fentanilo/metadona) si se requiere analgesia máxima.",
      "Carpas Koi: Puede disminuir la ventilación y causar problemas de flotabilidad."
    ],
    efectos_adversos: [
      "Sedación leve (especialmente con dosis antitusivas).",
      "Depresión respiratoria (rara a dosis clínicas).",
      "Bradicardia (rara).",
      "Atraviesa placenta (sedación en neonatos)."
    ],
    monitoreo_recomendado: [
      "Escalas de dolor",
      "Frecuencia respiratoria",
      "Estado de consciencia (sedación)"
    ],
    instrucciones_manejo: "Proteger de la luz. Metabolismo hepático (prolongación de efectos en insuficiencia hepática).",
    sobredosis: {
      signos: ["Sedación profunda", "Depresión respiratoria", "Bradicardia"],
      tratamiento: "Naloxona como antagonista específico. Soporte ventilatorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anestésicos", efecto: "Reduce las dosis requeridas para inducción y mantenimiento.", severidad: "Importante" },
      { farmaco: "Agonistas mu puros", efecto: "El butorfanol reduce la eficacia analgésica de estos fármacos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de receptores opioides kappa y antagonista de receptores mu.",
    farmacocinetica: "Metabolismo hepático. Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tabletas", concentracion_texto: "5 mg, 10 mg", valor_concentracion: 5, unidad_concentracion: "mg", es_divisible: true }
  ]
};
