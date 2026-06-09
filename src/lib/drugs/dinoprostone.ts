import type { Drug } from '@/lib/types';

export const dinoprostoneDrug: Drug = {
  id: "dinoprostone",
  meta_data: {
    nombre_generico: "Dinoprostona (Prostaglandina E2)",
    nombres_comerciales: ["Prostin E2"],
    grupo_farmacologico: "Prostaglandina E2 (Relajante cervical; Estimulante uterino)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula la contracción uterina y provoca una relajación cervical marcada.",
      "En aves, se prefiere sobre la Prostaglandina F2α debido a su mejor efecto en la relajación del esfínter.",
      "Uso específico para el manejo de aves con retención de huevo (egg-bound).",
      "Inhibe la producción de progesterona por el cuerpo lúteo."
    ],
    usos_principales: "Relajación vaginal e inducción de contracciones uterinas en aves con retención de huevos.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Corta"
  },
  informacion_cliente: [
    "¡PELIGRO!: Mujeres embarazadas o con asma NO deben manipular este medicamento por riesgo de absorción cutánea.",
    "Se aplica directamente en la zona de la cloaca del ave.",
    "Informe si nota que el ave parece muy débil o presenta sangrado tras la aplicación."
  ],
  parametros_dosificacion: {
    ave: [
      {
        indicacion: "Aves con retención de huevo (Egg-bound)",
        vias: ["Tópica cloacal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "capa fina de gel sobre la mucosa cloacal"
        },
        frecuencia: {
          texto_ui: "Dosis única",
          intervalo_horas: 0
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay información específica de contraindicaciones absolutas en el uso indicado."
    ],
    efectos_adversos: [
      "Riesgo de ruptura uterina si hay una obstrucción física insalvable.",
      "Irritación local de la mucosa."
    ],
    monitoreo_recomendado: [
      "Progreso de la expulsión del huevo",
      "Estado general del ave"
    ],
    instrucciones_manejo: "Usar guantes. Evitar contacto con piel humana, especialmente en personas asmáticas o embarazadas.",
    sobredosis: {
      signos: ["Contracciones uterinas violentas", "Ruptura"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Prostaglandina natural que actúa induciendo la maduración cervical y estimulando la musculatura lisa del útero mediante la activación de receptores EP.",
    farmacocinetica: "Acción tópica local sobre la mucosa cloacal y vaginal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gel tópico",
      concentracion_texto: "0.4 mg/ml",
      valor_concentracion: 0.4,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
