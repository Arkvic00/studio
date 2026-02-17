import type { Drug } from '@/lib/types';

export const bleomicinaDrug: Drug = {
  "id": "bleomicina",
  "meta_data": {
    "nombre_generico": "Bleomicina Sulfato",
    "nombres_comerciales": [
      "Blenoxane"
    ],
    "grupo_farmacologico": "Antineoplásico (Antibiótico Citotóxico)",
    "status_regulatorio": "Uso extra-label en veterinaria."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Antibiótico que daña el ADN (rotura de cadenas).",
      "A diferencia de otras quimios, NO suele suprimir la médula ósea (seguro en neutropenia).",
      "Riesgo de fibrosis pulmonar (menos común en perros/gatos que en humanos, pero posible).",
      "Uso común en electroquimioterapia (inyectado directo en tumor + pulso eléctrico)."
    ],
    "usos_principales": "Carcinoma de células escamosas (SCC), Linfoma (protocolos de rescate), tumores cutáneos."
  },
  "informacion_cliente": [
    "Quimioterapia.",
    "Se maneja con precaución extrema (residuos tóxicos).",
    "Vigilar dificultad respiratoria."
  ],
  "monitoreo_paciente": [
    "Auscultación pulmonar / Radiografías de tórax (fibrosis).",
    "Reacción anafiláctica.",
    "Temperatura (fiebre post-inyección)."
  ],
  "interferencia_laboratorio": [
    "Ninguna específica."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Carcinoma Células Escamosas / Linfoma",
        "vias": ["SC", "IV", "Intralesional"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 10,
          "dosis_min": 10,
          "dosis_max": 20,
          "unidad_calculo": "UI/m2"
        },
        "frecuencia": {
          "texto_ui": "Semanal o según protocolo",
          "intervalo_horas": 168
        },
        "notas_tecnicas": "Dosis típica: 10-20 Unidades/m2. Dosis máxima acumulativa recomendada: 200 U/m2."
      }
    ],
    "gato": [
      {
        "indicacion": "Neoplasia",
        "vias": ["SC", "IV"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 10,
          "unidad_calculo": "UI/m2"
        },
        "frecuencia": {
          "texto_ui": "Semanal",
          "intervalo_horas": 168
        }
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Hipersensibilidad."
    ],
    "precauciones": [
      "Enfermedad renal o pulmonar previa.",
      "Anestesia general (evitar altas concentraciones de oxígeno, >25%, pues potencia daño pulmonar)."
    ],
    "efectos_adversos": [
      "Reacciones anafilactoides (fiebre, hipotensión).",
      "Fibrosis pulmonar / Neumonitis intersticial.",
      "Cambios cutáneos (eritema, alopecia).",
      "Estomatitis."
    ],
    "sobredosis": {
      "signos": ["Daño pulmonar agudo"],
      "tratamiento": "Sintomático."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Oxígeno (Anestesia)",
        "efecto": "Sinergia en toxicidad pulmonar (mantener FiO2 baja si es posible)",
        "severidad": "Importante"
      },
      {
        "farmaco": "Cisplatino",
        "efecto": "Reduce excreción de bleomicina (aumenta toxicidad)",
        "severidad": "Moderada"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Causa escisión del ADN mediante la formación de radicales libres (dependiente de hierro y oxígeno). Fase específica G2 y M.",
    "farmacocinetica": "Excreción renal (60-70%). Se inactiva por hidrolasas en tejidos (piel y pulmón tienen pocas hidrolasas, por eso se daña ahí)."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Vial Liofilizado",
      "concentracion_texto": "15 Unidades, 30 Unidades",
      "valor_concentracion": 15,
      "unidad_concentracion": "U",
      "es_divisible": false
    }
  ]
};
