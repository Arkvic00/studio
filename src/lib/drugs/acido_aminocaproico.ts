import type { Drug } from '@/lib/types';

export const acidoAminocaproicoDrug: Drug = {
    "id": "acido_aminocaproico",
    "meta_data": {
      "nombre_generico": "Ácido Aminocaproico",
      "nombres_comerciales": ["Amicar"],
      "grupo_farmacologico": "Agente Antifibrinolítico / Hemostático",
      "status_regulatorio": "Uso extra-label en veterinaria."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inhibe la fibrinólisis (estabiliza los coágulos evitando que se rompan).",
        "Uso común en Galgos (Greyhounds) para prevenir sangrado post-quirúrgico.",
        "Tratamiento de mielopatía degenerativa en Pastores Alemanes (uso controversial/anecdótico).",
        "Eficaz en hemorragia inducida por hiperfibrinólisis."
      ],
      "usos_principales": "Prevención de hemorragia postoperatoria en galgos, tratamiento de trombocitopenia inmunomediada severa, hemofilia y hematuria renal."
    },
    "informacion_cliente": [
      "Puede causar malestar estomacal.",
      "En galgos, se inicia el día de la cirugía y se continúa por unos días.",
      "Se administra frecuentemente (3 veces al día)."
    ],
    "monitoreo_paciente": [
      "Signos de sangrado o trombosis.",
      "Potasio sérico (puede elevarse).",
      "Presión arterial (si se da IV rápido)."
    ],
    "interferencia_laboratorio": [
      "Potasio: Hiperpotasemia posible (raro).",
      "Pruebas de coagulación: No altera PT/PTT, pero estabiliza el coágulo."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Prevención sangrado en Galgos (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 500,
            "dosis_min": 500,
            "dosis_max": 1000,
            "unidad_calculo": "mg/perro"
          },
          "frecuencia": { "texto_ui": "Cada 8 horas por 3 días", "intervalo_horas": 8 },
          "notas_tecnicas": "Comenzar la mañana de la cirugía. Dosis fija de 500-1000 mg por perro, no por kg."
        },
        {
          "indicacion": "Mielopatía degenerativa (Anecdótico)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 500,
            "unidad_calculo": "mg/perro"
          },
          "frecuencia": { "texto_ui": "Cada 8 horas", "intervalo_horas": 8 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Coagulación intravascular diseminada (CID) activa (riesgo de trombosis fatal).",
        "Hematuria del tracto superior (puede causar obstrucción por coágulos)."
      ],
      "precauciones": [
        "Enfermedad cardiaca o hepática.",
        "Riesgo de hiperpotasemia en insuficiencia renal."
      ],
      "efectos_adversos": [
        "Malestar gastrointestinal.",
        "Trombosis.",
        "Hipotensión/Bradicardia (si IV es muy rápido).",
        "Miopatía (debilidad muscular) en uso prolongado."
      ],
      "sobredosis": {
        "signos": ["Hipotensión", "Convulsiones (raro)", "Falla renal"],
        "tratamiento": "Soporte."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Estrógenos", "efecto": "Aumenta estado de hipercoagulabilidad", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe competitivamente la activación del plasminógeno (evita que se convierta en plasmina), impidiendo así la disolución de la fibrina (el coágulo).",
      "farmacocinetica": "Buena absorción oral. Excreción renal rápida."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "500 mg, 1000 mg", "valor_concentracion": 500, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Solución oral", "concentracion_texto": "250 mg/mL", "valor_concentracion": 250, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
