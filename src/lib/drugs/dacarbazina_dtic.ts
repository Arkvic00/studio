import type { Drug } from '@/lib/types';

export const dacarbazinaDticDrug: Drug = {
    "id": "dacarbazina_dtic",
    "meta_data": {
        "nombre_generico": "Dacarbazina (DTIC)",
        "nombres_comerciales": ["DTIC-Dome"],
        "grupo_farmacologico": "Agente quimioterapéutico; Agente alquilante (Triazeno)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "La Lomustina (CCNU) es un agente alquilante oral que también se usa para linfoma de rescate.",
            "Es fotosensible; proteger de la luz."
        ],
        "usos_principales": "Tratamiento del linfoma (LSA) en perros (a menudo en protocolos de rescate). Tratamiento del melanoma maligno y sarcomas de tejidos blandos en perros."
    },
    "informacion_cliente": [
        "Este es un medicamento de quimioterapia. El principal efecto secundario es la supresión de la médula ósea. Usar guantes al limpiar los fluidos corporales. Informar si hay fiebre, letargo, vómitos, diarrea o hematomas."
    ],
    "monitoreo_paciente": [
        "Hemograma completo (CBC) - antes de cada dosis y en el nadir.",
        "Panel bioquímico (hepático).",
        "Control de vómitos."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Linfoma / Melanoma / Sarcomas",
                "vias": ["IV"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg/m²"
                },
                "frecuencia": {
                    "texto_ui": "cada 21 días",
                    "intervalo_horas": 504
                },
                "notas_tecnicas": "800–1000 mg/m² IV cada 21 días. O 200 mg/m² IV cada 24 horas por 5 días, repetir cada 21 días."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Mielosupresión severa preexistente."
        ],
        "efectos_adversos": [
            "VÓMITOS (agudos y severos) - muy común, ocurre durante o poco después de la infusión.",
            "MIELOSUPRESIÓN (Neutropenia, trombocitopenia) - Nadir 7-14 días.",
            "Hepatotoxicidad (necrosis hepática) - rara pero grave.",
            "Dolor en el sitio de inyección, fotosensibilidad."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Fenobarbital, Fenitoína",
                "efecto": "Pueden aumentar el metabolismo de la dacarbazina (efecto incierto).",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa mielosupresión severa y vómitos. Cuidados de apoyo intensivos."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Profármaco que requiere activación hepática (CYP450) a MTIC. Actúa como agente alquilante, metilando el ADN y ARN, lo que inhibe su síntesis. Es ciclo celular inespecífico. Citotóxico.",
        "farmacocinetica": "Administración IV. Se distribuye ampliamente (penetra BHE). Metabolismo hepático. Excreción renal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "Polvo liofilizado de 100 mg, 200 mg, 500 mg por vial",
            "valor_concentracion": 100,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
