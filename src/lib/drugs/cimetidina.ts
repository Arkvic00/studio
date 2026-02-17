import type { Drug } from '@/lib/types';

export const cimetidinaDrug: Drug = {
    "id": "cimetidina",
    "meta_data": {
        "nombre_generico": "Cimetidina",
        "nombres_comerciales": ["Tagamet"],
        "grupo_farmacologico": "Bloqueador H2 (Antagonista del receptor de Histamina H2)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es el bloqueador H2 menos potente y requiere la dosificación más frecuente (cada 6-8h).",
            "Debido a sus interacciones farmacológicas (inhibidor de P450) y dosificación frecuente, ha sido reemplazado en gran medida por la Famotidina (Pepcid)."
        ],
        "usos_principales": "Tratamiento y prevención de úlceras gástricas y duodenales. Tratamiento de la esofagitis por reflujo. Prevención de la gastritis erosiva (p. ej., inducida por AINEs o esteroides). Reducción de la secreción de ácido en gastrinomas."
    },
    "informacion_cliente": [
        "Administrar según las indicaciones. Puede interactuar con muchos otros medicamentos."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos (vómitos, melena, anorexia).",
        "pH gástrico (si es posible)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Antiulceroso",
                "vias": ["PO", "IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 7.5,
                    "dosis_min": 5,
                    "dosis_max": 10,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 6–8 horas",
                    "intervalo_horas": 6
                }
            }
        ],
        "gato": [
            {
                "indicacion": "Antiulceroso",
                "vias": ["PO", "IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 7.5,
                    "dosis_min": 5,
                    "dosis_max": 10,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 6–8 horas",
                    "intervalo_horas": 6
                }
            }
        ],
        "caballo": [
            {
                "indicacion": "Úlceras gástricas",
                "vias": ["PO", "IV"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 15,
                    "dosis_min": 10,
                    "dosis_max": 20,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 6-8h",
                    "intervalo_horas": 6
                },
                "notas_tecnicas": "10–20 mg/kg PO cada 6-8h O 6.6 mg/kg IV cada 6h."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Precaución en disfunción hepática o renal severa."
        ],
        "efectos_adversos": [
            "Generalmente seguro.",
            "Efectos sobre el SNC (confusión, mareos) - raros, más en pacientes con insuficiencia renal.",
            "Puede tener efectos antiandrogénicos leves (ginecomastia) con uso crónico."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "¡Potente inhibidor del citocromo P450! Aumenta los niveles de muchos fármacos (Diazepam, lidocaína, teofilina, metronidazol, fenobarbital, warfarina).",
                "efecto": "",
                "severidad": "Importante"
            },
            {
                "farmaco": "Reduce la absorción de fármacos que requieren ácido (Ketoconazol, itraconazol, cefpodoxima).",
                "efecto": "",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Antiácidos",
                "efecto": "Reducen la absorción de cimetidina. Administrar con 2 horas de diferencia.",
                "severidad": "Leve"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro. Dosis altas pueden causar arritmias o confusión."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Bloquea competitivamente los receptores H2 en las células parietales del estómago, inhibiendo la secreción de ácido gástrico (especialmente la estimulada por histamina y gastrina). Reduce la producción de ácido gástrico y aumenta el pH gástrico.",
        "farmacocinetica": "Buena absorción oral (aunque errática). Metabolismo hepático. Excreción renal. Vida media corta (requiere dosificación frecuente)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "100 mg, 200 mg, 300 mg, 400 mg, 800 mg",
            "valor_concentracion": 100,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Líquido oral",
            "concentracion_texto": "300 mg/5 mL (60 mg/mL)",
            "valor_concentracion": 60,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        },
        {
            "tipo": "Inyección",
            "concentracion_texto": "150 mg/mL",
            "valor_concentracion": 150,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
