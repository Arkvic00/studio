import type { Drug } from '@/lib/types';

export const ispaghulaDrug: Drug = {
  id: "ispaghula",
  meta_data: {
    nombre_generico: "Ispaghula (Psyllium)",
    nombres_comerciales: ["Fybogel", "Ispagel"],
    grupo_farmacologico: "Laxante formador de masa",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente formador de masa que aumenta el volumen fecal y estimula el peristaltismo.",
      "Moderadamente fermentable en el colon; los ácidos grasos volátiles resultantes ejercen un efecto laxante osmótico.",
      "Útil en el manejo de sacos anales impactados y para controlar la consistencia de las heces post-cirugía.",
      "Componente del manejo del síndrome de colon irritable (diarrea del intestino grueso) en perros."
    ],
    usos_principales: "Tratamiento del estreñimiento, diarrea crónica y manejo de sacos anales impactados."
  },
  informacion_cliente: [
    "Los preparados comerciales suelen tener sabores frutales y pueden ser efervescentes al mezclarse con agua.",
    "Se puede añadir directamente a la comida del animal.",
    "Asegúrese de que el animal tenga siempre agua fresca disponible, ya que la fibra requiere hidratación.",
    "Informe si nota hinchazón abdominal o si la diarrea empeora significativamente."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estreñimiento / Diarrea crónica / Sacos anales",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "cucharaditas con las comidas"
        },
        notas_tecnicas: "Dosis anecdótica; ajustar según respuesta clínica y consistencia de heces."
      }
    ],
    gato: [
      {
        indicacion: "Estreñimiento / Diarrea crónica / Sacos anales",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "cucharaditas con las comidas"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción intestinal mecánica.",
      "Perforación gastrointestinal."
    ],
    efectos_adversos: [
      "Meteorismo y flatulencia.",
      "Hinchazón abdominal.",
      "Estreñimiento (si no se aporta suficiente agua).",
      "Diarrea (en caso de exceso)."
    ],
    monitoreo_recomendado: [
      "Consistencia de las heces",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Asegurar un aporte de agua adecuado.",
    sobredosis: {
      signos: ["Diarrea", "Hinchazón", "Dolor abdominal"],
      tratamiento: "Suspensión del tratamiento y soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Fibra soluble que absorbe agua en el intestino, aumentando el volumen y la suavidad de las heces, lo que facilita su paso.",
    farmacocinetica: "No se absorbe sistémicamente."
  },
  presentaciones_comerciales: [
    {
      tipo: "Granulados / Polvo oral",
      concentracion_texto: "Variable según marca",
      valor_concentracion: 1,
      unidad_concentracion: "sobre",
      es_divisible: false
    }
  ]
};