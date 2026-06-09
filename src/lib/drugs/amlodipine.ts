import type { Drug } from '@/lib/types';

export const amlodipineDrug: Drug = {
  id: "amlodipine",
  meta_data: {
    nombre_generico: "Amlodipino",
    nombres_comerciales: ["Amodip", "Istin", "Norvasc"],
    grupo_farmacologico: "Antagonista de los canales de calcio",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antagonista de los canales de calcio con acción predominante en la vasculatura arteriolar periférica.",
      "Causa vasodilatación y reduce la poscarga.",
      "Tratamiento de elección para la hipertensión sistémica en gatos.",
      "Seguro incluso en presencia de insuficiencia renal concurrente.",
      "Se metaboliza en el hígado; reducir dosis en disfunción hepática."
    ],
    usos_principales: "Tratamiento de la hipertensión sistémica en gatos y perros. Reducción de la proteinuria en gatos hipertensos.",
    inicio_accion: "No especificado",
    duracion_efecto: "Requiere administración diaria"
  },
  informacion_cliente: [
    "Es esencial monitorear la presión arterial regularmente durante el tratamiento.",
    "Informe si nota letargo, falta de apetito o debilidad.",
    "El tratamiento suele ser de por vida para controlar la presión arterial."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipertensión sistémica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Titular hacia arriba semanalmente según sea necesario hasta 0.5 mg/kg. Considerar el uso concurrente de un IECA para evitar la activación del SRAA."
      }
    ],
    gato: [
      {
        indicacion: "Hipertensión sistémica",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.625,
          dosis_min: 0.625,
          dosis_max: 1.25,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "La dosis puede aumentarse lentamente o aumentar la frecuencia a q12h si es necesario. El monitoreo de la presión arterial es esencial."
      }
    ],
    ave: [
      {
        indicacion: "Psitácidas: Hipertensión",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.1,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Psitácidas: Hipertensión (Dosis alta)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Shock cardiogénico.",
      "Fallo hepático severo.",
      "Gestación."
    ],
    efectos_adversos: [
      "Letargo.",
      "Hipotensión.",
      "Inapetencia.",
      "Hiperplasia gingival (reportada en perros y gatos)."
    ],
    monitoreo_recomendado: [
      "Presión arterial sistémica (esencial)",
      "Función hepática",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Hipotensión severa", "Bradicardia"],
      tratamiento: "Soporte cardiovascular, fluidoterapia y agentes inotrópicos si es necesario."
    },
    interacciones_farmacologicas: [
      { farmaco: "Ketoconazol / Itraconazol / Ciclosporina / Cimetidina", efecto: "Pueden inhibir el metabolismo del amlodipino, aumentando sus niveles sanguíneos.", severidad: "Importante" },
      { farmaco: "Rifampicina", efecto: "Puede reducir los niveles de amlodipino.", severidad: "Moderada" },
      { farmaco: "IECA / Diuréticos / Beta-bloqueadores", efecto: "Riesgo aumentado de hipotensión si se combinan.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista de los canales de calcio con acción predominante en la vasculatura arteriolar periférica, causando vasodilatación.",
    farmacocinetica: "Metabolismo hepático. Dosis debe reducirse en disfunción hepática."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "1.25 mg, 5 mg, 10 mg", valor_concentracion: 1.25, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "1 mg/ml, 2 mg/ml", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Gel transdérmico", concentracion_texto: "12.5 mg/ml", valor_concentracion: 12.5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};