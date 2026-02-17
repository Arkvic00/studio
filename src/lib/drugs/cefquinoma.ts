import type { Drug } from '@/lib/types';

export const cefquinomaDrug: Drug = {
    "id": "cefquinoma",
    "meta_data": {
        "nombre_generico": "Cefquinoma",
        "nombres_comerciales": ["Cobactan", "Ceffect"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (4ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Cefalosporina de 4ª generación de uso veterinario (principalmente ganado).",
            "Reservada para infecciones graves o resistentes."
        ],
        "usos_principales": "Tratamiento de infecciones respiratorias (neumonía) en bovinos y cerdos. Tratamiento de mastitis en bovinos (intramamaria y sistémica). Tratamiento de septicemia en terneros. Infecciones de piel/tejidos blandos en cerdos."
    },
    "informacion_cliente": [
        "Medicamento para ganado. Seguir los tiempos de retiro de carne y leche especificados."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos (fiebre, recuento celular)."
    ],
    "parametros_dosificacion": {
        "bovino": [
            {
                "indicacion": "Enfermedad respiratoria bovina",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 1,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas por 3–5 días",
                    "intervalo_horas": 24
                }
            },
            {
                "indicacion": "Mastitis (sistémica)",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 1,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas por 2 días",
                    "intervalo_horas": 24
                }
            },
            {
                "indicacion": "Mastitis (intramamaria)",
                "vias": ["Intramamaria"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "jeringa"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas por 2-3 dosis",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "1 jeringa (75 mg) en el cuarto afectado cada 12 horas por 2-3 dosis."
            }
        ],
        "cerdo": [
            {
                "indicacion": "Enfermedad respiratoria",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 2,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas por 3 días",
                    "intervalo_horas": 24
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Reacciones de hipersensibilidad.",
            "Hinchazón local en el sitio de inyección."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "No mezclar con otros productos en la misma jeringa.",
                "efecto": "",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Amplio espectro (similar a Cefepima). Activo contra Gram-positivos y Gram-negativos (incluyendo Enterobacteriaceae). Alta estabilidad frente a beta-lactamasas.",
        "farmacocinetica": "Baja absorción oral. Administración parenteral. Baja unión a proteínas. Excreción renal (sin cambios)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección (suspensión)",
            "concentracion_texto": "25 mg/mL",
            "valor_concentracion": 25,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        },
        {
            "tipo": "Infusión intramamaria",
            "concentracion_texto": "75 mg/jeringa",
            "valor_concentracion": 75,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
