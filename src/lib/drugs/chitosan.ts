import type { Drug } from '@/lib/types';

export const chitosanDrug: Drug = {
  id: "chitosan",
  meta_data: {
    nombre_generico: "Chitosan (con Carbonato de Calcio)",
    nombres_comerciales: ["Ipakitine"],
    grupo_farmacologico: "Adsorbente de toxinas urémicas; Quelante de fosfato",
    status_regulatorio: "Venta libre (Nutracéutico)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Adsorbente intestinal de toxinas urémicas, incluido el fosfato.",
      "Ayuda a reducir la urea y el fosfato sérico en la enfermedad renal crónica.",
      "Se suele utilizar cuando las dietas bajas en fosfato no son suficientes.",
      "Contiene un 82% de lactosa: usar con precaución en animales diabéticos o intolerantes a la lactosa."
    ],
    usos_principales: "Tratamiento adyuvante de la insuficiencia renal crónica (IRC) en perros, gatos y hurones.",
    inicio_accion: "Inmediato (actúa localmente en el tracto GI)",
    duracion_efecto: "Durante el tránsito de la comida"
  },
  informacion_cliente: [
    "Mezcle el polvo con la comida (preferiblemente comida húmeda).",
    "Asegúrese de que el animal tenga siempre agua fresca a su disposición.",
    "Se requieren análisis de sangre periódicos para controlar el fósforo y el calcio.",
    "Contiene lactosa; consulte al veterinario si su mascota es diabética o intolerante."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Enfermedad Renal Crónica (ERC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas con la comida",
          intervalo_horas: 12
        },
        notas_tecnicas: "Monitorear fosfato sérico cada 4-6 semanas y ajustar dosis según sea necesario."
      }
    ],
    gato: [
      {
        indicacion: "Enfermedad Renal Crónica (ERC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas con la comida",
          intervalo_horas: 12
        }
      }
    ],
    huron: [
      {
        indicacion: "Enfermedad Renal Crónica (Basado en gatos)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas mezclado con comida",
          intervalo_horas: 12
        },
        notas_tecnicas: "Uso anecdótico basado en su eficacia en gatos. Monitorear fosfato cada 10-14 días inicialmente."
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Efecto protector renal",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 500,
          dosis_min: 165,
          dosis_max: 825,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Ratas: Efecto protector hepático",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
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
      "Hipercalcemia severa.",
      "Urolitiasis por calcio."
    ],
    contraindicaciones_especie: {
        "Conejo": "¡NO RECOMENDADO!: Riesgo de hipercalcuria severa."
    },
    efectos_adversos: [
      "Hipercalcemia (debido al componente de carbonato de calcio).",
      "Trastornos digestivos leves en animales intolerantes a la lactosa o diabéticos."
    ],
    monitoreo_recomendado: [
      "Niveles de fosfato sérico (cada 4-6 semanas en perros/gatos)",
      "Niveles de calcio sérico",
      "Niveles de glucosa en diabéticos"
    ],
    instrucciones_manejo: "Mantener en lugar seco y fresco. Cerrar bien el envase tras su uso.",
    sobredosis: {
      signos: ["Hipercalcemia", "Vómitos", "Debilidad muscular"],
      tratamiento: "Soporte sintomático y suspensión inmediata del producto."
    },
    interacciones_farmacologicas: [
      { farmaco: "Calcitriol", efecto: "Aumento significativo del riesgo de hipercalcemia.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "El chitosan es un polímero natural de origen marino que adsorbe toxinas urémicas intestinales, mientras que el carbonato de calcio actúa como quelante de fósforo dietético.",
    farmacocinetica: "Actúa localmente en el lumen intestinal; no se absorbe el chitosan. El calcio absorbido se elimina por vía renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Polvo oral",
      concentracion_texto: "8% Chitosan + 10% Ca Carbonato",
      valor_concentracion: 1,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};