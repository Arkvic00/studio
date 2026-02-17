import type { Drug } from '@/lib/types';

export const azitromicinaDrug: Drug = {
    "id": "azitromicina",
    "meta_data": {
      "nombre_generico": "Azitromicina",
      "nombres_comerciales": [
        "Zithromax"
      ],
      "grupo_farmacologico": "Antibiótico Macrólido (Azálida)",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Antibiótico de larga duración (se acumula en tejidos y glóbulos blancos).",
        "Efectivo contra patógenos respiratorios y parásitos intracelulares (Babesia, Cytauxzoon).",
        "Puede causar vómitos; administrar con comida.",
        "Uso popular para rinitis crónica felina y papilomatosis oral canina."
      ],
      "usos_principales": "Infecciones respiratorias superiores (gatos), Bartonelosis, Babesiosis (con atovacuona), Criptosporidiosis, Papilomatosis, Hiperplasia gingival por ciclosporina."
    },
    "informacion_cliente": [
      "No usar en animales con problemas de hígado graves.",
      "Puede causar vómitos o diarrea.",
      "En gatos con problemas respiratorios crónicos, se usa a largo plazo en días alternos."
    ],
    "monitoreo_paciente": [
      "Tolerancia GI.",
      "Enzimas hepáticas (tratamientos largos)."
    ],
    "interferencia_laboratorio": [
      "Ninguna específica."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Babesia gibsoni (con Atovacuona)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 10 días",
            "intervalo_horas": 24
          }
        },
        {
          "indicacion": "Papilomatosis oral / Hiperplasia gingival",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Duración de 10 a 14 días para papilomas."
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones respiratorias (URI)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 5,
            "dosis_min": 5,
            "dosis_max": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 3-5 días",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Debido a su larga vida media, cursos cortos (3-5 días) mantienen niveles por más tiempo. Para crónicos: cada 48-72h."
        },
        {
          "indicacion": "Cytauxzoonosis (con Atovacuona)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 10 días",
            "intervalo_horas": 24
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a macrólidos.",
        "Falla hepática."
      ],
      "precauciones": [
        "Puede causar arritmias en pacientes cardiacos (prolongación QT - raro en vet pero posible)."
      ],
      "efectos_adversos": [
        "Vómitos (dosis-dependiente).",
        "Diarrea.",
        "Anorexia."
      ],
      "sobredosis": {
        "signos": ["Trastornos GI severos"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Ciclosporina",
          "efecto": "Aumenta niveles de ciclosporina",
          "severidad": "Importante"
        },
        {
          "farmaco": "Antiácidos (Aluminio/Magnesio)",
          "efecto": "Reducen tasa de absorción (separar 2 horas)",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe síntesis proteica bacteriana (Ribosoma 50S). Bacteriostático.",
      "farmacocinetica": "Se concentra en fagocitos y fibroblastos, liberándose lentamente en sitios de infección. Niveles en tejido mucho mayores que en suero."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Tableta",
        "concentracion_texto": "250 mg, 600 mg",
        "valor_concentracion": 250,
        "unidad_concentracion": "mg",
        "es_divisible": true
      },
      {
        "tipo": "Suspensión Oral",
        "concentracion_texto": "100 mg/5mL, 200 mg/5mL",
        "valor_concentracion": 20,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  };
