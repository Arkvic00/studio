import type { Drug } from '@/lib/types';

export const cloruroAmonioDrug: Drug = {
    "id": "cloruro_amonio",
    "meta_data": {
      "nombre_generico": "Cloruro de Amonio",
      "nombres_comerciales": ["Uroeze"],
      "grupo_farmacologico": "Acidificante Urinario",
      "status_regulatorio": "Uso extra-label o como suplemento."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Acidifica la orina (baja el pH).",
        "Usado históricamente para disolver urolitos de estruvita, pero las dietas terapéuticas lo han reemplazado mayormente.",
        "Contraindicado en enfermedad hepática severa (riesgo de encefalopatía por amonio).",
        "Dosis excesiva causa acidosis metabólica."
      ],
      "usos_principales": "Disolución de urolitos de estruvita, tratamiento de alcalosis metabólica y aumento de excreción de ciertas toxinas (anfetaminas)."
    },
    "informacion_cliente": [
      "Puede causar malestar estomacal (dar con comida).",
      "Asegurar acceso libre al agua.",
      "El monitoreo del pH de la orina es esencial."
    ],
    "monitoreo_paciente": [
      "pH Urinario (Objetivo: < 6.5).",
      "Gases en sangre (estado ácido-base).",
      "BUN/Amomiaco sérico (en pacientes sospechosos de problema hepático)."
    ],
    "interferencia_laboratorio": [
      "pH Urinario: Disminución.",
      "Bicarbonato sérico: Disminución."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Acidificación urinaria (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 100,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dividido en 2 veces al día", "intervalo_horas": 12 },
          "notas_tecnicas": "Mezclar con comida para evitar irritación gástrica."
        }
      ],
      "gato": [
        {
          "indicacion": "Acidificación urinaria / FUS",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_min": 800,
            "dosis_max": 1000,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Dividido una o dos veces al día", "intervalo_horas": 24 },
          "notas_tecnicas": "Rara vez usado hoy día debido a dietas acidificantes."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Enfermedad hepática severa (incapacidad de metabolizar amonio a urea).",
        "Insuficiencia renal / Uremia.",
        "Acidosis metabólica preexistente."
      ],
      "precauciones": [
        "Gatos neonatos.",
        "Pacientes con diabetes mellitus."
      ],
      "efectos_adversos": [
        "Irritación gástrica (náuseas, vómitos).",
        "Acidosis metabólica (hiperventilación Kussmaul).",
        "Hipopotasemia."
      ],
      "sobredosis": {
        "signos": ["Acidosis severa", "Vómitos", "Signos de intoxicación por amonio"],
        "tratamiento": "Corregir acidosis con Bicarbonato o Lactato. Fluidos."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Sulfonamidas", "efecto": "Aumenta riesgo de cristaluria por sulfas en orina ácida", "severidad": "Importante" },
        { "farmaco": "Eritromicina", "efecto": "Disminuye eficacia de eritromicina en orina ácida", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se metaboliza a urea y ácido clorhídrico. El HCl libera iones hidrógeno que reaccionan con bicarbonato, acidificando la sangre y orina.",
      "farmacocinetica": "Absorción rápida GI."
    },
    "presentaciones_comerciales": [
      { "tipo": "Polvo / Granulado", "concentracion_texto": "Grado químico", "valor_concentracion": 100, "unidad_concentracion": "%", "es_divisible": true }
    ]
  };
