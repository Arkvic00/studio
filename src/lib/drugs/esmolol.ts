import type { Drug } from '@/lib/types';

export const esmololDrug: Drug = {
  id: "esmolol",
  meta_data: {
    nombre_generico: "Esmolol",
    nombres_comerciales: ["Brevibloc"],
    grupo_farmacologico: "Bloqueador beta-1 adrenérgico de acción ultra corta",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Beta-bloqueador relativamente cardioselectivo.",
      "Acción inotrópica y cronotrópica negativa.",
      "Reduce la demanda de oxígeno miocárdico y la presión arterial.",
      "Efecto breve (persiste solo 10-20 min post-infusión).",
      "Ideal para evaluar la eficacia de beta-bloqueadores en arritmias supraventriculares antes de pasar a terapia crónica."
    ],
    usos_principales: "Terapia y evaluación de la eficacia en taquicardias supraventriculares (fibrilación auricular, flutter y taquicardia auricular).",
    inicio_accion: "Inmediato (IV)",
    duracion_efecto: "10-20 minutos"
  },
  informacion_cliente: [
    "Medicamento de uso estrictamente hospitalario.",
    "Requiere monitoreo constante del ritmo cardíaco y la presión arterial.",
    "No se debe administrar junto con agonistas alfa-adrenérgicos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Taquicardia supraventricular (Bolo)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.275,
          dosis_min: 0.05,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar el bolo en un periodo de 5 minutos."
      },
      {
        indicacion: "Taquicardia supraventricular (CRI)",
        vias: ["IV (Infusión)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 112.5,
          dosis_min: 25,
          dosis_max: 200,
          unidad_calculo: "μg/kg/min"
        }
      }
    ],
    gato: [
      {
        indicacion: "Taquicardia supraventricular (Bolo)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.275,
          dosis_min: 0.05,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Taquicardia supraventricular (CRI)",
        vias: ["IV (Infusión)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 112.5,
          dosis_min: 25,
          dosis_max: 200,
          unidad_calculo: "μg/kg/min"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Pacientes con bradiarritmias.",
      "Fallo cardíaco congestivo agudo o descompensado.",
      "No administrar con agonistas alfa-adrenérgicos."
    ],
    efectos_adversos: [
      "Bradicardia y bloqueos AV.",
      "Depresión miocárdica.",
      "Hipotensión.",
      "Broncoespasmo.",
      "Letargo (por su alta liposolubilidad y penetración al SNC)."
    ],
    monitoreo_recomendado: [
      "ECG continuo",
      "Presión arterial",
      "Función renal (puede reducir la tasa de filtración glomerular)"
    ],
    instrucciones_manejo: "Observar precauciones normales para inyectables.",
    sobredosis: {
      signos: ["Bradicardia severa", "Hipotensión profunda", "Colapso"],
      tratamiento: "Cese inmediato de la infusión; el efecto desaparece en pocos minutos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Bloqueadores de canales de calcio", efecto: "Riesgo extremo de bradicardia e hipotensión fatal.", severidad: "Grave" },
      { farmaco: "Digoxina", efecto: "Potencia la bradicardia; aumenta niveles de digoxina en un 20%.", severidad: "Importante" },
      { farmaco: "Morfina", efecto: "Aumenta los niveles de esmolol en un 50%.", severidad: "Moderada" },
      { farmaco: "Teofilina", efecto: "El esmolol puede bloquear su efecto broncodilatador.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueador beta-1 adrenérgico cardioselectivo de acción ultra corta.",
    farmacocinetica: "Eliminación muy rápida."
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
