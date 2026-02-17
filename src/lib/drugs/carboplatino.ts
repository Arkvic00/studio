import type { Drug } from '@/lib/types';

export const carboplatinoDrug: Drug = {
    "id": "carboplatino",
    "meta_data": {
        "nombre_generico": "Carboplatino",
        "nombres_comerciales": ["Paraplatin"],
        "grupo_farmacologico": "Agente quimioterapéutico; Agente alquilante (Compuesto de platino)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Ha reemplazado en gran medida al cisplatino debido a su menor nefrotoxicidad y facilidad de administración (no requiere diuresis salina).",
            "Es seguro de usar en gatos (a diferencia del cisplatino, que es fatal).",
            "La mielosupresión es su principal limitación."
        ],
        "usos_principales": "Tratamiento de varios tipos de carcinomas y sarcomas en perros y gatos. Comúnmente usado para: Osteosarcoma (adyuvante post-amputación), Carcinoma de vejiga (TCC), Melanoma, Carcinoma de sacos anales, otros carcinomas y sarcomas."
    },
    "informacion_cliente": [
        "Este es un medicamento de quimioterapia. El principal efecto secundario es la supresión de la médula ósea (riesgo de infección o sangrado), que ocurre 2-3 semanas después del tratamiento. Se requieren análisis de sangre regulares. Informar si hay fiebre, letargo, vómitos, diarrea o hematomas. Manejar los fluidos corporales con cuidado."
    ],
    "monitoreo_paciente": [
        "Hemograma completo (CBC) - ¡CRÍTICO! Monitorear antes de cada dosis y en el nadir esperado (día 14-21).",
        "Panel bioquímico (renal) - antes de cada dosis.",
        "Signos de náuseas/vómitos."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Tumores sólidos (Carcinomas, Sarcomas)",
                "vias": ["IV"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg/m²"
                },
                "frecuencia": {
                    "texto_ui": "cada 21 días",
                    "intervalo_horas": 504
                },
                "notas_tecnicas": "270–300 mg/m² IV cada 21 días. Ajustar dosis si hay insuficiencia renal."
            }
        ],
        "gato": [
            {
                "indicacion": "Tumores sólidos (Carcinomas, Sarcomas)",
                "vias": ["IV"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg/m²"
                },
                "frecuencia": {
                    "texto_ui": "cada 21–28 días",
                    "intervalo_horas": 504
                },
                "notas_tecnicas": "200–260 mg/m² IV cada 21–28 días."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad a compuestos de platino.",
            "Mielosupresión severa preexistente.",
            "Insuficiencia renal severa."
        ],
        "efectos_adversos": [
            "MIELOSUPRESIÓN (Neutropenia, Trombocitopenia) - ¡Principal toxicidad limitante de dosis! El nadir (punto más bajo) ocurre más tarde que con otros agentes (14-21 días).",
            "Nefrotoxicidad (mucho menos común y severa que con cisplatino).",
            "Náuseas y vómitos (generalmente leves a moderados).",
            "Anorexia.",
            "Reacciones de hipersensibilidad (raras)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Aminoglucósidos y otros agentes nefrotóxicos",
                "efecto": "Aumentan el riesgo de nefrotoxicidad.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Otros agentes mielosupresores",
                "efecto": "Aumentan el riesgo de mielosupresión.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa mielosupresión severa, nefrotoxicidad. Hospitalización, cuidados de apoyo intensivos (transfusiones, antibióticos)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Análogo del cisplatino. Se hidroliza intracelularmente y forma enlaces cruzados con el ADN, interfiriendo con la replicación y transcripción del ADN y causando la muerte celular. Es ciclo celular inespecífico. Citotóxico contra células tumorales.",
        "farmacocinetica": "Administración IV. Baja unión a proteínas (a diferencia del cisplatino). Excreción principalmente renal (sin cambios)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "Polvo liofilizado de 50 mg, 150 mg, 450 mg por vial. O solución lista para usar 10 mg/mL.",
            "valor_concentracion": 10,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
