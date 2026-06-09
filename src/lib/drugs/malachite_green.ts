import type { Drug } from '@/lib/types';

export const malachiteGreenDrug: Drug = {
  id: "malachite_green",
  meta_data: {
    nombre_generico: "Verde de Malaquita",
    nombres_comerciales: ["Malachite"],
    grupo_farmacologico: "Biocida; Antifúngico externo (Peces)",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Biocida que actúa como toxina respiratoria celular.",
      "Altamente eficaz contra hongos (mohos de agua) y algunos protozoos externos en peces y sus huevos.",
      "Se absorbe por las branquias; la toxicidad celular es irreversible.",
      "La toxicidad aumenta con temperaturas altas, pH bajo y baja dureza del agua.",
      "Inactivado por la luz (apagar luces UV y acuario durante el tratamiento).",
      "Mancha permanentemente plásticos y otros materiales."
    ],
    usos_principales: "Tratamiento de infecciones fúngicas, ectoparásitos protozoarios y parásitos mixozoos en peces.",
    inicio_accion: "Inmediato (baño)",
    duracion_efecto: "Limitada al tiempo de inmersión"
  },
  informacion_cliente: [
    "¡PELIGRO!: Sustancia potencialmente cancerígena y teratogénica. Usar guantes y evitar contacto.",
    "Mancha fuertemente los objetos de plástico y silicona del acuario.",
    "No utilizar en peces destinados al consumo humano por su larga persistencia en tejidos.",
    "Apagar luces UV y del acuario durante el tratamiento para que no pierda eficacia."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Infecciones fúngicas / Ectoparásitos (Inmersión corta)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 55,
          dosis_min: 50,
          dosis_max: 60,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "10 a 30 segundos"
      },
      {
        indicacion: "Infecciones fúngicas (Inmersión media)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "30 a 60 minutos"
      },
      {
        indicacion: "Infecciones fúngicas (Inmersión prolongada)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/l"
        }
      },
      {
        indicacion: "Lesiones cutáneas (Tópico)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 100,
          unidad_calculo: "mg/l"
        },
        notas_tecnicas: "Aplicar directamente sobre la lesión cutánea."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Tetras y otros peces tropicales pequeños.",
      "Especies sin escamas.",
      "Uso en alimento para peces (prohibido por residuos)."
    ],
    efectos_adversos: [
      "Toxicidad respiratoria irreversible (en sobredosis o especies sensibles).",
      "Manchas permanentes en equipamiento."
    ],
    monitoreo_recomendado: [
      "Comportamiento de nado y respiración durante la inmersión",
      "Calidad del agua (pH, temperatura, dureza)"
    ],
    instrucciones_manejo: "Usar siempre formulaciones comerciales para asegurar pureza y dosis exacta. Teratogénico y sospechoso de ser carcinógeno.",
    sobredosis: {
      signos: ["Mortalidad aguda por fallo respiratorio", "Estrés extremo"],
      tratamiento: "Transferencia inmediata a agua limpia, oxigenada y con parámetros adecuados."
    },
    interacciones_farmacologicas: [
      { farmaco: "Formalina (Formaldehído)", efecto: "Efecto sinérgico potente contra ectoparásitos protozoarios.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Pasa a través de las membranas biológicas y actúa como una toxina respiratoria celular.",
    farmacocinetica: "Absorción rápida branquial. Larga persistencia de residuos en tejidos."
  },
  presentaciones_comerciales: [
    { tipo: "Solución para inmersión", concentracion_texto: "Variable según producto", valor_concentracion: 0, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
