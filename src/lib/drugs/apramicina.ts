import type { Drug } from '@/lib/types';

export const apramicinaDrug: Drug = {
    "id": "apramicina",
    "meta_data": {
      "nombre_generico": "Apramicina Sulfato",
      "nombres_comerciales": [
        "Apralan"
      ],
      "grupo_farmacologico": "Antibiótico Aminoglucósido",
      "status_regulatorio": "Aprobado FDA (Cerdos). Uso extra-label en terneros."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Aminoglucósido usado en animales de producción.",
        "Específico para infecciones entéricas (digestivas) bacterianas.",
        "Similar a la neomicina o gentamicina.",
        "Resistencia cruzada común con gentamicina."
      ],
      "usos_principales": "Colibacilosis (infección por E. coli) en cerdos y terneros."
    },
    "informacion_cliente": [
      "Respetar tiempos de retiro en carne.",
      "Asegurar acceso al agua."
    ],
    "monitoreo_paciente": [
      "Eficacia contra diarrea.",
      "Hidratación."
    ],
    "interferencia_laboratorio": [
      "No reportada."
    ],
    "parametros_dosificacion": {
      "bovino": [
        {
          "indicacion": "Colibacilosis (Terneros)",
          "vias": ["PO (Agua/Leche)"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "dosis_min": 20,
            "dosis_max": 40,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 5 días",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Tiempo de retiro carne: 28 días."
        }
      ],
      "cerdo": [
        {
          "indicacion": "Colibacilosis post-destete",
          "vias": ["PO (Agua)"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 12.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Diario por 7 días",
            "intervalo_horas": 24
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Falla renal.",
        "Hipersensibilidad a aminoglucósidos."
      ],
      "precauciones": [
        "Gatos (muy susceptibles a ototoxicidad, no usar)."
      ],
      "efectos_adversos": [
        "Ototoxicidad.",
        "Nefrotoxicidad (menos común vía oral por baja absorción, pero posible en intestino inflamado).",
        "Diarrea."
      ],
      "sobredosis": {
        "signos": ["Daño renal", "Sordera"],
        "tratamiento": "Retirar fármaco, fluidos."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Otros aminoglucósidos",
          "efecto": "Toxicidad aditiva",
          "severidad": "Grave"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe síntesis proteica bacteriana (Ribosoma 30S). Bactericida.",
      "farmacocinetica": "Pobre absorción oral en adultos, algo mejor en neonatos. Acción principalmente local en intestino."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Polvo Soluble",
        "concentracion_texto": "Varios (ej. 75g/sobre)",
        "valor_concentracion": 1,
        "unidad_concentracion": "g",
        "es_divisible": true
      }
    ]
  };
