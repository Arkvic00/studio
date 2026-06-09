import type { Drug } from '@/lib/types';

export const estriolDrug: Drug = {
  id: "estriol",
  meta_data: {
    nombre_generico: "Estriol (Oestriol)",
    nombres_comerciales: ["Incurin"],
    grupo_farmacologico: "Estrógeno sintético de acción corta",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estrógeno sintético con alta afinidad por los receptores del tracto urogenital inferior.",
      "Incrementa el tono muscular del esfínter uretral.",
      "Eficaz para el manejo de la incontinencia urinaria en perras castradas.",
      "Menor riesgo de efectos secundarios que los estrógenos de larga duración.",
      "Acción selectiva que minimiza los efectos estrogénicos sistémicos."
    ],
    usos_principales: "Manejo de la incompetencia del mecanismo del esfínter uretral (USMI) en perras castradas.",
    inicio_accion: "Rápido tras administración oral",
    duracion_efecto: "Corta; requiere administración diaria inicial"
  },
  informacion_cliente: [
    "Solo debe usarse en hembras que ya han sido castradas.",
    "Las personas embarazadas o en periodo de lactancia deben manejar el medicamento con precaución (usar guantes).",
    "No utilizar en animales menores de 1 año de edad.",
    "Informe si nota que su perra presenta hinchazón de la vulva o si atrae a los machos.",
    "No usar si la perra ya bebe u orina en exceso por otras causas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Incompetencia del esfínter uretral (USMI)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          dosis_min: 0.5,
          dosis_max: 2.0,
          unidad_calculo: "mg/perro (Dosis total)"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas (ajustar según respuesta)",
          intervalo_horas: 24
        },
        notas_tecnicas: "Iniciar con 1 mg/día. Si funciona, bajar a 0.5 mg. Si no, subir a 2 mg. Una vez controlado, se puede probar la dosificación en días alternos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hembras enteras (no castradas).",
      "Presencia de Poliuria/Polidipsia (PU/PD).",
      "Animales menores de 1 año.",
      "Gatos (No usar)."
    ],
    contraindicaciones_especie: {
        "Gato": "¡CONTRAINDICADO!: No se recomienda su uso en gatos."
    },
    efectos_adversos: [
      "Efectos estrogénicos (edema vulvar, atracción de machos).",
      "Riesgo bajo de supresión de la médula ósea (vigilar CBC en uso crónico).",
      "Vómitos ocasionales."
    ],
    monitoreo_recomendado: [
      "Frecuencia y control de la micción",
      "Hemograma completo (CBC) en tratamientos de larga duración",
      "Signos de celo iatrogénico"
    ],
    instrucciones_manejo: "Observar precauciones normales. Lavarse las manos tras la administración.",
    sobredosis: {
      signos: ["Signos de celo marcados", "Vómitos"],
      tratamiento: "Suspensión temporal del fármaco; los efectos revierten rápidamente."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fenilpropanolamina", efecto: "Puede potenciar la eficacia en el control de la incontinencia.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a los receptores de estrógeno en el tracto urogenital, mejorando la respuesta de la musculatura lisa uretral a la estimulación adrenérgica.",
    farmacocinetica: "Absorción oral rápida. Acción breve."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "1 mg",
      valor_concentracion: 1,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
