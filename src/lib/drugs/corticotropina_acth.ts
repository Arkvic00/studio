import type { Drug } from '@/lib/types';

export const corticotropinaActhDrug: Drug = {
    "id": "corticotropina_acth",
    "meta_data": {
        "nombre_generico": "Corticotropina (ACTH)",
        "nombres_comerciales": ["Acthar Gel (repositorio)", "H.P. Acthar Gel"],
        "grupo_farmacologico": "Hormona; Agente de diagnóstico",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "La Cosintropina (Cortrosyn) ha reemplazado casi por completo a la ACTH gel para las pruebas de estimulación.",
            "La cosintropina es sintética, más pura, menos alergénica y tiene un protocolo de prueba más corto (1 hora).",
            "El gel de ACTH es muy caro."
        ],
        "usos_principales": "Agente de diagnóstico para la enfermedad de Addison (hipoadrenocorticismo) y la enfermedad de Cushing (hiperadrenocorticismo) - (Prueba de estimulación con ACTH). Terapéutico (histórico): solía usarse para tratar la insuficiencia adrenal o como antiinflamatorio (ahora reemplazado por cosintropina y corticosteroides)."
    },
    "informacion_cliente": [
        "Este es un medicamento inyectable usado solo en el hospital para pruebas de diagnóstico hormonal."
    ],
    "monitoreo_paciente": [
        "Niveles de cortisol (pre y post)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Prueba de estimulación con ACTH (Gel)",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 2.2,
                    "unidad_calculo": "UI/kg"
                },
                "notas_tecnicas": "2.2 UI/kg IM (Máximo 40 UI)."
            }
        ],
        "gato": [
            {
                "indicacion": "Prueba de estimulación con ACTH (Gel)",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 2.2,
                    "unidad_calculo": "UI/kg"
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad."],
        "efectos_adversos": [
            "Reacciones de hipersensibilidad (es una proteína).",
            "Con uso crónico: Efectos cushingoides (PU/PD/PP)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Corticosteroides",
                "efecto": "Interferirán con la prueba de estimulación con ACTH (excepto dexametasona).",
                "severidad": "Importante"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Poco probable en uso diagnóstico."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Hormona polipeptídica de la pituitaria anterior (Hormona Adrenocorticotrópica). Estimula la corteza adrenal para que produzca y libere cortisol, corticosterona y aldosterona.",
        "farmacocinetica": "Formulación en gel que proporciona absorción lenta y acción prolongada (IM/SC)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección (Gel de repositorio)",
            "concentracion_texto": "40 unidades/mL, 80 unidades/mL",
            "valor_concentracion": 40,
            "unidad_concentracion": "unidades/mL",
            "es_divisible": false
        }
    ]
};
