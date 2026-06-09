import type { Drug } from '@/lib/types';

export const potassiumCitrateDrug: Drug = {
  id: "potassium_citrate",
  meta_data: {
    nombre_generico: "Citrato de Potasio",
    nombres_comerciales: ["Cystopurin"],
    grupo_farmacologico: "Alcalinizante urinario",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Metabolizado a bicarbonato, lo que alcaliniza la orina.",
      "Aumenta la excreción urinaria de citrato, que inhibe la cristalización de sales de calcio.",
      "Útil para prevenir cálculos de oxalato de calcio y uratos.",
      "También se usa para corregir acidosis metabólica leve.",
      "Menos efectivo para reponer potasio que el cloruro o gluconato."
    ],
    usos_principales: "Prevención de urolitiasis por oxalato de calcio y uratos, y alcalinización urinaria.",
    inicio_accion: "Rápido",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Medicamento para prevenir piedras en la vejiga.",
    "El veterinario le pedirá controlar el pH de la orina de su mascota regularmente.",
    "Informe si nota que su mascota está muy débil o tiene vómitos (signos de potasio alto).",
    "No dar junto con otros suplementos de potasio sin consultar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Alcalinización urinaria / Oxalato",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Ajustar dosis para mantener pH urinario entre 7.0 y 7.5."
      }
    ],
    gato: [
      {
        indicacion: "Alcalinización urinaria",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hiperpotasemia.",
      "Insuficiencia renal severa.",
      "Enfermedad cardíaca (riesgo con potasio).",
      "Cistitis por estruvita (la alcalinización empeora la estruvita)."
    ],
    efectos_adversos: [
      "Hiperpotasemia (debilidad, arritmias).",
      "Vómitos y diarrea.",
      "Cistitis por estruvita iatrogénica."
    ],
    monitoreo_recomendado: [
      "pH urinario regularmente",
      "Potasio sérico",
      "Función renal"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Bradicardia", "Debilidad muscular profunda", "Colapso"],
      tratamiento: "Cese inmediato. Administrar Gluconato de Calcio IV e Insulina/Dextrosa si la hiperpotasemia es crítica."
    },
    interacciones_farmacologicas: [
      { farmaco: "IECAs (Enalapril) / Espironolactona", efecto: "Riesgo severo de hiperpotasemia por efecto ahorrador de potasio.", severidad: "Importante" },
      { farmaco: "Metenamina", efecto: "Citrato inhibe su eficacia al alcalinizar la orina.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "El anión citrato se metaboliza a bicarbonato sistémicamente, mientras que el citrato restante en orina quelante el calcio libre.",
    farmacocinetica: "Absorción oral rápida. Excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Polvo / Granulado", concentracion_texto: "30% Potasio Citrato", valor_concentracion: 300, unidad_concentracion: "mg/g", es_divisible: false }
  ]
};