import type { Drug } from '@/lib/types';

export const acetylcysteineDrug: Drug = {
  id: "acetylcysteine",
  meta_data: {
    nombre_generico: "Acetilcisteína",
    nombres_comerciales: ["Ilube", "Parvolex", "StromEase"],
    grupo_farmacologico: "Mucolítico; Antídoto; Antioxidante",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Mucolítico que disminuye la viscosidad de las secreciones bronquiales.",
      "Mantiene los niveles de glutatión en el hígado.",
      "Posee actividad anticolagenasa útil en úlceras corneales.",
      "Antídoto de elección para intoxicación por paracetamol y xilitol."
    ],
    usos_principales: "Manejo de hepatopatías tóxicas (paracetamol, xilitol), enfermedades respiratorias como mucolítico, y afecciones oculares (KCS, úlceras 'melting').",
    inicio_accion: "Rápido (especialmente inhalado o IV)",
    duracion_efecto: "Variable; requiere dosis repetidas en intoxicaciones."
  },
  informacion_cliente: [
    "La solución oral tiene un sabor muy desagradable y puede causar náuseas o vómitos.",
    "Si se administra en casa, puede ser necesario usar una sonda para asegurar la ingesta.",
    "Informar si el animal presenta erupciones (urticaria) tras la administración."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Intoxicación por paracetamol (Dosis de Carga)",
        vias: ["IV lenta (15-20 min)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 210,
          dosis_min: 140,
          dosis_max: 280,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Diluir al 5% usando Dextrosa al 5%. La vía IV es preferida en intoxicaciones serias."
      },
      {
        indicacion: "Intoxicación por paracetamol (Mantenimiento)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 70,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 horas (al menos 7 dosis)",
          intervalo_horas: 6
        },
        notas_tecnicas: "Diluir al 5% en Dextrosa al 5%."
      },
      {
        indicacion: "Mucolítico (Nebulización)",
        vias: ["Nebulización"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 50,
          unidad_calculo: "mg"
        },
        duracion_tratamiento: "30–60 min",
        notas_tecnicas: "Usar una solución al 2% (diluir con solución salina)."
      },
      {
        indicacion: "Mucolítico (Instilación traqueal)",
        vias: ["Tráquea"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "ml"
        },
        notas_tecnicas: "Usar una solución al 20%."
      },
      {
        indicacion: "Queratoconjuntivitis seca (KCS)",
        vias: ["Tópica Ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas",
          intervalo_horas: 8
        }
      },
      {
        indicacion: "Úlceras corneales 'melting'",
        vias: ["Tópica Ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 1 a 4 horas",
          intervalo_horas: 2
        },
        duracion_tratamiento: "24-48 horas",
        notas_tecnicas: "El suero autólogo tópico suele ser más efectivo y preferido."
      }
    ],
    gato: [
      {
        indicacion: "Intoxicación por paracetamol (Dosis de Carga)",
        vias: ["IV lenta (15-20 min)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 210,
          dosis_min: 140,
          dosis_max: 280,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "La vía IV es preferida ya que la biodisponibilidad oral es reducida en gatos."
      },
      {
        indicacion: "Intoxicación por paracetamol (Mantenimiento)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 70,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 horas (al menos 7 dosis)",
          intervalo_horas: 6
        }
      },
      {
        indicacion: "Mucolítico (Nebulización)",
        vias: ["Nebulización"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 50,
          unidad_calculo: "mg"
        },
        duracion_tratamiento: "30–60 min",
        notas_tecnicas: "PRECAUCIÓN: Puede causar broncoespasmo en gatos con asma felina."
      },
      {
        indicacion: "Manejo Ocular (KCS / Úlceras)",
        vias: ["Tópica Ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Según indicación (1-8h)",
          intervalo_horas: 4
        }
      }
    ],
    huron: [
      {
        indicacion: "Mucolítico (Nebulización)",
        vias: ["Nebulización"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 20,
          unidad_calculo: "mg/ml"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 12
        },
        duracion_tratamiento: "30-60 min",
        notas_tecnicas: "Diluir con solución salina."
      }
    ],
    conejo: [
      {
        indicacion: "Mucolítico (Nebulización)",
        vias: ["Nebulización"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 20,
          unidad_calculo: "mg/ml"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 12
        },
        duracion_tratamiento: "30-60 min"
      },
      {
        indicacion: "Lavado ótico (Otitis media secretora)",
        vias: ["Ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "ml"
        },
        notas_tecnicas: "Usar una solución al 20%. Ayuda a reducir la inflamación y prevenir fibrosis a largo plazo."
      }
    ],
    roedores: [
      {
        indicacion: "Mucolítico (Nebulización)",
        vias: ["Nebulización"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 20,
          unidad_calculo: "mg/ml"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    primates: [
      {
        indicacion: "Mucolítico (Nebulización)",
        vias: ["Nebulización"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 20,
          unidad_calculo: "mg/ml"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    ave: [
      {
        indicacion: "Mucolítico (Nebulización)",
        vias: ["Nebulización"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 22,
          unidad_calculo: "mg/ml"
        },
        notas_tecnicas: "Puede combinarse con otros fármacos (amikacina 6mg/ml, gentamicina 10mg/ml, kanamicina 3-15mg/ml) para mejorar la penetración en exudados mucosos."
      }
    ],
    reptil: [
      {
        indicacion: "Mucolítico (Nebulización)",
        vias: ["Nebulización"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 20,
          unidad_calculo: "mg/ml"
        },
        duracion_tratamiento: "15-30 min",
        frecuencia: {
          texto_ui: "Según sea necesario",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Retención de anteojos (Spectacles)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación"
        },
        notas_tecnicas: "Aplicar sobre el anteojo retenido para facilitar su remoción."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida."
    ],
    contraindicaciones_especie: {
      "Gato": "PRECAUCIÓN: En asma felina puede causar broncoespasmo severo tras nebulización."
    },
    efectos_adversos: [
      "Broncoespasmo (administración pulmonar).",
      "Náuseas y vómitos (vía oral).",
      "Urticaria (raro).",
      "Hipersensibilidad."
    ],
    monitoreo_recomendado: [
      "Patrón respiratorio (especialmente durante nebulización)",
      "Función hepática en intoxicaciones",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Usar precauciones normales. La solución oral debe diluirse al 5% para mejorar la palatabilidad.",
    sobredosis: {
      signos: ["Vómitos", "Malestar gastrointestinal severo"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      {
        farmaco: "Carbón activado",
        efecto: "Puede reducir la absorción de acetilcisteína (uso controversial).",
        severidad: "Moderada"
      }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Disminuye la viscosidad de las secreciones bronquiales y mantiene los niveles de glutatión hepático.",
    farmacocinetica: "La biodisponibilidad oral es reducida en gatos."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "200 mg/ml",
      valor_concentracion: 200,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Solución Oftálmica",
      concentracion_texto: "5% (con hipromelosa)",
      valor_concentracion: 50,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Gotas para ojos (StromEase)",
      concentracion_texto: "25 mg/ml",
      valor_concentracion: 25,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};