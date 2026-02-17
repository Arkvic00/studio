import type { Drug } from '@/lib/types';

export const cefotaximaSodicaDrug: Drug = {
    "id": "cefotaxima_s_dica",
    "meta_data": {
        "nombre_generico": "Cefotaxima Sódica",
        "nombres_comerciales": ["Claforan"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (3ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Una de las cefalosporinas de 3ª generación con mejor penetración en el SNC.",
            "Tiene un metabolito activo (desacetilcefotaxima)."
        ],
        "usos_principales": "Tratamiento de infecciones graves, sepsis, neumonía, meningitis, causadas por bacterias Gram-negativas susceptibles. Infecciones en neonatos (especialmente potros). Infecciones del SNC."
    },
    "informacion_cliente": [
        "Este es un antibiótico inyectable administrado en el hospital."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos (fiebre, leucocitosis).",
        "Cultivo y sensibilidad."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Infecciones graves/Sepsis",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 50,
                    "dosis_min": 20,
                    "dosis_max": 80,
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
                "indicacion": "Infecciones graves/Sepsis",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 50,
                    "dosis_min": 20,
                    "dosis_max": 80,
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
                "indicacion": "Infecciones (Neonatos/SNC)",
                "vias": ["IV"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 37.5,
                    "dosis_min": 25,
                    "dosis_max": 50,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 6–8 horas",
                    "intervalo_horas": 6
                }
            }
        ],
        "ave": [
            {
                "indicacion": "Infecciones sistémicas",
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
        ],
        "reptil": [
            {
                "indicacion": "Infecciones sistémicas",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 30,
                    "dosis_min": 20,
                    "dosis_max": 40,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12–24 horas",
                    "intervalo_horas": 12
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad a cefalosporinas o penicilinas.",
            "No mezclar con aminoglucósidos o bicarbonato de sodio en la misma línea."
        ],
        "efectos_adversos": [
            "Relativamente seguro.",
            "Dolor en el sitio de inyección (IM).",
            "Tromboflebitis (IV).",
            "Reacciones de hipersensibilidad (raras).",
            "Malestar GI (diarrea)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Aminoglucósidos",
                "efecto": "Sinergismo, pero no mezclar físicamente. Aumenta el riesgo de nefrotoxicidad.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Probenecid",
                "efecto": "Aumenta los niveles de cefotaxima.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro. Dosis altas pueden causar neurotoxicidad (convulsiones)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Amplio espectro contra Gram-negativos (Enterobacteriaceae). Buena actividad contra Gram-positivos (mejor que otras 3ª gen). Penetra la barrera hematoencefálica.",
        "farmacocinetica": "Administración parenteral. Se metaboliza parcialmente en el hígado a desacetilcefotaxima (metabolito activo). Excreción renal. Vida media corta (~1 hora)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "Polvo liofilizado de 500 mg, 1 g, 2 g por vial",
            "valor_concentracion": 500,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
