import type { Drug } from '@/lib/types';

export const aceiteMineralDrug: Drug = {
    "id": "aceite_mineral",
    "meta_data": {
        "nombre_generico": "Aceite Mineral",
        "nombres_comerciales": ["Mineral Oil", "Liquid Paraffin"],
        "grupo_farmacologico": "Laxante (lubricante); Emoliente",
        "status_regulatorio": "OTC. Uso extra-label."
    },
    "resumen_clinico": {
        "puntos_clave": [
            "El riesgo de neumonía lipídica por aspiración es la principal preocupación.",
            "Laxantes osmóticos (lactulosa, MiraLax) o emolientes (docusato) son a menudo alternativas más seguras."
        ],
        "usos_principales": "Laxante para el alivio del estreñimiento o impactación fecal (especialmente en caballos y gatos). Tratamiento de bolas de pelo en gatos. Marcador radiopaco para tránsito GI (uso limitado)."
    },
    "informacion_cliente": [
        "Administrar con precaución para evitar la aspiración. Puede mezclarse con comida. No usar a largo plazo sin consultar al veterinario."
    ],
    "monitoreo_paciente": [
        "Producción y consistencia de las heces.",
        "Signos de aspiración (tos, dificultad respiratoria)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Estreñimiento",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "dosis_recomendada": 17.5,
                    "dosis_min": 5,
                    "dosis_max": 30,
                    "unidad_calculo": "mL"
                },
                "frecuencia": { "texto_ui": "cada 12–24 horas", "intervalo_horas": 12 },
                "notas_tecnicas": "5–30 mL PO cada 12–24 horas."
            }
        ],
        "gato": [
            {
                "indicacion": "Estreñimiento/Bolas de pelo",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "dosis_recomendada": 6,
                    "dosis_min": 2,
                    "dosis_max": 10,
                    "unidad_calculo": "mL"
                },
                "frecuencia": { "texto_ui": "cada 12–24 horas", "intervalo_horas": 12 },
                "notas_tecnicas": "2–10 mL PO cada 12–24 horas."
            }
        ],
        "caballo": [
            {
                "indicacion": "Impactación/Cólico",
                "vias": ["Sonda Nasogástrica"],
                "math": {
                    "tipo_calculo": "fija",
                    "dosis_recomendada": 3,
                    "dosis_min": 2,
                    "dosis_max": 4,
                    "unidad_calculo": "Litros"
                },
                "frecuencia": { "texto_ui": "dosis única", "intervalo_horas": 0 },
                "notas_tecnicas": "2–4 Litros vía sonda nasogástrica (dosis única)."
            }
        ],
        "bovino": [
            {
                "indicacion": "Laxante",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "dosis_recomendada": 2.5,
                    "dosis_min": 1,
                    "dosis_max": 4,
                    "unidad_calculo": "Litros"
                },
                "frecuencia": { "texto_ui": "cada 12-24 horas", "intervalo_horas": 12 },
                "notas_tecnicas": "1–4 Litros PO."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Vómitos activos, disfagia, megaesófago o riesgo de aspiración (si se aspira, causa neumonía lipídica grave).",
            "Sospecha de obstrucción o perforación GI."
        ],
        "efectos_adversos": [
            "Neumonía lipídica por aspiración (grave y potencialmente fatal).",
            "Filtración anal (incontinencia oleosa).",
            "Malabsorción de vitaminas liposolubles (uso crónico).",
            "Granulomas por cuerpo extraño (si hay fuga peritoneal)."
        ],
        "interacciones_farmacologicas": [{
            "farmaco": "Vitaminas liposolubles",
            "efecto": "Puede disminuir la absorción de vitaminas liposolubles (A, D, E, K) y algunos fármacos con el uso crónico.",
            "severidad": "Leve"
        }],
        "sobredosis": {
            "signos": ["Diarrea severa", "filtración anal."],
            "tratamiento": "Diarrea severa, filtración anal."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Lubrica el contenido fecal, facilitando su paso. Cubre la mucosa intestinal, disminuyendo la absorción de agua de las heces.",
        "farmacocinetica": "Mínima absorción sistémica si se administra oralmente. Actúa localmente en el intestino. Excreción fecal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Líquido oral/rectal",
            "concentracion_texto": "100% Aceite Mineral",
            "valor_concentracion": 100,
            "unidad_concentracion": "%",
            "es_divisible": false
        }
    ]
};
