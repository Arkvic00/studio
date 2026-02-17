import type { Drug } from '@/lib/types';

export const auranofinaDrug: Drug = {
    "id": "auranofina",
    "meta_data": {
      "nombre_generico": "Auranofina",
      "nombres_comerciales": [
        "Ridaura"
      ],
      "grupo_farmacologico": "Sales de Oro (Antirreumático)",
      "status_regulatorio": "Uso extra-label en veterinaria. Rara vez usado actualmente."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inmunosupresor usado para pénfigo complejo autoinmune.",
        "Alternativa oral a las sales de oro inyectables.",
        "Inicio de acción muy lento (semanas a meses).",
        "Ha caído en desuso frente a fármacos más modernos (Ciclosporina, Apoquel, etc.)."
      ],
      "usos_principales": "Enfermedades de la piel inmunomediadas (Pénfigo) en perros y gatos, Artritis reumatoide canina."
    },
    "informacion_cliente": [
      "Pueden pasar meses antes de ver mejoría.",
      "Requiere análisis de sangre frecuentes.",
      "Diarrea es un efecto común."
    ],
    "monitoreo_paciente": [
      "Plaquetas (riesgo de trombocitopenia grave) - cada 2 semanas.",
      "Análisis de orina (proteinuria).",
      "Hemograma y bioquímica."
    ],
    "interferencia_laboratorio": [
      "Proteinuria (daño renal)."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Pénfigo / Artritis",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.1,
            "dosis_min": 0.05,
            "dosis_max": 0.2,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          }
        }
      ],
      "gato": [
        {
          "indicacion": "Pénfigo",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.15,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Trombocitopenia previa.",
        "Enfermedad renal severa.",
        "Lupus eritematoso sistémico."
      ],
      "precauciones": [
        "Animales debilitados."
      ],
      "efectos_adversos": [
        "Diarrea (común).",
        "Trombocitopenia (baja de plaquetas) - Grave.",
        "Proteinuria / Nefrosis.",
        "Erupciones cutáneas."
      ],
      "sobredosis": {
        "signos": ["Diarrea severa", "Problemas renales"],
        "tratamiento": "Soporte."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Otros inmunosupresores",
          "efecto": "Riesgo aditivo de supresión medular",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe la fagocitosis y la liberación de enzimas lisosomales y prostaglandinas. Contiene 29% de oro.",
      "farmacocinetica": "Absorción oral ~20-25%. Se une a células sanguíneas."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Cápsula",
        "concentracion_texto": "3 mg",
        "valor_concentracion": 3,
        "unidad_concentracion": "mg",
        "es_divisible": false
      }
    ]
  };
