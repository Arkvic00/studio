import type { Drug } from '@/lib/types';

export const cefapirinaDrug: Drug = {
    "id": "cefapirina_benzatina_y_s_dica",
    "meta_data": {
        "nombre_generico": "Cefapirina (Benzatina y Sódica)",
        "nombres_comerciales": ["Metricure (intraut.)", "Today (intramam.)", "Cefa-Lak (intramam.)"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (1ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Uso casi exclusivo en ganado lechero para mastitis."
        ],
        "usos_principales": "Tratamiento de la mastitis en vacas lactantes (forma sódica). Prevención de la mastitis en vacas secas (forma benzatina). Tratamiento de la endometritis en vacas (infusión intrauterina)."
    },
    "informacion_cliente": [
        "Medicamento para ganado. Seguir los tiempos de retiro de carne y leche especificados."
    ],
    "monitoreo_paciente": [
        "Resolución de la mastitis (recuento de células somáticas).",
        "Resolución de la endometritis."
    ],
    "parametros_dosificacion": {
        "bovino": [
            {
                "indicacion": "Mastitis (lactancia)",
                "vias": ["Intramamaria"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "jeringa"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas por 2 dosis",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "1 jeringa (200 mg sódica) en el cuarto afectado cada 12 horas por 2 dosis."
            },
            {
                "indicacion": "Mastitis (vaca seca)",
                "vias": ["Intramamaria"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "jeringa"
                },
                "notas_tecnicas": "1 jeringa (300 mg benzatina) en cada cuarto al inicio del período seco."
            },
            {
                "indicacion": "Endometritis (Metricure)",
                "vias": ["Intrauterina"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "jeringa"
                },
                "notas_tecnicas": "1 jeringa (500 mg) intrauterina."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Reacciones de hipersensibilidad (raras).",
            "Irritación local."
        ],
        "interacciones_farmacologicas": [],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Poco probable (uso local)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Activo principalmente contra bacterias Gram-positivas (Staphylococcus, Streptococcus) comúnmente implicadas en la mastitis.",
        "farmacocinetica": "Absorción sistémica mínima desde la glándula mamaria o el útero. Permanece localmente."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Infusión intramamaria (lactancia - sódica)",
            "concentracion_texto": "200 mg/jeringa (Today, Cefa-Lak)",
            "valor_concentracion": 200,
            "unidad_concentracion": "mg",
            "es_divisible": false
        },
        {
            "tipo": "Infusión intramamaria (seca - benzatina)",
            "concentracion_texto": "300 mg/jeringa (Tomorrow)",
            "valor_concentracion": 300,
            "unidad_concentracion": "mg",
            "es_divisible": false
        },
        {
            "tipo": "Infusión intrauterina (benzatina)",
            "concentracion_texto": "500 mg/jeringa (Metricure)",
            "valor_concentracion": 500,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
