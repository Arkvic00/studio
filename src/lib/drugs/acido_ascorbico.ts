import type { Drug } from '@/lib/types';

export const acidoAscorbicoDrug: Drug = {
    "id": "acido_ascorbico",
    "meta_data": {
      "nombre_generico": "Ácido Ascórbico (Vitamina C)",
      "nombres_comerciales": [
        "Vitamin C",
        "Ascorbin"
      ],
      "grupo_farmacologico": "Vitamina Hidrosoluble / Acidificante Urinario",
      "status_regulatorio": "Suplemento / Uso extra-label."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Esencial en dietas de Cobayas (Cuyos) y Primates (no pueden sintetizarla).",
        "Perros y Gatos sintetizan su propia vitamina C en el hígado; la suplementación es raramente necesaria.",
        "Usado como acidificante urinario (poco confiable) y antioxidante.",
        "Tratamiento de metahemoglobinemia por acetaminofén (adyuvante)."
      ],
      "usos_principales": "Escorbuto en cobayas, acidificación urinaria, reducción de metahemoglobina."
    },
    "informacion_cliente": [
      "Las cobayas necesitan esto diariamente en su comida o agua.",
      "La vitamina C se degrada rápido en el agua (cambiar diario y proteger de luz).",
      "Dosis altas pueden causar diarrea."
    ],
    "monitoreo_paciente": [
      "pH urinario (si se usa para acidificar).",
      "Signos de escorbuto (sangrado encías, dolor articular) en cobayas."
    ],
    "interferencia_laboratorio": [
      "Glucosa urinaria: Falsos positivos (tiras reactivas)."
    ],
    "parametros_dosificacion": {
      "cobaya": [
        {
          "indicacion": "Prevención Escorbuto",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "dosis_min": 10,
            "dosis_max": 30,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Diario",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "En preñez o enfermedad subir a 30-50 mg/kg."
        },
        {
          "indicacion": "Tratamiento Escorbuto",
          "vias": ["PO", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 50,
            "dosis_min": 50,
            "dosis_max": 100,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          }
        }
      ],
      "perro": [
        {
          "indicacion": "Acidificación urinaria (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "dosis_min": 15,
            "dosis_max": 25,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 8 horas",
            "intervalo_horas": 8
          },
          "notas_tecnicas": "Eficacia dudosa."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Urolitiasis por oxalato/uratos (puede precipitar cristales)."
      ],
      "precauciones": [
        "Diabetes mellitus (interferencia en lecturas)."
      ],
      "efectos_adversos": [
        "Diarrea / Flatulencia (dosis altas).",
        "Irritación gástrica.",
        "Precipitación de cálculos de oxalato."
      ],
      "sobredosis": {
        "signos": ["Diarrea"],
        "tratamiento": "Suspender."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Aminoglucósidos",
          "efecto": "Aumenta excreción renal de aminoglucósidos (reduce eficacia)",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Cofactor enzimático, antioxidante, síntesis de colágeno.",
      "farmacocinetica": "Absorción activa saturable. Exceso se excreta en orina."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Tableta",
        "concentracion_texto": "100, 250, 500 mg",
        "valor_concentracion": 500,
        "unidad_concentracion": "mg",
        "es_divisible": true
      },
      {
        "tipo": "Inyectable",
        "concentracion_texto": "250 mg/mL",
        "valor_concentracion": 250,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  };
