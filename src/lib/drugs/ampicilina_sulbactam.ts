import type { Drug } from '@/lib/types';

export const ampicilinaSulbactamDrug: Drug = {
    "id": "ampicilina_sulbactam",
    "meta_data": {
      "nombre_generico": "Ampicilina Sódica / Sulbactam Sódico",
      "nombres_comerciales": [
        "Unasyn"
      ],
      "grupo_farmacologico": "Penicilina Potenciada (Inyectable)",
      "status_regulatorio": "Uso extra-label en veterinaria; Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Similar al Clavamox pero en versión inyectable (IV/IM).",
        "El sulbactam inhibe las beta-lactamasas, ampliando el espectro.",
        "Ideal para neumonías graves, sepsis intraabdominal e infecciones óseas.",
        "Requiere reconstitución y uso rápido (la solución pierde estabilidad)."
      ],
      "usos_principales": "Infecciones severas por bacterias resistentes a ampicilina sola, profilaxis quirúrgica en cirugías contaminadas."
    },
    "informacion_cliente": [
      "Generalmente de uso hospitalario.",
      "Si se prescribe para casa (IM), mantener refrigerado y desechar remanentes según indicación."
    ],
    "monitoreo_paciente": [
      "Sitio de catéter IV (riesgo de flebitis).",
      "Función renal y hepática en tratamientos largos.",
      "Signos de anafilaxia."
    ],
    "interferencia_laboratorio": [
      "Glucosa urinaria (falso positivo).",
      "Proteínas séricas totales (puede alterar mediciones por reacción de Biuret)."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones severas / Sepsis (Extra-label)",
          "vias": ["IV", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 30,
            "dosis_min": 20,
            "dosis_max": 50,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 6 a 8 horas",
            "intervalo_horas": 8
          },
          "notas_tecnicas": "IV administrar lento (15-30 min). IM puede ser doloroso."
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones severas (Extra-label)",
          "vias": ["IV", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 30,
            "dosis_min": 20,
            "dosis_max": 50,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 6 a 8 horas",
            "intervalo_horas": 8
          }
        }
      ],
      "caballo": [
        {
          "indicacion": "Infecciones ortopédicas / Sepsis neonatal",
          "vias": ["IV", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 30,
            "dosis_min": 20,
            "dosis_max": 50,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 6 a 8 horas",
            "intervalo_horas": 8
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a penicilinas.",
        "Pequeños roedores/lagomorfos."
      ],
      "precauciones": [
        "Insuficiencia renal (ajustar intervalo)."
      ],
      "efectos_adversos": [
        "Dolor al inyectar IM.",
        "Tromboflebitis (IV).",
        "Diarrea.",
        "Reacciones alérgicas."
      ],
      "sobredosis": {
        "signos": ["Convulsiones", "Hiperexcitabilidad"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Aminoglucósidos",
          "efecto": "Incompatibilidad física en mezcla, sinergia terapéutica si se dan separados",
          "severidad": "Importante"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bactericida por inhibición de pared celular + Inhibición suicida de beta-lactamasas.",
      "farmacocinetica": "Distribución amplia en fluidos extracelulares. Excreción renal predominante."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial inyectable",
        "concentracion_texto": "1.5g (1g ampicilina + 0.5g sulbactam), 3g (2g + 1g)",
        "valor_concentracion": 30,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  };
