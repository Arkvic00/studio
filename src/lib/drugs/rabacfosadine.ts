import type { Drug } from '@/lib/types';

export const rabacfosadineDrug: Drug = {
  id: "rabacfosadine",
  meta_data: {
    nombre_generico: "Rabacfosadina",
    nombres_comerciales: ["Tanovea-CA1"],
    grupo_farmacologico: "Antineoplásico; Citotóxico; Análogo de nucleótido",
    status_regulatorio: "POM-V. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Pro-fármaco del análogo de nucleótido PMEG.",
      "Provoca citotoxicidad en células en división al inhibir las ADN polimerasas.",
      "Uso principal en linfoma canino (células B y T) y mieloma múltiple.",
      "Riesgo de fibrosis pulmonar severa e irreversible.",
      "Requiere manejo especializado de quimioterapia."
    ],
    usos_principales: "Tratamiento de linfoma canino y mieloma múltiple.",
    inicio_accion: "Interferencia inmediata con la división celular",
    duracion_efecto: "Requiere administración cada 3 semanas"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejo exclusivo por especialistas.",
    "Informe inmediatamente si nota tos persistente o dificultad para respirar.",
    "Se requieren análisis de sangre frecuentes para vigilar los glóbulos blancos.",
    "Evitar el contacto con las excretas del animal por 48 horas post-tratamiento.",
    "Puede causar llagas en la boca o pérdida de peso."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Linfoma / Mieloma",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.82,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 21 días",
          intervalo_horas: 504
        },
        notas_tecnicas: "Administrar en una infusión de 30 minutos. Puede alternarse con doxorrubicina."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de la médula ósea preexistente.",
      "Disfunción hepática severa.",
      "Enfermedad pulmonar preexistente o predisposición a fibrosis.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Mielosupresión.",
      "Fibrosis pulmonar (potencialmente fatal).",
      "Gastroenteritis hemorrágica.",
      "Proteinuria y glucosuria.",
      "Elevación de enzimas hepáticas.",
      "Dermatopatías."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) antes de cada dosis",
      "Función respiratoria (Radiografía si hay tos)",
      "Urianálisis periódico"
    ],
    instrucciones_manejo: "CITOTÓXICO. Reconstituir con NaCl 0.9% y usar inmediatamente. Seguir protocolos de seguridad oncológica.",
    sobredosis: {
      signos: ["Supresión medular profunda", "Vómitos severos", "Fallo renal"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se incorpora a las cadenas de ADN en formación, provocando la terminación prematura de la cadena y la apoptosis celular.",
    farmacocinetica: "Eliminación rápida tras IV pero con efectos celulares persistentes."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial liofilizado",
      concentracion_texto: "16.4 mg",
      valor_concentracion: 8.2,
      unidad_concentracion: "mg/ml reconstituido",
      es_divisible: false
    }
  ]
};
