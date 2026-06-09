import type { Drug } from '@/lib/types';

export const procaineEpinephrineDrug: Drug = {
  id: "procaine_epinephrine",
  meta_data: {
    nombre_generico: "Procaína con Adrenalina",
    nombres_comerciales: ["Willcain"],
    grupo_farmacologico: "Anestésico local",
    status_regulatorio: "POM-VPS"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anestésico local de tipo éster con vasoconstrictor.",
      "La adrenalina prolonga la duración del bloqueo al reducir la absorción sistémica.",
      "Inicio de acción rápido.",
      "Potencia inferior a la lidocaína.",
      "Uso limitado a infiltración local."
    ],
    usos_principales: "Anestesia local por infiltración o bloqueos perineurales.",
    inicio_accion: "Rápido (5-10 min)",
    duracion_efecto: "Intermedia"
  },
  informacion_cliente: [
    "Uso hospitalario para procedimientos locales.",
    "Puede causar adormecimiento prolongado en la zona inyectada.",
    "Informe si nota hinchazón o cambios de color en la zona tratada."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infiltración local",
        vias: ["SC"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.625,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "ml (Dosis total por sitio)"
        }
      }
    ],
    gato: [
      {
        indicacion: "Infiltración local",
        vias: ["SC"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.625,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "ml"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Inyección intravenosa (¡PROHIBIDO!).",
      "Inyección intra-articular o epidural.",
      "Uso en extremidades distales (dedos, cola, orejas) por riesgo de isquemia."
    ],
    efectos_adversos: [
      "Arritmias cardíacas si se inyecta intravascularmente.",
      "Isquemia local.",
      "Hipersensibilidad (raro)."
    ],
    monitoreo_recomendado: [
      "Asegurar ausencia de entrada a vasos sanguíneos",
      "Estado de los tejidos locales"
    ],
    instrucciones_manejo: "Evitar la autoinyección accidental.",
    sobredosis: {
      signos: ["Arritmias", "Convulsiones"],
      tratamiento: "Soporte sintomático; diazepam para convulsiones."
    },
    interacciones_farmacologicas: [
      { farmaco: "Sulfonamidas", efecto: "La procaína puede inhibir su acción antibacteriana.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueo reversible de los canales de sodio neuronales.",
    farmacocinetica: "Metabolismo por pseudocolinesterasas plasmáticas."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "50 mg/ml + 0.02 mg/ml Adrenalina", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};