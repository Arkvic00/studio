import type { Drug } from '@/lib/types';

export const cromoglicatoSodicoDrug: Drug = {
    "id": "cromoglicato_s_dico_cromolyn",
    "meta_data": {
        "nombre_generico": "Cromoglicato Sódico (Cromolyn)",
        "nombres_comerciales": ["Intal (inhalador)", "Nasalcrom (nasal)", "Opticrom (oftálmico)"],
        "grupo_farmacologico": "Estabilizador de mastocitos; Antiinflamatorio",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Su uso ha sido completamente reemplazado por los corticosteroides inhalados (Fluticasona), que son mucho más efectivos.",
            "Solo funciona si se usa antes de la exposición al alérgeno; no tiene ningún efecto durante un ataque agudo."
        ],
        "usos_principales": "Tratamiento profiláctico (prevención) del asma felino o bronquitis crónica. Prevención de la obstrucción recurrente de vías aéreas (RAO) en caballos. (Uso muy poco común en veterinaria)."
    },
    "informacion_cliente": [
        "Este es un medicamento preventivo, no de rescate. Debe administrarse todos los días."
    ],
    "monitoreo_paciente": [
        "Reducción de la frecuencia de los ataques de asma."
    ],
    "parametros_dosificacion": {
        "gato": [
            {
                "indicacion": "Asma felino (profilaxis)",
                "vias": ["Inhalación"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "actuación"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "1-2 actuaciones vía espaciador cada 8–12 horas."
            }
        ],
        "caballo": [
            {
                "indicacion": "RAO (profilaxis)",
                "vias": ["Nebulización"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "80–200 mg vía nebulización cada 24 horas."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "No usar para tratar un ataque de asma agudo (no es un rescate)."
        ],
        "efectos_adversos": [
            "Irritación local de las vías respiratorias, tos, broncoespasmo (raro)."
        ],
        "interacciones_farmacologicas": [],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Extremadamente seguro."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Estabiliza las membranas de los mastocitos, previniendo su degranulación y la liberación de histamina y otros mediadores inflamatorios. Previene la inflamación alérgica y el broncoespasmo inducido por alérgenos. NO es un broncodilatador.",
        "farmacocinetica": "Absorción oral/inhalatoria muy pobre (<10%). Actúa localmente en pulmones, nariz u ojos."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inhalador de dosis medida (MDI)",
            "concentracion_texto": "800 mcg/actuación",
            "valor_concentracion": 800,
            "unidad_concentracion": "mcg",
            "es_divisible": false
        },
        {
            "tipo": "Solución para nebulización",
            "concentracion_texto": "20 mg/2 mL",
            "valor_concentracion": 20,
            "unidad_concentracion": "mg/2mL",
            "es_divisible": false
        }
    ]
};
