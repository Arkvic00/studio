import type { Drug } from '@/lib/types';

export const amprolioDrug: Drug = {
    "id": "amprolio",
    "meta_data": {
      "nombre_generico": "Amprolio",
      "nombres_comerciales": [
        "Corid",
        "Amprol"
      ],
      "grupo_farmacologico": "Antiprotozoario / Coccidiostato",
      "status_regulatorio": "Aprobado FDA (Bovinos, Aves). Uso extra-label en perros y gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Análogo estructural de la Tiamina (Vitamina B1).",
        "Mata al parásito matándolo de hambre de tiamina.",
        "El uso prolongado a dosis altas puede causar deficiencia de tiamina en el paciente (polioencefalomalacia).",
        "Efectivo contra Coccidias (Eimeria, Isospora)."
      ],
      "usos_principales": "Tratamiento y prevención de coccidiosis en terneros, aves, ovejas, perros (especialmente en perreras) y gatos."
    },
    "informacion_cliente": [
      "Suele administrarse en el agua de bebida o comida para animales de granja.",
      "El líquido sabe mal; asegurar que el animal lo consuma.",
      "Si el animal muestra signos neurológicos (temblores, mirada fija), suspender y avisar."
    ],
    "monitoreo_paciente": [
      "Conteo fecal de oocistos (para eficacia).",
      "Signos neurológicos (deficiencia de tiamina).",
      "Apetito."
    ],
    "interferencia_laboratorio": [
      "No reportadas."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Coccidiosis (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 150,
            "dosis_min": 100,
            "dosis_max": 200,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 7-10 días",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Suele usarse la solución al 9.6% o el polvo al 20%. Alternativa: 300-400 mg/kg por 5 días."
        }
      ],
      "gato": [
        {
          "indicacion": "Coccidiosis (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 90,
            "dosis_min": 60,
            "dosis_max": 120,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 7-12 días",
            "intervalo_horas": 24
          }
        }
      ],
      "bovino": [
        {
          "indicacion": "Tratamiento Coccidiosis (Etiqueta)",
          "vias": ["PO (Agua/Comida)"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 5 días",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Prevención: 5 mg/kg por 21 días."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Animales con deficiencia de tiamina conocida.",
        "Debilidad extrema."
      ],
      "precauciones": [
        "Uso prolongado (>14 días)."
      ],
      "efectos_adversos": [
        "Deficiencia de tiamina (SNC, ataxia, convulsiones).",
        "Diarrea.",
        "Anorexia."
      ],
      "sobredosis": {
        "signos": ["Signos neurológicos centrales", "Polioencefalomalacia"],
        "tratamiento": "Tiamina parenteral inmediatamente."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Tiamina (exógena)",
          "efecto": "Antagoniza el efecto del fármaco sobre los parásitos (no suplementar tiamina durante el tratamiento a menos que haya toxicidad)",
          "severidad": "Importante"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe competitivamente el transporte activo de tiamina en el parásito. La coccidia requiere tiamina para replicarse.",
      "farmacocinetica": "Baja absorción sistémica, actúa principalmente en el lumen intestinal."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Solución Oral",
        "concentracion_texto": "9.6% (96 mg/mL)",
        "valor_concentracion": 96,
        "unidad_concentracion": "mg/ml",
        "es_divisible": true
      },
      {
        "tipo": "Polvo Soluble",
        "concentracion_texto": "20%",
        "valor_concentracion": 200,
        "unidad_concentracion": "mg/g",
        "es_divisible": true
      }
    ]
  };
