import type { Drug } from '@/lib/types';

export const atropinaSulfatoDrug: Drug = {
    "id": "atropina_sulfato",
    "meta_data": {
      "nombre_generico": "Sulfato de Atropina",
      "nombres_comerciales": [
        "Atropina Inyectable",
        "Atro-Ject"
      ],
      "grupo_farmacologico": "Anticolinérgico / Parasimpaticolítico",
      "status_regulatorio": "Aprobado FDA (Perros, Gatos, Caballos, Ganado)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Aumenta la frecuencia cardiaca (tratamiento de bradicardia).",
        "Reduce secreciones respiratorias y salivales.",
        "Dilata la pupila (midriasis) por largo tiempo.",
        "Antídoto crucial para intoxicación por organofosforados.",
        "Atraviesa la barrera hematoencefálica (puede causar delirio en dosis altas)."
      ],
      "usos_principales": "Preanestesia (para prevenir bradicardia y salivación), tratamiento de bradicardia sinusal/bloqueo AV, antídoto de organofosforados, tratamiento de uveítis (ocular)."
    },
    "informacion_cliente": [
      "Puede causar boca seca y sed.",
      "Las pupilas estarán dilatadas y sensibles a la luz.",
      "Puede causar estreñimiento temporal (íleo)."
    ],
    "monitoreo_paciente": [
      "Frecuencia cardiaca (riesgo de taquicardia excesiva).",
      "Sonidos intestinales (motilidad).",
      "Tamaño pupilar."
    ],
    "interferencia_laboratorio": [
      "Ninguna directa."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Preanestesia / Bradicardia",
          "vias": ["IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.04,
            "dosis_min": 0.02,
            "dosis_max": 0.04,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Dosis bajas pueden causar bradicardia paradójica inicial. En emergencia (RCP) usar dosis alta: 0.04 mg/kg IV."
        },
        {
          "indicacion": "Intoxicación Organofosforados",
          "vias": ["IV", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.2,
            "dosis_min": 0.1,
            "dosis_max": 0.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Repetir a efecto (hasta secar secreciones)",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Dosis masivas comparadas con las cardiacas."
        }
      ],
      "gato": [
        {
          "indicacion": "Preanestesia",
          "vias": ["IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.02,
            "dosis_min": 0.02,
            "dosis_max": 0.04,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          }
        }
      ],
      "caballo": [
        {
          "indicacion": "Broncodilatación / Bradicardia (Usar con cautela)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.01,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Alto riesgo de cólico por íleo."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Glaucoma (aumenta presión intraocular).",
        "Taquicardia.",
        "Íleo u obstrucción intestinal.",
        "Enfermedad cardiaca avanzada."
      ],
      "precauciones": [
        "Rumiantes (saliva se vuelve viscosa y puede obstruir).",
        "Caballos (cólico)."
      ],
      "efectos_adversos": [
        "Boca seca (Xerostomía).",
        "Estreñimiento / Íleo.",
        "Taquicardia sinusal.",
        "Retención urinaria.",
        "Midriasis (visión borrosa)."
      ],
      "sobredosis": {
        "signos": ["Boca seca", "Taquicardia extrema", "Delirio", "Hipertermia"],
        "tratamiento": "Fisiostigmina (si hay arritmias graves o delirio). Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Otros anticolinérgicos",
          "efecto": "Efecto aditivo (toxicidad)",
          "severidad": "Moderada"
        },
        {
          "farmaco": "Metoclopramida",
          "efecto": "Atropina antagoniza el efecto procinético",
          "severidad": "Importante"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Antagonista competitivo de la acetilcolina en receptores muscarínicos postganglionares.",
      "farmacocinetica": "Buena absorción. Metabolismo hepático, excreción renal. Duración sistémica corta, duración ocular muy larga."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Inyectable",
        "concentracion_texto": "0.54 mg/mL, 1/120 gr (15 mg/mL concentrado para organofosforados)",
        "valor_concentracion": 0.54,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      },
      {
        "tipo": "Ungüento/Solución Oftálmica",
        "concentracion_texto": "1%",
        "valor_concentracion": 1,
        "unidad_concentracion": "%",
        "es_divisible": false
      }
    ]
  };
