import type { Drug } from '@/lib/types';

export const cosintropinaTetracosactidaDrug: Drug = {
    "id": "cosintropina_tetracosactida",
    "meta_data": {
        "nombre_generico": "Cosintropina (Tetracosactida)",
        "nombres_comerciales": ["Cortrosyn"],
        "grupo_farmacologico": "Hormona sintética; Agente de diagnóstico",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es el agente de diagnóstico estándar de oro para evaluar la función adrenal.",
            "Mucho más seguro, puro y con un protocolo más corto que el gel de ACTH.",
            "Es caro y puede haber escasez."
        ],
        "usos_principales": "Agente de diagnóstico de elección para la enfermedad de Addison (hipoadrenocorticismo) y la enfermedad de Cushing (hiperadrenocorticismo) - (Prueba de estimulación con ACTH)."
    },
    "informacion_cliente": [
        "Prueba diagnóstica realizada en la clínica veterinaria que requiere dos muestras de sangre separadas por 1 hora y una inyección."
    ],
    "monitoreo_paciente": [
        "Niveles de cortisol (pre y 1 hora post). Interpretación: En hipotiroidismo primario, la respuesta de T4 es mínima o nula. En perros normales o con enfermedad eutiroidea, el T4 post-TSH debería aumentar significativamente (>1.5-2x basal o > límite superior normal)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Prueba de estimulación con ACTH",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.005,
                    "unidad_calculo": "mcg/kg"
                },
                "notas_tecnicas": "5 mcg/kg (0.005 mg/kg) IV o IM. (Dosis máxima común de 250 mcg/perro, aunque dosis más bajas son efectivas)."
            }
        ],
        "gato": [
            {
                "indicacion": "Prueba de estimulación con ACTH",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "fija",
                    "dosis_recomendada": 0.125,
                    "unidad_calculo": "mg/gato"
                },
                "notas_tecnicas": "0.125 mg/gato (125 mcg) IV o IM. (Media ampolla)."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad."],
        "efectos_adversos": [
            "Extremadamente raro.",
            "Reacciones de hipersensibilidad (mucho menos común que con el gel de ACTH)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Corticosteroides",
                "efecto": "Interferirán con la prueba (excepto dexametasona). Suspender prednisona/prednisolona 24-48h antes.",
                "severidad": "Importante"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Poco probable (uso diagnóstico, vida media corta)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Análogo sintético de la ACTH (contiene los primeros 24 aminoácidos). Estimula la corteza adrenal para que produzca y libere cortisol.",
        "farmacocinetica": "Administración parenteral. Inicio rápido. Vida media muy corta (minutos)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "Polvo liofilizado de 0.25 mg (250 mcg) por vial",
            "valor_concentracion": 0.25,
            "unidad_concentracion": "mg",
            "es_divisible": false
        }
    ]
};
