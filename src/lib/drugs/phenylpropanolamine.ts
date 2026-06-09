import type { Drug } from '@/lib/types';

export const phenylpropanolamineDrug: Drug = {
  id: "phenylpropanolamine",
  meta_data: {
    nombre_generico: "Fenilpropanolamina",
    nombres_comerciales: ["Propalin", "Proin", "Urilin"],
    grupo_farmacologico: "Simpaticomimético",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente simpaticomimético que aumenta la resistencia del esfínter uretral.",
      "Tratamiento de elección para la incontinencia urinaria por incompetencia del esfínter en perras.",
      "El efecto clínico puede tardar varios días en ser evidente.",
      "La incontinencia suele reaparecer rápidamente si se omiten dosis."
    ],
    usos_principales: "Tratamiento de la incontinencia urinaria secundaria a incompetencia del esfínter uretral (USMI).",
    inicio_accion: "3 a 5 días para efecto máximo",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota está inusualmente inquieta, agresiva o irritable.",
    "No suspenda el tratamiento sin consultar al veterinario, ya que la incontinencia volverá.",
    "Use con precaución si el animal tiene glaucoma o diabetes.",
    "El medicamento suele administrarse con la comida."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Incompetencia del esfínter uretral (USMI)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 },
        notas_tecnicas: "Dosis alternativa: 1.2 mg/kg cada 12 horas. Ajustar a la dosis mínima efectiva tras la estabilización."
      }
    ],
    gato: [
      {
        indicacion: "Incompetencia del esfínter (Uso extra-label)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Incontinencia urinaria",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/animal"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Glaucoma.",
      "Hipertensión sistémica.",
      "Enfermedad cardiovascular severa.",
      "Insuficiencia renal o hepática severa."
    ],
    efectos_adversos: [
      "Inquietud y excitabilidad.",
      "Agresividad o irritabilidad.",
      "Hipertensión arterial.",
      "Anorexia y vómitos.",
      "Taquicardia."
    ],
    monitoreo_recomendado: [
      "Frecuencia de episodios de incontinencia",
      "Presión arterial sistémica",
      "Estado mental y conducta"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Hipertensión severa", "Agitación extrema", "Taquicardia"],
      tratamiento: "Soporte sintomático; considerar bloqueadores alfa si la hipertensión es crítica."
    },
    interacciones_farmacologicas: [
      { farmaco: "Estriol", efecto: "Sinergia positiva para el control de la incontinencia.", severidad: "Leve" },
      { farmaco: "Inhibidores de la MAO", efecto: "Riesgo de crisis hipertensiva fatal.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estimula directamente los receptores alfa-adrenérgicos en el músculo liso del esfínter uretral interno, aumentando el tono basal.",
    farmacocinetica: "Absorción oral rápida. Metabolismo hepático parcial."
  },
  presentaciones_comerciales: [
    { tipo: "Jarabe oral", concentracion_texto: "40 mg/ml", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta masticable", concentracion_texto: "50 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true }
  ]
};