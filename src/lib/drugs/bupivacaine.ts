import type { Drug } from '@/lib/types';

export const bupivacaineDrug: Drug = {
  id: "bupivacaine",
  meta_data: {
    nombre_generico: "Bupivacaína",
    nombres_comerciales: ["Marcain", "Sensorcaine"],
    grupo_farmacologico: "Bloqueador de los canales de sodio; Anestésico local",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueo reversible de los canales de sodio en las fibras nerviosas.",
      "Inicio de acción más lento que la lidocaína (20-30 min para epidural).",
      "Duración de acción prolongada (6-8 horas).",
      "¡NUNCA administrar por vía intravenosa!",
      "La mezcla con lidocaína puede acelerar el inicio y prolongar la duración."
    ],
    usos_principales: "Provisión de analgesia por bloqueos perineurales, técnicas regionales y epidurales en mamíferos, aves y reptiles.",
    inicio_accion: "20–30 minutos (para epidural)",
    duracion_efecto: "6–8 horas"
  },
  informacion_cliente: [
    "Medicamento de uso estrictamente hospitalario.",
    "Proporciona alivio prolongado del dolor después de una cirugía o procedimiento.",
    "El sitio del bloqueo puede permanecer adormecido o con movilidad reducida por varias horas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Bloqueos Perineurales",
        vias: ["Infiltración local"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Volumen guía: 0.1-0.3 ml/kg según el sitio. Diluir con salino si se requiere más volumen para distribución."
      },
      {
        indicacion: "Epidural (Nivel L4)",
        vias: ["Epidural"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.6,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "No exceder 6 ml de volumen total en perros grandes para evitar distribución craneal excesiva."
      },
      {
        indicacion: "Epidural (Nivel T11–T13)",
        vias: ["Epidural"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.3,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Bloqueo Interpleural",
        vias: ["Instilación pleural"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Diluir con salino a un volumen de 5-20 ml. Útil tras toracotomías."
      }
    ],
    gato: [
      {
        indicacion: "Analgesia Regional / Perineural",
        vias: ["Infiltración local"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosificación precisa es esencial en gatos para prevenir toxicidad sistémica."
      },
      {
        indicacion: "Epidural",
        vias: ["Epidural"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    huron: [
      {
        indicacion: "Infusión local",
        vias: ["Infiltración local"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Infusión local",
        vias: ["Infiltración local"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "¡NO EXCEDER 2 mg/kg!"
      }
    ],
    cobaya: [
      {
        indicacion: "Bloqueos nerviosos específicos",
        vias: ["Infiltración local"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Infusión local / Intradérmica",
        vias: ["Infiltración local"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Infusión local",
        vias: ["Infiltración local"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_max: 1.9,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Puede mezclarse con DMSO para aplicación tópica en bumblefoot preoperatorio."
      }
    ],
    reptil: [
      {
        indicacion: "Infusión local / Neuraxial",
        vias: ["Infiltración local"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "En quelonios y dragones barbudos se puede combinar con lidocaína."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Inyección intravenosa (IV) accidental.",
      "Anestesia regional intravenosa (Bloqueo de Bier).",
      "Uso con adrenalina en extremidades (dedos, cola, orejas) por riesgo de isquemia."
    ],
    contraindicaciones_especie: {
      "Ave": "ALERTA: Preocupación por longevidad y niveles plasmáticos altos horas después del uso. La lidocaína suele ser más segura.",
      "Gato": "Extrema precaución con la dosis para evitar sobredosis sistémica."
    },
    efectos_adversos: [
      "Toxicidad cardíaca refractaria (arritmias severas) si se inyecta intravascularmente.",
      "Toxicidad del SNC (convulsiones).",
      "Bloqueo motor prolongado.",
      "Dolor en la inyección (debido al pH ácido)."
    ],
    monitoreo_recomendado: [
      "Ritmo cardíaco (ECG) continuo durante y tras la inyección",
      "Presión arterial",
      "Estado neurológico"
    ],
    instrucciones_manejo: "Diluir pequeñas dosis con salino normal para asegurar una distribución amplia y reducir el dolor local.",
    sobredosis: {
      signos: ["Convulsiones", "Bradicardia extrema", "Arritmias ventriculares fatales", "Paro cardíaco"],
      tratamiento: "Soporte vital avanzado. El uso de Intralipid (emulsión lipídica) IV es el tratamiento de elección para toxicidad por bupivacaína."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros anestésicos locales", efecto: "Efectos tóxicos sistémicos aditivos.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea de forma reversible los canales de sodio en la membrana de las fibras nerviosas, impidiendo la despolarización y la propagación del impulso nervioso.",
    farmacocinetica: "Inicio de acción en 20-30 min. Duración prolongada de 6-8 horas. Metabolismo hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "2.5 mg/ml (0.25%)", valor_concentracion: 2.5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "5.0 mg/ml (0.5%)", valor_concentracion: 5.0, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "7.5 mg/ml (0.75%)", valor_concentracion: 7.5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
