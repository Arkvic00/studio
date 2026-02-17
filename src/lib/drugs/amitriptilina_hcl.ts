import type { Drug } from '@/lib/types';

export const amitriptilinaHclDrug: Drug = {
    "id": "amitriptilina_hcl",
    "meta_data": {
      "nombre_generico": "Amitriptilina HCl",
      "nombres_comerciales": ["Elavil"],
      "grupo_farmacologico": "Antidepresivo Tricíclico (TCA)",
      "status_regulatorio": "Uso extra-label en perros y gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Usado para problemas de comportamiento (ansiedad por separación) y dolor neuropático.",
        "Efectos anticolinérgicos (boca seca, retención orina) son comunes.",
        "Utilizado en gatos para cistitis intersticial idiopática.",
        "No usar con collares de amitraz (riesgo de síndrome serotoninérgico)."
      ],
      "usos_principales": "Ansiedad por separación, marcaje urinario, automutilación psicógena, dolor crónico neuropático y cistitis idiopática felina (FLUTD)."
    },
    "informacion_cliente": [
      "Puede tomar semanas ver el efecto completo en comportamiento.",
      "Puede causar somnolencia.",
      "No dejar de dar abruptamente.",
      "Mantener alejado de otras mascotas (las pastillas son tóxicas en sobredosis)."
    ],
    "monitoreo_paciente": [
      "Frecuencia cardiaca y ritmo.",
      "Signos de retención urinaria o estreñimiento.",
      "Eficacia en comportamiento."
    ],
    "interferencia_laboratorio": [
      "Glucosa: Puede alterar niveles.",
      "ECG: Cambios en el segmento ST o bloqueo AV."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Comportamiento / Dolor (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 1,
            "dosis_min": 1,
            "dosis_max": 2,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 a 24 horas", "intervalo_horas": 12 },
          "notas_tecnicas": "Para dolor neuropático dosis bajas suelen ser suficientes."
        }
      ],
      "gato": [
        {
          "indicacion": "Comportamiento / Cistitis idiopática",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 5,
            "dosis_min": 2.5,
            "dosis_max": 12.5,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Una vez al día (preferiblemente de noche)", "intervalo_horas": 24 },
          "notas_tecnicas": "El sabor es muy amargo; gatos pueden salivar profusamente."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Uso previo de IMAO (Inhibidores Monoamino Oxidasa) en los últimos 14 días.",
        "Arritmias cardiacas o historial de convulsiones."
      ],
      "precauciones": [
        "Retención urinaria, glaucoma, KCS (ojo seco) - por efectos anticolinérgicos.",
        "Enfermedad tiroidea."
      ],
      "efectos_adversos": [
        "Sedación profunda.",
        "Efectos anticolinérgicos: Boca seca, taquicardia, estreñimiento, retención urinaria.",
        "Aumento de peso / apetito.",
        "Arritmias (a dosis altas)."
      ],
      "sobredosis": {
        "signos": ["Arritmias cardiacas letales", "Convulsiones", "Coma"],
        "tratamiento": "Bicarbonato de sodio (para arritmias), fluidos, carbón activado. Fisiostigmina (uso controversial)."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Amitraz (collares/baños)", "efecto": "Riesgo de toxicidad por interacción MAO", "severidad": "Grave" },
        { "farmaco": "Tramadol", "efecto": "Aumenta riesgo de síndrome serotoninérgico o convulsiones", "severidad": "Importante" },
        { "farmaco": "Cimetidina", "efecto": "Inhibe metabolismo de amitriptilina", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloquea la recaptación de serotonina y norepinefrina en el SNC. También tiene fuerte actividad anticolinérgica y antihistamínica.",
      "farmacocinetica": "Bien absorbida, alto metabolismo de primer paso hepático."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "10 mg, 25 mg, 50 mg", "valor_concentracion": 10, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  };
