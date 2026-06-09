import type { Drug } from '@/lib/types';

export const acepromazinaMaleatoDrug: Drug = {
  id: "acepromazina_maleato",
  meta_data: {
    nombre_generico: "Acepromazina Maleato (ACP)",
    nombres_comerciales: ["Acecare", "ACP", "PromAce", "Acesedate", "Aceproject", "Atravet"],
    grupo_farmacologico: "Sedante Fenotiazínico; Neuroléptico",
    status_regulatorio: "POM-V. Aprobado por la FDA para perros, gatos y caballos."
  },
  resumen_clinico: {
    puntos_clave: [
      "Sedante y tranquilizante que reduce la actividad espontánea al deprimir el SNC.",
      "Sin efectos analgésicos; debe combinarse con opioides para procedimientos dolorosos.",
      "Posee propiedades antieméticas y eleva el umbral para arritmias cardíacas.",
      "Efecto vasodilatador periférico, útil en el manejo de tromboembolismo en gatos.",
      "¡ATENCIÓN!: No se recomienda para el manejo de fobias a ruidos (truenos, pirotecnia).",
      "Dosis clínica usual: El efecto máximo se alcanza a los 0.1 mg/kg; dosis superiores solo aumentan efectos adversos."
    ],
    usos_principales: "Sedación, premedicación anestésica. Manejo de tromboembolismo felino. Coadyuvante en laminitis equina y obstrucciones uretrales."
  },
  informacion_cliente: [
    "Efecto óptimo oral 45-60 min después de la administración.",
    "Puede causar que la orina sea rosa o marrón (inofensivo).",
    "Los animales sedados pueden reaccionar violentamente a ruidos fuertes.",
    "No usar para 'miedo a cohetes' ya que el animal sigue asustado pero no puede moverse.",
    "Efectos pueden durar hasta 6-24 horas dependiendo de la dosis."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Sedación / Premedicación (No Bóxers)",
        vias: ["IV lento"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.015, dosis_min: 0.01, dosis_max: 0.02, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Sedación / Premedicación (No Bóxers)",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.03, dosis_min: 0.01, dosis_max: 0.05, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Sedación Oral (No Bóxers)",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, dosis_min: 1, dosis_max: 3, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 6-12 horas según necesidad", intervalo_horas: 12 }
      },
      {
        indicacion: "Bóxers (Dosis reducida por riesgo de síncope)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.0075, dosis_min: 0.005, dosis_max: 0.01, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 },
        notas_tecnicas: "Los Bóxers son propensos a síncope por bloqueo sinoauricular debido a tono vagal excesivo."
      }
    ],
    gato: [
      {
        indicacion: "Sedación / Premedicación",
        vias: ["IV lento"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.015, dosis_min: 0.01, dosis_max: 0.02, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Sedación / Premedicación / Tromboembolismo",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.03, dosis_min: 0.01, dosis_max: 0.05, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Sedación Oral",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, dosis_min: 1, dosis_max: 3, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8-12 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.35, dosis_min: 0.2, dosis_max: 0.5, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ],
    conejo: [
      {
        indicacion: "Sedación",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.55, dosis_min: 0.1, dosis_max: 1.0, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ],
    cobaya: [
      {
        indicacion: "Tranquilización",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2.75, dosis_min: 0.5, dosis_max: 5.0, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas (Sedación)",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, dosis_min: 0.5, dosis_max: 2.5, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Ratones / Hámsteres (Sedación)",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2.75, dosis_min: 0.5, dosis_max: 5.0, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Jerbos",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "mg" },
        frecuencia: { texto_ui: "CONTRAINDICADO", intervalo_horas: 0 },
        notas_tecnicas: "Baja el umbral de convulsiones en jerbos."
      }
    ],
    primates: [
      {
        indicacion: "Sedación (Primates pequeños)",
        vias: ["PO", "SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.75, dosis_min: 0.5, dosis_max: 1.0, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ],
    petauro: [
      {
        indicacion: "Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, dosis_min: 1.0, dosis_max: 2.0, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ],
    erizo: [
      {
        indicacion: "Sedación",
        vias: ["PO", "SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.55, dosis_min: 0.1, dosis_max: 1.0, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ],
    reptil: [
      {
        indicacion: "Sedación",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.3, dosis_min: 0.1, dosis_max: 0.5, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ],
    caballo: [
      {
        indicacion: "Sedación / Control de animales difíciles",
        vias: ["IV", "IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.066, dosis_min: 0.044, dosis_max: 0.088, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipotensión debida a shock, trauma o enfermedad cardiovascular.",
      "Animales menores de 3 meses de edad.",
      "Enfermedad hepática severa.",
      "Animales anémicos (exacerba la anemia por secuestro esplénico de eritrocitos).",
      "Jerbos (baja el umbral de convulsiones).",
      "No recomendado en aves."
    ],
    precauciones: [
      "Bóxers: Usar dosis extremadamente bajas o evitar (riesgo de síncope vagal).",
      "Razas gigantes: Usar el extremo inferior del rango de dosis.",
      "Evitar en animales con antecedentes de convulsiones."
    ],
    efectos_adversos: [
      "Hipotensión profunda (incluso en animales sanos).",
      "Hipotermia y bradicardia.",
      "Prolapso de la membrana nictitante.",
      "Priapismo en caballos (riesgo de parálisis del músculo retractor del pene).",
      "Convulsiones en jerbos."
    ],
    sobredosis: {
      signos: ["Hipotensión severa", "Depresión severa del SNC", "Colapso"],
      tratamiento: "Terapia de soporte (fluidos, mantener temperatura). CONTRAINDICADA la Adrenalina (puede empeorar la hipotensión).",
      contraindicado_en_urgencia: ["Adrenalina (Epinefrina)"]
    },
    interacciones_farmacologicas: [
      { farmaco: "Adrenalina", efecto: "Hipotensión paradójica y taquicardia", severidad: "Grave" },
      { farmaco: "Otros depresores SNC", efecto: "Depresión aditiva (barbitúricos, propofol, gases)", severidad: "Importante" },
      { farmaco: "Propranolol", efecto: "Aumento de los niveles sanguíneos de ambos fármacos", severidad: "Moderada" },
      { farmaco: "Quinidina", efecto: "Depresión cardíaca adicional", severidad: "Importante" },
      { farmaco: "Antiácidos / Caolín-Pectina", efecto: "Reducción de la absorción oral", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueo dopaminérgico postsináptico en el SNC y bloqueo alfa-1 adrenérgico periférico.",
    farmacocinetica: {
      general: "Inicio de acción: 20-30 min (IM). Duración: hasta 6 horas. Metabolismo hepático lento.",
      datos_especie: {
        "Caballo": "Metabolitos detectables en orina hasta 144 horas.",
        "Perro": "Efectos pueden ser prolongados en individuos con sensibilidad genética."
      }
    }
  },
  presentaciones_comerciales: [
    { tipo: "Inyección", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyección", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "10 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta oral", concentracion_texto: "25 mg", valor_concentracion: 25, unidad_concentracion: "mg", es_divisible: true }
  ]
};
