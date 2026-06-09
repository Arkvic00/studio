import type { Drug } from '@/lib/types';

export const cyclophosphamideDrug: Drug = {
  id: "cyclophosphamide",
  meta_data: {
    nombre_generico: "Ciclofosfamida",
    nombres_comerciales: ["Cyclophosphamide", "Endoxana"],
    grupo_farmacologico: "Agente alquilante; Antineoplásico",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Sus metabolitos forman enlaces cruzados en el ADN, inhibiendo su síntesis y función.",
      "Utilizado en el tratamiento de enfermedades linfoproliferativas y mieloproliferativas.",
      "Tiene un papel importante en protocolos de quimioterapia metronómica.",
      "Ya no se recomienda su uso como fármaco inmunosupresor de primera línea.",
      "El metabolito acroleína puede causar cistitis hemorrágica estéril severa.",
      "Requiere monitoreo hematológico estricto del recuento de glóbulos blancos (WBC)."
    ],
    usos_principales: "Tratamiento de linfomas, leucemias, sarcomas y carcinomas. Parte de protocolos COP y CHOP.",
    inicio_accion: "Interferencia inmediata con la replicación celular",
    duracion_efecto: "Variable (ciclos semanales o cada 3 semanas)"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejar siempre con guantes impermeables.",
    "Las tabletas deben tragarse enteras; no las triture ni las divida.",
    "Es fundamental que su mascota beba mucha agua para prevenir irritación en la vejiga (sangre en la orina).",
    "Se recomiendan análisis de sangre semanales para vigilar las defensas.",
    "Informe inmediatamente si nota sangre en la orina, fiebre o letargo extremo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Neoplasia linfoide (Mantenimiento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 50,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 48 horas (o 3-4 días consecutivos por semana)",
          intervalo_horas: 48
        },
        notas_tecnicas: "Monitorear cistitis hemorrágica. Fomentar diuresis."
      },
      {
        indicacion: "Neoplasia linfoide (Pulso)",
        vias: ["PO", "IV"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 225,
          dosis_min: 200,
          dosis_max: 250,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 3 semanas",
          intervalo_horas: 504
        }
      },
      {
        indicacion: "Quimioterapia metronómica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Mieloma / Macroglobulinemia (Refractario)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Neoplasia linfoide (COP / CHOP)",
        vias: ["PO", "IV"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 250,
          dosis_min: 200,
          dosis_max: 300,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 3 semanas",
          intervalo_horas: 504
        }
      }
    ],
    ave: [
      {
        indicacion: "Linfosarcoma (Cacatúas)",
        vias: ["Intraósea"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 200,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 7 días",
          intervalo_horas: 168
        }
      }
    ],
    reptil: [
      {
        indicacion: "Iguana verde: Linfoma",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 2 semanas",
          intervalo_horas: 336
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay información específica de contraindicaciones absolutas, pero evitar en cistitis activa.",
      "Uso con precaución extrema en fallo renal severo."
    ],
    efectos_adversos: [
      "Mielosupresión (nadir 5-14 días).",
      "Cistitis hemorrágica estéril (puede ser persistente).",
      "Vómitos y diarrea.",
      "Hepatotoxicidad y nefrotoxicidad.",
      "Fibrosis pulmonar.",
      "Reducción de la tasa de crecimiento del pelo (alopecia)."
    ],
    monitoreo_recomendado: [
      "Hemograma completo semanal (neutrófilos)",
      "Urianálisis para detectar sangre",
      "Función renal y hepática"
    ],
    instrucciones_manejo: "FÁRMACO CITOTÓXICO. Aumentar consumo de agua y considerar furosemida para asegurar diuresis adecuada.",
    sobredosis: {
      signos: ["Supresión medular profunda", "Cistitis hemorrágica grave"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Doxorrubicina", efecto: "Aumenta el riesgo de cardiotoxicidad.", severidad: "Grave" },
      { farmaco: "Barbitúricos", efecto: "Aumentan la toxicidad por mayor conversión a metabolitos.", severidad: "Importante" },
      { farmaco: "Cloranfenicol / Fenotiazinas", efecto: "Reducen la eficacia de la ciclofosfamida.", severidad: "Importante" },
      { farmaco: "Diuréticos tiazídicos", efecto: "Aumentan el riesgo de mielosupresión.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Metabolitos forman enlaces cruzados en el ADN resultando en la inhibición de su síntesis y función.",
    farmacocinetica: "Activación hepática necesaria. Excreción renal del metabolito tóxico acroleína."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "500 mg, 1 g",
      valor_concentracion: 500,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Tableta oral",
      concentracion_texto: "50 mg",
      valor_concentracion: 50,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
