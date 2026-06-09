import type { Drug } from '@/lib/types';

export const chloroquineDrug: Drug = {
  id: "chloroquine",
  meta_data: {
    nombre_generico: "Cloroquina (Difosfato / Fosfato de cloroquina)",
    nombres_comerciales: ["Avloclor"],
    grupo_farmacologico: "Antiprotozoario",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antiprotozoario utilizado para hemoparásitos y ectoparásitos marinos.",
      "Mecanismo probable de lisis celular por disrupción de la membrana en parásitos marinos.",
      "Uso principal en peces para enfermedades de piel y branquias (Punto blanco marino, Velvet).",
      "En aves rapaces, se usa para el tratamiento de Plasmodium spp.",
      "¡EXTREMADAMENTE TÓXICO! para corales, almejas y diversos invertebrados marinos."
    ],
    usos_principales: "Tratamiento de Plasmodium en aves silvestres/zoo. Manejo de Cryptocaryon irritans, Brooklynella y Amyloodinium ocellatum en peces marinos.",
    inicio_accion: "Rápido (acción local en peces / sistémica en aves)",
    duracion_efecto: "Requiere esquemas de repetición específicos"
  },
  informacion_cliente: [
    "No utilizar en acuarios de arrecife (mata corales e invertebrados).",
    "Durante el tratamiento en peces, se deben apagar los filtros de carbón activado, esterilización UV y ozono.",
    "Realizar cambios parciales de agua (25%) antes de cada dosis en peces.",
    "Puede reducir el apetito en el animal tratado."
  ],
  parametros_dosificacion: {
    ave: [
      {
        indicacion: "Aves Rapaces: Plasmodium (Hemoparásitos)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dosis inicial, luego 5-10 mg/kg a las 6, 24 y 48h",
          intervalo_horas: 0
        },
        notas_tecnicas: "Puede combinarse con primaquina para mejorar la eficacia."
      }
    ],
    reptil: [
      {
        indicacion: "Tortugas: Infecciones susceptibles",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 125,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 48 horas (Total 3 dosis)",
          intervalo_horas: 48
        }
      }
    ],
    peces: [
      {
        indicacion: "Marine Velvet (Amyloodinium)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "mg/l"
        },
        notas_tecnicas: "Repetir después de 21 días si es necesario. Apagar filtración química y UV."
      },
      {
        indicacion: "Protozoos marinos (Cryptocaryon, Brooklynella)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/l"
        },
        frecuencia: {
          texto_ui: "Dosis inicial, luego 10 mg/l cada 7-10 días (3 dosis)",
          intervalo_horas: 168
        },
        notas_tecnicas: "Más efectivo si la salinidad se reduce a 12-13 ppt. Añadir carbón activado al terminar si no hay recaída en 21 días."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Acuarios de arrecife (Reef tanks).",
      "Presencia de corales, almejas, equinodermos o algas sensibles."
    ],
    efectos_adversos: [
      "Inapetencia (reducción del apetito).",
      "Toxicidad severa en invertebrados marinos.",
      "Mortalidad en micro y macroalgas."
    ],
    monitoreo_recomendado: [
      "Ingesta de alimento",
      "Calidad del agua (amonio/nitrito al apagar filtración biológica parcial)",
      "Signos de estrés en peces"
    ],
    instrucciones_manejo: "Apagar UV, ozono, skimmer de proteínas y retirar carbón activado durante el tratamiento.",
    sobredosis: {
      signos: ["Anorexia marcada", "Letargo severo"],
      tratamiento: "Cambio masivo de agua y filtración con carbón activado."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se introduce en las células de los ectoparásitos marinos provocando lisis celular mediante la alteración de la función de la membrana.",
    farmacocinetica: "Se degrada en presencia de luz intensa y filtración química."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "250 mg (155 mg base)",
      valor_concentracion: 250,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
