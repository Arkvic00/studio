import type { Drug } from '@/lib/types';

export const asparaginasaDrug: Drug = {
    "id": "asparaginasa",
    "meta_data": {
      "nombre_generico": "L-Asparaginasa",
      "nombres_comerciales": [
        "Elspar",
        "Oncaspar"
      ],
      "grupo_farmacologico": "Antineoplásico (Enzima)",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Específico para Linfoma y Leucemia.",
        "Actúa matando de hambre a las células cancerosas quitándoles asparagina.",
        "No causa supresión de médula ósea (seguro si hay neutropenia), pero causa muchas reacciones alérgicas.",
        "Se suele dar SC o IM (menos riesgo de anafilaxia que IV)."
      ],
      "usos_principales": "Inducción de remisión en Linfoma multicéntrico canino y felino (Protocolo Wisconsin/CHOP) y leucemia linfoblástica."
    },
    "informacion_cliente": [
      "Medicamento de quimioterapia.",
      "Riesgo de reacción alérgica inmediata (hinchazón, colapso) después de la inyección.",
      "Puede causar inflamación del páncreas (pancreatitis)."
    ],
    "monitoreo_paciente": [
      "Signos de anafilaxia (quedarse con el paciente 30 min post-inyección).",
      "Signos de pancreatitis (vómito, dolor abdominal).",
      "Glucosa (hiperglucemia transitoria)."
    ],
    "interferencia_laboratorio": [
      "Amonio sérico: Aumento (subproducto de la enzima).",
      "Tiroides: Puede bajar T4."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Linfoma (Protocolo)",
          "vias": ["IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 400,
            "unidad_calculo": "UI/kg"
          },
          "frecuencia": {
            "texto_ui": "Semanal o según protocolo",
            "intervalo_horas": 168
          },
          "notas_tecnicas": "Alternativa común: 10,000 UI/m2. Premedicar con difenhidramina reduce riesgo alérgico."
        }
      ],
      "gato": [
        {
          "indicacion": "Linfoma",
          "vias": ["IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 400,
            "unidad_calculo": "UI/kg"
          },
          "frecuencia": {
            "texto_ui": "Según protocolo",
            "intervalo_horas": 0
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Pancreatitis previa o activa.",
        "Historia de anafilaxia a asparaginasa."
      ],
      "precauciones": [
        "Diabetes mellitus."
      ],
      "efectos_adversos": [
        "Hipersensibilidad (Anafilaxia) - Muy común con dosis repetidas.",
        "Pancreatitis aguda.",
        "Coagulopatía (raro)."
      ],
      "sobredosis": {
        "signos": ["Anafilaxia", "Hepatotoxicidad"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Metotrexato",
          "efecto": "Antagonismo si se dan juntos (dar asparaginasa 24h después)",
          "severidad": "Importante"
        },
        {
          "farmaco": "Vincristina",
          "efecto": "Puede aumentar neurotoxicidad de vincristina",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Hidroliza la asparagina a ácido aspártico y amoníaco. Las células tumorales linfoides no pueden sintetizar asparagina y mueren, mientras las células normales sí pueden sintetizarla.",
      "farmacocinetica": "Permanece en espacio vascular. Vida media ~12-24h."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial Liofilizado",
        "concentracion_texto": "10,000 UI",
        "valor_concentracion": 10000,
        "unidad_concentracion": "UI",
        "es_divisible": false
      }
    ]
  };
