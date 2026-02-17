import type { Drug } from '@/lib/types';

export const acetatoDeCalcioDrug: Drug = {
    "id": "acetato_de_calcio",
    "meta_data": {
        "nombre_generico": "Acetato de Calcio",
        "nombres_comerciales": ["PhosLo", "Phoslyra (solución)", "Eliphos"],
        "grupo_farmacologico": "Quelante de fosfato; Suplemento de calcio",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es un quelante de fosfato más potente (se une a más fósforo por mg) que el carbonato de calcio, pero también aporta calcio.",
            "El hidróxido de aluminio es una alternativa si la hipercalcemia es una preocupación."
        ],
        "usos_principales": "Quelante de fosfato para el manejo de la hiperfosfatemia en pacientes con enfermedad renal crónica (ERC), especialmente si también son hipocalcémicos. Fuente de suplemento de calcio oral (menos común que carbonato o gluconato)."
    },
    "informacion_cliente": [
        "Debe administrarse mezclado con la comida para que funcione como quelante de fósforo. Se requieren análisis de sangre regulares para monitorear los niveles de calcio y fósforo."
    ],
    "monitoreo_paciente": [
        "Niveles de fósforo sérico.",
        "Niveles de calcio sérico (total e ionizado).",
        "Producto Ca x P.",
        "Signos de hipercalcemia (PU/PD, letargo)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Quelante de fosfato (ERC)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 80,
                    "dosis_min": 60,
                    "dosis_max": 100,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "dividido con cada comida",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "60–100 mg/kg/día PO (de Acetato de Ca), dividido con cada comida. Ajustar según niveles de fósforo y calcio."
            }
        ],
        "gato": [
            {
                "indicacion": "Quelante de fosfato (ERC)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 80,
                    "dosis_min": 60,
                    "dosis_max": 100,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "dividido con cada comida",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "60–100 mg/kg/día PO (de Acetato de Ca), dividido con cada comida. Ajustar según niveles de fósforo y calcio."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipercalcemia.", "Hiperfosfatemia severa con producto Ca x P elevado (>60-70 mg²/dL²)."],
        "efectos_adversos": ["Hipercalcemia (principal preocupación).", "Estreñimiento.", "Malestar GI (náuseas, vómitos)."],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Reduce la absorción de Tetraciclinas, Fluoroquinolonas",
                "efecto": "Administrar con horas de diferencia.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Diuréticos tiazídicos",
                "efecto": "Aumentan el riesgo de hipercalcemia.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Puede causar hipercalcemia. Descontinuar. Manejar la hipercalcemia (fluidos IV, furosemida)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Como quelante de fosfato: Reacciona con el fosfato de la dieta en el intestino, formando fosfato de calcio insoluble, que se excreta en las heces. Aporta calcio elemental. Reduce la absorción de fósforo de la dieta. Aumenta los niveles de calcio sérico.",
        "farmacocinetica": "La absorción de calcio es variable (influenciada por Vit D, pH intestinal). El acetato se absorbe y metaboliza. Excreción fecal (fosfato de calcio) y renal (calcio absorbido)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Cápsulas/Comprimidos",
            "concentracion_texto": "Equivalente a 169 mg de Calcio elemental por 667 mg de Acetato de Ca.",
            "valor_concentracion": 169,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Solución oral (Phoslyra)",
            "concentracion_texto": "169 mg Ca elemental / 5 mL",
            "valor_concentracion": 169,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
