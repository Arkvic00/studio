import type { Drug } from '@/lib/types';

export const omeprazoleDrug: Drug = {
  id: "omeprazole",
  meta_data: {
    nombre_generico: "Omeprazol",
    nombres_comerciales: ["Gastrogard", "Losec"],
    grupo_farmacologico: "Inhibidor de la bomba de protones",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor potente de la secreción ácida.",
      "Más efectivo que famotidina/cimetidina.",
      "Dosificación q12h preferida en enfermedad grave."
    ],
    usos_principales: "Úlceras gástricas, esofagitis y mastocitomas.",
    inicio_accion: "Rápido",
    duracion_efecto: ">24 horas"
  },
  informacion_cliente: [
    "Dar 30-60 min antes del desayuno.",
    "No triturar cápsulas gastro-resistentes.",
    "Informe si nota diarrea."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Gastritis / Úlceras",
        vias: ["PO", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.5,
          dosis_max: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Gastritis / Úlceras",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.85,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Ninguna conocida."],
    efectos_adversos: ["Diarrea.", "Náuseas."],
    monitoreo_recomendado: ["Resolución de vómitos"],
    instrucciones_manejo: "No triturar.",
    sobredosis: {
      signos: ["Trastornos GI"],
      tratamiento: "Soporte."
    },
    interacciones_farmacologicas: [
      { farmaco: "Itraconazol", efecto: "Reduce su absorción.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor irreversible de la H+/K+ ATPasa.",
    farmacocinetica: "Metabolismo hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula", concentracion_texto: "20 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: false }
  ]
};