import type { Drug } from '@/lib/types';

export const aciclovirOftalmicoDrug: Drug = {
  "id": "aciclovir_oftalmico",
  "meta_data": {
    "nombre_generico": "Aciclovir Oftálmico",
    "nombres_comerciales": ["Zovirax Ophthalmic"],
    "grupo_farmacologico": "Antiviral (Análogo de nucleósido)",
    "status_regulatorio": "Uso extra-etiqueta"
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Uso limitado, ya que el FHV-1 es menos sensible al Aciclovir que otros herpesvirus.",
      "El Famciclovir (oral) o Cidofovir/Idoxuridina (tópico) son generalmente preferidos para FHV-1 debido a una mejor eficacia.",
      "El Aciclovir sistémico es poco absorbido y el Valaciclovir (profármaco) es tóxico fatal en gatos."
    ],
    "usos_principales": "Tratamiento de infecciones oculares por Herpesvirus Felino 1 (FHV-1) en gatos (queratitis, conjuntivitis)."
  },
  "informacion_cliente": [
    "Aplique una pequeña tira en el ojo afectado según las indicaciones, con frecuencia, como se lo indique su veterinario."
  ],
  "monitoreo_paciente": [
    "Resolución de los signos oculares (enrojecimiento, secreción, entrecerrar los ojos)."
  ],
  "parametros_dosificacion": {
    "gato": [
      {
        "indicacion": "Herpesvirus Felino (FHV-1)",
        "vias": ["OFT"],
        "math": {
          "tipo_calculo": "fija",
          "unidad_calculo": "aplicación"
        },
        "frecuencia": {
          "texto_ui": "Cada 4-6 horas (5 veces al día)",
          "intervalo_horas": 4
        },
        "notas_tecnicas": "Aplicar una tira de 1 cm de ungüento en el ojo afectado."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Hipersensibilidad.",
      "¡No usar Valaciclovir (Valtrex) sistémico en gatos (es fatal)!"
    ],
    "precauciones": [],
    "efectos_adversos": [
      "Irritación ocular local, blefaritis.",
      "Generalmente bien tolerado tópicamente."
    ],
     "sobredosis": {
      "signos": [],
      "tratamiento": "Poco probable con uso tópico."
    },
    "interacciones_farmacologicas": []
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Inhibe la ADN polimerasa viral, específico para herpesvirus. Requiere fosforilación por la timidina quinasa viral para activarse.",
    "farmacocinetica": "Mínima absorción sistémica desde la aplicación oftálmica."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Ungüento oftálmico",
      "concentracion_texto": "3% (30 mg/g)",
      "valor_concentracion": 30,
      "unidad_concentracion": "mg/g",
      "es_divisible": false
    }
  ]
};
