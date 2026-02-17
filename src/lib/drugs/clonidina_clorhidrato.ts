import type { Drug } from '@/lib/types';

export const clonidinaClorhidratoDrug: Drug = {
    "id": "clonidina_clorhidrato",
    "meta_data": {
        "nombre_generico": "Clonidina Clorhidrato",
        "nombres_comerciales": ["Catapres", "Duraclon (inyectable)"],
        "grupo_farmacologico": "Agonista Alfa-2 Adrenérgico (de acción central); Ansiolítico; Antihipertensivo",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Actúa de forma similar a la dexmedetomidina (Sileo), pero es de acción más lenta y menos potente.",
            "Una alternativa a las benzodiazepinas o la trazodona para la ansiedad situacional."
        ],
        "usos_principales": "Tratamiento de trastornos de ansiedad (p. ej., fobia a ruidos/tormentas, ansiedad por separación) en perros (extra-etiqueta). Antihipertensivo (raro). Adyuvante analgésico."
    },
    "informacion_cliente": [
        "Puede causar somnolencia. Administrar antes de eventos estresantes. No suspender abruptamente si se usa crónicamente."
    ],
    "monitoreo_paciente": [
        "Eficacia ansiolítica.",
        "Nivel de sedación.",
        "Frecuencia cardíaca y presión arterial (si es preocupante)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Ansiedad/Fobia a ruidos",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.03,
                    "dosis_min": 0.01,
                    "dosis_max": 0.05,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas, según sea necesario",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "0.01–0.05 mg/kg PO cada 8–12 horas, según sea necesario. (Iniciar con dosis bajas)."
            }
        ],
        "gato": [
            {
                "indicacion": "Ansiedad",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.015,
                    "dosis_min": 0.01,
                    "dosis_max": 0.02,
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
        "contraindicaciones": ["Hipersensibilidad.", "Bradicardia o bloqueo AV severos."],
        "efectos_adversos": [
            "Sedación, letargo (común).",
            "Bradicardia, hipotensión (dosis-dependiente).",
            "Boca seca, estreñimiento.",
            "Puede causar hipertensión transitoria inicial (por estimulación alfa-2 periférica) si se administra IV."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Potencia otros depresores del SNC (sedantes, opiáceos).",
                "efecto": "",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Antidepresivos tricíclicos (Amitriptilina)",
                "efecto": "Pueden reducir el efecto antihipertensivo.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa sedación severa, bradicardia, hipotensión. Tratamiento de apoyo. Puede revertirse con antagonistas alfa-2 (Atipamezol, Yohimbina)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Estimula los receptores alfa-2 adrenérgicos en el cerebro, reduciendo la liberación de norepinefrina. Esto disminuye el tono simpático. Reduce la presión arterial, la frecuencia cardíaca y la ansiedad/arousal. Tiene efectos sedantes y analgésicos leves.",
        "farmacocinetica": "Buena absorción oral. Metabolismo hepático. Excreción renal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "0.1 mg, 0.2 mg, 0.3 mg",
            "valor_concentracion": 0.1,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Parche transdérmico",
            "concentracion_texto": "(TTS-1, 2, 3)",
            "valor_concentracion": 0,
            "unidad_concentracion": "",
            "es_divisible": false
        }
    ]
};
