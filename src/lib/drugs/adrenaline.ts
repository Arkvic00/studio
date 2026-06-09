import type { Drug } from '@/lib/types';

export const adrenalineDrug: Drug = {
  id: "adrenaline",
  meta_data: {
    nombre_generico: "Adrenalina (Epinefrina)",
    nombres_comerciales: ["Adrenaline*", "Epinephrine*"],
    grupo_farmacologico: "Agonista adrenérgico (alfa y beta)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Ejerce sus efectos a través de los adrenorreceptores alfa-1, -2 y beta-1 y -2.",
      "Los efectos varían según la dosis: dosis bajas predominio beta; dosis altas predominio alfa-1.",
      "No es un sustituto de la terapia de reemplazo de fluidos.",
      "La sobredosis puede ser fatal, especialmente en pacientes pequeños."
    ],
    usos_principales: "Reanimación cardíaca, estatus asmático y para contrarrestar los efectos de la liberación de histamina en reacciones anafilactoides graves. Uso oftálmico en glaucoma de ángulo abierto.",
    inicio_accion: "Inmediato",
    duracion_efecto: "2–5 minutos"
  },
  informacion_cliente: [
    "Medicamento de emergencia para uso hospitalario.",
    "Si se usó una pluma de adrenalina humana en casa, el paciente debe monitorearse por al menos 6 horas.",
    "El uso de plumas humanas a menudo aporta dosis insuficientes en animales."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Paro Cardiopulmonar (CPA) - Dosis Estándar",
        vias: ["IV", "IO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "cada 3-5 minutos", intervalo_horas: 0 },
        notas_tecnicas: "Equivalente a 10 μg/kg de una solución 1:1000. Seguir con un bolo de fluidos para empujar el fármaco a la circulación central."
      },
      {
        indicacion: "Paro Cardiopulmonar (CPA) - Dosis Alta",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Considerar solo tras un CPA prolongado."
      },
      {
        indicacion: "CPA - Vía Intratraqueal",
        vias: ["Intratraqueal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Pueden requerirse dosis más altas. Usar catéter largo para asegurar entrega más allá del tubo endotraqueal."
      },
      {
        indicacion: "Bronconstricción y Anafilaxia",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "La vía IV es preferida si hay hipotensión acompañando la reacción anafilactoide."
      }
    ],
    gato: [
      {
        indicacion: "Paro Cardiopulmonar (CPA) - Dosis Estándar",
        vias: ["IV", "IO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "cada 3-5 minutos", intervalo_horas: 0 },
        notas_tecnicas: "Equivalente a 10 μg/kg. Seguir con bolo de fluidos."
      },
      {
        indicacion: "Bronconstricción y Anafilaxia",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    huron: [
      {
        indicacion: "Uso general / Emergencia",
        vias: ["SC", "IM", "IV", "Intratraqueal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosis de 20 μg/kg."
      }
    ],
    conejo: [
      {
        indicacion: "Reanimación Cardíaca",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "repetir cada 2-5 min", intervalo_horas: 0 },
        notas_tecnicas: "Dosis de 100-200 μg/kg."
      }
    ],
    cobaya: [
      {
        indicacion: "Uso en emergencia",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.003,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosis muy baja de 3 μg/kg."
      }
    ],
    roedores: [
      {
        indicacion: "Otros roedores: Uso en emergencia",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosis de 10 μg/kg según sea necesario."
      }
    ],
    ave: [
      {
        indicacion: "Uso en emergencia / Resucitación",
        vias: ["IM", "IV", "IO", "Intracardiaca", "Intratraqueal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.55,
          dosis_min: 0.1,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Resucitación",
        vias: ["IV", "IO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Resucitación - Vía Intratraqueal",
        vias: ["Intratraqueal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Diluir en 1 ml de solución salina por cada 100 g de peso corporal."
      },
      {
        indicacion: "Acelerar recuperación de anestesia",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    peces: [
      {
        indicacion: "Tratamiento de paro cardíaco",
        vias: ["IM", "IV", "IP", "Intracardiaca"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.01,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Inyección directa en el miocardio (riesgo de arritmias).",
      "Uso de plumas de adrenalina humana para anafilaxia (dosis ineficaces).",
      "No es sustituto de fluidoterapia."
    ],
    efectos_adversos: [
      "Taquicardia y arritmias (incluyendo fibrilación ventricular).",
      "Aumento de demanda de oxígeno miocárdico.",
      "Boca seca y extremidades frías.",
      "Necrosis en el sitio de inyección tras dosis repetidas."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca y ritmo (ECG)",
      "Glucosa en sangre (especialmente en diabéticos)",
      "Presión arterial"
    ],
    instrucciones_manejo: "No usar si la solución es rosa, marrón o contiene precipitado. Sensible a la luz y al aire. Inestable en dextrosa al 5%.",
    sobredosis: {
      signos: ["Arritmias fatales", "Hipertensión severa"],
      tratamiento: "Oxigenoterapia y uso de beta-2 antagonistas para ralentizar la frecuencia cardíaca."
    },
    interacciones_farmacologicas: [
      { farmaco: "Halotano / Digoxina", efecto: "Sensibilizan el miocardio, aumentando riesgo de arritmias.", severidad: "Grave" },
      { farmaco: "Propranolol", efecto: "Bloquea efectos beta, pudiendo causar aumento excesivo de presión arterial.", severidad: "Importante" },
      { farmaco: "Antihistamínicos / Tiroxina", efecto: "Potencian los efectos de la adrenalina.", severidad: "Moderada" },
      { farmaco: "Oxitócicos", efecto: "Riesgo de hipertensión.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de receptores adrenérgicos alfa-1, alfa-2, beta-1 y beta-2.",
    farmacocinetica: "Duración de acción muy corta (2-5 min). El flujo sanguíneo renal disminuye moderadamente."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "0.1 mg/ml a 10 mg/ml (1:10,000 a 1:100)",
      valor_concentracion: 1,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
