import type { Drug } from '@/lib/types';

export const tropicamideDrug: Drug = {
  id: "tropicamide",
  meta_data: {
    nombre_generico: "Tropicamida",
    nombres_comerciales: ["Mydriacyl", "Tropicamide*"],
    grupo_farmacologico: "Anticolinérgico oftálmico; Midriático",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Midriático de elección para el examen del fondo de ojo.",
      "Inicio de acción más rápido (20-30 min) y duración más corta que la atropina.",
      "Efecto midriático (dilatación) superior a su efecto ciclopléjico (parálisis de enfoque).",
      "Menos efectivo que la atropina para aliviar el dolor por espasmo del cuerpo ciliar en uveítis."
    ],
    usos_principales: "Inducción de midriasis para examen oftálmico y cirugía ocular.",
    inicio_accion: "20–30 minutos",
    duracion_efecto: "2 a 12 horas (perros); 4 a 9 horas (gatos)"
  },
  informacion_cliente: [
    "Las pupilas de su mascota se mantendrán muy grandes por varias horas.",
    "Evite la luz solar intensa durante el efecto del medicamento.",
    "Puede causar un poco de salivación momentánea en gatos.",
    "Informe si nota que el ojo se pone muy rojo tras la aplicación."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Examen oftálmico (Midriasis)",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Repetir una vez a los 20-30 min si es necesario", intervalo_horas: 0.5 }
      }
    ],
    gato: [
      {
        indicacion: "Examen oftálmico",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Glaucoma (especialmente de ángulo cerrado).",
      "Luxación del cristalino."
    ],
    efectos_adversos: [
      "Aumento de la presión intraocular.",
      "Salivación en gatos (por sabor amargo tras drenaje nasolagrimal).",
      "Fotofobia (sensibilidad a la luz)."
    ],
    monitoreo_recomendado: [
      "Presión intraocular previa aplicación",
      "Nivel de dilatación pupilar"
    ],
    instrucciones_manejo: "Observar precauciones de esterilidad.",
    sobredosis: {
      signos: ["Midriasis persistente", "Taquicardia (raro por absorción sistémica)"],
      tratamiento: "Lavar con salino; los efectos desaparecen en unas horas."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los receptores muscarínicos en el músculo esfínter del iris y en el músculo ciliar.",
    farmacocinetica: "Acción tópica local rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución oftálmica",
      concentracion_texto: "0.5%, 1.0%",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
