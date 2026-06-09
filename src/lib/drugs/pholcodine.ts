import type { Drug } from '@/lib/types';

export const pholcodineDrug: Drug = {
  id: "pholcodine",
  meta_data: {
    nombre_generico: "Folcodina",
    nombres_comerciales: ["Galenphol", "Benylin Children's Dry Cough"],
    grupo_farmacologico: "Antitusígeno opioide",
    status_regulatorio: "GSL (Venta libre)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Derivado de la codeína con efectos antitusivos.",
      "Posee una ligera acción sedante pero carece de propiedades analgésicas.",
      "Menor potencial de dependencia y estreñimiento que la codeína.",
      "Eficacia en perros es mayormente anecdótica."
    ],
    usos_principales: "Supresión de la tos no productiva detrimental (ej. colapso traqueal, bronquitis crónica).",
    inicio_accion: "Rápido (30-60 min)",
    duracion_efecto: "6 a 8 horas"
  },
  informacion_cliente: [
    "Medicamento para calmar la tos seca y molesta.",
    "No usar en perros con tos productiva (con flemas), ya que impide la expulsión de moco.",
    "Puede causar un ligero sueño en su mascota.",
    "Muchos preparados humanos contienen otros ingredientes (como xilitol o alcohol) que pueden ser tóxicos; consulte siempre la marca."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Tos no productiva / Colapso traqueal",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.15,
          dosis_min: 0.1,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Hasta 4 veces al día según necesidad", intervalo_horas: 6 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Depresión respiratoria.",
      "Tos productiva (neumonía).",
      "Presión intracraneal elevada."
    ],
    efectos_adversos: [
      "Sedación leve.",
      "Estreñimiento.",
      "Náuseas.",
      "Anafilaxia (rara en humanos)."
    ],
    monitoreo_recomendado: [
      "Frecuencia y tipo de tos",
      "Estado de consciencia"
    ],
    instrucciones_manejo: "Observar precauciones normales. Verificar ingredientes inactivos del jarabe.",
    sobredosis: {
      signos: ["Somnolencia profunda", "Depresión respiratoria"],
      tratamiento: "Naloxona como antagonista; soporte ventilatorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros opioides (Tramadol)", efecto: "Potenciación de la sedación.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Deprime el reflejo de la tos por acción directa en el centro de la tos en la médula oblonga.",
    farmacocinetica: "Absorción oral rápida."
  },
  presentaciones_comerciales: [
    { tipo: "Jarabe oral", concentracion_texto: "5 mg/5 ml", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};