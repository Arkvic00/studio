import type { Drug } from '@/lib/types';

export const betametasonaDrug: Drug = {
  "id": "betametasona",
  "meta_data": {
    "nombre_generico": "Betametasona (Sistémica)",
    "nombres_comerciales": [
      "Celestone",
      "BetaVet"
    ],
    "grupo_farmacologico": "Glucocorticoide (Larga Acción)",
    "status_regulatorio": "Aprobado FDA (Perros y Caballos). Uso extra-label en otras especies."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Esteroide muy potente (25-30 veces más potente que el cortisol).",
      "Larga duración de acción (hasta 72h o más según el éster).",
      "NO tiene actividad mineralocorticoide (no retiene sal/agua significativamente).",
      "Induce parto/aborto en rumiantes en el último trimestre."
    ],
    "usos_principales": "Inflamación severa, prurito (picazón) intratable, condiciones inmunomediadas y uso intraarticular en caballos."
  },
  "informacion_cliente": [
    "Causa mucha sed y orina frecuente.",
    "Puede aumentar el apetito y causar jadeo.",
    "No usar en hembras preñadas (riesgo de aborto)."
  ],
  "monitoreo_paciente": [
    "Peso corporal.",
    "Glucosa (diabetes).",
    "Signos de Cushing iatrogénico (piel delgada, abdomen distendido)."
  ],
  "interferencia_laboratorio": [
    "Glucosa: Hiperglucemia.",
    "Fosfatasa Alcalina (ALP): Aumento marcado en perros.",
    "Leucocitos: Leucocitosis por estrés (aumento de neutrófilos, baja de linfocitos)."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Antiinflamatorio",
        "vias": ["PO", "IM"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.15,
          "dosis_min": 0.1,
          "dosis_max": 0.2,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Una o dos veces al día (luego reducir)",
          "intervalo_horas": 24
        }
      }
    ],
    "caballo": [
      {
        "indicacion": "Inflamación osteoarticular",
        "vias": ["Intraarticular"],
        "math": {
          "tipo_calculo": "fija",
          "dosis_min": 3,
          "dosis_max": 15,
          "unidad_calculo": "mg/articulación"
        },
        "frecuencia": {
          "texto_ui": "Dosis única, repetir según necesidad",
          "intervalo_horas": 0
        },
        "notas_tecnicas": "Depende del tamaño de la articulación y la formulación (acetato/fosfato)."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Infecciones fúngicas sistémicas.",
      "Úlceras corneales.",
      "Gestación (especialmente último tercio)."
    ],
    "precauciones": [
      "Diabetes mellitus.",
      "Animales jóvenes (retraso del crecimiento)."
    ],
    "efectos_adversos": [
      "Poliuria/Polidipsia/Polifagia.",
      "Atrofia muscular.",
      "Supresión adrenal.",
      "Laminitis en caballos (riesgo bajo pero existente)."
    ],
    "sobredosis": {
      "signos": ["Cushing iatrogénico", "Úlceras GI"],
      "tratamiento": "Reducción gradual de la dosis."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "AINEs",
        "efecto": "Riesgo extremo de ulceración gástrica",
        "severidad": "Grave"
      },
      {
        "farmaco": "Insulina",
        "efecto": "Antagoniza efecto de la insulina (hiperglucemia)",
        "severidad": "Importante"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Modulación de la síntesis de proteínas. Inhibe fosfolipasa A2, reduciendo prostaglandinas y leucotrienos.",
    "farmacocinetica": "Vida media biológica larga (36-54 horas). Alta potencia."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Inyectable Suspensión",
      "concentracion_texto": "6 mg/mL (Acetato/Fosfato)",
      "valor_concentracion": 6,
      "unidad_concentracion": "mg/ml",
      "es_divisible": false
    },
    {
      "tipo": "Jarabe",
      "concentracion_texto": "0.6 mg/5mL",
      "valor_concentracion": 0.12,
      "unidad_concentracion": "mg/ml",
      "es_divisible": false
    }
  ]
};
