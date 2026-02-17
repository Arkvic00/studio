import type { Drug } from '@/lib/types';

export const cefoxitinaSodicaDrug: Drug = {
    "id": "cefoxitina_s_dica",
    "meta_data": {
        "nombre_generico": "Cefoxitina Sódica",
        "nombres_comerciales": ["Mefoxin"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (2ª Generación, Cefamicina)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Excelente cobertura anaeróbica.",
            "Una alternativa a la Cefoxitina es Ampicilina/Sulbactam."
        ],
        "usos_principales": "Tratamiento de infecciones anaeróbicas o mixtas. Profilaxis quirúrgica (especialmente cirugía GI/colorrectal). Peritonitis, sepsis intraabdominal."
    },
    "informacion_cliente": [
        "Este es un antibiótico inyectable administrado en el hospital."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Infecciones anaeróbicas/mixtas",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 22.5,
                    "dosis_min": 15,
                    "dosis_max": 30,
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
                "indicacion": "Infecciones anaeróbicas/mixtas",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 22.5,
                    "dosis_min": 15,
                    "dosis_max": 30,
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
                "indicacion": "Infecciones anaeróbicas",
                "vias": ["IV"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 30,
                    "dosis_min": 20,
                    "dosis_max": 40,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 6–8 horas",
                    "intervalo_horas": 6
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Dolor en el sitio de inyección (IM).",
            "Tromboflebitis (IV).",
            "Reacciones de hipersensibilidad (raras).",
            "A diferencia del Cefotetán, NO tiene la cadena NMTT (menor riesgo de sangrado)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Aminoglucósidos",
                "efecto": "Aumenta el riesgo de nefrotoxicidad.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro. Dosis altas pueden causar neurotoxicidad."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Amplio espectro. Similar a Cefotetán. Activo contra Gram-positivos, Gram-negativos y excelente actividad contra ANAEROBIOS (incluyendo B. fragilis).",
        "farmacocinetica": "Administración parenteral. No se metaboliza. Excreción renal. Vida media corta (~1 hora)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "Polvo liofilizado de 1 g, 2 g, 10 g por vial",
            "valor_concentracion": 1,
            "unidad_concentracion": "g",
            "es_divisible": false
        }
    ]
};
