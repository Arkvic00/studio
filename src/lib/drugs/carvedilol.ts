import type { Drug } from '@/lib/types';

export const carvedilolDrug: Drug = {
    "id": "carvedilol",
    "meta_data": {
        "nombre_generico": "Carvedilol",
        "nombres_comerciales": ["Coreg"],
        "grupo_farmacologico": "Beta-bloqueador (No selectivo, Beta-1, Beta-2) con bloqueo Alfa-1",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Sus propiedades únicas (beta y alfa bloqueo, antioxidante) lo hacen teóricamente beneficioso en ICC, pero su uso requiere titulación cuidadosa.",
            "No suspender abruptamente."
        ],
        "usos_principales": "Tratamiento adyuvante de la insuficiencia cardíaca congestiva (ICC) leve a moderada en perros (especialmente CMD). Hipertensión sistémica."
    },
    "informacion_cliente": [
        "Este medicamento requiere un inicio gradual y monitoreo cercano. Administrar con comida. Informar si hay debilidad extrema, desmayo, tos o dificultad para respirar. No suspender abruptamente."
    ],
    "monitoreo_paciente": [
        "Frecuencia cardíaca, ritmo cardíaco (ECG).",
        "Presión arterial.",
        "Signos de empeoramiento de la ICC (frecuencia respiratoria, tos).",
        "Tolerancia (letargo, síncope)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Insuficiencia Cardíaca Congestiva (ICC) / CMD",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 0.2,
                    "dosis_min": 0.1,
                    "dosis_max": 0.3,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "Iniciar con 0.1–0.3 mg/kg PO cada 12 horas. Aumentar gradualmente cada 1-2 semanas hasta dosis objetivo de 0.8–1.2 mg/kg PO cada 12 horas, si se tolera."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Asma o enfermedad broncoespástica severa (debido al bloqueo beta-2).",
            "Insuficiencia cardíaca descompensada, shock cardiogénico.",
            "Bradicardia severa o bloqueo AV de alto grado.",
            "Disfunción hepática severa."
        ],
        "efectos_adversos": [
            "Letargo, debilidad, síncope (debido a hipotensión o bradicardia).",
            "Bradicardia.",
            "Hipotensión.",
            "Broncoconstricción (en pacientes susceptibles).",
            "Empeoramiento de la insuficiencia cardíaca (especialmente al inicio)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Digoxina, Diltiazem",
                "efecto": "Aumentan el riesgo de bradicardia y bloqueo AV.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Diuréticos, IECA, otros antihipertensivos",
                "efecto": "Aumentan el riesgo de hipotensión.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Insulina",
                "efecto": "Puede enmascarar signos de hipoglucemia.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Rifampicina",
                "efecto": "Disminuye los niveles de carvedilol.",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Cimetidina",
                "efecto": "Aumenta los niveles de carvedilol.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa bradicardia severa, hipotensión, broncoespasmo, fallo cardíaco. Tratamiento similar a sobredosis de atenolol (Atropina, Glucagón, fluidos, vasopresores)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Bloquea los receptores adrenérgicos beta-1, beta-2 y alfa-1. Beta-bloqueo: Reduce la frecuencia cardíaca y la contractilidad. Alfa-bloqueo: Causa vasodilatación periférica, reduciendo la precarga y la poscarga. También tiene propiedades antioxidantes y antiproliferativas.",
        "farmacocinetica": "Absorción oral rápida pero con extenso metabolismo de primer paso hepático (~75%). Biodisponibilidad ~25%. Alta unión a proteínas. Metabolismo hepático (CYP2D6, CYP2C9)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "3.125 mg, 6.25 mg, 12.5 mg, 25 mg",
            "valor_concentracion": 3.125,
            "unidad_concentracion": "mg",
            "es_divisible": true
        }
    ]
};
