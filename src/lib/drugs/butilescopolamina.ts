import type { Drug } from '@/lib/types';

export const butilescopolaminaDrug: Drug = {
  "id": "butilescopolamina",
  "meta_data": {
    "nombre_generico": "N-Butilescopolamina Bromuro",
    "nombres_comerciales": [
      "Buscopan"
    ],
    "grupo_farmacologico": "Anticolinérgico / Antiespasmódico",
    "status_regulatorio": "Aprobado FDA (Caballos). Uso extra-label en pequeñas especies."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Relaja el músculo liso gastrointestinal (quita los espasmos/cólicos).",
      "No cruza la barrera hematoencefálica (menos efectos neurológicos que atropina).",
      "Causa taquicardia transitoria (dura 30 min).",
      "En caballos es clave para diferenciar cólico espasmódico (se cura) de quirúrgico (no mejora)."
    ],
    "usos_principales": "Cólico espasmódico y flatulento en caballos. Facilitar palpación rectal en caballos (relaja el recto). Diarrea/vómito espasmódico en perros (menos común)."
  },
  "informacion_cliente": [
    "Alivia el dolor de estómago tipo cólico rápidamente.",
    "La frecuencia cardiaca del caballo subirá temporalmente, no asustarse.",
    "Boca seca."
  ],
  "monitoreo_paciente": [
    "Frecuencia cardiaca (aumentará).",
    "Ruidos intestinales (disminuirán temporalmente).",
    "Resolución del dolor."
  ],
  "interferencia_laboratorio": [
    "Ninguna."
  ],
  "parametros_dosificacion": {
    "caballo": [
      {
        "indicacion": "Cólico espasmódico",
        "vias": ["IV"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.3,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Dosis única",
          "intervalo_horas": 0
        },
        "notas_tecnicas": "Inyectar lento. La taquicardia dura ~30 min."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Íleo paralítico (intestino parado).",
      "Glaucoma.",
      "Taquicardia severa preexistente."
    ],
    "precauciones": [
      "Gestación."
    ],
    "efectos_adversos": [
      "Taquicardia (marcada).",
      "Boca seca.",
      "Midriasis (dilatación pupilar).",
      "Íleo transitorio."
    ],
    "sobredosis": {
      "signos": ["Signos anticolinérgicos severos"],
      "tratamiento": "Fisiostigmina."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Xilacina / Sedantes",
        "efecto": "Potencian el efecto en cólico, pero monitorear corazón",
        "severidad": "Leve"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Antagonista muscarínico competitivo. Relaja músculo liso.",
    "farmacocinetica": "Inicio inmediato IV. Duración corta."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Inyectable",
      "concentracion_texto": "20 mg/mL",
      "valor_concentracion": 20,
      "unidad_concentracion": "mg/ml",
      "es_divisible": false
    }
  ]
};
