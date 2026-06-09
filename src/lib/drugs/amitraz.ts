import type { Drug } from '@/lib/types';

export const amitrazDrug: Drug = {
  id: "amitraz",
  meta_data: {
    nombre_generico: "Amitraz",
    nombres_comerciales: ["Aludex"],
    grupo_farmacologico: "Ectoparasiticida; Agonista de receptores de octopamina",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agonista de receptores de octopamina en el parásito, resultando en desprendimiento y muerte.",
      "Posee actividad adrenérgica alfa-2 sistémica significativa.",
      "Se usa como baño (dip) que debe dejarse secar en el pelaje sin enjuagar.",
      "La sedación y bradicardia iatrogénica pueden revertirse con atipamezol."
    ],
    usos_principales: "Tratamiento de infestaciones generalizadas por ácaros: demodicosis canina, sarna sarcóptica y cheyletiellosis.",
    inicio_accion: "Inmediato (tópico)",
    duracion_efecto: "Requiere aplicaciones repetidas según protocolo"
  },
  informacion_cliente: [
    "No bañar al animal ni permitir que nade durante las 48 horas posteriores a la aplicación.",
    "Utilizar en áreas bien ventiladas; el producto es inflamable.",
    "Cortar el pelo largo ayuda a que el baño penetre mejor en la piel.",
    "Desechar cualquier solución diluida sobrante; no se puede almacenar una vez mezclada con agua."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Demodicosis generalizada (Solución 0.05%)",
        vias: ["Tópica (Baño/Dip)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "ml Aludex por cada 100 ml de agua"
        },
        frecuencia: {
          texto_ui: "Cada 5 a 7 días",
          intervalo_horas: 168
        },
        notas_tecnicas: "Continuar hasta obtener 2 raspados cutáneos negativos con 2 semanas de diferencia. No enjuagar."
      },
      {
        indicacion: "Sarna sarcóptica (Solución 0.025%)",
        vias: ["Tópica (Baño/Dip)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "ml Aludex por cada 200 ml de agua"
        },
        frecuencia: {
          texto_ui: "Semanalmente por 2 a 6 semanas",
          intervalo_horas: 168
        },
        notas_tecnicas: "No enjuagar tras la aplicación."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Chihuahuas (Absoluta).",
      "Animales diabéticos (afecta niveles de insulina/glucosa).",
      "Perros menores de 3 meses.",
      "Animales con estrés por calor."
    ],
    contraindicaciones_especie: {
      "Gato": "¡PROHIBIDO!: Altamente tóxico. No usar bajo ninguna circunstancia.",
      "Perro": "PROHIBIDO en raza CHIHUAHUA, animales DIABÉTICOS o con estrés por calor."
    },
    efectos_adversos: [
      "Sedación y bradicardia (efecto alfa-2).",
      "Irritación cutánea transitoria.",
      "Vómitos y diarrea.",
      "Depresión del SNC (raro)."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Niveles de glucosa en pacientes de riesgo",
      "Estado de alerta (sedación)"
    ],
    instrucciones_manejo: "INFLAMABLE. No fumar durante su aplicación. Usar guantes y en lugar ventilado.",
    sobredosis: {
      signos: ["Sedación profunda", "Bradicardia severa", "Hipotensión"],
      tratamiento: "Revertir con un antagonista alfa-2 como atipamezol o yohimbina."
    },
    interacciones_farmacologicas: [
      {
        farmaco: "Agonistas Alfa-2 (Xilacina, Dexmedetomidina)",
        efecto: "Potenciación peligrosa de la sedación y bradicardia.",
        severidad: "Grave"
      },
      {
        farmaco: "Otros ectoparasiticidas",
        efecto: "No usar concurrentemente.",
        severidad: "Importante"
      }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista del receptor de octopamina en parásitos. En mamíferos actúa como agonista alfa-2 adrenérgico y tiene una débil actividad en receptores H1.",
    farmacocinetica: "Absorción sistémica limitada pero suficiente para causar efectos secundarios alfa-2 en algunos individuos."
  },
  presentaciones_comerciales: [
    {
      tipo: "Líquido concentrado",
      concentracion_texto: "5% p/v (50 mg/ml)",
      valor_concentracion: 50,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
