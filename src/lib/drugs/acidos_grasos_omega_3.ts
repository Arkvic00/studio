import type { Drug } from '@/lib/types';

export const acidosGrasosOmega3Drug: Drug = {
    "id": "acidos_grasos_omega_3",
    "meta_data": {
        "nombre_generico": "Ácidos Grasos Omega-3 (EPA/DHA)",
        "nombres_comerciales": ["Varias marcas (Welactin, Eicosaderm, Nordic Naturals)"],
        "grupo_farmacologico": "Nutracéutico; Suplemento de Ácidos Grasos Esenciales",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Se necesitan dosis relativamente altas y uso crónico (semanas a meses) para ver efectos antiinflamatorios.",
            "La proporción EPA:DHA y la fuente (aceite de pescado vs lino) son importantes. El aceite de pescado es la fuente más directa de EPA/DHA.",
            "A menudo se incluyen en dietas de prescripción para piel, articulaciones o riñón."
        ],
        "usos_principales": "Manejo adyuvante de condiciones inflamatorias: Dermatitis alérgica (atopia) para reducir prurito e inflamación. Osteoartritis (OA) para reducir el dolor y la inflamación. Enfermedad renal crónica (ERC) para reducir la inflamación renal y la proteinuria. Enfermedad cardíaca (ICC, arritmias). Hiperlipidemia. Disfunción cognitiva."
    },
    "informacion_cliente": [
        "Administrar con comida para mejorar la absorción y reducir el malestar GI.",
        "Puede tardar semanas en hacer efecto.",
        "Almacenar adecuadamente para evitar que se ponga rancio."
    ],
    "monitoreo_paciente": [
        "Mejora de los signos clínicos (prurito, movilidad, condición del pelaje).",
        "Signos GI."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Dermatitis/OA/ERC/Cardíaco",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_min": 50,
                    "dosis_recomendada": 135,
                    "dosis_max": 220,
                    "unidad_calculo": "mg/kg de EPA+DHA combinados"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "Usar dosis más altas para inflamación."
            }
        ],
        "gato": [
            {
                "indicacion": "Dermatitis/OA/ERC/Cardíaco",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_min": 30,
                    "dosis_recomendada": 65,
                    "dosis_max": 100,
                    "unidad_calculo": "mg/kg de EPA+DHA combinados"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                }
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad al pescado.",
            "Precaución en pacientes con trastornos de la coagulación o que reciben anticoagulantes (dosis altas pueden afectar la función plaquetaria)."
        ],
        "precauciones": [],
        "efectos_adversos": [
            "Generalmente muy seguro.",
            "Malestar GI (diarrea, vómitos, flatulencia) - a menudo relacionado con la cantidad de aceite.",
            "Aliento a pescado, pelo graso.",
            "Aumento del tiempo de sangrado (con dosis muy altas).",
            "Ganancia de peso (son calorías)."
        ],
        "sobredosis": {
            "signos": ["Malestar GI."],
            "tratamiento": "Reducir dosis."
        },
        "interacciones_farmacologicas": [
            {
                "farmaco": "Anticoagulantes (Warfarina, Clopidogrel, Aspirina)",
                "efecto": "Dosis altas de Omega-3 pueden aumentar el riesgo de sangrado.",
                "severidad": "Moderada"
            }
        ]
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Los ácidos grasos Omega-3 (especialmente EPA) compiten con el ácido araquidónico (Omega-6) por las enzimas ciclooxigenasa (COX) y lipooxigenasa (LOX). Esto desplaza la producción de mediadores inflamatorios (prostaglandinas, leucotrienos) hacia formas menos inflamatorias.",
        "farmacocinetica": "Se absorben en el intestino delgado y se incorporan a las membranas celulares."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Cápsulas de aceite de pescado",
            "concentracion_texto": "Concentraciones variables de EPA (ácido eicosapentaenoico) y DHA (ácido docosahexaenoico).",
            "valor_concentracion": 0,
            "unidad_concentracion": "",
            "es_divisible": true
        },
        {
            "tipo": "Líquidos/Aceites",
            "concentracion_texto": "Concentraciones variables.",
            "valor_concentracion": 0,
            "unidad_concentracion": "",
            "es_divisible": false
        }
    ]
};
