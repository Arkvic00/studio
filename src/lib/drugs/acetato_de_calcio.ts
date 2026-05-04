import type { Drug } from '@/lib/types';

export const acetatoDeCalcioDrug: Drug = {
  id: "acetato_de_calcio",
  meta_data: {
    nombre_generico: "Acetato de Calcio",
    nombres_comerciales: ["PhosLo", "Phoslyra", "Eliphos"],
    grupo_farmacologico: "Quelante de fosfato; Suplemento de calcio",
    status_regulatorio: "Uso extra-label en medicina veterinaria."
  },
  resumen_clinico: {
    puntos_clave: [
      "Se usa principalmente como quelante de fósforo en enfermedad renal crónica.",
      "Aporta calcio elemental.",
      "Más potente que el carbonato de calcio para fijar fósforo.",
      "Debe darse CON la comida para ser efectivo."
    ],
    usos_principales: "Hiperfosfatemia en pacientes con ERC. Suplemento de calcio oral."
  },
  informacion_cliente: [
    "Mezclar con la comida para que atrape el fósforo de la dieta.",
    "Puede causar estreñimiento.",
    "Se requieren análisis de sangre frecuentes para evitar exceso de calcio."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Quelante de fosfato (ERC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 80,
          dosis_min: 60,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dividido con cada comida",
          intervalo_horas: 8
        }
      }
    ],
    gato: [
      {
        indicacion: "Quelante de fosfato (ERC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 80,
          dosis_min: 60,
          dosis_max: 100,
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
      "Producto Ca x P muy elevado (>70)."
    ],
    efectos_adversos: [
      "Hipercalcemia (principal preocupación).",
      "Estreñimiento.",
      "Vómitos leves."
    ],
    sobredosis: {
      signos: ["Letargo", "Vómitos", "Debilidad"],
      tratamiento: "Fluidoterapia IV sin calcio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Tetraciclinas/Quinolonas", efecto: "Reduce la absorción del antibiótico", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une al fósforo dietético en el intestino formando complejos insolubles de fosfato de calcio que se eliminan en heces.",
    farmacocinetica: "Actúa localmente en el lumen intestinal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula",
      concentracion_texto: "667 mg (169 mg Calcio elemental)",
      valor_concentracion: 667,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};