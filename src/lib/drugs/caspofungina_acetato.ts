import type { Drug } from '@/lib/types';

export const caspofunginaAcetatoDrug: Drug = {
    "id": "caspofungina_acetato",
    "meta_data": {
        "nombre_generico": "Caspofungina Acetato",
        "nombres_comerciales": ["Cancidas"],
        "grupo_farmacologico": "Antifúngico; Equinocandina",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Pertenece a una clase más nueva de antifúngicos (equinocandinas).",
            "Es muy costoso y generalmente se reserva para infecciones graves resistentes a otros tratamientos."
        ],
        "usos_principales": "Tratamiento de infecciones invasivas por Candida (candidiasis sistémica) o Aspergillus (aspergilosis invasiva) refractarias a otros antifúngicos (p. ej., anfotericina B, azoles) en perros y gatos (extra-etiqueta)."
    },
    "informacion_cliente": [
        "Este es un medicamento antifúngico intravenoso administrado en el hospital."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos de infección fúngica.",
        "Cultivos fúngicos.",
        "Función hepática (ALT, ALP).",
        "Signos de reacción a la infusión."
    ],
    "parametros_dosificacion": {
        "perroGato": [
            {
                "indicacion": "Candidiasis/Aspergilosis invasiva (refractaria)",
                "vias": ["IV"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.925,
                    "dosis_min": 0.6,
                    "dosis_max": 1.25,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "infusión >1h",
                    "intervalo_horas": 0
                },
                "notas_tecnicas": "Dosis de carga: 0.6–1.25 mg/kg IV (infusión >1h). Dosis de mantenimiento: 0.3–0.6 mg/kg IV cada 24 horas (infusión >1h)."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a equinocandinas."],
        "efectos_adversos": [
            "Generalmente bien tolerado.",
            "Fiebre, escalofríos (reacciones a la infusión).",
            "Vómitos, diarrea.",
            "Aumento de enzimas hepáticas (ALT, ALP).",
            "Flebitis en el sitio de infusión.",
            "Hipersensibilidad (rara)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Ciclosporina",
                "efecto": "Aumenta los niveles de caspofungina (riesgo de hepatotoxicidad). Combinación generalmente evitada.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Inductores enzimáticos (Rifampicina, Dexametasona, Fenitoína)",
                "efecto": "Pueden disminuir los niveles de caspofungina (puede requerir aumento de dosis).",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Información limitada. Probablemente aumente el riesgo de efectos adversos. Tratar sintomáticamente."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis del (1,3)-beta-D-glucano, un componente esencial de la pared celular de muchos hongos (especialmente Candida y Aspergillus). No afecta las células de mamíferos. Actividad fungicida contra Candida spp. y fungistática contra Aspergillus spp. No activo contra Cryptococcus, Zygomycetes, Fusarium.",
        "farmacocinetica": "Administración IV (no se absorbe oralmente). Alta unión a proteínas. Se distribuye ampliamente. Metabolismo lento por hidrólisis y N-acetilación (no CYP450). Excreción fecal y renal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "Polvo liofilizado de 50 mg, 70 mg por vial",
            "valor_concentracion": 50,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
