import type { Drug } from '@/lib/types';

export const atipamezolDrug: Drug = {
    "id": "atipamezol",
    "meta_data": {
      "nombre_generico": "Atipamezol Clorhidrato",
      "nombres_comerciales": [
        "Antisedan",
        "Revertor"
      ],
      "grupo_farmacologico": "Antagonista Alfa-2 Adrenérgico (Agente de reversión)",
      "status_regulatorio": "Aprobado FDA (Perros). Uso extra-label en gatos y exóticos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Agente de reversión específico para Dexmedetomidina y Medetomidina.",
        "Administración IM es la estándar; la vía IV puede causar colapso cardiovascular abrupto (hipotensión/excitación).",
        "Revierte tanto la sedación como la analgesia (cuidado si el paciente tiene dolor).",
        "Relación volumen a volumen con Dexmedetomidina suele ser 1:1."
      ],
      "usos_principales": "Reversión de los efectos sedantes y analgésicos de agonistas alfa-2 (Dexmedetomidina, Medetomidina, Xilacina)."
    },
    "informacion_cliente": [
      "Su mascota despertará rápidamente (5-10 min) después de esta inyección.",
      "Puede estar un poco desorientada o temblorosa al inicio.",
      "Si llega a casa muy sedada nuevamente, llamar al veterinario."
    ],
    "monitoreo_paciente": [
      "Estado de alerta (riesgo de resedación).",
      "Dolor (al revertir analgesia).",
      "Frecuencia cardiaca y presión arterial."
    ],
    "interferencia_laboratorio": [
      "Ninguna específica."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Reversión de Dexmedetomidina",
          "vias": ["IM"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 1,
            "unidad_calculo": "mL por cada mL de Dexmedetomidina usado"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "En mg: Usar 5 veces la dosis de mg de dexmedetomidina administrada. (Como Antisedan es 5 mg/mL y Dexdomitor es 0.5 mg/mL, el volumen es igual)."
        }
      ],
      "gato": [
        {
          "indicacion": "Reversión de Dexmedetomidina (Extra-label)",
          "vias": ["IM"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 0.5,
            "unidad_calculo": "mL por cada mL de Dexmedetomidina usado"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "En gatos se usa la MITAD del volumen comparado con perros (2.5 veces la dosis en mg)."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Ninguna absoluta en emergencias de sobredosis alfa-2.",
        "Evitar si la reversión de analgesia es peligrosa."
      ],
      "precauciones": [
        "Administración IV rápida (evitar).",
        "Pacientes que recibieron ketamina (esperar 30 min antes de revertir o pueden tener convulsiones/excitación)."
      ],
      "efectos_adversos": [
        "Vómitos.",
        "Diarrea.",
        "Hipersalivación.",
        "Excitación / Agresión transitoria durante la recuperación.",
        "Hipotensión transitoria."
      ],
      "sobredosis": {
        "signos": ["Taquicardia", "Excitación", "Temblores"],
        "tratamiento": "Minimizar estímulos, usar sedantes no alfa-2 si es necesario."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Agonistas Alfa-2 (Dexmedetomidina)",
          "efecto": "Antagonismo directo (efecto deseado)",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Antagonista alfa-2 adrenérgico altamente selectivo y potente. Desplaza al agonista del receptor.",
      "farmacocinetica": "Absorción IM rápida (pico en 10 min). Vida media ~2-3 horas."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Inyectable",
        "concentracion_texto": "5.0 mg/mL",
        "valor_concentracion": 5,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  };
