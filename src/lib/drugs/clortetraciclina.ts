import type { Drug } from '@/lib/types';

export const clortetraciclinaDrug: Drug = {
    "id": "clortetraciclina",
    "meta_data": {
        "nombre_generico": "Clortetraciclina",
        "nombres_comerciales": ["Aureomycin", "CTC"],
        "grupo_farmacologico": "Antibiótico; Tetraciclina",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "La Doxiciclina ha reemplazado casi por completo a las tetraciclinas más antiguas (Clortetraciclina, Oxitetraciclina) para uso sistémico en pequeños animales debido a su mejor absorción y dosificación.",
            "El ungüento oftálmico es muy utilizado en gatos."
        ],
        "usos_principales": "Oftálmico: Tratamiento de conjuntivitis bacteriana, queratitis, y infecciones por Chlamydia felis en gatos. Oral (Ganado/Cerdos/Aves): Prevención y tratamiento de infecciones respiratorias y entéricas (se administra en el alimento o agua). Oral (Perros/Gatos): Uso histórico, ahora reemplazado por Doxiciclina."
    },
    "informacion_cliente": [
        "Para ungüento oftálmico: Lávese las manos, aplique una pequeña tira dentro del párpado. Para uso en alimento: Seguir los tiempos de retiro de carne/leche."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos (oculares o sistémicos)."
    ],
    "parametros_dosificacion": {
        "gato": [
            {
                "indicacion": "Conjuntivitis/Queratitis (Clamidia, Micoplasma)",
                "vias": ["Oftálmica"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "aplicación"
                },
                "frecuencia": {
                    "texto_ui": "cada 6-8 horas",
                    "intervalo_horas": 6
                },
                "notas_tecnicas": "Aplicar ungüento oftálmico al 1% en el ojo afectado cada 6-8 horas."
            }
        ],
        "bovinoCerdoAve": [
            {
                "indicacion": "Enfermedad respiratoria/entérica",
                "vias": ["PO (alimento/agua)"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": ""
                },
                "notas_tecnicas": "Administrar en alimento o agua según las dosis aprobadas por la FDA (etiqueta del producto)."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Animales jóvenes en crecimiento (causa tinción dental).",
            "Insuficiencia renal o hepática severa.",
            "Animales gestantes."
        ],
        "efectos_adversos": [
            "Oftálmico: Irritación local (rara).",
            "Oral (Sistémico): Malestar GI (vómitos, diarrea).",
            "Tinción de los dientes (esmalte amarillo/marrón) en animales jóvenes.",
            "Nefrotoxicidad (con dosis altas, raro).",
            "Hepatotoxicidad."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Antiácidos, suplementos de Calcio, Hierro, Pepto-Bismol",
                "efecto": "Quelan la clortetraciclina oral, impidiendo su absorción. Administrar con horas de diferencia.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Malestar GI. Dosis crónicas altas pueden causar toxicidad renal."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de proteínas bacterianas al unirse reversiblemente a la subunidad ribosomal 30S. Es bacteriostático. Amplio espectro (Gram-positivos, Gram-negativos, intracelulares como Chlamydia, Mycoplasma, Rickettsia).",
        "farmacocinetica": "Absorción oral pobre e irregular (peor que doxiciclina). La absorción se reduce drásticamente por alimentos (especialmente lácteos) y cationes (calcio, hierro, antiácidos). Excreción fecal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Polvo/Premezcla para alimento (Ganado)",
            "concentracion_texto": "Concentraciones variables (p. ej., 50 g/lb)",
            "valor_concentracion": 50,
            "unidad_concentracion": "g/lb",
            "es_divisible": true
        },
        {
            "tipo": "Ungüento oftálmico",
            "concentracion_texto": "1% (10 mg/g)",
            "valor_concentracion": 10,
            "unidad_concentracion": "mg/g",
            "es_divisible": false
        }
    ]
};
