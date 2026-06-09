import type { Drug } from '@/lib/types';

export const pilocarpineDrug: Drug = {
  id: "pilocarpine",
  meta_data: {
    nombre_generico: "Pilocarpina (Clorhidrato de pilocarpina)",
    nombres_comerciales: ["Pilocarpine*"],
    grupo_farmacologico: "Parasimpaticomimético directo; Colinérgico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula directamente los receptores colinérgicos.",
      "Produce miosis intensa y mejora el flujo del humor acuoso.",
      "Su papel en glaucoma ha sido desplazado por fármacos más modernos.",
      "Uso principal actual: manejo de la queratoconjuntivitis seca (KCS) de origen neurogénico.",
      "La administración oral estimula la secreción lagrimal."
    ],
    usos_principales: "Diagnóstico y tratamiento de la KCS neurogénica y manejo del glaucoma de ángulo abierto.",
    inicio_accion: "10-15 min (Ocular); Variable (Oral)",
    duracion_efecto: "6 a 8 horas"
  },
  informacion_cliente: [
    "Informe si nota babeo excesivo, lagrimeo o vómitos tras el tratamiento.",
    "Para el ojo seco neurogénico, se administra mezclado con la comida.",
    "La pupila se volverá muy pequeña tras la aplicación de las gotas.",
    "No usar si el ojo está muy inflamado (uveítis).",
    "Poco utilizado en gatos debido a su potencial toxicidad."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "KCS Neurogénica (Ojo seco)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota de sol. 1-2% cada 10 kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas con comida", intervalo_horas: 12 },
        notas_tecnicas: "Aumentar 1 gota cada 2-3 días hasta mejoría del test de Schirmer o signos de toxicidad."
      },
      {
        indicacion: "Glaucoma de ángulo abierto",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Uveítis activa.",
      "Luxación anterior del cristalino.",
      "Glaucoma de ángulo estrecho."
    ],
    efectos_adversos: [
      "Hiperemia conjuntival e irritación local (pH bajo).",
      "Signos sistémicos colinérgicos: ptialismo, vómitos, diarrea.",
      "Arritmias cardíacas.",
      "Incontinencia urinaria."
    ],
    monitoreo_recomendado: [
      "Test de Schirmer (STT) regularmente",
      "Presión intraocular",
      "Frecuencia cardíaca"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Salivación masiva", "Vómitos", "Bradicardia", "Colapso"],
      tratamiento: "Atropina (0.04 mg/kg IV) como antídoto específico."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista directo de los receptores muscarínicos que provoca miosis y contracción del músculo ciliar.",
    farmacocinetica: "Absorción local corneal efectiva."
  },
  presentaciones_comerciales: [
    { tipo: "Gotas oftálmicas", concentracion_texto: "1%, 2%, 4%", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};