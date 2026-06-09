import type { Drug } from '@/lib/types';

export const pancuroniumDrug: Drug = {
  id: "pancuronium",
  meta_data: {
    nombre_generico: "Pancuronio",
    nombres_comerciales: ["Pancuronium*"],
    grupo_farmacologico: "Bloqueante neuromuscular no despolarizante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador neuromuscular de duración media a larga (>45 min).",
      "Inhibe competitivamente la acetilcolina en la unión neuromuscular.",
      "Requiere obligatoriamente ventilación asistida.",
      "Tiene un ligero efecto estimulante cardiovascular."
    ],
    usos_principales: "Parálisis muscular durante anestesia para facilitar ventilación o cirugía intraocular.",
    inicio_accion: "Rápido (2-3 min IV)",
    duracion_efecto: "45 a 60 minutos"
  },
  informacion_cliente: [
    "Fármaco de uso hospitalario bajo anestesia profunda.",
    "El animal no puede respirar por sí solo durante el efecto.",
    "Se monitorizará la recuperación completa de la fuerza."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Bloqueo neuromuscular",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.025,
          dosis_max: 0.075,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir dosis de 0.01 mg/kg según necesidad", intervalo_horas: 0 }
      }
    ],
    gato: [
      {
        indicacion: "Bloqueo neuromuscular",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Falta de equipo de ventilación asistida.",
      "Animales no anestesiados adecuadamente."
    ],
    efectos_adversos: [
      "Apnea (efecto deseado).",
      "Taquicardia.",
      "Hipotermia prolonga su efecto."
    ],
    monitoreo_recomendado: [
      "Ventilación asistida constante",
      "Estimulador de nervios",
      "Frecuencia cardíaca"
    ],
    instrucciones_manejo: "Mantener en refrigeración.",
    sobredosis: {
      signos: ["Parálisis prolongada"],
      tratamiento: "Revertir con Neostigmina (previa Atropina)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos", efecto: "Prolongan el bloqueo.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista de receptores nicotínicos en la placa motora.",
    farmacocinetica: "Eliminación renal y biliar."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};