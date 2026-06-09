import type { Drug } from '@/lib/types';

export const catAppeasingPheromoneDrug: Drug = {
  id: "cat_appeasing_pheromone",
  meta_data: {
    nombre_generico: "Feromona de apaciguamiento felino",
    nombres_comerciales: ["Feliway Friends"],
    grupo_farmacologico: "Análogo de feromona materna; Modificador de conducta",
    status_regulatorio: "Venta libre (General sale)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Mezcla basada en derivados de las secreciones dérmicas producidas por la gata después del parto.",
      "Provoca un sesgo emocional innato de seguridad y protección que no requiere aprendizaje.",
      "Reduce el antagonismo y la tensión social entre gatos que conviven en el mismo hogar.",
      "Puede ayudar en dolencias físicas ligadas al estrés crónico (cistitis, vómitos idiopáticos, sobreacicalamiento).",
      "Los estudios publicados muestran efectos clínicos marginales en algunos casos."
    ],
    usos_principales: "Manejo de conflictos entre gatos (agresión, bufidos, persecuciones) y signos de tensión social (bloqueos, evitación persistente). Ayuda en el manejo de patologías asociadas al estrés.",
    inicio_accion: "Efecto progresivo; evaluar respuesta tras 1 mes",
    duracion_efecto: "Continua mientras el difusor esté conectado"
  },
  informacion_cliente: [
    "El difusor debe permanecer conectado las 24 horas del día (no encender y apagar).",
    "Colocar el difusor en el área donde los gatos descansan habitualmente, no necesariamente donde ocurren las peleas.",
    "Si no se observa mejoría después de 1 mes de uso continuo, se debe reevaluar el diagnóstico conductual.",
    "Debe usarse junto con un plan de manejo que asegure que cada gato tenga acceso independiente a sus recursos (comida, agua, areneros).",
    "Descartar causas médicas primarias si el gato presenta vómitos o problemas urinarios antes de atribuirlos solo al estrés."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Conflictos y tensión social intraespecífica",
        vias: ["Ambiental (Difusor)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Difusor conectado permanentemente"
        },
        notas_tecnicas: "Un difusor cubre aproximadamente 50-70 m². El recambio suele durar 30 días."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Ninguna conocida."
    ],
    efectos_adversos: [
      "No se han reportado efectos adversos significativos."
    ],
    monitoreo_recomendado: [
      "Interacciones sociales entre gatos",
      "Signos clínicos de estrés (ej. cistitis idiopática)"
    ],
    instrucciones_manejo: "Evitar conectar el difusor debajo de estantes, detrás de puertas o cerca de corrientes de aire intensas.",
    sobredosis: {
      signos: ["No aplica"],
      tratamiento: "No requerido."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Modulación de la percepción del entorno mediante señales olfativas químicas que inducen un estado emocional de seguridad.",
    farmacocinetica: "Acción por inhalación local del aerosol liberado por el difusor."
  },
  presentaciones_comerciales: [
    {
      tipo: "Difusor eléctrico (Vial + Dispositivo)",
      concentracion_texto: "48 ml",
      valor_concentracion: 1,
      unidad_concentracion: "unidad",
      es_divisible: false
    }
  ]
};
