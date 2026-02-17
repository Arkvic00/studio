import type { Drug } from '@/lib/types';

export const cefotetanDrug: Drug = {
    "id": "cefotet_n",
    "meta_data": {
        "nombre_generico": "Cefotetán",
        "nombres_comerciales": ["Cefotan"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (2ª Generación, Cefamicina)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es una Cefamicina (no una verdadera cefalosporina), lo que le da su excelente estabilidad contra beta-lactamasas anaeróbicas.",
            "La Cefoxitina es otra cefamicina similar.",
            "El riesgo de sangrado (cadena NMTT) es una preocupación única."
        ],
        "usos_principales": "Tratamiento de infecciones anaeróbicas o mixtas (bacterias y anaerobios). Profilaxis quirúrgica (especialmente cirugía colorrectal o ginecológica). Peritonitis, sepsis intraabdominal."
    },
    "informacion_cliente": [
        "Este es un antibiótico inyectable administrado en el hospital."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos.",
        "Tiempo de protrombina (TP) si se usa prolongadamente o en pacientes de riesgo (para sangrado)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Infecciones anaeróbicas/mixtas",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 22.5,
                    "dosis_min": 15,
                    "dosis_max": 30,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                }
            }
        ],
        "gato": [
            {
                "indicacion": "Infecciones anaeróbicas/mixtas",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 22.5,
                    "dosis_min": 15,
                    "dosis_max": 30,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                }
            }
        ],
        "caballo": [
            {
                "indicacion": "Infecciones anaeróbicas",
                "vias": ["IV"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 17.5,
                    "dosis_min": 10,
                    "dosis_max": 25,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad a cefalosporinas o penicilinas.",
            "Precaución en pacientes con trastornos de la coagulación."
        ],
        "efectos_adversos": [
            "Contiene una cadena lateral N-metiltiotetrazol (NMTT), que puede causar:",
            "Hipoprotrombinemia (riesgo de sangrado) - (reversible con Vitamina K).",
            "Reacción similar al disulfiram (no administrar con alcohol).",
            "Malestar GI, tromboflebitis, reacciones de hipersensibilidad."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Aminoglucósidos",
                "efecto": "Aumenta el riesgo de nefrotoxicidad.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Anticoagulantes (warfarina)",
                "efecto": "Puede potenciar el efecto anticoagulante.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro. Riesgo de sangrado."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Amplio espectro. Activo contra Gram-positivos, Gram-negativos y, notablemente, muchos ANAEROBIOS (incluyendo Bacteroides fragilis).",
        "farmacocinetica": "Administración parenteral. No se metaboliza. Excreción renal. Vida media 3-4 horas."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "Polvo liofilizado de 1 g, 2 g por vial",
            "valor_concentracion": 1,
            "unidad_concentracion": "g",
            "es_divisible": false
        }
    ]
};
