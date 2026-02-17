import type { Drug } from '@/lib/types';

export const azatioprinaDrug: Drug = {
    "id": "azatioprina",
    "meta_data": {
      "nombre_generico": "Azatioprina",
      "nombres_comerciales": [
        "Imuran"
      ],
      "grupo_farmacologico": "Inmunosupresor (Antimetabolito)",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inmunosupresor potente usado para enfermedades autoinmunes (IMHA, Pénfigo, IBD).",
        "EXTREMADAMENTE TÓXICO PARA GATOS (no pueden metabolizarla bien, causa supresión medular fatal).",
        "Efecto lento (tarda 3-6 semanas en funcionar); usar esteroides al inicio.",
        "Permite reducir la dosis de esteroides a largo plazo."
      ],
      "usos_principales": "Anemia hemolítica inmunomediada (IMHA), trombocitopenia, poliartritis, enfermedad inflamatoria intestinal (IBD) en perros."
    },
    "informacion_cliente": [
      "NUNCA DAR A GATOS (salvo indicación de experto con dosis minúscula, mejor evitar).",
      "Usar guantes al manipular las pastillas (es un agente cancerígeno potencial).",
      "Requiere monitoreo de sangre frecuente.",
      "Si hay vómito o diarrea severa, o pancreatitis, avisar."
    ],
    "monitoreo_paciente": [
      "Hemograma completo (CBC) cada 2 semanas los primeros meses (vigilar leucopenia/trombocitopenia).",
      "Enzimas hepáticas (ALT/ALP) - Hepatotoxicidad.",
      "Signos de pancreatitis."
    ],
    "interferencia_laboratorio": [
      "Leucopenia / Anemia (Efecto farmacológico).",
      "Elevación de enzimas hepáticas."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Enfermedades inmunomediadas",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 2,
            "dosis_min": 1.5,
            "dosis_max": 2.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día (luego cada 48h)",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Iniciar diario, cuando hay remisión, bajar a días alternos."
        }
      ],
      "gato": [
        {
          "indicacion": "NO RECOMENDADO",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.3,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 48 horas",
            "intervalo_horas": 48
          },
          "notas_tecnicas": "Dosis muy baja (0.3 mg/kg c/48h) si es absolutamente necesario. Clorambucilo es preferible."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Gatos (Relativa/Absoluta por toxicidad).",
        "Supresión de médula ósea preexistente.",
        "Pancreatitis previa."
      ],
      "precauciones": [
        "Embarazo (teratogénico).",
        "Manipulación humana (riesgo carcinogénico)."
      ],
      "efectos_adversos": [
        "Supresión de médula ósea (Leucopenia, Trombocitopenia).",
        "Hepatotoxicidad (necrosis hepática aguda en perros).",
        "Pancreatitis aguda.",
        "Vómitos/Diarrea."
      ],
      "sobredosis": {
        "signos": ["Infecciones secundarias (sepsis)", "Sangrado", "Falla hepática"],
        "tratamiento": "Soporte, transfusiones, antibióticos."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Alopurinol",
          "efecto": "Bloquea metabolismo de azatioprina (toxicidad medular masiva y fatal)",
          "severidad": "Grave"
        },
        {
          "farmaco": "Relajantes musculares",
          "efecto": "Puede inhibir bloqueadores neuromusculares",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Antimetabolito de purina. Se convierte en 6-mercaptopurina, interfiere con síntesis de ADN/ARN y linfocitos T.",
      "farmacocinetica": "Metabolismo hepático complejo (xantina oxidasa y TPMT). Gatos tienen baja actividad de TPMT, acumulando metabolitos tóxicos."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Tableta",
        "concentracion_texto": "50 mg",
        "valor_concentracion": 50,
        "unidad_concentracion": "mg",
        "es_divisible": true
      }
    ]
  };
