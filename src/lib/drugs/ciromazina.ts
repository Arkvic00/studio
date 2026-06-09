import type { Drug } from '@/lib/types';

export const ciromazinaDrug: Drug = {
  id: "ciromazina",
  meta_data: {
    nombre_generico: "Ciromazina",
    nombres_comerciales: ["Rearguard"],
    grupo_farmacologico: "Inhibidor del crecimiento larvario; Regulador del crecimiento de insectos",
    status_regulatorio: "NFA-VPS"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe el desarrollo larvario al interferir con la deposición de quitina en la cutícula.",
      "Autorizado específicamente en conejos domésticos para prevenir la miasis (*blowfly strike*).",
      "Eficaz hasta por 10 semanas tras una sola aplicación.",
      "No mata moscas adultas ni larvas grandes ya presentes; es estrictamente preventivo.",
      "Debe aplicarse a principios de verano antes de ver moscas."
    ],
    usos_principales: "Prevención de la miasis (*blowfly strike*) en conejos domésticos.",
    inicio_accion: "Inmediato (preventivo)",
    duracion_efecto: "Hasta 10 semanas"
  },
  informacion_cliente: [
    "Aplique el producto a principios de verano antes de que aparezcan las moscas.",
    "El líquido debe aplicarse sobre el pelaje desde la mitad de la espalda hasta la cola y entre las patas traseras.",
    "Bañar al conejo después de la aplicación reduce significativamente su eficacia.",
    "No mata los gusanos que ya están en el animal; revise a su mascota diariamente.",
    "Informe si nota que el conejo deja de comer en las primeras 48h tras la aplicación."
  ],
  parametros_dosificacion: {
    conejo: [
      {
        indicacion: "Prevención de Miasis (Blowfly Strike)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación completa (botella 6%)"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 10 semanas",
          intervalo_horas: 1680
        },
        notas_tecnicas: "Aplicar sobre el pelaje limpio. No aplicar sobre piel dañada o heridas abiertas."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Conejos menores de 10 semanas de edad.",
      "Hembras gestantes o destinadas a la cría.",
      "Aplicación sobre piel dañada o con heridas."
    ],
    efectos_adversos: [
      "Falta de apetito transitoria (24-48h post-tratamiento)."
    ],
    monitoreo_recomendado: [
      "Inspección visual diaria de la zona anogenital",
      "Estado de apetito tras la aplicación"
    ],
    instrucciones_manejo: "Usar el aplicador de esponja integrado. Lavarse las manos tras su uso.",
    sobredosis: {
      signos: ["Anorexia prolongada"],
      tratamiento: "Lavar el pelaje con agua tibia para eliminar residuos; soporte nutricional."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interfiere con el metabolismo de la muda de los insectos al inhibir la síntesis de quitina.",
    farmacocinetica: "Permanece en el pelaje proporcionando protección prolongada."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución tópica",
      concentracion_texto: "6% (Rearguard)",
      valor_concentracion: 60,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
