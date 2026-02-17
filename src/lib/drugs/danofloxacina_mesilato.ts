import type { Drug } from '@/lib/types';

export const danofloxacinaMesilatoDrug: Drug = {
    "id": "danofloxacina_mesilato",
    "meta_data": {
        "nombre_generico": "Danofloxacina Mesilato",
        "nombres_comerciales": ["Advocin"],
        "grupo_farmacologico": "Antibiótico; Fluoroquinolona (3ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Fluoroquinolona de uso específico en ganado para ERB.",
            "El uso extra-etiqueta de fluoroquinolonas está restringido en animales de producción."
        ],
        "usos_principales": "Tratamiento de la enfermedad respiratoria bovina (ERB) asociada con Mannheimia haemolytica, Pasteurella multocida, Histophilus somni y Mycoplasma bovis en bovinos."
    },
    "informacion_cliente": [
        "Medicamento para ganado. Seguir los tiempos de retiro de carne especificados."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos de neumonía."
    ],
    "parametros_dosificacion": {
        "bovino": [
            {
                "indicacion": "Enfermedad Respiratoria Bovina (ERB)",
                "vias": ["SC"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 8,
                    "unidad_calculo": "mg/kg"
                },
                "notas_tecnicas": "8 mg/kg SC. Dosis única. O 6 mg/kg SC, repetir en 48 horas."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad a las quinolonas.",
            "Animales en crecimiento (riesgo de artropatía).",
            "Uso extra-etiqueta prohibido en aves de corral por la FDA."
        ],
        "efectos_adversos": [
            "Artropatía (lesión del cartílago) en animales jóvenes en crecimiento.",
            "Reacciones en el sitio de inyección (hinchazón transitoria).",
            "Diarrea (raro)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Antiácidos, cationes",
                "efecto": "Reducen la absorción si se administra oralmente (pero es inyectable).",
                "severidad": "Leve"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Dosis altas pueden causar signos neurológicos o artropatía."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la ADN girasa bacteriana, impidiendo la replicación del ADN. Es bactericida. Amplio espectro. Activo contra Gram-negativos (Mannheimia, Pasteurella, Histophilus) y Mycoplasma bovis.",
        "farmacocinetica": "Absorción rápida (SC). Buena distribución en tejidos (especialmente pulmón). Metabolismo hepático. Excreción biliar/fecal y renal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "180 mg/mL",
            "valor_concentracion": 180,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
