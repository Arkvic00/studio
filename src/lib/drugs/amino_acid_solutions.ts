import type { Drug } from '@/lib/types';

export const aminoAcidSolutionsDrug: Drug = {
  id: "amino_acid_solutions",
  meta_data: {
    nombre_generico: "Soluciones de Aminoácidos",
    nombres_comerciales: ["Duphalyte", "Aminoplasmal", "Aminoven", "Clinimix", "Glamin", "Hyperamine", "Intrafusin", "Kabiven", "Kabiven Peripheral", "Nutriflex"],
    grupo_farmacologico: "Soporte nutricional parenteral; Aminoácidos cristalinos",
    status_regulatorio: "POM, POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Apoyan el anabolismo proteico y detienen el desgaste muscular.",
      "Suministran aminoácidos esenciales y no esenciales.",
      "Duphalyte (veterinario) contiene aminoácidos insuficientes para nutrición basal, se usa como ayuda en fluidoterapia.",
      "Todas las soluciones son hiperosmolares.",
      "Las soluciones concentradas requieren acceso venoso central y monitoreo de cuidados intensivos.",
      "Las líneas IV deben ser dedicadas exclusivamente a la nutrición parenteral."
    ],
    usos_principales: "Pacientes que requieren soporte nutricional pero no pueden recibirlo vía enteral. Ayuda en la fluidoterapia (Duphalyte). Tratamiento de la dermatitis necrolytica superficial en perros.",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Continua durante la infusión"
  },
  informacion_cliente: [
    "Fármaco de uso estrictamente hospitalario.",
    "Requiere monitoreo constante de niveles de azúcar y sales en sangre.",
    "El catéter debe manejarse con extrema higiene para evitar infecciones serias."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Apoyo en fluidoterapia IV (Duphalyte)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "ml/kg"
        },
        notas_tecnicas: "Uso como ayuda a la terapia de fluidos estándar."
      },
      {
        indicacion: "Soporte Nutricional Parenteral",
        vias: ["IV central"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 5,
          dosis_min: 4,
          dosis_max: 6,
          unidad_calculo: "g proteína / 100 kcal"
        },
        notas_tecnicas: "Requiere cálculo basado en requerimientos energéticos (4-6 g proteína por cada 100 kcal de requerimiento energético)."
      },
      {
        indicacion: "Dermatitis Necrolytica Superficial",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          unidad_calculo: "ml/kg/h"
        },
        duracion_tratamiento: "Durante 24 horas",
        notas_tecnicas: "Protocolo específico usando Aminoven 25."
      }
    ],
    gato: [
      {
        indicacion: "Apoyo en fluidoterapia IV (Duphalyte)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "ml/kg"
        }
      },
      {
        indicacion: "Soporte Nutricional Parenteral",
        vias: ["IV central"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 7,
          dosis_min: 6,
          dosis_max: 8,
          unidad_calculo: "g proteína / 100 kcal"
        },
        notas_tecnicas: "6-8 g proteína por cada 100 kcal de requerimiento energético. Nota: Las fórmulas humanas no contienen taurina, esencial para gatos."
      }
    ],
    conejo: [
      {
        indicacion: "Soporte nutricional (Anecdótico)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "ml/kg/día"
        },
        notas_tecnicas: "Usar solo o diluido con Ringer Lactato en proporción 1:5."
      }
    ],
    roedores: [
      {
        indicacion: "Soporte nutricional (Anecdótico)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "ml/kg/día"
        },
        notas_tecnicas: "Usar solo o diluido con Ringer Lactato en proporción 1:5."
      }
    ],
    ave: [
      {
        indicacion: "Soporte nutricional",
        vias: ["IV", "IO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "ml/kg/día"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Deshidratación.",
      "Encefalopatía hepática.",
      "Azotemia severa.",
      "Shock.",
      "Insuficiencia cardíaca congestiva.",
      "Desequilibrios electrolíticos."
    ],
    efectos_adversos: [
      "Hiperglucemia e hiperlipidemia.",
      "Refeeded syndrome (Hipofosfatemia severa).",
      "Tromboflebitis asociada al catéter.",
      "Septicemia por colonización bacteriana del catéter.",
      "Daño tisular severo si ocurre extravasación (hiperosmolar)."
    ],
    monitoreo_recomendado: [
      "Glucosa sanguínea",
      "Electrolitos (Sodio, Potasio, Magnesio, Fosfato)",
      "Estado ácido-base",
      "Sitio del catéter (inflamación/dolor)"
    ],
    instrucciones_manejo: "Solo para uso IV. Mezclar bien. No usar si hay precipitados. Desechar viales de dosis única tras 24h.",
    sobredosis: {
      signos: ["Hipercapnia", "Desequilibrios electrolíticos fatales", "Sobrecarga de fluidos"],
      tratamiento: "Cese inmediato de la infusión y corrección de desequilibrios."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros fármacos IV", efecto: "Incompatibilidad física frecuente. No mezclar en la misma línea parenteral.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Suministro directo de bloques de construcción de proteínas para mantener el metabolismo intermediario y detener el catabolismo.",
    farmacocinetica: "Biodisponibilidad del 100% vía IV."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable IV",
      concentracion_texto: "Variable según marca",
      valor_concentracion: 1,
      unidad_concentracion: "ml",
      es_divisible: false
    }
  ]
};