import type { Drug } from '@/lib/types';

export const bronopolDrug: Drug = {
  id: "bronopol",
  meta_data: {
    nombre_generico: "Bronopol",
    nombres_comerciales: ["Pyceze"],
    grupo_farmacologico: "Antifúngico externo (Peces)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Actúa inhibiendo la actividad de la deshidrogenasa, causando daño irreversible a la membrana celular.",
      "Utilizado específicamente para el tratamiento y control de infecciones fúngicas externas en peces.",
      "Altamente eficaz en el tratamiento de huevos de peces."
    ],
    usos_principales: "Tratamiento de micosis externas (ej. Saprolegnia) en peces adultos y control de hongos en huevos de peces.",
    inicio_accion: "Inmediato (contacto directo)",
    duracion_efecto: "Limitada al tiempo de inmersión"
  },
  informacion_cliente: [
    "Sustancia irritante para ojos, pulmones y piel; manejar con precaución y equipo de protección.",
    "Asegurar que el tiempo de inmersión sea exacto para evitar toxicidad.",
    "Desechar el agua tratada de acuerdo con las normativas locales de seguridad ambiental."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Micosis externas (Peces adultos)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 20,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "30 minutos",
        frecuencia: {
          texto_ui: "Cada 24 horas (Total 14 tratamientos)",
          intervalo_horas: 24
        },
        notas_tecnicas: "Seguir estrictamente el protocolo de 14 días para asegurar la erradicación del hongo."
      },
      {
        indicacion: "Control fúngico en huevos",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 50,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "30 minutos",
        notas_tecnicas: "Dosis única preventiva o según protocolo de incubación."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay información específica sobre contraindicaciones sistémicas (uso exclusivo por inmersión)."
    ],
    efectos_adversos: [
      "Irritación branquial si se exceden los tiempos de exposición.",
      "Estrés agudo en algunas especies de peces sensibles."
    ],
    monitoreo_recomendado: [
      "Comportamiento de los peces durante la inmersión",
      "Estado de las branquias",
      "Calidad del agua post-tratamiento"
    ],
    instrucciones_manejo: "IRRITANTE. Usar guantes, gafas de protección y mascarilla durante la manipulación del producto concentrado.",
    sobredosis: {
      signos: ["Mortalidad aguda", "Nado errático violento", "Daño tisular visible"],
      tratamiento: "Dilución inmediata con abundante agua limpia oxigenada."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la actividad enzimática deshidrogenasa, lo que provoca daños estructurales en la membrana de las células fúngicas.",
    farmacocinetica: "Acción tópica local sobre la superficie del pez o del huevo."
  },
  presentaciones_comerciales: [
    {
      tipo: "Líquido para inmersión",
      concentracion_texto: "500 mg/l",
      valor_concentracion: 500,
      unidad_concentracion: "mg/l",
      es_divisible: false
    }
  ]
};
