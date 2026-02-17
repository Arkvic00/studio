import type { Drug } from '@/lib/types';

export const cisapridaDrug: Drug = {
    "id": "cisaprida",
    "meta_data": {
        "nombre_generico": "Cisaprida",
        "nombres_comerciales": ["Propulsid", "Prepulsid"],
        "grupo_farmacologico": "Agente procinético (GI); Agonista del receptor de Serotonina (5-HT4)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Fue retirada del mercado humano por arritmias fatales, pero este riesgo parece ser extremadamente bajo en perros y gatos a las dosis utilizadas.",
            "Es el procinético de elección para el megacolon felino."
        ],
        "usos_principales": "Tratamiento de la estasis gástrica, reflujo gastroesofágico (GERD). Tratamiento del megacolon idiopático felino (para estimular la motilidad colónica). Tratamiento del estreñimiento crónico (constipación) en perros y gatos. Íleo postoperatorio."
    },
    "informacion_cliente": [
        "Administrar 15-30 minutos antes de la comida. Informar al veterinario sobre TODOS los medicamentos que recibe la mascota, especialmente antifúngicos (ketoconazol) o antibióticos (eritromicina)."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos (vómitos, estreñimiento, regurgitación).",
        "Signos GI (diarrea)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Procinético (Reflujo, Estasis)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.6,
                    "dosis_min": 0.2,
                    "dosis_max": 1,
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
                "indicacion": "Megacolon/Estreñimiento",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg/gato"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "2.5–7.5 mg/gato PO cada 8–12 horas."
            },
            {
                "indicacion": "Procinético (Estasis)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.6,
                    "dosis_min": 0.2,
                    "dosis_max": 1,
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
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Obstrucción o perforación GI.",
            "Uso concurrente de inhibidores del CYP3A4 (p. ej., ketoconazol, itraconazol, eritromicina) - (Riesgo de arritmias cardíacas fatales - prolongación QT - en humanos)."
        ],
        "efectos_adversos": [
            "Generalmente bien tolerado a dosis veterinarias.",
            "Diarrea, cólicos abdominales.",
            "Arritmias cardíacas (riesgo teórico, muy raro en animales)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Inhibidores del CYP3A4 (Azoles, Macrólidos)",
                "efecto": "Aumentan drásticamente los niveles de cisaprida, aumentando el riesgo de arritmias. ¡Combinación peligrosa!",
                "severidad": "Grave"
            },
            {
                "farmaco": "Anticolinérgicos (Atropina)",
                "efecto": "Antagonizan el efecto procinético.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa malestar GI severo. Tratar sintomáticamente."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Agonista del receptor 5-HT4. Estimula la liberación de acetilcolina en el plexo mientérico, aumentando la motilidad del músculo liso desde el esófago hasta el colon. Aumenta el tono del esfínter esofágico inferior, acelera el vaciado gástrico, mejora la motilidad del intestino delgado y estimula la motilidad colónica.",
        "farmacocinetica": "Buena absorción oral. Metabolismo hepático (CYP3A4)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "1 mg, 2.5 mg, 5 mg, 10 mg (compuestos)",
            "valor_concentracion": 1,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Suspensión oral",
            "concentracion_texto": "Concentraciones variables (compuesta)",
            "valor_concentracion": 0,
            "unidad_concentracion": "",
            "es_divisible": false
        }
    ]
};
