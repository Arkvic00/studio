import type { Drug } from '@/lib/types';

export const colchicinaDrug: Drug = {
    "id": "colchicina",
    "meta_data": {
        "nombre_generico": "Colchicina",
        "nombres_comerciales": ["Colcrys"],
        "grupo_farmacologico": "Antiinflamatorio; Antifibrótico",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es un fármaco antiguo (para la gota humana) con un índice terapéutico muy estrecho.",
            "Su eficacia para la fibrosis hepática es controvertida.",
            "El SAMe y la Silimarina (cardo mariano) son hepatoprotectores más comunes."
        ],
        "usos_principales": "Tratamiento de la fibrosis hepática (cirrosis) en perros (para reducir la deposición de colágeno). Tratamiento de la amiloidosis (especialmente en Shar-Peis) para prevenir episodios de fiebre y fallo renal. Pericarditis idiopática (reduce la inflamación/fibrosis)."
    },
    "informacion_cliente": [
        "Este medicamento tiene un alto riesgo de efectos secundarios. Administrar con precaución. Se requieren análisis de sangre frecuentes. Suspender y contactar al veterinario si se observan vómitos, diarrea severa, fiebre o hematomas."
    ],
    "monitoreo_paciente": [
        "Hemograma completo (CBC) y panel bioquímico (hepático, renal) - frecuentemente.",
        "Signos de malestar GI (primer signo de toxicidad)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Fibrosis hepática / Amiloidosis",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.0275,
                    "dosis_min": 0.025,
                    "dosis_max": 0.03,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                }
            }
        ],
        "gato": [
            {
                "indicacion": "Amiloidosis / Fibrosis",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.02,
                    "dosis_min": 0.01,
                    "dosis_max": 0.03,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24–72 horas",
                    "intervalo_horas": 24
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Mielosupresión severa, insuficiencia renal o hepática grave.",
            "Pacientes con enfermedad GI severa.",
            "No usar en animales gestantes (teratogénico)."
        ],
        "efectos_adversos": [
            "¡RANGO TERAPÉUTICO ESTRECHO!",
            "Malestar GI (vómitos, diarrea, anorexia) - común.",
            "Mielosupresión (leucopenia, trombocitopenia) - dosis-dependiente.",
            "Miopatía, neuropatía (uso crónico)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Inhibidores del CYP3A4 y P-glicoproteína (Ciclosporina, Ketoconazol, Macrólidos)",
                "efecto": "Aumentan los niveles de colchicina, incrementando el riesgo de toxicidad grave.",
                "severidad": "Grave"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "¡Emergencia médica! Toxicidad multiorgánica (GI severo, shock, fallo orgánico, mielosupresión). Descontaminación GI agresiva (carbón activado múltiple). Cuidados de apoyo intensivos. Alta mortalidad."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Mecanismo exacto desconocido. Inhibe la motilidad de los leucocitos (especialmente neutrófilos) y la fagocitosis al unirse a la tubulina (impide la formación de microtúbulos). También inhibe la síntesis de colágeno (antifibrótico). Reduce la inflamación (especialmente la asociada a la gota) y reduce la fibrosis (cicatrización).",
        "farmacocinetica": "Absorción oral rápida. Se concentra en los leucocitos. Metabolismo hepático. Larga vida media (recirculación enterohepática). Excreción renal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "0.6 mg",
            "valor_concentracion": 0.6,
            "unidad_concentracion": "mg",
            "es_divisible": true
        }
    ]
};
