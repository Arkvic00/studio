import type { Drug } from '@/lib/types';

export const cefiximaDrug: Drug = {
    "id": "cefixima",
    "meta_data": {
        "nombre_generico": "Cefixima",
        "nombres_comerciales": ["Suprax"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (3ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es una de las pocas cefalosporinas de 3ª generación disponibles por vía oral.",
            "Su espectro limitado contra Gram-positivos y la disponibilidad de otras opciones limitan su uso en veterinaria."
        ],
        "usos_principales": "Uso limitado en veterinaria. Podría considerarse para infecciones del tracto urinario (ITU) causadas por Gram-negativos susceptibles. Generalmente, otras cefalosporinas (1ª gen, Cefpodoxima) o fluoroquinolonas son preferidas."
    },
    "informacion_cliente": [
        "Administrar el tratamiento completo. Puede darse con o sin comida. Agitar bien la suspensión. Informar si hay diarrea severa."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos.",
        "Signos GI."
    ],
    "parametros_dosificacion": {
        "perroGato": [
            {
                "indicacion": "Infecciones susceptibles (ITU Gram-negativa) - (raramente usado)",
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
            "Malestar GI (diarrea, náuseas, dolor abdominal) - común.",
            "Reacciones de hipersensibilidad (raras)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Probenecid",
                "efecto": "Aumenta los niveles de cefixima.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa malestar GI severo. Tratar sintomáticamente."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Amplia actividad contra bacterias Gram-negativas (Enterobacteriaceae como E. coli, Klebsiella, Proteus). Actividad variable contra Gram-positivos (menos activo que 1ª gen). No activo contra Pseudomonas.",
        "farmacocinetica": "Absorción oral moderada (~40-50%), no muy afectada por comida. Se distribuye bien (excepto SNC). Excreción renal (principalmente sin cambios) y biliar. Vida media ~3-4 horas."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "200 mg, 400 mg",
            "valor_concentracion": 200,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Cápsulas",
            "concentracion_texto": "400 mg",
            "valor_concentracion": 400,
            "unidad_concentracion": "mg",
            "es_divisible": false
        },
        {
            "tipo": "Polvo para suspensión oral (reconstituida)",
            "concentracion_texto": "100 mg/5 mL, 200 mg/5 mL, 500 mg/5 mL",
            "valor_concentracion": 100,
            "unidad_concentracion": "mg/5mL",
            "es_divisible": false
        }
    ]
};
