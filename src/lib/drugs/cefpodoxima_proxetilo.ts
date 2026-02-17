import type { Drug } from '@/lib/types';

export const cefpodoximaProxetiloDrug: Drug = {
    "id": "cefpodoxima_proxetilo",
    "meta_data": {
        "nombre_generico": "Cefpodoxima Proxetilo",
        "nombres_comerciales": ["Simplicef", "Vantin"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (3ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Su principal ventaja es la dosificación de UNA VEZ al día en perros.",
            "Es una cefalosporina oral de 3ª generación.",
            "Junto con Cefalexina y Clavamox, es una de las opciones de primera línea para pioderma canina."
        ],
        "usos_principales": "Tratamiento de infecciones de piel (pioderma) en perros. Infecciones del tracto urinario (ITU). Infecciones respiratorias."
    },
    "informacion_cliente": [
        "Administrar el tratamiento completo. Administrar con comida para mejorar la absorción y reducir el malestar GI."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos.",
        "Signos de malestar GI."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Infecciones de piel/tejidos blandos, ITU",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 7.5,
                    "dosis_min": 5,
                    "dosis_max": 10,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "5–10 mg/kg PO cada 24 horas. (Para pioderma, 10 mg/kg)."
            }
        ],
        "gato": [
            {
                "indicacion": "Infecciones susceptibles (extra-etiqueta)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 7.5,
                    "dosis_min": 5,
                    "dosis_max": 10,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12–24 horas",
                    "intervalo_horas": 12
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Malestar GI (vómitos, diarrea, anorexia) - más común.",
            "Reacciones de hipersensibilidad (raras)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Antiácidos, bloqueadores H2 (Cimetidina), inhibidores de la bomba de protones (Omeprazol)",
                "efecto": "Reducen la absorción (requiere ácido gástrico).",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Probenecid",
                "efecto": "Aumenta los niveles de cefpodoxima.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro. Causa malestar GI."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Es un profármaco que se hidroliza a Cefpodoxima (activo). Inhibe la síntesis de la pared celular bacteriana. Amplio espectro. Buena actividad contra Gram-positivos (Staphylococcus, Streptococcus) y muchos Gram-negativos (E. coli, Proteus, Klebsiella). No activo contra Pseudomonas.",
        "farmacocinetica": "Absorción oral moderada (mejora con comida). Se distribuye bien. Excreción renal. Vida media ~5-6 horas en perros."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos (Simplicef)",
            "concentracion_texto": "100 mg, 200 mg (veterinario)",
            "valor_concentracion": 100,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Comprimidos (Vantin)",
            "concentracion_texto": "100 mg, 200 mg (humano)",
            "valor_concentracion": 100,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Suspensión oral (Vantin)",
            "concentracion_texto": "50 mg/5 mL, 100 mg/5 mL",
            "valor_concentracion": 50,
            "unidad_concentracion": "mg/5mL",
            "es_divisible": false
        }
    ]
};
