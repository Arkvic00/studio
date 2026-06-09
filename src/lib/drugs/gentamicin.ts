import type { Drug } from '@/lib/types';

export const gentamicinDrug: Drug = {
  id: "gentamicin",
  meta_data: {
    nombre_generico: "Gentamicina",
    nombres_comerciales: ["Clinagel Vet", "Easotic", "Genta", "Otomax", "Tiacil"],
    grupo_farmacologico: "Aminoglucósido; Antibiótico bactericida",
    status_regulatorio: "POM-V, POM. Categoría C (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida dependiente de concentración que inhibe la subunidad 30S.",
      "Requiere un ambiente rico en oxígeno (ineficaz en abscesos o exudados densos).",
      "Marcado efecto post-antibiótico; se prefiere dosis diaria única (q24h) para reducir nefrotoxicidad.",
      "Altamente nefrotóxico y potencialmente ototóxico.",
      "Penetración pobre en SNC y ojo (excepto tópica).",
      "Los gatos son más sensibles a su toxicidad."
    ],
    usos_principales: "Tratamiento de infecciones graves por Gram-negativos. Uso tópico en ojos y oídos. Nebulización en enfermedades respiratorias.",
    inicio_accion: "Rápido",
    duracion_efecto: "Prolongada (efecto post-antibiótico)"
  },
  informacion_cliente: [
    "Asegúrese de que su mascota esté siempre bien hidratada durante el tratamiento.",
    "En uso ótico, informe si nota que el animal pierde el equilibrio o deja de oír.",
    "Se requieren análisis de orina y sangre frecuentes en tratamientos sistémicos.",
    "Completar el ciclo de tratamiento estrictamente según lo indicado.",
    "No usar en oídos si sospecha que el tímpano está roto."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas graves",
        vias: ["IV lenta (30 min)", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas (máx 7 días)", intervalo_horas: 24 }
      },
      {
        indicacion: "Otitis externa (Easotic / Otomax)",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "ml (Easotic) o 4-8 gotas (Otomax)"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Oftálmico",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "gota" },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IV lenta", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6.5,
          dosis_min: 5,
          dosis_max: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 4,
          dosis_max: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones graves",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      }
    ],
    reptil: [
      {
        indicacion: "Quelonios: Infecciones",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 72 horas", intervalo_horas: 72 }
      },
      {
        indicacion: "Serpientes: Infecciones",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 72 horas", intervalo_horas: 72 }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Sistémica",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    peces: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.75,
          dosis_min: 2.5,
          dosis_max: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 2 a 3 días", intervalo_horas: 48 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Tímpano perforado (tópico).",
      "Insuficiencia renal preexistente.",
      "Deshidratación severa.",
      "Gestación."
    ],
    efectos_adversos: [
      "Nefrotoxicidad aguda (fallo renal).",
      "Ototoxicidad (auditiva y vestibular).",
      "Bloqueo neuromuscular (raro).",
      "Retraso en la cicatrización corneal (oftálmico).",
      "Cilindros celulares en orina (signo temprano de daño renal)."
    ],
    monitoreo_recomendado: [
      "Densidad urinaria y sedimento (cilindros)",
      "Creatinina y BUN séricos",
      "Niveles valle de gentamicina (<1-2 μg/ml)",
      "Estado de hidratación y electrolitos (Potasio)"
    ],
    instrucciones_manejo: "Administrar IV lentamente (30 min). No mezclar con penicilinas o heparina en la misma jeringa.",
    sobredosis: {
      signos: ["Fallo renal agudo", "Ataxia", "Sordera"],
      tratamiento: "Fluidoterapia intensiva; diálisis en casos severos."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs / Furosemida / Anfotericina B", efecto: "Aumentan drásticamente el riesgo de nefrotoxicidad.", severidad: "Grave" },
      { farmaco: "Beta-lactámicos", efecto: "Sinergia in vivo, pero se inactivan si se mezclan físicamente.", severidad: "Leve" },
      { farmaco: "Relajantes musculares", efecto: "Potenciación del bloqueo neuromuscular.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une irreversiblemente a la subunidad 30S del ribosoma, induciendo errores en la lectura del mRNA e inhibiendo la síntesis proteica.",
    farmacocinetica: "Absorción mínima oral. Excreción renal exclusiva por filtración glomerular."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "40 mg/ml, 100 mg/ml", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Gotas oftálmicas/óticas", concentracion_texto: "0.3% a 0.5%", valor_concentracion: 3, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Gel oftálmico", concentracion_texto: "0.3% (Clinagel)", valor_concentracion: 3, unidad_concentracion: "mg/g", es_divisible: false }
  ]
};
