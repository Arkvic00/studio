import type { Drug } from '@/lib/types';

export const ceftazidimaDrug: Drug = {
    "id": "ceftazidima",
    "meta_data": {
        "nombre_generico": "Ceftazidima",
        "nombres_comerciales": ["Fortaz", "Tazicef"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (3ª Generación, Anti-Pseudomonas)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es la cefalosporina de 3ª generación de elección para Pseudomonas.",
            "Reservada para infecciones confirmadas o fuertemente sospechadas por Pseudomonas."
        ],
        "usos_principales": "Tratamiento de infecciones graves y confirmadas por Pseudomonas aeruginosa. Tratamiento de infecciones Gram-negativas resistentes en reptiles y aves. Sepsis por Gram-negativos, neumonía, meningitis."
    },
    "informacion_cliente": [
        "Este es un antibiótico inyectable administrado en el hospital."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos.",
        "Cultivo y sensibilidad.",
        "Función renal."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Infecciones por Pseudomonas",
                "vias": ["IV", "IM", "SC"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 40,
                    "dosis_min": 30,
                    "dosis_max": 50,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                }
            }
        ],
        "gato": [
            {
                "indicacion": "Infecciones por Pseudomonas",
                "vias": ["IV", "IM", "SC"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 40,
                    "dosis_min": 30,
                    "dosis_max": 50,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                }
            }
        ],
        "caballo": [
            {
                "indicacion": "Infecciones por Pseudomonas",
                "vias": ["IV"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 37.5,
                    "dosis_min": 25,
                    "dosis_max": 50,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8 horas",
                    "intervalo_horas": 8
                }
            }
        ],
        "reptil": [
            {
                "indicacion": "Infecciones Gram-negativas",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 30,
                    "dosis_min": 20,
                    "dosis_max": 40,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 48–72 horas",
                    "intervalo_horas": 48
                }
            }
        ],
        "ave": [
            {
                "indicacion": "Infecciones por Pseudomonas",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 75,
                    "dosis_min": 50,
                    "dosis_max": 100,
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
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Generalmente bien tolerado.",
            "Dolor en el sitio de inyección (IM).",
            "Tromboflebitis (IV).",
            "Reacciones de hipersensibilidad (raras)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Aminoglucósidos",
                "efecto": "Sinergismo contra Pseudomonas, pero aumenta el riesgo de nefrotoxicidad.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro. Dosis altas pueden causar neurotoxicidad (convulsiones)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Excelente actividad contra bacterias Gram-negativas, incluyendo Pseudomonas aeruginosa. Menos activo contra Gram-positivos que otras cefalosporinas.",
        "farmacocinetica": "Administración parenteral. Penetra en el SNC (en inflamación). No se metaboliza. Excreción renal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "Polvo liofilizado de 500 mg, 1 g, 2 g, 6 g por vial",
            "valor_concentracion": 500,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
