import type { Drug } from '@/lib/types';

export const clofaziminaDrug: Drug = {
    "id": "clofazimina",
    "meta_data": {
        "nombre_generico": "Clofazimina",
        "nombres_comerciales": ["Lamprene"],
        "grupo_farmacologico": "Antimicobacteriano; Colorante (Fenazina)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "El efecto secundario más notable es que tiñe al animal (y sus fluidos) de color naranja/rojo.",
            "Reservado para infecciones micobacterianas difíciles, requiere tratamiento a largo plazo (meses)."
        ],
        "usos_principales": "Tratamiento de infecciones por micobacterias atípicas (p. ej., lepra felina, micobacteriosis cutánea) en perros y gatos, generalmente como parte de un régimen combinado (extra-etiqueta)."
    },
    "informacion_cliente": [
        "Administrar con comida. Este medicamento causará un cambio de color (rosado a naranja) en la piel, orina y mucosas de su mascota; esto es normal. Se requiere tratamiento a largo plazo."
    ],
    "monitoreo_paciente": [
        "Resolución de lesiones cutáneas (lento, requiere meses).",
        "Signos de malestar GI.",
        "Pigmentación de la piel (esperada).",
        "Función hepática."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Micobacteriosis cutánea",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 9,
                    "dosis_min": 8,
                    "dosis_max": 10,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "8–10 mg/kg PO cada 24 horas (combinado con otros fármacos)."
            }
        ],
        "gato": [
            {
                "indicacion": "Lepra felina / Micobacteriosis",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg/gato"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "25–50 mg/gato PO cada 24 horas (combinado con otros fármacos)."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Disfunción hepática severa."
        ],
        "efectos_adversos": [
            "¡Pigmentación de la piel y mucosas! (Naranja-rosado a marrón-negruzco) - común y reversible.",
            "Ictiosis (piel seca, escamosa).",
            "Malestar GI (anorexia, vómitos, diarrea).",
            "Hepatotoxicidad."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Rifampicina",
                "efecto": "Puede reducir los niveles de clofazimina.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Aumenta los efectos GI y la pigmentación."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Mecanismo exacto desconocido. Se une al ADN micobacteriano. También tiene propiedades antiinflamatorias e inmunomoduladoras. Bactericida contra Mycobacterium leprae (lepra humana) y bacteriostático contra otras micobacterias.",
        "farmacocinetica": "Absorción oral variable (aumenta con comida). Se acumula extensamente en tejidos (grasa, macrófagos). Larga vida media (semanas). Excreción biliar/fecal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Cápsulas",
            "concentracion_texto": "50 mg",
            "valor_concentracion": 50,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
