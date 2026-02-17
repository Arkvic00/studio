import type { Drug } from '@/lib/types';

export const citratoDePotasioDrug: Drug = {
    "id": "citrato_de_potasio",
    "meta_data": {
        "nombre_generico": "Citrato de Potasio",
        "nombres_comerciales": ["Urocit-K"],
        "grupo_farmacologico": "Alcalinizante urinario; Suplemento de potasio",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es el pilar de la prevención médica de cálculos de oxalato de calcio, a menudo usado junto con dietas de prescripción (p. ej., Hill's c/d Multicare, Royal Canin SO).",
            "El bicarbonato de sodio es otra opción alcalinizante, pero el citrato de potasio es preferido."
        ],
        "usos_principales": "Prevención de la recurrencia de cálculos urinarios de oxalato de calcio en perros y gatos (alcaliniza la orina e inhibe los cristales). Prevención de cálculos de urato y cistina (requieren orina alcalina). Corrección de la hipopotasemia en pacientes con acidosis metabólica (p. ej., ERC)."
    },
    "informacion_cliente": [
        "Administrar con comida. Se requiere monitoreo regular de la orina."
    ],
    "monitoreo_paciente": [
        "pH urinario (objetivo 7.0-7.5).",
        "Análisis de orina (para cristales de oxalato).",
        "Niveles de potasio sérico (K+).",
        "Función renal."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Prevención de cálculos de Oxalato de Ca",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 100,
                    "dosis_min": 50,
                    "dosis_max": 150,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "dividido cada 12 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "50–150 mg/kg/día PO, dividido cada 12 horas. (Objetivo pH urinario 7.0-7.5)."
            }
        ],
        "gato": [
            {
                "indicacion": "Prevención de cálculos de Oxalato de Ca",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 70,
                    "dosis_min": 40,
                    "dosis_max": 100,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "dividido cada 12 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "40–100 mg/kg/día PO, dividido cada 12 horas. (Objetivo pH urinario 7.0-7.5)."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipercaliemia.",
            "Insuficiencia renal severa (oliguria/anuria).",
            "Infecciones del tracto urinario activas (especialmente por bacterias productoras de ureasa, como Staphylococcus o Proteus) - (la alcalinización empeorará los cálculos de estruvita).",
            "Alcalosis metabólica."
        ],
        "efectos_adversos": [
            "Generalmente seguro.",
            "Malestar GI (vómitos, diarrea).",
            "Hipercaliemia (si la dosis es excesiva o hay insuficiencia renal)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "IECA (Enalapril), Espironolactona",
                "efecto": "Aumentan el riesgo de hipercaliemia.",
                "severidad": "Importante"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Malestar GI e hipercaliemia. Tratar la hipercaliemia si es grave (fluidos, insulina/dextrosa)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Se absorbe y metaboliza en el hígado a bicarbonato (un álcali). El bicarbonato se excreta en la orina, aumentando el pH urinario (alcalinizante). El citrato en la orina también se une al calcio, inhibiendo la formación de cristales de oxalato de calcio. Alcaliniza la orina. Inhibe la cristalización de oxalato de calcio. Proporciona potasio.",
        "farmacocinetica": "Buena absorción oral. Metabolismo hepático a bicarbonato."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "5 mEq (540 mg), 10 mEq (1080 mg)",
            "valor_concentracion": 540,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Polvo, Gránulos",
            "concentracion_texto": "Varios",
            "valor_concentracion": 0,
            "unidad_concentracion": "",
            "es_divisible": true
        }
    ]
};
