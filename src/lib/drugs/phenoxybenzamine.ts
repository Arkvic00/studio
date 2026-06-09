import type { Drug } from '@/lib/types';

export const phenoxybenzamineDrug: Drug = {
  id: "phenoxybenzamine",
  meta_data: {
    nombre_generico: "Fenoxibenzamina",
    nombres_comerciales: ["Dibenyline"],
    grupo_farmacologico: "Antagonista alfa-adrenérgico no selectivo",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador irreversible de los receptores alfa-1 y alfa-2.",
      "Produce una 'simpatectomía química'.",
      "Reduce la resistencia del esfínter uretral interno.",
      "Uso fundamental en el manejo de la disinergia de reflejos (vejiga-uretra).",
      "Control de la hipertensión preoperatoria en casos de feocromocitoma.",
      "El efecto máximo puede tardar de 48 a 72 horas en observarse."
    ],
    usos_principales: "Tratamiento de la obstrucción uretral funcional (espasmódica) y manejo médico/preoperatorio del feocromocitoma.",
    inicio_accion: "Lento (24-48h)",
    duracion_efecto: "Prolongada (días, debido a unión irreversible)"
  },
  informacion_cliente: [
    "Informe si nota que su mascota está muy débil, se marea o se desmaya (hipotensión).",
    "El medicamento puede causar congestión nasal.",
    "No suspenda el tratamiento sin consultar al veterinario.",
    "Lavar las manos tras la administración; el fármaco puede absorberse por la piel."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Disinergia de reflejos (Uretral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas por al menos 5 días", intervalo_horas: 12 }
      },
      {
        indicacion: "Hipertensión por Feocromocitoma",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 2.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas por 10-14 días pre-cirugía", intervalo_horas: 12 },
        notas_tecnicas: "Titular la dosis gradualmente. Si se requieren beta-bloqueadores, iniciarlos SOLO después del bloqueo alfa."
      }
    ],
    gato: [
      {
        indicacion: "Espasmo uretral / FLUTD",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas por 5 días", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Espasmo uretral",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedad cardiovascular preexistente severa.",
      "Insuficiencia renal.",
      "Hipotensión o estados de shock."
    ],
    efectos_adversos: [
      "Hipotensión marcada (debilidad, síncope).",
      "Taquicardia (refleja).",
      "Congestión nasal.",
      "Miosis (pupilas pequeñas).",
      "Malestar gastrointestinal."
    ],
    monitoreo_recomendado: [
      "Presión arterial sistémica",
      "Frecuencia cardíaca",
      "Eficacia en el vaciado vesical"
    ],
    instrucciones_manejo: "Observar precauciones normales; irritante para la piel.",
    sobredosis: {
      signos: ["Hipotensión profunda", "Taicardia extrema", "Colapso"],
      tratamiento: "Soporte de presión con fluidoterapia y noradrenalina si es necesario. La adrenalina está contraindicada (puede causar hipotensión paradójica)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Beta-bloqueadores / Diuréticos", efecto: "Aumentan drásticamente el riesgo de hipotensión en la primera dosis.", severidad: "Importante" },
      { farmaco: "Simpaticomiméticos (Fenilefrina)", efecto: "Fenoxibenzamina antagoniza sus efectos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une covalentemente e irreversiblemente a los receptores alfa-adrenérgicos, bloqueando la señalización simpática en vasos y esfínteres.",
    farmacocinetica: "Absorción oral pobre e incompleta. El efecto dura mucho más que la presencia del fármaco en plasma."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula oral", concentracion_texto: "10 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "50 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};