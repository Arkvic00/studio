import type { Drug } from '@/lib/types';

export const enrofloxacinDrug: Drug = {
  id: "enrofloxacin",
  meta_data: {
    nombre_generico: "Enrofloxacina",
    nombres_comerciales: ["Baytril", "Enroactin", "Enrocare", "Enroxil", "Floxabactin", "Xeden", "Zobuxa"],
    grupo_farmacologico: "Fluoroquinolona; Inhibidor de la ADN girasa",
    status_regulatorio: "POM-V. Categoría B (Restringido) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida dependiente de concentración.",
      "Uso reservado para infecciones donde otros antibióticos no sean efectivos y según sensibilidad.",
      "Excelente penetración en tejidos blandos, sistema urogenital (próstata) y piel.",
      "Relativamente ineficaz contra anaerobios obligados.",
      "Asociado a ceguera retiniana irreversible en gatos a dosis altas.",
      "Riesgo de anomalías en el cartílago articular en animales jóvenes en crecimiento."
    ],
    usos_principales: "Tratamiento de infecciones bacterianas de los tractos alimentario, respiratorio y urogenital, así como infecciones de piel y heridas en mamíferos, aves, reptiles y peces.",
    inicio_accion: "Rápido (pico en 1-2 horas)",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Administrar según el horario estricto indicado.",
    "En gatos, nunca exceder la dosis de 5 mg/kg al día por riesgo de ceguera.",
    "No usar en cachorros de razas grandes menores de 18 meses por riesgo de daño en cartílagos.",
    "Completar el ciclo de tratamiento aunque el animal parezca mejor.",
    "Espaciar 2 horas de antiácidos o suplementos que contengan calcio, magnesio o hierro."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas / Piel / Próstata",
        vias: ["SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Dosis de 10 mg/kg recomendada para prostatitis o infecciones por Pseudomonas."
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "¡ADVERTENCIA!: No exceder los 5 mg/kg/día. Riesgo de degeneración retiniana irreversible."
      }
    ],
    huron: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          dosis_min: 5,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones respiratorias / Sistémicas",
        vias: ["PO", "SC", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas y Ratones: Sistémica",
        vias: ["SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 5,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones sistémicas / Chlamydia",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Dosis en agua: 100-200 mg/L. Cambiar a vía oral tan pronto sea posible para evitar necrosis muscular IM."
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas (General)",
        vias: ["IM", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Tortugas Hermann / Galápagos",
        vias: ["Intracelómica", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 10, unidad_calculo: "mg/kg" },
        notas_tecnicas: "En Galápagos puede causar excitación y diarrea."
      },
      {
        indicacion: "Pitones / Serpientes",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 10, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 48 a 72 horas", intervalo_horas: 48 }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Sistémica",
        vias: ["PO", "SC", "IM", "Tópica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    peces: [
      {
        indicacion: "Infecciones bacterianas (Gram-negativas)",
        vias: ["IM", "Intracelómica", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas (Total 7 dosis)", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales en crecimiento (riesgo de artropatía).",
      "Gatos menores de 8 semanas.",
      "Animales epilépticos (puede potenciar convulsiones con AINEs).",
      "Hipersensibilidad a las fluoroquinolonas."
    ],
    efectos_adversos: [
      "Necrosis muscular en el sitio de inyección IM.",
      "Ceguera retiniana en gatos (especialmente >5 mg/kg).",
      "Artropatía en animales jóvenes.",
      "Vómitos y diarrea.",
      "Excitación en tortugas de Galápagos."
    ],
    monitoreo_recomendado: [
      "Visión en gatos",
      "Estado de las articulaciones en animales jóvenes",
      "Función renal y hepática en tratamientos largos"
    ],
    instrucciones_manejo: "La administración IV no autorizada debe ser lenta (35-45 min) y diluida 1:10 en NaCl 0.9% por el contenido de potasio.",
    sobredosis: {
      signos: ["Convulsiones", "Ceguera (gatos)", "Trastornos GI severos"],
      tratamiento: "Soporte sintomático y control de convulsiones con diazepam."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cationes (Ca, Mg, Al, Fe, Zn)", efecto: "Reducen drásticamente la absorción oral. Espaciar 2 horas.", severidad: "Importante" },
      { farmaco: "Teofilina", efecto: "La enrofloxacina aumenta sus niveles plasmáticos.", severidad: "Moderada" },
      { farmaco: "Cimetidina", efecto: "Puede reducir la eliminación de la enrofloxacina.", severidad: "Moderada" },
      { farmaco: "AINEs", efecto: "Potencial aumento de efectos neurológicos/convulsivos.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor bactericida de la ADN girasa bacteriana, bloqueando la replicación y transcripción del ADN.",
    farmacocinetica: "Altamente lipofílica. Amplio volumen de distribución. Metabolismo hepático a ciprofloxacina (metabolito activo)."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "25 mg/ml, 50 mg/ml, 100 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "15 mg, 50 mg, 150 mg, 250 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "25 mg/ml, 100 mg/ml", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
