import type { Drug } from '@/lib/types';

export const chlorambucilDrug: Drug = {
  id: "chlorambucil",
  meta_data: {
    nombre_generico: "Clorambucilo",
    nombres_comerciales: ["Leukeran"],
    grupo_farmacologico: "Agente alquilante; Antineoplásico; Inmunosupresor",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente alquilante que inhibe la síntesis y función del ADN mediante enlaces cruzados.",
      "No es específico del ciclo celular.",
      "Utilizado en protocolos de quimioterapia metronómica y para neoplasias linfoides de bajo grado.",
      "Alternativa en enfermedades inmunomediadas cuando han fallado terapias de primera línea.",
      "Requiere refrigeración estricta (2-8°C)."
    ],
    usos_principales: "Tratamiento de leucemia linfocítica crónica (LLC), linfoma de bajo grado, pénfigo foliáceo felino, complejo de granuloma eosinofílico y enteropatía con pérdida de proteínas.",
    inicio_accion: "Variable (días a semanas para efecto inmunosupresor)",
    duracion_efecto: "Persistente; requiere monitoreo acumulativo"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejar siempre con guantes impermeables.",
    "Las tabletas deben tragarse enteras; no las triture ni las divida.",
    "Mantenga el frasco en el refrigerador (2-8°C) y bien cerrado.",
    "Se requieren análisis de sangre frecuentes para vigilar los glóbulos blancos y plaquetas.",
    "Informe inmediatamente si nota fiebre, hematomas inusuales o letargo extremo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Leucemia linfocítica crónica (Protocolo m²)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 4,
          dosis_min: 2,
          dosis_max: 6,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 24 horas hasta remisión, luego reducir", intervalo_horas: 24 },
        notas_tecnicas: "A menudo se combina con prednisolona (40 mg/m² q24h por 7 días, luego 20 mg/m² q48h)."
      },
      {
        indicacion: "Leucemia linfocítica crónica (Protocolo kg)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 7 días, luego 0.1 mg/kg mantenimiento", intervalo_horas: 24 }
      },
      {
        indicacion: "Linfoma (Protocolo de pulso)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 20,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 1 a 2 semanas", intervalo_horas: 168 }
      },
      {
        indicacion: "Linfoma (Sustituto de Ciclofosfamida en CHOP)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única dentro del protocolo", intervalo_horas: 0 }
      },
      {
        indicacion: "Pénfigo / Inmunomediadas / PLE",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.15,
          dosis_min: 0.1,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas hasta mejoría, luego días alternos", intervalo_horas: 24 }
      },
      {
        indicacion: "Quimioterapia metronómica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 4,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Enfermedad inmunomediada (Gato >4 kg)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "mg (Dosis total)"
        },
        frecuencia: { texto_ui: "Cada 48 horas por 2-4 semanas, luego tapering", intervalo_horas: 48 }
      },
      {
        indicacion: "Enfermedad inmunomediada (Gato <4 kg)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "mg (Dosis total)"
        },
        frecuencia: { texto_ui: "Cada 72 horas", intervalo_horas: 72 }
      },
      {
        indicacion: "Linfoma de bajo grado / LLC",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 20,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 14 días", intervalo_horas: 336 },
        notas_tecnicas: "Generalmente combinado con prednisolona."
      },
      {
        indicacion: "Pénfigo foliáceo / Granuloma eosinofílico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.15,
          dosis_min: 0.1,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas hasta mejoría, luego tapering", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Linfosarcoma (Cacatúas / Gorrión de Java)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1.0,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dos veces por semana", intervalo_horas: 84 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de la médula ósea preexistente.",
      "Infecciones activas graves.",
      "Hipersensibilidad al clorambucilo."
    ],
    efectos_adversos: [
      "Anorexia, náuseas y vómitos.",
      "Leucopenia y trombocitopenia (el efecto limitante de la dosis).",
      "Anemia (rara).",
      "Neurotoxicidad (reportada en gatos).",
      "Alopecia y recrecimiento lento del pelaje.",
      "Se han reportado convulsiones en un perro."
    ],
    monitoreo_recomendado: [
      "Hemograma completo con recuento de plaquetas (cada 1-2 semanas inicialmente)",
      "Función hepática",
      "Estado clínico general"
    ],
    instrucciones_manejo: "CITOTÓXICO. Mantener refrigerado (2-8°C). No triturar ni manipular sin guantes.",
    sobredosis: {
      signos: ["Pancitopenia severa", "Vómitos", "Signos neurológicos"],
      tratamiento: "Soporte sintomático intensivo; factores estimulantes de colonias si hay neutropenia severa."
    },
    interacciones_farmacologicas: [
      { farmaco: "Estimulantes del citocromo P450", efecto: "Aumentan la formación de metabolitos citotóxicos.", severidad: "Moderada" },
      { farmaco: "Prednisolona", efecto: "Efecto sinérgico en neoplasias linfoides.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agente alquilante que forma enlaces cruzados en las hebras de ADN, inhibiendo su síntesis y función celular. No es específico de la fase del ciclo celular.",
    farmacocinetica: "Se metaboliza en el hígado. Se excreta principalmente por vía renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta",
      concentracion_texto: "2 mg",
      valor_concentracion: 2,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
