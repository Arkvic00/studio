import type { Drug } from '@/lib/types';

export const paracetamolDrug: Drug = {
  id: "paracetamol",
  meta_data: {
    nombre_generico: "Paracetamol (Acetaminofén)",
    nombres_comerciales: ["Pardale-V", "Perfalgan", "Paracetamol*"],
    grupo_farmacologico: "Analgésico no opiáceo; Antipirético",
    status_regulatorio: "P, POM, POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Analgésico y antipirético con pobres efectos antiinflamatorios.",
      "Mecanismo exacto desconocido; actúa centralmente sobre prostaglandinas.",
      "¡EXTREMADAMENTE TÓXICO PARA GATOS!: Carecen de la enzima para metabolizarlo.",
      "Seguro para el tracto gastrointestinal comparado con AINEs tradicionales.",
      "La formulación Pardale-V contiene codeína (no biodisponible en perros)."
    ],
    usos_principales: "Control del dolor leve a moderado y fiebre en perros, conejos, roedores y primates.",
    inicio_accion: "Rápido (30-60 min)",
    duracion_efecto: "8 horas"
  },
  informacion_cliente: [
    "¡PELIGRO!: Nunca dar a gatos o serpientes; es mortal para ellos.",
    "En perros, se usa para dolor leve. El Pardale-V debe darse con comida.",
    "Informe inmediatamente si nota encías marrones, hinchazón de cara o ictericia.",
    "Dosis excesivas causan daño irreversible al hígado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Analgesia / Antipiresis",
        vias: ["PO", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 },
        notas_tecnicas: "Dosis de Pardale-V autorizada: 1 tableta cada 12 kg (33 mg/kg total q8h)."
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "N/A" },
        notas_tecnicas: "¡MORTAL!: Causa metahemoglobinemia y fallo hepático fulminante."
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosis >200 mg/kg citadas en literatura no son recomendadas clínicamente."
      }
    ],
    roedores: [
      {
        indicacion: "Analgesia (En agua de bebida)",
        vias: ["PO (Agua)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/ml en agua (usar productos saborizados)"
        }
      }
    ],
    primates: [
      {
        indicacion: "Analgesia / Fiebre",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 }
      }
    ],
    reptil: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "N/A" },
        notas_tecnicas: "Se ha reportado toxicidad severa en serpientes."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (¡MORTAL!).",
      "Serpientes.",
      "Insuficiencia hepática preexistente."
    ],
    contraindicaciones_especie: {
      "Gato": "¡MORTAL!: Causa metahemoglobinemia (sangre color chocolate) y muerte súbita.",
      "Serpiente": "¡PROHIBIDO!: Toxicidad reportada."
    },
    efectos_adversos: [
      "Hepatotoxicidad severa (en sobredosis).",
      "Metahemoglobinemia (en gatos e intoxicaciones accidentales).",
      "Edema facial y de patas (gatos)."
    ],
    monitoreo_recomendado: [
      "Función hepática en tratamientos largos",
      "Color de mucosas (cianosis/color chocolate)",
      "Recuento de reticulocitos"
    ],
    instrucciones_manejo: "El antídoto para intoxicación es la Acetilcisteína IV y Metionina oral.",
    sobredosis: {
      signos: ["Ictericia", "Mucosas marrones", "Vómitos", "Necrosis hepática"],
      tratamiento: "Acetilcisteína IV inmediata; soporte hepático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Inhibidores de CYP450", efecto: "Pueden aumentar el riesgo de toxicidad hepática.", severidad: "Importante" },
      { farmaco: "Metoclopramida", efecto: "Aumenta la absorción de paracetamol.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibición central de la ciclooxigenasa (COX-3). Metabolito tóxico (NAPQI) responsable del daño hepático cuando se agota el glutatión.",
    farmacocinetica: "Metabolismo hepático (glucuronidación/sulfatación). Excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta (Pardale-V)", concentracion_texto: "400 mg Parac. + 9 mg Codeína", valor_concentracion: 400, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Vial inyectable", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Suspensión oral", concentracion_texto: "24 mg/ml, 50 mg/ml", valor_concentracion: 24, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
