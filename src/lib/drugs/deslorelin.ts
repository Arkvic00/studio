import type { Drug } from '@/lib/types';

export const deslorelinDrug: Drug = {
  id: "deslorelin",
  meta_data: {
    nombre_generico: "Deslorelina",
    nombres_comerciales: ["Suprelorin"],
    grupo_farmacologico: "Superagonista de la GnRH; Agente de castración química",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Superagonista de la GnRH que provoca una desensibilización de los receptores tras un estímulo inicial de 2 semanas.",
      "Provoca el cese de la producción de testosterona y esperma (infertilidad temporal).",
      "Tratamiento de elección para el hiperadrenocorticismo en hurones (alternativa a la cirugía).",
      "En aves, se usa para controlar la puesta crónica de huevos.",
      "En reptiles, suprime la actividad reproductiva (demostrado en iguanas)."
    ],
    usos_principales: "Castración química temporal en machos (perros, gatos, hurones), manejo de la enfermedad adrenal en hurones y control de trastornos reproductivos en exóticos.",
    inicio_accion: "Infertilidad alcanzada a las 6 semanas de la implantación",
    duracion_efecto: "De 6 meses a 4 años (dependiendo de la dosis y especie)"
  },
  informacion_cliente: [
    "Las personas embarazadas NO deben manipular ni administrar los implantes.",
    "Tras la primera implantación, los machos pueden seguir siendo fértiles por 6 semanas adicionales.",
    "El implante es biocompatible y no requiere ser retirado, a menos que se desee terminar el efecto antes de tiempo.",
    "Es normal notar una disminución significativa del tamaño de los testículos durante el tratamiento.",
    "Puede ocurrir una inflamación moderada en el sitio del implante durante los primeros 14 días."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Castración química temporal",
        vias: ["SC (Implante)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "implante (4.7 mg o 9.4 mg)"
        },
        frecuencia: {
          texto_ui: "Cada 6 o 12 meses (según tamaño del implante)",
          intervalo_horas: 4320
        },
        notas_tecnicas: "Perros <10 kg pueden tardar hasta 18 meses en recuperar niveles de testosterona tras el fin del efecto."
      }
    ],
    gato: [
      {
        indicacion: "Castración química (Macho)",
        vias: ["SC (Implante)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "implante de 4.7 mg"
        },
        frecuencia: {
          texto_ui: "Eficacia dura de 2 a 4 años en gatos",
          intervalo_horas: 17520
        }
      }
    ],
    huron: [
      {
        indicacion: "Infertilidad temporal / Control de olor",
        vias: ["SC (Implante)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "implante de 9.4 mg"
        },
        frecuencia: {
          texto_ui: "Dura aproximadamente 3 a 4 años",
          intervalo_horas: 26280
        },
        notas_tecnicas: "La castración quirúrgica predispone al hiperadrenocorticismo en hurones; el implante es la alternativa preventiva preferida."
      },
      {
        indicacion: "Manejo del Hiperadrenocorticismo",
        vias: ["SC (Implante)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "implante de 4.7 mg"
        },
        notas_tecnicas: "Reduce los signos clínicos y detiene la progresión de la enfermedad adrenal en hurones ya castrados."
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Contracepción / Control de conducta",
        vias: ["SC (Implante)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "implante"
        },
        frecuencia: {
          texto_ui: "Eficaz por >1 año",
          intervalo_horas: 8760
        }
      }
    ],
    ave: [
      {
        indicacion: "Puesta crónica de huevos / Agresividad hormonal",
        vias: ["SC (Implante)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "implante de 4.7 mg"
        },
        notas_tecnicas: "Eficacia variable. En ninfas y loros monje, previene la puesta por aprox. 6 meses."
      }
    ],
    reptil: [
      {
        indicacion: "Supresión reproductiva (Iguanas)",
        vias: ["SC (Implante)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "implante"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Uso en hembras destinadas a la cría inmediata (induce estro en los primeros días).",
      "No inyectar en grasa (pobre vascularización compromete liberación)."
    ],
    efectos_adversos: [
      "Inflamación local transitoria.",
      "Atrofia testicular (efecto buscado).",
      "Ascenso testicular al anillo inguinal (muy raro).",
      "Metritis en cobayas por cierre persistente de membrana vaginal."
    ],
    monitoreo_recomendado: [
      "Tamaño testicular",
      "Conducta reproductiva",
      "Ubicación del implante mediante ecografía si es necesario retirarlo"
    ],
    instrucciones_manejo: "Desinfectar el sitio de implantación. Implantar entre el cuello y la zona lumbar. No requiere remoción (biocompatible).",
    sobredosis: {
      signos: ["No reportados; efecto clínico prolongado"],
      tratamiento: "Extracción quirúrgica del implante si es necesario."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Superagonista de la GnRH que inicialmente estimula y luego desensibiliza los receptores hipofisarios, bloqueando la liberación de LH y FSH.",
    farmacocinetica: "Liberación sostenida y continua desde el implante."
  },
  presentaciones_comerciales: [
    {
      tipo: "Implante subcutáneo",
      concentracion_texto: "4.7 mg (6 meses)",
      valor_concentracion: 4.7,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Implante subcutáneo",
      concentracion_texto: "9.4 mg (12 meses / 4 años en hurones)",
      valor_concentracion: 9.4,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
