import type { Drug } from '@/lib/types';

export const ceftiofurAcidoLibreDrug: Drug = {
    "id": "ceftiofur_cido_libre_cristalino_ccfa",
    "meta_data": {
        "nombre_generico": "Ceftiofur Ácido Libre Cristalino (CCFA)",
        "nombres_comerciales": ["Excede (Ganado/Cerdos)", "Excede (Caballos)"],
        "grupo_farmacologico": "Antibiótico; Cefalosporina (3ª Generación)",
        "status_regulatorio": "Uso veterinario"
    },
    "resumen_clinico": {
        "puntos_clave": [
            "Formulación de acción prolongada del Ceftiofur.",
            "La ubicación de la inyección es crítica y específica de la especie.",
            "Prohibido el uso extra-etiqueta en ganado por la FDA para prevenir residuos."
        ],
        "usos_principales": "Tratamiento de la enfermedad respiratoria bovina (ERB). Tratamiento de la pododermatitis infecciosa bovina (gabarro). Tratamiento de la enfermedad respiratoria porcina (ERP). Tratamiento de infecciones del tracto respiratorio inferior en caballos (Strep. zooepidemicus)."
    },
    "informacion_cliente": [
        "Medicamento para ganado/caballos. Seguir los tiempos de retiro de carne y leche especificados."
    ],
    "monitoreo_paciente": [
        "Resolución de signos clínicos."
    ],
    "parametros_dosificacion": {
        "bovino": [
            {
                "indicacion": "ERB / Gabarro",
                "vias": ["SC (Base oreja)"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 6.6,
                    "unidad_calculo": "mg/kg"
                },
                "notas_tecnicas": "6.6 mg/kg SC (base de la oreja). Dosis única."
            }
        ],
        "cerdo": [
            {
                "indicacion": "ERP",
                "vias": ["IM (Cuello)"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 5,
                    "unidad_calculo": "mg/kg"
                },
                "notas_tecnicas": "5 mg/kg IM (cuello). Dosis única."
            }
        ],
        "caballo": [
            {
                "indicacion": "Infección respiratoria",
                "vias": ["IM (Cuello)"],
                "math": {
                    "tipo_calculo": "mg_kg",
                    "dosis_recomendada": 6.6,
                    "unidad_calculo": "mg/kg"
                },
                "notas_tecnicas": "6.6 mg/kg IM (cuello). Administrar 2 dosis con 4 días de diferencia (Día 0 y Día 4)."
            }
        ]
    },
    "seguridad_y_alertas": {
        "contraindicaciones": [
            "Hipersensibilidad a cefalosporinas o penicilinas.",
            "No usar en terneros para sacrificar como ternera (prohibido por la FDA)."
        ],
        "efectos_adversos": [
            "Reacciones en el sitio de inyección (hinchazón, dolor) - común.",
            "Heces blandas transitorias.",
            "Reacciones de hipersensibilidad (raras)."
        ],
        "interacciones_farmacologicas": [
            {
                "farmaco": "Ninguna clínicamente significativa.",
                "efecto": "",
                "severidad": "Moderada"
            }
        ],
        "sobredosis": {
            "signos": [],
            "tratamiento": "Relativamente seguro."
        }
    },
    "farmacologia_clinica": {
        "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana. Es bactericida. Amplio espectro. Activo contra Gram-positivos (Strep) y Gram-negativos (Pasteurella, Mannheimia, E. coli, Salmonella).",
        "farmacocinetica": "Formulación de liberación prolongada. Se absorbe lentamente desde el sitio de inyección y se metaboliza rápidamente a desfuroilceftiofur (metabolito activo). Larga vida media, permitiendo dosificación espaciada. Excreción renal y fecal."
    },
    "presentaciones_comerciales": [
        {
            "tipo": "Inyección (suspensión estéril)",
            "concentracion_texto": "100 mg/mL (Excede para Ganado/Cerdos)",
            "valor_concentracion": 100,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        },
        {
            "tipo": "Inyección (suspensión estéril)",
            "concentracion_texto": "200 mg/mL (Excede para Caballos)",
            "valor_concentracion": 200,
            "unidad_concentracion": "mg/mL",
            "es_divisible": false
        }
    ]
};
