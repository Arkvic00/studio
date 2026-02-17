import type { Drug } from '@/lib/types';

export const anfotericinaBDrug: Drug = {
    "id": "anfotericina_b",
    "meta_data": {
      "nombre_generico": "Anfotericina B (Desoxicolato y Liposomal)",
      "nombres_comerciales": ["Fungizone", "Abelcet"],
      "grupo_farmacologico": "Antifúngico Poliénico",
      "status_regulatorio": "Uso extra-label en veterinaria."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "El antifúngico sistémico más potente ('Estándar de oro').",
        "Extremadamente nefrotóxico (daña riñones) en su forma regular (desoxicolato).",
        "Formulaciones lipídicas/liposomales son mucho más seguras pero costosas.",
        "Requiere administración IV y fluidoterapia agresiva concurrente."
      ],
      "usos_principales": "Micosis sistémicas graves: Blastomicosis, Histoplasmosis, Criptococosis, Coccidioidomicosis y Candidiasis sistémica."
    },
    "informacion_cliente": [
      "Tratamiento intrahospitalario intensivo.",
      "Riesgo alto de daño renal; se monitoreará constantemente.",
      "Es costoso y laborioso."
    ],
    "monitoreo_paciente": [
      "BUN y Creatinina (ANTES de cada dosis) - Crítico.",
      "Análisis de orina (cilindros).",
      "Electrolitos (Potasio, Magnesio).",
      "Hemograma."
    ],
    "interferencia_laboratorio": [
      "BUN/Creatinina: Aumento casi seguro.",
      "Potasio/Magnesio: Disminución (hipopotasemia/hipomagnesemia)."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Micosis sistémica (Desoxicolato)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.5,
            "dosis_min": 0.25,
            "dosis_max": 1,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "3 veces por semana (Lunes-Miér-Vie)", "intervalo_horas": 48 },
          "notas_tecnicas": "Protocolo acumulativo hasta dosis total de 4-8 mg/kg. Requiere pre-carga de fluidos salinos."
        },
        {
          "indicacion": "Micosis sistémica (Complejo Lipídico)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 2,
            "dosis_min": 1,
            "dosis_max": 3,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "3 veces por semana", "intervalo_horas": 48 },
          "notas_tecnicas": "Mucho menos tóxico, permite dosis más altas."
        }
      ],
      "gato": [
        {
          "indicacion": "Criptococosis / Histoplasmosis",
          "vias": ["SC", "IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.3,
            "dosis_min": 0.1,
            "dosis_max": 0.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "3 veces por semana", "intervalo_horas": 48 },
          "notas_tecnicas": "Vía subcutánea (SC) en gatos diluida en fluidos es un protocolo común para reducir nefrotoxicidad."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Falla renal preexistente (relativa, sopesar riesgo/beneficio).",
        "Hipersensibilidad."
      ],
      "precauciones": [
        "Uso concomitante con otros nefrotóxicos (Aminoglucósidos, AINEs)."
      ],
      "efectos_adversos": [
        "Nefrotoxicidad (dependiente de dosis acumulada).",
        "Fiebre, temblores y vómitos durante la infusión.",
        "Flebitis (inflamación vena).",
        "Anemia (uso crónico)."
      ],
      "sobredosis": {
        "signos": ["Paro cardiaco", "Falla renal aguda"],
        "tratamiento": "Suspender inmediatamente, soporte vital, diálisis."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Aminoglucósidos / Cisplatino", "efecto": "Sinergia nefrotóxica severa", "severidad": "Grave" },
        { "farmaco": "Digoxina", "efecto": "Aumenta toxicidad de digoxina por hipopotasemia", "severidad": "Importante" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se une al ergosterol en la membrana celular del hongo, creando poros que causan fuga de componentes celulares y muerte.",
      "farmacocinetica": "Mala penetración en SNC y ojo. Excreción biliar y renal muy lenta (se detecta semanas después)."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable Liofilizado", "concentracion_texto": "50 mg", "valor_concentracion": 50, "unidad_concentracion": "mg", "es_divisible": false }
    ]
  };
