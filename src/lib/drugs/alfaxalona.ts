import type { Drug } from '@/lib/types';

export const alfaxalonaDrug: Drug = {
  id: "alfaxalona",
  meta_data: {
    nombre_generico: "Alfaxalona",
    nombres_comerciales: ["Alfaxan"],
    grupo_farmacologico: "Agente anestésico inyectable (depresor del SNC)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente de inducción anestésica antes de la anestesia inhalatoria o como agente único para procedimientos breves.",
      "La premedicación reduce significativamente la dosis necesaria.",
      "Administrar lentamente 'a efecto' para prevenir sobredosis inadvertida.",
      "La analgesia es insuficiente para cirugía: debe incorporarse un protocolo analgésico (ej. opioides).",
      "En reptiles, administrar en la mitad craneal del cuerpo para evitar el sistema porta-renal."
    ],
    usos_principales: "Inducción y mantenimiento de la anestesia en mamíferos, aves, reptiles, anfibios y peces.",
    inicio_accion: "Rápido (tras inyección IV)",
    duracion_efecto: "Corta; requiere infusión continua o bolos para mantenimiento."
  },
  informacion_cliente: [
    "Medicamento de uso estrictamente hospitalario.",
    "Puede ocurrir un aumento transitorio de la frecuencia cardíaca tras la inyección.",
    "El vial de dosis única no contiene conservantes; debe desecharse 24h después de abrirse."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Perros (No premedicados): Inducción",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 3, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Administrar lentamente. Se pueden usar dosis menores."
      },
      {
        indicacion: "Perros (Premedicados): Inducción",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Administrar lentamente a efecto."
      },
      {
        indicacion: "Perros: Mantenimiento (CRI)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 6, dosis_max: 9, dosis_recomendada: 7.5, unidad_calculo: "mg/kg/h" }
      },
      {
        indicacion: "Perros: Mantenimiento (Bolos)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 1, dosis_max: 1.5, dosis_recomendada: 1.25, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 10 minutos", intervalo_horas: 0.16 }
      }
    ],
    gato: [
      {
        indicacion: "Gatos: Inducción",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 2, dosis_max: 5, dosis_recomendada: 3.5, unidad_calculo: "mg/kg" },
        notas_tecnicas: "El extremo inferior del rango suele ser adecuado."
      },
      {
        indicacion: "Gatos: Mantenimiento (CRI)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 7, dosis_max: 10, dosis_recomendada: 8.5, unidad_calculo: "mg/kg/h" }
      },
      {
        indicacion: "Gatos: Mantenimiento (Bolos)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 1, dosis_max: 1.5, dosis_recomendada: 1.25, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 10 minutos", intervalo_horas: 0.16 }
      }
    ],
    huron: [
      {
        indicacion: "Hurones: Sedación variable / Inducción",
        vias: ["IV", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 5, dosis_max: 10, dosis_recomendada: 7.5, unidad_calculo: "mg/kg" }
      }
    ],
    conejo: [
      {
        indicacion: "Conejos: Inducción (Tras premedicación)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 1, dosis_max: 3, dosis_recomendada: 2, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Autorizado tras premedicación con opioides o alfa-2."
      },
      {
        indicacion: "Conejos: Inducción (Tras premedicación)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 3, dosis_max: 6, dosis_recomendada: 4.5, unidad_calculo: "mg/kg" }
      }
    ],
    cobaya: [
      {
        indicacion: "Cobayas: Anestesia",
        vias: ["IM", "IP"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 20, unidad_calculo: "mg/kg" }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas (Unpremedicated): Anestesia",
        vias: ["IV", "IP"],
        math: { tipo_calculo: "mg_kg", dosis_min: 2, dosis_max: 5, dosis_recomendada: 3.5, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Ratas (Premedicadas): Anestesia",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 2, dosis_max: 3, dosis_recomendada: 2.5, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Tras premedicación con opioides y midazolam."
      },
      {
        indicacion: "Otros Roedores: Anestesia",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 20, unidad_calculo: "mg/kg" }
      }
    ],
    primates: [
      {
        indicacion: "Titíes (Marmosets): Anestesia",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 12, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Otros Primates: Sedación combinada",
        vias: ["SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Combinar con medetomidina y midazolam."
      },
      {
        indicacion: "Otros Primates: Inducción (Tras sedación)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.5, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Tras sedación con dexmedetomidina, butorfanol y midazolam."
      },
      {
        indicacion: "Otros Primates: Anestesia combinada",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 1, dosis_max: 4, dosis_recomendada: 2.5, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Con ketamina o butorfanol/medetomidina."
      }
    ],
    erizo: [
      {
        indicacion: "Erizos: Anestesia combinada",
        vias: ["SC"],
        math: { tipo_calculo: "mg_kg", dosis_min: 3, dosis_max: 5, dosis_recomendada: 4, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Combinar con midazolam."
      }
    ],
    ave: [
      {
        indicacion: "Aves grandes / Aves buceadoras: Inducción",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 2, dosis_max: 4, dosis_recomendada: 3, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Administrar a efecto. Reportadas diferencias significativas entre especies."
      },
      {
        indicacion: "Periquitos (Budgerigars): Sedación corta",
        vias: ["SC"],
        math: { tipo_calculo: "mg_kg", dosis_min: 10, dosis_max: 15, dosis_recomendada: 12.5, unidad_calculo: "mg/kg" },
        notas_tecnicas: "La dosis baja es adecuada para investigaciones no invasivas cortas."
      },
      {
        indicacion: "Pinzones de Bengala: Sedación",
        vias: ["SC"],
        math: { tipo_calculo: "mg_kg", dosis_min: 10, dosis_max: 50, dosis_recomendada: 30, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Se puede dar con o sin midazolam/butorfanol. El aumento de dosis prolonga el tiempo de sedación pero no su profundidad."
      },
      {
        indicacion: "Loros Monje (Quaker parrots): ALERTA",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 10, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Induce temblores musculares si se usa sola. Mejora si se administra midazolam también."
      }
    ],
    reptil: [
      {
        indicacion: "Reptiles: Inducción / Sedación ligera",
        vias: ["IV", "IO"],
        math: { tipo_calculo: "mg_kg", dosis_min: 5, dosis_max: 12, dosis_recomendada: 8.5, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Administrar en la mitad craneal del cuerpo."
      },
      {
        indicacion: "Reptiles: Anestesia quirúrgica",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 30, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Quelonios (Tortugas): Sedación ligera",
        vias: ["IV", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 5, dosis_max: 10, dosis_recomendada: 7.5, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Quelonios (Tortugas): Anestesia quirúrgica",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 20, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Tortuga del río Macquarie",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 9, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Lagartos y Serpientes: Anestesia",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 9, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Se recomiendan dosis < 9 mg/kg."
      },
      {
        indicacion: "Iguanas Verdes: Sedación para intubación",
        vias: ["IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 5, dosis_max: 20, dosis_recomendada: 12.5, unidad_calculo: "mg/kg" },
        notas_tecnicas: "10-20 mg/kg IM o 5 mg/kg IV para permitir intubación."
      },
      {
        indicacion: "Camaleones de Velo: Sedación para intubación",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 5, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Dragones Barbudos: Anestesia",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 5, dosis_max: 12, dosis_recomendada: 8.5, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Dragones de agua chinos / Geckos Leopardo",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 5, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Galliwasps: Anestesia",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 15, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Pitones Bola: Anestesia",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 10, dosis_max: 30, dosis_recomendada: 20, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Serpientes de liga (Garter snakes)",
        vias: ["Intracelómica"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 30, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Serpientes del maíz (Corn snakes)",
        vias: ["SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 15, unidad_calculo: "mg/kg" }
      }
    ],
    axolote: [
       {
        indicacion: "Anfibios: Sedación ligera (General)",
        vias: ["IM", "Baño"],
        math: { tipo_calculo: "mg_kg", dosis_min: 15, dosis_max: 30, dosis_recomendada: 20, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Proporciona solo sedación ligera."
      },
      {
        indicacion: "Ranas Toro: Sedación",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 10, dosis_max: 17.5, dosis_recomendada: 13.5, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Rana Arborícola Verde Australiana",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 30, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Ranas Green and Golden Bell / Booroolong",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 20, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Sapitos de Vientre de Fuego Orientales",
        vias: ["Baño de inmersión"],
        math: { tipo_calculo: "fija", dosis_recomendada: 200, unidad_calculo: "mg/l" }
      },
      {
        indicacion: "Ranas dardo azules (Blue poison dart frogs)",
        vias: ["SC"],
        math: { tipo_calculo: "mg_kg", dosis_min: 20, dosis_max: 30, dosis_recomendada: 25, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Gallipato (Spanish ribbed newt)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 15, dosis_max: 30, dosis_recomendada: 22.5, unidad_calculo: "mg/kg" }
      }
    ],
    peces: [
      {
        indicacion: "Peces: Inducción de anestesia",
        vias: ["Inmersión"],
        math: { tipo_calculo: "fija", dosis_min: 5, dosis_max: 10, dosis_recomendada: 7.5, unidad_calculo: "mg/l" }
      },
      {
        indicacion: "Peces: Mantenimiento de anestesia",
        vias: ["Inmersión"],
        math: { tipo_calculo: "fija", dosis_min: 1, dosis_max: 2.5, dosis_recomendada: 1.5, unidad_calculo: "mg/l" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No usar en combinación con otros agentes anestésicos IV.",
      "No usar en Carpas Koi vía IM."
    ],
    contraindicaciones_especie: {
        "Carpa Koi": "¡CONTRAINDICADO!: La inyección IM en Carpas Koi puede producir anestesia prolongada de varias horas, apnea prolongada y alta mortalidad.",
        "Peces": "Ver alerta específica para Carpa Koi."
    },
    efectos_adversos: [
      "Aumento de la frecuencia cardíacacompensatoria.",
      "Hipotensión leve.",
      "Apnea transitoria post-inducción.",
      "Depresión respiratoria (con sobredosis).",
      "Temblores musculares (reportado en Quaker parrots)."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca y ritmo",
      "Patrón respiratorio (apnea)",
      "Presión arterial",
      "Temperatura corporal"
    ],
    instrucciones_manejo: "Administrar en la mitad craneal en reptiles. Pre-oxigenar antes de la inducción IV. Inyectar lentamente.",
    sobredosis: {
      signos: ["Apnea severa", "Depresión respiratoria profunda", "Hipotensión profunda"],
      tratamiento: "Soporte ventilatorio y fluidoterapia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Anestesia inducida por el efecto depresor del SNC.",
    farmacocinetica: "Efecto más corto y recuperación menos excitante que la combinación previa de alfaxalona/alfadalona."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "10 mg/ml",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
