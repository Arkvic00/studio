import type { Drug } from '@/lib/types';

export const antivenenoCoralDrug: Drug = {
    "id": "antiveneno_coral",
    "meta_data": {
      "nombre_generico": "Antivenin (Micrurus fulvius)",
      "nombres_comerciales": [
        "North American Coral Snake Antivenin"
      ],
      "grupo_farmacologico": "Antiveneno (Equino)",
      "status_regulatorio": "Aprobado FDA humanos. Escaso y difícil de conseguir."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Específico para Coral Norteamericana (Micrurus fulvius). NO cruza con Coral de Arizona.",
        "El veneno es neurotóxico (parálisis flácida, falla respiratoria).",
        "El tratamiento debe ser PREVENTIVO si hay mordedura confirmada, ya que una vez que inician los signos clínicos, el antiveneno es poco eficaz para revertirlos.",
        "Signos clínicos pueden tardar hasta 18 horas en aparecer."
      ],
      "usos_principales": "Mordedura confirmada o sospechosa de serpiente de coral."
    },
    "informacion_cliente": [
      "La mordedura de coral puede parecer leve al principio (sin hinchazón), pero es mortal.",
      "El perro puede dejar de respirar y necesitar ventilador.",
      "El antiveneno es extremadamente escaso."
    ],
    "monitoreo_paciente": [
      "Función respiratoria (riesgo de parálisis diafragmática).",
      "Reflejos espinales y palpebrales.",
      "Capacidad de deglución (riesgo de neumonía por aspiración)."
    ],
    "interferencia_laboratorio": [
      "Ninguna."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Mordedura Coral",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 3,
            "dosis_min": 1,
            "dosis_max": 5,
            "unidad_calculo": "viales"
          },
          "frecuencia": {
            "texto_ui": "Inmediatamente",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Administrar 1-3 viales lo antes posible. Si los signos progresan, administrar más. Dosis empírica promedio: 3 viales."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a suero equino (relativa)."
      ],
      "precauciones": [
        "Disponibilidad limitada."
      ],
      "efectos_adversos": [
        "Anafilaxia.",
        "Enfermedad del suero."
      ],
      "sobredosis": {
        "signos": ["No aplica"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Ninguna",
          "efecto": "",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Neutraliza las neurotoxinas postsinápticas de bajo peso molecular.",
      "farmacocinetica": "Desconocida en perros."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial",
        "concentracion_texto": "10 mL",
        "valor_concentracion": 10,
        "unidad_concentracion": "ml",
        "es_divisible": false
      }
    ]
  };
