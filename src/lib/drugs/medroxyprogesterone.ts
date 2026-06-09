import type { Drug } from '@/lib/types';

export const medroxyprogesteroneDrug: Drug = {
  id: "medroxyprogesterone",
  meta_data: {
    nombre_generico: "Medroxiprogesterona (Acetato de medroxiprogesterona)",
    nombres_comerciales: ["Depo-Provera", "Provera"],
    grupo_farmacologico: "Progestágeno sintético",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Mimético de la progesterona que altera la transcripción del ADN.",
      "Uso principal como anticonceptivo en primates.",
      "Uso en aves para picaje y ovulación persistente (bajo margen de seguridad).",
      "Asociado a numerosos efectos metabólicos y endocrinos adversos."
    ],
    usos_principales: "Contracepción en primates. Control de problemas sexuales y picaje en aves (uso restringido).",
    inicio_accion: "Variable",
    duracion_efecto: "Prolongada (semanas a meses según vía)"
  },
  informacion_cliente: [
    "Medicamento hormonal con efectos secundarios potentes.",
    "No usar en animales diabéticos.",
    "Puede causar un aumento notable del hambre y la sed.",
    "En aves, existe un alto riesgo de daño al hígado y obesidad.",
    "La inyección puede causar pérdida de pelo permanente en el sitio de aplicación."
  ],
  parametros_dosificacion: {
    primates: [
      {
        indicacion: "Anticonceptivo (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/animal"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 5 a 10 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Anticonceptivo (Inyectable)",
        vias: ["IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 150,
          unidad_calculo: "mg/animal"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 },
        notas_tecnicas: "Lémures: 5 mg/kg IM cada 6 semanas."
      }
    ],
    ave: [
      {
        indicacion: "Picaje / Ovulación persistente",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 27.5,
          dosis_min: 5,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir cada 4 a 6 semanas si es necesario", intervalo_horas: 1008 },
        notas_tecnicas: "Usar con extrema precaución debido a la alta tasa de efectos secundarios en aves."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación.",
      "Diabetes mellitus.",
      "Enfermedad hepática severa.",
      "Tumores mamarios previos."
    ],
    efectos_adversos: [
      "Diabetes mellitus y resistencia a la insulina.",
      "Hiperplasia endometrial quística y piometra.",
      "Supresión adrenocortical.",
      "Depresión y letargo.",
      "Aumento de peso y polifagia.",
      "Atrofia cutánea y alopecia local.",
      "En aves: daño hepático graso."
    ],
    monitoreo_recomendado: [
      "Niveles de glucosa en sangre",
      "Función hepática en aves",
      "Estado de las glándulas mamarias"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Poliuria/Polidipsia severa", "Depresión marcada", "Hiperglucemia"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Insulina", efecto: "Reduce la eficacia de la insulina.", severidad: "Importante" },
      { farmaco: "Corticosteroides", efecto: "Potenciación de la supresión adrenal.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a los receptores citoplasmáticos de progesterona, inhibiendo la secreción de gonadotropinas pituitarias.",
    farmacocinetica: "Absorción muy lenta desde el depósito muscular."
  },
  presentaciones_comerciales: [
    {
      tipo: "Suspensión inyectable",
      concentracion_texto: "150 mg/ml",
      valor_concentracion: 150,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Tableta oral",
      concentracion_texto: "5 mg",
      valor_concentracion: 5,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
