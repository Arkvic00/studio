import type { Drug } from '@/lib/types';

export const mepivacaineDrug: Drug = {
  id: "mepivacaine",
  meta_data: {
    nombre_generico: "Mepivacaína (Clorhidrato de mepivacaína)",
    nombres_comerciales: ["Intra-epicaine"],
    grupo_farmacologico: "Anestésico local (Amida)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anestésico local de potencia equivalente a la lidocaína.",
      "Inicio de acción rápido y duración intermedia (100–120 min).",
      "Posee menor actividad vasodilatadora intrínseca que la lidocaína.",
      "Considerada menos irritante para los tejidos.",
      "No requiere la adición de adrenalina para prolongar su efecto.",
      "¡NUNCA administrar por vía intravenosa!"
    ],
    usos_principales: "Bloqueo de nervios sensoriales mediante infiltración local o perineural. Analgesia intra-articular.",
    inicio_accion: "Rápido (5-10 min)",
    duracion_efecto: "100 a 120 minutos"
  },
  informacion_cliente: [
    "Medicamento de uso estrictamente hospitalario.",
    "Se utiliza para bloquear el dolor en áreas específicas durante o después de una cirugía.",
    "El animal puede perder la sensibilidad y movilidad en la zona tratada por un par de horas.",
    "Informe si nota que el animal está inusualmente inquieto tras la inyección."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infiltración local / Perineural",
        vias: ["Infiltración"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Volumen mínimo para efecto"
        },
        notas_tecnicas: "Usar el volumen más bajo posible. No se han establecido dosis tóxicas exactas, pero se recomienda precaución."
      },
      {
        indicacion: "Analgesia Intra-articular (Codo)",
        vias: ["Intra-articular"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg (Solución al 2%)"
        },
        notas_tecnicas: "Útil para reducir la respuesta hemodinámica durante la artroscopia."
      }
    ],
    gato: [
      {
        indicacion: "Bloqueo sensorial",
        vias: ["Infiltración"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Volumen mínimo para efecto"
        }
      }
    ],
    huron: [
      {
        indicacion: "Anestesia local",
        vias: ["Infiltración"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "vol. mínimo" }
      }
    ],
    conejo: [
      {
        indicacion: "Anestesia local",
        vias: ["Infiltración"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "vol. mínimo" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Inyección intravenosa (IV) accidental.",
      "Hipersensibilidad a los anestésicos tipo amida.",
      "Uso en áreas infectadas o inflamadas (reduce eficacia por pH)."
    ],
    efectos_adversos: [
      "Toxicidad del SNC (convulsiones) si se absorbe masivamente.",
      "Cardiotoxicidad (bradicardia, paro cardíaco) por inyección IV inadvertida.",
      "Reacción local en el sitio de inyección."
    ],
    monitoreo_recomendado: [
      "Asegurar aspiración negativa antes de inyectar",
      "Estado neurológico",
      "Ritmo cardíaco"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene y esterilidad.",
    sobredosis: {
      signos: ["Convulsiones", "Bradicardia extrema", "Paro respiratorio"],
      tratamiento: "Soporte vital avanzado; diazepam para convulsiones; fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros anestésicos locales", efecto: "Toxicidad sistémica aditiva.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los canales de sodio en la membrana de las fibras nerviosas, impidiendo la despolarización y la propagación del impulso sensorial.",
    farmacocinetica: "Acción local persistente."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "20 mg/ml (2%)",
      valor_concentracion: 20,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
