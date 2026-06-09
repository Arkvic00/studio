import type { Drug } from '@/lib/types';

export const pethidineDrug: Drug = {
  id: "pethidine",
  meta_data: {
    nombre_generico: "Petidina (Meperidina)",
    nombres_comerciales: ["Demerol"],
    grupo_farmacologico: "Opioide agonista mu puro",
    status_regulatorio: "POM-V CD SCHEDULE 2"
  },
  resumen_clinico: {
    puntos_clave: [
      "Opioide de acción rápida y corta duración.",
      "Causa liberación masiva de histamina si se inyecta IV (¡PROHIBIDO IV!).",
      "Menos espasmo del tracto biliar que la morfina; útil en pancreatitis.",
      "Posee efectos anticolinérgicos leves (taquicardia, boca seca).",
      "Frecuente redosificación requerida por su corta vida media."
    ],
    usos_principales: "Analgesia perioperatoria para dolor leve a moderado y premedicación anestésica.",
    inicio_accion: "10–15 minutos (IM/SC)",
    duracion_efecto: "45 a 60 minutos"
  },
  informacion_cliente: [
    "Medicamento sujeto a estricto control legal; uso hospitalario.",
    "El efecto desaparece rápido, por lo que el animal puede requerir dosis frecuentes.",
    "La inyección puede ser voluminosa y dolorosa en el músculo.",
    "No se debe administrar por la vena."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Analgesia / Premedicación",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 1 a 2 horas según evaluación", intervalo_horas: 1.5 }
      }
    ],
    gato: [
      {
        indicacion: "Analgesia",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 1 a 2 horas", intervalo_horas: 1.5 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Administración intravenosa (IV) - causa shock anafilactoide.",
      "Mastocitomas (debido a liberación de histamina).",
      "Enfermedad respiratoria severa.",
      "Uso junto con IMAOs."
    ],
    efectos_adversos: [
      "Hipotensión y taquicardia.",
      "Bronconstricción (en animales asmáticos).",
      "Reacciones alérgicas locales (urticaria).",
      "Sedación profunda.",
      "Boca seca."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Presión arterial",
      "Escalas de dolor (redosificación frecuente)"
    ],
    instrucciones_manejo: "NUNCA administrar por vía IV. Almacenar bajo normativa de estupefacientes.",
    sobredosis: {
      signos: ["Depresión respiratoria", "Hipotensión", "Coma"],
      tratamiento: "Naloxona como antagonista específico. Soporte ventilatorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "IMAOs (Selegilina)", efecto: "Riesgo de coma, convulsiones e hipertermia fatal.", severidad: "Grave" },
      { farmaco: "Depresores del SNC", efecto: "Potenciación de la depresión respiratoria.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista selectivo de los receptores mu-opioides en el SNC.",
    farmacocinetica: "Metabolismo hepático a normeperidina (metabolito neurotóxico en uso crónico prolongado)."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "50 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};