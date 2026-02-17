import type { Drug } from '@/lib/types';

export const bromocriptinaDrug: Drug = {
  "id": "bromocriptina",
  "meta_data": {
    "nombre_generico": "Mesilato de Bromocriptina",
    "nombres_comerciales": [
      "Parlodel"
    ],
    "grupo_farmacologico": "Agonista de Dopamina / Inhibidor de Prolactina",
    "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Inhibe la secreción de prolactina.",
      "Usado para tratar el embarazo psicológico (pseudociesis) en perras.",
      "A veces usado para interrumpir el embarazo (aborto) combinado con prostaglandinas, pero causa mucho vómito.",
      "La Cabergolina es más efectiva y tiene menos efectos secundarios, por lo que la bromocriptina se usa menos ahora."
    ],
    "usos_principales": "Pseudociesis (Falso embarazo) y supresión de lactancia."
  },
  "informacion_cliente": [
    "Causa vómitos frecuentes (dar con comida).",
    "Puede causar cambios de comportamiento.",
    "Se usa para secar la leche en perras con embarazo psicológico."
  ],
  "monitoreo_paciente": [
    "Signos de aborto (si esa es la intención).",
    "Producción de leche (resolución).",
    "Vómitos severos."
  ],
  "interferencia_laboratorio": [
    "Prolactina: Disminución."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Pseudociesis / Supresión lactancia",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.01,
          "dosis_min": 0.01,
          "dosis_max": 0.03,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Cada 12 horas por 10-14 días",
          "intervalo_horas": 12
        }
      }
    ],
    "gato": [
      {
        "indicacion": "Supresión lactancia / Aborto (Extra-label)",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "fija",
          "dosis_recomendada": 0,
          "unidad_calculo": "mg"
        },
        "frecuencia": {
          "texto_ui": "No se recomienda rutinariamente",
          "intervalo_horas": 0
        },
        "notas_tecnicas": "Poco usado en gatos."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Gestación (a menos que se desee abortar)."
    ],
    "precauciones": [
      "Enfermedad hepática."
    ],
    "efectos_adversos": [
      "Vómitos (muy común).",
      "Anorexia.",
      "Cambios de conducta.",
      "Hipotensión."
    ],
    "sobredosis": {
      "signos": ["Vómito severo", "Alucinaciones", "Hipotensión"],
      "tratamiento": "Metoclopramida (antagonista de dopamina, revierte el efecto)."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Metoclopramida / Domperidona",
        "efecto": "Antagonizan el efecto de la bromocriptina (anulan la acción)",
        "severidad": "Importante"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Agonista del receptor de dopamina D2. La dopamina inhibe la liberación de prolactina de la pituitaria.",
    "farmacocinetica": "Metabolismo hepático extenso (primer paso). Excreción biliar."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Tableta",
      "concentracion_texto": "2.5 mg",
      "valor_concentracion": 2.5,
      "unidad_concentracion": "mg",
      "es_divisible": true
    },
    {
      "tipo": "Cápsula",
      "concentracion_texto": "5 mg",
      "valor_concentracion": 5,
      "unidad_concentracion": "mg",
      "es_divisible": false
    }
  ]
};
