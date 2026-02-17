import type { Drug } from '@/lib/types';

export const calcitriolDrug: Drug = {
    "id": "calcitriol_1_25_dihidroxivitamina_d3",
    "meta_data": {
        "nombre_generico": "Calcitriol (1,25-Dihidroxivitamina D3)",
        "nombres_comerciales": ["Rocaltrol", "Calcijex"],
        "grupo_farmacologico": "Análogo de la Vitamina D; Regulador del calcio",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Las dosis usadas para ERC son mucho más bajas que las usadas para hipoparatiroidismo.",
            "El control del fósforo es esencial antes y durante la terapia para ERC."
        ],
        "usos_principales": "Tratamiento del hipoparatiroidismo (para aumentar el calcio sérico). Tratamiento del hiperparatiroidismo secundario renal en perros y gatos con enfermedad renal crónica (ERC) (para suprimir la PTH)."
    },
    "informacion_cliente": [
        "Se requiere monitoreo sanguíneo muy frecuente para ajustar la dosis y prevenir la toxicidad por calcio alto. Es vital administrar quelantes de fósforo (si están recetados) con la comida."
    ],
    "monitoreo_paciente": [
        "Niveles de calcio sérico (total e ionizado) y Fósforo sérico - ¡CRÍTICO! Monitorear frecuentemente (semanal al inicio, luego mensual). Calcular el producto Ca x P.",
        "Niveles de PTH (si se trata hiperparatiroidismo secundario).",
        "BUN, creatinina.",
        "Signos clínicos de hipercalcemia (PU/PD, anorexia, vómitos)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Hiperparatiroidismo secundario renal (ERC)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.0025,
                    "dosis_min": 0.0015,
                    "dosis_max": 0.0035,
                    "unidad_calculo": "mcg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "1.5–3.5 nanogramos/kg (0.0015-0.0035 mcg/kg) PO cada 24 horas."
            },
            {
                "indicacion": "Hipoparatiroidismo",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "ng/kg/día"
                },
                "frecuencia": {
                    "texto_ui": "dividido cada 12h",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "Inicial: 20–60 nanogramos/kg/día PO dividido cada 12h. Mantenimiento: 5–15 ng/kg/día. (Ajustar según calcio sérico)."
            }
        ],
        "gato": [
            {
                "indicacion": "Hiperparatiroidismo secundario renal (ERC)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.0025,
                    "dosis_min": 0.0015,
                    "dosis_max": 0.0035,
                    "unidad_calculo": "mcg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "1.5–3.5 nanogramos/kg PO cada 24 horas."
            },
            {
                "indicacion": "Hipoparatiroidismo",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "ng/kg/día"
                },
                "notas_tecnicas": "Inicial: 10-15 nanogramos/kg/día PO. Mantenimiento: 2.5-7 ng/kg/día."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipercalcemia.",
            "Toxicidad por Vitamina D.",
            "Hiperfosfatemia severa (Producto Ca x P > 60-70 mg²/dL²)."
        ],
        "efectos_adversos": [
            "HIPERCALCEMIA - ¡principal toxicidad!",
            "Hiperfosfatemia (si la ingesta de fósforo no está controlada).",
            "Nefrocalcinosis (mineralización renal) si el producto Ca x P es muy alto.",
            "Anorexia, vómitos, letargo (signos de hipercalcemia)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Quelantes de fosfato (hidróxido de aluminio)",
                "efecto": "Necesarios para controlar el fósforo antes de iniciar calcitriol en ERC.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Diuréticos tiazídicos",
                "efecto": "Aumentan el riesgo de hipercalcemia.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Corticosteroides",
                "efecto": "Pueden antagonizar los efectos del calcitriol.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa hipercalcemia severa. Descontinuar el fármaco. Fluidoterapia IV agresiva con salino 0.9%, furosemida, prednisona, posiblemente bisfosfonatos. Restringir calcio y fósforo en la dieta."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Forma activa de la Vitamina D3. Aumenta la absorción intestinal de calcio y fósforo, aumenta la reabsorción renal de calcio y suprime la secreción de hormona paratiroidea (PTH). Aumenta los niveles séricos de calcio. Suprime la PTH.",
        "farmacocinetica": "Absorción oral buena. Metabolismo hepático y renal. Excreción biliar/fecal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Cápsulas",
            "concentracion_texto": "0.25 mcg, 0.5 mcg",
            "valor_concentracion": 0.25,
            "unidad_concentracion": "mcg",
            "es_divisible": false
        },
        {
            "tipo": "Solución oral",
            "concentracion_texto": "1 mcg/mL",
            "valor_concentracion": 1,
            "unidad_concentracion": "mcg/mL",
            "es_divisible": false
        },
        {
            "tipo": "Inyección",
            "concentracion_texto": "1 mcg/mL, 2 mcg/mL",
            "valor_concentracion": 1,
            "unidad_concentracion": "mcg/mL",
            "es_divisible": false
        }
    ]
};
