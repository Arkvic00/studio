import type { Drug } from '@/lib/types';

export const cefalexinaDrug: Drug = {
    "id": "cefalexina",
    "meta_data": {
        "nombre_generico": "Cefalexina",
        "nombres_comerciales": ["Keflex", "Rilexine (veterinario)", "Cephadex"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (1ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Uno de los antibióticos más utilizados en pequeños animales para pioderma.",
            "Cefadroxilo es muy similar, pero a menudo se dosifica cada 12-24 horas."
        ],
        "usos_principales": "Tratamiento de infecciones de piel y tejidos blandos (pioderma, heridas, abscesos) en perros y gatos. Tratamiento de infecciones del tracto urinario (ITU)."
    },
    "informacion_cliente": [
        "Administrar el tratamiento completo. Puede darse con comida para reducir las náuseas. Refrigerar la suspensión líquida y desecharla después de 14 días."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos.",
        "Signos GI."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Infecciones de piel/tejidos blandos, ITU",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 26,
                    "dosis_min": 22,
                    "dosis_max": 30,
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
                "indicacion": "Infecciones de piel/tejidos blandos, ITU",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 26,
                    "dosis_min": 22,
                    "dosis_max": 30,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                }
            }
        ],
        "huron": [
            {
                "indicacion": "Infecciones susceptibles",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 22.5,
                    "dosis_min": 15,
                    "dosis_max": 30,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Malestar GI (vómitos, diarrea, anorexia) - común, especialmente en dosis altas.",
            "Reacciones de hipersensibilidad (raras).",
            "Salivación excesiva (especialmente en gatos)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Probenecid",
                "efecto": "Aumenta los niveles de cefalexina.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro. Dosis altas causan vómitos y diarrea. Tratar sintomáticamente."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Activo principalmente contra bacterias Gram-positivas aerobias (Staphylococcus spp. - incluyendo productores de penicilinasa, Streptococcus spp.). Actividad limitada contra Gram-negativos (algunos E. coli, Klebsiella, Proteus).",
        "farmacocinetica": "Buena absorción oral (no afectada por comida). Se distribuye bien. Excreción renal (sin cambios). Vida media corta (~1.5 horas)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos/Cápsulas",
            "concentracion_texto": "250 mg, 500 mg, 750 mg",
            "valor_concentracion": 250,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Comprimidos masticables (Rilexine)",
            "concentracion_texto": "75 mg, 150 mg, 300 mg, 600 mg",
            "valor_concentracion": 75,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Suspensión oral (reconstituida)",
            "concentracion_texto": "125 mg/5 mL, 250 mg/5 mL",
            "valor_concentracion": 125,
            "unidad_concentracion": "mg/5mL",
            "es_divisible": false
        }
    ]
};
