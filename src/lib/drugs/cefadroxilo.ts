import type { Drug } from '@/lib/types';

export const cefadroxiloDrug: Drug = {
    "id": "cefadroxilo",
    "meta_data": {
        "nombre_generico": "Cefadroxilo",
        "nombres_comerciales": ["Cefa-Tabs", "Cefa-Drops", "Duricef"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (1ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Muy similar a la cefalexina, pero a menudo se dosifica cada 12 horas (o incluso cada 24h para ITU) debido a su vida media más larga.",
            "Buena opción de primera línea para pioderma canina."
        ],
        "usos_principales": "Tratamiento de infecciones de piel y tejidos blandos (pioderma, heridas, abscesos) en perros y gatos. Tratamiento de infecciones del tracto urinario (ITU) en perros y gatos."
    },
    "informacion_cliente": [
        "Administrar el tratamiento completo. Puede darse con o sin comida. Refrigerar la suspensión líquida y desecharla después de 14 días."
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
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
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
                    "texto_ui": "cada 12 horas (o una vez al día para algunas ITU)",
                    "intervalo_horas": 12
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Malestar GI (vómitos, diarrea, anorexia) - menos común que con cefalexina.",
            "Reacciones de hipersensibilidad (raras).",
            "Salivación excesiva (especialmente en gatos con la suspensión)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Probenecid",
                "efecto": "Aumenta los niveles de cefadroxilo.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro. Dosis altas causan malestar GI. Tratar sintomáticamente."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Activo principalmente contra bacterias Gram-positivas aerobias (Staphylococcus spp. - incluyendo productores de penicilinasa, Streptococcus spp.). Actividad limitada contra Gram-negativos (algunos E. coli, Klebsiella, Proteus).",
        "farmacocinetica": "Buena absorción oral (no afectada por comida). Se distribuye bien. Excreción renal (sin cambios). Vida media más larga que la cefalexina (~3-4 horas)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "50 mg, 100 mg, 200 mg, 1000 mg (1g)",
            "valor_concentracion": 50,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Cápsulas",
            "concentracion_texto": "500 mg",
            "valor_concentracion": 500,
            "unidad_concentracion": "mg",
            "es_divisible": false
        },
        {
            "tipo": "Suspensión oral (reconstituida)",
            "concentracion_texto": "50 mg/mL (Cefa-Drops)",
            "valor_concentracion": 50,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
