import type { Drug } from '@/lib/types';

export const clorpromazinaClorhidratoDrug: Drug = {
    "id": "clorpromazina_clorhidrato",
    "meta_data": {
        "nombre_generico": "Clorpromazina Clorhidrato",
        "nombres_comerciales": ["Thorazine"],
        "grupo_farmacologico": "Fenotiazina; Tranquilizante; Antiemético",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es un antiemético mucho más potente que la acepromacina, pero también más sedante.",
            "La acepromacina es generalmente preferida para la sedación pura.",
            "El maropitant (Cerenia) ha reemplazado en gran medida a la clorpromazina como antiemético de primera línea."
        ],
        "usos_principales": "Antiemético potente para el tratamiento de vómitos (especialmente los inducidos por quimioterapia o los intratables). Tranquilizante/Sedante (uso menos común que la acepromacina)."
    },
    "informacion_cliente": [
        "Puede causar somnolencia e hipotensión."
    ],
    "monitoreo_paciente": [
        "Control de los vómitos.",
        "Presión arterial y nivel de sedación."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Antiemético",
                "vias": ["IM", "SC", "PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.35,
                    "dosis_min": 0.2,
                    "dosis_max": 0.5,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 6–8 horas",
                    "intervalo_horas": 6
                },
                "notas_tecnicas": "0.2–0.5 mg/kg IM, SC cada 6–8 horas. O 1 mg/kg PO cada 8h."
            }
        ],
        "gato": [
            {
                "indicacion": "Antiemético",
                "vias": ["IM", "SC"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.3,
                    "dosis_min": 0.1,
                    "dosis_max": 0.5,
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
        "contraindicaciones": [
            "Hipersensibilidad a las fenotiazinas.",
            "Shock o hipotensión severa.",
            "Depresión severa del SNC.",
            "Disfunción hepática grave."
        ],
        "efectos_adversos": [
            "Hipotensión (especialmente con IV o dosis altas).",
            "Sedación, letargo.",
            "Hipotermia.",
            "Signos extrapiramidales (temblores, rigidez) - raros en dosis bajas."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Potencia otros depresores del SNC (opiáceos, anestésicos).",
                "efecto": "",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Epinefrina",
                "efecto": "Puede causar hipotensión (efecto beta no contrarrestado).",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Antiácidos orales",
                "efecto": "Reducen la absorción oral.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Hipotensión severa y depresión del SNC. Tratamiento de apoyo con fluidos IV. Usar fenilefrina o norepinefrina para la hipotensión (¡NO epinefrina!)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Bloquea los receptores de dopamina (D2) en el SNC. Bloquea la zona quimiorreceptora gatillo (CRTZ), produciendo un potente efecto antiemético. Produce sedación, relajación muscular y bloqueo alfa-adrenérgico (vasodilatación).",
        "farmacocinetica": "Absorción oral errática. Metabolismo hepático. Excreción renal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "10 mg, 25 mg, 50 mg, 100 mg, 200 mg",
            "valor_concentracion": 10,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Supositorios",
            "concentracion_texto": "2.5 mg, 5 mg, 25 mg",
            "valor_concentracion": 2.5,
            "unidad_concentracion": "mg",
            "es_divisible": false
        },
        {
            "tipo": "Inyección",
            "concentracion_texto": "25 mg/mL",
            "valor_concentracion": 25,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
