import type { Drug } from '@/lib/types';

export const gonadotropinaCorionicaDrug: Drug = {
    "id": "gonadotropina_cori_nica_hcg",
    "meta_data": {
        "nombre_generico": "Gonadotropina Coriónica (hCG)",
        "nombres_comerciales": ["Chorulon", "Novarel", "Pregnyl"],
        "grupo_farmacologico": "Hormona; Análogo de LH",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Actúa como LH.",
            "La Deslorelina (SucroMate, Ovuplant) es otra opción (agonista de GnRH) para la inducción de la ovulación en yeguas."
        ],
        "usos_principales": "Hembras (Yeguas, Vacas): Inducción de la ovulación (cuando hay un folículo maduro presente). Tratamiento de quistes foliculares (vacas). Machos: Diagnóstico de criptorquidia (prueba de estimulación con hCG: medir testosterona antes y después de hCG; si aumenta, hay tejido testicular). Tratamiento de la falta de libido (rara vez efectivo)."
    },
    "informacion_cliente": [
        "Este es un medicamento hormonal inyectable usado para la reproducción."
    ],
    "monitoreo_paciente": [
        "Ovulación (palpación rectal/ecografía en yeguas/vacas).",
        "Niveles de testosterona (para prueba de criptorquidia)."
    ],
    "parametros_dosificacion": {
        "caballo": [
            {
                "indicacion": "Inducción de la ovulación (Yeguas)",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "UI"
                },
                "notas_tecnicas": "1500–3000 UI IV o IM (cuando el folículo es >35 mm)."
            },
            {
                "indicacion": "Diagnóstico de Criptorquidia (Machos)",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "UI"
                },
                "notas_tecnicas": "6000–10,000 UI IV o IM (tomar muestras de sangre antes y 2h y 24h después)."
            }
        ],
        "bovino": [
            {
                "indicacion": "Inducción de ovulación / Quistes ováricos",
                "vias": ["IV", "IM"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "UI"
                },
                "notas_tecnicas": "1500–5000 UI IV o IM."
            }
        ],
        "perro": [
            {
                "indicacion": "Inducción de ovulación (extra-etiqueta)",
                "vias": ["IM"],
                "math": {
                    "tipo_calculo": "fija",
                    "unidad_calculo": "UI"
                },
                "notas_tecnicas": "500–1000 UI IM."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad.",
            "Quistes ováricos andrógeno-secretantes."
        ],
        "efectos_adversos": [
            "Reacciones de hipersensibilidad (es una proteína extraña).",
            "Formación de anticuerpos con uso repetido, reduciendo la eficacia.",
            "Hiperestimulación ovárica (rara)."
        ],
        "interacciones_farmacologicas": [],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Poco probable. Puede causar hiperestimulación ovárica."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Hormona proteica producida por la placenta humana. Imita la acción de la Hormona Luteinizante (LH) (y en menor medida, la FSH). En hembras: Induce la ovulación de folículos maduros, promueve la formación del cuerpo lúteo. En machos: Estimula las células de Leydig en los testículos para producir testosterona.",
        "farmacocinetica": "Administración parenteral. Vida media ~24-36 horas."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección",
            "concentracion_texto": "Polvo liofilizado de 5,000 UI, 10,000 UI, 20,000 UI por vial",
            "valor_concentracion": 5000,
            "unidad_concentracion": "UI",
            "es_divisible": false
        }
    ]
};
