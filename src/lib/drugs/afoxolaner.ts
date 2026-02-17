import type { Drug } from '@/lib/types';

export const afoxolanerDrug: Drug = {
    "id": "afoxolaner",
    "meta_data": {
      "nombre_generico": "Afoxolaner",
      "nombres_comerciales": ["NexGard", "NexGard Spectra"],
      "grupo_farmacologico": "Ectoparasiticida, Isoxazolina",
      "status_regulatorio": "Aprobado FDA para perros (8 semanas+)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Tableta masticable de administración mensual.",
        "Mata pulgas antes de que pongan huevos (inicio 4h).",
        "Advertencia de la FDA sobre efectos neurológicos en la clase isoxazolinas.",
        "Debe administrarse a perros de al menos 1.8 kg."
      ],
      "usos_principales": "Prevención de pulgas y garrapatas. Prevención de Borrelia burgdorferi. Uso extra-label para sarna democécica y sarcóptica."
    },
    "informacion_cliente": [
      "Se puede dar con o sin comida.",
      "Si el perro vomita antes de 2 horas tras la dosis, repetir dosis completa.",
      "Asegurarse de que el animal consuma la tableta entera.",
      "Mantener fuera del alcance de otros animales y niños."
    ],
    "monitoreo_paciente": [
      "Eficacia clínica (conteo de parásitos).",
      "Signos neurológicos (temblores, ataxia, convulsiones).",
      "Estado de la piel."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias en el manual."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Pulgas y Garrapatas (Etiqueta FDA)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 2.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al mes", "intervalo_horas": 720 },
          "notas_tecnicas": "Usar según rangos de peso del fabricante (ej. 11.3 mg para 1.8-4.5 kg)."
        },
        {
          "indicacion": "Demodicosis generalizada (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 2.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Días 0, 14, 28 y 56", "intervalo_horas": 0 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Ninguna cuando se usa según la etiqueta."],
      "precauciones": [
        "Perros con historial de convulsiones o epilepsia.",
        "No evaluado en perras reproductoras, preñadas o lactantes."
      ],
      "efectos_adversos": [
        "Vómitos (4.1%).",
        "Piel seca/escamosa.",
        "Letargo.",
        "Ataxia y temblores musculares."
      ],
      "sobredosis": {
        "signos": ["Vómitos", "Sin efectos relevantes a 5x la dosis en estudios"],
        "tratamiento": "Soporte."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Vacunas / Antibióticos", "efecto": "Sin interacciones reportadas", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloquea canales de cloruro mediados por GABA en el SNC del parásito, causando hiperexcitación neuronal y muerte.",
      "farmacocinetica": "Biodisponibilidad ~75%. Vida media de eliminación prolongada (~15 días)."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta masticable", "concentracion_texto": "11.3, 28.3, 68, 136 mg", "valor_concentracion": 11.3, "unidad_concentracion": "mg", "es_divisible": false }
    ]
  };
