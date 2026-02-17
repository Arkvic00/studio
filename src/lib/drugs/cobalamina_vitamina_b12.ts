import type { Drug } from '@/lib/types';

export const cobalaminaVitaminaB12Drug: Drug = {
    "id": "cobalamina_vitamina_b12",
    "meta_data": {
        "nombre_generico": "Cobalamina (Vitamina B12)",
        "nombres_comerciales": ["Cianocobalamina inyectable", "Cobalequin (comprimidos masticables)"],
        "grupo_farmacologico": "Vitamina (soluble en agua)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "La hipocobalaminemia es extremadamente común en perros con IPE y gatos con enfermedad GI crónica (EII, linfoma).",
            "La suplementación (a menudo junto con folato) es clave en el manejo de estas enfermedades.",
            "El color rojo brillante de la inyección es característico."
        ],
        "usos_principales": "Tratamiento de la deficiencia de cobalamina (hipocobalaminemia) secundaria a: Insuficiencia Pancreática Exocrina (IPE) - (falta de FI). Enfermedad del intestino delgado (EII, linfoma) - (malabsorción ileal). Disbiosis intestinal (bacterias consumen B12). Tratamiento adyuvante de la anemia no regenerativa o neuropatías. Tratamiento de la toxicidad por cianuro (forma hidroxocobalamina)."
    },
    "informacion_cliente": [
        "Este suplemento vitamínico es crucial para la salud intestinal de su mascota. La forma inyectable debe protegerse de la luz."
    ],
    "monitoreo_paciente": [
        "Niveles séricos de cobalamina (B12).",
        "Signos clínicos (diarrea, pérdida de peso, anemia)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Deficiencia de Cobalamina (Inyección)",
                "vias": ["SC"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mcg/perro"
                },
                "frecuencia": {
                    "texto_ui": "cada semana por 6 semanas, luego cada 2 semanas, luego mensual",
                    "intervalo_horas": 168
                },
                "notas_tecnicas": "250–1500 mcg/perro (dosis escalada por peso) SC cada semana por 6 semanas, luego cada 2 semanas, luego mensual."
            },
            {
                "indicacion": "Deficiencia de Cobalamina (Oral)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mcg/perro"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "250–1000 mcg/perro PO cada 24 horas."
            }
        ],
        "gato": [
            {
                "indicacion": "Deficiencia de Cobalamina (Inyección)",
                "vias": ["SC"],
                "math": {
                    "tipo_calculo": "fija",
                    "dosis_recomendada": 250,
                    "unidad_calculo": "mcg/gato"
                },
                "frecuencia": {
                    "texto_ui": "cada semana por 6 semanas, luego cada 2 semanas, luego mensual",
                    "intervalo_horas": 168
                }
            },
            {
                "indicacion": "Deficiencia de Cobalamina (Oral)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "dosis_recomendada": 250,
                    "unidad_calculo": "mcg/gato"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad."],
        "efectos_adversos": [
            "Extremadamente seguro.",
            "Dolor leve en el sitio de inyección.",
            "Reacciones alérgicas (extremadamente raras)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Cloranfenicol",
                "efecto": "Puede disminuir la respuesta hematopoyética.",
                "severidad": "Leve"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Prácticamente no tóxico. El exceso se excreta en la orina."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Cofactor esencial para dos enzimas: Metionina sintasa (metabolismo de folato, síntesis de ADN) y Metilmalonil-CoA mutasa (metabolismo de lípidos y carbohidratos). Esencial para la síntesis de ADN, formación de glóbulos rojos (eritropoyesis) y mantenimiento de la mielina neuronal.",
        "farmacocinetica": "Absorción oral: Requiere Factor Intrínseco (FI) producido en el páncreas (perros) o páncreas/estómago (gatos) para ser absorbida en el íleon. Parenteral (SC/IM): Absorción completa. Excreción renal del exceso."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "1000 mcg/mL (1 mg/mL)",
            "valor_concentracion": 1000,
            "unidad_concentracion": "mcg/mL",
            "es_divisible": false
        },
        {
            "tipo": "Comprimidos/Masticables",
            "concentracion_texto": "250 mcg, 500 mcg, 1000 mcg",
            "valor_concentracion": 250,
            "unidad_concentracion": "mcg",
            "es_divisible": true
        }
    ]
};
