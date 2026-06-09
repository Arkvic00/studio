import type { Drug } from '@/lib/types';

export const diphenoxylateDrug: Drug = {
  id: "diphenoxylate",
  meta_data: {
    nombre_generico: "Difenoxilato (con Atropina)",
    nombres_comerciales: ["Co-phenotrope", "Lofenoxal", "Lomotil"],
    grupo_farmacologico: "Opioide antidiarréico y antitusígeno",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Opioide que aumenta el tono muscular segmentario intestinal.",
      "Disminuye la actividad propulsiva y la secreción de electrolitos.",
      "Contiene una dosis sub-terapéutica de atropina para desalentar el abuso.",
      "Posee propiedades antitusígenas útiles en tos crónica.",
      "Uso con precaución en gatos por posibles efectos excitatorios."
    ],
    usos_principales: "Manejo de la diarrea aguda, síndrome de intestino irritable y tratamiento de la tos crónica en perros.",
    inicio_accion: "Rápido (acción local y central)",
    duracion_efecto: "6 a 12 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota está excesivamente somnolienta.",
    "El medicamento puede causar estreñimiento; suspenda si las heces se vuelven muy duras.",
    "No usar si sospecha que el animal ha ingerido un objeto extraño o tiene una obstrucción.",
    "Asegúrese de que el animal tenga siempre agua fresca disponible."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Diarrea aguda / SII",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas",
          intervalo_horas: 8
        }
      },
      {
        indicacion: "Antitusígeno (Tos crónica)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.2,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Monitorear estrechamente el estreñimiento; usar ablandadores de heces si es necesario."
      }
    ],
    gato: [
      {
        indicacion: "Uso no recomendado",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "N/A"
        },
        notas_tecnicas: "Seguridad y eficacia no establecidas; riesgo de respuestas conductuales adversas (excitación)."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción intestinal mecánica.",
      "Enfermedad hepática severa.",
      "Enfermedad intestinal neoplásica o tóxica."
    ],
    efectos_adversos: [
      "Sedación.",
      "Estreñimiento e íleo.",
      "Gatos: Posible excitación y comportamiento anormal."
    ],
    monitoreo_recomendado: [
      "Frecuencia y consistencia de las defecaciones",
      "Estado de alerta",
      "Frecuencia respiratoria en dosis altas"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Sedación profunda", "Depresión respiratoria", "Estreñimiento severo"],
      tratamiento: "Naloxona como antagonista específico. Soporte ventilatorio si es necesario."
    },
    interacciones_farmacologicas: [
      { farmaco: "Barbitúricos / Tranquilizantes", efecto: "Potenciación del efecto sedante.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de receptores opioides en los plexos mientéricos, reduciendo la motilidad propulsiva y aumentando el tiempo de tránsito.",
    farmacocinetica: "Metabolismo hepático. Excreción renal y biliar."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "2.5 mg Difenoxilato + 0.025 mg Atropina",
      valor_concentracion: 2.5,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
