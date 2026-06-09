import type { Drug } from '@/lib/types';

export const famotidineDrug: Drug = {
  id: "famotidine",
  meta_data: {
    nombre_generico: "Famotidina",
    nombres_comerciales: ["Pepcid", "Famotidina*"],
    grupo_farmacologico: "Antagonista de receptores H2 de histamina",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea la secreción ácida inducida por histamina.",
      "Mucho más potente que la cimetidina.",
      "Baja biodisponibilidad oral (~37%).",
      "No tiene efectos significativos sobre la motilidad gastrointestinal.",
      "En uso prolongado, su efecto sobre el pH gástrico puede disminuir (tolerancia)."
    ],
    usos_principales: "Tratamiento de úlceras gástricas y duodenales, gastritis erosiva, esofagitis y gastrinomas.",
    inicio_accion: "Rápido (pico en 1-3 horas)",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Medicamento para reducir la acidez del estómago.",
    "El tratamiento para úlceras suele durar al menos 28 días.",
    "Informe si nota vómitos persistentes o heces negras.",
    "Generalmente tiene menos efectos secundarios que la cimetidina."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Gastritis / Úlceras / Esofagitis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Gastritis / Úlceras / Esofagitis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ],
    huron: [
      {
        indicacion: "Gastritis / Úlceras",
        vias: ["PO", "IV", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
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
        indicacion: "Protección gástrica",
        vias: ["PO", "SC", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    cobaya: [
      {
        indicacion: "Gastritis",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    erizo: [
      {
        indicacion: "Gastritis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
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
        indicacion: "Gastritis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    roedores: [
      {
        indicacion: "Chinchillas: Gastritis",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
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
      "Hipersensibilidad conocida a los antagonistas H2."
    ],
    efectos_adversos: [
      "Muy seguro; pocos efectos adversos reportados en veterinaria.",
      "Posible malestar gastrointestinal leve.",
      "Reducción de la eficacia con el tiempo (tolerancia)."
    ],
    monitoreo_recomendado: [
      "Resolución de signos clínicos (vómitos, apetito)",
      "Función renal en pacientes geriátricos"
    ],
    instrucciones_manejo: "Observar precauciones normales. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Vómitos", "Letargo"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Ketoconazol / Itraconazol", efecto: "Reduce su absorción oral al aumentar el pH gástrico.", severidad: "Moderada" },
      { farmaco: "Anticácidos / Sucralfato", efecto: "Pueden reducir la absorción de la famotidina. Espaciar 2 horas.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores H2 de histamina en las células parietales gástricas.",
    farmacocinetica: "Biodisponibilidad oral baja. Eliminación renal predominante."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "20 mg, 40 mg",
      valor_concentracion: 20,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
