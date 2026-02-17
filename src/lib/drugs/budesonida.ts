import type { Drug } from '@/lib/types';

export const budesonidaDrug: Drug = {
  "id": "budesonida",
  "meta_data": {
    "nombre_generico": "Budesonida",
    "nombres_comerciales": [
      "Entocort EC",
      "Pulmicort"
    ],
    "grupo_farmacologico": "Glucocorticoide (Acción local)",
    "status_regulatorio": "Uso extra-label en veterinaria."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Esteroide con ALTO efecto de primer paso hepático (se inactiva rápido en el hígado).",
      "Ideal para Enfermedad Inflamatoria Intestinal (IBD) o Asma (inhalado) porque actúa localmente con MENOS efectos secundarios sistémicos que la prednisona.",
      "No se detecta fácilmente en pruebas de cortisol convencionales.",
      "Útil en pacientes que no toleran otros esteroides."
    ],
    "usos_principales": "IBD (Enfermedad Inflamatoria Intestinal) en perros y gatos, Asma felina (inhalado)."
  },
  "informacion_cliente": [
    "Medicamento esteroide 'suave' para el resto del cuerpo, pero fuerte en el intestino/pulmón.",
    "No partir las cápsulas de liberación controlada (para IBD) a menos que se reformulen, o pierden el efecto local.",
    "Para asma, usar con cámara espaciadora (Aerokat)."
  ],
  "monitoreo_paciente": [
    "Signos clínicos (diarrea/vómito o tos).",
    "Menor riesgo de PU/PD que con prednisona, pero vigilar."
  ],
  "interferencia_laboratorio": [
    "Suprime el eje adrenal (test de estimulación con ACTH saldrá bajo), aunque menos que otros esteroides."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "IBD (Oral)",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "fija",
          "dosis_recomendada": 3,
          "dosis_min": 1,
          "dosis_max": 3,
          "unidad_calculo": "mg/perro"
        },
        "frecuencia": {
          "texto_ui": "Una vez al día",
          "intervalo_horas": 24
        },
        "notas_tecnicas": "Máximo 3 mg totales por perro grande. Perros pequeños 1 mg."
      }
    ],
    "gato": [
      {
        "indicacion": "IBD (Oral)",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "fija",
          "dosis_recomendada": 1,
          "dosis_min": 0.5,
          "dosis_max": 1,
          "unidad_calculo": "mg/gato"
        },
        "frecuencia": {
          "texto_ui": "Una vez al día",
          "intervalo_horas": 24
        }
      },
      {
        "indicacion": "Asma (Inhalado)",
        "vias": ["Inhalación"],
        "math": {
          "tipo_calculo": "fija",
          "dosis_recomendada": 1,
          "unidad_calculo": "puff (inhalación)"
        },
        "frecuencia": {
          "texto_ui": "Dos veces al día",
          "intervalo_horas": 12
        },
        "notas_tecnicas": "Usar concentraciones altas (ej. 200 mcg/puff) para asegurar dosis."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Ulceras GI severas."
    ],
    "precauciones": [
      "Falla hepática severa (si el hígado no funciona, el fármaco pasa a la sangre y causa efectos sistémicos fuertes)."
    ],
    "efectos_adversos": [
      "Supresión adrenal.",
      "Poliuria/Polidipsia (raro).",
      "Cambios en pelaje."
    ],
    "sobredosis": {
      "signos": ["Efectos Cushingoides leves"],
      "tratamiento": "Reducción dosis."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Ketoconazol / Eritromicina",
        "efecto": "Inhiben metabolismo de budesonida (aumentan efectos sistémicos)",
        "severidad": "Moderada"
      },
      {
        "farmaco": "Antiácidos",
        "efecto": "Pueden disolver la cubierta entérica prematuramente",
        "severidad": "Leve"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Glucocorticoide potente con alta afinidad al receptor.",
    "farmacocinetica": "Biodisponibilidad sistémica baja (~10%) debido a extenso metabolismo de primer paso en hígado (vía citocromo P450). Esto concentra el efecto en el intestino antes de ser inactivado."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Cápsula (Liberación entérica)",
      "concentracion_texto": "3 mg",
      "valor_concentracion": 3,
      "unidad_concentracion": "mg",
      "es_divisible": false
    },
    {
      "tipo": "Inhalador",
      "concentracion_texto": "90, 180 mcg/puff",
      "valor_concentracion": 90,
      "unidad_concentracion": "mcg",
      "es_divisible": false
    }
  ]
};
