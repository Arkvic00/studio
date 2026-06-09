import type { Drug } from '@/lib/types';

export const calciumSaltsDrug: Drug = {
  id: "calcium_salts",
  meta_data: {
    nombre_generico: "Sales de Calcio (Borogluconato, Gluconato, Cloruro, Carbonato, Lactato)",
    nombres_comerciales: ["Calcibor", "Calcichew", "Zolcal D", "Calcibor 20"],
    grupo_farmacologico: "Suplemento mineral; Agente cardioprotector",
    status_regulatorio: "POM-V, POM, ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Elemento esencial para la homeostasis, contracción muscular, función nerviosa y coagulación.",
      "Uso crítico en el manejo de la cardiotoxicidad por hiperpotasemia (ej. obstrucción uretral).",
      "El gluconato y borogluconato son preferidos sobre el cloruro por ser menos irritantes.",
      "Requiere monitoreo ECG durante la infusión IV para detectar bradicardia o acortamiento del intervalo Q-T.",
      "En aves y reptiles, se usa antes de la oxitocina para tratar la retención de huevos/distocia.",
      "La inyección perivascular es altamente irritante y puede causar necrosis tisular."
    ],
    usos_principales: "Tratamiento de la hipocalcemia aguda (tetania puerperal), manejo de la cardiotoxicidad por hiperpotasemia, suplementación nutricional y manejo de distocias en exóticos.",
    inicio_accion: "Inmediato (IV); 5-10 min para corrección de arritmias por potasio.",
    duracion_efecto: "Corto (5-10 min para efectos cardiacos; requiere dosis repetidas o CRI)."
  },
  informacion_cliente: [
    "Uso hospitalario de emergencia para presentaciones inyectables.",
    "Los suplementos orales para aves y reptiles ayudan a prevenir la enfermedad ósea metabólica.",
    "Informe inmediatamente si nota que el animal está muy decaído o tiene un ritmo cardiaco inusual.",
    "Algunas tabletas masticables humanas pueden contener xilitol, que es tóxico para perros."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipocalcemia aguda / Cardiotoxicidad (Hiperpotasemia)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          dosis_min: 50,
          dosis_max: 150,
          unidad_calculo: "mg/kg (Borogluconato o Gluconato)"
        },
        frecuencia: { texto_ui: "Administrar en 10-20 min; repetir según niveles séricos", intervalo_horas: 0 },
        notas_tecnicas: "Dosis máxima acumulativa de 1-1.5 g/kg en 24h. Monitorear ECG."
      },
      {
        indicacion: "Tratamiento oral de hipocalcemia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 13.5,
          dosis_min: 5,
          dosis_max: 22,
          unidad_calculo: "mg/kg de Calcio Elemental"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Hipocalcemia aguda (Gluconato 10%)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 117.5,
          dosis_min: 95,
          dosis_max: 140,
          unidad_calculo: "mg/kg (o 1-1.5 ml/kg de sol. al 10%)"
        },
        frecuencia: { texto_ui: "Lento en 10-20 min a efecto", intervalo_horas: 0 }
      },
      {
        indicacion: "Mantenimiento post-crisis (Calcio elemental)",
        vias: ["IV lenta", "CRI"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          dosis_min: 60,
          dosis_max: 90,
          unidad_calculo: "mg/kg/día"
        },
        notas_tecnicas: "Equivale a 2.5 ml/kg de gluconato al 10% q6-8h."
      },
      {
        indicacion: "Tratamiento oral de hipocalcemia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 17.5,
          dosis_min: 10,
          dosis_max: 25,
          unidad_calculo: "mg/kg de Calcio Elemental"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      }
    ],
    huron: [
      {
        indicacion: "Hipocalcemia",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg (Gluconato)"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Hipocalcemia (Gluconato)",
        vias: ["IM", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    cobaya: [
      {
        indicacion: "Hipocalcemia (Gluconato)",
        vias: ["IM", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Hipocalcemia (Chinchillas)",
        vias: ["IM", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    primates: [
      {
        indicacion: "Hipocalcemia (Gluconato)",
        vias: ["SC", "IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    petauro: [
      {
        indicacion: "Hiperparatiroidismo secundario nutricional",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg (Gluconato)"
        },
        frecuencia: { texto_ui: "Cada 12 horas por 3-5 días", intervalo_horas: 12 },
        notas_tecnicas: "Diluir en salino a 10 mg/ml."
      }
    ],
    ave: [
      {
        indicacion: "Retención de huevo / Hipocalcemia",
        vias: ["IM", "SC", "IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 175,
          dosis_min: 150,
          dosis_max: 200,
          unidad_calculo: "mg/kg (Borogluconato)"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Hipocalcemia severa",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg (Gluconato)"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    reptil: [
      {
        indicacion: "Distocia / Hipocalcemia (Borogluconato)",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Hipocalcemia (Gluconato)",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          dosis_min: 50,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    axolote: [
      {
        indicacion: "Tetania hipocalcémica",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 150,
          dosis_min: 100,
          dosis_max: 200,
          unidad_calculo: "mg/kg (Gluconato)"
        }
      },
      {
        indicacion: "Hiperparatiroidismo nutricional (Baño)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2.3,
          unidad_calculo: "% (Solución de gluconato de calcio)"
        },
        notas_tecnicas: "Añadir 2-3 IU/ml de Vitamina D3 al baño."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Fibrilación ventricular.",
      "Hipercalcemia preexistente.",
      "Pacientes con hipoadrenocorticismo (a menudo ya están hipercalcémicos).",
      "No usar en hembras gestantes a menos que haya un estado de deficiencia confirmado."
    ],
    efectos_adversos: [
      "Hipercalcemia (especialmente en fallo renal o cardiaco).",
      "Irritación tisular severa en el sitio de inyección.",
      "Hipotensión y arritmias por inyección IV rápida.",
      "Precipitación de gota en aves y reptiles deshidratados si se usa vía IV."
    ],
    monitoreo_recomendado: [
      "ECG continuo durante la infusión IV",
      "Niveles de calcio y fósforo sérico",
      "Función renal (Creatinina/BUN)"
    ],
    instrucciones_manejo: "El cloruro de calcio es extremadamente irritante; el gluconato es preferido para inyecciones periféricas. En caso de extravasación: detener infusión, infiltrar con salino y aplicar corticoides tópicos.",
    sobredosis: {
      signos: ["Bradicardia", "Paro cardiaco", "Vómitos severos"],
      tratamiento: "Cese inmediato. Fluidoterapia agresiva sin calcio. Considerar diuréticos de asa (furosemida)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Digoxina", efecto: "Aumenta drásticamente el riesgo de arritmias fatales.", severidad: "Grave" },
      { farmaco: "Bloqueadores de canales de calcio (Verapamilo)", efecto: "Las sales de calcio antagonizan su efecto.", severidad: "Importante" },
      { farmaco: "Anfotericina B / Propofol / Cefalotina", efecto: "Físicamente incompatibles con gluconato o cloruro de calcio.", severidad: "Importante" },
      { farmaco: "Bicarbonato Sódico / Fostatos", efecto: "Riesgo de precipitación de sales insolubles.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "El calcio es un catión divalente esencial para la integridad de membranas, excitabilidad neuromuscular, liberación de neurotransmisores y mineralización ósea.",
    farmacocinetica: "Distribución rápida tras IV. El borogluconato contiene ácido bórico para mantener el gluconato en solución."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable (Gluconato 10%)", concentracion_texto: "100 mg/ml (9 mg/ml Ca elemental)", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable (Borogluconato 20%)", concentracion_texto: "200 mg/ml (15 mg/ml Ca elemental)", valor_concentracion: 200, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tabletas masticables", concentracion_texto: "500 mg Calcio Elemental", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución Oral (Zolcal D)", concentracion_texto: "35 mg/ml Gluconato + Vit D3", valor_concentracion: 35, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};