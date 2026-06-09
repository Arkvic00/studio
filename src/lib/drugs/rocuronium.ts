import type { Drug } from '@/lib/types';

export const rocuroniumDrug: Drug = {
  id: "rocuronium",
  meta_data: {
    nombre_generico: "Rocuronio",
    nombres_comerciales: ["Esmeron"],
    grupo_farmacologico: "Bloqueante neuromuscular no despolarizante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor competitivo de la acetilcolina en la unión neuromuscular.",
      "Inicio de acción más rápido que el vecuronio.",
      "Requiere obligatoriamente ventilación asistida (presión positiva).",
      "Reversible con Sugammadex (8 mg/kg IV en perros) o neostigmina.",
      "No posee efectos analgésicos; el animal debe estar profundamente anestesiado."
    ],
    usos_principales: "Bloqueo neuromuscular para mejorar acceso quirúrgico, facilitar ventilación o cirugía intraocular.",
    inicio_accion: "Rápido (1-2 min)",
    duracion_efecto: "Corta a intermedia (20-30 min)"
  },
  informacion_cliente: [
    "Fármaco de uso hospitalario bajo anestesia profunda.",
    "El animal requiere un respirador artificial durante el procedimiento.",
    "Se monitorizará la recuperación completa antes del despertar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Bloqueo neuromuscular",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.4,
          unidad_calculo: "mg/kg (Inducción)"
        },
        frecuencia: { texto_ui: "Mantenimiento: 0.16 mg/kg bolos o 0.2 mg/kg/h CRI", intervalo_horas: 0 },
        notas_tecnicas: "Oftalmología (centralizar globo): 0.05-0.1 mg/kg IV."
      }
    ],
    gato: [
      {
        indicacion: "Bloqueo neuromuscular",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.45,
          dosis_min: 0.3,
          dosis_max: 0.6,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "0.6 mg/kg tiene un inicio muy rápido y duración de 20 min."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Falta de equipo de ventilación asistida.",
      "Animales no anestesiados adecuadamente."
    ],
    efectos_adversos: [
      "Aumento de la frecuencia cardíaca (en dosis altas).",
      "Hipertensión leve.",
      "Apnea (efecto deseado)."
    ],
    monitoreo_recomendado: [
      "Estimulador de nervios periféricos (TOF)",
      "Capnografía y EtCO2",
      "Presión arterial"
    ],
    instrucciones_manejo: "Almacenar en refrigeración. Estable a temp. ambiente por tiempo limitado.",
    sobredosis: {
      signos: ["Parálisis prolongada"],
      tratamiento: "Sugammadex (8 mg/kg IV) o Neostigmina."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos / Lincosamidas", efecto: "Prolongan el bloqueo neuromuscular.", severidad: "Importante" },
      { farmaco: "Anestésicos volátiles", efecto: "Sinergia en el bloqueo.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista de receptores nicotínicos en la placa motora.",
    farmacocinetica: "Eliminación biliar y renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
