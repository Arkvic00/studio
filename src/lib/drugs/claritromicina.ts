import type { Drug } from '@/lib/types';

export const claritromicinaDrug: Drug = {
    "id": "claritromicina",
    "meta_data": {
        "nombre_generico": "Claritromicina",
        "nombres_comerciales": ["Biaxin"],
        "grupo_farmacologico": "Antibiótico; Macrólido",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Muy similar a la Azitromicina, pero requiere dosificación cada 12 horas.",
            "Es un potente inhibidor enzimático (P450), más que la azitromicina."
        ],
        "usos_principales": "Tratamiento de infecciones respiratorias (especialmente en gatos). Tratamiento de infecciones por micobacterias atípicas (p. ej., M. avium) en perros y gatos (combinado). Tratamiento de la Bartonelosis (gatos). Erradicación de Helicobacter (combinado)."
    },
    "informacion_cliente": [
        "Administrar el tratamiento completo. No refrigerar la suspensión líquida. Puede causar vómitos o diarrea."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos.",
        "Signos de malestar GI."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Infecciones susceptibles / Micobacterias",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 7.5,
                    "dosis_min": 5,
                    "dosis_max": 10,
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
                "indicacion": "Infecciones respiratorias / Micobacterias",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 7.5,
                    "dosis_min": 5,
                    "dosis_max": 10,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "O 62.5 mg/gato/dosis"
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad a los macrólidos.",
            "Disfunción hepática severa.",
            "Uso concurrente con cisaprida (riesgo de arritmias)."
        ],
        "efectos_adversos": [
            "Malestar GI (vómitos, diarrea, anorexia) - muy común.",
            "Sabor amargo (puede causar salivación en gatos).",
            "Hepatotoxicidad (rara).",
            "Arritmias (prolongación QT) - raras."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Inhibidor potente del CYP450",
                "efecto": "Aumenta los niveles de muchos fármacos (Cisaprida, teofilina, ciclosporina, digoxina).",
                "severidad": "Grave"
            },
            {
                "farmaco": "Cisaprida/Domperidona",
                "efecto": "¡Combinación peligrosa! (Riesgo de arritmia fatal).",
                "severidad": "Grave"
            },
            {
                "farmaco": "Antiácidos (Aluminio/Magnesio)",
                "efecto": "Reducen la absorción. Administrar separados.",
                "severidad": "Leve"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa malestar GI severo. Tratar sintomáticamente."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de proteínas bacterianas al unirse reversiblemente a la subunidad ribosomal 50S. Es bacteriostático. Activo contra Gram-positivos, Gram-negativos (Pasteurella, Haemophilus), anaerobios e intracelulares (Chlamydia, Mycoplasma, Bartonella). También activo contra micobacterias atípicas.",
        "farmacocinetica": "Buena absorción oral (estable en ácido). Se metaboliza en el hígado a un metabolito activo (14-hidroxiclaritromicina). Excreción renal y biliar."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "250 mg, 500 mg",
            "valor_concentracion": 250,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Suspensión oral (reconstituida)",
            "concentracion_texto": "125 mg/5 mL (25 mg/mL), 250 mg/5 mL (50 mg/mL)",
            "valor_concentracion": 25,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
