import type { Drug } from '@/lib/types';

export const clemastinaFumaratoDrug: Drug = {
    "id": "clemastina_fumarato",
    "meta_data": {
        "nombre_generico": "Clemastina Fumarato",
        "nombres_comerciales": ["Tavist"],
        "grupo_farmacologico": "Antihistamínico (H1, 1ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Antihistamínico de primera generación con efectos sedantes marcados.",
            "La eficacia es variable."
        ],
        "usos_principales": "Tratamiento del prurito asociado con dermatitis alérgica (atopia) en perros. (Uso menos común en gatos)."
    },
    "informacion_cliente": [
        "Puede causar somnolencia significativa."
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
                    "dosis_recomendada": 0.075,
                    "dosis_min": 0.05,
                    "dosis_max": 0.1,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "0.05–0.1 mg/kg PO cada 12 horas. (O dosis fijas: <10kg: 0.5 mg; 10-25kg: 1 mg; >25kg: 1.34-2.68 mg PO cada 12h)."
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
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "0.34–0.68 mg/gato PO cada 12 horas."
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
            "Efectos anticolinérgicos (boca seca, retención urinaria).",
            "Malestar GI.",
            "Excitación paradójica."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Potencia otros depresores del SNC (sedantes, opiáceos).",
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
        "mecanismo_accion": "Antagonista competitivo del receptor de histamina H1. Reduce o previene los efectos de la histamina (prurito, vasodilatación, edema). Tiene efectos sedantes y anticolinérgicos significativos.",
        "farmacocinetica": "Buena absorción oral. Metabolismo hepático."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "1.34 mg, 2.68 mg",
            "valor_concentracion": 1.34,
            "unidad_concentracion": "mg",
            "es_divisible": true
        }
    ]
};
