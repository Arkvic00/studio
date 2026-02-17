import type { Drug } from '@/lib/types';

export const antivenenoLatrodectusDrug: Drug = {
    "id": "antiveneno_latrodectus",
    "meta_data": {
      "nombre_generico": "Antivenin (Latrodectus mactans)",
      "nombres_comerciales": [
        "Black Widow Spider Antivenin"
      ],
      "grupo_farmacologico": "Antiveneno (Inmunoglobulina Equina)",
      "status_regulatorio": "Aprobado FDA humanos; Uso extra-label veterinaria."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Neutraliza el veneno de arañas del género Latrodectus (Viuda Negra).",
        "Alivia rápidamente el dolor, rigidez muscular y signos autonómicos.",
        "Derivado de suero equino (caballo), riesgo alto de anafilaxia.",
        "Generalmente una dosis es suficiente."
      ],
      "usos_principales": "Tratamiento de envenenamiento sintomático por mordedura de viuda negra (Latrodectismo) en perros y gatos."
    },
    "informacion_cliente": [
      "Tratamiento de emergencia que puede salvar la vida.",
      "Riesgo de reacción alérgica al suero.",
      "El alivio de los síntomas suele ser dramáticamente rápido (minutos a horas)."
    ],
    "monitoreo_paciente": [
      "Signos vitales durante la infusión (anafilaxia).",
      "Resolución de rigidez abdominal y dolor.",
      "Presión arterial."
    ],
    "interferencia_laboratorio": [
      "Ninguna específica conocida."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Latrodectismo",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 1,
            "unidad_calculo": "vial/paciente"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Diluir el vial (6000 unidades) en 50-100 mL de solución salina y administrar en 30-60 min. Premedicar con difenhidramina."
        }
      ],
      "gato": [
        {
          "indicacion": "Latrodectismo",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 1,
            "unidad_calculo": "vial/paciente"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Muy sensibles al veneno, tratamiento temprano es crítico."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad conocida a productos equinos (relativa en emergencia mortal)."
      ],
      "precauciones": [
        "Requiere monitoreo estricto de anafilaxia."
      ],
      "efectos_adversos": [
        "Anafilaxia aguda (hipotensión, broncoespasmo).",
        "Enfermedad del suero (reacción tardía 1-2 semanas después: fiebre, dolor articular)."
      ],
      "sobredosis": {
        "signos": ["No aplica (biológico)"],
        "tratamiento": "Tratar reacciones de hipersensibilidad con epinefrina, esteroides y antihistamínicos."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Ninguna directa",
          "efecto": "",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Los anticuerpos se unen a la neurotoxina (alfa-latrotoxina) circulante y la neutralizan, impidiendo que siga liberando neurotransmisores.",
      "farmacocinetica": "Distribución vascular rápida tras IV. Vida media de días."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial Liofilizado",
        "concentracion_texto": "6000 Unidades Antiveneno",
        "valor_concentracion": 6000,
        "unidad_concentracion": "U",
        "es_divisible": false
      }
    ]
  };
