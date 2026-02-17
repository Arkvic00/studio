import type { Drug } from '@/lib/types';

export const hidroxidoAluminioDrug: Drug = {
    "id": "hidroxido_aluminio",
    "meta_data": {
      "nombre_generico": "Hidróxido de Aluminio",
      "nombres_comerciales": ["Amphojel", "Alternagel"],
      "grupo_farmacologico": "Quelante de Fosfatos / Antiácido",
      "status_regulatorio": "Uso extra-label en perros y gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Uso principal en veterinaria es como quelante de fósforo en enfermedad renal.",
        "Debe mezclarse con la comida para que sea efectivo.",
        "El estreñimiento es el efecto secundario más común.",
        "Menos efectivo como antiácido en rumiantes."
      ],
      "usos_principales": "Control de hiperfosfemia en enfermedad renal crónica (perros y gatos) y como antiácido gástrico."
    },
    "informacion_cliente": [
      "Mezclar muy bien con la comida; el sabor puede ser rechazado por gatos.",
      "Si el animal se estriñe mucho, contactar al veterinario.",
      "Separar de otros medicamentos por al menos 2 horas."
    ],
    "monitoreo_paciente": [
      "Fósforo sérico (cada 2-4 semanas al inicio).",
      "Calcio sérico.",
      "Estado de las heces."
    ],
    "interferencia_laboratorio": [
      "Fósforo: Disminución de niveles séricos (efecto deseado)."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Hiperfosfemia (IRC)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 65,
            "dosis_min": 30,
            "dosis_max": 100,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dividido en cada comida", "intervalo_horas": 8 },
          "notas_tecnicas": "Ajustar dosis según niveles de fósforo sérico."
        }
      ],
      "gato": [
        {
          "indicacion": "Hiperfosfemia (IRC)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 60,
            "dosis_min": 30,
            "dosis_max": 90,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dividido en cada comida", "intervalo_horas": 8 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Obstrucción intestinal severa."],
      "precauciones": [
        "Pacientes con enfermedad renal severa (riesgo de acumulación de aluminio).",
        "Hipoestimulación gástrica."
      ],
      "efectos_adversos": [
        "Estreñimiento.",
        "Hipofosfemia (si se sobre-dosifica).",
        "Toxicidad por aluminio (rara, signos neurológicos)."
      ],
      "sobredosis": {
        "signos": ["Estreñimiento severo", "Hipofosfemia"],
        "tratamiento": "Laxantes y ajuste de dosis."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Tetraciclinas / Fluoroquinolonas / Digoxina", "efecto": "Reduce drásticamente su absorción", "severidad": "Importante" },
        { "farmaco": "Prednisona", "efecto": "Disminuye niveles de prednisona", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se une al fósforo de la dieta en el lumen intestinal para formar fosfato de aluminio insoluble, que se excreta en heces.",
      "farmacocinetica": "Acción local en el intestino. Pequeñas cantidades de aluminio se absorben y se excretan vía renal."
    },
    "presentaciones_comerciales": [
      { "tipo": "Cápsula / Polvo", "concentracion_texto": "300, 500, 600 mg", "valor_concentracion": 300, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Suspensión oral", "concentracion_texto": "320 mg/5mL", "valor_concentracion": 64, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
