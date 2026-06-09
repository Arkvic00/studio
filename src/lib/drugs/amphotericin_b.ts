import type { Drug } from '@/lib/types';

export const amphotericinBDrug: Drug = {
  id: "amphotericin_b",
  meta_data: {
    nombre_generico: "Anfotericina B",
    nombres_comerciales: ["Abelcet", "AmBisome", "Amphocil", "Fungizone"],
    grupo_farmacologico: "Antifúngico sistémico (Polieno)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antifúngico potente que actúa creando poros en la membrana celular fúngica.",
      "Altamente nefrotóxico; reservar para infecciones fúngicas potencialmente fatales.",
      "Las formulaciones lipídicas (Abelcet, AmBisome) son significativamente menos tóxicas pero más costosas.",
      "Físicamente incompatible con soluciones electrolíticas (usar solo Dextrosa al 5%).",
      "Requiere monitoreo estricto de función renal y electrolitos antes y después de cada dosis."
    ],
    usos_principales: "Manejo de micosis sistémicas severas (Blastomicosis, Histoplasmosis, Criptococosis), leishmaniosis refractaria y quitridiomicosis en anfibios.",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Requiere protocolos de administración intermitente (q48h o semanal)"
  },
  informacion_cliente: [
    "Fármaco de uso estrictamente hospitalario bajo vigilancia intensiva.",
    "El animal debe recibir fluidoterapia previa para proteger sus riñones.",
    "Informe si nota pérdida de apetito, vómitos o debilidad extrema.",
    "El tratamiento suele durar varios meses."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Micosis sistémicas (Convencional)",
        vias: ["IV lenta (4-6h)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 horas", intervalo_horas: 48 },
        notas_tecnicas: "Diluir 1:50 en Dextrosa al 5%. Iniciar con dosis baja y aumentar según tolerancia."
      },
      {
        indicacion: "Criptococosis (Alternativa Subcutánea)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.65,
          dosis_min: 0.5,
          dosis_max: 0.8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "2-3 veces por semana", intervalo_horas: 72 },
        notas_tecnicas: "Añadir a 400-500 ml de solución salina al 0.45% con dextrosa al 2.5%. No exceder 20 mg/l (riesgo de abscesos)."
      },
      {
        indicacion: "Micosis sistémicas (Lipídica)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.75,
          dosis_min: 1.0,
          dosis_max: 2.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 horas", intervalo_horas: 48 },
        notas_tecnicas: "Mejor tolerada que la convencional. Dosis acumulativa recomendada: 24-30 mg/kg."
      },
      {
        indicacion: "Irrigación vesical",
        vias: ["Instilación vesical"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 40,
          dosis_min: 30,
          dosis_max: 50,
          unidad_calculo: "mg (en 50-100 ml agua estéril)"
        },
        frecuencia: { texto_ui: "Diario por 5-15 días", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Micosis sistémicas (Convencional)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.17,
          dosis_min: 0.1,
          dosis_max: 0.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 horas", intervalo_horas: 48 }
      },
      {
        indicacion: "Micosis sistémicas (Lipídica)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 horas", intervalo_horas: 48 }
      }
    ],
    huron: [
      {
        indicacion: "Blastomicosis",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.6,
          dosis_min: 0.4,
          dosis_max: 0.8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 7 días", intervalo_horas: 168 }
      }
    ],
    conejo: [
      {
        indicacion: "Micosis (Convencional)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Micosis (Liposomal)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratones: Infecciones fúngicas",
        vias: ["SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.11,
          unidad_calculo: "mg/kg (SC) o 0.43 mg/kg (PO)"
        }
      }
    ],
    ave: [
      {
        indicacion: "Micosis sistémicas (General)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 1.0,
          dosis_max: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas por 3-5 días", intervalo_horas: 12 },
        notas_tecnicas: "Administrar con 10-15 ml/kg de salino. Muy tóxico vía sistémica en aves."
      },
      {
        indicacion: "Infección por Macrorhabdus (Loros)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          dosis_min: 100,
          dosis_max: 300,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Paseriformes: Micosis",
        vias: ["PO", "Agua", "Nebulización"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "g/l (en agua de bebida)"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Micosis sistémicas",
        vias: ["IV", "Intracelómica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 72 horas por 2-4 semanas", intervalo_horas: 48 },
        notas_tecnicas: "Fluidoterapia concurrente obligatoria."
      },
      {
        indicacion: "Infecciones respiratorias (Nebulización)",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 5,
          unidad_calculo: "mg (en 150 ml de salino)"
        },
        duracion_tratamiento: "30-60 min q12h"
      }
    ],
    axolote: [
      {
        indicacion: "Micosis internas",
        vias: ["Intracelómica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Quitridiomicosis (Tratamiento agua)",
        vias: ["Baño"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 11.5,
          dosis_min: 8,
          dosis_max: 15,
          unidad_calculo: "μg/ml (microgramos/ml)"
        },
        duracion_tratamiento: "Durante 48 horas"
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Fallo renal o hepático preexistente.",
      "Deshidratación severa.",
      "Hipersensibilidad conocida."
    ],
    contraindicaciones_especie: {
      "Ave": "ALERTA: Altamente tóxico si se administra sistémicamente. Requiere fluidoterapia intensiva.",
      "Axolote": "TÓXICO: Mortalidad aguda en renacuajos (Alytes muletensis) a dosis de 8 μg/ml."
    },
    efectos_adversos: [
      "Nefrotoxicidad severa (daño renal).",
      "Hipopotasemia (causa arritmias).",
      "Fiebre y vómitos durante la infusión.",
      "Anorexia.",
      "Flebitis en el sitio de inyección."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN/Densidad urinaria) antes y después de cada dosis",
      "Electrolitos (Potasio, Magnesio) en cada tratamiento",
      "Análisis de orina semanal",
      "Pruebas de función hepática semanal"
    ],
    instrucciones_manejo: "Proteger de la luz. Estable por 1 semana refrigerado tras reconstitución inicial. NO diluir en soluciones salinas (precipita).",
    sobredosis: {
      signos: ["Fallo renal agudo", "Arritmias cardíacas fatales", "Colapso"],
      tratamiento: "Soporte renal intensivo y corrección inmediata de electrolitos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fármacos nefrotóxicos (AINEs, Aminoglucósidos)", efecto: "Aumento drástico del riesgo de fallo renal.", severidad: "Grave" },
      { farmaco: "Flucitosina", efecto: "Sinergia positiva contra Candida y Cryptococcus.", severidad: "Leve" },
      { farmaco: "Doxorrubicina / Metotrexato", efecto: "Aumento de la toxicidad de estos agentes.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a los esteroles (ergosterol) de la membrana celular fúngica, alterando la permeabilidad y permitiendo la fuga de componentes intracelulares vitales.",
    farmacocinetica: "Eliminación lenta por vía renal y biliar. Las formulaciones lipídicas se dirigen preferencialmente a los macrófagos, reduciendo la exposición renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "50 mg/vial",
      valor_concentracion: 50,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
