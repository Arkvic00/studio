import type { Drug } from '@/lib/types';

export const clorfeniraminaMaleatoDrug: Drug = {
    "id": "clorfeniramina_maleato",
    "meta_data": {
        "nombre_generico": "Clorfeniramina Maleato",
        "nombres_comerciales": ["Chlor-Trimeton", "Chlortab"],
        "grupo_farmacologico": "Antihistamínico (H1, 1ª Generación, alquilamina)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Uno de los antihistamínicos más comúnmente usados en gatos para el prurito.",
            "La eficacia contra el prurito atópico es variable."
        ],
        "usos_principales": "Tratamiento del prurito asociado con dermatitis alérgica (atopia) en perros y gatos. Tratamiento de reacciones alérgicas leves (urticaria, rinitis alérgica). Sedante leve."
    },
    "informacion_cliente": [
        "Puede causar somnolencia. No usar formulaciones de liberación prolongada a menos que lo indique el veterinario."
    ],
    "monitoreo_paciente": [
        "Reducción del prurito.",
        "Nivel de sedación."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Prurito alérgico",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.5,
                    "dosis_min": 0.2,
                    "dosis_max": 0.8,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8-12h",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "4–12 mg/perro PO cada 8–12 horas (dosis basada en el tamaño, no en mg/kg). O 0.2-0.8 mg/kg PO cada 8-12h."
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
                "notas_tecnicas": "2–4 mg/gato PO cada 12–24 horas."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Glaucoma de ángulo estrecho, hipertrofia prostática (debido a efectos anticolinérgicos)."
        ],
        "efectos_adversos": [
            "Sedación, letargo (común).",
            "Efectos anticolinérgicos (boca seca, retención urinaria, estreñimiento).",
            "Malestar GI (vómitos, diarrea).",
            "Excitación paradójica del SNC (rara)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Depresores del SNC",
                "efecto": "Potencia los efectos (sedantes, opiáceos).",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Inhibidores de la MAO (Selegilina)",
                "efecto": "Prolongan los efectos anticolinérgicos.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa sedación severa o excitación del SNC. Tratar sintomáticamente."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Antagonista competitivo del receptor de histamina H1. Reduce o previene los efectos de la histamina (prurito, vasodilatación, edema). Tiene efectos sedantes moderados y efectos anticolinérgicos leves.",
        "farmacocinetica": "Buena absorción oral. Atraviesa la barrera hematoencefálica. Metabolismo hepático. Excreción renal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "4 mg",
            "valor_concentracion": 4,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Comprimidos de liberación prolongada",
            "concentracion_texto": "8 mg, 12 mg",
            "valor_concentracion": 8,
            "unidad_concentracion": "mg",
            "es_divisible": false
        },
        {
            "tipo": "Jarabe",
            "concentracion_texto": "2 mg/5 mL",
            "valor_concentracion": 2,
            "unidad_concentracion": "mg/5mL",
            "es_divisible": false
        }
    ]
};
