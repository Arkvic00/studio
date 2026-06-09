import type { Drug } from '@/lib/types';

export const dogAppeasingPheromoneDrug: Drug = {
  id: "dog_appeasing_pheromone",
  meta_data: {
    nombre_generico: "Feromona de apaciguamiento canino (DAP)",
    nombres_comerciales: ["Adaptil"],
    grupo_farmacologico: "Modificador de conducta; Análogo de feromona materna",
    status_regulatorio: "Venta libre"
  },
  resumen_clinico: {
    puntos_clave: [
      "Mezcla sintética basada en las secreciones de las glándulas sebáceas del surco intermamario de perras lactantes.",
      "Induce un sesgo emocional innato de seguridad; no requiere aprendizaje previo.",
      "No causa sedación ni reduce la respuesta de sobresalto, pero ayuda a la autorregulación emocional.",
      "Disponible en difusores eléctricos, collares y sprays ambientales.",
      "Puede usarse de forma segura junto con psicofármacos (ej. benzodiazepinas, fluoxetina)."
    ],
    usos_principales: "Control de signos de estrés asociados con la ansiedad por separación, sensibilidad a ruidos (fuegos artificiales), viajes, mudanzas o estancias en guarderías.",
    inicio_accion: "Progresivo (evaluar respuesta tras 1-4 semanas)",
    duracion_efecto: "Continua (difusor/collar) o puntual (spray 1-2 horas)"
  },
  informacion_cliente: [
    "El difusor debe estar conectado las 24 horas en la habitación donde el perro pase más tiempo.",
    "Un recambio de difusor dura aproximadamente 4 semanas; no lo apague y encienda.",
    "Si usa el collar, retírelo antes del baño o si el perro va a nadar, ya que el agua puede eliminar el principio activo.",
    "El spray debe aplicarse 15 minutos antes de que el perro entre en contacto con el área tratada (ej. el transportín).",
    "No es un medicamento sedante; el perro seguirá estando alerta pero se sentirá más seguro."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ansiedad / Estrés / Modificación de conducta",
        vias: ["Ambiental (Difusor / Spray)", "Tópica (Collar)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "unidad (difusor/collar) o 8-10 pulsaciones (spray)"
        },
        notas_tecnicas: "Un difusor cubre 50-70 m². El spray dura 1-2 horas y se puede renovar. En ansiedad por separación, se recomienda uso mínimo de 3 meses."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No pulverizar directamente sobre el animal ni en su cara."
    ],
    efectos_adversos: [
      "No se han reportado efectos adversos significativos.",
      "Posible irritación local rara con el collar en individuos muy sensibles."
    ],
    monitoreo_recomendado: [
      "Mejoría en las puntuaciones de escalas de ansiedad",
      "Reducción de comportamientos destructivos o vocalizaciones"
    ],
    instrucciones_manejo: "El spray contiene un transportador alcohólico; permitir 15 min para su evaporación antes de introducir al perro.",
    sobredosis: {
      signos: ["No aplica"],
      tratamiento: "No requerido."
    },
    interacciones_farmacologicas: [
      { farmaco: "Benzodiazepinas", efecto: "Sinergia positiva reportada anecdotariamente para control de pánico.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Modulación química del entorno captada por el órgano vomeronasal, induciendo un estado emocional positivo ligado a la seguridad materna.",
    farmacocinetica: "Acción por inhalación local de las moléculas liberadas."
  },
  presentaciones_comerciales: [
    { tipo: "Difusor eléctrico (Vial 48 ml)", concentracion_texto: "2% Análogo feromona", valor_concentracion: 1, unidad_concentracion: "unidad", es_divisible: false },
    { tipo: "Spray ambiental", concentracion_texto: "2% Análogo", valor_concentracion: 1, unidad_concentracion: "unidad", es_divisible: false },
    { tipo: "Collar", concentracion_texto: "5% Análogo", valor_concentracion: 1, unidad_concentracion: "unidad", es_divisible: false }
  ]
};
