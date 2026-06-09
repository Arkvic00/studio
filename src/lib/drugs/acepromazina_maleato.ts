import type { Drug } from '@/lib/types';

export const acepromazinaMaleatoDrug: Drug = {
  id: "acepromazina_maleato",
  meta_data: {
    nombre_generico: "Acepromazina (ACP)",
    nombres_comerciales: ["Acecare", "ACP", "Acesedate"],
    grupo_farmacologico: "Fenotiazina",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Efecto depresor del SNC, sedación y reducción de actividad espontánea.",
      "Eleva el umbral para arritmias cardíacas y tiene propiedades antieméticas.",
      "La sedación es poco fiable si se usa sola; combinar con opioides (neuroleptanalgesia).",
      "La profundidad de la sedación tiene un efecto meseta (plateau) a los 0.1 mg/kg."
    ],
    usos_principales: "Sedación o medicación pre-anestésica. Manejo de tromboembolismo en gatos por su acción vasodilatadora periférica.",
    inicio_accion: "20–30 minutos (IM)",
    duracion_efecto: "Hasta 6 horas (dosis clínicas)"
  },
  informacion_cliente: [
    "No se recomienda para el manejo de fobias a sonidos (fuegos artificiales o truenos).",
    "La dosis oral necesaria varía mucho entre individuos; dosis altas pueden causar sedación muy prolongada."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Sedación / Premedicación (No Bóxers)",
        vias: ["IV lento"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.015, dosis_min: 0.01, dosis_max: 0.02, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Sedación / Premedicación (No Bóxers)",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.03, dosis_min: 0.01, dosis_max: 0.05, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Sedación Oral",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, dosis_min: 1, dosis_max: 3, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Bóxers (Riesgo de síncope)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.0075, dosis_min: 0.005, dosis_max: 0.01, unidad_calculo: "mg/kg" }
      }
    ],
    gato: [
      {
        indicacion: "Sedación / Premedicación",
        vias: ["IV lento"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.015, dosis_min: 0.01, dosis_max: 0.02, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Sedación / Premedicación / Tromboembolismo",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.03, dosis_min: 0.01, dosis_max: 0.05, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Sedación Oral",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, dosis_min: 1, dosis_max: 3, unidad_calculo: "mg/kg" }
      }
    ],
    huron: [
      {
        indicacion: "Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.35, dosis_min: 0.2, dosis_max: 0.5, unidad_calculo: "mg/kg" }
      }
    ],
    conejo: [
      {
        indicacion: "Sedación",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.55, dosis_min: 0.1, dosis_max: 1.0, unidad_calculo: "mg/kg" }
      }
    ],
    cobaya: [
      {
        indicacion: "Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2.75, dosis_min: 0.5, dosis_max: 5.0, unidad_calculo: "mg/kg" }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, dosis_min: 0.5, dosis_max: 2.5, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Ratones / Hámsteres",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2.75, dosis_min: 0.5, dosis_max: 5.0, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Jerbos",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "mg" },
        notas_tecnicas: "No recomendado. Baja el umbral de convulsiones."
      }
    ],
    primates: [
      {
        indicacion: "Primates pequeños",
        vias: ["PO", "SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.75, dosis_min: 0.5, dosis_max: 1.0, unidad_calculo: "mg/kg" }
      }
    ],
    petauro: [
      {
        indicacion: "Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, dosis_min: 1.0, dosis_max: 2.0, unidad_calculo: "mg/kg" }
      }
    ],
    erizo: [
      {
        indicacion: "Sedación",
        vias: ["PO", "SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.55, dosis_min: 0.1, dosis_max: 1.0, unidad_calculo: "mg/kg" }
      }
    ],
    reptil: [
      {
        indicacion: "Sedación",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.3, dosis_min: 0.1, dosis_max: 0.5, unidad_calculo: "mg/kg" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipotensión por shock, trauma o enfermedad cardiovascular.",
      "Evitar en animales <3 meses y con enfermedad hepática.",
      "Usar con cautela en animales anémicos (secuestro esplénico de eritrocitos).",
      "Jerbos (baja el umbral de convulsiones).",
      "No recomendado en aves."
    ],
    efectos_adversos: [
      "Hipotensión profunda (raro en animales sanos).",
      "Hipotermia.",
      "Convulsiones en jerbos."
    ],
    monitoreo_recomendado: [
      "Presión arterial",
      "Temperatura corporal",
      "Balance de fluidos"
    ],
    instrucciones_manejo: "Se deben observar las precauciones normales.",
    sobredosis: {
      signos: ["Hipotensión severa", "Sedación prolongada"],
      tratamiento: "Terapia de soporte para mantener temperatura y fluidos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Adrenalina", efecto: "Vasodilatación y taquicardia (actividad beta sin oposición)", severidad: "Grave" },
      { farmaco: "Depresores SNC", efecto: "Depresión aditiva del SNC", severidad: "Importante" },
      { farmaco: "Propranolol", efecto: "Aumento de los niveles de ambos fármacos", severidad: "Moderada" },
      { farmaco: "Quinidina", efecto: "Depresión cardíaca adicional", severidad: "Importante" },
      { farmaco: "Antiácidos / Kaolín-Pectina", efecto: "Reducción de la absorción oral", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Fenotiazina con efecto depresor en el SNC.",
    farmacocinetica: "Inicio IM en 20-30 min. Duración hasta 6 horas. El metabolismo varía por tamaño corporal (usar dosis bajas en razas gigantes)."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta", concentracion_texto: "10 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta", concentracion_texto: "25 mg", valor_concentracion: 25, unidad_concentracion: "mg", es_divisible: true }
  ]
};
