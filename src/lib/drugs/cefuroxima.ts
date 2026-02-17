import type { Drug } from '@/lib/types';

export const cefuroximaDrug: Drug = {
    "id": "cefuroxima",
    "meta_data": {
        "nombre_generico": "Cefuroxima",
        "nombres_comerciales": ["Zinacef (inyectable)", "Ceftin (oral)"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (2ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Su uso en veterinaria es limitado por el costo y la disponibilidad de alternativas más convenientes.",
            "El profármaco oral (axetilo) tiene un sabor amargo."
        ],
        "usos_principales": "Infecciones respiratorias, de piel, ITU. Infecciones del SNC (penetra la BHE). Profilaxis quirúrgica. (Uso poco común en veterinaria)."
    },
    "informacion_cliente": [
        "Administrar la forma oral con comida. Completar el tratamiento."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Infecciones susceptibles",
                "vias": ["IV", "IM", "PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 25,
                    "dosis_min": 20,
                    "dosis_max": 30,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "20–30 mg/kg IV, IM cada 8–12 horas. O 10-20 mg/kg PO cada 12 horas."
            }
        ],
        "gato": [
            {
                "indicacion": "Infecciones susceptibles",
                "vias": ["IV", "IM", "PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 25,
                    "dosis_min": 20,
                    "dosis_max": 30,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "20–30 mg/kg IV, IM cada 8–12 horas. O 10-20 mg/kg PO cada 12 horas."
            }
        ],
        "caballo": [
            {
                "indicacion": "Infecciones susceptibles",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 20,
                    "dosis_min": 10,
                    "dosis_max": 30,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8 horas",
                    "intervalo_horas": 8
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Malestar GI (vómitos, diarrea) - común con la forma oral.",
            "Dolor en el sitio de inyección (IM).",
            "Reacciones de hipersensibilidad (raras)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Antiácidos/Bloqueadores H2",
                "efecto": "Reducen la absorción oral.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa malestar GI. Dosis altas pueden causar neurotoxicidad."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Espectro intermedio. Activo contra Gram-positivos (similar a 1ª gen) y con mayor actividad contra Gram-negativos (H. influenzae, E. coli, Klebsiella) que 1ª gen. Penetra en el SNC.",
        "farmacocinetica": "Oral (axetilo): Profármaco, absorción variable (~30-50%, mejora con comida). Parenteral (sódica): Buena distribución. Excreción renal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos (Cefuroxima axetilo)",
            "concentracion_texto": "125 mg, 250 mg, 500 mg",
            "valor_concentracion": 125,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Polvo para inyección (Cefuroxima sódica)",
            "concentracion_texto": "750 mg, 1.5 g por vial",
            "valor_concentracion": 750,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
