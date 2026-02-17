import type { Drug } from '@/lib/types';

export const amlodipinoBesilatoDrug: Drug = {
    "id": "amlodipino_besilato",
    "meta_data": {
      "nombre_generico": "Amlodipino Besilato",
      "nombres_comerciales": ["Norvasc", "Amodip"],
      "grupo_farmacologico": "Bloqueador de Canales de Calcio",
      "status_regulatorio": "Uso extra-label en perros y gatos (Amodip aprobado en Europa para gatos)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Fármaco de elección para hipertensión en gatos.",
        "Vasodilatador periférico potente, efecto mínimo en el corazón.",
        "Inicio de acción lento, no causa hipotensión aguda severa usualmente.",
        "Puede causar hiperplasia gingival (crecimiento de encías) en uso crónico en perros."
      ],
      "usos_principales": "Tratamiento de hipertensión sistémica (especialmente felina asociada a enfermedad renal) y reducción de postcarga en insuficiencia cardiaca congestiva."
    },
    "informacion_cliente": [
      "Monitorear presión arterial regularmente.",
      "Puede causar encías agrandadas en perros tras meses de uso.",
      "Generalmente se tolera muy bien."
    ],
    "monitoreo_paciente": [
      "Presión arterial sistólica.",
      "Frecuencia cardiaca (puede haber taquicardia refleja leve).",
      "Potasio (en pacientes renales)."
    ],
    "interferencia_laboratorio": [
      "No reportadas comúnmente."
    ],
    "parametros_dosificacion": {
      "gato": [
        {
          "indicacion": "Hipertensión sistémica",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 0.625,
            "dosis_min": 0.625,
            "dosis_max": 1.25,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Una vez al día", "intervalo_horas": 24 },
          "notas_tecnicas": "Equivale a 1/4 de tableta de 2.5 mg. Si la presión >180 mmHg, se puede subir a 1.25 mg/gato."
        }
      ],
      "perro": [
        {
          "indicacion": "Hipertensión",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.1,
            "dosis_min": 0.05,
            "dosis_max": 0.2,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una o dos veces al día", "intervalo_horas": 24 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipotensión.",
        "Shock cardiogénico."
      ],
      "precauciones": [
        "Enfermedad hepática (vida media se prolonga).",
        "Estenosis aórtica."
      ],
      "efectos_adversos": [
        "Hipotensión.",
        "Inapetencia / Letargo.",
        "Hiperplasia gingival (perros).",
        "Edema periférico."
      ],
      "sobredosis": {
        "signos": ["Hipotensión severa", "Taquicardia refleja", "Bradicardia (raro)"],
        "tratamiento": "Fluidos IV, Gluconato de calcio, vasopresores."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Inhibidores ACE (Enalapril)", "efecto": "Sinergia positiva para bajar presión, seguro de combinar", "severidad": "Leve" },
        { "farmaco": "Ciclosporina", "efecto": "Amlodipino aumenta niveles de ciclosporina", "severidad": "Importante" },
        { "farmaco": "Azoles (Ketoconazol)", "efecto": "Aumentan niveles de amlodipino", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe la entrada de calcio en el músculo liso vascular, causando vasodilatación de arteriolas y reducción de la resistencia vascular periférica.",
      "farmacocinetica": "Biodisponibilidad alta. Vida media larga (~30 horas en perros)."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "2.5 mg, 5 mg, 10 mg", "valor_concentracion": 2.5, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  };
