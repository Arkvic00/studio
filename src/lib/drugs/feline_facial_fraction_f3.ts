import type { Drug } from '@/lib/types';

export const felineFacialFractionF3Drug: Drug = {
  id: "feline_facial_fraction_f3",
  meta_data: {
    nombre_generico: "Feromona Facial Felina Fracción F3",
    nombres_comerciales: ["Feliway", "Zenifel"],
    grupo_farmacologico: "Análogo de feromona; Modificador de conducta",
    status_regulatorio: "Venta libre"
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo sintético de la fracción F3 de las feromonas faciales felinas.",
      "Provoca una respuesta emocional de seguridad y calma.",
      "No es un sedante ni un psicofármaco sistémico.",
      "Actúa a través del órgano vomeronasal (Jacobson)."
    ],
    usos_principales: "Control del marcado urinario, rascado inapropiado, cambios ambientales, transporte y visitas a la clínica veterinaria.",
    inicio_accion: "Variable (evaluar respuesta tras 1 mes de uso continuo)",
    duracion_efecto: "Continua mientras el difusor esté conectado o puntual con spray"
  },
  informacion_cliente: [
    "El difusor debe permanecer conectado las 24 horas del día (no apagar y encender).",
    "Un recambio de difusor dura aproximadamente 4 semanas y cubre unos 50-70 m².",
    "El spray debe aplicarse 30 minutos antes de que el gato entre en contacto con la zona (ej. transportín).",
    "No pulverizar nunca directamente sobre el animal.",
    "Si se usa para limpieza de orina, enjuagar bien el área tras usar limpiadores enzimáticos antes de aplicar el spray."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Estrés / Marcado urinario / Cambios ambientales",
        vias: ["Ambiental (Difusor / Spray)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Difusor (50-70 m²) o 1 pulsación (spray)"
        },
        notas_tecnicas: "Para marcado urinario existente: una pulsación diaria a 10 cm del sitio a una altura de 20 cm del suelo. En hogares con varios gatos: spray 2-3 veces al día en sitios marcados."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No pulverizar sobre el animal ni en su cara."
    ],
    efectos_adversos: [
      "No se han reportado efectos adversos significativos.",
      "Posible sensibilidad respiratoria en humanos alérgicos a los componentes del aerosol."
    ],
    monitoreo_recomendado: [
      "Reducción de comportamientos de marcado",
      "Estado de relajación del gato"
    ],
    instrucciones_manejo: "No conectar el difusor debajo de estantes o detrás de puertas. El spray contiene alcohol; esperar evaporación.",
    sobredosis: {
      signos: ["No aplica"],
      treatment: "No requerido."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estimulación de receptores en el órgano vomeronasal que inducen actividad límbica asociada a la familiaridad y seguridad con los recursos físicos.",
    farmacocinetica: "Acción por inhalación local de moléculas aerosolizadas."
  },
  presentaciones_comerciales: [
    {
      tipo: "Difusor eléctrico (Recambio 48 ml)",
      concentracion_texto: "2% Análogo F3",
      valor_concentracion: 1,
      unidad_concentracion: "unidad",
      es_divisible: false
    },
    {
      tipo: "Spray ambiental",
      concentracion_texto: "2% Análogo F3",
      valor_concentracion: 1,
      unidad_concentracion: "unidad",
      es_divisible: false
    }
  ]
};
