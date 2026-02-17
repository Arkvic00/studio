import type { Drug } from '@/lib/types';

export const ceftiofurSodicoDrug: Drug = {
    "id": "ceftiofur_s_dico",
    "meta_data": {
        "nombre_generico": "Ceftiofur Sódico",
        "nombres_comerciales": ["Excenel", "Excenel RTU EZ"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (3ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Esta es la forma de sal sódica original de ceftiofur.",
            "El uso en perros y gatos es extra-etiqueta (el HCl está aprobado extra-etiqueta en perros)."
        ],
        "usos_principales": "Bovinos: Enfermedad respiratoria bovina (ERB), gabarro, metritis aguda. Cerdos: Enfermedad respiratoria porcina (ERP). Caballos: Infecciones respiratorias (Strep. zooepidemicus). Aves (pollitos de 1 día): Prevención de colibacilosis."
    },
    "informacion_cliente": [
        "Medicamento para ganado/caballos. Seguir los tiempos de retiro de carne y leche especificados."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos."
    ],
    "parametros_dosificacion": {
        "bovino": [
            {
                "indicacion": "ERB / Gabarro",
                "vias": ["IM", "SC"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 1.65,
                    "dosis_min": 1.1,
                    "dosis_max": 2.2,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas por 3–5 días",
                    "intervalo_horas": 24
                }
            }
        ],
        "cerdo": [
            {
                "indicacion": "ERP",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 4,
                    "dosis_min": 3,
                    "dosis_max": 5,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas por 3 días",
                    "intervalo_horas": 24
                }
            }
        ],
        "caballo": [
            {
                "indicacion": "Infecciones respiratorias",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 3.3,
                    "dosis_min": 2.2,
                    "dosis_max": 4.4,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12–24 horas",
                    "intervalo_horas": 12
                }
            }
        ],
        "avePollito": [
            {
                "indicacion": "Prevención de Colibacilosis",
                "vias": ["SC"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg/pollito"
                },
                "notas_tecnicas": "0.08–0.2 mg/pollito SC (en el cuello) al día 1."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Reacciones en el sitio de inyección (hinchazón).",
            "Reacciones de hipersensibilidad (raras)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Ninguna clínicamente significativa.",
                "efecto": "",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Amplio espectro. Activo contra Gram-positivos (Strep) y Gram-negativos (Pasteurella, Mannheimia, E. coli, Salmonella, Actinobacillus).",
        "farmacocinetica": "Se metaboliza rápidamente a desfuroilceftiofur (metabolito activo). Alta unión a proteínas. Excreción renal y fecal. Vida media ~10-12 horas."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección (polvo para reconstituir)",
            "concentracion_texto": "1 g, 4 g por vial (reconstituido a 50 mg/mL)",
            "valor_concentracion": 50,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        },
        {
            "tipo": "Inyección (suspensión RTU EZ)",
            "concentracion_texto": "50 mg/mL",
            "valor_concentracion": 50,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
