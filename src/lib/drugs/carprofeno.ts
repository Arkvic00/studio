import type { Drug } from '@/lib/types';

export const carprofenoDrug: Drug = {
    "id": "carprofeno",
    "meta_data": {
        "nombre_generico": "Carprofeno",
        "nombres_comerciales": ["Rimadyl", "Novox", "Quellin", "Carprieve", "Vetprofen"],
        "grupo_farmacologico": "AINE (Antiinflamatorio no esteroideo); Derivado del ácido propiónico (COX-2 preferencial)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Uno de los AINEs más comúnmente prescritos para perros.",
            "La toxicidad hepática idiosincrática, aunque rara, puede ser grave."
        ],
        "usos_principales": "Alivio del dolor y la inflamación asociados con la osteoartritis en perros. Control del dolor postoperatorio en perros."
    },
    "informacion_cliente": [
        "Administrar con comida. Suspender inmediatamente y contactar al veterinario si se observa pérdida de apetito, vómitos, diarrea, heces oscuras, ictericia o cambios en la sed/micción. No administrar junto con aspirina u otros antiinflamatorios (prednisona)."
    ],
    "monitoreo_paciente": [
        "Eficacia analgésica/antiinflamatoria.",
        "Signos de toxicidad GI (vómitos, diarrea, heces negras).",
        "Análisis de sangre (BUN, creatinina, ALT, ALP) - antes de iniciar, 2-4 semanas después, luego cada 3-6 meses.",
        "Peso corporal."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Osteoartritis / Dolor postoperatorio",
                "vias": ["PO", "SC"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 4.4,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "una vez al día",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "4.4 mg/kg PO, SC una vez al día. O 2.2 mg/kg PO cada 12 horas."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad (incluyendo a otros AINEs).",
            "¡NO USAR EN GATOS! (Aprobado en algunos países para inyección única, pero generalmente evitado por riesgo de toxicidad renal).",
            "Úlceras GI activas.",
            "Trastornos de la coagulación.",
            "Enfermedad renal, hepática o cardíaca significativa preexistente.",
            "Uso concurrente con otros AINEs o corticosteroides."
        ],
        "efectos_adversos": [
            "Toxicidad GI (más común): Anorexia, vómitos, diarrea, melena, ulceración, perforación.",
            "Toxicidad Renal (necrosis papilar renal): Azoemia, PU/PD, fallo renal agudo.",
            "Toxicidad Hepática (idiosincrática): Aumento de enzimas hepáticas, ictericia, fallo hepático. (Más reportado en Labradores).",
            "Alteración de la función plaquetaria (raro)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Otros AINEs o Corticosteroides",
                "efecto": "Aumentan drásticamente el riesgo de toxicidad GI y renal. ¡Combinación contraindicada!",
                "severidad": "Grave"
            },
            {
                "farmaco": "IECA (enalapril, benazepril), Furosemida",
                "efecto": "Aumentan el riesgo de nefrotoxicidad.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Warfarina, otros fármacos de alta unión a proteínas",
                "efecto": "Pueden desplazar o ser desplazados, alterando los efectos.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Toxicidad GI, renal y hepática. Descontaminación GI (emesis, carbón activado múltiple). Fluidoterapia IV agresiva, protectores GI (misoprostol, sucralfato, omeprazol), soporte hepático (SAMe, NAC)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la ciclooxigenasa (COX), reduciendo la síntesis de prostaglandinas. Es preferencial por la COX-2 sobre la COX-1 a dosis terapéuticas, pero inhibe ambas. Produce efectos antiinflamatorios, analgésicos y antipiréticos.",
        "farmacocinetica": "Absorción oral rápida y completa. Alta unión a proteínas (>99%). Metabolismo hepático. Excreción biliar/fecal. Larga vida media en perros (~8 horas)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos masticables",
            "concentracion_texto": "25 mg, 75 mg, 100 mg",
            "valor_concentracion": 25,
            "unidad_concentracion": "mg",
            "es_divisible": true
        },
        {
            "tipo": "Cápsulas",
            "concentracion_texto": "25 mg, 75 mg, 100 mg",
            "valor_concentracion": 25,
            "unidad_concentracion": "mg",
            "es_divisible": false
        },
        {
            "tipo": "Inyección",
            "concentracion_texto": "50 mg/mL",
            "valor_concentracion": 50,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
