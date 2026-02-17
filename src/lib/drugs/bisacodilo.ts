import type { Drug } from '@/lib/types';

export const bisacodiloDrug: Drug = {
  "id": "bisacodilo",
  "meta_data": {
    "nombre_generico": "Bisacodilo",
    "nombres_comerciales": [
      "Dulcolax"
    ],
    "grupo_farmacologico": "Laxante Estimulante",
    "status_regulatorio": "OTC (Venta libre). Uso extra-label."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Estimula las terminaciones nerviosas del colon para producir movimiento.",
      "Las tabletas tienen cubierta entérica; NO DEBEN ROMPERSE NI MASTICARSE (o causan cólico severo).",
      "Más efectivo si se usa ocasionalmente; el uso crónico puede dañar los nervios del colon (plexo mientérico).",
      "Contraindicado en obstrucción intestinal."
    ],
    "usos_principales": "Estreñimiento agudo, preparación para colonoscopia/radiografía."
  },
  "informacion_cliente": [
    "No dar leche ni antiácidos 1 hora antes o después (disuelve la cubierta de la pastilla).",
    "El animal debe tragar la pastilla entera.",
    "Puede causar cólicos y diarrea explosiva."
  ],
  "monitoreo_paciente": [
    "Defecación.",
    "Signos de dolor abdominal."
  ],
  "interferencia_laboratorio": [
    "Ninguna."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Estreñimiento",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "fija",
          "dosis_recomendada": 12.5,
          "dosis_min": 5,
          "dosis_max": 20,
          "unidad_calculo": "mg/perro"
        },
        "frecuencia": {
          "texto_ui": "Una vez al día",
          "intervalo_horas": 24
        },
        "notas_tecnicas": "Dosis: Pequeños 5mg, Medianos 10mg, Grandes 20mg."
      }
    ],
    "gato": [
      {
        "indicacion": "Estreñimiento",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "fija",
          "dosis_recomendada": 5,
          "unidad_calculo": "mg/gato"
        },
        "frecuencia": {
          "texto_ui": "Una vez al día",
          "intervalo_horas": 24
        }
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Obstrucción intestinal.",
      "Sangrado rectal.",
      "Abdomen agudo quirúrgico."
    ],
    "precauciones": [
      "No usar crónicamente."
    ],
    "efectos_adversos": [
      "Cólicos abdominales severos.",
      "Diarrea.",
      "Irritación rectal (supositorios)."
    ],
    "sobredosis": {
      "signos": ["Diarrea profusa", "Deshidratación", "Electrolitos desbalanceados"],
      "tratamiento": "Soporte."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Antiácidos / Leche",
        "efecto": "Disolución prematura de la cubierta entérica (irritación gástrica)",
        "severidad": "Moderada"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Irritación local directa y estimulación de nervios intramurales del plexo mientérico, aumentando peristalsis.",
    "farmacocinetica": "Mínima absorción sistémica (<5%). Acción en 6-10 horas (oral)."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Tableta (Cubierta Entérica)",
      "concentracion_texto": "5 mg",
      "valor_concentracion": 5,
      "unidad_concentracion": "mg",
      "es_divisible": false
    },
    {
      "tipo": "Supositorio",
      "concentracion_texto": "10 mg",
      "valor_concentracion": 10,
      "unidad_concentracion": "mg",
      "es_divisible": false
    }
  ]
};