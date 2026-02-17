import type { Drug } from '@/lib/types';

export const atenololDrug: Drug = {
    "id": "atenolol",
    "meta_data": {
      "nombre_generico": "Atenolol",
      "nombres_comerciales": [
        "Tenormin"
      ],
      "grupo_farmacologico": "Beta-bloqueador (Selectivo Beta-1)",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Bloqueador beta-1 cardio-selectivo (afecta principalmente al corazón, menos a los pulmones).",
        "Reduce la frecuencia cardiaca, la presión arterial y la demanda de oxígeno del miocardio.",
        "Más seguro que el Propranolol para pacientes con asma/problemas respiratorios.",
        "No suspender abruptamente (efecto rebote)."
      ],
      "usos_principales": "Taquiarritmias (supraventriculares y ventriculares), miocardiopatía hipertrófica (especialmente en gatos), hipertensión sistémica y estenosis subaórtica."
    },
    "informacion_cliente": [
      "No dejar de dar la medicina de golpe; puede causar problemas cardiacos graves.",
      "El animal puede estar un poco más letárgico o tranquilo de lo normal.",
      "Si se desmaya o tiene debilidad extrema, contactar al veterinario."
    ],
    "monitoreo_paciente": [
      "Frecuencia cardiaca (Bradicardia es el principal limitante).",
      "Presión arterial.",
      "ECG (control de arritmias).",
      "Signos de insuficiencia cardiaca congestiva."
    ],
    "interferencia_laboratorio": [
      "Puede aumentar triglicéridos y potasio sérico ligeramente."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Arritmias / Hipertensión",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.5,
            "dosis_min": 0.25,
            "dosis_max": 1,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          },
          "notas_tecnicas": "Titular dosis hasta lograr efecto deseado sin bradicardia excesiva."
        }
      ],
      "gato": [
        {
          "indicacion": "Miocardiopatía Hipertrófica / Arritmias",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 1,
            "dosis_min": 1,
            "dosis_max": 2,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          },
          "notas_tecnicas": "Dosis práctica común: 6.25 mg a 12.5 mg por gato total, cada 12h."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Bradicardia severa o bloqueo AV.",
        "Insuficiencia cardiaca congestiva descompensada (inestable).",
        "Shock cardiogénico."
      ],
      "precauciones": [
        "Diabetes mellitus (enmascara signos de hipoglucemia).",
        "Insuficiencia renal (se acumula)."
      ],
      "efectos_adversos": [
        "Bradicardia.",
        "Letargo / Depresión.",
        "Hipotensión.",
        "Broncoespasmo (raro a dosis normales por ser selectivo)."
      ],
      "sobredosis": {
        "signos": ["Bradicardia severa", "Colapso", "Convulsiones"],
        "tratamiento": "Atropina (para bradicardia), Isoproterenol, Glucagón (antídoto específico para inotropismo)."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Bloqueadores de canales de calcio (Diltiazem)",
          "efecto": "Efecto aditivo depresor del miocardio y bradicardia (usar con precaución)",
          "severidad": "Importante"
        },
        {
          "farmaco": "Anestésicos",
          "efecto": "Mayor riesgo de depresión miocárdica",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloquea competitivamente receptores beta-1 adrenérgicos. Cronotrópico e inotrópico negativo.",
      "farmacocinetica": "Baja solubilidad en lípidos (pobre penetración a SNC). Excreción renal casi inalterada."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Tableta",
        "concentracion_texto": "25 mg, 50 mg, 100 mg",
        "valor_concentracion": 50,
        "unidad_concentracion": "mg",
        "es_divisible": true
      }
    ]
  };
