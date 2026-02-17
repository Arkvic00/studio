import type { Drug } from '@/lib/types';

export const calcitoninaSalmonDrug: Drug = {
    "id": "calcitonina_salm_n",
    "meta_data": {
        "nombre_generico": "Calcitonina (Salmón)",
        "nombres_comerciales": ["Miacalcin", "Fortical"],
        "grupo_farmacologico": "Hormona polipeptídica; Regulador del calcio",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Su uso para hipercalcemia ha sido reemplazado en gran medida por fluidoterapia con salino 0.9%, furosemida y bisfosfonatos (pamidronato, zoledronato) que son más efectivos y duraderos.",
            "La taquifilaxia limita su utilidad a corto plazo."
        ],
        "usos_principales": "Tratamiento de emergencia de la hipercalcemia severa (especialmente hipercalcemia de malignidad) en perros y gatos (uso raro, como adyuvante). Enfermedad ósea de Paget (uso humano)."
    },
    "informacion_cliente": [
        "Este es un medicamento inyectable de uso hospitalario para emergencias. Requiere monitoreo cercano del calcio sanguíneo."
    ],
    "monitoreo_paciente": [
        "Niveles de calcio sérico (total e ionizado) - ¡frecuentemente!",
        "Signos de hipocalcemia (temblores, fasciculaciones, convulsiones).",
        "Signos GI."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Hipercalcemia aguda",
                "vias": ["SC", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 6,
                    "dosis_min": 4,
                    "dosis_max": 8,
                    "unidad_calculo": "UI/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 6–12 horas",
                    "intervalo_horas": 6
                }
            }
        ],
        "gato": [
            {
                "indicacion": "Hipercalcemia aguda",
                "vias": ["SC", "IM"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 6,
                    "dosis_min": 4,
                    "dosis_max": 8,
                    "unidad_calculo": "UI/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 8–12 horas",
                    "intervalo_horas": 8
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": ["Hipersensibilidad a la calcitonina de salmón."],
        "efectos_adversos": ["Malestar GI (náuseas, vómitos, anorexia) - común.", "Reacciones de hipersensibilidad (raras).", "Hipocalcemia (si la dosis es excesiva).", "Taquifilaxia (pérdida de efecto) con uso repetido."],
        "interacciones_farmacologicas": [{
            "farmaco": "Litio",
            "efecto": "La calcitonina puede disminuir los niveles de litio.",
            "severidad": "Moderada"
        }],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Puede causar hipocalcemia y tetania. Tratar con calcio IV."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Hormona que se opone a la acción de la hormona paratiroidea (PTH). Inhibe la resorción ósea por los osteoclastos y aumenta la excreción renal de calcio y fósforo.",
        "farmacocinetica": "Administración parenteral (se destruye en el tracto GI). Inicio rápido (15 min). Duración corta (vida media ~1 hora). Metabolismo rápido en riñones e hígado."
    },
    "presentaciones_comerciales": [{
        "tipo": "Inyección",
        "concentracion_texto": "200 UI/mL",
        "valor_concentracion": 200,
        "unidad_concentracion": "UI/mL",
        "es_divisible": false
    }, {
        "tipo": "Spray nasal",
        "concentracion_texto": "200 UI/actuación (humano, no usado en veterinaria)",
        "valor_concentracion": 200,
        "unidad_concentracion": "UI",
        "es_divisible": false
    }]
};
