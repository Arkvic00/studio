import type { Drug } from '@/lib/types';

export const cefepimaClorhidratoDrug: Drug = {
    "id": "cefepima_clorhidrato",
    "meta_data": {
        "nombre_generico": "Cefepima Clorhidrato",
        "nombres_comerciales": ["Maxipime"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (4ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Antibiótico de amplio espectro reservado para infecciones graves o resistentes para limitar el desarrollo de resistencia.",
            "Buena opción empírica para sepsis mientras se esperan cultivos."
        ],
        "usos_principales": "Tratamiento de infecciones bacterianas graves, nosocomiales o resistentes a otros antibióticos, especialmente aquellas causadas por Pseudomonas o Enterobacteriaceae resistentes. Sepsis, neumonía, infecciones urinarias complicadas."
    },
    "informacion_cliente": [
        "Este es un antibiótico inyectable de amplio espectro administrado en el hospital."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos (fiebre, leucocitosis).",
        "Cultivo y sensibilidad.",
        "Función renal."
    ],
    "parametros_dosificacion": {
        "perroGato": [
            {
                "indicacion": "Infecciones graves/resistentes",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 30,
                    "dosis_min": 10,
                    "dosis_max": 50,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                }
            }
        ],
        "caballo": [
            {
                "indicacion": "Infecciones graves (Pseudomonas)",
                "vias": ["IV"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 15,
                    "dosis_min": 10,
                    "dosis_max": 20,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8-12 horas",
                    "intervalo_horas": 8
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Malestar GI (diarrea).",
            "Reacciones de hipersensibilidad.",
            "Neurotoxicidad (confusión, convulsiones) - rara, asociada con dosis altas o insuficiencia renal.",
            "Flebitis en el sitio de infusión.",
            "Discrasias sanguíneas (raras)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Aminoglucósidos",
                "efecto": "Pueden aumentar el riesgo de nefrotoxicidad.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Riesgo de neurotoxicidad. Tratamiento de apoyo. Puede eliminarse por hemodiálisis."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Amplio espectro. Combina la actividad Gram-positiva de 1ª gen con la actividad Gram-negativa mejorada de 3ª gen. Estable frente a muchas beta-lactamasas. Activo contra Pseudomonas aeruginosa y Enterobacteriaceae.",
        "farmacocinetica": "Administración parenteral. Se distribuye bien (incluyendo SNC en inflamación). Excreción renal (sin cambios)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "Polvo liofilizado de 500 mg, 1 g, 2 g por vial",
            "valor_concentracion": 500,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
