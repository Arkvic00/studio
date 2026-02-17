import type { Drug } from '@/lib/types';

export const cetirizinaClorhidratoDrug: Drug = {
    "id": "cetirizina_clorhidrato",
    "meta_data": {
        "nombre_generico": "Cetirizina Clorhidrato",
        "nombres_comerciales": ["Zyrtec"],
        "grupo_farmacologico": "Antihistamínico (H1, 2ª Generación, mínimamente sedante)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es un antihistamínico de segunda generación, generalmente preferido sobre los de primera generación (difenhidramina) por sus menores efectos sedantes.",
            "La eficacia contra el prurito atópico es variable; funciona solo en una minoría de pacientes."
        ],
        "usos_principales": "Tratamiento del prurito asociado con dermatitis alérgica (atopia) en perros y gatos. Tratamiento de la rinitis alérgica, urticaria."
    },
    "informacion_cliente": [
        "Puede administrarse una o dos veces al día para las alergias. Puede causar somnolencia leve."
    ],
    "monitoreo_paciente": [
        "Reducción del prurito.",
        "Nivel de sedación."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Prurito alérgico (Atopia)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 1.25,
                    "dosis_min": 0.5,
                    "dosis_max": 2,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12–24 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "0.5–2 mg/kg PO cada 12–24 horas. (Dosis alta de 2 mg/kg puede ser más efectiva)."
            }
        ],
        "gato": [
            {
                "indicacion": "Prurito alérgico",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg/gato"
                },
                "frecuencia": {
                    "texto_ui": "cada 12–24 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "2.5–5 mg/gato PO cada 12–24 horas."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad."],
        "efectos_adversos": [
            "Generalmente muy bien tolerado.",
            "Sedación leve (menos común que con difenhidramina).",
            "Hipersalivación (especialmente en gatos).",
            "Vómitos, diarrea (raros)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Depresores del SNC",
                "efecto": "Puede causar sedación aditiva (aunque es menos sedante que otros).",
                "severidad": "Leve"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa sedación severa o agitación paradójica. Tratar sintomáticamente."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Antagonista selectivo del receptor de histamina H1 periférico. Metabolito activo de la hidroxicina. Reduce o previene los efectos de la histamina (prurito, vasodilatación, edema). Tiene mínimos efectos anticolinérgicos o sedantes porque no atraviesa bien la barrera hematoencefálica.",
        "farmacocinetica": "Buena absorción oral. No se metaboliza extensamente. Excreción renal (principalmente sin cambios)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "5 mg, 10 mg",
            "valor_concentracion": 5,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Jarabe",
            "concentracion_texto": "1 mg/mL (5 mg/5 mL)",
            "valor_concentracion": 1,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
