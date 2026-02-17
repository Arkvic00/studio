import type { Drug } from '@/lib/types';

export const antivenenoCrotalidaeDrug: Drug = {
    "id": "antiveneno_crotalidae",
    "meta_data": {
      "nombre_generico": "Antivenin (Crotalidae) Polyvalent",
      "nombres_comerciales": [
        "Antivipmyn",
        "CroFab",
        "VenomVet"
      ],
      "grupo_farmacologico": "Antiveneno (Fragmentos Fab o IgG completa)",
      "status_regulatorio": "Aprobado FDA (VenomVet para perros). Otros uso extra-label."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Para mordeduras de víboras de foseta (Cascabel, Nauyaca, Cabeza de Cobre, Mocasín).",
        "Crucial administrarlo cuanto antes (mejores resultados en <4-6 horas).",
        "Detiene la progresión del edema y la coagulopatía, pero no revierte el tejido ya necrosado.",
        "La dosis se basa en la CARGA DE VENENO (severidad), no en el peso del perro (un perro pequeño puede necesitar más viales)."
      ],
      "usos_principales": "Envenenamiento por crótalos con signos progresivos de edema, coagulopatía o shock."
    },
    "informacion_cliente": [
      "Es un tratamiento muy costoso.",
      "Puede requerir múltiples viales.",
      "El perro necesitará hospitalización y monitoreo de coagulación.",
      "La hinchazón puede tardar días en bajar."
    ],
    "monitoreo_paciente": [
      "Circunferencia de la extremidad afectada (marcar progreso del edema).",
      "Tiempos de coagulación (PT, PTT), plaquetas y fibrinógeno.",
      "Signos de shock.",
      "Equinocitos en frotis sanguíneo."
    ],
    "interferencia_laboratorio": [
      "Ninguna por el antiveneno, pero el veneno altera todas las pruebas de coagulación."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Envenenamiento Crotálido",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 1,
            "dosis_min": 1,
            "dosis_max": 5,
            "unidad_calculo": "viales (inicial)"
          },
          "frecuencia": {
            "texto_ui": "Repetir según necesidad clínica",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Dosis inicial típica: 1-2 viales. Si el edema progresa o la coagulación no mejora, repetir dosis. Diluir en cristaloides y dar lento."
        }
      ],
      "gato": [
        {
          "indicacion": "Envenenamiento Crotálido",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 1,
            "unidad_calculo": "vial"
          },
          "frecuencia": {
            "texto_ui": "Según necesidad",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Gatos suelen ser más resistentes al veneno que los perros, pero si requieren tratamiento, usar dosis completa."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad (riesgo/beneficio)."
      ],
      "precauciones": [
        "Productos de IgG completa (equinos) tienen mayor tasa de anafilaxia que los Fab (ovinos).",
        "No inyectar en el sitio de la mordedura."
      ],
      "efectos_adversos": [
        "Anafilaxia aguda.",
        "Enfermedad del suero (tardía)."
      ],
      "sobredosis": {
        "signos": ["No aplica"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Corticosteroides",
          "efecto": "Uso controversial en mordeduras de serpiente, no interactúan con el antiveneno directamente",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Une y neutraliza las toxinas del veneno, facilitando su eliminación y previniendo la unión a tejidos.",
      "farmacocinetica": "Productos Fab (CroFab) se eliminan rápido renalmente (pueden requerir redosificación por 'rebote' de veneno). Productos IgG (Antivipmyn) duran más."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial Liofilizado",
        "concentracion_texto": "Neutraliza X cantidad de veneno (varía por marca)",
        "valor_concentracion": 1,
        "unidad_concentracion": "vial",
        "es_divisible": false
      }
    ]
  };
