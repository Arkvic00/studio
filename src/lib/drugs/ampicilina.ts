import type { Drug } from '@/lib/types';

export const ampicilinaDrug: Drug = {
    "id": "ampicilina",
    "meta_data": {
      "nombre_generico": "Ampicilina",
      "nombres_comerciales": [
        "Polyflex",
        "Principen",
        "Teven"
      ],
      "grupo_farmacologico": "Antibiótico Aminopenicilina",
      "status_regulatorio": "Aprobado FDA (Perros, Gatos, Bovinos). Polyflex es la forma veterinaria inyectable."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Bactericida tiempo-dependiente.",
        "La absorción oral se reduce significativamente con la presencia de comida (dar con estómago vacío, a diferencia de la amoxicilina).",
        "Vida media muy corta, requiere dosificación frecuente.",
        "Ineficaz contra bacterias productoras de beta-lactamasas."
      ],
      "usos_principales": "Infecciones sistémicas, respiratorias, urinarias y de tejidos blandos causadas por organismos sensibles."
    },
    "informacion_cliente": [
      "Administrar con el estómago vacío (1 hora antes o 2 horas después de comer) para asegurar que funcione.",
      "Puede causar diarrea leve.",
      "Completar todo el tratamiento prescrito."
    ],
    "monitoreo_paciente": [
      "Eficacia clínica.",
      "Signos de hipersensibilidad.",
      "Efectos gastrointestinales (diarrea)."
    ],
    "interferencia_laboratorio": [
      "Glucosa urinaria: Falsos positivos con métodos de sulfato de cobre (Clinitest).",
      "Aminoglucósidos: Puede inactivarlos in vitro si se mezclan en la misma jeringa."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones susceptibles",
          "vias": ["PO", "IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "dosis_min": 10,
            "dosis_max": 25,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 6 a 8 horas",
            "intervalo_horas": 6
          },
          "notas_tecnicas": "La vida media es corta; la administración cada 8h es el mínimo, idealmente cada 6h para infecciones serias."
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones susceptibles",
          "vias": ["PO", "IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "dosis_min": 10,
            "dosis_max": 25,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 8 horas",
            "intervalo_horas": 8
          }
        }
      ],
      "caballo": [
        {
          "indicacion": "Infecciones sistémicas",
          "vias": ["IV", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 15,
            "dosis_min": 10,
            "dosis_max": 25,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 6 a 8 horas (IV) o cada 8-12 horas (IM)",
            "intervalo_horas": 8
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a penicilinas o cefalosporinas.",
        "Pequeños herbívoros (conejos, cobayas) - Riesgo de enterotoxemia fatal."
      ],
      "precauciones": [
        "Insuficiencia renal (requiere ajuste de dosis).",
        "Animales con historial de alergias múltiples."
      ],
      "efectos_adversos": [
        "Hipersensibilidad (desde rash hasta anafilaxia).",
        "Diarrea / Disbiosis intestinal.",
        "Dolor en el sitio de inyección (IM)."
      ],
      "sobredosis": {
        "signos": ["Hiperexcitabilidad", "Convulsiones (dosis masivas IV)"],
        "tratamiento": "Sintomático. Diazepam para convulsiones."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Alopurinol",
          "efecto": "Aumenta la incidencia de erupciones cutáneas (rash) en perros",
          "severidad": "Moderada"
        },
        {
          "farmaco": "Aminoglucósidos",
          "efecto": "Sinergia bactericida (bueno), pero inactivación química si se mezclan en la misma jeringa (malo)",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana (bactericida).",
      "farmacocinetica": "Biodisponibilidad oral baja (30-50%) y afectada por comida. Difunde bien a la mayoría de tejidos excepto SNC/Ojo (salvo inflamación). Excreción renal."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Polvo para inyección (Polyflex)",
        "concentracion_texto": "10 g, 25 g (reconstituir)",
        "valor_concentracion": 250,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      },
      {
        "tipo": "Cápsula",
        "concentracion_texto": "250 mg, 500 mg",
        "valor_concentracion": 250,
        "unidad_concentracion": "mg",
        "es_divisible": false
      }
    ]
  };
