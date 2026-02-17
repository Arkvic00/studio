import type { Drug } from '@/lib/types';

export const benazeprilDrug: Drug = {
  "id": "benazepril",
  "meta_data": {
    "nombre_generico": "Benazepril Clorhidrato",
    "nombres_comerciales": [
      "Fortekor",
      "Lotensin",
      "Benazecare"
    ],
    "grupo_farmacologico": "Inhibidor de la ECA (Enzima Convertidora de Angiotensina)",
    "status_regulatorio": "Aprobado FDA (Perros y Gatos - Fortekor). Uso extra-label en humanos (Lotensin)."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Vasodilatador mixto (arterial y venoso).",
      "Reduce la presión arterial y la carga de trabajo del corazón.",
      "Protege al riñón al reducir la pérdida de proteínas (proteinuria).",
      "Se considera más seguro que el enalapril en pacientes con daño renal leve porque también se elimina por la bilis."
    ],
    "usos_principales": "Insuficiencia cardiaca congestiva (ICC) en perros, hipertensión y enfermedad renal crónica con proteinuria (especialmente en gatos)."
  },
  "informacion_cliente": [
    "Puede causar debilidad si la presión baja demasiado.",
    "A veces causa tos leve.",
    "Requiere monitoreo renal periódico.",
    "No suspender abruptamente."
  ],
  "monitoreo_paciente": [
    "BUN/Creatinina y Electrolitos (Potasio) a la semana de iniciar.",
    "Presión arterial.",
    "Ratio Proteína/Creatinina en orina (UPC) para evaluar eficacia renal."
  ],
  "interferencia_laboratorio": [
    "Puede aumentar BUN/Creatinina levemente (azotemia prerrenal).",
    "Hiperpotasemia (raro en monoterapia)."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Insuficiencia Cardiaca / Hipertensión",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.375,
          "dosis_min": 0.25,
          "dosis_max": 0.5,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Cada 12 a 24 horas",
          "intervalo_horas": 24
        }
      }
    ],
    "gato": [
      {
        "indicacion": "Enfermedad Renal (Proteinuria) / Hipertensión",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.75,
          "dosis_min": 0.5,
          "dosis_max": 1.0,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Una vez al día",
          "intervalo_horas": 24
        },
        "notas_tecnicas": "Demostrado que reduce la proteinuria y mejora el apetito/calidad de vida, aunque no necesariamente extiende la supervivencia en estadio terminal."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Hipersensibilidad a IECA.",
      "Estenosis aórtica hemodinámicamente relevante.",
      "Hipovolemia / Deshidratación."
    ],
    "precauciones": [
      "Falla renal aguda.",
      "Hiponatremia."
    ],
    "efectos_adversos": [
      "Hipotensión.",
      "Anorexia / Vómitos.",
      "Azotemia (aumento de valores renales).",
      "Hiperpotasemia (si se combina con espironolactona)."
    ],
    "sobredosis": {
      "signos": ["Hipotensión severa"],
      "tratamiento": "Fluidos IV (expansión de volumen)."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "AINEs (Carprofeno/Meloxicam)",
        "efecto": "Aumenta riesgo de fallo renal agudo y reduce eficacia antihipertensiva",
        "severidad": "Importante"
      },
      {
        "farmaco": "Diuréticos (Furosemida)",
        "efecto": "Riesgo de hipotensión (reducir dosis de diurético al iniciar benazepril)",
        "severidad": "Moderada"
      },
      {
        "farmaco": "Espironolactona / Suplementos de Potasio",
        "efecto": "Riesgo de hiperpotasemia",
        "severidad": "Moderada"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Inhibe la conversión de Angiotensina I a Angiotensina II (potente vasoconstrictor), reduciendo así la resistencia vascular periférica y la retención de aldosterona.",
    "farmacocinetica": "Es un profármaco (se convierte en benazeprilat en hígado). Excreción 50% renal y 50% biliar en perros (85% biliar en gatos), lo que lo hace ideal para pacientes renales."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Tableta",
      "concentracion_texto": "2.5, 5, 10, 20, 40 mg",
      "valor_concentracion": 5,
      "unidad_concentracion": "mg",
      "es_divisible": true
    }
  ]
};