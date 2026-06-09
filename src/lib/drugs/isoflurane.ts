import type { Drug } from '@/lib/types';

export const isofluraneDrug: Drug = {
  id: "isoflurane",
  meta_data: {
    nombre_generico: "Isoflurano",
    nombres_comerciales: ["Isoba", "Isocare", "Isofane", "IsoFlo", "Isoflurane Vet", "Vetflurane"],
    grupo_farmacologico: "Anestésico volátil inhalatorio",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potente anestésico inhalatorio de alta volatilidad.",
      "Menos soluble en sangre que el halotano (inducción y recuperación más rápidas).",
      "Olor acre/penetrante; puede ser mal tolerado para inducción con máscara en perros/gatos.",
      "Mínimo metabolismo hepático (0.2%).",
      "Causa hipotensión dosis-dependiente por vasodilatación periférica."
    ],
    usos_principales: "Inducción y mantenimiento de la anestesia general en mamíferos, aves, reptiles y anfibios."
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario bajo monitorización constante.",
    "El animal despierta rápidamente tras cerrar el vaporizador.",
    "Puede causar una bajada temporal de la presión arterial."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Inducción (sin premedicación)",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 4, dosis_min: 3, dosis_max: 5, unidad_calculo: "%" }
      },
      {
        indicacion: "Mantenimiento",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1.2, unidad_calculo: "% (MAC)" },
        notas_tecnicas: "Ajustar según profundidad anestésica. La premedicación reduce estos requerimientos."
      }
    ],
    gato: [
      {
        indicacion: "Mantenimiento",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1.6, unidad_calculo: "% (MAC)" }
      }
    ],
    conejo: [
      {
        indicacion: "Mantenimiento",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 2.05, unidad_calculo: "% (MAC)" },
        notas_tecnicas: "¡EVITAR inducción con máscara! Los conejos contienen la respiración provocando apnea y bradicardia severa."
      }
    ],
    roedores: [
      {
        indicacion: "Inducción",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 3.5, dosis_min: 2, dosis_max: 5, unidad_calculo: "%" }
      },
      {
        indicacion: "Mantenimiento",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 2, dosis_min: 0.25, dosis_max: 4, unidad_calculo: "%" }
      }
    ],
    ave: [
      {
        indicacion: "Inducción",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 4, dosis_min: 3, dosis_max: 5, unidad_calculo: "%" }
      },
      {
        indicacion: "Mantenimiento",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 2, dosis_min: 1.5, dosis_max: 2.5, unidad_calculo: "%" },
        notas_tecnicas: "Administrar en oxígeno al 100%."
      }
    ],
    reptil: [
      {
        indicacion: "Inducción",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 4, dosis_min: 3, dosis_max: 5, unidad_calculo: "%" },
        notas_tecnicas: "¡EVITAR inducción con máscara en tortugas! Contienen la respiración."
      },
      {
        indicacion: "Mantenimiento",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 2.9, dosis_min: 1.8, dosis_max: 4, unidad_calculo: "%" }
      }
    ],
    axolote: [
      {
        indicacion: "Inducción / Mantenimiento (Anfibios)",
        vias: ["Burbujeo en agua", "Inhalada (intubación)"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1.5, dosis_min: 1, dosis_max: 2, unidad_calculo: "%" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Inducción por máscara en especies que contienen la respiración (conejos, quelonios).",
      "Hipersensibilidad conocida a gases halogenados."
    ],
    efectos_adversos: [
      "Hipotensión dosis-dependiente.",
      "Depresión respiratoria marcada.",
      "Temblores en la recuperación.",
      "Hipotermia.",
      "En hurones: depresión marcada de parámetros hematológicos (Hto, RBC, Hb) tras inducción."
    ],
    monitoreo_recomendado: [
      "Presión arterial (crítico)",
      "Capnografía (EtCO2)",
      "Saturación de oxígeno (SpO2)",
      "Temperatura corporal"
    ],
    instrucciones_manejo: "Usar sistemas de extracción de gases para evitar contaminación ambiental. Requiere vaporizador calibrado.",
    sobredosis: {
      signos: ["Apnea", "Hipotensión severa", "Bradicardia"],
      tratamiento: "Cerrar vaporizador, ventilar con O2 al 100%, soporte cardiovascular."
    },
    interacciones_farmacologicas: [
      { farmaco: "Sedantes / Opioides", efecto: "Reducen significativamente la MAC necesaria.", severidad: "Moderada" },
      { farmaco: "Relajantes musculares no despolarizantes", efecto: "Prolonga su duración de acción.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Depresor general del SNC por alteración de canales iónicos neuronales (mecanismo exacto no definido).",
    farmacocinetica: "Eliminación pulmonar casi total (99.8%). Mínimo metabolismo hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Líquido para vaporización", concentracion_texto: "100% (botella 250 ml)", valor_concentracion: 100, unidad_concentracion: "%", es_divisible: false }
  ]
};