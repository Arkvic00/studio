import type { Drug } from '@/lib/types';

export const tetracaineDrug: Drug = {
  id: "tetracaine",
  meta_data: {
    nombre_generico: "Tetracaína (Ametocaína)",
    nombres_comerciales: ["Amethocaine"],
    grupo_farmacologico: "Anestésico local oftálmico (Éster)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anestésico local de superficie potente.",
      "Provoca una irritación conjuntival mayor que la proxmetacaína.",
      "Efecto inmediato pero de corta duración.",
      "Tóxico para el epitelio corneal; retrasa la cicatrización de úlceras.",
      "Bloquea el reflejo lagrimal (no usar antes de STT)."
    ],
    usos_principales: "Anestesia local de la córnea y conjuntiva para procedimientos diagnósticos breves.",
    inicio_accion: "Inmediato (< 1 min)",
    duracion_efecto: "15 a 30 minutos"
  },
  informacion_cliente: [
    "Medicamento para quitar el dolor en el ojo durante una prueba médica.",
    "No es un tratamiento para casa.",
    "Puede causar que el ojo se ponga rojo por unas horas.",
    "El animal puede parpadear menos; protéjalo del polvo por un rato."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Anestesia ocular superficial",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota por ojo"
        },
        frecuencia: { texto_ui: "Dosis única para el procedimiento", intervalo_horas: 0 }
      }
    ],
    gato: [
      {
        indicacion: "Anestesia ocular superficial",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Uso terapéutico crónico (¡PROHIBIDO!).",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Irritación local marcada y quemosis (hinchazón).",
      "Dolor momentáneo al aplicar.",
      "Toxicidad epitelial corneal.",
      "Anafilaxia (rara)."
    ],
    monitoreo_recomendado: [
      "Integridad de la superficie corneal",
      "Resolución del enrojecimiento"
    ],
    instrucciones_manejo: "Observar precauciones de esterilidad. No requiere refrigeración (a diferencia de proxmetacaína).",
    sobredosis: {
      signos: ["Irritación ocular severa", "Daño corneal"],
      tratamiento: "Lavar con abundante salino estéril."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los canales de sodio neuronales impidiendo la propagación del impulso doloroso.",
    farmacocinetica: "Acción tópica local."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gotas oftálmicas",
      concentracion_texto: "0.5%, 1.0%",
      valor_concentracion: 5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
