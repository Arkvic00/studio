import type { Drug } from '@/lib/types';

export const bismutoSubsalicilatoDrug: Drug = {
  "id": "subsalicilato_bismuto",
  "meta_data": {
    "nombre_generico": "Subsalicilato de Bismuto",
    "nombres_comerciales": [
      "Pepto-Bismol",
      "Kaopectate (Nueva fórmula)"
    ],
    "grupo_farmacologico": "Antidiarrheal / Protector Gástrico",
    "status_regulatorio": "OTC. Uso extra-label."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Contiene salicilatos (relacionado con aspirina).",
      "USAR CON PRECAUCIÓN EN GATOS (riesgo de toxicidad por salicilatos).",
      "Oscurece las heces (color negro), lo que puede confundirse con melena (sangre digerida).",
      "Es radio-opaco (se ve blanco en radiografías, puede parecer hueso o metal)."
    ],
    "usos_principales": "Diarrea aguda no específica, gastritis leve, parte de terapia triple para Helicobacter."
  },
  "informacion_cliente": [
    "Las heces del animal se pondrán negras; es normal.",
    "Si el animal tiene vómitos con sangre, no usar.",
    "No dar a gatos sin supervisión estricta."
  ],
  "monitoreo_paciente": [
    "Resolución de diarrea.",
    "Hidratación.",
    "Signos de sangrado (si se usa crónico)."
  ],
  "interferencia_laboratorio": [
    "Radiografías: Aparece como material radiopaco en el tracto GI.",
    "Heces: Falso positivo a sangre oculta (guayaco) no ocurre usualmente, pero el color negro confunde."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Diarrea / Gastritis",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 1,
          "unidad_calculo": "mL/5kg (Líquido)"
        },
        "frecuencia": {
          "texto_ui": "Cada 4 a 6 horas",
          "intervalo_horas": 4
        },
        "notas_tecnicas": "Dosis genérica: 0.5 - 1 mL/kg al día dividido. Tabletas masticables: 1/4 tableta por cada 5-10 kg."
      }
    ],
    "gato": [
      {
        "indicacion": "Diarrea (USAR CON CAUTELA)",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.25,
          "unidad_calculo": "mL/kg"
        },
        "frecuencia": {
          "texto_ui": "Cada 12 a 24 horas (máximo 2 días)",
          "intervalo_horas": 12
        }
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Alergia a aspirina (salicilatos).",
      "Úlceras sangrantes activas.",
      "Gatos (dosis altas o frecuentes)."
    ],
    "precauciones": [
      "Uso con otros AINEs."
    ],
    "efectos_adversos": [
      "Heces negras.",
      "Lengua negra.",
      "Constipación.",
      "Toxicidad por salicilatos (gatos)."
    ],
    "sobredosis": {
      "signos": ["Vómitos", "Respiración rápida", "Fiebre (Signos de aspirina)"],
      "tratamiento": "Descontaminación, fluidos."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "AINEs / Esteroides",
        "efecto": "Aumenta riesgo de úlcera",
        "severidad": "Importante"
      },
      {
        "farmaco": "Tetraciclinas",
        "efecto": "El bismuto reduce su absorción (separar 2 horas)",
        "severidad": "Moderada"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "El bismuto tiene efecto antibacterial y antisecretor. El salicilato tiene efecto antiinflamatorio (antiprostaglandina).",
    "farmacocinetica": "Bismuto se excreta en heces (mínima absorción). Salicilato se absorbe (>90%) y se metaboliza en hígado."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Suspensión Oral",
      "concentracion_texto": "262 mg/15mL (Regular), 525 mg/15mL (Extra)",
      "valor_concentracion": 17.5,
      "unidad_concentracion": "mg/ml",
      "es_divisible": true
    },
    {
      "tipo": "Tableta masticable",
      "concentracion_texto": "262 mg",
      "valor_concentracion": 262,
      "unidad_concentracion": "mg",
      "es_divisible": true
    }
  ]
};
