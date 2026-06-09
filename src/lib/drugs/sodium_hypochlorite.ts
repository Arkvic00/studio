import type { Drug } from '@/lib/types';

export const sodiumHypochloriteDrug: Drug = {
  id: "sodium_hypochlorite",
  meta_data: {
    nombre_generico: "Hipoclorito de Sodio (Ácido Hipocloroso)",
    nombres_comerciales: ["Renasan", "Vetericyn"],
    grupo_farmacologico: "Antiséptico tópico; Agente de desbridamiento",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Asiste en la remoción mecánica de detritos celulares y tejido necrótico.",
      "Acción antibacteriana y antifúngica local potente.",
      "pH balanceado fisiológicamente para ser no irritante.",
      "Seguro para usar alrededor de ojos, nariz y boca (según formulación Vetericyn VF).",
      "No interfiere con la cicatrización normal."
    ],
    usos_principales: "Tratamiento tópico de heridas, quemaduras e infecciones cutáneas en todas las especies.",
    inicio_accion: "Inmediato (tópico)",
    duracion_efecto: "Limitada al tiempo de contacto"
  },
  informacion_cliente: [
    "Pulverizar generosamente sobre la zona afectada.",
    "Es seguro si el animal se lame la zona tras la aplicación.",
    "No mancha los tejidos ni irrita la piel sana.",
    "Utilizar hasta dos veces al día según las indicaciones del veterinario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Heridas / Infecciones cutáneas",
        vias: ["Tópica (Spray)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pulverización hasta cubrir zona"
        },
        frecuencia: {
          texto_ui: "Hasta dos veces al día",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Heridas / Piel",
        vias: ["Tópica (Spray)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pulverización"
        },
        frecuencia: {
          texto_ui: "Hasta dos veces al día",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Ninguna reportada."
    ],
    efectos_adversos: [
      "No se han reportado efectos adversos significativos."
    ],
    monitoreo_recomendado: [
      "Evolución de la cicatrización",
      "Ausencia de signos de infección"
    ],
    instrucciones_manejo: "Almacenar a temperatura ambiente, protegido de la luz solar directa.",
    sobredosis: {
      signos: ["No aplica; alta seguridad clínica"],
      tratamiento: "No requerido."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Oxidante que destruye las paredes celulares de microorganismos y facilita la limpieza mecánica de la herida.",
    farmacocinetica: "Acción tópica local; no se absorbe sistémicamente."
  },
  presentaciones_comerciales: [
    {
      tipo: "Spray tópico",
      concentracion_texto: "80 ppm a 150 ppm",
      valor_concentracion: 100,
      unidad_concentracion: "ppm",
      es_divisible: false
    }
  ]
};