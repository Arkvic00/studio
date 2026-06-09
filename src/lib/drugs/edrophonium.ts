import type { Drug } from '@/lib/types';

export const edrophoniumDrug: Drug = {
  id: "edrophonium",
  meta_data: {
    nombre_generico: "Edrofonio (Cloruro de Edrofonio)",
    nombres_comerciales: ["Enlon", "Tensilon"],
    grupo_farmacologico: "Inhibidor de la acetilcolinesterasa de acción ultra-corta",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Aumenta la disponibilidad de acetilcolina en la unión neuromuscular.",
      "Inicio de acción casi instantáneo (30 seg) y duración muy breve (5 min).",
      "Históricamente usado para el 'Test de Tensilon' para diagnosticar Miastenia Gravis.",
      "Requiere tener Atropina preparada (0.05 mg/kg) para tratar posibles crisis colinérgicas.",
      "Diferencia entre subdosificación y sobredosificación de otros anticolinesterásicos."
    ],
    usos_principales: "Diagnóstico de Miastenia Gravis y tratamiento de taquicardia auricular (efecto vagal).",
    inicio_accion: "Inmediato (30 segundos)",
    duracion_efecto: "5 minutos"
  },
  informacion_cliente: [
    "Prueba diagnóstica realizada exclusivamente en el hospital.",
    "El efecto es muy rápido: si es positivo, el animal recupera su fuerza muscular en segundos, pero solo por unos minutos.",
    "Informe si nota babeo excesivo o si el animal orina/defeca durante la prueba."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Diagnóstico de Miastenia Gravis",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Máximo 5 mg. Repetir tras 10-20 min con 0.2 mg/kg si no hay respuesta."
      },
      {
        indicacion: "Taquicardia auricular",
        vias: ["IV"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          unidad_calculo: "mg (Dosis total)"
        }
      }
    ],
    gato: [
      {
        indicacion: "Diagnóstico de Miastenia Gravis",
        vias: ["IV"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/gato (Dosis total)"
        },
        notas_tecnicas: "Dosis mayores (>6 mg/kg) son tóxicas y causan bradicardia severa."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción mecánica gastrointestinal o urinaria.",
      "Peritonitis.",
      "Hipersensibilidad conocida."
    ],
    precauciones: [
      "Asma felina o enfermedad bronquial.",
      "Bradicardia o arritmias.",
      "Insuficiencia renal."
    ],
    efectos_adversos: [
      "Crisis colinérgica: náuseas, vómitos, salivación profusa, diarrea.",
      "Bradicardia severa o asistolia.",
      "Fasciculaciones musculares.",
      "Bronconstricción."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca constante durante la prueba",
      "Estado respiratorio",
      "Fuerza muscular post-inyección"
    ],
    instrucciones_manejo: "Tener jeringa de Atropina cargada antes de inyectar edrofonio.",
    sobredosis: {
      signos: ["Bradicardia extrema", "Salivación masiva", "Parálisis muscular"],
      tratamiento: "Atropina (0.05 mg/kg IV) y soporte respiratorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Relajantes musculares despolarizantes", efecto: "Potenciación del bloqueo neuromuscular.", severidad: "Importante" },
      { farmaco: "Digitálicos", efecto: "Aumenta el riesgo de bradicardia severa.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor competitivo reversible de la acetilcolinesterasa.",
    farmacocinetica: "Distribución y eliminación ultra-rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "10 mg/ml",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
