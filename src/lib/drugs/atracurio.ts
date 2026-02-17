import type { Drug } from '@/lib/types';

export const atracurioDrug: Drug = {
    "id": "atracurio",
    "meta_data": {
      "nombre_generico": "Besilato de Atracurio",
      "nombres_comerciales": [
        "Tracrium"
      ],
      "grupo_farmacologico": "Bloqueador Neuromuscular No Despolarizante",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Paraliza los músculos esqueléticos (incluyendo respiratorios).",
        "NO PROVEE ANALGESIA NI SEDACIÓN. El animal estará despierto y con dolor pero incapaz de moverse si no se anestesia.",
        "Eliminación por degradación de Hofmann (independiente de riñón/hígado), ideal para pacientes con falla orgánica.",
        "Requiere ventilación mecánica obligatoria."
      ],
      "usos_principales": "Relajación muscular total para cirugía (oftálmica, ortopédica) o ventilación mecánica."
    },
    "informacion_cliente": [
      "Uso exclusivo intrahospitalario y bajo anestesia general.",
      "Medicamento paralizante."
    ],
    "monitoreo_paciente": [
      "Estimulador de nervios periféricos (Train-of-Four) para evaluar bloqueo.",
      "Capnografía y oximetría (ventilación).",
      "Temperatura (puede bajar)."
    ],
    "interferencia_laboratorio": [
      "Ninguna."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Bloqueo neuromuscular intraoperatorio",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.2,
            "dosis_min": 0.2,
            "dosis_max": 0.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Bolo inicial, luego mantenimiento",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Inicio 2-3 min. Duración 20-30 min. Mantenimiento con bolos de 1/3 de dosis inicial."
        }
      ],
      "gato": [
        {
          "indicacion": "Bloqueo neuromuscular",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.2,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única o CRI",
            "intervalo_horas": 0
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Falta de equipo de ventilación mecánica."
      ],
      "precauciones": [
        "Miastenia gravis (efecto profundo).",
        "Liberación de histamina si se da rápido (hipotensión)."
      ],
      "efectos_adversos": [
        "Liberación de histamina (rubor, hipotensión, broncoespasmo).",
        "Parálisis prolongada (si hay hipotermia o acidosis)."
      ],
      "sobredosis": {
        "signos": ["Parálisis respiratoria prolongada", "Apnea"],
        "tratamiento": "Ventilación continua. Reversión con Neostigmina + Atropina (solo cuando hay signos de recuperación espontánea)."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Aminoglucósidos / Clindamicina",
          "efecto": "Potencian el bloqueo neuromuscular",
          "severidad": "Importante"
        },
        {
          "farmaco": "Anestésicos inhalados (Isoflurano)",
          "efecto": "Potencian el bloqueo (reducir dosis de atracurio)",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Compite con la acetilcolina por los receptores colinérgicos en la placa motora terminal.",
      "farmacocinetica": "Eliminación de Hofmann (degradación química espontánea a pH y temperatura fisiológicos) y hidrólisis esterasa. No depende de hígado/riñón."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Inyectable",
        "concentracion_texto": "10 mg/mL",
        "valor_concentracion": 10,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  };
