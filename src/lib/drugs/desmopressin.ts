import type { Drug } from '@/lib/types';

export const desmopressinDrug: Drug = {
  id: "desmopressin",
  meta_data: {
    nombre_generico: "Desmopresina (DDAVP)",
    nombres_comerciales: ["DDAVP", "Desmospray", "Desmotabs"],
    grupo_farmacologico: "Análogo de la vasopresina (ADH)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo sintético de la hormona antidiurética (vasopresina).",
      "Estimula la reabsorción de agua en los túbulos colectores renales.",
      "A diferencia de la vasopresina, carece de efectos vasoconstrictores significativos.",
      "Aumenta los niveles plasmáticos del Factor von Willebrand (vWF) y Factor VIII.",
      "Útil para el manejo de la diabetes insípida central."
    ],
    usos_principales: "Tratamiento de la diabetes insípida central y apoyo en coagulopatías (Enfermedad de von Willebrand leve-moderada, Hemofilia A).",
    inicio_accion: "Rápido (especialmente intranasal/conjuntival)",
    duracion_efecto: "8 a 24 horas (superior a la vasopresina)"
  },
  informacion_cliente: [
    "Las gotas pueden aplicarse directamente en el ojo (saco conjuntival) si el animal no tolera la vía nasal.",
    "No restrinja el acceso al agua durante el tratamiento, a menos que el veterinario realice una prueba específica.",
    "El ajuste de la dosis depende de la cantidad de orina y sed que presente el animal.",
    "Informe si nota que su mascota parece hinchada o gana peso repentinamente (posible retención de líquidos)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Diabetes Insípida Central (Tratamiento)",
        vias: ["Conjuntival", "Intranasal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 12.5,
          dosis_min: 5,
          dosis_max: 20,
          unidad_calculo: "μg/perro"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 24 horas (ajustar según respuesta)",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Diabetes Insípida Central (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.005,
          unidad_calculo: "mg/kg (5 μg/kg)"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 24 horas (máx 400 μg por toma)",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Coagulopatías (vWD / Hemofilia A)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.002,
          dosis_min: 0.001,
          dosis_max: 0.004,
          unidad_calculo: "mg/kg (1-4 μg/kg)"
        },
        notas_tecnicas: "Diluir en 20 ml de salino y administrar en 10 min. No efectivo en formas severas de la enfermedad."
      }
    ],
    gato: [
      {
        indicacion: "Diabetes Insípida Central",
        vias: ["Conjuntival", "Intranasal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 5,
          unidad_calculo: "μg/gato (1-2 gotas)"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 24 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Diabetes Insípida Central (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 5,
          unidad_calculo: "μg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 24 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Prueba de privación de agua en pacientes con hiponatremia o fallo renal.",
      "Deshidratación severa.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Retención excesiva de agua (hiponatremia dilucional).",
      "Irritación local nasal o conjuntival.",
      "Vómitos (raro)."
    ],
    monitoreo_recomendado: [
      "Densidad urinaria",
      "Niveles de sodio sérico",
      "Estado de hidratación",
      "Tiempos de sangría en coagulopatías"
    ],
    instrucciones_manejo: "Las preparaciones intranasales pueden usarse vía conjuntival con buena tolerancia.",
    sobredosis: {
      signos: ["Hinchazón (edema)", "Letargo", "Convulsiones por hiponatremia"],
      tratamiento: "Restricción de líquidos y uso cuidadoso de diuréticos."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista selectivo de los receptores V2 en el conducto colector renal, aumentando la permeabilidad al agua. Estimula la liberación de vWF desde las células endoteliales.",
    farmacocinetica: "Vida media mucho más larga que la vasopresina natural."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gotas intranasales / oftálmicas",
      concentracion_texto: "100 μg/ml",
      valor_concentracion: 0.1,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Tabletas",
      concentracion_texto: "100 μg, 200 μg",
      valor_concentracion: 0.1,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Inyectable",
      concentracion_texto: "4 μg/ml",
      valor_concentracion: 0.004,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};