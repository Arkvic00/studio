import type { Drug } from '@/lib/types';

export const calcioOralDrug: Drug = {
    "id": "calcio_oral_carbonato_gluconato_lactato",
    "meta_data": {
        "nombre_generico": "Calcio Oral (Carbonato/Gluconato/Lactato)",
        "nombres_comerciales": ["Tums", "Caltrate", "Oscal", "Genéricos"],
        "grupo_farmacologico": "Suplemento electrolítico; Antiácido; Quelante de fosfato",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "El Carbonato de Calcio contiene el mayor porcentaje de calcio elemental (~40%). El Gluconato (~9%) y Lactato (~13%) contienen menos.",
            "El Carbonato necesita ácido para disolverse, por lo que es menos ideal en pacientes que toman antiácidos potentes (omeprazol)."
        ],
        "usos_principales": "Suplemento para prevenir o tratar la hipocalcemia crónica (p. ej., hipoparatiroidismo, ERC). Quelante de fosfato en ERC (usar Carbonato de Calcio). Antiácido (Carbonato de Calcio)."
    },
    "informacion_cliente": [
        "Administrar según las indicaciones (con o sin comida, dependiendo del propósito). Se requieren análisis de sangre periódicos. No administrar al mismo tiempo que otros medicamentos."
    ],
    "monitoreo_paciente": [
        "Niveles de calcio sérico (total e ionizado).",
        "Niveles de fósforo sérico (si se usa como quelante)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Hipocalcemia (mantenimiento)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 37.5,
                    "dosis_min": 25,
                    "dosis_max": 50,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "dividido",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "25–50 mg/kg/día de Calcio elemental PO, dividido."
            },
            {
                "indicacion": "Quelante de fosfato (Carbonato)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 100,
                    "dosis_min": 50,
                    "dosis_max": 150,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "dividido con las comidas",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "50–150 mg/kg/día de Carbonato de Calcio PO, dividido con las comidas."
            }
        ],
        "gato": [
            {
                "indicacion": "Hipocalcemia (mantenimiento)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 30,
                    "dosis_min": 20,
                    "dosis_max": 40,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "dividido",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "20–40 mg/kg/día de Calcio elemental PO, dividido."
            },
            {
                "indicacion": "Quelante de fosfato (Carbonato)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 75,
                    "dosis_min": 50,
                    "dosis_max": 100,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "dividido con las comidas",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "50–100 mg/kg/día de Carbonato de Calcio PO, dividido con las comidas."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipercalcemia.",
            "Pacientes con urolitos de oxalato de calcio (relativa)."
        ],
        "efectos_adversos": [
            "Hipercalcemia (con dosis altas o en pacientes susceptibles).",
            "Estreñimiento.",
            "Flatulencia (con carbonato).",
            "Malestar GI."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Reduce la absorción de Tetraciclinas, Fluoroquinolonas, Digoxina, Hierro",
                "efecto": "Administrar con horas de diferencia.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Diuréticos tiazídicos",
                "efecto": "Aumentan el riesgo de hipercalcemia.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Corticosteroides",
                "efecto": "Disminuyen la absorción de calcio.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Puede causar hipercalcemia. Descontinuar. Manejar la hipercalcemia si es severa."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Proporciona calcio elemental para absorción intestinal. El Carbonato de Calcio también actúa como antiácido y quelante de fosfato. Mantiene o aumenta los niveles de calcio sérico. Neutraliza el ácido gástrico (carbonato). Se une al fosfato dietético (carbonato).",
        "farmacocinetica": "Absorción intestinal variable (requiere ambiente ácido y Vitamina D). El carbonato requiere ácido gástrico para disolverse; el gluconato y lactato no. Excreción renal del calcio absorbido."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos/Masticables (Carbonato)",
            "concentracion_texto": "Concentraciones variables (expresadas como mg de Ca elemental o mg de Carbonato de Ca).",
            "valor_concentracion": 0,
            "unidad_concentracion": "",
            "es_divisible": true
        },
        {
            "tipo": "Comprimidos (Gluconato, Lactato)",
            "concentracion_texto": "Concentraciones variables.",
            "valor_concentracion": 0,
            "unidad_concentracion": "",
            "es_divisible": true
        },
        {
            "tipo": "Polvo, Líquido",
            "concentracion_texto": "Varios.",
            "valor_concentracion": 0,
            "unidad_concentracion": "",
            "es_divisible": false
        }
    ]
};
