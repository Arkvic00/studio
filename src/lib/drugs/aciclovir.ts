import type { Drug } from '@/lib/types';

export const aciclovirDrug: Drug = {
    "id": "aciclovir",
    "meta_data": {
      "nombre_generico": "Aciclovir",
      "nombres_comerciales": ["Zovirax"],
      "grupo_farmacologico": "Antiviral, Nucleósido",
      "status_regulatorio": "Uso extra-label en aves, caballos y perros. CONTRAINDICADO en gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Usado principalmente en aves para la Enfermedad de Pacheco.",
        "Nefrotóxico si se da IV rápido.",
        "Causa necrosis tisular en aves si se da IM.",
        "Gatos: NO USAR por toxicidad renal, hepática y mielosupresión."
      ],
      "usos_principales": "Tratamiento de infecciones por herpesvirus en aves (PsHV-1). Coadyuvante en herpesvirus canino y parvovirus en cachorros."
    },
    "informacion_cliente": [
      "Efectos secundarios limitados a problemas GI (vómitos, diarrea).",
      "En aves, se puede dar en el agua o mezclado con semillas.",
      "Requiere pruebas de laboratorio constantes para monitorear riñones."
    ],
    "monitoreo_paciente": [
      "Función renal (BUN, Creatinina) - Crítico.",
      "Hemograma completo.",
      "Sitio de inyección (en aves)."
    ],
    "interferencia_laboratorio": [
      "Valores renales: Pueden aumentar falsamente si ocurre cristaluria."
    ],
    "parametros_dosificacion": {
      "aves": [
        {
          "indicacion": "Enfermedad de Pacheco (Extra-label)",
          "vias": ["PO", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 80,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 8 horas por 7-14 días", "intervalo_horas": 8 },
          "notas_tecnicas": "PO es preferible. IM puede causar necrosis severa."
        }
      ],
      "perro": [
        {
          "indicacion": "Herpesvirus canino neonatal (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 6 horas por 5 días", "intervalo_horas": 6 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Gatos (Riesgo de muerte por toxicidad).",
        "Hipersensibilidad."
      ],
      "precauciones": [
        "Deshidratación (aumenta riesgo renal).",
        "Ajustar dosis en insuficiencia renal."
      ],
      "efectos_adversos": [
        "Falla renal aguda.",
        "Tromboflebitis.",
        "Cambios encefalopáticos (raros).",
        "En caballos IV: temblores, sudoración y cólico."
      ],
      "sobredosis": {
        "signos": ["Vómitos", "Diarrea", "Letargo", "Cristaluria"],
        "tratamiento": "Hemodiálisis, descontaminación GI si >150 mg/kg."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Aminoglucósidos", "efecto": "Aumenta potencial de nefrotoxicidad", "severidad": "Grave" },
        { "farmaco": "Zidovudina", "efecto": "Aumenta depresión del SNC", "severidad": "Moderada" },
        { "farmaco": "Meperidina", "efecto": "Aumenta riesgo de convulsiones", "severidad": "Grave" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Análogo de purina. Inhibe la replicación del ADN viral tras ser convertido por la timidina quinasa viral.",
      "farmacocinetica": "Baja biodisponibilidad oral en caballos (<4%). Cruza la placenta y entra en la leche materna."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "400 mg, 800 mg", "valor_concentracion": 400, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Inyección", "concentracion_texto": "50 mg/mL", "valor_concentracion": 50, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
