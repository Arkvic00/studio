import type { Drug } from '@/lib/types';

export const lorazepamDrug: Drug = {
  id: "lorazepam",
  meta_data: {
    nombre_generico: "Lorazepam",
    nombres_comerciales: ["Ativan", "Intensol"],
    grupo_farmacologico: "Benzodiazepina de acción intermedia",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potencia la actividad del GABA en el SNC, resultando en ansiolisis.",
      "Manejo a corto plazo de trastornos de ansiedad agudos.",
      "Puede inhibir la memoria; no se recomienda su uso rutinario en planes de modificación de conducta a largo plazo.",
      "Retirada gradual obligatoria para evitar temblores y anorexia.",
      "Menos propenso a causar necrosis hepática en gatos que el diazepam, pero aún requiere precaución."
    ],
    usos_principales: "Manejo de episodios de ansiedad intensa, miedos agudos y premedicación.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Informe inmediatamente si nota que su mascota parece más agresiva de lo normal (desinhibición).",
    "Puede causar somnolencia o una leve falta de coordinación.",
    "No suspenda el medicamento repentinamente tras un uso prolongado.",
    "Mantener fuera del alcance de niños."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Manejo de la ansiedad / Miedo agudo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.02,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas (Iniciar bajo y escalar)", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Manejo de la ansiedad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.02,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Glaucoma.",
      "Enfermedad hepática o renal significativa.",
      "Gestación y lactancia.",
      "Hipersensibilidad a benzodiazepinas."
    ],
    efectos_adversos: [
      "Somnolencia (sedación).",
      "Ataxia transitoria.",
      "Desinhibición de la agresión.",
      "Temblores por retirada brusca."
    ],
    monitoreo_recomendado: [
      "Estado mental y coordinación",
      "Función hepática en gatos",
      "Respuesta conductual"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Sedación profunda", "Coma", "Apnea"],
      tratamiento: "Antagonista específico: Flumazenilo; soporte cardiorrespiratorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antifúngicos (Itraconazol)", efecto: "Inhiben el metabolismo del lorazepam, aumentando su toxicidad.", severidad: "Importante" },
      { farmaco: "Otros depresores del SNC", efecto: "Efectos sedantes aditivos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista del receptor benzodiazepínico que facilita la unión de GABA a sus receptores GABAA.",
    farmacocinetica: "Metabolismo por glucuronidación directa; no depende tanto de la función hepática oxidativa como otras benzodiazepinas."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "1 mg", valor_concentracion: 1, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "4 mg/ml", valor_concentracion: 4, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
