import type { Drug } from '@/lib/types';

export const pyriproxyfenDrug: Drug = {
  id: "pyriproxyfen",
  meta_data: {
    nombre_generico: "Piriproxifeno",
    nombres_comerciales: ["Cyclio", "Exproline", "Vectra"],
    grupo_farmacologico: "Regulador del crecimiento de insectos (IGR)",
    status_regulatorio: "POM-V / NFA-VPS"
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo de la hormona juvenil que inhibe el desarrollo de huevos y larvas de pulgas.",
      "No mata a las pulgas adultas; debe usarse con un adulticida.",
      "Efecto persistente en el ambiente.",
      "Muy baja toxicidad en mamíferos."
    ],
    usos_principales: "Control de la población de pulgas mediante la interrupción de su ciclo de vida.",
    inicio_accion: "Inmediato sobre estadios inmaduros",
    duracion_efecto: "Hasta 3 meses en el ambiente"
  },
  informacion_cliente: [
    "No bañar al animal inmediatamente después de la aplicación tópica.",
    "Mantener alejado de los ojos del animal.",
    "Lavar las manos tras la aplicación."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Control de pulgas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta según peso"
        },
        frecuencia: { texto_ui: "Mensual" }
      }
    ],
    gato: [
      {
        indicacion: "Control de pulgas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta según peso"
        },
        frecuencia: { texto_ui: "Mensual" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Hipersensibilidad conocida."],
    efectos_adversos: ["Irritación local leve."],
    monitoreo_recomendado: ["Presencia de parásitos"],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["No reportados"],
      tratamiento: "Lavar el área con agua y jabón."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Imita la hormona juvenil natural de los insectos, evitando que las larvas muden.",
    farmacocinetica: "Se distribuye por los lípidos de la superficie de la piel."
  },
  presentaciones_comerciales: [
    { tipo: "Pipeta Spot-on", concentracion_texto: "Variable según presentación", valor_concentracion: 0 }
  ]
};