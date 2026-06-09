import type { Drug } from '@/lib/types';

export const glucoseDrug: Drug = {
  id: "glucose",
  meta_data: {
    nombre_generico: "Glucosa (Dextrosa)",
    nombres_comerciales: ["Aqupharm No. 3", "Vetivex 3", "Dextrosa 50%*"],
    grupo_farmacologico: "Nutriente; Agente osmótico",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Fuente de energía inmediata para el metabolismo celular.",
      "Las soluciones diluidas (5%) se usan para reemplazo de fluidos.",
      "Las soluciones concentradas (10-50%) se usan para tratar hipoglucemia o como soporte energético.",
      "Soluciones >5% son hipertónicas e irritantes; administrar preferiblemente por vía central.",
      "Riesgo de hipofosfatemia severa en pacientes con inanición prolongada (síndrome de realimentación)."
    ],
    usos_principales: "Tratamiento de la hipoglucemia, cetosis bovina, soporte nutricional parenteral y reemplazo de fluidos.",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Corta"
  },
  informacion_cliente: [
    "Las soluciones concentradas pueden dañar las venas si no se administran correctamente.",
    "No se deben usar botellas abiertas de días anteriores por riesgo de crecimiento bacteriano.",
    "Informe si nota hinchazón o dolor en el sitio de la vía intravenosa."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipoglucemia (Emergencia)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "ml/perro de sol. al 50%"
        },
        notas_tecnicas: "Administrar en 10 minutos. Para mantenimiento, se requiere aprox. 1 ml/kg/h de sol. al 50%."
      }
    ],
    gato: [
      {
        indicacion: "Hipoglucemia (Emergencia)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          dosis_min: 0.5,
          dosis_max: 2.0,
          unidad_calculo: "ml de sol. al 50%"
        }
      }
    ],
    ave: [
      {
        indicacion: "Hipoglucemia",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          dosis_min: 50,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Hipoglucemia / Soporte",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar diluido al 5-10% en cristaloides."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hiperglucemia.",
      "Hemorragia intracraneal o intraespinal.",
      "Deshidratación severa sin electrolitos."
    ],
    efectos_adversos: [
      "Flebitis (irritación venosa).",
      "Diuresis osmótica (pérdida de agua).",
      "Hipofosfatemia e hipopotasemia.",
      "Hiperglucemia.",
      "Glucosuria."
    ],
    monitoreo_recomendado: [
      "Glucosa sanguínea",
      "Electrolitos (Fósforo, Potasio)",
      "Balance hídrico",
      "Integridad de la vía venosa"
    ],
    instrucciones_manejo: "Las soluciones al 50% son extremadamente hipertónicas (2525 mOsm/l); diluir o usar vía yugular.",
    sobredosis: {
      signos: ["Hiperglucemia marcada", "Poliuria", "Deshidratación descompensada"],
      tratamiento: "Cese de infusión y administración de insulina si es necesario."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Sustrato directo para la glucólisis y el ciclo de Krebs.",
    farmacocinetica: "Metabolismo rápido a CO2 y agua."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "5% (50 mg/ml)",
      valor_concentracion: 50,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Inyectable concentrado",
      concentracion_texto: "50% (500 mg/ml)",
      valor_concentracion: 500,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
