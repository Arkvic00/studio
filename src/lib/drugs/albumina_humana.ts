import type { Drug } from '@/lib/types';

export const albuminaHumanaDrug: Drug = {
    "id": "albumina_humana",
    "meta_data": {
      "nombre_generico": "Albúmina Humana",
      "nombres_comerciales": [
        "Albuminar",
        "Albuked",
        "Albutein",
        "Buminate",
        "Plasbumin"
      ],
      "grupo_farmacologico": "Coloide sanguíneo / Expansor de volumen",
      "status_regulatorio": "Uso extra-label en veterinaria; Aprobado por la FDA para humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Utilizada para el aumento agudo del volumen plasmático y soporte de presión oncótica.",
        "Alto riesgo de reacciones de hipersensibilidad (tipo I y tipo III) en perros sanos.",
        "Debe reservarse para pacientes críticamente enfermos con hipoalbuminemia severa que no responden a cristaloides.",
        "La albúmina humana al 25% es muy hiperoncótica; expande el volumen intravascular hasta 5 veces el volumen infundido."
      ],
      "usos_principales": "Tratamiento de hipoalbuminemia severa y shock hipovolémico en pacientes que no responden a otras terapias de fluidos."
    },
    "informacion_cliente": [
      "Es un producto derivado de sangre humana.",
      "El paciente debe permanecer hospitalizado bajo vigilancia constante.",
      "Existe un riesgo de reacciones alérgicas graves incluso días después de la administración."
    ],
    "monitoreo_paciente": [
      "Presión arterial y frecuencia cardiaca.",
      "Estado de hidratación y producción de orina.",
      "Albúmina sérica y proteínas totales.",
      "Signos de sobrecarga de fluidos (edema pulmonar).",
      "Signos de anafilaxia (urticaria, vómitos, colapso)."
    ],
    "interferencia_laboratorio": [
      "Albúmina sérica: Los métodos de medición (verde de bromocresol) pueden sobreestimar o subestimar la albúmina humana en suero animal."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Hipoalbuminemia crítica / Shock (Extra-label)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 2,
            "dosis_min": 0.25,
            "dosis_max": 5,
            "unidad_calculo": "mL/kg (solución al 25%)"
          },
          "frecuencia": {
            "texto_ui": "Infusión lenta (4-6 horas)",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "No exceder 2 mL/min. En shock se puede administrar más rápido, pero con monitoreo estrecho."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Anemia severa.",
        "Falla cardiaca con sobrecarga de volumen.",
        "Hipersensibilidad conocida a la albúmina humana."
      ],
      "precauciones": [
        "Riesgo de vasculitis y artritis inmunomediada 8-15 días post-infusión.",
        "Usar con precaución en pacientes con coagulopatías."
      ],
      "efectos_adversos": [
        "Anafilaxia (vómito, diarrea, disnea).",
        "Edema facial.",
        "Hipotensión.",
        "Reacciones de fase tardía (fiebre, cojera, proteinuria)."
      ],
      "sobredosis": {
        "signos": [
          "Hipervolemia",
          "Edema pulmonar"
        ],
        "tratamiento": "Suspender infusión inmediatamente y administrar diuréticos (furosemida)."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Soluciones de alimentación parenteral",
          "efecto": "No mezclar en la misma línea por riesgo de precipitación",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Provee el 70-80% de la presión oncótica coloidal del plasma, moviendo fluido del espacio intersticial al vascular.",
      "farmacocinetica": "Vida media en perros críticos es mucho más corta que en humanos (horas vs días)."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial para infusión",
        "concentracion_texto": "5% (50 mg/mL) y 25% (250 mg/mL)",
        "valor_concentracion": 250,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  };
