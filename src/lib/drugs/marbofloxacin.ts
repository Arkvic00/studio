import type { Drug } from '@/lib/types';

export const marbofloxacinDrug: Drug = {
  id: "marbofloxacin",
  meta_data: {
    nombre_generico: "Marbofloxacina",
    nombres_comerciales: ["Actimarbo", "Aurizon", "Efex", "Marbocare", "Marbocyl", "Marbodex", "Marbotab", "Marboxidin", "Marfloquin", "NorOtic", "Quiflor", "Softiflox", "Ubiflox"],
    grupo_farmacologico: "Fluoroquinolona; Antibacteriano bactericida",
    status_regulatorio: "POM-V. Categoría B (Restringido) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida dependiente de concentración que inhibe la ADN girasa.",
      "Uso reservado para infecciones donde otros antibióticos no sean efectivos y según sensibilidad.",
      "Excelente penetración en tejidos blandos, sistema urogenital y piel.",
      "Inactivado en pH urinario bajo.",
      "Riesgo de anomalías en el cartílago articular en animales jóvenes en crecimiento."
    ],
    usos_principales: "Tratamiento de infecciones bacterianas de piel, tejidos blandos, tracto urinario (prostatitis, pielfonefritis) y respiratorio. Útil para Mycoplasma haemofelis en gatos.",
    inicio_accion: "Rápido",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Administrar una vez al día.",
    "No usar en cachorros de razas grandes menores de 12-18 meses.",
    "Informe si nota vómitos o falta de apetito.",
    "Espaciar 2 horas de antiácidos o suplementos que contengan calcio, magnesio o hierro.",
    "Completar el ciclo de tratamiento según lo indicado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas / Piel / Urinarias",
        vias: ["PO", "IV", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Considerar dosis más altas en prostatitis o infecciones por Pseudomonas aeruginosa."
      },
      {
        indicacion: "Otitis externa (Aurizon)",
        vias: ["Tópica ótica"],
        math: { tipo_calculo: "fija", dosis_recomendada: 10, unidad_calculo: "gotas por oído" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "IV", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "No usar las tabletas de 20mg u 80mg en gatos debido a la dificultad de dosificación."
      }
    ],
    huron: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "En otitis, evitar preparados con corticoides si es posible; usar formulaciones magistrales."
      }
    ],
    roedores: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones bacterianas (Loros/Rapaces)",
        vias: ["PO", "IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Guacamayas (Macaws)",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    reptil: [
      {
        indicacion: "Pitón bola",
        vias: ["SC", "IM", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 horas", intervalo_horas: 48 }
      },
      {
        indicacion: "Tortugas de caparazón blando",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales en crecimiento (riesgo de artropatía).",
      "Gatos menores de 16 semanas.",
      "Perros < 12 meses (o < 18 meses en razas gigantes).",
      "Hipersensibilidad a las fluoroquinolonas."
    ],
    efectos_adversos: [
      "Vómitos y náuseas.",
      "Artropatía en animales jóvenes.",
      "Potencial ceguera en gatos (aunque menos reportado que con enrofloxacina).",
      "PU/PD en conejos tras uso de gotas óticas con corticoides."
    ],
    monitoreo_recomendado: [
      "Función renal en animales geriátricos",
      "Estado de las articulaciones en animales jóvenes"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Convulsiones", "Vómitos", "Trastornos GI"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cationes (Ca, Mg, Al)", efecto: "Reducen drásticamente la absorción oral.", severidad: "Importante" },
      { farmaco: "Teofilina", efecto: "La marbofloxacina puede aumentar sus niveles plasmáticos.", severidad: "Moderada" },
      { farmaco: "Cimetidina", efecto: "Puede reducir el aclaramiento de la fluoroquinolona.", severidad: "Moderada" },
      { farmaco: "Anticoagulantes orales", efecto: "Puede potenciar su acción.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor bactericida de la ADN girasa bacteriana, bloqueando la replicación y transcripción del ADN.",
    farmacocinetica: "Altamente lipofílica. Excelente penetración tisular."
  },
  presentaciones_comerciales: [
    { tipo: "Vial inyectable (reconstituido)", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "5 mg, 20 mg, 80 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión ótica (Aurizon)", concentracion_texto: "3 mg/ml (+ Clotrimazol/Dexamet.)", valor_concentracion: 3, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};