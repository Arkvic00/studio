import type { Drug } from '@/lib/types';

export const amoxicilinaClavulanatoDrug: Drug = {
    "id": "amoxicilina_clavulanato",
    "meta_data": {
      "nombre_generico": "Amoxicilina / Clavulanato de Potasio",
      "nombres_comerciales": ["Clavamox", "Augmentin"],
      "grupo_farmacologico": "Penicilina Potenciada",
      "status_regulatorio": "Aprobado FDA (Perros y Gatos)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "El ácido clavulánico inhibe irreversiblemente las beta-lactamasas, permitiendo que la amoxicilina mate bacterias resistentes (ej. Staph, E. coli).",
        "Las tabletas vienen en foil y son sensibles a la humedad.",
        "Causa más vómito que la amoxicilina sola.",
        "Espectro amplio: Gram+, Gram- y Anaerobios."
      ],
      "usos_principales": "Infecciones de piel (piodermas), infecciones del tracto urinario, heridas infectadas, abscesos e infecciones orales."
    },
    "informacion_cliente": [
      "Mantener tabletas en su empaque original hasta el momento de uso.",
      "Dar con comida ayuda a reducir el vómito.",
      "Completar todo el ciclo.",
      "La suspensión líquida dura solo 10 días refrigerada."
    ],
    "monitoreo_paciente": [
      "Resolución de signos clínicos.",
      "Tolerancia gastrointestinal."
    ],
    "interferencia_laboratorio": [
      "Igual que amoxicilina."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones de piel / Tejidos blandos",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 13.75,
            "dosis_min": 12.5,
            "dosis_max": 20,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "notas_tecnicas": "Dosis basada en la combinación de ambos agentes. Para infecciones severas o refractarias se usan hasta 20 mg/kg."
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones urinarias / Piel",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 62.5,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "notas_tecnicas": "Dosis de etiqueta es 62.5 mg por gato. Muchos clínicos usan dosis basada en peso (13.75-20 mg/kg) en gatos grandes."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Historial de colestasis o ictericia asociada a amoxi/clav.",
        "Hipersensibilidad a penicilinas.",
        "Pequeños herbívoros."
      ],
      "precauciones": [
        "Enfermedad hepática."
      ],
      "efectos_adversos": [
        "Vómitos (muy común, hasta 10-15%).",
        "Diarrea.",
        "Anorexia."
      ],
      "sobredosis": {
        "signos": ["Vómitos severos", "Dolor abdominal", "Diarrea"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Igual que amoxicilina", "efecto": "", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Amoxicilina: inhibe pared celular. Clavulanato: inhibe beta-lactamasas (enzimas de resistencia).",
      "farmacocinetica": "El clavulanato tiene buena absorción y penetración, similar a la amoxicilina."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "62.5, 125, 250, 375 mg", "valor_concentracion": 62.5, "unidad_concentracion": "mg", "es_divisible": false },
      { "tipo": "Suspensión", "concentracion_texto": "62.5 mg/mL", "valor_concentracion": 62.5, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
