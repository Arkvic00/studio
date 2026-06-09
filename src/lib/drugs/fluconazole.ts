import type { Drug } from '@/lib/types';

export const fluconazoleDrug: Drug = {
  id: "fluconazole",
  meta_data: {
    nombre_generico: "Fluconazol",
    nombres_comerciales: ["Diflucan", "Fluconazol*"],
    grupo_farmacologico: "Antifúngico triazólico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de ergosterol en la membrana fúngica.",
      "Excelente penetración en el SNC, tracto respiratorio y fluidos oculares.",
      "Excreción renal predominante (altas concentraciones en orina).",
      "Requiere ajuste de dosis en insuficiencia renal o hepática.",
      "Tratamiento prolongado, a menudo superior a 2 meses."
    ],
    usos_principales: "Tratamiento de Cryptococcus, Candida, Histoplasma, Microsporum canis y Blastomyces. Manejo de la quitridiomicosis en anfibios.",
    inicio_accion: "Rápido",
    duracion_efecto: "Requiere administración diaria o q12h"
  },
  informacion_cliente: [
    "Informe si nota vómitos, diarrea o color amarillento en los ojos (ictericia).",
    "El tratamiento es prolongado; no lo suspenda antes de lo indicado por el veterinario.",
    "Puede administrarse con o sin comida.",
    "En gatos con problemas oculares o cerebrales, es vital mantener el horario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Micosis sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.75,
          dosis_min: 2.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Candidiasis urinaria",
        vias: ["PO"],
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
    gato: [
      {
        indicacion: "Criptococosis Ocular / SNC",
        vias: ["IV (infusión)", "PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 50,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "En casos graves de SNC se usan hasta 100 mg/gato q12h."
      },
      {
        indicacion: "Infecciones sistémicas (Inducción)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 100,
          unidad_calculo: "mg/gato (Dosis doble el día 1)"
        }
      },
      {
        indicacion: "Dermatofitosis / Criptococosis nasal",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "En dermatofitosis: administrar 7 días, descansar 7 días (repetir 3 veces)."
      }
    ],
    conejo: [
      {
        indicacion: "Micosis sistémicas",
        vias: ["IV (infusión lenta)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 34,
          dosis_min: 25,
          dosis_max: 43,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Queratitis por Aspergillus",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 37.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Meningitis criptocócica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Micosis sistémicas / Candidiasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 48 horas", intervalo_horas: 24 }
      }
    ],
    reptil: [
      {
        indicacion: "Dermatofitosis (Iguanas verdes)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Quitridiomicosis",
        vias: ["PO", "Inmersión"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 60,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Los baños a 25 mg/l prolongan supervivencia pero no siempre previenen mortalidad."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales gestantes o lactantes.",
      "Hipersensibilidad a triazoles.",
      "Insuficiencia hepática severa."
    ],
    efectos_adversos: [
      "Hepatotoxicidad.",
      "Náuseas, vómitos y diarrea.",
      "Aves: Vómitos."
    ],
    monitoreo_recomendado: [
      "Enzimas hepáticas (ALT/ALP)",
      "Función renal (Creatinina/BUN)",
      "Resolución de signos clínicos"
    ],
    instrucciones_manejo: "Observar precauciones normales. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Vómitos", "Ictericia", "Anorexia"],
      tratamiento: "Soporte hepático y fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Ciclosporina", efecto: "Fluconazol aumenta significativamente sus niveles séricos.", severidad: "Importante" },
      { farmaco: "Teofilina", efecto: "Puede aumentar sus niveles plasmáticos.", severidad: "Moderada" },
      { farmaco: "Terfenadina", efecto: "Riesgo de toxicidad cardiaca (en humanos).", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la enzima 14-alfa-desmetilasa fúngica, bloqueando la síntesis de ergosterol.",
    farmacocinetica: "Buena biodisponibilidad oral. Amplia distribución tisular incluyendo barrera hematoencefálica."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsulas", concentracion_texto: "50 mg, 150 mg, 200 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Suspensión oral", concentracion_texto: "40 mg/ml", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
