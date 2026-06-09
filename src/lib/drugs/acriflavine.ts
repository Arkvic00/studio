import type { Drug } from '@/lib/types';

export const acriflavineDrug: Drug = {
  id: "acriflavine",
  meta_data: {
    nombre_generico: "Acriflavina (Cloruro de acriflavinio)",
    nombres_comerciales: ["Acriflavin", "Acriflavine"],
    grupo_farmacologico: "Antiséptico / Antiparasitario externo",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Tratamiento de enfermedades externas fúngicas, bacterianas y parasitarias en peces.",
      "Existe resistencia bacteriana; se considera menos efectiva que otros medicamentos.",
      "Se recomienda usar formulaciones comerciales para asegurar pureza y dosificación exacta."
    ],
    usos_principales: "Tratamiento de enfermedades externas (hongos, bacterias, parásitos) en peces.",
    inicio_accion: "Inmediato (tópico/inmersión)",
    duracion_efecto: "Depende de la duración de la inmersión"
  },
  informacion_cliente: [
    "Evitar el contacto con piel y ojos; la forma en polvo es potencialmente mutagénica.",
    "Puede teñir el agua y el sellador de los acuarios.",
    "Es tóxico para las plantas acuáticas."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Enfermedades externas (Inmersión larga)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 5,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "3 a 5 días",
        notas_tecnicas: "Seguir guías de uso responsable de parasiticidas."
      },
      {
        indicacion: "Enfermedades externas (Inmersión media)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "2 horas"
      },
      {
        indicacion: "Enfermedades externas (Inmersión corta)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 500,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "30 minutos"
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [],
    contraindicaciones_especie: {
        "Peces (Guppys)": "ADVERTENCIA: Puede causar fallo reproductivo en guppys.",
        "Plantas Acuáticas": "TÓXICO: Mata las plantas acuáticas."
    },
    efectos_adversos: [
      "Fallo reproductivo en algunas especies.",
      "Muerte de vegetación acuática."
    ],
    instrucciones_manejo: "La formulación en polvo es irritante y potencialmente mutagénica. Usar guantes y mascarilla durante la preparación.",
    sobredosis: {
      signos: ["Mortalidad en peces", "Daño tisular severo"],
      tratamiento: "Dilución inmediata con agua fresca."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "No especificado; actúa como antiséptico tópico.",
    farmacocinetica: "No disponible."
  },
  presentaciones_comerciales: [
    {
      tipo: "Polvo seco",
      concentracion_texto: "100%",
      valor_concentracion: 100,
      unidad_concentracion: "%",
      es_divisible: false
    },
    {
      tipo: "Formulación líquida comercial",
      concentracion_texto: "Variable (según fabricante)",
      valor_concentracion: 0,
      unidad_concentracion: "v/v",
      es_divisible: false
    }
  ]
};
