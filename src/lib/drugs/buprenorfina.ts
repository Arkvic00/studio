import type { Drug } from '@/lib/types';

export const buprenorfinaDrug: Drug = {
  "id": "buprenorfina",
  "meta_data": {
    "nombre_generico": "Buprenorfina HCl",
    "nombres_comerciales": [
      "Buprenex",
      "Simbadol"
    ],
    "grupo_farmacologico": "Opioide (Agonista Parcial Mu)",
    "status_regulatorio": "Aprobado FDA (Simbadol para gatos). Sustancia Controlada Clase III."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Opioide potente para dolor leve a moderado.",
      "En GATOS se absorbe muy bien por la mucosa oral (OTM), en perros NO.",
      "Tiene un 'efecto techo' (aumentar la dosis más allá de cierto punto no da más analgesia).",
      "Alta afinidad por el receptor: es difícil de revertir con Naloxona.",
      "Simbadol es una formulación de alta concentración para gatos (1 dosis dura 24h)."
    ],
    "usos_principales": "Analgesia postoperatoria (esterilizaciones, tejidos blandos), premedicación anestésica."
  },
  "informacion_cliente": [
    "Gatos: Se puede aplicar el líquido en las encías (no hace falta que lo traguen).",
    "Puede causar pupilas dilatadas y comportamiento muy cariñoso o 'amasado' en gatos (euforia).",
    "Perros: Solo inyectable."
  ],
  "monitoreo_paciente": [
    "Nivel de dolor.",
    "Sedación.",
    "Temperatura (puede causar hipertermia leve en gatos post-cirugía)."
  ],
  "interferencia_laboratorio": [
    "Ninguna."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Analgesia",
        "vias": ["IV", "IM", "SC"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.02,
          "dosis_min": 0.01,
          "dosis_max": 0.03,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Cada 6 a 8 horas",
          "intervalo_horas": 6
        },
        "notas_tecnicas": "Oral transmucosal NO funciona en perros (pH salival diferente)."
      }
    ],
    "gato": [
      {
        "indicacion": "Analgesia (Regular)",
        "vias": ["IV", "IM", "OTM (Oral Transmucosal)"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.02,
          "dosis_min": 0.01,
          "dosis_max": 0.03,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Cada 8 horas",
          "intervalo_horas": 8
        }
      },
      {
        "indicacion": "Analgesia (Simbadol - Alta concentración)",
        "vias": ["SC"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.24,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Una vez al día (cada 24h) por 3 días",
          "intervalo_horas": 24
        },
        "notas_tecnicas": "Simbadol es 1.8 mg/mL. Dosis alta SC provee niveles terapéuticos por 24h."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Hipersensibilidad."
    ],
    "precauciones": [
      "Enfermedad hepática severa.",
      "Trauma craneal (aumento presión intracraneal leve)."
    ],
    "efectos_adversos": [
      "Sedación (leve).",
      "Depresión respiratoria (rara, menos que morfina).",
      "Euforia en gatos (ronroneo, frotarse).",
      "Hipertermia (gatos)."
    ],
    "sobredosis": {
      "signos": ["Sedación profunda", "Depresión respiratoria"],
      "tratamiento": "Naloxona (requiere dosis altas y repetidas por la alta afinidad de buprenorfina)."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Agonistas Mu puros (Morfina/Fentanilo)",
        "efecto": "Buprenorfina puede bloquear o desplazar a la morfina, reduciendo analgesia si se necesita rescate",
        "severidad": "Importante"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Agonista parcial de receptores Mu y antagonista Kappa. Se une muy fuerte al receptor pero activa menos que la morfina.",
    "farmacocinetica": "Metabolismo hepático. Excreción biliar. Duración de acción prolongada por su lenta disociación del receptor."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Inyectable",
      "concentracion_texto": "0.3 mg/mL (Regular)",
      "valor_concentracion": 0.3,
      "unidad_concentracion": "mg/ml",
      "es_divisible": false
    },
    {
      "tipo": "Inyectable (Simbadol)",
      "concentracion_texto": "1.8 mg/mL (Solo gatos)",
      "valor_concentracion": 1.8,
      "unidad_concentracion": "mg/ml",
      "es_divisible": false
    }
  ]
};
