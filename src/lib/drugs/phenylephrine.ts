import type { Drug } from '@/lib/types';

export const phenylephrineDrug: Drug = {
  id: "phenylephrine",
  meta_data: {
    nombre_generico: "Fenilefrina",
    nombres_comerciales: ["Minims Phenylephrine"],
    grupo_farmacologico: "Agonista alfa-1 adrenérgico selectivo",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potente vasoconstrictor periférico y midriático.",
      "Produce midriasis (dilatación de pupila) sin afectar la acomodación (no es ciclopléjico).",
      "Utilizado para el diagnóstico del Síndrome de Horner (hipersensibilidad por denervación).",
      "Diferencia la congestión vascular superficial (conjuntival) de la profunda (episcleral).",
      "Uso sistémico IV reservado para el soporte de presión arterial en hipotensión severa refractaria.",
      "En gatos, es ineficaz como midriático único."
    ],
    usos_principales: "Diagnóstico de Síndrome de Horner, midriasis prequirúrgica, reducción de hemorragia conjuntival y soporte de presión arterial.",
    inicio_accion: "Ocular: 2h (Perro), 5-10 min (Inyectable IV)",
    duracion_efecto: "Corta"
  },
  informacion_cliente: [
    "Informe si nota que el animal parece muy inquieto tras la aplicación de las gotas.",
    "Para la prueba de Horner, el veterinario aplicará gotas en ambos ojos y cronometrará la dilatación.",
    "Puede causar un aumento transitorio de la presión arterial.",
    "No usar en el ojo si ya se ha iniciado una cirugía intraocular."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipotensión severa (Emergencia)",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir cada 15 min según presión arterial", intervalo_horas: 0.25 },
        notas_tecnicas: "Asegurar rehidratación previa. Monitorear presión arterial constantemente."
      },
      {
        indicacion: "Mydriasis pre-quirúrgica / Vasoconstricción",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "gota" },
        notas_tecnicas: "Aplicar 2 horas antes de la cirugía. Puede combinarse con atropina."
      },
      {
        indicacion: "Diagnóstico Síndrome de Horner (sol. 1%)",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "gota en ambos ojos" },
        notas_tecnicas: "Dilatación <20 min: lesión de 3er orden; 20-45 min: 2do orden; 60-90 min: 1er orden o sano."
      }
    ],
    gato: [
      {
        indicacion: "Diagnóstico Síndrome de Horner / Ocular",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        notas_tecnicas: "Ineficaz para inducir midriasis como agente único en gatos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No aplicar una vez iniciada la cirugía ocular (riesgo de absorción arterial directa).",
      "Glaucoma de ángulo cerrado.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Hipertensión sistémica.",
      "Taquicardia inicial seguida de bradicardia refleja.",
      "Arritmias cardíacas (especialmente con digitálicos).",
      "Irritación local ocular.",
      "Necrosis tisular severa si ocurre extravasación IV."
    ],
    monitoreo_recomendado: [
      "Presión arterial (esencial en uso IV)",
      "Frecuencia cardíaca",
      "Estado de la conjuntiva"
    ],
    instrucciones_manejo: "Proteger de la luz. En caso de extravasación, infiltrar el sitio con fentolamina.",
    sobredosis: {
      signos: ["Hipertensión severa", "Bradicardia refleja intensa"],
      tratamiento: "Soporte sintomático; uso de bloqueadores alfa si la hipertensión es crítica."
    },
    interacciones_farmacologicas: [
      { farmaco: "Digoxina / Anestésicos volátiles", efecto: "Riesgo aumentado de arritmias cardíacas.", severidad: "Importante" },
      { farmaco: "Oxitócicos", efecto: "Potenciación del efecto presor (hipertensión severa).", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista adrenérgico alfa-1 altamente selectivo. Provoca contracción del músculo dilatador del iris y vasoconstricción arteriolar periférica.",
    farmacocinetica: "Eliminación rápida tras IV. Acción local ocular persistente por un par de horas."
  },
  presentaciones_comerciales: [
    { tipo: "Gotas oftálmicas (Minims)", concentracion_texto: "2.5% o 10%", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "1% (10 mg/ml)", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};