import type { Drug } from '@/lib/types';

export const carbimazolDrug: Drug = {
    "id": "carbimazol",
    "meta_data": {
        "nombre_generico": "Carbimazol",
        "nombres_comerciales": ["Vidalta (liberación prolongada)", "Neo-Mercazole"],
        "grupo_farmacologico": "Antitiroideo; Tioamida",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es simplemente un profármaco del metimazol. 5 mg de carbimazol equivalen aproximadamente a 3 mg de metimazol.",
            "La formulación de liberación prolongada (Vidalta) permite la dosificación una vez al día."
        ],
        "usos_principales": "Tratamiento médico del hipertiroidismo en gatos."
    },
    "informacion_cliente": [
        "Se requieren análisis de sangre regulares para monitorear la función tiroidea y detectar efectos secundarios. Administrar con comida si causa náuseas. Informar de inmediato si hay letargo severo, vómitos, pérdida de apetito, ictericia, fiebre o hematomas."
    ],
    "monitoreo_paciente": [
        "Niveles de T4 total - cada 2-4 semanas inicialmente, luego cada 3-6 meses.",
        "Hemograma completo (CBC) y panel bioquímico (hepático, renal) - frecuentemente al inicio (cada 2-4 semanas por 3 meses), luego periódicamente.",
        "Signos clínicos de hipertiroidismo y efectos adversos."
    ],
    "parametros_dosificacion": {
        "gato": [
            {
                "indicacion": "Hipertiroidismo (Carbimazol regular)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg/gato/día"
                },
                "frecuencia": {
                    "texto_ui": "dividido cada 8–12 horas",
                    "intervalo_horas": 8
                },
                "notas_tecnicas": "Inicial: 10–15 mg/gato/día PO, dividido cada 8–12 horas. Ajustar según T4."
            },
            {
                "indicacion": "Hipertiroidismo (Vidalta - liberación prolongada)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg/gato"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "Inicial: 10 o 15 mg/gato PO cada 24 horas. Ajustar según T4."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad a tioamidas (carbimazol, metimazol).",
            "Enfermedad hepática severa o discrasias sanguíneas preexistentes.",
            "Enfermedad autoinmune.",
            "No usar en gatas gestantes o lactantes."
        ],
        "efectos_adversos": [
            "Son los mismos que los del metimazol:",
            "Vómitos, anorexia, letargo (comunes, a menudo transitorios).",
            "Discrasias sanguíneas (neutropenia, trombocitopenia, anemia hemolítica) - idiossincráticas, graves.",
            "Excoriaciones faciales y prurito.",
            "Hepatopatía.",
            "Linfadenopatía."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Similar al metimazol (p. ej., fenobarbital puede afectar el metabolismo).",
                "efecto": "",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Similar al metimazol. Riesgo aumentado de efectos adversos. Descontinuar, tratamiento de apoyo, monitorear hemograma y función hepática."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Es un profármaco que se convierte rápidamente en metimazol (su metabolito activo). El metimazol inhibe la enzima peroxidasa tiroidea, bloqueando la yodación de los residuos de tirosina en la tiroglobulina y la unión de las yodotirosinas, inhibiendo así la síntesis de hormonas tiroideas (T3 y T4). Reduce la producción de hormonas tiroideas.",
        "farmacocinetica": "Se convierte completamente en metimazol después de la absorción oral. La farmacocinética es esencialmente la del metimazol."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "5 mg",
            "valor_concentracion": 5,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Comprimidos de liberación prolongada (Vidalta)",
            "concentracion_texto": "10 mg, 15 mg",
            "valor_concentracion": 10,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
