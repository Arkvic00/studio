import type { Drug } from '@/lib/types';

export const aluminiumHydroxideDrug: Drug = {
  id: "aluminium_hydroxide",
  meta_data: {
    nombre_generico: "Hidróxido de Aluminio (Antiácidos de Aluminio)",
    nombres_comerciales: ["Alucap", "Acidex", "Gastrocote", "Gaviscon Advance", "Peptac", "Asilone", "Maalox", "Mucogel"],
    grupo_farmacologico: "Agente antiácido gástrico; Quelante de fosfato",
    status_regulatorio: "P, GSL (Venta libre en farmacias)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Neutraliza el ácido gástrico y puede estimular la producción local de prostaglandina (PGE-1).",
      "Se une al fosfato inorgánico en el tracto GI, haciéndolo indisponible para la absorción.",
      "Esencial para el manejo de hiperfosfatemia en enfermedad renal crónica (ERC) cuando la dieta sola no basta.",
      "Requiere administración frecuente para prevenir el rebote de secreción ácida."
    ],
    usos_principales: "Manejo de gastritis, ulceración gástrica e hiperfosfatemia asociada a insuficiencia renal en perros, gatos y exóticos.",
    inicio_accion: "Rápido (local en estómago/intestino)",
    duracion_efecto: "Corta (requiere dosis frecuentes)"
  },
  informacion_cliente: [
    "Mezcle bien el medicamento con la comida para asegurar que se consuma y para mejorar su sabor.",
    "Puede causar estreñimiento; informe a su veterinario si nota heces muy duras.",
    "No administre otros medicamentos orales dentro de las 2 horas posteriores a este fármaco, ya que puede impedir su absorción."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Gastritis / Quelante de Fosfato (Tabletas)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas con las comidas",
          intervalo_horas: 8
        },
        notas_tecnicas: "Dosis empíricas; no han sido definidas formalmente en perros. Ajustar según niveles de fosfato sérico."
      },
      {
        indicacion: "Gastritis / Quelante de Fosfato (Gel)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "ml/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas con las comidas",
          intervalo_horas: 8
        }
      }
    ],
    gato: [
      {
        indicacion: "Gastritis / Quelante de Fosfato (Tabletas)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas con las comidas",
          intervalo_horas: 8
        },
        notas_tecnicas: "Dosis empíricas. En ERC, monitorear fosfato sérico cada 14-28 días para ajustar dosis."
      },
      {
        indicacion: "Gastritis / Quelante de Fosfato (Gel)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "ml/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas con las comidas",
          intervalo_horas: 8
        }
      }
    ],
    conejo: [
      {
        indicacion: "Gastritis / Hiperfosfatemia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 45,
          dosis_min: 30,
          dosis_max: 60,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    cobaya: [
      {
        indicacion: "Hiperfosfatemia por fallo renal",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 30,
          dosis_min: 20,
          dosis_max: 40,
          unidad_calculo: "mg/animal"
        },
        frecuencia: {
          texto_ui: "Según sea necesario (prn)",
          intervalo_horas: 24
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Fallo renal crónico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6000,
          dosis_min: 2400,
          dosis_max: 9600,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Total diario (dividido)",
          intervalo_horas: 24
        },
        notas_tecnicas: "PRECAUCIÓN: Las dosis altas en ratas pueden reducir la ingesta de alimento y el peso corporal."
      }
    ],
    ave: [
      {
        indicacion: "Hiperfosfatemia / Gastritis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 60,
          dosis_min: 30,
          dosis_max: 90,
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
        indicacion: "Hiperfosfatemia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
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
      "No hay contraindicaciones absolutas reportadas, pero usar con cautela en obstrucciones GI."
    ],
    efectos_adversos: [
      "Estreñimiento (común).",
      "Hipofosfatemia.",
      "Reducción de ingesta de alimento y peso (reportado en ratas).",
      "Posible neurotoxicidad por acumulación de aluminio en uso de muy largo plazo (raro)."
    ],
    monitoreo_recomendado: [
      "Niveles de fosfato sérico (cada 10-28 días)",
      "Consistencia de las heces",
      "Peso corporal en roedores"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Estreñimiento severo", "Hipofosfatemia"],
      tratamiento: "Soporte sintomático; considerar laxantes si es necesario."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fluoroquinolonas / Tetraciclinas", efecto: "Las sales de aluminio impiden su absorción. No dar en un intervalo de 2 horas.", severidad: "Importante" },
      { farmaco: "Digoxina", efecto: "Reducción de la absorción oral.", severidad: "Importante" },
      { farmaco: "Hormonas tiroideas / Hierro", efecto: "Reducción de la absorción oral.", severidad: "Moderada" },
      { farmaco: "Antagonistas H2", efecto: "Reducción de la absorción oral.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Neutraliza el ácido clorhídrico gástrico. Se une a ácidos biliares y pepsina. Quelante intestinal de fosfatos.",
    farmacocinetica: "Mínima absorción sistémica; la mayoría del aluminio se elimina por heces."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gel seco (polvo)",
      concentracion_texto: "Variable según producto",
      valor_concentracion: 0,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Suspensión oral",
      concentracion_texto: "Aluminium Hydroxide Gel",
      valor_concentracion: 1,
      unidad_concentracion: "ml",
      es_divisible: false
    }
  ]
};
