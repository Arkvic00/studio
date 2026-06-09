import type { Drug } from '@/lib/types';

export const acetatoDeCalcioDrug: Drug = {
  id: "acetato_de_calcio",
  meta_data: {
    nombre_generico: "Acetato de Calcio",
    nombres_comerciales: ["Phosex", "PhosLo"],
    grupo_farmacologico: "Quelante de fosfato",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Quelante de fósforo en el tracto GI.",
      "Reduce los niveles de fosfato sérico en un rango de pH más amplio que el carbonato de calcio.",
      "Se utiliza cuando las dietas bajas en fosfato no son suficientes."
    ],
    usos_principales: "Reducción de fosfato en insuficiencia renal crónica.",
    inicio_accion: "Inmediato (acción local en el tracto GI)",
    duracion_efecto: "Durante el tránsito de la comida"
  },
  informacion_cliente: [
    "Administrar con cada comida para que atrape el fósforo de la dieta.",
    "Se requieren análisis de sangre cada 4-6 semanas para ajustar la dosis.",
    "Monitorear signos de exceso de calcio (debilidad, vómitos)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Enfermedad Renal Crónica (ERC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          dosis_min: 60,
          dosis_max: 90,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dividido con cada comida",
          intervalo_horas: 8
        },
        notas_tecnicas: "Ajustar dosis según niveles de fosfato sérico cada 4-6 semanas."
      }
    ],
    gato: [
      {
        indicacion: "Enfermedad Renal Crónica (ERC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          dosis_min: 60,
          dosis_max: 90,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dividido con cada comida",
          intervalo_horas: 8
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipercalcemia.",
      "Urolitiasis por calcio."
    ],
    efectos_adversos: [
      "Riesgo de calcificación de tejidos blandos y vasos (aumento de la relación Ca:P).",
      "Hipercalcemia."
    ],
    monitoreo_recomendado: [
      "Niveles de fosfato sérico (cada 4-6 semanas)",
      "Niveles de calcio sérico"
    ],
    sobredosis: {
      signos: ["Hipercalcemia", "Vómitos", "Letargo"],
      tratamiento: "Fluidoterapia sin calcio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Tetraciclinas / Fluoroquinolonas", efecto: "Puede afectar su absorción.", severidad: "Moderada" },
      { farmaco: "Calcitriol", efecto: "Aumenta el riesgo de hipercalcemia.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une al fósforo en el tracto GI, impidiendo su absorción y bajando los niveles séricos.",
    farmacocinetica: "Actúa localmente en el lumen intestinal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta",
      concentracion_texto: "1 g",
      valor_concentracion: 1000,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Cápsula",
      concentracion_texto: "667 mg",
      valor_concentracion: 667,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};