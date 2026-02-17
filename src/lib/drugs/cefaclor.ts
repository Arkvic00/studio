import type { Drug } from '@/lib/types';

export const cefaclorDrug: Drug = {
    "id": "cefaclor",
    "meta_data": {
        "nombre_generico": "Cefaclor",
        "nombres_comerciales": ["Ceclor"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (2ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "No ofrece ventajas significativas sobre las cefalosporinas de 1ª generación (cefalexina, cefadroxilo) y a menudo es más costoso.",
            "Requiere dosificación cada 8 horas."
        ],
        "usos_principales": "Uso limitado en veterinaria. Podría considerarse para infecciones de piel, tracto urinario o respiratorias causadas por organismos susceptibles. Generalmente, las cefalosporinas de 1ª o 3ª generación son preferidas."
    },
    "informacion_cliente": [
        "Administrar el tratamiento completo. Refrigerar la suspensión líquida y desecharla después de 14 días. Informar si hay vómitos o diarrea persistentes."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos.",
        "Signos GI."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Infecciones susceptibles (raramente usado)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 20,
                    "dosis_min": 10,
                    "dosis_max": 30,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8 horas",
                    "intervalo_horas": 8
                }
            }
        ],
        "gato": [
            {
                "indicacion": "Infecciones susceptibles (raramente usado)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 20,
                    "dosis_min": 10,
                    "dosis_max": 30,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8 horas",
                    "intervalo_horas": 8
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Malestar GI (vómitos, diarrea, anorexia) - más común.",
            "Reacciones de hipersensibilidad (urticaria, fiebre).",
            "Discrasias sanguíneas (neutropenia, trombocitopenia) - raras."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Probenecid",
                "efecto": "Aumenta los niveles de cefaclor.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa malestar GI severo. Tratar sintomáticamente."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana (similar a penicilinas). Es bactericida. Espectro similar a cefalosporinas de 1ª gen (Cefalexina) contra Gram-positivos (Staph, Strep), pero con actividad ligeramente mejorada contra algunos Gram-negativos (E. coli, Klebsiella, Haemophilus). Menos activo contra Staph que 1ª gen.",
        "farmacocinetica": "Buena absorción oral (disminuye con comida). Se distribuye bien. Excreción renal (sin cambios). Vida media corta (~1 hora)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Cápsulas",
            "concentracion_texto": "250 mg, 500 mg",
            "valor_concentracion": 250,
            "unidad_concentracion": "mg",
            "es_divisible": false
        },
        {
            "tipo": "Comprimidos de liberación prolongada",
            "concentracion_texto": "375 mg, 500 mg",
            "valor_concentracion": 375,
            "unidad_concentracion": "mg",
            "es_divisible": false
        },
        {
            "tipo": "Suspensión oral (reconstituida)",
            "concentracion_texto": "125 mg/5 mL, 187 mg/5 mL, 250 mg/5 mL, 375 mg/5 mL",
            "valor_concentracion": 125,
            "unidad_concentracion": "mg/5mL",
            "es_divisible": false
        }
    ]
};
