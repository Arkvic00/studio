import type { Drug } from '@/lib/types';

export const desoxycortonePivalateDrug: Drug = {
  id: "desoxycortone_pivalate",
  meta_data: {
    nombre_generico: "Pivalato de Desoxicortona (DOCP)",
    nombres_comerciales: ["Zycortal"],
    grupo_farmacologico: "Mineralocorticoide",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Mineralocorticoide puro de larga duración para terapia de reemplazo.",
      "Promueve la retención de sodio y la excreción de potasio en el riñón.",
      "A diferencia de la fludrocortisona, no tiene actividad glucocorticoide (requiere prednisolona concurrente).",
      "Fundamental estabilizar al paciente (rehidratar) antes de iniciar el mantenimiento.",
      "La dosis debe ajustarse individualmente según los niveles de electrolitos."
    ],
    usos_principales: "Tratamiento del hipoadrenocorticismo primario (Enfermedad de Addison) en perros y gatos.",
    inicio_accion: "Variable (no para crisis aguda inmediata)",
    duracion_efecto: "Aproximadamente 25 días"
  },
  informacion_cliente: [
    "Se administra mediante inyección debajo de la piel aproximadamente una vez al mes.",
    "Es vital no saltarse ninguna dosis para prevenir una crisis de Addison mortal.",
    "El animal debe recibir también una pequeña dosis diaria de un esteroide oral (ej. prednisolona).",
    "Informe si nota que su mascota bebe u orina en exceso, o si parece muy débil.",
    "Se requieren análisis de sangre periódicos para controlar el sodio y el potasio."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipoadrenocorticismo (Mantenimiento)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1.0,
          dosis_max: 2.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 25 a 30 días (ajustar según electrolitos)",
          intervalo_horas: 600
        },
        notas_tecnicas: "Iniciar con 1.5 mg/kg en perros grandes. Medir electrolitos a los 10 y 25 días para ajustar dosis e intervalo."
      }
    ],
    gato: [
      {
        indicacion: "Hipoadrenocorticismo (Mantenimiento)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 25 a 30 días",
          intervalo_horas: 600
        },
        notas_tecnicas: "Experiencia limitada en gatos; dosis altas suelen ser necesarias."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Crisis de Addison aguda no estabilizada (rehidratar primero).",
      "Insuficiencia cardíaca congestiva severa.",
      "Enfermedad renal severa u edema."
    ],
    efectos_adversos: [
      "Poliuria y polidipsia.",
      "Hipopotasemia (niveles bajos de potasio).",
      "Dolor leve en el sitio de inyección.",
      "Vómitos y anorexia (raro).",
      "Hinchazón del hocico y anafilaxia (muy raro)."
    ],
    monitoreo_recomendado: [
      "Electrolitos séricos (Sodio y Potasio) a los 10 y 25 días post-inyección",
      "Estado de hidratación",
      "Presión arterial en pacientes cardiópatas"
    ],
    instrucciones_manejo: "Agitar suavemente para resuspender antes de usar. Mantener la jeringa en movimiento para evitar precipitación antes de inyectar.",
    sobredosis: {
      signos: ["Poliuria severa", "Debilidad muscular extrema por hipopotasemia", "Hipertensión"],
      tratamiento: "Fluidoterapia sin potasio y ajuste a la baja de la siguiente dosis."
    },
    interacciones_farmacologicas: [
      { farmaco: "Espironolactona", efecto: "Antagonismo directo de los efectos de la desoxicortona.", severidad: "Grave" },
      { farmaco: "Diuréticos (Furosemida / Tiazidas)", efecto: "Aumentan el riesgo de hipopotasemia severa.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Análogo de la aldosterona que actúa en el túbulo distal renal aumentando la reabsorción de sodio y cloruro, y la secreción de potasio e hidrógeno.",
    farmacocinetica: "Liberación lenta y sostenida desde el depósito subcutáneo."
  },
  presentaciones_comerciales: [
    {
      tipo: "Suspensión inyectable",
      concentracion_texto: "25 mg/ml",
      valor_concentracion: 25,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
