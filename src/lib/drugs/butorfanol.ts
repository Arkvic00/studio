import type { Drug } from '@/lib/types';

export const butorfanolDrug: Drug = {
  "id": "butorfanol",
  "meta_data": {
    "nombre_generico": "Tartrato de Butorfanol",
    "nombres_comerciales": [
      "Torbugesic",
      "Torbutrol",
      "Dolorex"
    ],
    "grupo_farmacologico": "Opioide (Agonista Kappa / Antagonista Mu)",
    "status_regulatorio": "Aprobado FDA. Sustancia Controlada Clase IV."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Potente antitusígeno (para la tos).",
      "Analgésico DÉBIL y de corta duración (45-60 min) en perros/gatos; NO usar para cirugía dolorosa mayor (huesos, abdomen).",
      "Excelente sedante cuando se combina con tranquilizantes (Acepromazina, Dexmedetomidina).",
      "Puede revertir parcialmente la sedación/depresión de opioides puros (Morfina) manteniendo algo de analgesia.",
      "En gatos la analgesia dura más que en perros."
    ],
    "usos_principales": "Supresión de tos no productiva, sedación para procedimientos menores, analgesia leve, reversión parcial de mu-agonistas."
  },
  "informacion_cliente": [
    "Calma la tos rápidamente.",
    "Puede causar sedación leve.",
    "El alivio del dolor dura poco tiempo."
  ],
  "monitoreo_paciente": [
    "Sedación.",
    "Frecuencia respiratoria.",
    "Eficacia de tos/dolor."
  ],
  "interferencia_laboratorio": [
    "Ninguna."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Antitusígeno",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.55,
          "dosis_min": 0.5,
          "dosis_max": 1,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Cada 6 a 12 horas",
          "intervalo_horas": 6
        }
      },
      {
        "indicacion": "Sedación / Preanestesia",
        "vias": ["IV", "IM", "SC"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.2,
          "dosis_min": 0.1,
          "dosis_max": 0.4,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Dosis única",
          "intervalo_horas": 0
        }
      }
    ],
    "gato": [
      {
        "indicacion": "Analgesia / Sedación",
        "vias": ["IV", "IM", "SC"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.4,
          "dosis_min": 0.1,
          "dosis_max": 0.4,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Cada 4 a 6 horas",
          "intervalo_horas": 4
        }
      }
    ],
    "caballo": [
      {
        "indicacion": "Analgesia (Cólico)",
        "vias": ["IV"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.1,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Cada 3 a 4 horas",
          "intervalo_horas": 3
        },
        "notas_tecnicas": "Excelente para dolor visceral, pero dura poco. Puede causar ataxia (caminar tambaleante) y temblor de belfos."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Hipersensibilidad.",
      "Tos productiva (necesitamos que el animal tosa el moco)."
    ],
    "precauciones": [
      "Mutación MDR1 (Collies): Reducir dosis 25-50%.",
      "Enfermedad hepática."
    ],
    "efectos_adversos": [
      "Sedación.",
      "Ataxia.",
      "Anorexia/Vómito (raro).",
      "Disforia en gatos (menos que morfina)."
    ],
    "sobredosis": {
      "signos": ["Depresión respiratoria (techo)", "Sedación profunda"],
      "tratamiento": "Naloxona."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Opioides Mu puros (Morfina, Fentanilo)",
        "efecto": "Butorfanol ANTAGONIZA (quita) la analgesia fuerte de la morfina. No mezclar si se busca analgesia máxima",
        "severidad": "Importante"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Agonista de receptores Kappa (sedación/analgesia visceral) y Antagonista de receptores Mu (bloquea euforia/analgesia somática potente).",
    "farmacocinetica": "Inicio rápido. Metabolismo hepático. Duración corta."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Inyectable",
      "concentracion_texto": "10 mg/mL",
      "valor_concentracion": 10,
      "unidad_concentracion": "mg/ml",
      "es_divisible": false
    },
    {
      "tipo": "Tableta",
      "concentracion_texto": "1, 5, 10 mg",
      "valor_concentracion": 1,
      "unidad_concentracion": "mg",
      "es_divisible": true
    }
  ]
};
