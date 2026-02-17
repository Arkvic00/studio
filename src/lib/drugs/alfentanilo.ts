import type { Drug } from '@/lib/types';

export const alfentaniloDrug: Drug = {
    "id": "alfentanilo",
    "meta_data": {
      "nombre_generico": "Alfentanilo HCl",
      "nombres_comerciales": ["Alfenta"],
      "grupo_farmacologico": "Analgésico Opioide (Agonista Mu)",
      "status_regulatorio": "Uso extra-label; Sustancia Controlada Clase II."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Opioide de acción ultracorta.",
        "1/4 a 1/10 de la potencia del fentanilo.",
        "Inicio de acción casi inmediato (menos de 1 min).",
        "Ideal para procedimientos dolorosos muy breves o infusiones continuas."
      ],
      "usos_principales": "Analgesia intraoperatoria y componente de protocolos de inducción anestésica en perros."
    },
    "informacion_cliente": [
      "Medicamento de uso estrictamente intrahospitalario.",
      "Puede causar somnolencia profunda y respiración lenta."
    ],
    "monitoreo_paciente": [
      "Frecuencia respiratoria (riesgo alto de apnea).",
      "Saturación de oxígeno.",
      "Frecuencia cardiaca (puede causar bradicardia severa)."
    ],
    "interferencia_laboratorio": [
      "Amilasa/Lipasa: Puede causar aumentos transitorios por constricción del esfínter de Oddi."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Analgesia intraoperatoria (Extra-label)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.015,
            "dosis_min": 0.01,
            "dosis_max": 0.02,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Bolo inicial seguido de CRI", "intervalo_horas": 0 },
          "notas_tecnicas": "CRI: 0.5-2 mcg/kg/min."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a los opioides.",
        "Depresión respiratoria severa."
      ],
      "precauciones": [
        "Trauma craneal / Presión intracraneal elevada.",
        "Enfermedad hepática (metabolismo reducido)."
      ],
      "efectos_adversos": [
        "Bradicardia.",
        "Apnea.",
        "Rigidez muscular (dosis altas).",
        "Hipotermia."
      ],
      "sobredosis": {
        "signos": ["Paro respiratorio", "Miosis extrema", "Bradicardia"],
        "tratamiento": "Naloxona (antagonista) y ventilación asistida."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Eritromicina", "efecto": "Inhibe el metabolismo del alfentanilo", "severidad": "Moderada" },
        { "farmaco": "Anestésicos generales", "efecto": "Sinergia en depresión respiratoria", "severidad": "Grave" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Agonista puro de los receptores opioides mu en el SNC.",
      "farmacocinetica": "Vida media extremadamente corta (~12-15 min en perros)."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable", "concentracion_texto": "500 mcg/mL", "valor_concentracion": 0.5, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
