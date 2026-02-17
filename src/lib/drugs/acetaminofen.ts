import type { Drug } from '@/lib/types';

export const acetaminofenDrug: Drug = {
    "id": "acetaminofen",
    "meta_data": {
      "nombre_generico": "Acetaminofén",
      "nombres_comerciales": [
        "Tylenol",
        "Paracetamol"
      ],
      "grupo_farmacologico": "Analgésico, Antipirético",
      "status_regulatorio": "Uso extra-label en perros y caballos; CONTRAINDICADO en gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Contraindicado en gatos y hurones a cualquier dosis.",
        "No posee actividad antiinflamatoria significativa ni inhibe función plaquetaria.",
        "Perros son más susceptibles que humanos a toxicidad en glóbulos rojos.",
        "Útil para dolor crónico en perros cuando no se pueden usar AINEs."
      ],
      "usos_principales": "Analgésico oral o antipirético en perros, caballos y pequeños mamíferos."
    },
    "informacion_cliente": [
      "NUNCA usar en gatos ni hurones.",
      "Contactar al veterinario si el perro deja de comer o si el blanco de los ojos se pone amarillento.",
      "No dar más de lo prescrito ni combinar con otros medicamentos para la fiebre sin instrucción."
    ],
    "monitoreo_paciente": [
      "Función hepática y renal (especialmente en terapia crónica).",
      "Niveles de metahemoglobina.",
      "Estado hematológico."
    ],
    "interferencia_laboratorio": [
      "Ácido 5-hidroxiindolacético urinario: Falso positivo.",
      "Glucosa: Puede interferir con ciertos métodos de medición en humanos."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Analgésico o antipirético (Extra-label)",
          "vias": ["PO", "Rectal"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 12.5,
            "dosis_min": 10,
            "dosis_max": 15,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 8 horas",
            "intervalo_horas": 8
          },
          "notas_tecnicas": "Si se usa >5 días, considerar cada 12 horas a dosis mínima."
        }
      ],
      "caballo": [
        {
          "indicacion": "Analgésico o antipirético (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una o dos veces al día",
            "intervalo_horas": 12
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Gatos (Cualquier dosis).",
        "Hurones.",
        "Petauros del azúcar (Sugar gliders) o erizos (seguridad no establecida)."
      ],
      "precauciones": [
        "Perros con sensibilidad idiosincrásica.",
        "Uso crónico: riesgo de hepatotoxicidad.",
        "Dosis altas: riesgo de metahemoglobinemia."
      ],
      "efectos_adversos": [
        "Metahemoglobinemia (especialmente gatos y dosis altas en perros).",
        "Hepatotoxicidad.",
        "Queratoconjuntivitis seca (KCS) en perros a dosis >3 veces la recomendada.",
        "Ictericia y hematuria."
      ],
      "sobredosis": {
        "signos": [
          "Edema facial/extremidades (gatos)",
          "Cianosis",
          "Ictericia",
          "Vómitos",
          "Dolor abdominal"
        ],
        "tratamiento": "N-acetilcisteína (Antídoto), SAMe, fluidoterapia, oxígeno, transfusiones de sangre."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Anestésicos locales", "efecto": "Aumentan riesgo de metahemoglobinemia", "severidad": "Moderada" },
        { "farmaco": "Barbitúricos", "efecto": "Aumentan riesgo de hepatotoxicidad", "severidad": "Importante" },
        { "farmaco": "Warfarina", "efecto": "Dosis grandes pueden potenciar efectos anticoagulantes", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición de la ciclooxigenasa y sitios de peroxidasa en la prostaglandina H2 sintetasa. Posible actividad serotoninérgica.",
      "farmacocinetica": "En perros: biodisponibilidad ~45%, vida media 1-4 h. En caballos: biodisponibilidad ~91%."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "325 mg, 500 mg", "valor_concentracion": 325, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Líquido oral", "concentracion_texto": "32 mg/mL", "valor_concentracion": 32, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
