import type { Drug } from '@/lib/types';

export const diflubenzuronDrug: Drug = {
  id: "diflubenzuron",
  meta_data: {
    nombre_generico: "Diflubenzuron",
    nombres_comerciales: ["Aradol", "CestoNemEx", "Parazin", "Dimilin"],
    grupo_farmacologico: "Inhibidor de la síntesis de quitina; Ectoparasiticida (Peces)",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de quitina durante la muda (ecdisis) del exoesqueleto de parásitos crustáceos.",
      "Solo es efectivo contra estadios inmaduros (incluyendo huevos), no contra adultos.",
      "Altamente tóxico para especies no objetivo (invertebrados acuáticos).",
      "Persistente en el ambiente."
    ],
    usos_principales: "Tratamiento de ectoparásitos crustáceos en peces (Argulus, Ergasilus, Lernaea).",
    inicio_accion: "Efecto visible tras el siguiente ciclo de muda del parásito.",
    duracion_efecto: "Persistente en el agua (requiere protocolos intermitentes)"
  },
  informacion_cliente: [
    "No utilizar en presencia de invertebrados (caracoles, gambas, corales) ya que los matará.",
    "Seguir estrictamente el calendario de tratamiento para eliminar las nuevas generaciones de parásitos.",
    "No verter agua tratada directamente en fuentes naturales."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Ectoparásitos crustáceos (Inmersión prolongada)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.03,
          unidad_calculo: "mg/l"
        },
        notas_tecnicas: "Dosis alternativa: 0.01 mg/l cada 6 días por 3 tratamientos. Seguir recomendaciones del fabricante para productos comerciales."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Presencia de invertebrados acuáticos.",
      "Uso en sistemas de agua abierta sin filtración adecuada."
    ],
    efectos_adversos: [
      "Mortalidad masiva de invertebrados.",
      "Toxicidad potencial para peces si se excede la dosis significativamente."
    ],
    monitoreo_recomendado: [
      "Presencia de estadios inmaduros del parásito",
      "Salud de la población de peces"
    ],
    instrucciones_manejo: "Observar precauciones ambientales normales.",
    sobredosis: {
      signos: ["Mortalidad en especies sensibles"],
      tratamiento: "Cambio masivo de agua y filtración con carbón activado."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interfiere con la polimerización de la quitina en el exoesqueleto, impidiendo que el parásito complete su muda con éxito.",
    farmacocinetica: "Actúa localmente en el agua y sobre la superficie del pez."
  },
  presentaciones_comerciales: [
    { tipo: "Líquido para inmersión", concentracion_texto: "1 g/l o 1.64 g/l", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tabletas", concentracion_texto: "4 g", valor_concentracion: 4000, unidad_concentracion: "mg", es_divisible: false }
  ]
};
