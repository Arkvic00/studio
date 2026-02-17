import type { Drug } from '@/lib/types';

export const alfaxalonaDrug: Drug = {
    "id": "alfaxalona",
    "meta_data": {
      "nombre_generico": "Alfaxalona",
      "nombres_comerciales": ["Alfaxan-Multidose"],
      "grupo_farmacologico": "Anestésico General / Neuroesteroide",
      "status_regulatorio": "Aprobado FDA (Perros y Gatos)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inductor anestésico con amplio margen de seguridad cardiovascular.",
        "Puede causar apnea si se administra muy rápido IV.",
        "La recuperación puede ser agitada si el ambiente no es tranquilo.",
        "A diferencia de la formulación antigua (Saffan), no libera histamina."
      ],
      "usos_principales": "Inducción y mantenimiento de la anestesia. Sedación profunda (vía IM en gatos)."
    },
    "informacion_cliente": [
      "El animal estará bajo anestesia profesional.",
      "Tras la cirugía, la mascota debe estar en un lugar oscuro y silencioso.",
      "Es posible que presente movimientos involuntarios durante la recuperación."
    ],
    "monitoreo_paciente": [
      "Frecuencia respiratoria y EtCO2 (Riesgo de apnea).",
      "Saturación de oxígeno (SpO2).",
      "Presión arterial.",
      "Reflejos palpebrales y profundidad anestésica."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias significativas en pruebas químicas estándar."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Inducción anestésica (Sin premedicación)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 3,
            "dosis_min": 1.5,
            "dosis_max": 4.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dosis única (titular a efecto)", "intervalo_horas": 0 },
          "notas_tecnicas": "Administrar 1/4 de la dosis cada 15 segundos hasta lograr intubación."
        }
      ],
      "gato": [
        {
          "indicacion": "Sedación profunda (Extra-label)",
          "vias": ["IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 3.5,
            "dosis_min": 2,
            "dosis_max": 5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Hipersensibilidad conocida."],
      "precauciones": [
        "Pacientes con enfermedad renal o hepática severa (metabolismo alterado).",
        "Cesáreas (cruza la placenta)."
      ],
      "efectos_adversos": [
        "Apnea post-inducción.",
        "Hipotensión (especialmente si se asocia con isoflurano).",
        "Temblores musculares durante la recuperación.",
        "Hipersensibilidad a estímulos auditivos."
      ],
      "sobredosis": {
        "signos": ["Depresión cardiorrespiratoria severa"],
        "tratamiento": "Ventilación mecánica con oxígeno y soporte de presión arterial."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Benzodiacepinas / Opioides", "efecto": "Reducen la dosis necesaria de alfaxalona", "severidad": "Moderada" },
        { "farmaco": "Anestésicos inhalados", "efecto": "Efecto aditivo depresor", "severidad": "Importante" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Modula el transporte de iones cloruro a través de la membrana celular al unirse a los receptores GABA-A.",
      "farmacocinetica": "Metabolismo hepático rápido. Vida media en perros ~25 min, gatos ~45 min."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable", "concentracion_texto": "10 mg/mL", "valor_concentracion": 10, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
