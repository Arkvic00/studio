import type { Drug } from '@/lib/types';

export const ropiniroleDrug: Drug = {
  id: "ropinirole",
  meta_data: {
    nombre_generico: "Ropinirol",
    nombres_comerciales: ["Clevor"],
    grupo_farmacologico: "Agonista dopaminérgico; Emetógeno oftálmico",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Induce el vómito activando receptores D2 en la zona gatillo.",
      "Administración exclusiva mediante gotas en el ojo.",
      "Efecto muy rápido (mediana de 10 min).",
      "Si no vomita en 15 min, se puede repetir una dosis igual.",
      "No administrar más de 2 dosis totales."
    ],
    usos_principales: "Inducción del vómito en perros tras ingestión de tóxicos o cuerpos extraños no punzantes.",
    inicio_accion: "3–37 minutos (Mediana 10 min)",
    duracion_efecto: "Vómito dura aprox. 16 min"
  },
  informacion_cliente: [
    "Medicamento para inducir el vómito de forma rápida y segura.",
    "Se aplica como gotas en los ojos del perro.",
    "No debe ser manipulado por mujeres embarazadas o en lactancia.",
    "Puede causar un enrojecimiento leve del ojo que desaparece solo.",
    "El perro puede tener el corazón rápido por un par de horas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Inducción del vómito",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "gotas (según peso)"
        },
        notas_tecnicas: "1.8-5kg: 1 gota; 5.1-10kg: 2 gotas; 10.1-20kg: 3 gotas; 20.1-35kg: 4 gotas; 35.1-60kg: 6 gotas; >60kg: 8 gotas. Repetir una vez si no hay respuesta a los 15 min."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Depresión del SNC, convulsiones o reflejo de tos reducido.",
      "Ingestión de objetos punzantes, cáusticos o volátiles.",
      "Hipoxia o disnea.",
      "Gatos (No usar)."
    ],
    efectos_adversos: [
      "Irritación ocular leve.",
      "Taquicardia transitoria (hasta 2h).",
      "Vómito prolongado (>60 min).",
      "Letargo."
    ],
    monitoreo_recomendado: [
      "Presencia de contenido gástrico en vómito",
      "Frecuencia cardíaca",
      "Estado de la córnea"
    ],
    instrucciones_manejo: "No tocar las gotas con la piel. Mujeres gestantes evitar contacto (reduce prolactina).",
    sobredosis: {
      signos: ["Vómito incoercible"],
      tratamiento: "Metoclopramida IV (antagonista)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antidopaminérgicos (Metoclopramida / Fenotiazinas)", efecto: "Reducen la eficacia del ropinirol.", severidad: "Importante" },
      { farmaco: "Maropitant", efecto: "Puede reducir el efecto emético.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de receptores tipo D2 en el área postrema del cerebro.",
    farmacocinetica: "Absorción sistémica rápida a través de la conjuntiva."
  },
  presentaciones_comerciales: [
    { tipo: "Gotas oftálmicas", concentracion_texto: "30 mg/ml (Clevor)", valor_concentracion: 30, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
