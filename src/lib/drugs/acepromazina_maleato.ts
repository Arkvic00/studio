import type { Drug } from '@/lib/types';

export const acepromazinaMaleatoDrug: Drug = {
    "id": "acepromazina_maleato",
    "meta_data": {
      "nombre_generico": "Acepromazina Maleato",
      "nombres_comerciales": [
        "PromAce",
        "Aceproject",
        "Acevet",
        "ACP",
        "Atravet"
      ],
      "grupo_farmacologico": "Sedante Fenotiazínico",
      "status_regulatorio": "Aprobado FDA (Perros, Gatos, Caballos)"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Sin efectos analgésicos; requiere combinación con analgésicos si hay dolor.",
        "Inicio de acción: 15 min; duración: 3-4 horas (hasta 6-8 h).",
        "Dosis clínicas son significativamente menores a las de la etiqueta FDA.",
        "No tiene agente de reversión."
      ],
      "usos_principales": "Sedante, tranquilizante, agente preanestésico. Tratamiento adyuvante de laminitis en caballos y obstrucción uretral en gatos machos."
    },
    "informacion_cliente": [
      "Efecto óptimo oral 45-60 min antes del viaje.",
      "Orina de color rosa a marrón rojizo (inofensivo).",
      "Animales sedados pueden asustarse con ruidos.",
      "Efectos pueden durar hasta 24 horas."
    ],
    "monitoreo_paciente": [
      "Frecuencia cardiaca y ritmo.",
      "Presión arterial (Crítico).",
      "Temperatura (riesgo de hipotermia).",
      "PCV y Proteínas totales (especialmente en pacientes anémicos)."
    ],
    "interferencia_laboratorio": [
      "Hematocrito: Disminución transitoria por secuestro esplénico.",
      "Pruebas cutáneas de alergia: Reduce respuesta de roncha y eritema (suspender 2 semanas antes)."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Sedación/Premedicación (Extra-label recomendado)",
          "vias": ["IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.03,
            "dosis_min": 0.01,
            "dosis_max": 0.1,
            "tope_maximo_mg": 3,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "IV administrar lento. Dosis máxima total: 3 mg/perro."
        }
      ],
      "caballo": [
        {
          "indicacion": "Ayuda en control de animales fractious",
          "vias": ["IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.066,
            "dosis_min": 0.044,
            "dosis_max": 0.088,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Asegurar retracción del pene en una hora tras protrusión."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Exposición a organofosforados o procaína.",
        "Shock, hipovolemia severa o deshidratación.",
        "Enfermedad hepática severa."
      ],
      "precauciones": [
        "Mutación MDR1: Reducir dosis 25-50%.",
        "Boxers: Riesgo de síncope vagal.",
        "Razas gigantes: Mayor sensibilidad.",
        "Galgos: Sensibles a efectos hipotensores."
      ],
      "efectos_adversos": [
        "Hipotensión significativa.",
        "Hipotermia.",
        "Prolapso de la membrana nictitante.",
        "Priapismo en caballos (raro pero grave)."
      ],
      "sobredosis": {
        "signos": ["Hipotensión severa", "Depresión SNC", "Convulsiones"],
        "tratamiento": "Fluidos IV, vasopresores (Norepinefrina). CONTRAINDICADA la Epinefrina."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Epinefrina", "efecto": "Reversión de epinefrina (empeora hipotensión)", "severidad": "Grave" },
        { "farmaco": "Opioides", "efecto": "Potencia hipotensión y sedación", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloqueo dopaminérgico postsináptico en SNC y bloqueo alfa-1 adrenérgico periférico.",
      "farmacocinetica": "Metabolismo hepático. Metabolitos detectables en orina equina hasta 144 h."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyección", "concentracion_texto": "10 mg/mL", "valor_concentracion": 10, "unidad_concentracion": "mg/ml", "es_divisible": true }
    ]
  };