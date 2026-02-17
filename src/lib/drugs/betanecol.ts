import type { Drug } from '@/lib/types';

export const betanecolDrug: Drug = {
  "id": "betanecol",
  "meta_data": {
    "nombre_generico": "Betanecol Cloruro",
    "nombres_comerciales": [
      "Urecholine"
    ],
    "grupo_farmacologico": "Agonista Colinérgico (Muscarínico)",
    "status_regulatorio": "Uso extra-label en veterinaria."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Estimula la contracción del músculo detrusor de la vejiga.",
      "Usado para 'vejiga atónica' (cuando el animal no puede vaciar la vejiga por debilidad muscular).",
      "NUNCA usar si hay obstrucción urinaria (puede romper la vejiga).",
      "Antídoto: Atropina."
    ],
    "usos_principales": "Atonía vesical (post-obstructiva o neurológica), disautonomía (potros)."
  },
  "informacion_cliente": [
    "Asegurarse de que el animal pueda orinar (que no esté tapado) antes de darlo.",
    "Puede causar babeo, vómito o diarrea.",
    "Administrar con el estómago vacío para evitar náuseas."
  ],
  "monitoreo_paciente": [
    "Capacidad de orinar.",
    "Signos de sobreestimulación colinérgica (salivación, lagrimeo, diarrea).",
    "Integridad de la vejiga."
  ],
  "interferencia_laboratorio": [
    "Amilasa/Lipasa: Puede aumentar por estimulación pancreática."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Atonía vesical",
        "vias": ["PO", "SC"],
        "math": {
          "tipo_calculo": "fija",
          "dosis_recomendada": 15,
          "dosis_min": 5,
          "dosis_max": 25,
          "unidad_calculo": "mg/perro"
        },
        "frecuencia": {
          "texto_ui": "Cada 8 horas",
          "intervalo_horas": 8
        },
        "notas_tecnicas": "Dosis empírica total por perro, no por kg usualmente. Iniciar bajo y subir."
      }
    ],
    "gato": [
      {
        "indicacion": "Atonía vesical",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "fija",
          "dosis_recomendada": 2.5,
          "dosis_min": 1.25,
          "dosis_max": 5,
          "unidad_calculo": "mg/gato"
        },
        "frecuencia": {
          "texto_ui": "Cada 8 horas",
          "intervalo_horas": 8
        }
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Obstrucción urinaria o gastrointestinal (Absoluta).",
      "Hipertiroidismo.",
      "Úlcera péptica.",
      "Asma."
    ],
    "precauciones": [
      "Integridad de la pared vesical dudosa."
    ],
    "efectos_adversos": [
      "SLUDGE (Salivación, Lagrimeo, Urinación, Defecación, Gastrointestinal upset, Emesis).",
      "Bradicardia.",
      "Cólicos abdominales."
    ],
    "sobredosis": {
      "signos": ["Colapso", "Broncoespasmo", "Bradicardia severa"],
      "tratamiento": "Atropina SC o IV."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Otros colinérgicos / Inhibidores de colinesterasa",
        "efecto": "Toxicidad aditiva",
        "severidad": "Grave"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Estimula receptores muscarínicos (principalmente M3) causando contracción de músculo liso (vejiga/intestino). Resistente a la degradación por colinesterasa.",
    "farmacocinetica": "Pobre absorción oral, pero selectiva. Inicio en 30-90 min (PO) o 5-15 min (SC)."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Tableta",
      "concentracion_texto": "5, 10, 25, 50 mg",
      "valor_concentracion": 5,
      "unidad_concentracion": "mg",
      "es_divisible": true
    }
  ]
};
