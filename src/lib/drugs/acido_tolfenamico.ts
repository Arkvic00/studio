import type { Drug } from '@/lib/types';

export const acidoTolfenamicoDrug: Drug = {
  "id": "acido_tolfenamico",
  "meta_data": {
    "nombre_generico": "Ácido Tolfenámico",
    "nombres_comerciales": ["Tolfedine"],
    "grupo_farmacologico": "AINE (Fenamato)",
    "status_regulatorio": "Aprobado en Europa/Canadá; Uso extra-label en USA."
  },
  "resumen_clinico": {
    "puntos_clave": [
        "AINE no selectivo con propiedades analgésicas, antipiréticas y antiinflamatorias.",
        "Comúnmente usado en Europa, pero no aprobado en USA.",
        "Similar en perfil a otros AINEs no selectivos, con riesgo de toxicidad GI y renal."
    ],
    "usos_principales": "Alivio del dolor y la inflamación asociados con trastornos musculoesqueléticos y cirugía en perros y gatos. Tratamiento de la fiebre."
  },
  "informacion_cliente": [
    "Administrar con comida.", "No usar por más tiempo del prescrito.", "Suspender y contactar al veterinario si hay vómitos o diarrea."
  ],
  "monitoreo_paciente": [
    "Eficacia clínica (reducción de dolor/inflamación).",
    "Signos de toxicidad GI (vómitos, diarrea, heces negras)."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Dolor/Inflamación/Fiebre",
        "vias": ["PO", "SC", "IM"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 4.0,
          "dosis_min": 4.0,
          "dosis_max": 4.0,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "cada 24 horas por 3-5 días",
          "intervalo_horas": 24
        }
      }
    ],
    "gato": [
      {
        "indicacion": "Dolor/Inflamación/Fiebre",
        "vias": ["PO", "SC"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 4.0,
          "dosis_min": 4.0,
          "dosis_max": 4.0,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "cada 24 horas por MÁXIMO 5 días",
          "intervalo_horas": 24
        }
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": ["Hipersensibilidad.", "Úlceras GI activas.", "Enfermedad renal, hepática o cardíaca severa.", "Uso concurrente con otros AINEs o corticosteroides."],
    "precauciones": [],
    "efectos_adversos": ["Toxicidad GI (vómitos, diarrea, ulceración).", "Nefrotoxicidad.", "Hepatotoxicidad."],
    "sobredosis": {
      "signos": ["Toxicidad GI y renal severa."],
      "tratamiento": "Tratamiento de apoyo estándar para sobredosis de AINEs."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Otros AINEs o Corticosteroides",
        "efecto": "Aumentan drásticamente el riesgo de toxicidad GI y renal.",
        "severidad": "Grave"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Inhibidor no selectivo de la ciclooxigenasa (COX-1 y COX-2). También puede inhibir la lipooxigenasa.",
    "farmacocinetica": "Buena absorción oral y parenteral. Larga duración de acción. Metabolismo hepático. Excreción biliar/fecal."
  },
  "presentaciones_comerciales": [
    {
        "tipo": "Comprimidos",
        "concentracion_texto": "6 mg, 20 mg, 60 mg",
        "valor_concentracion": 6,
        "unidad_concentracion": "mg",
        "es_divisible": true
    },
    {
        "tipo": "Inyección",
        "concentracion_texto": "40 mg/mL",
        "valor_concentracion": 40,
        "unidad_concentracion": "mg/mL",
        "es_divisible": false
    }
  ]
};
