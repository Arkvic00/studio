import type { Drug } from '@/lib/types';

export const alprazolamDrug: Drug = {
    "id": "alprazolam",
    "meta_data": {
      "nombre_generico": "Alprazolam",
      "nombres_comerciales": ["Xanax", "Niravam"],
      "grupo_farmacologico": "Benzodiacepina",
      "status_regulatorio": "Uso extra-label; Sustancia Controlada Clase IV."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Potente ansiolítico, más potente que el diazepam.",
        "Eficaz para miedos situacionales (tormentas, fuegos artificiales).",
        "Puede causar reacciones paradójicas (excitación/agresión).",
        "Debe administrarse 30-60 min antes del evento estresante."
      ],
      "usos_principales": "Tratamiento de fobias por ruido, ansiedad por separación y estimulante del apetito en gatos (raro)."
    },
    "informacion_cliente": [
      "Probar la dosis en un ambiente tranquilo antes del evento estresante.",
      "Puede causar sedación profunda o tambaleo (ataxia).",
      "No suspender abruptamente tras uso crónico (riesgo de convulsiones)."
    ],
    "monitoreo_paciente": [
      "Nivel de ansiedad/sedación.",
      "Enzimas hepáticas (en gatos, riesgo de necrosis hepática con benzodiacepinas, aunque menor que con diazepam).",
      "Cambios de conducta."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias comunes en las pruebas de rutina."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Fobias por ruido / Pánico",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 0.02,
            "dosis_max": 0.1,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Antes del evento, repetir cada 6-12 horas si es necesario", "intervalo_horas": 6 }
        }
      ],
      "gato": [
        {
          "indicacion": "Ansiedad / Marcaje urinario",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_min": 0.125,
            "dosis_max": 0.25,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a benzodiacepinas.",
        "Glaucoma de ángulo cerrado.",
        "Enfermedad hepática o renal severa."
      ],
      "precauciones": [
        "Animales de trabajo/servicio (sedación).",
        "Animales agresivos (desinhibición de la agresión)."
      ],
      "efectos_adversos": [
        "Sedación y ataxia.",
        "Aumento del apetito.",
        "Excitación paradójica.",
        "Dependencia física (tras uso prolongado)."
      ],
      "sobredosis": {
        "signos": ["Depresión severa del SNC", "Coma"],
        "tratamiento": "Flumazenil (antídoto)."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Ketoconazol / Itraconazol", "efecto": "Inhiben el metabolismo del alprazolam (aumenta sedación)", "severidad": "Grave" },
        { "farmaco": "Antihistamínicos / Opioides", "efecto": "Aumentan depresión del SNC", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Potencia los efectos inhibitorios del GABA en el SNC.",
      "farmacocinetica": "Absorción rápida. Vida media en perros ~2-4 h."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "0.25, 0.5, 1, 2 mg", "valor_concentracion": 0.25, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  };
