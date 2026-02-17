import type { Drug } from '@/lib/types';

export const carbonActivadoDrug: Drug = {
    "id": "carb_n_activado",
    "meta_data": {
        "nombre_generico": "Carbón Activado",
        "nombres_comerciales": ["Toxiban", "Liqui-Char", "Actidose-Aqua"],
        "grupo_farmacologico": "Adsorbente; Antídoto (general)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es el pilar de la descontaminación GI después de la emesis.",
            "No funciona para todo (Xilitol, alcohol, metales pesados).",
            "El riesgo de aspiración es la complicación más grave."
        ],
        "usos_principales": "Descontaminación gastrointestinal después de la ingestión de toxinas o sobredosis de fármacos (p. ej., chocolate, AINEs, paracetamol, organofosforados, etc.). Puede administrarse en dosis múltiples para interrumpir la recirculación enterohepática de ciertas toxinas (p. ej., teobromina, fenobarbital)."
    },
    "informacion_cliente": [
        "Administrado solo por personal veterinario. Causa heces negras."
    ],
    "monitoreo_paciente": [
        "Estado de hidratación y electrolitos (especialmente sodio) si se usa sorbitol o dosis múltiples.",
        "Signos de aspiración (tos, disnea)."
    ],
    "parametros_dosificacion": {
        "perroGato": [
            {
                "indicacion": "Ingestión de toxinas (dosis única)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 3000,
                    "dosis_min": 1000,
                    "dosis_max": 5000,
                    "unidad_calculo": "g/kg"
                },
                "notas_tecnicas": "1–5 g/kg PO. (Generalmente se administra como suspensión)."
            },
            {
                "indicacion": "Ingestión de toxinas (dosis múltiple)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 1500,
                    "dosis_min": 1000,
                    "dosis_max": 2000,
                    "unidad_calculo": "g/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 4–8 horas por 24-72h",
                    "intervalo_horas": 4
                },
                "notas_tecnicas": "1–2 g/kg PO cada 4–8 horas por 24-72h. (Usar formulaciones SIN sorbitol después de la primera dosis)."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Ingestión de sustancias cáusticas (ácidos, álcalis) - (oscurece la endoscopia).",
            "Ingestión de hidrocarburos (petróleo) - (aumenta el riesgo de aspiración).",
            "Ingestión de toxinas no adsorbidas (alcoholes, etilenglicol, metales pesados, xilitol).",
            "Obstrucción GI, perforación, o cirugía GI reciente.",
            "Deshidratación severa (especialmente formulaciones con sorbitol)."
        ],
        "efectos_adversos": [
            "Vómitos (común), resultando en riesgo de NEUMONÍA POR ASPIRACIÓN (grave).",
            "Estreñimiento o diarrea.",
            "Heces negras (normal).",
            "Con Sorbitol: Diarrea severa, deshidratación, hipernatremia."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Sorbitol (catártico)",
                "efecto": "No administrar dosis múltiples de sorbitol (riesgo de hipernatremia y deshidratación).",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Alimentos (leche, helado)",
                "efecto": "Reducen la capacidad de adsorción.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Otros medicamentos orales (antídotos)",
                "efecto": "Adsorberá otros fármacos orales (p. ej., acetilcisteína).",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "No hay toxicidad directa, pero la administración excesiva (especialmente con catártico) causa desequilibrios electrolíticos graves."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Adsorbe (se une a) sustancias químicas y toxinas en el tracto gastrointestinal, previniendo su absorción sistémica. Tiene un área de superficie enorme. Se une a muchas toxinas y fármacos en el tracto GI.",
        "farmacocinetica": "No se absorbe. No se metaboliza. Se excreta en las heces."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Suspensión (a menudo con Sorbitol, un catártico)",
            "concentracion_texto": "25 g, 50 g",
            "valor_concentracion": 25,
            "unidad_concentracion": "g",
            "es_divisible": false
        },
        {
            "tipo": "Gránulos (Toxiban)",
            "concentracion_texto": "454 g",
            "valor_concentracion": 454,
            "unidad_concentracion": "g",
            "es_divisible": true
        },
        {
            "tipo": "Polvo",
            "concentracion_texto": "Varios",
            "valor_concentracion": 0,
            "unidad_concentracion": "",
            "es_divisible": true
        }
    ]
};
