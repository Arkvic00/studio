import type { Drug } from '@/lib/types';

export const clodronatoDisodicoDrug: Drug = {
    "id": "clodronato_dis_dico",
    "meta_data": {
        "nombre_generico": "Clodronato (Disódico)",
        "nombres_comerciales": ["Osphos", "Bonefos", "Clasteon"],
        "grupo_farmacologico": "Bisfosfonato (No nitrogenado)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Osphos es el único bisfosfonato aprobado para el síndrome navicular en caballos.",
            "El Tildren (Tiludronato) es otro bisfosfonato (administrado IV) usado para lo mismo.",
            "Actúa sobre el hueso, no como analgésico directo."
        ],
        "usos_principales": "Tratamiento del síndrome navicular (espolón navicular) en caballos. Hipercalcemia de malignidad (extra-etiqueta)."
    },
    "informacion_cliente": [
        "Este medicamento se administra por inyección IM para el síndrome navicular. Puede causar cólico leve o rigidez muscular temporalmente después de la inyección."
    ],
    "monitoreo_paciente": [
        "Mejora de la cojera.",
        "Signos de malestar (cólico) post-inyección.",
        "Función renal (BUN, creatinina) y calcio sérico (antes y después)."
    ],
    "parametros_dosificacion": {
        "caballo": [
            {
                "indicacion": "Síndrome Navicular (Osphos)",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_max": 1.8,
                    "unidad_calculo": "mg/kg"
                },
                "notas_tecnicas": "Dosis máxima: 1.8 mg/kg IM. (Dividir la dosis total en 3 sitios de inyección, no más de 5 mL por sitio). Repetir cada 3-6 meses si es necesario."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Insuficiencia renal severa.",
            "No usar en caballos menores de 4 años.",
            "No usar en yeguas gestantes o lactantes."
        ],
        "efectos_adversos": [
            "Signos de malestar abdominal, cólico, agitación (transitorios, relacionados con la administración).",
            "Inflamación o rigidez en el sitio de inyección.",
            "Nefrotoxicidad (potencial, especialmente si está deshidratado).",
            "Hipocalcemia (transitoria)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Aminoglucósidos",
                "efecto": "Aumentan el riesgo de nefrotoxicidad e hipocalcemia.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "AINEs",
                "efecto": "Aumentan el riesgo de nefrotoxicidad.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Puede causar hipocalcemia severa y nefrotoxicidad. Monitorear calcio y función renal. Fluidoterapia IV."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la actividad de los osteoclastos y la resorción ósea. Se internaliza y se metaboliza a un análogo de ATP no hidrolizable, que induce la apoptosis de los osteoclastos. Reduce la resorción ósea, ayudando a modular enfermedades óseas.",
        "farmacocinetica": "Administración IM. Absorción lenta. Se une ávidamente al hueso. Excreción renal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección (Osphos - equino)",
            "concentracion_texto": "60 mg/mL (vial de 15 mL)",
            "valor_concentracion": 60,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
