import type { Drug } from '@/lib/types';

export const acetilcisteinaDrug: Drug = {
    "id": "acetilcisteina",
    "meta_data": {
      "nombre_generico": "Acetilcisteína (NAC)",
      "nombres_comerciales": ["Mucomyst", "Acetadote"],
      "grupo_farmacologico": "Antídoto, Mucolítico",
      "status_regulatorio": "Uso extra-label en veterinaria; Aprobado por la FDA para humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Tratamiento principal para toxicidad por acetaminofén.",
        "Actúa como precursor de glutatión.",
        "Uso IV requiere filtro de 0.2 micras.",
        "Vía nebulizada puede causar broncoespasmo."
      ],
      "usos_principales": "Toxicidad por acetaminofén, xilitol o fenol. Mucolítico en árbol bronquial. Tratamiento de lipidosis hepática en gatos y retención de meconio en potros."
    },
    "informacion_cliente": [
      "Debe usarse bajo supervisión clínica estricta.",
      "Tiene un olor azufrado muy desagradable.",
      "Para uso oral, se puede mezclar con jugos para ocultar el sabor."
    ],
    "monitoreo_paciente": [
      "Niveles de metahemoglobina.",
      "Perfil químico hepático.",
      "Electrolitos.",
      "Signos de broncoconstricción (si se inhala)."
    ],
    "interferencia_laboratorio": [
      "Metahemoglobina: Monitorear valores en toxicidad por acetaminofén.",
      "Cetonas urinarias: Posible falso positivo."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Toxicosis por acetaminofén (Extra-label)",
          "vias": ["IV", "PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 140,
            "dosis_min": 140,
            "dosis_max": 280,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Carga inicial, luego cada 6 horas por 7 dosis", "intervalo_horas": 6 },
          "notas_tecnicas": "Diluir al 5% (50 mg/mL). Carga IV: 140-180 mg/kg. Carga PO: 280 mg/kg."
        }
      ],
      "potro": [
        {
          "indicacion": "Retención de meconio (Extra-label)",
          "vias": ["Enema"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 150,
            "unidad_calculo": "mL"
          },
          "frecuencia": { "texto_ui": "Según sea necesario", "intervalo_horas": 0 },
          "notas_tecnicas": "Usar 100-200 mL de solución al 4%. Retener 30-45 min."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad (en uso pulmonar).",
        "Ninguna cuando se usa como antídoto de emergencia."
      ],
      "precauciones": [
        "Animales con asma o bronquitis (riesgo de broncoespasmo).",
        "Insuficiencia cardiaca (por carga de sodio en ciertas presentaciones)."
      ],
      "efectos_adversos": [
        "Náuseas y vómitos (vía oral).",
        "Urticaria.",
        "Broncoespasmo (inhalado).",
        "Cambios en presión arterial (IV rápido)."
      ],
      "sobredosis": {
        "signos": ["Vómitos", "Diarrea"],
        "tratamiento": "Soporte general."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Carbón activado", "efecto": "Puede adsorber la acetilcisteína oral", "severidad": "Moderada" },
        { "farmaco": "Nitroglicerina", "efecto": "Potencia la hipotensión", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Donador de grupos tiol, estimula síntesis de glutatión. Mucolítico: rompe enlaces disulfuro en mucoproteínas.",
      "farmacocinetica": "Bioavailabilidad oral en gatos ~20%. Vida media IV 0.8 h en gatos."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable / Inhalación", "concentracion_texto": "20% (200 mg/mL)", "valor_concentracion": 200, "unidad_concentracion": "mg/ml", "es_divisible": true }
    ]
  };
