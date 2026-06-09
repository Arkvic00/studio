import type { Drug } from '@/lib/types';

export const nitrofurantoinDrug: Drug = {
  id: "nitrofurantoin",
  meta_data: {
    nombre_generico: "Nitrofurantoína",
    nombres_comerciales: ["Furadantin", "Nitrofurantoin*"],
    grupo_farmacologico: "Antibacteriano (Nitrofurano)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Interacciona con el ADN bacteriano causando rotura de hebras.",
      "Eficaz contra bacterias multirresistentes en el tracto urinario.",
      "Alcanza niveles terapéuticos solo en la orina (no en suero ni tejidos).",
      "No es apto para el tratamiento de pielonefritis o infecciones sistémicas.",
      "La actividad disminuye significativamente si se alcaliniza la orina.",
      "Preocupación por potencial mutagénico y carcinogénico."
    ],
    usos_principales: "Tratamiento de infecciones del tracto urinario (ITU) causadas por organismos multirresistentes confirmados por sensibilidad.",
    inicio_accion: "Rápido (concentración urinaria inmediata)",
    duracion_efecto: "Corta (requiere dosis cada 8 horas)"
  },
  informacion_cliente: [
    "¡PRECAUCIÓN!: Use guantes para manipular el medicamento debido a su potencial mutagénico.",
    "Administrar junto con el alimento para mejorar la absorción y reducir náuseas.",
    "Solo es útil para infecciones de vejiga; no sirve para infecciones en otras partes del cuerpo.",
    "No use suplementos que cambien el pH de la orina a menos que el veterinario lo indique.",
    "No usar en hembras gestantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones del Tracto Urinario (ITU)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4.7,
          dosis_min: 4.4,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas con comida", intervalo_horas: 8 },
        notas_tecnicas: "No usar en presencia de insuficiencia renal significativa (Gant/Creatinina elevada)."
      }
    ],
    gato: [
      {
        indicacion: "Infecciones del Tracto Urinario (ITU)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4.7,
          dosis_min: 4.4,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal significativa (riesgo de toxicidad sistémica).",
      "Gestación (Mutagénico).",
      "Hipersensibilidad a nitrofuranos."
    ],
    efectos_adversos: [
      "Náuseas, vómitos y diarrea (frecuentes).",
      "Hepatotoxicidad.",
      "Neuritis periférica (en humanos).",
      "Trombocitopenia y anemia en dosis altas."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN)",
      "Hemograma (CBC)",
      "Urianálisis periódico"
    ],
    instrucciones_manejo: "MUTAGÉNICO. Usar guantes impermeables. Evitar la inhalación de polvo de tabletas trituradas.",
    sobredosis: {
      signos: ["Vómitos intensos", "Hemorragia gastrointestinal"],
      tratamiento: "Soporte sintomático y forzar diuresis si la función renal es normal."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antagonistas de la secreción ácida", efecto: "Aumentan la absorción de la nitrofurantoína.", severidad: "Leve" },
      { farmaco: "Fluoroquinolonas", efecto: "Antagonismo mutuo; no usar en combinación.", severidad: "Importante" },
      { farmaco: "Espironolactona", efecto: "Puede aumentar el riesgo de hiperpotasemia.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Reacciona con nitroreductasas bacterianas formando metabolitos que dañan el ADN.",
    farmacocinetica: "Absorción oral rápida. Eliminación renal ultra-rápida. No alcanza niveles sistémicos terapéuticos."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "50 mg, 100 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "5 mg/ml", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};