import type { Drug } from '@/lib/types';

export const glutamineDrug: Drug = {
  id: "glutamine",
  meta_data: {
    nombre_generico: "Glutamina",
    nombres_comerciales: ["Glutamine*"],
    grupo_farmacologico: "Aminoácido; Protector gastrointestinal",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Aminoácido condicionalmente esencial necesario para la síntesis de energía en los enterocitos.",
      "Previene la atrofia de la mucosa intestinal durante el estrés por inanición.",
      "Mejora la curación del epitelio GI tras daños severos.",
      "Útil en el manejo de la enteritis por parvovirus.",
      "Se debe usar con precaución en animales con epilepsia o enfermedad hepática."
    ],
    usos_principales: "Protector GI en inanición por estrés y potenciador de la curación intestinal.",
    inicio_accion: "Variable",
    duracion_efecto: "Requiere administración diaria"
  },
  informacion_cliente: [
    "Suplemento para ayudar a la recuperación de los intestinos tras enfermedades graves.",
    "Puede venir en forma de polvo para mezclar con el alimento o en tabletas.",
    "Informe si su mascota tiene antecedentes de convulsiones antes de iniciar el tratamiento."
  ],
  parametros_dosificacion: {
    huron: [
      {
        indicacion: "Soporte gastrointestinal / Post-adrenalectomía",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 500,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dosis diaria total dividida",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Encefalopatía hepática aguda (se metaboliza a amoníaco y glutamato).",
      "Insuficiencia renal avanzada."
    ],
    efectos_adversos: [
      "Efectos sobre el sistema nervioso central en dosis muy altas.",
      "Aumento de los niveles de amoníaco en pacientes hepáticos."
    ],
    monitoreo_recomendado: [
      "Estado mental",
      "Frecuencia de convulsiones en epilépticos",
      "Función hepática"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Signos neurológicos", "Letargo"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Lactulosa", efecto: "La glutamina puede antagonizar los efectos de la lactulosa en la encefalopatía hepática.", severidad: "Moderada" },
      { farmaco: "Antiepilépticos", efecto: "Podría afectar potencialmente su eficacia.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Actúa como combustible preferente para las células del intestino delgado y las células del sistema inmune.",
    farmacocinetica: "Absorción intestinal rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Polvo / Tableta",
      concentracion_texto: "500 mg",
      valor_concentracion: 500,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
