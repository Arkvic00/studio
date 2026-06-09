import type { Drug } from '@/lib/types';

export const alphaCasozepineDrug: Drug = {
  id: "alpha_casozepine",
  meta_data: {
    nombre_generico: "α-Casozepina",
    nombres_comerciales: ["Zylkene"],
    grupo_farmacologico: "Decapéptido similar a benzodiazepina; Agonista GABAB",
    status_regulatorio: "Venta libre (Nutracéutico)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Decapéptido derivado de la caseína de la leche con propiedades calmantes.",
      "Se sugiere iniciar la dosificación antes de la exposición previsible al estresor.",
      "Revisiones recientes sugieren que la evidencia de su eficacia para el manejo de la ansiedad es débil.",
      "Carece de los efectos secundarios típicos de las benzodiazepinas (sedación, ataxia)."
    ],
    usos_principales: "Reducción del impacto de estresores ambientales: situaciones impredecibles, cambios en el hogar, viajes, estancias en residencias o llegada de nuevos miembros a la familia.",
    inicio_accion: "Se recomienda iniciar días antes del evento estresante",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Es un producto natural derivado de la leche que ayuda a reducir el estrés.",
    "Para situaciones puntuales (como viajes), inicie la administración al menos 1-2 días antes.",
    "La cápsula se puede abrir y mezclar el polvo con la comida.",
    "Informe si nota que su mascota presenta diarrea tras la administración."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Manejo del estrés y ansiedad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Manejo del estrés y ansiedad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No se han reportado contraindicaciones específicas."
    ],
    efectos_adversos: [
      "Diarrea (ocasionalmente reportada).",
      "Hipersensibilidad a la proteína de la leche (teórico)."
    ],
    monitoreo_recomendado: [
      "Eficacia en la reducción de signos de estrés",
      "Consistencia de las heces"
    ],
    instrucciones_manejo: "Almacenar en lugar fresco y seco.",
    sobredosis: {
      signos: ["Diarrea"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de los receptores GABAB, modulando la respuesta al estrés en el sistema nervioso central.",
    farmacocinetica: "Absorción intestinal del decapéptido intacto."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsulas",
      concentracion_texto: "75 mg, 225 mg, 450 mg",
      valor_concentracion: 75,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
