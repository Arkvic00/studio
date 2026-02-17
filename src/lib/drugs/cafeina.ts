import type { Drug } from '@/lib/types';

export const cafeinaDrug: Drug = {
  "id": "cafe_na",
  "meta_data": {
    "nombre_generico": "Cafeína",
    "nombres_comerciales": [
      "NoDoz",
      "Vivarin",
      "Cafeína Citrato (Neonatal)"
    ],
    "grupo_farmacologico": "Metilxantina; Estimulante del SNC y Respiratorio",
    "status_regulatorio": "Uso veterinario"
  },
  "resumen_clinico": {
    "puntos_clave": [
      "El Doxapram es otro estimulante respiratorio comúnmente usado en neonatos.",
      "La teobromina (en chocolate) y la teofilina son metilxantinas relacionadas."
    ],
    "usos_principales": "Estimulante respiratorio en neonatos (especialmente después de cesárea o distocia). Tratamiento de la apnea neonatal. Históricamente usado como estimulante general del SNC (ahora reemplazado por agentes más seguros)."
  },
  "informacion_cliente": [
    "Mantener los productos con cafeína (café, té, pastillas) fuera del alcance de las mascotas."
  ],
  "monitoreo_paciente": [
    "Frecuencia y esfuerzo respiratorio.",
    "Frecuencia cardíaca.",
    "Estado de alerta del SNC."
  ],
  "parametros_dosificacion": {
    "perroNeonato": [
      {
        "indicacion": "Estimulante respiratorio/Apnea",
        "vias": [
          "IV",
          "IM",
          "SC",
          "PO",
          "Sublingual"
        ],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 15,
          "dosis_min": 10,
          "dosis_max": 20,
          "unidad_calculo": "mg/kg"
        },
        "notas_tecnicas": "Cafeína Citrato: 10–20 mg/kg (equivale a 5-10 mg/kg cafeína base) IV, IM, SC, PO, Sublingual. Puede repetirse."
      }
    ],
    "gatoNeonato": [
      {
        "indicacion": "Estimulante respiratorio/Apnea",
        "vias": [
          "IV",
          "IM",
          "SC",
          "PO",
          "Sublingual"
        ],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 15,
          "dosis_min": 10,
          "dosis_max": 20,
          "unidad_calculo": "mg/kg"
        },
        "notas_tecnicas": "Cafeína Citrato: 10–20 mg/kg IV, IM, SC, PO, Sublingual."
      }
    ],
    "potro": [
      {
        "indicacion": "Apnea neonatal",
        "vias": [
          "IV",
          "PO"
        ],
        "math": {
          "tipo_calculo": "fija",
          "unidad_calculo": "Cafeína Citrato: 10 mg/kg IV o PO (dosis de carga), luego 2.5 mg/kg cada 12-24h."
        },
        "notas_tecnicas": "Cafeína Citrato: 10 mg/kg IV o PO (dosis de carga), luego 2.5 mg/kg cada 12-24h."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Hipersensibilidad a xantinas.",
      "Taquiarritmias severas preexistentes.",
      "Convulsiones."
    ],
    "efectos_adversos": [
      "Estimulación del SNC (nerviosismo, agitación, temblores, insomnio).",
      "Taquicardia, arritmias.",
      "Malestar GI (náuseas, vómitos).",
      "Poliuria."
    ],
    "interacciones_farmacologicas": [
      {
        "farmaco": "Fluoroquinolonas (Enrofloxacina), Cimetidina",
        "efecto": "Disminuyen el metabolismo de la cafeína, aumentando el riesgo de toxicidad.",
        "severidad": "Moderada"
      },
      {
        "farmaco": "Teofilina/Aminofilina",
        "efecto": "Efectos aditivos (toxicidad por xantinas).",
        "severidad": "Moderada"
      },
      {
        "farmaco": "Benzodiazepinas",
        "efecto": "La cafeína puede antagonizar sus efectos sedantes.",
        "severidad": "Moderada"
      }
    ],
    "sobredosis": {
      "tratamiento": "Toxicidad por xantinas: agitación severa, vómitos, taquiarritmias, convulsiones. Descontaminación GI (carbón activado). Tratamiento de apoyo: Diazepam para convulsiones, beta-bloqueador (esmolol) para taquicardia, fluidoterapia."
    }
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "Antagonista competitivo de los receptores de adenosina. Inhibe la fosfodiesterasa (aumenta AMPc). Estimula la liberación de catecolaminas. Suprime la lactancia y puede inducir el celo o el aborto al disminuir los niveles de prolactina (que apoya el cuerpo lúteo en perras).",
    "farmacocinetica": "Absorción oral rápida y completa. Se distribuye ampliamente (incluyendo SNC y leche). Metabolismo hepático (CYP1A2). Excreción renal. Vida media variable (3-7 horas en perros)."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Comprimidos",
      "concentracion_texto": "100 mg, 200 mg",
      "valor_concentracion": 100,
      "unidad_concentracion": "mg",
      "es_divisible": true
    },
    {
      "tipo": "Inyección (Citrato)",
      "concentracion_texto": "20 mg/mL (equivale a 10 mg/mL de cafeína base)",
      "valor_concentracion": 20,
      "unidad_concentracion": "mg/mL",
      "es_divisible": false
    }
  ]
};
