import type { Drug } from '@/lib/types';

export const cefazolinaSodicaDrug: Drug = {
    "id": "cefazolina_s_dica",
    "meta_data": {
        "nombre_generico": "Cefazolina Sódica",
        "nombres_comerciales": ["Ancef", "Kefzol"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (1ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es la cefalosporina de elección para la profilaxis quirúrgica debido a su espectro, seguridad y costo.",
            "Requiere dosificación frecuente (cada 6-8h) para tratamiento debido a su corta vida media."
        ],
        "usos_principales": "Profilaxis antibiótica perioperatoria (administrada 30-60 min antes de la incisión y repetida intraoperatoriamente para cirugías largas). Tratamiento de infecciones bacterianas susceptibles (piel, tejidos blandos, hueso, ITU) donde se requiere administración parenteral."
    },
    "informacion_cliente": [
        "Este es un antibiótico inyectable administrado en el hospital."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos (si se usa para tratamiento).",
        "Signos de hipersensibilidad."
    ],
    "parametros_dosificacion": {
        "perroGato": [
            {
                "indicacion": "Profilaxis quirúrgica",
                "vias": ["IV"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 26,
                    "dosis_min": 22,
                    "dosis_max": 30,
                    "unidad_calculo": "mg/kg"
                },
                "notas_tecnicas": "22–30 mg/kg IV (administrar 30-60 min antes de la incisión). Repetir cada 90-120 min durante la cirugía."
            },
            {
                "indicacion": "Tratamiento de infecciones",
                "vias": ["IV", "IM", "SC"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 28.5,
                    "dosis_min": 22,
                    "dosis_max": 35,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 6–8 horas",
                    "intervalo_horas": 6
                }
            }
        ],
        "caballo": [
            {
                "indicacion": "Profilaxis/Tratamiento",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 17.5,
                    "dosis_min": 10,
                    "dosis_max": 25,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 6–8 horas",
                    "intervalo_horas": 6
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a cefalosporinas o penicilinas."],
        "efectos_adversos": [
            "Reacciones de hipersensibilidad (raras).",
            "Dolor en el sitio de inyección (IM).",
            "Tromboflebitis (IV).",
            "Malestar GI (raro)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Probenecid",
                "efecto": "Aumenta los niveles de cefazolina.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro. Dosis muy altas pueden causar neurotoxicidad (convulsiones)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Activo principalmente contra bacterias Gram-positivas aerobias (Staphylococcus spp., Streptococcus spp.). Actividad limitada contra Gram-negativos.",
        "farmacocinetica": "Administración parenteral (no se absorbe oralmente). Se distribuye bien (alcanza buenas concentraciones en hueso). Excreción renal (sin cambios). Vida media corta (~1 hora)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "Polvo liofilizado de 500 mg, 1 g, 2 g por vial",
            "valor_concentracion": 500,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
