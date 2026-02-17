import type { Drug } from '@/lib/types';

export const ciclesonidaDrug: Drug = {
    "id": "ciclesonida",
    "meta_data": {
        "nombre_generico": "Ciclesonida",
        "nombres_comerciales": ["Alvesco (inhalador MDI)", "Zetonna (spray nasal)"],
        "grupo_farmacologico": "Corticosteroide (Inhalado)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Una alternativa a la fluticasona. Su ventaja teórica es que es un profármaco activado en el pulmón, lo que reduce aún más los efectos sistémicos o locales (orofaríngeos).",
            "Debe usarse junto con un broncodilatador de rescate (Albuterol) para crisis agudas."
        ],
        "usos_principales": "Tratamiento de mantenimiento de la inflamación de las vías respiratorias (asma felino, bronquitis crónica canina)."
    },
    "informacion_cliente": [
        "Este es un antiinflamatorio de mantenimiento, no un broncodilatador de rescate. Debe administrarse diariamente usando un espaciador (máscara). Puede tardar semanas en funcionar."
    ],
    "monitoreo_paciente": [
        "Frecuencia y esfuerzo respiratorio.",
        "Frecuencia de la tos."
    ],
    "parametros_dosificacion": {
        "gato": [
            {
                "indicacion": "Asma felino (mantenimiento)",
                "vias": ["Inhalación"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mcg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12–24 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "80–160 mcg (1-2 actuaciones) vía espaciador cada 12–24 horas."
            }
        ],
        "perro": [
            {
                "indicacion": "Bronquitis crónica (mantenimiento)",
                "vias": ["Inhalación"],
                "math": {
                    "tipo_calculo": "fija",
                    "dosis_recomendada": 160,
                    "unidad_calculo": "mcg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "160 mcg (1 actuación) vía espaciador cada 12 horas."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "No usar para tratar broncoespasmo agudo (no es un broncodilatador de rescate)."
        ],
        "efectos_adversos": [
            "Mínimos debido a la baja exposición sistémica.",
            "Irritación local, tos (raro).",
            "Candidiasis orofaríngea (rara en animales)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Inhibidores del CYP3A4 (Ketoconazol)",
                "efecto": "Pueden aumentar los niveles sistémicos (riesgo bajo).",
                "severidad": "Leve"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Poco probable. El uso crónico excesivo podría teóricamente causar efectos esteroideos sistémicos."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Profármaco que se convierte en des-ciclesonida (metabolito activo) por esterasas en el pulmón. Se une a receptores de glucocorticoides. Potente efecto antiinflamatorio local en las vías respiratorias.",
        "farmacocinetica": "Administración por inhalación. Mínima absorción sistémica debido a la activación local y alto metabolismo de primer paso de la porción tragada."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inhalador de dosis medida (MDI)",
            "concentracion_texto": "80 mcg/actuación, 160 mcg/actuación",
            "valor_concentracion": 80,
            "unidad_concentracion": "mcg",
            "es_divisible": false
        }
    ]
};
