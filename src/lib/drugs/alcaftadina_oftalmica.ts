import type { Drug } from '@/lib/types';

export const alcaftadinaOftalmicaDrug: Drug = {
  "id": "alcaftadina_oftalmica",
  "meta_data": {
    "nombre_generico": "Alcaftadina Oftálmica",
    "nombres_comerciales": ["Lastacaft"],
    "grupo_farmacologico": "Antihistamínico (Antagonista H1); Estabilizador de mastocitos",
    "status_regulatorio": "Uso veterinario"
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Antihistamínico ocular de nueva generación con acción dual.",
      "Suele ser bien tolerado."
    ],
    "usos_principales": "Perros y Gatos: Tratamiento del prurito (picazón) ocular asociado con conjuntivitis alérgica (Uso extra-etiqueta)."
  },
  "informacion_cliente": [],
  "monitoreo_paciente": [],
   "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Conjuntivitis alérgica",
        "vias": ["OFT"],
        "math": {
          "tipo_calculo": "fija",
          "unidad_calculo": "gota"
        },
        "frecuencia": {
          "texto_ui": "cada 12-24 horas",
          "intervalo_horas": 12
        },
        "notas_tecnicas": "1 gota en el ojo afectado cada 12-24 horas."
      }
    ],
    "gato": [
        {
        "indicacion": "Conjuntivitis alérgica",
        "vias": ["OFT"],
        "math": {
          "tipo_calculo": "fija",
          "unidad_calculo": "gota"
        },
        "frecuencia": {
          "texto_ui": "cada 12-24 horas",
          "intervalo_horas": 12
        },
        "notas_tecnicas": "1 gota en el ojo afectado cada 12-24 horas."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": ["Hipersensibilidad."],
    "efectos_adversos": ["Ardor o irritación ocular leve y transitoria."],
    "interacciones_farmacologicas": [],
    "sobredosis": {
        "signos": [],
        "tratamiento": ""
    }
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Doble acción: 1) Antagonista potente y selectivo del receptor H1 (bloquea la picazón). 2) Inhibe la degranulación de los mastocitos (previene la liberación de histamina).",
    "farmacocinetica": "Absorción sistémica mínima desde la aplicación tópica."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Solución oftálmica",
      "concentracion_texto": "0.25%",
      "valor_concentracion": 2.5,
      "unidad_concentracion": "mg/mL",
      "es_divisible": false
    }
  ]
};
