import type { Drug } from '@/lib/types';

export const ganciclovirDrug: Drug = {
  id: "ganciclovir",
  meta_data: {
    nombre_generico: "Ganciclovir",
    nombres_comerciales: ["Virgan"],
    grupo_farmacologico: "Antiviral",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la replicación viral (DNA polimerasa viral).",
      "In vitro es al menos 10 veces más efectivo que el aciclovir contra el FHV-1.",
      "Virostático: incapaz de erradicar la infección viral latente.",
      "El tratamiento no debe exceder las 3 semanas."
    ],
    usos_principales: "Manejo de infecciones oculares por Herpesvirus Felino-1 (FHV-1).",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Requiere aplicaciones frecuentes"
  },
  informacion_cliente: [
    "Informe si nota irritación ocular excesiva tras la aplicación.",
    "El tratamiento suele durar un máximo de 3 semanas.",
    "Evite que la punta del aplicador toque el ojo u otras superficies."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Herpesvirus Felino-1 (FHV-1) ocular",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación pequeña de gel 0.15%"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 6 horas (máx 3 semanas)",
          intervalo_horas: 6
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Irritación ocular local.",
      "Hipersensibilidad."
    ],
    monitoreo_recomendado: [
      "Integridad de la superficie ocular",
      "Resolución de los signos clínicos"
    ],
    instrucciones_manejo: "Observar precauciones normales para productos estériles.",
    sobredosis: {
      signos: ["Irritación marcada"],
      tratamiento: "Lavar con abundante salino estéril."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la DNA polimerasa viral tras su fosforilación por la timidina quinasa viral.",
    farmacocinetica: "Efecto local predominante."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gel oftálmico",
      concentracion_texto: "0.15% (5 g)",
      valor_concentracion: 1.5,
      unidad_concentracion: "mg/g",
      es_divisible: false
    }
  ]
};
