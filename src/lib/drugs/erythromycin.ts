import type { Drug } from '@/lib/types';

export const erythromycinDrug: Drug = {
  id: "erythromycin",
  meta_data: {
    nombre_generico: "Eritromicina",
    nombres_comerciales: ["Erythrocin", "Erythroped", "Erythromycin*"],
    grupo_farmacologico: "Macrólido; Antibacteriano; Procinético gástrico",
    status_regulatorio: "POM-V, POM. Categoría C (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Antibiótico tiempo-dependiente que inhibe la síntesis proteica (50S).",
      "Espectro similar a las penicilinas; activo contra Gram-positivos y algunos Gram-negativos (Pasteurella).",
      "Actúa como procinético gastrointestinal al estimular los receptores de motilina.",
      "Base lábil al ácido; administrar preferiblemente con el estómago vacío.",
      "¡EXTREMADAMENTE PELIGROSO EN HERBÍVOROS!: Causa enterotoxemia fatal en conejos."
    ],
    usos_principales: "Tratamiento de infecciones bacterianas susceptibles (Campylobacter) y manejo de hipomotilidad gástrica.",
    inicio_accion: "Rápido tras administración oral",
    duracion_efecto: "Corta (requiere dosis cada 8-12 horas)"
  },
  informacion_cliente: [
    "Administrar preferiblemente con el estómago vacío para mejor absorción.",
    "El efecto secundario más común es el malestar estomacal (vómitos, diarrea).",
    "¡NUNCA dar a conejos o cobayas! Puede causarles la muerte.",
    "En peces, no usar en el agua si hay sistemas de filtración biológica activos.",
    "Informe si nota color amarillento en los ojos (ictericia)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones bacterianas (Campylobacter)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Procinético Gastrointestinal",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Campylobacter",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas y Ratones: Ileítis proliferativa",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas (o 0.13 mg/ml en agua)", intervalo_horas: 12 }
      }
    ],
    primates: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 45,
          dosis_min: 20,
          dosis_max: 75,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          dosis_min: 20,
          dosis_max: 60,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas (PO q12h)", intervalo_horas: 12 }
      }
    ],
    peces: [
      {
        indicacion: "Enfermedades bacterianas",
        vias: ["PO (Alimento)", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 7-21 días", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia hepática severa (especialmente la sal estolato).",
      "Pequeños herbívoros (Conejos, Cobayas, Chinchillas).",
      "Uso de eritromicina inmersión en acuarios con filtros biológicos."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO!: Causa enterotoxemia fatal. No administrar vía oral.",
      "Peces": "No utilizar como tratamiento de inmersión en sistemas filtrados biológicamente."
    },
    efectos_adversos: [
      "Vómitos y diarrea (muy frecuentes).",
      "Hepatitis colestásica (sal estolato en humanos).",
      "Enterotoxemia fatal en herbívoros.",
      "Arritmias cardiacas (si se combina con cisaprida)."
    ],
    monitoreo_recomendado: [
      "Estado gastrointestinal",
      "Función hepática en tratamientos largos"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Vómitos severos", "Diarrea profusa"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cisaprida", efecto: "Riesgo extremo de arritmias cardiacas fatales. NO COMBINAR.", severidad: "Grave" },
      { farmaco: "Digoxina", efecto: "Aumenta la absorción y toxicidad de la digoxina.", severidad: "Importante" },
      { farmaco: "Teofilina / Ciclosporina", efecto: "Aumenta los niveles séricos de estos fármacos.", severidad: "Importante" },
      { farmaco: "Lincosamidas / Cloranfenicol", efecto: "Antagonismo competitivo por el sitio de unión ribosomal.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la subunidad ribosomal 50S, inhibiendo la formación del enlace peptídico y la síntesis de proteínas bacterianas.",
    farmacocinetica: "Metabolismo hepático. Excreción biliar predominante. Se concentra en fluidos ácidos (leche, próstata)."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta/Cápsula", concentracion_texto: "250 mg, 500 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "25 mg/ml, 50 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "200 mg/ml", valor_concentracion: 200, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
