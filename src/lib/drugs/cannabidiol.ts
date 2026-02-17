import type { Drug } from '@/lib/types';

export const cannabidiolDrug: Drug = {
    "id": "cannabidiol_cbd",
    "meta_data": {
        "nombre_generico": "Cannabidiol (CBD)",
        "nombres_comerciales": ["Varios (Epidiolex - Rx humano para epilepsia)"],
        "grupo_farmacologico": "Cannabinoide",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "La calidad y concentración de los productos de CBD OTC varían enormemente. Muchos no contienen la cantidad indicada o contienen THC.",
            "La interacción con el metabolismo de otros fármacos (CYP450) es una preocupación importante.",
            "Se necesita mucha más investigación para establecer la eficacia y seguridad en animales."
        ],
        "usos_principales": "Potencial (evidencia limitada en veterinaria): Osteoartritis (dolor/inflamación), Epilepsia (adyuvante), Ansiedad, Dermatitis atópica. Epidiolex (humano): Aprobado para ciertos síndromes epilépticos refractarios."
    },
    "informacion_cliente": [
        "La eficacia y seguridad no están completamente establecidas. Elegir productos de buena reputación con análisis de terceros (Certificado de Análisis). Informar al veterinario sobre TODOS los medicamentos y suplementos que recibe la mascota. Puede causar somnolencia o malestar estomacal. Requiere monitoreo hepático."
    ],
    "monitoreo_paciente": [
        "Eficacia clínica (dolor, convulsiones, ansiedad).",
        "Enzimas hepáticas (ALT) - antes y durante la terapia.",
        "Niveles de otros fármacos (si se usan concurrentemente).",
        "Signos de efectos adversos (sedación, GI)."
    ],
    "parametros_dosificacion": {
        "perro": [
            {
                "indicacion": "Osteoartritis (basado en estudios limitados)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 2,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                }
            },
            {
                "indicacion": "Epilepsia (basado en estudios limitados)",
                "vias": ["PO"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 2.5,
                    "unidad_calculo": "mg/kg"
                },
                "frecuencia": {
                    "texto_ui": "cada 12 horas",
                    "intervalo_horas": 12
                },
                "notas_tecnicas": "adyuvante"
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Disfunción hepática severa.",
            "No usar en animales gestantes/lactantes (falta de datos)."
        ],
        "efectos_adversos": [
            "Letargo, sedación, ataxia.",
            "Aumento de la Alanina Aminotransferasa (ALT) hepática (dosis-dependiente).",
            "Diarrea, vómitos, cambios en el apetito.",
            "Boca seca."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Inhibidor potente de enzimas CYP450 (CYP3A4, CYP2C19)",
                "efecto": "Puede aumentar los niveles de muchos fármacos metabolizados por estas vías (p. ej., fenobarbital, clomipramina, ciclosporina, AINEs).",
                "severidad": "Moderada"
            },
            {
                "farmaco": "Inductores de CYP450 (Fenobarbital)",
                "efecto": "Pueden disminuir los niveles de CBD.",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Generalmente seguro, causa sedación y ataxia pronunciadas. Riesgo mayor si el producto contiene THC (toxicosis por marihuana). Tratamiento de apoyo."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "No completamente entendido. Interactúa con el sistema endocannabinoide (receptores CB1, CB2) y otros receptores (serotonina 5-HT1A, TRPV1). No es psicoactivo como el THC. Potenciales efectos analgésicos, antiinflamatorios, anticonvulsivos, ansiolíticos y antieméticos.",
        "farmacocinetica": "Absorción oral pobre y errática (mejor con comida grasa). Alto metabolismo de primer paso hepático (CYP450). Alta unión a proteínas. Larga vida media. Excreción biliar/fecal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Aceites, Tinturas, Comprimidos masticables, Tópicos",
            "concentracion_texto": "Concentraciones muy variables (productos no regulados).",
            "valor_concentracion": 0,
            "unidad_concentracion": "",
            "es_divisible": true
        },
        {
            "tipo": "Solución oral (Epidiolex)",
            "concentracion_texto": "100 mg/mL",
            "valor_concentracion": 100,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
