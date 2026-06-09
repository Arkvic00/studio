import type { Drug } from '@/lib/types';

export const loratadineDrug: Drug = {
  id: "loratadine",
  meta_data: {
    nombre_generico: "Loratadina",
    nombres_comerciales: ["Clarityn", "Loratadina*"],
    grupo_farmacologico: "Antihistamínico H1 de segunda generación",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador selectivo de los receptores H1 de histamina.",
      "Efecto de larga duración con mínima sedación.",
      "Dosis específicas para perros y gatos no han sido totalmente determinadas por estudios farmacocinéticos.",
      "Uso con precaución en glaucoma de ángulo cerrado."
    ],
    usos_principales: "Manejo de enfermedades alérgicas.",
    inicio_accion: "Rápido",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota parece muy cansada o inquieta.",
    "Utilizar con precaución en animales con dificultad para orinar.",
    "Puede reducir el umbral convulsivo en animales con epilepsia."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Manejo de alergias",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          dosis_min: 5,
          dosis_max: 15,
          unidad_calculo: "mg/perro"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia hepática severa.",
      "Glaucoma.",
      "Retención urinaria."
    ],
    efectos_adversos: [
      "Sedación leve (inusual).",
      "Reducción del umbral de convulsiones.",
      "Xerostomía (boca seca)."
    ],
    monitoreo_recomendado: [
      "Eficacia en el control del prurito",
      "Frecuencia de convulsiones en epilépticos"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Sedación", "Trastornos GI"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Inhibidores de CYP450 (Cimetidina, Ketoconazol)", efecto: "Pueden aumentar los niveles plasmáticos de loratadina.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores H1 periféricos.",
    farmacocinetica: "Metabolismo hepático extenso. No cruza significativamente la barrera hematoencefálica."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "10 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Jarabe oral", concentracion_texto: "1 mg/ml", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
