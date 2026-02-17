import type { Drug } from '@/lib/types';

export const crofelemerDrug: Drug = {
    "id": "crofelemer",
    "meta_data": {
        "nombre_generico": "Crofelemer",
        "nombres_comerciales": ["Canalevia-CA1 (perros)", "Mytesi (humanos)"],
        "grupo_farmacologico": "Antidiarreico; Inhibidor de la secreción de cloruro",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es un nuevo mecanismo de acción para la diarrea (antisecretor).",
            "Proviene de la savia de un árbol (Croton lechleri).",
            "La aprobación condicional (CA1) significa que se necesita más investigación para la aprobación completa."
        ],
        "usos_principales": "Tratamiento de la diarrea no infecciosa en perros (p. ej., diarrea inducida por quimioterapia). Aprobación condicional (CA1) para diarrea inducida por quimioterapia en perros."
    },
    "informacion_cliente": [
        "Administrar las pastillas enteras. Este medicamento trata los síntomas de la diarrea, no la causa subyacente. Contactar al veterinario si la diarrea empeora o persiste."
    ],
    "monitoreo_paciente": [
        "Resolución de la diarrea.",
        "Hidratación."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Diarrea no infecciosa (inducida por quimio)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 2,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas por 3 días",
                    "intervalo_horas": 12
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "No usar en diarrea infecciosa (podría prolongar la enfermedad al reducir el aclaramiento).",
            "Obstrucción GI."
        ],
        "efectos_adversos": [
            "Generalmente bien tolerado.",
            "Disminución del apetito, heces blandas (raro).",
            "Aumento de ALT, BUN (raro)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "No se esperan interacciones sistémicas significativas.",
                "efecto": "",
                "severidad": "Leve"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Información limitada. Probablemente seguro."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibidor de los canales de cloruro CFTR y CaCC en el lumen intestinal. Bloquea la secreción de cloruro (y por lo tanto de agua) hacia el intestino. Reduce la secreción de agua en el intestino, normalizando la consistencia de las heces y reduciendo la diarrea acuosa (antisecretor).",
        "farmacocinetica": "Actúa localmente en el intestino. Mínima absorción sistémica. Excreción fecal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos de liberación retardada (perros)",
            "concentracion_texto": "125 mg",
            "valor_concentracion": 125,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
