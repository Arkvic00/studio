import type { Drug } from '@/lib/types';

export const ciprofloxacinaDrug: Drug = {
    "id": "ciprofloxacina",
    "meta_data": {
        "nombre_generico": "Ciprofloxacina",
        "nombres_comerciales": ["Cipro", "Ciloxan (oftálmico)"],
        "grupo_farmacologico": "Antibiótico; Fluoroquinolona",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "La Enrofloxacina (Baytril) y la Marbofloxacina (Zeniquin) son fluoroquinolonas veterinarias preferidas debido a su absorción oral fiable y mejor farmacocinética.",
            "La ciprofloxacina es el metabolito activo de la enrofloxacina."
        ],
        "usos_principales": "Tratamiento de infecciones susceptibles (Gram-negativas) donde la absorción oral no es crítica (p. ej., ITU baja). Oftálmico: Tratamiento de conjuntivitis bacteriana, úlceras corneales. (Generalmente NO se recomienda para uso sistémico en veterinaria)."
    },
    "informacion_cliente": [
        "No administrar a animales jóvenes (cachorros/gatitos). No administrar con antiácidos o productos lácteos."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Infecciones susceptibles (ITU)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 15,
                    "dosis_min": 10,
                    "dosis_max": 20,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "10–20 mg/kg PO cada 12 horas. (No usar en cachorros)."
            }
        ],
        "gato": [
            {
                "indicacion": "Infecciones susceptibles (ITU)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 12.5,
                    "dosis_min": 10,
                    "dosis_max": 15,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "10–15 mg/kg PO cada 12 horas. (Absorción muy pobre. No usar en gatitos)."
            }
        ],
        "aveReptil": [
            {
                "indicacion": "Infecciones Gram-negativas",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 15,
                    "dosis_min": 10,
                    "dosis_max": 20,
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
        "contraindicaciones": [
            "Hipersensibilidad a las quinolonas.",
            "Animales en crecimiento (cachorros/gatitos) - ¡Riesgo de artropatía (daño al cartílago articular)!",
            "Pacientes con trastornos convulsivos (puede reducir el umbral)."
        ],
        "efectos_adversos": [
            "Artropatía (lesión del cartílago) en animales jóvenes en crecimiento.",
            "Malestar GI (vómitos, diarrea).",
            "Efectos sobre el SNC (temblores, convulsiones) - raros.",
            "Retinopatía (ceguera) en gatos con dosis altas (más asociado con Enrofloxacina)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Antiácidos, sucralfato, suplementos de Calcio/Hierro/Magnesio",
                "efecto": "Quelan la ciprofloxacina oral, impidiendo su absorción. Administrar con horas de diferencia.",
                "severidad": "Importante"
            },
            {
                "farmaco": "Teofilina",
                "efecto": "Aumenta los niveles de teofilina (riesgo de toxicidad).",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa malestar GI. Dosis altas pueden causar neurotoxicidad o daño cartilaginoso."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la ADN girasa bacteriana (topoisomerasa II), impidiendo la replicación y transcripción del ADN. Es bactericida y dependiente de la concentración. Amplio espectro. Excelente actividad contra Gram-negativos (incluyendo Pseudomonas, E. coli, Klebsiella). Actividad moderada contra Gram-positivos (Staph). Pobre contra anaerobios.",
        "farmacocinetica": "Absorción oral pobre e irregular en perros y gatos (a diferencia de humanos). Metabolismo hepático. Excreción renal y biliar."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "100 mg, 250 mg, 500 mg, 750 mg",
            "valor_concentracion": 100,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Suspensión oral",
            "concentracion_texto": "250 mg/5 mL, 500 mg/5 mL",
            "valor_concentracion": 250,
            "unidad_concentracion": "mg/5mL",
            "es_divisible": false
        },
        {
            "tipo": "Inyección",
            "concentracion_texto": "10 mg/mL",
            "valor_concentracion": 10,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        },
        {
            "tipo": "Solución/Ungüento oftálmico",
            "concentracion_texto": "0.3% (3 mg/mL)",
            "valor_concentracion": 3,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
