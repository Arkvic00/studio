import type { Drug } from '@/lib/types';

export const amantadinaDrug: Drug = {
    "id": "amantadina",
    "meta_data": {
      "nombre_generico": "Amantadina HCl",
      "nombres_comerciales": ["Symmetrel"],
      "grupo_farmacologico": "Antagonista del receptor NMDA / Antiviral",
      "status_regulatorio": "Uso extra-label en perros y gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Usada como adyuvante para dolor crónico neuropático.",
        "Ayuda a prevenir el fenómeno de 'wind-up' (sensibilización central).",
        "Rara vez es efectiva por sí sola; suele combinarse con AINEs o gabapentina.",
        "Uso prohibido en aves de corral por ser un antiviral."
      ],
      "usos_principales": "Dolor crónico por osteoartritis, dolor neuropático y sensibilización central en perros y gatos."
    },
    "informacion_cliente": [
      "Puede causar agitación o flatulencia al inicio.",
      "Los efectos analgésicos pueden tardar semanas en ser evidentes.",
      "No usar en aves de compañía sin indicación específica."
    ],
    "monitoreo_paciente": [
      "Niveles de dolor (escalas de calidad de vida).",
      "Función renal (especialmente en pacientes geriátricos).",
      "Signos neurológicos (agitación)."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias significativas."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Dolor crónico adyuvante",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 4,
            "dosis_min": 3,
            "dosis_max": 5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 24 horas (o cada 12h si el dolor es severo)", "intervalo_horas": 24 }
        }
      ],
      "gato": [
        {
          "indicacion": "Dolor crónico adyuvante",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 3,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 24 horas", "intervalo_horas": 24 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Hipersensibilidad conocida."],
      "precauciones": [
        "Enfermedad renal (requiere ajuste de dosis).",
        "Trastornos convulsivos.",
        "Insuficiencia cardiaca congestiva."
      ],
      "efectos_adversos": [
        "Agitación / Nerviosismo.",
        "Flatulencia y diarrea suave.",
        "Edema periférico (raro)."
      ],
      "sobredosis": {
        "signos": ["Hiperexcitabilidad", "Temblores", "Ataxia", "Vómitos"],
        "tratamiento": "Soporte, control de agitación con benzodiacepinas. No hay antídoto."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Anticolinérgicos", "efecto": "Potencia efectos secundarios como boca seca y taquicardia", "severidad": "Moderada" },
        { "farmaco": "Trimetoprim/Sulfa", "efecto": "Puede disminuir la excreción renal de amantadina", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloquea los receptores NMDA en el sistema nervioso central, impidiendo la sensibilización de las neuronas del asta dorsal a los estímulos dolorosos.",
      "farmacocinetica": "Excreción renal casi total sin cambios."
    },
    "presentaciones_comerciales": [
      { "tipo": "Cápsula / Tableta", "concentracion_texto": "100 mg", "valor_concentracion": 100, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Solución oral", "concentracion_texto": "50 mg/5mL", "valor_concentracion": 10, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
