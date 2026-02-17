import type { Drug } from '@/lib/types';

export const acidoAceticoDrug: Drug = {
    "id": "acido_acetico",
    "meta_data": {
      "nombre_generico": "Ácido Acético (Vinagre)",
      "nombres_comerciales": ["Vinagre"],
      "grupo_farmacologico": "Acidificante Gastrointestinal",
      "status_regulatorio": "Uso extra-label en rumiantes y caballos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Usar solo vinagre (3%-5%), NUNCA ácido concentrado.",
        "Administrar vía sonda gástrica debido al sabor desagradable.",
        "Contraindicado si hay sospecha de acidosis láctica."
      ],
      "usos_principales": "Tratamiento de toxicosis por amoníaco inducida por nitrógeno no proteico (urea) en rumiantes y prevención de enterolitos en caballos."
    },
    "informacion_cliente": [
      "Se administra generalmente mediante sonda gástrica por personal profesional.",
      "No usar formas concentradas por riesgo de corrosión."
    ],
    "monitoreo_paciente": [
      "pH ruminal.",
      "Signos clínicos de toxicosis por amoníaco (nerviosismo, temblores).",
      "Estado de hidratación."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias específicas en el manual."
    ],
    "parametros_dosificacion": {
      "bovino": [
        {
          "indicacion": "Envenenamiento por urea (Extra-label)",
          "vias": ["Sonda gástrica"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 7,
            "dosis_min": 4,
            "dosis_max": 10,
            "unidad_calculo": "Litros/animal"
          },
          "frecuencia": { "texto_ui": "Dosis única, repetir si es necesario", "intervalo_horas": 0 },
          "notas_tecnicas": "Usar vinagre al 5%. Seguir con agua fría (hasta 30L) para bajar temperatura ruminal."
        }
      ],
      "caballo": [
        {
          "indicacion": "Prevención de enterolitos (Extra-label)",
          "vias": ["PO (en comida)"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 250,
            "unidad_calculo": "mL/450kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día", "intervalo_horas": 24 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Acidosis láctica (sobrecarga de grano).",
        "Uso de formas concentradas de ácido acético."
      ],
      "precauciones": [
        "Irritación de mucosas por contacto directo."
      ],
      "efectos_adversos": [
        "Irritación gastrointestinal si no se diluye adecuadamente.",
        "Sabor desagradable."
      ],
      "sobredosis": {
        "signos": ["Corrosión de mucosas (si es concentrado)"],
        "tratamiento": "Dilución con agua o leche."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Aspirina", "efecto": "Orina ácida disminuye excreción de salicilatos", "severidad": "Leve" },
        { "farmaco": "Fenobarbital", "efecto": "Orina ácida disminuye excreción de fenobarbital", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Baja el pH ruminal, desplazando el amoníaco (NH3) a iones amonio (NH4+) para reducir su absorción.",
      "farmacocinetica": "No disponible."
    },
    "presentaciones_comerciales": [
      { "tipo": "Solución (Vinagre)", "concentracion_texto": "3% - 5%", "valor_concentracion": 5, "unidad_concentracion": "%", "es_divisible": false }
    ]
  };
