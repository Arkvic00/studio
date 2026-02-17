import type { Drug } from '@/lib/types';

export const amoxicilinaDrug: Drug = {
    "id": "amoxicilina",
    "meta_data": {
      "nombre_generico": "Amoxicilina",
      "nombres_comerciales": ["Amoxi-Tabs", "Amoxi-Drop", "Robamox"],
      "grupo_farmacologico": "Antibiótico Aminopenicilina",
      "status_regulatorio": "Aprobado FDA (Perros, Gatos, Bovinos)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Bactericida tiempo-dependiente.",
        "Mejor absorción oral que la ampicilina (se puede dar con comida).",
        "Ineficaz contra bacterias productoras de beta-lactamasas (ej. muchos Staph, E. coli).",
        "No usar en conejos, cobayas, hámsters (disbiosis fatal)."
      ],
      "usos_principales": "Infecciones de tejidos blandos, tracto urinario, respiratorio y abscesos causados por bacterias sensibles (Streptococcus, Pasteurella)."
    },
    "informacion_cliente": [
      "Completar todo el tratamiento aunque el animal mejore.",
      "Puede causar diarrea leve.",
      "La suspensión líquida debe guardarse en refrigeración y desecharse tras 14 días.",
      "NUNCA dar a conejos."
    ],
    "monitoreo_paciente": [
      "Eficacia clínica.",
      "Efectos adversos GI (vómito/diarrea)."
    ],
    "interferencia_laboratorio": [
      "Glucosa urinaria: Falsos positivos con pruebas de sulfato de cobre."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones susceptibles",
          "vias": ["PO", "SC", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 11,
            "dosis_min": 10,
            "dosis_max": 22,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 }
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones susceptibles",
          "vias": ["PO", "SC", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 11,
            "dosis_min": 11,
            "dosis_max": 22,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "notas_tecnicas": "Tabletas pueden ser muy grandes para gatos; suspensión preferida."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a penicilinas o cefalosporinas.",
        "Pequeños herbívoros (conejos, cobayas, hámsters)."
      ],
      "precauciones": [
        "Insuficiencia renal severa (reducir dosis)."
      ],
      "efectos_adversos": [
        "Diarrea / Heces blandas.",
        "Reacciones de hipersensibilidad (rash, fiebre, anafilaxia).",
        "Neurotoxicidad (muy raro, dosis altísimas)."
      ],
      "sobredosis": {
        "signos": ["Vómitos", "Diarrea", "Cristaluria (raro)"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Antibióticos bacteriostáticos (Tetraciclinas)", "efecto": "Pueden antagonizar efecto bactericida (evitar mezcla)", "severidad": "Moderada" },
        { "farmaco": "Metotrexato", "efecto": "Aumenta niveles de metotrexato (toxicidad)", "severidad": "Importante" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se une a las proteínas de unión a penicilina (PBPs), inhibiendo la síntesis de la pared celular bacteriana, causando lisis.",
      "farmacocinetica": "Excelente absorción oral (75-90%). Vida media corta (~1-1.5 h). Excreción renal."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "50, 100, 150, 200, 400 mg", "valor_concentracion": 100, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Suspensión", "concentracion_texto": "50 mg/mL", "valor_concentracion": 50, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
