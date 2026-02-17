import type { Drug } from '@/lib/types';

export const aglepristonaDrug: Drug = {
    "id": "aglepristona",
    "meta_data": {
      "nombre_generico": "Aglepristona",
      "nombres_comerciales": ["Alizin", "Alizine"],
      "grupo_farmacologico": "Antagonista del receptor de progesterona",
      "status_regulatorio": "No disponible en EE. UU.; Registrado en Europa/Reino Unido para perros."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "No debe ser manejado por mujeres embarazadas.",
        "Casi 100% efectivo para prevenir implantación en etapa temprana.",
        "Causa inflamación localizada en el sitio de inyección.",
        "Requiere inyección subcutánea estrictamente."
      ],
      "usos_principales": "Interrupción del embarazo en perras hasta los 45 días tras el apareamiento. Inducción del parto e inducción del celo. Tratamiento médico de piómetra."
    },
    "informacion_cliente": [
      "Debe ser administrado solo por profesionales veterinarios.",
      "Esencial evaluar a la perra 10 días tras el tratamiento.",
      "Puede presentarse una descarga vaginal marrón 24h antes de la expulsión fetal.",
      "Inflamación en el sitio de inyección es común."
    ],
    "monitoreo_paciente": [
      "Ecografía (para confirmar terminación del embarazo).",
      "Progesterona sérica.",
      "Signos de piómetra recurrente.",
      "Integridad del sitio de inyección (edema, ulceración)."
    ],
    "interferencia_laboratorio": [
      "Parámetros bioquímicos: Elevación transitoria de BUN, Creatinina y enzimas hepáticas (4.5% de casos).",
      "Hemograma: Variaciones en hematocrito y recuento de leucocitos."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Interrupción del embarazo (Etiqueta)",
          "vias": ["SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dos dosis separadas por 24 horas", "intervalo_horas": 24 },
          "notas_tecnicas": "Inyectar en la nuca. Máximo 5 mL por sitio de inyección. Masajear suavemente."
        },
        {
          "indicacion": "Piómetra (Extra-label)",
          "vias": ["SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Días 1, 2, 7, 14", "intervalo_horas": 0 }
        }
      ],
      "gato": [
        {
          "indicacion": "Hiperplasia mamaria fibroadenomatosa (Extra-label)",
          "vias": ["SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 12.5,
            "dosis_min": 10,
            "dosis_max": 15,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Días 1, 2 y 7", "intervalo_horas": 0 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad.",
        "Insuficiencia hepática o renal.",
        "Diabetes mellitus.",
        "Hipoadrenocorticismo (Addison)."
      ],
      "precauciones": [
        "Mujeres embarazadas: EVITAR CONTACTO (puede inducir aborto).",
        "Enfermedad cardiovascular o pulmonar obstructiva."
      ],
      "efectos_adversos": [
        "Dolor severo en sitio de inyección.",
        "Anorexia (25%).",
        "Congestión de glándulas mamarias.",
        "Vómitos y diarrea."
      ],
      "sobredosis": {
        "signos": ["Reacciones locales severas"],
        "tratamiento": "Soporte sintomático."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Glucocorticoides", "efecto": "Reduce la eficacia del tratamiento corticoide", "severidad": "Importante" },
        { "farmaco": "Ketoconazol", "efecto": "Puede aumentar niveles de aglepristona", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Antagonista esteroideo sintético. Compete con la progesterona en los receptores uterinos (3x más afinidad que la progesterona en perras).",
      "farmacocinetica": "Excreción muy lenta (80% en 24 días). 90% se elimina vía heces."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable (Aceite)", "concentracion_texto": "30 mg/mL", "valor_concentracion": 30, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
