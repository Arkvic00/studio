import type { Drug } from '@/lib/types';

export const codeinaDrug: Drug = {
    "id": "code_na_fosfato_sulfato",
    "meta_data": {
        "nombre_generico": "Codeína (Fosfato/Sulfato)",
        "nombres_comerciales": ["Codeine Phosphate/Sulfate", "Tylenol con Codeína (#2, #3, #4)"],
        "grupo_farmacologico": "Opiáceo; Antitusivo; Analgésico",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "La Hidrocodona es un antitusivo más potente y es preferido por muchos veterinarios.",
            "La codeína es un analgésico pobre en perros porque no la convierten bien en morfina.",
            "El estreñimiento es el principal problema del uso crónico."
        ],
        "usos_principales": "Supresor de la tos (antitusivo) para la tos severa, no productiva y crónica en perros (p. ej., colapso traqueal, bronquitis crónica). Analgesia leve (raramente usado solo para esto)."
    },
    "informacion_cliente": [
        "Puede causar somnolencia y estreñimiento. Usar solo para tos seca (no productiva). No usar productos con Tylenol en gatos. Tiene potencial de abuso humano."
    ],
    "monitoreo_paciente": [
        "Reducción de la frecuencia de la tos.",
        "Nivel de sedación.",
        "Producción de heces (estreñimiento)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Antitusivo (Supresor de la tos)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 1.25,
                    "dosis_min": 0.5,
                    "dosis_max": 2,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 6–12 horas",
                    "intervalo_horas": 6
                }
            },
            {
                "indicacion": "Analgesia (combinado con Acetaminofén)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.75,
                    "dosis_min": 0.5,
                    "dosis_max": 1,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "¡Solo perros!"
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad a los opiáceos.",
            "¡NO USAR productos combinados con Acetaminofén (Tylenol) en GATOS!",
            "Pacientes con tos productiva (no debe suprimirse) o depresión respiratoria."
        ],
        "efectos_adversos": [
            "Sedación, letargo.",
            "Estreñimiento (constipación) - muy común con uso crónico.",
            "Malestar GI (náuseas, vómitos).",
            "Excitación paradójica (raro)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Potencia otros depresores del SNC (sedantes, antihistamínicos).",
                "efecto": "",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Inhibidores del CYP2D6 (Fluoxetina, Cimetidina)",
                "efecto": "Reducen la conversión a morfina, disminuyendo la analgesia.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa depresión respiratoria y del SNC, estreñimiento severo. Revertir con Naloxona."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Antitusivo: Actúa directamente sobre el centro de la tos en la médula. Analgésico: Agonista débil del receptor opioide mu. Se metaboliza (CYP2D6) a morfina (metabolito activo) para la analgesia. Potente supresor de la tos. Produce sedación y analgesia leve.",
        "farmacocinetica": "Buena absorción oral. Metabolismo hepático. Los perros tienen una capacidad limitada para convertir la codeína en morfina, por lo que su efecto analgésico es pobre en esta especie."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "15 mg, 30 mg, 60 mg",
            "valor_concentracion": 15,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "En combinación (Tylenol con Codeína)",
            "concentracion_texto": "(15 mg, 30 mg, 60 mg Codeína) + 300 mg Acetaminofén",
            "valor_concentracion": 15,
            "unidad_concentracion": "mg",
            "es_divisible": true
        }
    ]
};
