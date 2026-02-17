import type { Drug } from '@/lib/types';

export const bupivacainaLiposomalDrug: Drug = {
  "id": "bupivacaina_liposomal",
  "meta_data": {
    "nombre_generico": "Suspensión Inyectable de Liposomas de Bupivacaína",
    "nombres_comerciales": [
      "Nocita"
    ],
    "grupo_farmacologico": "Anestésico Local (Liberación prolongada)",
    "status_regulatorio": "Aprobado FDA (Perros: CCL; Gatos: Oniquectomía)."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Formulación especial donde la bupivacaína está encapsulada en liposomas.",
      "Provee analgesia local por hasta 72 horas con una sola inyección.",
      "Solo para infiltración tisular en el cierre quirúrgico.",
      "NO usar para bloqueos nerviosos (no aprobado/estudiado) ni IV.",
      "No mezclar con Lidocaína u otros anestésicos (rompen los liposomas y liberan todo el fármaco de golpe = tóxico)."
    ],
    "usos_principales": "Analgesia postoperatoria para cirugía de ligamento cruzado craneal (CCL) en perros y desungulación (onychectomy) en gatos."
  },
  "informacion_cliente": [
    "Provee alivio del dolor por 3 días.",
    "No manipular la herida."
  ],
  "monitoreo_paciente": [
    "Dolor postoperatorio.",
    "Sitio de incisión."
  ],
  "interferencia_laboratorio": [
    "Ninguna."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Cirugía CCL",
        "vias": ["Infiltración Tisular"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 5.3,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Dosis única intraoperatoria",
          "intervalo_horas": 72
        },
        "notas_tecnicas": "Inyectar en capas al cerrar. No inyectar intravascular."
      }
    ],
    "gato": [
      {
        "indicacion": "Desungulación (Onychectomy)",
        "vias": ["Infiltración (Bloqueo muñeca)"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 5.3,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Dosis única",
          "intervalo_horas": 72
        }
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Uso IV o intraarticular.",
      "Mezcla con anestésicos locales no liposomales (Lidocaína)."
    ],
    "precauciones": [
      "Usar técnica estéril estricta."
    ],
    "efectos_adversos": [
      "Inflamación/Eritema en sitio de inyección.",
      "Infección."
    ],
    "sobredosis": {
      "signos": ["Cardiotoxicidad", "Neurotoxicidad (si se rompen los liposomas)"],
      "tratamiento": "Emulsión lipídica."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Lidocaína / Bupivacaína regular",
        "efecto": "Rompen los liposomas causando liberación masiva inmediata (Toxicidad)",
        "severidad": "Grave"
      },
      {
        "farmaco": "Antisépticos (Betadine/Clorhexidina)",
        "efecto": "Pueden alterar liposomas (secar bien antes de inyectar)",
        "severidad": "Moderada"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Liberación lenta de bupivacaína desde vesículas lipídicas multivesiculares.",
    "farmacocinetica": "Pico plasmático bimodal. Persistencia local hasta 72h."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Vial Suspensión",
      "concentracion_texto": "13.3 mg/mL",
      "valor_concentracion": 13.3,
      "unidad_concentracion": "mg/ml",
      "es_divisible": false
    }
  ]
};
