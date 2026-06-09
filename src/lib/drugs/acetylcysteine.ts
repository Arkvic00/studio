import type { Drug } from '@/lib/types';

export const acetylcysteineDrug: Drug = {
  id: "acetylcysteine",
  meta_data: {
    nombre_generico: "Acetilcisteína",
    nombres_comerciales: ["Ilube", "Parvolex", "StromEase"],
    grupo_farmacologico: "Mucolítico; Antídoto hepatoprotector",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Disminuye la viscosidad de las secreciones bronquiales.",
      "Mantiene los niveles de glutatión en el hígado.",
      "Actividad anticolagenasa.",
      "Útil en intoxicaciones por paracetamol y xilitol.",
      "Sabor desagradable (dar vía sonda si es oral)."
    ],
    usos_principales: "Tratamiento de hepatopatías tóxicas (paracetamol, xilitol), mucolítico en enfermedades respiratorias, manejo de queratoconjuntivitis seca (KCS) y úlceras corneales 'derretidas'. En conejos para otitis media secretora y en reptiles para retención de anteojos.",
    inicio_accion: "Rápido (tópico/nebulizado)",
    duracion_efecto: "Variable según vía"
  },
  informacion_cliente: [
    "La solución oral tiene un sabor muy desagradable.",
    "Puede causar náuseas o vómitos si se administra por vía oral.",
    "En los ojos, puede usarse junto con hipromelosa."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Intoxicación por Paracetamol (Dosis inicial)",
        vias: ["IV lenta (15-20 min)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 140,
          dosis_min: 140,
          dosis_max: 280,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Diluir al 5% en dextrosa al 5%. Seguir con infusiones de 70 mg/kg cada 6 horas por al menos 7 dosis."
      },
      {
        indicacion: "Mucolítico (Nebulización)",
        vias: ["Inhalatoria"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 50,
          unidad_calculo: "mg"
        },
        duracion_tratamiento: "30–60 min",
        notas_tecnicas: "Nebulizar como solución al 2% (diluir con solución salina)."
      },
      {
        indicacion: "Mucolítico (Instilación)",
        vias: ["Intratraqueal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "ml"
        },
        notas_tecnicas: "Usar solución al 20% directamente en la tráquea."
      },
      {
        indicacion: "Úlceras corneales derretidas",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 1 a 4 horas por 24-48h", intervalo_horas: 1 },
        notas_tecnicas: "El suero autólogo es preferido y más efectivo."
      }
    ],
    gato: [
       {
        indicacion: "Intoxicación por Paracetamol (Dosis inicial)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 140,
          dosis_min: 140,
          dosis_max: 280,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "La vía IV es preferida en gatos; la biodisponibilidad oral es reducida."
      },
      {
        indicacion: "Mucolítico (Nebulización)",
        vias: ["Inhalatoria"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 50,
          unidad_calculo: "mg"
        },
        duracion_tratamiento: "30–60 min",
        notas_tecnicas: "Usar con cuidado en gatos con asma felina por riesgo de broncoespasmo."
      }
    ],
    huron: [
        {
            indicacion: "Mucolítico (Nebulización)",
            vias: ["Inhalatoria"],
            math: {
              tipo_calculo: "fija",
              dosis_recomendada: 20,
              unidad_calculo: "mg/ml"
            },
            frecuencia: { texto_ui: "Según sea necesario (ej. cada 6-12h)", intervalo_horas: 6 },
            duracion_tratamiento: "30-60 min",
            notas_tecnicas: "Diluir con solución salina."
        }
    ],
    conejo: [
        {
            indicacion: "Mucolítico (Nebulización)",
            vias: ["Inhalatoria"],
            math: {
              tipo_calculo: "fija",
              dosis_recomendada: 20,
              unidad_calculo: "mg/ml"
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
            notas_tecnicas: "Reduce la inflamación y previene cambios fibróticos a largo plazo. Usar solución al 20%."
        }
    ],
    roedores: [
        {
            indicacion: "Mucolítico (Nebulización)",
            vias: ["Inhalatoria"],
            math: {
              tipo_calculo: "fija",
              dosis_recomendada: 20,
              unidad_calculo: "mg/ml"
            },
            duracion_tratamiento: "30-60 min"
        }
    ],
    primates: [
        {
            indicacion: "Mucolítico (Nebulización)",
            vias: ["Inhalatoria"],
            math: {
              tipo_calculo: "fija",
              dosis_recomendada: 20,
              unidad_calculo: "mg/ml"
            },
            duracion_tratamiento: "30-60 min"
        }
    ],
    ave: [
        {
            indicacion: "Mucolítico (Nebulización)",
            vias: ["Inhalatoria"],
            math: {
              tipo_calculo: "fija",
              dosis_recomendada: 22,
              unidad_calculo: "mg/ml"
            },
            notas_tecnicas: "Usar agua estéril. Mejora la penetración de otros fármacos nebulizados como amikacina (6 mg/ml) o gentamicina (10 mg/ml)."
        }
    ],
    reptil: [
        {
            indicacion: "Mucolítico (Nebulización)",
            vias: ["Inhalatoria"],
            math: {
              tipo_calculo: "fija",
              dosis_recomendada: 20,
              unidad_calculo: "mg/ml"
            },
            duracion_tratamiento: "15–30 min"
        },
        {
            indicacion: "Retención de anteojos (Retained spectacles)",
            vias: ["Tópica"],
            math: {
              tipo_calculo: "fija",
              dosis_recomendada: 1,
              unidad_calculo: "aplicación"
            },
            notas_tecnicas: "Aplicar sobre los anteojos retenidos para facilitar su remoción."
        }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones específicas en el texto proporcionado."
    ],
    efectos_adversos: [
      "Broncoespasmo (especialmente si se nebuliza en pacientes asmáticos).",
      "Hipersensibilidad.",
      "Náuseas y vómitos (vía oral).",
      "Urticaria (raro)."
    ],
    monitoreo_recomendado: [
      "Patrón respiratorio durante la nebulización",
      "Signos de hipersensibilidad o náuseas"
    ],
    instrucciones_manejo: "Se deben observar las precauciones normales.",
    sobredosis: {
      signos: ["Náuseas", "Vómitos", "Signos alérgicos"],
      tratamiento: "Terapia de soporte."
    },
    interacciones_farmacologicas: [
      { farmaco: "Carbón activado", efecto: "Puede reducir la absorción de la acetilcisteína (controvertido).", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Disminuye la viscosidad de las secreciones bronquiales, mantiene los niveles de glutatión hepático y posee actividad anticolagenasa.",
    farmacocinetica: "Sabor desagradable que requiere dilución al 5% para administración oral. Preferible la vía IV para intoxicaciones graves debido a la biodisponibilidad limitada en gatos por vía oral."
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
      tipo: "Colirio (StromEase)",
      concentracion_texto: "25 mg/ml",
      valor_concentracion: 25,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Solución oftálmica (Ilube)",
      concentracion_texto: "5% (con hipromelosa 0.35%)",
      valor_concentracion: 50,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
