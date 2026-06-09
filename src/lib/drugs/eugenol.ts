import type { Drug } from '@/lib/types';

export const eugenolDrug: Drug = {
  id: "eugenol",
  meta_data: {
    nombre_generico: "Eugenol (Isoeugenol, Aceite de clavo)",
    nombres_comerciales: ["Koi calm"],
    grupo_farmacologico: "Anestésico local; Anestésico para peces",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anestésico que actúa impidiendo la transmisión de señales nerviosas periféricas.",
      "Muy poco soluble en agua; requiere preparación de una solución stock (ej. 1:9 en etanol 95%).",
      "La profundidad de la anestesia depende de la dosis y del tiempo de exposición.",
      "Los peces pueden retener cierto movimiento, lo que lo hace menos ideal para cirugía mayor.",
      "Método de eutanasia no fiable para anfibios."
    ],
    usos_principales: "Sedación, inmovilización, anestesia y eutanasia en peces. Sedación en anfibios.",
    inicio_accion: "Rápido (inmersión)",
    duracion_efecto: "Dependiente del tiempo de inmersión"
  },
  informacion_cliente: [
    "Retirar el alimento de los peces 12-24 horas antes de la anestesia.",
    "Utilizar agua del mismo tanque o estanque para la preparación.",
    "Asegurar una oxigenación muy fuerte del agua durante el procedimiento.",
    "Tras la anestesia, devolver al pez a agua limpia y oxigenada.",
    "Para eutanasia, el pez debe permanecer en la solución al menos 60 min tras dejar de respirar."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Anestesia (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 80,
          dosis_min: 40,
          dosis_max: 120,
          unidad_calculo: "mg/l"
        },
        notas_tecnicas: "Probar primero con un grupo pequeño. La potencia disminuye si aumenta la temperatura del agua."
      },
      {
        indicacion: "Eutanasia (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 750,
          dosis_min: 500,
          dosis_max: 1000,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "Mínimo 60 minutos tras el cese de respiración"
      }
    ],
    axolote: [
      {
        indicacion: "Sedación / Anestesia (Anfibios)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 350,
          dosis_min: 255,
          dosis_max: 450,
          unidad_calculo: "mg/l"
        },
        notas_tecnicas: "Efectos muy variables. 255 mg/l para sedación en ranas leopardo; 450 mg/l para anestesia en salamandras tigre."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
        "No usar como método de eutanasia único en anfibios (no fiable)."
    ],
    efectos_adversos: [
      "Depresión cardiorrespiratoria severa en algunos peces marinos tropicales.",
      "Prolapso gástrico reversible en anfibios."
    ],
    monitoreo_recomendado: [
      "Movimiento opercular (respiración)",
      "Reflejo de enderezamiento",
      "Niveles de oxigenación del agua"
    ],
    instrucciones_manejo: "Preparar solución stock fresca el día del uso. Mezclar vigorosamente.",
    sobredosis: {
      signos: ["Apnea profunda", "Paro cardiaco"],
      tratamiento: "Transferencia inmediata a agua limpia y oxigenada."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interrumpe la transmisión de señales nerviosas al SNC mediante el bloqueo de canales iónicos.",
    farmacocinetica: "Absorción branquial y cutánea rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Aceite puro",
      concentracion_texto: "aprox. 1 g/ml",
      valor_concentracion: 1000,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
