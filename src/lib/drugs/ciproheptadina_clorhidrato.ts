import type { Drug } from '@/lib/types';

export const ciproheptadinaClorhidratoDrug: Drug = {
    "id": "ciproheptadina_clorhidrato",
    "meta_data": {
        "nombre_generico": "Ciproheptadina Clorhidrato",
        "nombres_comerciales": ["Periactin"],
        "grupo_farmacologico": "Antihistamínico (H1, 1ª Generación); Antiserotoninérgico",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es uno de los estimulantes del apetito más comunes en gatos.",
            "La Mirtazapina es otra opción popular (y a menudo más efectiva) como estimulante del apetito."
        ],
        "usos_principales": "Estimulante del apetito (especialmente en gatos). Tratamiento del prurito en perros y gatos (menos efectivo). Tratamiento adyuvante del síndrome serotoninérgico (antídoto). Tratamiento del asma felino (propiedades antiserotoninérgicas/antihistamínicas)."
    },
    "informacion_cliente": [
        "Puede causar somnolencia o, a veces, agitación."
    ],
    "monitoreo_paciente": [
        "Aumento del apetito.",
        "Reducción del prurito.",
        "Nivel de sedación."
    ],
    "parametros_dosificacion": {
        "gato": [
            {
                "indicacion": "Estimulante del apetito",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg/gato"
                },
                "frecuencia": {
                    "texto_ui": "cada 12–24 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "1–4 mg/gato PO cada 12–24 horas."
            },
            {
                "indicacion": "Prurito/Asma",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "dosis_recomendada": 2,
                    "unidad_calculo": "mg/gato"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                }
            }
        ],
        "perro": [
            {
                "indicacion": "Prurito",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 1.15,
                    "dosis_min": 0.3,
                    "dosis_max": 2,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Glaucoma de ángulo estrecho, retención urinaria."
        ],
        "efectos_adversos": [
            "Sedación, letargo (común).",
            "Efectos anticolinérgicos (boca seca, retención urinaria).",
            "Excitación paradójica (especialmente en gatos)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Potencia otros depresores del SNC.",
                "efecto": "",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Puede inhibir el efecto de los ISRS (Fluoxetina).",
                "efecto": "",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa sedación severa o excitación del SNC. Tratar sintomáticamente."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Antagonista potente del receptor de histamina H1 y del receptor de serotonina (5-HT2). Produce efectos antihistamínicos (reduce el prurito), antiserotoninérgicos (aumenta el apetito) y anticolinérgicos leves.",
        "farmacocinetica": "Buena absorción oral. Metabolismo hepático."
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
            "tipo": "Jarabe",
            "concentracion_texto": "2 mg/5 mL (0.4 mg/mL)",
            "valor_concentracion": 0.4,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
