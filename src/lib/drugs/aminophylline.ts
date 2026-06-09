import type { Drug } from '@/lib/types';

export const aminophyllineDrug: Drug = {
  id: "aminophylline",
  meta_data: {
    nombre_generico: "Aminofilina",
    nombres_comerciales: ["Aminofilina*"],
    grupo_farmacologico: "Broncodilatador (Xantina); Inhibidor de la fosfodiesterasa",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Mezcla estable de teofilina y etilendiamina.",
      "Broncodilatador, estimulante del centro respiratorio y leve inotrópico positivo.",
      "Bajo índice terapéutico: debe dosificarse basado en el PESO MAGRO.",
      "La vía IM causa dolor local intenso y rara vez se recomienda."
    ],
    usos_principales: "Tratamiento de enfermedades de las vías respiratorias pequeñas (bronquitis, colapso traqueal). Manejo de bronconstricción en emergencias.",
    inicio_accion: "Rápido tras administración IV lenta",
    duracion_efecto: "Requiere administración frecuente (q8-12h)"
  },
  informacion_cliente: [
    "Vigilar signos de inquietud, temblores o vómitos.",
    "En gatos, puede causar una sensibilidad exagerada a los estímulos (hipereestesia).",
    "No administrar otros medicamentos sin consultar, ya que existen muchas interacciones."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Broncodilatación",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 },
        notas_tecnicas: "Dosificar según peso magro (lean body weight)."
      },
      {
        indicacion: "Broncodilatación de emergencia",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Diluir previamente y administrar con extrema precaución."
      }
    ],
    gato: [
      {
        indicacion: "Broncodilatación",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Vigilar hipereestesia."
      },
      {
        indicacion: "Broncodilatación de emergencia",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Diluir antes de administrar."
      }
    ],
    huron: [
      {
        indicacion: "Broncodilatación",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5.5,
          dosis_min: 4.4,
          dosis_max: 6.6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "La vía IM puede ser dolorosa."
      }
    ],
    conejo: [
      {
        indicacion: "Broncodilatación de emergencia",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    cobaya: [
      {
        indicacion: "Broncodilatación",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Broncodilatación (General)",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4.5,
          dosis_min: 4,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Aves Rapaces (Raptors)",
        vias: ["PO", "IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 9,
          dosis_min: 8,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 6 }
      }
    ],
    reptil: [
      {
        indicacion: "Broncodilatación",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Pacientes con historial conocido de arritmias.",
      "Pacientes con historial de convulsiones.",
      "Hipersensibilidad a las xantinas."
    ],
    precauciones: [
      "Enfermedad cardíaca severa.",
      "Úlceras gástricas.",
      "Hipertiroidismo.",
      "Disfunción renal o hepática.",
      "Hipertensión severa."
    ],
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Taquicardia y arritmias.",
      "Inquietud, agitación y convulsiones.",
      "Gatos: Hipereestesia.",
      "Poliuria y polidipsia (bebe/orina mucho)."
    ],
    monitoreo_recomendado: [
      "Niveles séricos (Rango terapéutico: 5–20 μg/ml)",
      "Frecuencia y ritmo cardíaco",
      "Signos de excitación del SNC"
    ],
    instrucciones_manejo: "No mezclar en la misma jeringa con otros fármacos. Administrar IV muy lentamente.",
    sobredosis: {
      signos: ["Convulsiones", "Arritmias fatales", "Vómitos severos"],
      tratamiento: "Soporte sintomático, control de convulsiones (diazepam) y manejo de arritmias."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina / Eritromicina / Quinolonas", efecto: "Aumentan los niveles séricos de aminofilina (riesgo de toxicidad).", severidad: "Importante" },
      { farmaco: "Fenobarbital", efecto: "Disminuye la concentración sérica de aminofilina.", severidad: "Moderada" },
      { farmaco: "Halotano", efecto: "Aumenta la incidencia de arritmias cardíacas.", severidad: "Importante" },
      { farmaco: "Ketamina", efecto: "Aumenta la incidencia de convulsiones.", severidad: "Importante" },
      { farmaco: "Propranolol", efecto: "Antagonismo mutuo de efectos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la fosfodiesterasa, antagonista de adenosina y prostaglandinas. Produce relajación del músculo liso bronquial.",
    farmacocinetica: "100 mg de aminofilina equivalen a 79 mg de teofilina."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "25 mg/ml", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "100 mg", valor_concentracion: 100, unidad_concentracion: "mg", es_divisible: true }
  ]
};
