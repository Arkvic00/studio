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
      "El efecto meseta (plateau) ocurre a los 0.1 mg/kg. Dosis mayores aumentan riesgos sin mejorar sedación.",
      "En razas gigantes, usar el extremo inferior del rango de dosis."
    ],
    usos_principales: "Sedación o medicación pre-anestésica. Manejo de tromboembolismo en gatos por su acción vasodilatadora periférica.",
    inicio_accion: "20–30 minutos (IM)",
    duracion_efecto: "Hasta 6 horas (dosis clínicas)"
  },
  informacion_cliente: [
    "No recomendada para el manejo de fobias a sonidos (fuegos artificiales/truenos).",
    "La dosis oral varía mucho entre individuos; dosis altas causan sedación muy prolongada."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Perros (No Bóxers): Sedación / Premedicación",
        vias: ["IV lento"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.015, dosis_min: 0.01, dosis_max: 0.02, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Perros (No Bóxers): Sedación / Premedicación",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.03, dosis_min: 0.01, dosis_max: 0.05, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Perros: Sedación Oral",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, dosis_min: 1, dosis_max: 3, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Bóxers: Riesgo de síncope por tono vagal excesivo",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.0075, dosis_min: 0.005, dosis_max: 0.01, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Usar dosis bajas o evitar para prevenir síncope."
      }
    ],
    gato: [
      {
        indicacion: "Gatos: Sedación / Premedicación",
        vias: ["IV lento"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.015, dosis_min: 0.01, dosis_max: 0.02, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Gatos: Sedación / Tromboembolismo",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.03, dosis_min: 0.01, dosis_max: 0.05, unidad_calculo: "mg/kg" }
      }
    ],
    huron: [
      {
        indicacion: "Hurones (Ferrets): Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.35, dosis_min: 0.2, dosis_max: 0.5, unidad_calculo: "mg/kg" }
      }
    ],
    conejo: [
      {
        indicacion: "Conejos (Rabbits): Sedación",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.55, dosis_min: 0.1, dosis_max: 1.0, unidad_calculo: "mg/kg" }
      }
    ],
    cobaya: [
      {
        indicacion: "Cobayas (Guinea pigs): Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2.75, dosis_min: 0.5, dosis_max: 5.0, unidad_calculo: "mg/kg" }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas (Rats): Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, dosis_min: 0.5, dosis_max: 2.5, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Ratones (Mice): Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2.75, dosis_min: 0.5, dosis_max: 5.0, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Hámsteres (Hamsters): Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2.75, dosis_min: 0.5, dosis_max: 5.0, unidad_calculo: "mg/kg" }
      }
    ],
    primates: [
      {
        indicacion: "Primates pequeños (Small primates): Sedación",
        vias: ["PO", "SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.75, dosis_min: 0.5, dosis_max: 1.0, unidad_calculo: "mg/kg" }
      }
    ],
    petauro: [
      {
        indicacion: "Petauros (Sugar gliders): Sedación",
        vias: ["IM", "SC", "PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1.5, dosis_min: 1.0, dosis_max: 2.0, unidad_calculo: "mg/kg" }
      }
    ],
    erizo: [
      {
        indicacion: "Erizos (Hedgehogs): Sedación",
        vias: ["PO", "SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.55, dosis_min: 0.1, dosis_max: 1.0, unidad_calculo: "mg/kg" }
      }
    ],
    reptil: [
      {
        indicacion: "Reptiles: Sedación",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.3, dosis_min: 0.1, dosis_max: 0.5, unidad_calculo: "mg/kg" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipotensión por shock, trauma o enfermedad cardiovascular.",
      "Animales < 3 meses y enfermedad hepática.",
      "Animales anémicos (secuestro de eritrocitos en el bazo).",
      "Jerbos (baja el umbral de convulsiones).",
      "No recomendado en aves."
    ],
    efectos_adversos: [
      "Hipotensión profunda.",
      "Hipotermia.",
      "Síncope en Bóxers.",
      "Convulsiones en jerbos."
    ],
    monitoreo_recomendado: [
      "Presión arterial",
      "Temperatura corporal",
      "Frecuencia respiratoria"
    ],
    instrucciones_manejo: "Precauciones normales de manejo clínico.",
    sobredosis: {
      signos: ["Hipotensión severa", "Sedación prolongada"],
      tratamiento: "Soporte (fluidoterapia y control térmico)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Adrenalina", efecto: "Vasodilatación y taquicardia severa.", severidad: "Grave" },
      { farmaco: "Quinidina", efecto: "Depresión cardíaca adicional.", severidad: "Importante" },
      { farmaco: "Antiácidos", efecto: "Reducción de absorción oral.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Fenotiazina con efecto depresor del SNC que reduce la actividad espontánea.",
    farmacocinetica: "Inicio IM en 20-30 min. Duración hasta 6 horas."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta", concentracion_texto: "10 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta", concentracion_texto: "25 mg", valor_concentracion: 25, unidad_concentracion: "mg", es_divisible: true }
  ]
};