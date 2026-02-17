import type { Drug } from '@/lib/types';

export const bupivacainaDrug: Drug = {
  "id": "bupivacaina",
  "meta_data": {
    "nombre_generico": "Bupivacaína HCl",
    "nombres_comerciales": [
      "Marcaine",
      "Sensorcaine"
    ],
    "grupo_farmacologico": "Anestésico Local (Amida)",
    "status_regulatorio": "Aprobado FDA humanos/veterinaria. Uso estándar."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Anestésico local de larga duración (4-8 horas) y potencia alta.",
      "Inicio de acción lento (20-30 min), por lo que a veces se mezcla con Lidocaína (rápida).",
      "EXTREMADAMENTE CARDIOTÓXICA SI SE DA INTRAVENOSA (IV). Siempre aspirar antes de inyectar.",
      "Nunca usar IV (a diferencia de la lidocaína que sí se puede)."
    ],
    "usos_principales": "Bloqueos nerviosos regionales, epidurales, infiltración local para cirugía dolorosa (ortopedia, dental)."
  },
  "informacion_cliente": [
    "Uso hospitalario.",
    "La zona estará dormida por varias horas después de la cirugía."
  ],
  "monitoreo_paciente": [
    "ECG durante la inyección (si es un bloqueo mayor).",
    "Función motora (epidural).",
    "Signos de toxicidad neurológica (temblores)."
  ],
  "interferencia_laboratorio": [
    "Ninguna."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Bloqueo local / Epidural",
        "vias": ["Infiltración", "Epidural"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 1,
          "dosis_max": 2,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Dosis única",
          "intervalo_horas": 0
        },
        "notas_tecnicas": "Dosis tóxica > 3-5 mg/kg. Mezclar con lidocaína no reduce toxicidad."
      }
    ],
    "gato": [
      {
        "indicacion": "Bloqueo local",
        "vias": ["Infiltración"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 0.5,
          "dosis_max": 1,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Dosis única",
          "intervalo_horas": 0
        },
        "notas_tecnicas": "Gatos son muy sensibles a cardiotoxicidad."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Administración IV (Paro cardiaco difícil de revertir).",
      "Infección en sitio de inyección."
    ],
    "precauciones": [
      "Gatos y perros pequeños (cálculo de dosis exacto)."
    ],
    "efectos_adversos": [
      "Cardiotoxicidad (Fibrilación ventricular, paro).",
      "Neurotoxicidad (Convulsiones).",
      "Condrólisis (daño al cartílago si se inyecta intraarticular continuo)."
    ],
    "sobredosis": {
      "signos": ["Arritmias ventriculares", "Convulsiones", "Paro"],
      "tratamiento": "Emulsión lipídica IV (Intralipid) para 'atrapar' el fármaco. RCP prolongado."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Otros anestésicos locales",
        "efecto": "Toxicidad aditiva",
        "severidad": "Importante"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Bloquea canales de sodio voltaje-dependientes en la membrana nerviosa, impidiendo la transmisión del impulso.",
    "farmacocinetica": "Alta unión a proteínas. Metabolismo hepático. Duración prolongada."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Inyectable",
      "concentracion_texto": "0.25% (2.5 mg/mL), 0.5% (5 mg/mL)",
      "valor_concentracion": 5,
      "unidad_concentracion": "mg/ml",
      "es_divisible": false
    }
  ]
};
