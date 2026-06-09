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
      "Efecto depresor del SNC, causando sedación y reducción de actividad espontánea.",
      "Eleva el umbral para arritmias cardíacas y tiene propiedades antieméticas.",
      "La sedación es poco fiable si se usa sola; combinar con opioides (neuroleptanalgesia).",
      "Efecto meseta (plateau) a los 0.1 mg/kg. Dosis mayores aumentan riesgos sin mejorar sedación.",
      "Manejo de tromboembolismo en gatos por su acción vasodilatadora periférica."
    ],
    usos_principales: "Sedación o medicación pre-anestésica en perros, gatos y especies exóticas.",
    inicio_accion: "20–30 minutos (IM)",
    duracion_efecto: "Hasta 6 horas (dosis clínicas)"
  },
  informacion_cliente: [
    "No recomendada para el manejo de fobias a sonidos (pirotecnia o truenos).",
    "La dosis oral varía mucho entre individuos; dosis altas causan sedación muy prolongada."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Perros (No Bóxers): Sedación / Premedicación",
        vias: ["IV lento"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.015, dosis_min: 0.01, dosis_max: 0.02, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Usar extremo inferior en razas gigantes. No recomendado para fobia a ruidos."
      },
      {
        indicacion: "Perros (No Bóxers): Sedación / Premedicación",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.03, dosis_min: 0.01, dosis_max: 0.05, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Usar extremo inferior en razas gigantes."
      },
      {
        indicacion: "Perros (No Bóxers): Sedación Oral",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, dosis_min: 1, dosis_max: 3, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Dosis orales altas pueden causar sedación muy prolongada."
      },
      {
        indicacion: "Bóxers: Sedación (Dosis Reducida)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.0075, dosis_min: 0.005, dosis_max: 0.01, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Riesgo de síncope por bloqueo sinoauricular. Usar dosis bajas o evitar."
      }
    ],
    gato: [
      {
        indicacion: "Gatos: Sedación / Premedicación / Tromboembolismo",
        vias: ["IV lento"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.015, dosis_min: 0.01, dosis_max: 0.02, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Útil en tromboembolismo por vasodilatación periférica."
      },
      {
        indicacion: "Gatos: Sedación / Premedicación / Tromboembolismo",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.03, dosis_min: 0.01, dosis_max: 0.05, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Gatos: Sedación Oral",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, dosis_min: 1, dosis_max: 3, unidad_calculo: "mg/kg" }
      }
    ],
    huron: [
      {
        indicacion: "Hurones: Sedación / Premedicación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.35, dosis_min: 0.2, dosis_max: 0.5, unidad_calculo: "mg/kg" }
      }
    ],
    conejo: [
      {
        indicacion: "Conejos: Sedación / Premedicación",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.55, dosis_min: 0.1, dosis_max: 1.0, unidad_calculo: "mg/kg" }
      }
    ],
    cobaya: [
      {
        indicacion: "Cobayas: Sedación / Premedicación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2.75, dosis_min: 0.5, dosis_max: 5.0, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Las dosis altas deben administrarse solo por vía oral."
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Sedación / Premedicación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, dosis_min: 0.5, dosis_max: 2.5, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Ratones y Hámsteres: Sedación / Premedicación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2.75, dosis_min: 0.5, dosis_max: 5.0, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Las dosis altas deben administrarse solo por vía oral."
      }
    ],
    primates: [
      {
        indicacion: "Primates Pequeños: Sedación",
        vias: ["PO", "SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.75, dosis_min: 0.5, dosis_max: 1.0, unidad_calculo: "mg/kg" }
      }
    ],
    petauro: [
      {
        indicacion: "Petauros del Azúcar: Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, dosis_min: 1.0, dosis_max: 2.0, unidad_calculo: "mg/kg" }
      }
    ],
    erizo: [
      {
        indicacion: "Erizos: Sedación",
        vias: ["PO", "SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.55, dosis_min: 0.1, dosis_max: 1.0, unidad_calculo: "mg/kg" }
      }
    ],
    reptil: [
      {
        indicacion: "Reptiles: Sedación / Premedicación",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.3, dosis_min: 0.1, dosis_max: 0.5, unidad_calculo: "mg/kg" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipotensión por shock, trauma o enfermedad cardiovascular.",
      "Animales menores de 3 meses.",
      "Enfermedad hepática.",
      "Animales anémicos (exacerba la anemia por secuestro esplénico)."
    ],
    contraindicaciones_especie: {
        "Jerbo": "CONTRAINDICADO: Reduce el umbral de convulsiones.",
        "Ave": "NO RECOMENDADO en aves.",
        "Peces": "No hay información disponible."
    },
    efectos_adversos: [
      "Hipotensión profunda (raro en animales sanos).",
      "Hipotermia.",
      "Síncope en Bóxers.",
      "Convulsiones en jerbos."
    ],
    monitoreo_recomendado: [
      "Presión arterial",
      "Temperatura corporal (evitar hipotermia)",
      "Estado de hidratación (balance de fluidos)"
    ],
    instrucciones_manejo: "Observar precauciones normales de manejo clínico.",
    sobredosis: {
      signos: ["Hipotensión severa", "Sedación extremadamente prolongada"],
      tratamiento: "Terapia de soporte para mantener temperatura y balance de fluidos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Depresores del SNC", efecto: "Depresión aditiva. Reducir dosis de otros anestésicos.", severidad: "Grave" },
      { farmaco: "Adrenalina", efecto: "Vasodilatación y taquicardia severa por bloqueo alfa.", severidad: "Grave" },
      { farmaco: "Quinidina", efecto: "Depresión cardíaca adicional.", severidad: "Importante" },
      { farmaco: "Antiácidos / Antidiarreicos", efecto: "Reducción de absorción GI de fenotiazinas orales.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Fenotiazina con efecto bloqueador de receptores dopaminérgicos y alfa-adrenérgicos en el SNC.",
    farmacocinetica: "Inicio IM en 20-30 min. Duración de hasta 6 horas."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tabletas", concentracion_texto: "10 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tabletas", concentracion_texto: "25 mg", valor_concentracion: 25, unidad_concentracion: "mg", es_divisible: true }
  ]
};