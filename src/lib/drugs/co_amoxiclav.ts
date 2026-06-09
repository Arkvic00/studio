import type { Drug } from '@/lib/types';

export const coAmoxiclavDrug: Drug = {
  id: "co_amoxiclav",
  meta_data: {
    nombre_generico: "Co-amoxiclav (Amoxicilina/Clavulanato)",
    nombres_comerciales: [
      "Clavabactin", "Clavaseptin", "Clavucill", "Clavudale", 
      "Combimox", "Kesium", "Nisinject", "Noroclav", 
      "Synuclav", "Synulox", "Twinox", "Augmentin"
    ],
    grupo_farmacologico: "Penicilina potenciada (Beta-lactámico + inhibidor de beta-lactamasa)",
    status_regulatorio: "POM-V, POM. Categoría C (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente de amplio espectro.",
      "El clavulanato inactiva las beta-lactamasas, ampliando el espectro de la amoxicilina.",
      "Activo contra Staphylococcus, E. coli, Klebsiella y anaerobios.",
      "No es efectivo contra Pseudomonas aeruginosa.",
      "Excelente para profilaxis quirúrgica e infecciones de tejidos blandos.",
      "La regularidad en el intervalo de dosis es crítica."
    ],
    usos_principales: "Infecciones sistémicas, piodermas, infecciones urinarias, enfermedad periodontal y profilaxis quirúrgica.",
    inicio_accion: "Rápido tras administración parenteral u oral.",
    duracion_efecto: "Corta (requiere dosis cada 8 a 12 horas)."
  },
  informacion_cliente: [
    "Las tabletas están envueltas en papel de aluminio para protegerlas de la humedad; no las saque hasta el momento de darlas.",
    "Refrigerar la suspensión oral tras prepararla y desechar a los 10 días.",
    "Completar el tratamiento estrictamente según las indicaciones.",
    "¡PELIGRO!: No administrar vía oral a conejos, cobayas o hámsteres (riesgo de muerte).",
    "Informe si nota diarrea severa o hinchazón en la cara del animal."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas (Parenteral)",
        vias: ["IV lenta", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 8.75,
          dosis_min: 8.75,
          dosis_max: 25,
          unidad_calculo: "mg/kg (Combinado)"
        },
        frecuencia: { texto_ui: "IV cada 8h / IM-SC cada 24h", intervalo_horas: 24 },
        notas_tecnicas: "En infecciones graves, se usan dosis de hasta 25 mg/kg IV cada 8 horas."
      },
      {
        indicacion: "Profilaxis quirúrgica",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 22.5,
          dosis_min: 22,
          dosis_max: 25,
          unidad_calculo: "mg/kg (Combinado)"
        },
        frecuencia: { texto_ui: "30 min antes de cirugía; repetir cada 1.5-2h", intervalo_horas: 1.5 }
      },
      {
        indicacion: "Infecciones sistémicas (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 12.5,
          dosis_max: 25,
          unidad_calculo: "mg/kg (Combinado)"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas (Parenteral)",
        vias: ["IV lenta", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 8.75,
          dosis_min: 8.75,
          dosis_max: 25,
          unidad_calculo: "mg/kg (Combinado)"
        },
        frecuencia: { texto_ui: "IV cada 8h / IM-SC cada 24h", intervalo_horas: 24 }
      },
      {
        indicacion: "Infecciones sistémicas (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 12.5,
          dosis_max: 25,
          unidad_calculo: "mg/kg (Combinado)"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 16,
          dosis_min: 12.5,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas y Ratones: Sistémica",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    primates: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    erizo: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones bacterianas (Parenteral)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 137.5,
          dosis_min: 125,
          dosis_max: 150,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Infecciones bacterianas (Oral/IV)",
        vias: ["PO", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 137.5,
          dosis_min: 125,
          dosis_max: 150,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    reptil: [
      {
        indicacion: "Gecos domésticos: Infecciones",
        vias: ["PO"],
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
      "Hipersensibilidad a las penicilinas o cefalosporinas.",
      "Administración oral en pacientes críticos (absorción poco fiable).",
      "Pequeños herbívoros (conejos, hámsteres, cobayas)."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO!: Causa enterotoxemia fatal.",
      "Cobaya": "¡PROHIBIDO!: Causa enterotoxemia fatal.",
      "Hamster": "¡PROHIBIDO!: Causa enterotoxemia fatal.",
      "Jerbo": "¡PROHIBIDO!: Causa enterotoxemia fatal."
    },
    efectos_adversos: [
      "Náuseas, vómitos y diarrea.",
      "Erupciones cutáneas.",
      "Hipotensión y edema alérgico tras administración IV (especialmente bajo anestesia).",
      "Enterotoxemia fatal en especies sensibles (vía oral)."
    ],
    monitoreo_recomendado: [
      "Signos de hipersensibilidad inmediata en uso IV",
      "Estado gastrointestinal"
    ],
    instrucciones_manejo: "Usar soluciones IV inmediatamente tras la reconstitución. Desechar si la solución oscurece significativamente.",
    sobredosis: {
      signos: ["Trastornos GI severos", "Signos de hipersensibilidad"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antibióticos bacteriostáticos (Tetraciclinas, Eritromicina)", efecto: "Pueden antagonizar el efecto bactericida.", severidad: "Moderada" },
      { farmaco: "Aminoglucósidos", efecto: "Sinergia in vivo, pero se inactivan si se mezclan en la misma jeringa.", severidad: "Leve" },
      { farmaco: "Alopurinol", efecto: "Riesgo de erupciones cutáneas en aves.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "La amoxicilina inhibe la síntesis de la pared celular bacteriana. El clavulanato inhibe irreversiblemente las beta-lactamasas producidas por bacterias resistentes.",
    farmacocinetica: "Excreción renal predominante. El clavulanato se absorbe bien oralmente."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "175 mg/ml (140 amox + 35 clav)", valor_concentracion: 175, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "50 mg a 625 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Gotas orales", concentracion_texto: "50 mg/ml (40 amox + 10 clav)", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
