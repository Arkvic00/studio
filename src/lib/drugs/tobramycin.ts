import type { Drug } from '@/lib/types';

export const tobramycinDrug: Drug = {
  id: "tobramycin",
  meta_data: {
    nombre_generico: "Tobramicina",
    nombres_comerciales: ["Nebcin", "Tobramycin*"],
    grupo_farmacologico: "Aminoglucósido; Antibiótico bactericida",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida dependiente de concentración (subunidad 30S).",
      "Efecto post-antibiótico marcado (permite dosis q24h).",
      "Especialmente activo contra Pseudomonas aeruginosa.",
      "Altamente nefrotóxico y ototóxico.",
      "Ineficaz en ambientes con poco oxígeno (abscesos)."
    ],
    usos_principales: "Tratamiento de infecciones graves por Gram-negativos resistentes y Pseudomonas.",
    inicio_accion: "Rápido",
    duracion_efecto: "Prolongada"
  },
  informacion_cliente: [
    "Asegúrese de que su mascota esté siempre bien hidratada.",
    "Se requieren análisis de sangre y orina para vigilar los riñones.",
    "Informe si nota pérdida de audición o del equilibrio.",
    "No usar en ojos si hay úlceras profundas (si es la forma oftálmica)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas graves",
        vias: ["IV", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 4,
          dosis_max: 6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "En sepsis pueden usarse hasta 12 mg/kg/día con monitoreo estrecho."
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IV", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal preexistente.",
      "Deshidratación severa.",
      "Hipersensibilidad a aminoglucósidos."
    ],
    efectos_adversos: [
      "Nefrotoxicidad (fallo renal agudo).",
      "Ototoxicidad (sordera, ataxia).",
      "Bloqueo neuromuscular (raro)."
    ],
    monitoreo_recomendado: [
      "Creatinina y BUN séricos",
      "Densidad urinaria y sedimento (cilindros)",
      "Niveles séricos de tobramicina"
    ],
    instrucciones_manejo: "Administrar IV lentamente.",
    sobredosis: {
      signos: ["Fallo renal", "Ataxia"],
      tratamiento: "Fluidoterapia intensiva y soporte renal."
    },
    interacciones_farmacologicas: [
      { farmaco: "Furosemida / Anfotericina B", efecto: "Aumentan significativamente el riesgo de nefrotoxicidad.", severidad: "Grave" },
      { farmaco: "Beta-lactámicos", efecto: "Inactivación mutua si se mezclan en la jeringa.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis proteica bacteriana al unirse irreversiblemente a la subunidad 30S del ribosoma.",
    farmacocinetica: "Eliminación renal por filtración glomerular."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "40 mg/ml",
      valor_concentracion: 40,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
