import type { Drug } from '@/lib/types';

export const cabergolinaDrug: Drug = {
    "id": "cabergolina",
    "meta_data": {
      "nombre_generico": "Cabergolina",
      "nombres_comerciales": ["Dostinex", "Cabaser"],
      "grupo_farmacologico": "Agonista de la Dopamina (D2); Derivado del ergot",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos.",
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inhibe la secreción de prolactina.",
        "Usado para tratar el embarazo psicológico (pseudociesis) en perras.",
        "A veces usado para interrumpir el embarazo (aborto) combinado con prostaglandinas, pero causa mucho vómito.",
        "La Cabergolina es más efectiva y tiene menos efectos secundarios que la bromocriptina, por lo que la bromocriptina se usa menos ahora."
      ],
      "usos_principales": "Supresión de la lactancia en perras (pseudogestación o post-destete) - (Preferido sobre bromocriptina). Inducción del celo en perras en anestro. Inducción del aborto en perras (a menudo combinado con prostaglandinas). Tratamiento de tumores pituitarios secretores de prolactina. Tratamiento del hiperadrenocorticismo dependiente de la pituitaria (HDP) en perros (eficacia variable)."
    },
    "informacion_cliente": [
        "Administrar con comida. Los vómitos son posibles pero menos comunes que con otros medicamentos similares."
    ],
    "monitoreo_paciente": [
        "Reducción de la producción de leche.", "Signos de aborto o celo.", "Incidencia de vómitos.", "Niveles de cortisol (si se usa para HDP)."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Supresión de lactancia/Pseudogestación",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.005,
            "unidad_calculo": "mcg/kg"
          },
          "frecuencia": {
            "texto_ui": "cada 24 horas por 5–10 días",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "5 mcg/kg (0.005 mg/kg) PO cada 24 horas por 5–10 días."
        },
        {
          "indicacion": "Inducción del aborto (Día 25+)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.005,
            "unidad_calculo": "mcg/kg"
          },
          "frecuencia": {
            "texto_ui": "cada 24 horas hasta aborto",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "5 mcg/kg PO cada 24 horas hasta aborto (a menudo con cloprostenol)."
        },
        {
          "indicacion": "Inducción del celo",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.005,
            "unidad_calculo": "mcg/kg"
          },
          "frecuencia": {
            "texto_ui": "cada 24 horas hasta inicio del proestro",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "5 mcg/kg PO cada 24 horas hasta inicio del proestro."
        },
        {
          "indicacion": "Hiperadrenocorticismo (HDP)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.005,
            "unidad_calculo": "mcg/kg"
          },
          "frecuencia": {
            "texto_ui": "cada 24 horas",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "5 mcg/kg PO cada 24 horas (o 70 mcg/kg/semana dividido)."
        }
      ],
      "gato": [
        {
          "indicacion": "Supresión de lactancia (extra-etiqueta)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.005,
            "unidad_calculo": "mcg/kg"
          },
          "frecuencia": {
            "texto_ui": "cada 24 horas por 5-7 días",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "5 mcg/kg PO cada 24 horas por 5-7 días."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a alcaloides del ergot.", "No usar en animales gestantes (a menos que sea para inducir aborto).", "Precaución en enfermedad hepática severa."
      ],
      "efectos_adversos": [
        "Vómitos y anorexia (menos comunes que con bromocriptina).", "Letargo.", "Hipotensión (rara)."
      ],
      "interacciones_farmacologicas": [
        { "farmaco": "Antagonistas de la dopamina (Fenotiazinas - acepromacina, Metoclopramida)", "efecto": "Pueden disminuir la eficacia.", "severidad": "Moderada" },
        { "farmaco": "Macrólidos (Eritromicina)", "efecto": "Pueden aumentar los niveles de cabergolina.", "severidad": "Moderada" }
      ],
      "sobredosis": {
        "signos": ["Vómitos, hipotensión."],
        "tratamiento": "Tratamiento de apoyo."
      }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Agonista potente y de acción prolongada de los receptores de dopamina D2 en la pituitaria anterior, inhibiendo la secreción de prolactina.",
      "farmacocinetica": "Buena absorción oral, pero sufre metabolismo de primer paso. Larga vida media. Metabolismo hepático. Excreción biliar/fecal."
    },
    "presentaciones_comerciales": [
      { "tipo": "Comprimidos", "concentracion_texto": "0.5 mg", "valor_concentracion": 0.5, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  };