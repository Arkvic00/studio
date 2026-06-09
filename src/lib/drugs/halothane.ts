import type { Drug } from '@/lib/types';

export const halothaneDrug: Drug = {
  id: "halothane",
  meta_data: {
    nombre_generico: "Halotano",
    nombres_comerciales: ["Fluothane", "Halothane"],
    grupo_farmacologico: "Anestésico volátil inhalatorio",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anestésico inhalatorio potente de alta volatilidad.",
      "Inducción y recuperación más lentas que con isoflurano o sevoflurano por su mayor solubilidad en sangre.",
      "Sensibiliza el miocardio a las catecolaminas (riesgo de arritmias).",
      "Hasta un 25% sufre metabolismo hepático (riesgo de hepatotoxicidad).",
      "Requiere vaporizadores de precisión calibrados periódicamente."
    ],
    usos_principales: "Inducción y mantenimiento de la anestesia general en mamíferos.",
    inicio_accion: "Variable (depende de la concentración y flujo)",
    duracion_efecto: "Limitada al tiempo de inhalación"
  },
  informacion_cliente: [
    "Fármaco de uso estrictamente hospitalario bajo monitorización.",
    "Puede causar una bajada de la presión arterial durante la cirugía.",
    "El animal tarda un poco más en despertar en comparación con otros gases modernos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Inducción de anestesia (sin premedicación)",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.5,
          dosis_min: 3,
          dosis_max: 4,
          unidad_calculo: "%"
        }
      },
      {
        indicacion: "Mantenimiento de anestesia",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.9,
          dosis_min: 0.8,
          dosis_max: 1.2,
          unidad_calculo: "% (MAC)"
        },
        notas_tecnicas: "Ajustar según profundidad anestésica. La premedicación reduce estos requerimientos."
      }
    ],
    gato: [
      {
        indicacion: "Inducción de anestesia",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 3.5, unidad_calculo: "%" }
      },
      {
        indicacion: "Mantenimiento de anestesia",
        vias: ["Inhalada"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0.9, unidad_calculo: "%" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedad hepática preexistente (Absoluta).",
      "Hipertermia maligna (historial previo).",
      "Arritmias cardíacas severas."
    ],
    efectos_adversos: [
      "Hipotensión dosis-dependiente.",
      "Depresión de la contractilidad miocárdica.",
      "Arritmias ventriculares (especialmente con adrenalina).",
      "Reducción del flujo sanguíneo hepático.",
      "Atraviesa la barrera placentaria (afecta neonatos)."
    ],
    monitoreo_recomendado: [
      "Presión arterial (constante)",
      "ECG continuo",
      "EtCO2 (Capnografía)",
      "Profundidad anestésica"
    ],
    instrucciones_manejo: "Proteger de la luz. Corroe metales. El timol (conservante) puede obstruir los puertos del vaporizador.",
    sobredosis: {
      signos: ["Hipotensión profunda", "Paro respiratorio", "Bradiarritmias"],
      tratamiento: "Cerrar el vaporizador, ventilar con O2 al 100%, soporte cardiovascular."
    },
    interacciones_farmacologicas: [
      { farmaco: "Adrenalina / Dopamina", efecto: "Riesgo extremo de arritmias ventriculares.", severidad: "Grave" },
      { farmaco: "Sedantes / Opioides", efecto: "Reducen significativamente el requerimiento de halotano.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "No totalmente esclarecido; altera la función de los canales iónicos y receptores en el SNC.",
    farmacocinetica: "Eliminación pulmonar (75%) y metabolismo hepático (25%)."
  },
  presentaciones_comerciales: [
    { tipo: "Líquido para vaporización", concentracion_texto: "100% (botella 250 ml)", valor_concentracion: 100, unidad_concentracion: "%", es_divisible: false }
  ]
};
