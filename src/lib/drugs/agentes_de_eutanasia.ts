import type { Drug } from '@/lib/types';

export const agentesDeEutanasiaDrug: Drug = {
  id: "agentes_de_eutanasia",
  meta_data: {
    nombre_generico: "Agentes de Eutanasia (con Pentobarbital)",
    nombres_comerciales: ["Euthasol", "Fatal-Plus", "SomnaSol", "Beuthanasia-D"],
    grupo_farmacologico: "Barbitúrico; Agente de eutanasia",
    status_regulatorio: "Sustancia Controlada Clase II/III"
  },
  resumen_clinico: {
    puntos_clave: [
        "La vía IV es esencial para una eutanasia suave y rápida.",
        "La pre-sedación puede reducir el estrés del animal y facilitar la administración IV.",
        "Los tejidos de animales eutanasiados son tóxicos si son ingeridos por otros animales (carroñeros)."
    ],
    usos_principales: "Inducción de la eutanasia humanitaria en animales."
  },
  informacion_cliente: [
    "Este es un medicamento utilizado para la eutanasia humanitaria. Se administra por vía intravenosa para asegurar una transición pacífica e indolora."
  ],
  monitoreo_paciente: [
    "Confirmación de la muerte."
  ],
  parametros_dosificacion: {
    "todas": [
      {
        "indicacion": "Eutanasia",
        "vias": ["IV", "IP", "IC"],
        "math": {
          "tipo_calculo": "fija",
          "unidad_calculo": "mL/kg"
        },
        "notas_tecnicas": "Aproximadamente 1 mL por cada 4.5 kg (10 lbs) de peso corporal, administrado IV rápidamente. Asegurar una dosis suficiente."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["No usar para anestesia o sedación."],
    precauciones: ["Administrar solo después de que el animal esté profunda e irreversiblemente inconsciente si se usa la vía intracardíaca (IC)."],
    efectos_adversos: [
        "Vocalización, jadeo o movimientos musculares transitorios durante la inducción (no son signos de dolor o conciencia si la administración es adecuada).",
        "Dolor si se administra perivascularmente.",
        "Trombosis si se administra demasiado lento."
    ],
    sobredosis: {
      "signos": [],
      "tratamiento": "El objetivo es la sobredosis para asegurar la eutanasia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    "mecanismo_accion": "Pentobarbital: Barbitúrico de acción ultra corta. Deprime profundamente todo el SNC, incluyendo los centros respiratorio y vasomotor en la médula, causando cese respiratorio y paro cardíaco. Fenitoína (en Beuthanasia-D): Agente antiarrítmico que contribuye a la parada cardíaca.",
    "farmacocinetica": "Administración IV (preferida) o intracardíaca (solo en animales inconscientes o anestesiados). Inicio de acción muy rápido (segundos)."
  },
  presentaciones_comerciales: [
    {
      "tipo": "Inyección",
      "concentracion_texto": "Soluciones que contienen Pentobarbital sódico (generalmente 390 mg/mL), a menudo combinadas con Fenitoína (Beuthanasia-D) u otros agentes.",
      "valor_concentracion": 390,
      "unidad_concentracion": "mg/mL",
      "es_divisible": false
    }
  ]
};
