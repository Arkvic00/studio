import type { Drug } from '@/lib/types';

export const buprenorphineDrug: Drug = {
  id: "buprenorphine",
  meta_data: {
    nombre_generico: "Buprenorfina",
    nombres_comerciales: ["Bupaq", "Buprecare", "Buprenodale", "Bupredine", "Buprevet", "Vetergesic"],
    grupo_farmacologico: "Agonista parcial de los receptores mu-opioides",
    status_regulatorio: "POM-V CD SCHEDULE 3"
  },
  resumen_clinico: {
    puntos_clave: [
      "Analgesia potente mediante alta afinidad y baja actividad intrínseca en receptores mu.",
      "Duración prolongada (aprox. 6 horas) debido a su lenta disociación del receptor.",
      "Como agonista parcial, puede antagonizar los efectos de agonistas mu puros (ej. metadona, fentanilo).",
      "La vía SC puede tener menor eficacia analgésica que la IV o IM en perros y gatos.",
      "Respuesta individual variable; la evaluación del dolor post-administración es imperativa."
    ],
    usos_principales: "Alivio del dolor perioperatrio leve a moderado. Sedación en combinación con acepromazina o dexmedetomidina.",
    inicio_accion: "> 15 minutos",
    duracion_efecto: "6 horas (mamíferos), 2–5 horas (aves)"
  },
  informacion_cliente: [
    "Medicamento sujeto a control de estupefacientes.",
    "Puede causar sedación leve.",
    "La presentación multidosis es amarga y puede causar rechazo si se da vía transmucosa oral.",
    "No suspender el monitoreo del dolor solo porque se ha administrado el fármaco."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Analgesia perioperatoria",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 },
        notas_tecnicas: "Vía SC no recomendada por eficacia inconsistente."
      }
    ],
    gato: [
      {
        indicacion: "Analgesia perioperatoria",
        vias: ["IV", "IM", "Transmucosa Oral (OTM)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          dosis_min: 0.02,
          dosis_max: 0.03,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 },
        notas_tecnicas: "Vía OTM bien tolerada si es sin conservantes (viales de 1ml). SC no recomendada."
      }
    ],
    huron: [
      {
        indicacion: "Analgesia",
        vias: ["SC", "IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.03,
          dosis_min: 0.01,
          dosis_max: 0.05,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 },
        notas_tecnicas: "Dosis altas pueden causar sedación."
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia",
        vias: ["SC", "IM", "IV", "Transmucosa Oral"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.045,
          dosis_min: 0.03,
          dosis_max: 0.06,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 },
        notas_tecnicas: "Dosis <0.03 mg/kg tienen efecto analgésico muy limitado en conejos."
      }
    ],
    cobaya: [
      {
        indicacion: "Analgesia (Cavy/Chinchilla)",
        vias: ["SC", "IV", "Transmucosa Oral"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.125,
          dosis_min: 0.05,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 a 8 horas", intervalo_horas: 6 },
        notas_tecnicas: "Dosis altas requeridas para analgesia completa, pero vigilar sedación."
      }
    ],
    roedores: [
      {
        indicacion: "Analgesia en Ratones",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      }
    ],
    primates: [
      {
        indicacion: "Analgesia",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          dosis_min: 0.01,
          dosis_max: 0.03,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      }
    ],
    erizo: [
      {
        indicacion: "Analgesia",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.03,
          dosis_min: 0.01,
          dosis_max: 0.05,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Analgesia General",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.03,
          dosis_min: 0.01,
          dosis_max: 0.05,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 10 }
      },
      {
        indicacion: "Loro Gris Africano",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 7 horas", intervalo_horas: 7 },
        notas_tecnicas: "Eficacia no probada, dosis extrapolada de estudio farmacocinético."
      }
    ],
    reptil: [
      {
        indicacion: "Analgesia (Eficacia no establecida)",
        vias: ["IM (Miembros anteriores)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.01,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas", intervalo_horas: 36 },
        notas_tecnicas: "Estudios muestran falta de eficacia analgésica clara en reptiles. Inyectar en miembros anteriores."
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Ranas Leopardo",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 38,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Anfibios: Gallipatos (Newts)",
        vias: ["Intracelómica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    peces: [
      {
        indicacion: "Analgesia",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.01,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Pobre eficacia reportada en Trucha Arcoíris."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No usar para premedicación si se anticipa el uso de opioides potentes (agonistas mu puros) durante la cirugía.",
      "Hipersensibilidad a opioides."
    ],
    efectos_adversos: [
      "Sedación (raro a dosis clínicas).",
      "Dolor en el sitio de inyección IM (presentación multidosis).",
      "Rechazo por sabor amargo (con clorocresol).",
      "Atraviesa placenta (sedación en neonatos)."
    ],
    monitoreo_recomendado: [
      "Escalas de dolor post-quirúrgicas",
      "Función respiratoria",
      "Función hepática en tratamientos prolongados"
    ],
    instrucciones_manejo: "Usar solo la versión sin conservantes para vía transmucosa oral.",
    sobredosis: {
      signos: ["Sedación profunda", "Depresión respiratoria (poco común)"],
      tratamiento: "Naloxona (antagonista). Debido a la alta afinidad, pueden requerirse dosis altas."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anestésicos (Inducción/Mantenimiento)", efecto: "Reduce las dosis requeridas de otros agentes.", severidad: "Importante" },
      { farmaco: "Agonistas mu puros", efecto: "Antagonismo parcial del efecto analgésico.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista parcial de los receptores mu-opioides con alta afinidad pero baja actividad intrínseca.",
    farmacocinetica: "Metabolismo hepático. Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "0.3 mg/ml",
      valor_concentracion: 0.3,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
