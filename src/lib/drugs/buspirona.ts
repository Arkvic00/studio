import type { Drug } from '@/lib/types';

export const buspironaDrug: Drug = {
  "id": "buspirona",
  "meta_data": {
    "nombre_generico": "Buspirona HCl",
    "nombres_comerciales": [
      "Buspar"
    ],
    "grupo_farmacologico": "Ansiolítico (Azapirona)",
    "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Ansiolítico NO sedante (a diferencia de benzodiacepinas).",
      "Efecto demora semanas en aparecer (no sirve para tormentas de hoy).",
      "Muy útil para gatos tímidos/victimizados o marcaje con orina.",
      "Puede causar desinhibición de agresión (gatos tímidos pueden volverse valientes y atacar al agresor)."
    ],
    "usos_principales": "Ansiedad generalizada, marcaje urinario felino, agresión por miedo (con precaución)."
  },
  "informacion_cliente": [
    "Hay que darlo diario, no funciona si se da 'cuando se necesita'.",
    "Tarda de 2 a 4 semanas en ver efecto.",
    "El gato 'miedoso' puede volverse más asertivo con otros gatos."
  ],
  "monitoreo_paciente": [
    "Comportamiento (agresión).",
    "Frecuencia de marcaje."
  ],
  "interferencia_laboratorio": [
    "Ninguna."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Ansiedad",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 1,
          "dosis_min": 0.5,
          "dosis_max": 2,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Cada 8 a 12 horas",
          "intervalo_horas": 8
        }
      }
    ],
    "gato": [
      {
        "indicacion": "Marcaje urinario / Ansiedad",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "fija",
          "dosis_recomendada": 5,
          "dosis_min": 2.5,
          "dosis_max": 7.5,
          "unidad_calculo": "mg/gato"
        },
        "frecuencia": {
          "texto_ui": "Cada 12 horas",
          "intervalo_horas": 12
        }
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Hipersensibilidad.",
      "Uso de IMAO."
    ],
    "precauciones": [
      "Enfermedad renal o hepática."
    ],
    "efectos_adversos": [
      "Aumento de afecto/Agresión (paradoja en gatos).",
      "Bradicardia (raro).",
      "Disturbios GI leves."
    ],
    "sobredosis": {
      "signos": ["Sedación", "Miosis", "Molestias GI"],
      "tratamiento": "Sintomático."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "IMAO (Selegilina)",
        "efecto": "Hipertensión severa",
        "severidad": "Grave"
      },
      {
        "farmaco": "Eritromicina / Itraconazol",
        "efecto": "Aumentan niveles de buspirona",
        "severidad": "Moderada"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Agonista parcial de receptores de serotonina (5-HT1A) y antagonista de dopamina. No afecta GABA (no seda).",
    "farmacocinetica": "Metabolismo hepático rápido. Vida media corta (por eso se da 2-3 veces al día)."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Tableta",
      "concentracion_texto": "5, 10, 15, 30 mg",
      "valor_concentracion": 5,
      "unidad_concentracion": "mg",
      "es_divisible": true
    }
  ]
};
