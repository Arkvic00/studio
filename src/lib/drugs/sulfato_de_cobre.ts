import type { Drug } from '@/lib/types';

export const sulfatoDeCobreDrug: Drug = {
  id: "sulfato_de_cobre",
  meta_data: {
    nombre_generico: "Sulfato de Cobre (Sulfato Cúprico)",
    nombres_comerciales: ["Proprietary formulations available"],
    grupo_farmacologico: "Ectoparasiticida / Antifúngico / Antibacteriano (Peces)",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Tratamiento de ectoparásitos protozoarios y monogeneos, algunos hongos y bacterias en peces.",
      "Bajo índice terapéutico; altamente tóxico para el tejido branquial.",
      "La solubilidad se reduce a pH alto; se inactiva por materia orgánica y materiales calcáreos.",
      "¡EXTREMADAMENTE TÓXICO! para invertebrados, elasmobranquios (tiburones/rayas), algas y muchas plantas.",
      "Requiere monitoreo constante de niveles de iones de cobre libres (0.15–0.20 mg/l)."
    ],
    usos_principales: "Tratamiento de enfermedades parasitarias externas en acuarios marinos y de agua dulce.",
    inicio_accion: "Inmediato (inmersión)",
    duracion_efecto: "Requiere mantenimiento de niveles terapéuticos por al menos 10 días"
  },
  informacion_cliente: [
    "No utilizar en acuarios que contengan invertebrados (caracoles, corales, camarones) o elasmobranquios.",
    "Se requiere un kit de prueba comercial para medir el cobre dos veces al día durante el tratamiento.",
    "El cobre puede eliminarse del agua mediante cambios parciales y el uso de carbón activado.",
    "Es preferible utilizar formulaciones comerciales preparadas para asegurar la pureza y dosificación exacta."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Ectoparásitos / Hongos / Bacterias (Inmersión corta)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 100,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "1 a 5 minutos",
        notas_tecnicas: "Vigilar estrechamente signos de distress respiratorio. Otros remedios suelen ser más seguros en agua dulce."
      },
      {
        indicacion: "Inmersión prolongada (Control de parásitos)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.15,
          dosis_min: 0.15,
          dosis_max: 0.20,
          unidad_calculo: "mg/l (iones libres)"
        },
        duracion_tratamiento: "Mínimo 10 días",
        notas_tecnicas: "Mantener niveles estrictos entre 0.15 y 0.20 mg/l. Ajustar dosis según medición del kit de prueba."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Presencia de invertebrados.",
      "Acuarios con elasmobranquios (tiburones, rayas).",
      "Aguas con pH muy bajo (aumenta la toxicidad drásticamente)."
    ],
    efectos_adversos: [
      "Toxicidad branquial (daño severo al epitelio respiratorio).",
      "Mortalidad en plantas y algas.",
      "Inmunosupresión en peces tras exposición prolongada."
    ],
    monitoreo_recomendado: [
        "Niveles de iones de cobre libres (esencial)",
        "pH del agua y niveles de amoníaco",
        "Esfuerzo respiratorio de los peces"
    ],
    instrucciones_manejo: "Preparar solución stock disolviendo 1g de pentahidrato en 250ml de agua destilada (1mg/ml). No mezclar con otros químicos.",
    sobredosis: {
      signos: ["Mortalidad aguda", "Dificultad respiratoria extrema", "Nado en superficie"],
      tratamiento: "Cambio masivo de agua inmediato y filtración intensiva con carbón activado."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "No totalmente esclarecido; actúa por contacto directo causando daño oxidativo y disrupción de membranas en microorganismos.",
    farmacocinetica: "No se absorbe sistémicamente de forma significativa; actúa a nivel superficial y branquial."
  },
  presentaciones_comerciales: [
    {
      tipo: "Líquido para inmersión",
      concentracion_texto: "Variable según fabricante",
      valor_concentracion: 0,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
