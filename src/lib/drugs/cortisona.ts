import type { Drug } from '@/lib/types';

export const cortisonaDrug: Drug = {
    "id": "cortisona",
    "meta_data": {
        "nombre_generico": "Cortisona",
        "nombres_comerciales": ["Cortone Acetate"],
        "grupo_farmacologico": "Corticosteroide; Glucocorticoide",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es un profármaco del cortisol (la hormona natural del estrés).",
            "Su uso ha sido completamente reemplazado por la Prednisona (que es 4-5 veces más potente y tiene menos efectos mineralocorticoides) y la Dexametasona."
        ],
        "usos_principales": "Terapia de reemplazo hormonal para la enfermedad de Addison (hipoadrenocorticismo) - (uso histórico, ahora se prefiere prednisona). Uso antiinflamatorio (ahora reemplazado por agentes más potentes)."
    },
    "informacion_cliente": [
        "Este es un corticosteroide. Puede aumentar la sed, el apetito y la micción."
    ],
    "monitoreo_paciente": [
        "Signos de Cushing (PU/PD/PP).",
        "Electrolitos (Na+, K+)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Reemplazo en Addison (histórico)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.75,
                    "dosis_min": 0.5,
                    "dosis_max": 1,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada día",
                    "intervalo_horas": 24
                }
            }
        ],
        "gato": [
            {
                "indicacion": "Reemplazo en Addison (histórico)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 1.875,
                    "dosis_min": 1.25,
                    "dosis_max": 2.5,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada día",
                    "intervalo_horas": 24
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Infecciones fúngicas sistémicas.",
            "Uso concurrente de vacunas de virus vivos.",
            "Pacientes con enfermedad hepática severa (no pueden activarla)."
        ],
        "efectos_adversos": [
            "PU/PD/PP (Poliuria/Polidipsia/Polifagia).",
            "Efectos mineralocorticoides (retención de sodio, hipertensión) más pronunciados que con prednisona.",
            "Supresión del eje HPA."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Similar a otros corticosteroides (AINEs, diuréticos, insulina).",
                "efecto": "",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Cushing iatrogénico."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Profármaco inactivo. Debe ser convertido por el hígado (enzima 11-beta-HSD) a Cortisol (hidrocortisona), que es el glucocorticoide activo. Efectos antiinflamatorios e inmunosupresores (del cortisol). También tiene actividad mineralocorticoide.",
        "farmacocinetica": "Absorción oral buena. Requiere activación hepática."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "5 mg, 10 mg, 25 mg",
            "valor_concentracion": 5,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Inyección (suspensión)",
            "concentracion_texto": "50 mg/mL",
            "valor_concentracion": 50,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
