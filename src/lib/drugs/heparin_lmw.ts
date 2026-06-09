import type { Drug } from '@/lib/types';

export const heparinLmwDrug: Drug = {
  id: "heparin_lmw",
  meta_data: {
    nombre_generico: "Heparina de Bajo Peso Molecular (Dalteparina, Enoxaparina)",
    nombres_comerciales: ["Fragmin (Dalteparina)", "Clexane (Enoxaparina)"],
    grupo_farmacologico: "Anticoagulante; Inhibidor del Factor Xa",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe predominantemente el Factor Xa de la coagulación.",
      "Farmacocinética más predecible que la heparina convencional (UFH).",
      "Menor riesgo de hemorragia y trombocitopenia que la UFH.",
      "Tiene un efecto mínimo sobre el tiempo de tromboplastina parcial activada (TTPA).",
      "No se debe administrar por vía intramuscular (riesgo de hematomas graves)."
    ],
    usos_principales: "Prevención y tratamiento de complicaciones tromboembólicas, CID y síndromes hipercoagulables (ej. IMHA en perros o MCD en gatos).",
    inicio_accion: "Rápido (SC)",
    duracion_efecto: "Prolongada (permite dosis q8h a q12h)"
  },
  informacion_cliente: [
    "Se administra mediante inyecciones debajo de la piel (subcutáneas).",
    "Informe inmediatamente si nota sangrados inusuales, moretones o sangre en orina/heces.",
    "Es vital no saltarse ninguna dosis.",
    "No es necesaria la monitorización constante de la coagulación como con otras heparinas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Tromboprofilaxis / IMHA (Dalteparina)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 150,
          dosis_min: 100,
          dosis_max: 175,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Enoxaparina",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 }
      }
    ],
    gato: [
      {
        indicacion: "Cardiomiopatía / Profilaxis (Dalteparina)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 }
      },
      {
        indicacion: "Enoxaparina",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.875,
          dosis_min: 0.75,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Toxicosis por PTFE (Teflón)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 300,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Trastornos hemorrágicos activos.",
      "Insuficiencia renal severa.",
      "Cirugía mayor planificada.",
      "Trombocitopenia severa."
    ],
    efectos_adversos: [
      "Hemorragias.",
      "Hematomas en el sitio de inyección.",
      "Trombocitopenia inducida por heparina (rara en animales)."
    ],
    monitoreo_recomendado: [
      "Actividad anti-Factor Xa (idealmente)",
      "Recuento de plaquetas",
      "Signos de sangrado espontáneo"
    ],
    instrucciones_manejo: "No administrar vía IM. Protamine es el antídoto parcial para sobredosis.",
    sobredosis: {
      signos: ["Hemorragias graves", "Hematomas extensos"],
      tratamiento: "Sulfato de Protamina IV (neutralización parcial)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aspirina / AINEs", efecto: "Aumentan significativamente el riesgo de sangrado.", severidad: "Importante" },
      { farmaco: "Corticosteroides / ACTH", efecto: "La heparina puede antagonizar sus efectos.", severidad: "Leve" },
      { farmaco: "Digoxina / Tetraciclinas", efecto: "Pueden contrarrestar parcialmente el efecto de la heparina.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la antitrombina III, potenciando la inhibición del factor Xa y, en menor medida, de la trombina (Factor IIa).",
    farmacocinetica: "Biodisponibilidad SC superior al 90%. Excreción renal predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Jeringas precargadas (Enoxaparina)", concentracion_texto: "100 mg/ml (10,000 IU anti-Xa)", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Ampollas (Dalteparina)", concentracion_texto: "2,500 IU/ml a 25,000 IU/ml", valor_concentracion: 10000, unidad_concentracion: "IU/ml", es_divisible: false }
  ]
};
