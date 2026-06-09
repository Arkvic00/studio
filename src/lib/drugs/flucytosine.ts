import type { Drug } from '@/lib/types';

export const flucytosineDrug: Drug = {
  id: "flucytosine",
  meta_data: {
    nombre_generico: "Flucitosina (5-FC)",
    nombres_comerciales: ["Ancotil"],
    grupo_farmacologico: "Antifúngico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Las células fúngicas convierten la flucitosina en 5-fluorouracilo, inhibiendo la síntesis de ADN y ARN.",
      "Excelente penetración en el líquido cefalorraquídeo (LCR).",
      "Uso principal en criptococosis (especialmente si hay afectación meningea) y candidiasis urinaria.",
      "Se desarrolla resistencia rápidamente si se usa como agente único; casi siempre se combina con anfotericina B o itraconazol.",
      "Requiere ajuste de dosis en insuficiencia renal o hepática."
    ],
    usos_principales: "Tratamiento de criptococosis sistémica o del SNC e infecciones urinarias por levaduras.",
    inicio_accion: "Rápido",
    duracion_efecto: "Requiere administración cada 6 a 8 horas"
  },
  informacion_cliente: [
    "Informe si nota erupciones en la piel, vómitos o diarrea.",
    "El tratamiento suele ser prolongado y requiere controles de sangre frecuentes para vigilar el hígado, riñones y defensas.",
    "Se recomienda administrar el medicamento en un periodo de 15 minutos para reducir malestar gástrico."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones fúngicas (Criptococosis / Candidiasis)",
        vias: ["IV", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          dosis_min: 25,
          dosis_max: 65,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "IV: 25-35 mg/kg q8h. PO: 50-65 mg/kg q8h."
      }
    ],
    gato: [
      {
        indicacion: "Criptococosis (especialmente del SNC)",
        vias: ["IV", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          dosis_min: 25,
          dosis_max: 65,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "IV: 25-50 mg/kg q6h. PO: 50-65 mg/kg q8h. Combinar siempre para evitar resistencias."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas reportadas.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Erupciones cutáneas (incluida la necrólisis epidérmica tóxica).",
      "Vómitos y diarrea.",
      "Mielosupresión (bajada de defensas y plaquetas).",
      "Toxicidad renal y hepática.",
      "Potencial teratogénico (no usar en gestantes)."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) regularmente",
      "Función renal (Creatinina/BUN)",
      "Función hepática (ALT/ALP)"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Administrar dosis orales lentamente.",
    sobredosis: {
      signos: ["Supresión medular profunda", "Vómitos severos", "Daño hepático"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anfotericina B", efecto: "Sinergia positiva contra Cryptococcus pero aumenta el riesgo de nefrotoxicidad.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antimetabolito que se convierte en 5-fluorouracilo dentro de la célula fúngica, inhibiendo la timidilato sintetasa y bloqueando la síntesis de ADN y ARN.",
    farmacocinetica: "Buena absorción oral. Eliminación renal predominante."
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