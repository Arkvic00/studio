import type { Drug } from '@/lib/types';

export const dexmedetomidineDrug: Drug = {
  id: "dexmedetomidine",
  meta_data: {
    nombre_generico: "Dexmedetomidina",
    nombres_comerciales: ["Dexdomitor", "Sedadex", "Sileo"],
    grupo_farmacologico: "Agonista de receptores alfa-2 adrenérgicos",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Enantiómero puro de la medetomidina (doble de potente).",
      "Proporciona sedación dosis-dependiente, relajación muscular y analgesia.",
      "Causa vasoconstricción periférica inicial seguida de normotensión y bradicardia compensatoria.",
      "La premedicación reduce significativamente la dosis de anestésicos de inducción.",
      "Reversible con atipamezol.",
      "La formulación Sileo (gel oral) es específica para ansiedad por ruidos en perros."
    ],
    usos_principales: "Sedación, premedicación, analgesia (CRI) y manejo de la ansiedad por ruidos.",
    inicio_accion: "Rápido (IV inmediato; IM 10-15 min; Gel 30-60 min)",
    duracion_efecto: "Sedación 1-2 horas; Analgesia ~1 hora"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario (excepto el gel Sileo para casa).",
    "Su mascota puede presentar un color de encías pálido o grisáceo momentáneo; esto es esperado.",
    "El gel Sileo debe aplicarse en la mucosa bucal (entre mejilla y encía), NO tragarse.",
    "Vigilar si el animal tiene el corazón muy lento tras la recuperación.",
    "No usar en perros con enfermedades del corazón."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Premedicación / Sedación",
        vias: ["IV", "IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.005, dosis_min: 0.002, dosis_max: 0.01, unidad_calculo: "mg/kg (2-10 μg/kg)" },
        notas_tecnicas: "Usar extremo inferior vía IV. Combinar con opioides para mejores resultados."
      },
      {
        indicacion: "Ansiedad por ruidos (Sileo Gel)",
        vias: ["Transmucosa Oral"],
        math: { tipo_calculo: "mg_m2", dosis_recomendada: 0.125, unidad_calculo: "mg/m² (125 μg/m²)" },
        frecuencia: { texto_ui: "Cada 2-3 horas según necesidad (máx 5 dosis)", intervalo_horas: 2 },
        notas_tecnicas: "Aplicar 30-60 min antes del estímulo. No alimentar 15 min antes/después."
      },
      {
        indicacion: "Analgesia / Mantenimiento (CRI)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.0015, dosis_min: 0.001, dosis_max: 0.002, unidad_calculo: "mg/kg/h (1-2 μg/kg/h)" }
      }
    ],
    gato: [
      {
        indicacion: "Premedicación / Sedación",
        vias: ["IV", "IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.005, dosis_min: 0.002, dosis_max: 0.01, unidad_calculo: "mg/kg" }
      }
    ],
    huron: [
      {
        indicacion: "Sedación",
        vias: ["SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.07, dosis_min: 0.04, dosis_max: 0.1, unidad_calculo: "mg/kg" }
      }
    ],
    conejo: [
      {
        indicacion: "Sedación",
        vias: ["IM", "SC", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.075, dosis_min: 0.025, dosis_max: 0.15, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Rango IV: 25-50 μg/kg; Rango IM/SC: 50-150 μg/kg."
      }
    ],
    ave: [
      {
        indicacion: "Sedación en Rapaces (con Atropina)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.05, dosis_min: 0.025, dosis_max: 0.075, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Eficacia y seguridad variable. Se prefiere midazolam/butorfanol por ser más predecibles."
      }
    ],
    reptil: [
      {
        indicacion: "Sedación / Anestesia ligera",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.1, dosis_min: 0.05, dosis_max: 0.2, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Generalmente combinado con ketamina o midazolam."
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Sedación (Rana dardo)",
        vias: ["SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 5, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Combinar con midazolam y ketamina/alfaxalona."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedad cardiovascular significativa.",
      "Enfermedad sistémica severa (ASA > 3).",
      "Pacientes geriátricos (no recomendado).",
      "Diabetes mellitus.",
      "Gestación."
    ],
    efectos_adversos: [
      "Bradicardia marcada y bloqueos AV.",
      "Hipertensión inicial seguida de normotensión/hipotensión.",
      "Vómitos (especialmente tras IM).",
      "Hipotermia.",
      "Diuresis (suprime ADH).",
      "Hiperglucemia transitoria.",
      "Mydriasis."
    ],
    monitoreo_recomendado: [
      "Frecuencia y ritmo cardíaco (ECG)",
      "Oxigenación (SpO2) - Recomendado suplementar O2",
      "Temperatura corporal",
      "Presión arterial"
    ],
    instrucciones_manejo: "Respuesta de despertar súbito por estímulos táctiles o auditivos (rousable sedation). Manejar con cuidado en animales agresivos.",
    sobredosis: {
      signos: ["Bradicardia severa", "Depresión respiratoria profunda", "Hipotensión"],
      tratamiento: "Revertir inmediatamente con Atipamezol (Antisedan)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Simpaticomiméticos (Adrenalina)", efecto: "Riesgo de arritmias cardíacas fatales.", severidad: "Grave" },
      { farmaco: "Anestésicos IV/Inhalados", efecto: "Reduce drásticamente las dosis requeridas (50-90%).", severidad: "Importante" },
      { farmaco: "Anticolinérgicos (Atropina)", efecto: "Riesgo de hipertensión severa y arritmias. No usar preventivamente.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista altamente selectivo de los receptores alfa-2 adrenérgicos centrales y periféricos, inhibiendo la liberación de noradrenalina.",
    farmacocinetica: "Metabolismo hepático rápido. Alta unión a proteínas."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "0.5 mg/ml (Dexdomitor)", valor_concentracion: 0.5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "0.1 mg/ml", valor_concentracion: 0.1, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Gel oral (Sileo)", concentracion_texto: "0.1 mg/ml", valor_concentracion: 0.1, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
