import type { Drug } from '@/lib/types';

export const paracetamolDrug: Drug = {
  id: "paracetamol",
  meta_data: {
    nombre_generico: "Paracetamol (Acetaminofén)",
    nombres_comerciales: ["Pardale-V"],
    grupo_farmacologico: "Analgésico no opiáceo",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Analgésico y antipirético.",
      "¡EXTREMADAMENTE TÓXICO PARA GATOS!",
      "Seguro para GI comparado con AINEs."
    ],
    usos_principales: "Dolor leve a moderado y fiebre en perros.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 horas"
  },
  informacion_cliente: [
    "¡PELIGRO!: Nunca dar a gatos.",
    "Informe si nota encías marrones.",
    "Dosis excesivas causan daño hepático."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Analgesia / Fiebre",
        vias: ["PO", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "N/A" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Gatos.", "Fallo hepático."],
    efectos_adversos: ["Hepatotoxicidad.", "Metahemoglobinemia."],
    monitoreo_recomendado: ["Función hepática", "Color de mucosas"],
    instrucciones_manejo: "Antídoto: Acetilcisteína.",
    sobredosis: {
      signos: ["Ictericia", "Vómitos"],
      tratamiento: "Acetilcisteína IV."
    },
    interacciones_farmacologicas: [
      { farmaco: "Metoclopramida", efecto: "Aumenta absorción.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibición central de COX-3.",
    farmacocinetica: "Metabolismo hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta", concentracion_texto: "500 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: true }
  ]
};