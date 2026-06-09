import type { Drug } from '@/lib/types';

export const pancuroniumDrug: Drug = {
  id: "pancuronium",
  meta_data: {
    nombre_generico: "Pancuronio (Bromuro de pancuronio)",
    nombres_comerciales: ["Pancuronium*"],
    group_farmacologico: "Bloqueador neuromuscular no despolarizante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador neuromuscular de duración media a larga (>45 min).",
      "Inhibe competitivamente la acetilcolina en la unión neuromuscular.",
      "Requiere obligatoriamente ventilación asistida (presión positiva).",
      "Posee un ligero efecto estimulante cardiovascular (vago-lítico).",
      "La reversión se realiza preferiblemente con neostigmina."
    ],
    usos_principales: "Provisión de parálisis muscular durante la anestesia para facilitar ventilación mecánica o cirugía intraocular.",
    inicio_accion: "Rápido (2-3 min IV)",
    duracion_efecto: "45 a 60 minutos"
  },
  informacion_cliente: [
    "Fármaco de uso estrictamente hospitalario bajo anestesia profunda.",
    "El animal no puede respirar por sí solo mientras dure el efecto; requiere un respirador.",
    "Se monitorizará la recuperación completa de la fuerza antes de despertar al paciente."
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
        notas_tecnicas: "Iniciar con dosis alta y repetir dosis de mantenimiento de 0.01 mg/kg. Puede ser acumulativo."
      }
    ],
    gato: [
      {
        indicacion: "Bloqueo neuromuscular",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.025,
          dosis_max: 0.075,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales no anestesiados adecuadamente (causa parálisis consciente).",
      "Falta de equipo de ventilación asistida."
    ],
    efectos_adversos: [
      "Apnea (efecto deseado pero mortal sin soporte).",
      "Aumento de la frecuencia cardíaca.",
      "Hipotermia, acidosis e hipopotasemia prolongan su efecto."
    ],
    monitoreo_recomendado: [
      "Ventilación asistida constante",
      "Estimulador de nervios periféricos",
      "Frecuencia cardíaca"
    ],
    instrucciones_manejo: "Mantener en refrigeración. No mezclar con otros fármacos.",
    sobredosis: {
      signos: ["Parálisis prolongada", "Taquicardia"],
      tratamiento: "Mantener ventilación asistida. Revertir con Neostigmina (previa Atropina)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos / Lincosamidas", efecto: "Prolongan significativamente el bloqueo neuromuscular.", severidad: "Importante" },
      { farmaco: "Anestésicos volátiles", efecto: "Sinergia en el bloqueo muscular.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores nicotínicos en la placa motora terminal.",
    farmacocinetica: "Eliminación renal y biliar."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
