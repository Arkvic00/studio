import type { Drug } from '@/lib/types';

export const clomipraminaClorhidratoDrug: Drug = {
    "id": "clomipramina_clorhidrato",
    "meta_data": {
        "nombre_generico": "Clomipramina Clorhidrato",
        "nombres_comerciales": ["Clomicalm (veterinario)", "Anafranil (humano)"],
        "grupo_farmacologico": "Antidepresivo tricíclico (TCA); Ansiolítico",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Aprobado para la ansiedad por separación en perros (Clomicalm).",
            "Es más serotoninérgico que la amitriptilina."
        ],
        "usos_principales": "Tratamiento de la ansiedad por separación en perros (aprobado). Tratamiento de otros trastornos de ansiedad o compulsivos en perros (p. ej., acicalamiento excesivo, granuloma acral por lamido). Tratamiento del marcaje urinario (rociado) y agresión entre gatos (gatos)."
    },
    "informacion_cliente": [
        "Este medicamento debe usarse junto con entrenamiento de modificación de la conducta. Puede tardar de 4 a 8 semanas en hacer efecto. Puede causar somnolencia o malestar estomacal al principio. No suspender abruptamente."
    ],
    "monitoreo_paciente": [
        "Eficacia en el trastorno del comportamiento (lento).",
        "Nivel de sedación.",
        "Signos GI."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Ansiedad por separación / Trastornos compulsivos",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 2,
                    "dosis_min": 1,
                    "dosis_max": 3,
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
                "indicacion": "Marcaje urinario / Ansiedad",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.625,
                    "dosis_min": 0.25,
                    "dosis_max": 1,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "O 5 mg/gato/día"
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad a los TCA.",
            "Uso concurrente (o dentro de 14 días) de inhibidores de la MAO (p. ej., selegilina).",
            "Pacientes con historial de arritmias cardíacas o convulsiones."
        ],
        "efectos_adversos": [
            "Sedación, letargo (común al inicio).",
            "Malestar GI (vómitos, diarrea, anorexia).",
            "Efectos anticolinérgicos (boca seca, retención urinaria, estreñimiento).",
            "Excitación paradójica."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Inhibidores de la MAO (Selegilina, Amitraz)",
                "efecto": "¡Riesgo de síndrome serotoninérgico! (Combinación contraindicada).",
                "severidad": "Grave"
            },
            {
                "farmaco": "Otros depresores del SNC",
                "efecto": "Aumentan la sedación.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Cimetidina, Fluoxetina",
                "efecto": "Aumentan los niveles de clomipramina.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Toxicidad grave (similar a amitriptilina): Coma, Convulsiones, Cardiotoxicidad (arritmias). Emergencia médica. Tratar con soporte, diazepam y bicarbonato de sodio."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Aumenta los niveles sinápticos de serotonina (principalmente) y norepinefrina al bloquear su recaptación. También tiene efectos anticolinérgicos y antihistamínicos leves. Produce efectos ansiolíticos.",
        "farmacocinetica": "Buena absorción oral. Metabolismo hepático a desmetilclomipramina (metabolito activo)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos (Clomicalm)",
            "concentracion_texto": "5 mg, 20 mg, 40 mg, 80 mg",
            "valor_concentracion": 5,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Comprimidos (Anafranil)",
            "concentracion_texto": "10 mg, 25 mg, 50 mg",
            "valor_concentracion": 10,
            "unidad_concentracion": "mg",
            "es_divisible": true
        }
    ]
};
