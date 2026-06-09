import type { Drug } from '@/lib/types';

export const permethrinDrug: Drug = {
  id: "permethrin",
  meta_data: {
    nombre_generico: "Permetrina",
    nombres_comerciales: ["Activyl Tick Plus", "Advantix", "Frontect", "Indorex", "Vectra 3D"],
    grupo_farmacologico: "Piretroide sintético; Insecticida",
    status_regulatorio: "POM-V, GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Insecticida de contacto que bloquea los canales de sodio en artrópodos.",
      "Provoca convulsiones musculares y muerte del parásito.",
      "Efecto repelente marcado contra garrapatas, mosquitos y flebótomos.",
      "¡EXTREMADAMENTE TÓXICO PARA GATOS!: Carecen de la enzima para metabolizarlo.",
      "Muy tóxico para organismos acuáticos y abejas."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por pulgas, garrapatas y piojos en perros. Repelente de insectos voladores.",
    inicio_accion: "Rápido (contacto)",
    duracion_efecto: "Hasta 4 semanas"
  },
  informacion_cliente: [
    "¡PELIGRO!: Nunca usar en gatos. Puede causar convulsiones mortales.",
    "Si tiene gatos en casa, manténgalos separados del perro tratado por 24h.",
    "Lavar bien las manos tras la aplicación.",
    "No permitir que el perro nade en ríos o estanques durante 48h tras la aplicación.",
    "Evitar que el animal lama el sitio de aplicación mientras esté húmedo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Control de Pulgas, Garrapatas y Vectores",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta según peso"
        },
        frecuencia: { texto_ui: "Cada 4 semanas", intervalo_horas: 672 },
        notas_tecnicas: "La concentración varía según el producto comercial (ej. 400-500 mg/ml)."
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "N/A"
        },
        notas_tecnicas: "¡MORTAL!: Toxicidad neurológica fulminante por incapacidad de glucuronidación."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Cachorros menores de 7 semanas.",
      "Piel con lesiones extensas.",
      "Hipersensibilidad a piretroides."
    ],
    contraindicaciones_especie: {
      "Gato": "¡TÓXICO!: Causa temblores, hipereestesia, convulsiones y muerte.",
      "Peces / Vida Acuática": "¡ALTAMENTE TÓXICO!: No contaminar cuerpos de agua."
    },
    efectos_adversos: [
      "Prurito y eritema local transitorio.",
      "Parestesia local.",
      "Hipersalivación si se ingiere.",
      "Signos neurológicos en gatos expuestos (Temblores, ataxia)."
    ],
    monitoreo_recomendado: [
      "Integridad de la piel en sitio de aplicación",
      "Separación de gatos en el hogar post-tratamiento"
    ],
    instrucciones_manejo: "Lavarse las manos cuidadosamente. Mantener alejado de alimentos.",
    sobredosis: {
      signos: ["Temblores musculares", "Ataxia", "Convulsiones (en gatos o ingestión)"],
      tratamiento: "Lavar con detergente suave si es tópico. Diazepam IV para convulsiones. Metocarbamol."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Mantiene los canales de sodio abiertos en las neuronas del insecto, provocando descargas repetitivas y parálisis.",
    farmacocinetica: "Distribución por la capa lipídica cutánea."
  },
  presentaciones_comerciales: [
    { tipo: "Pipeta Spot-on", concentracion_texto: "397 mg/ml a 504 mg/ml", valor_concentracion: 400, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Spray ambiental", concentracion_texto: "Variable", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
