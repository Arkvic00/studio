import type { Drug } from '@/lib/types';

export const clopidogrelBisulfatoDrug: Drug = {
    "id": "clopidogrel_bisulfato",
    "meta_data": {
        "nombre_generico": "Clopidogrel Bisulfato",
        "nombres_comerciales": ["Plavix"],
        "grupo_farmacologico": "Antiplaquetario; Inhibidor del receptor de ADP",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Es el antiplaquetario de elección para la prevención de ATE en gatos, considerado superior a la aspirina.",
            "El sabor amargo es un desafío significativo en gatos."
        ],
        "usos_principales": "Prevención y tratamiento del tromboembolismo arterial (TEA) en gatos con cardiomiopatía hipertrófica (CMH) o enfermedad cardíaca de alto riesgo. Tratamiento adyuvante después de un episodio de ATE en gatos. Prevención de trombosis en perros con enfermedades hipercoagulables (p. ej., AHIM, enfermedad renal)."
    },
    "informacion_cliente": [
        "Administrar una vez al día. El comprimido es muy amargo; puede ser necesario ocultarlo en una cápsula o premio. Informar si se observa sangrado, hematomas o heces negras."
    ],
    "monitoreo_paciente": [
        "Signos de sangrado (hematomas, melena, epistaxis, hematuria).",
        "Eficacia (prevención de ATE).",
        "Cumplimiento (difícil en gatos por el sabor)."
    ],
    "parametros_dosificacion": {
        "gato": [
            {
                "indicacion": "Prevención de ATE (tromboembolismo)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "mg/gato"
                },
                "frecuencia": {
                    "texto_ui": "cada 24 horas",
                    "intervalo_horas": 24
                },
                "notas_tecnicas": "18.75 mg/gato PO cada 24 horas (1/4 de comprimido de 75 mg)."
            }
        ],
        "perro": [
            {
                "indicacion": "Estado hipercoagulable (prevención de trombos)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 2,
                    "dosis_min": 1,
                    "dosis_max": 3,
                    "unidad_calculo": "mg/kg"
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
            "Hipersensibilidad.",
            "Sangrado activo (p. ej., úlceras GI).",
            "Disfunción hepática severa (no puede activar el profármaco)."
        ],
        "efectos_adversos": [
            "Sangrado o hematomas (más común).",
            "Malestar GI (vómitos, anorexia) - especialmente en gatos.",
            "Rechazo del sabor (muy amargo)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Inhibidores de la bomba de protones (Omeprazol)",
                "efecto": "Pueden reducir la activación metabólica del clopidogrel, disminuyendo su eficacia (controvertido).",
                "severidad": "Moderada"
            },
            {
                "farmaco": "AINEs, Aspirina, Heparina",
                "efecto": "Aumentan el riesgo de sangrado.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Causa sangrado. No hay antídoto específico fácilmente disponible (Andexanet alfa es el antídoto humano). Descontinuar el fármaco. Administrar carbón activado si la ingestión es reciente. Proporcionar soporte hemostático (plasma fresco congelado, concentrado de complejo de protrombina - PCC, transfusiones)."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Profármaco que se metaboliza (CYP450) a un metabolito activo. Este metabolito se une irreversiblemente a los receptores plaquetarios P2Y12, inhibiendo la agregación plaquetaria inducida por ADP. Inhibe la agregación plaquetaria. El efecto dura la vida de la plaqueta (7-10 días).",
        "farmacocinetica": "Absorción oral buena. Requiere activación metabólica en el hígado. Inicio de acción retardado (24-48 horas para efecto máximo)."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Comprimidos",
            "concentracion_texto": "75 mg, 300 mg",
            "valor_concentracion": 75,
            "unidad_concentracion": "mg",
            "es_divisible": true
        }
    ]
};
