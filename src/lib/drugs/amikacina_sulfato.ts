import type { Drug } from '@/lib/types';

export const amikacinaSulfatoDrug: Drug = {
    "id": "amikacina_sulfato",
    "meta_data": {
      "nombre_generico": "Amikacina Sulfato",
      "nombres_comerciales": ["Amiglyde-V", "Amikin"],
      "grupo_farmacologico": "Antibiótico Aminoglucósido",
      "status_regulatorio": "Aprobado FDA (Perros y Caballos); Uso extra-label en gatos y exóticos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Antibiótico potente para infecciones graves por bacterias Gram-negativas.",
        "Altamente nefrotóxico (daña riñones) y ototóxico (daña oído).",
        "La dosificación una vez al día es preferida para minimizar toxicidad en riñones.",
        "Es ineficaz contra bacterias anaerobias.",
        "A menudo se combina con beta-lactámicos para ampliar espectro."
      ],
      "usos_principales": "Tratamiento de infecciones graves causadas por bacilos Gram-negativos (E. coli, Pseudomonas, Klebsiella) y algunas infecciones estafilocócicas."
    },
    "informacion_cliente": [
      "Este medicamento se administra generalmente mediante inyección en el hospital.",
      "El animal debe estar bien hidratado todo el tiempo.",
      "Notificar inmediatamente si el animal deja de orinar o parece sordo/mareado."
    ],
    "monitoreo_paciente": [
      "Análisis de orina (cilindros urinarios son el primer signo de toxicidad).",
      "BUN y Creatinina (función renal).",
      "Estado de hidratación.",
      "Capacidad auditiva y equilibrio (signos vestibulares)."
    ],
    "interferencia_laboratorio": [
      "Enzimas hepáticas: Puede causar elevaciones transitorias.",
      "BUN/Creatinina: Aumentan si hay nefrotoxicidad."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones susceptibles (Gram -)",
          "vias": ["IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 15,
            "dosis_min": 15,
            "dosis_max": 30,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día (SID)", "intervalo_horas": 24 },
          "notas_tecnicas": "La administración SID (una vez al día) reduce la acumulación en la corteza renal. Administrar IV lento."
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones susceptibles (Gram -)",
          "vias": ["IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "dosis_min": 10,
            "dosis_max": 15,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día", "intervalo_horas": 24 },
          "notas_tecnicas": "Los gatos son muy sensibles a la toxicidad vestibular."
        }
      ],
      "caballo": [
        {
          "indicacion": "Infecciones uterinas / Bacteriemia en potros",
          "vias": ["IV", "IM", "Intrauterina"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 21,
            "dosis_min": 10,
            "dosis_max": 25,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día", "intervalo_horas": 24 },
          "notas_tecnicas": "En potros neonatos, monitorear niveles séricos es crucial (TDM)."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Insuficiencia renal preexistente (a menos que sea la única opción para salvar la vida).",
        "Deshidratación severa."
      ],
      "precauciones": [
        "Animales geriátricos o neonatos.",
        "Uso concurrente con otros fármacos nefrotóxicos o diuréticos potentes."
      ],
      "efectos_adversos": [
        "Nefrotoxicidad (necrosis tubular aguda).",
        "Ototoxicidad (sordera o pérdida de equilibrio).",
        "Bloqueo neuromuscular (raro, en anestesia)."
      ],
      "sobredosis": {
        "signos": ["Falla renal aguda", "Sordera", "Ataxia"],
        "tratamiento": "Diálisis peritoneal o hemodiálisis. Fluidoterapia agresiva."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Furosemida", "efecto": "Aumenta riesgo de ototoxicidad", "severidad": "Grave" },
        { "farmaco": "AINEs (Carprofeno/Meloxicam)", "efecto": "Aumenta riesgo de nefrotoxicidad", "severidad": "Importante" },
        { "farmaco": "Anestésicos generales", "efecto": "Potencia bloqueo neuromuscular", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se une irreversiblemente a la subunidad 30S del ribosoma bacteriano, inhibiendo la síntesis de proteínas. Es bactericida dependiente de la concentración.",
      "farmacocinetica": "No se absorbe oralmente. Se excreta inalterada por filtración glomerular. Vida media corta (~1-2h) pero efecto post-antibiótico prolongado."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable", "concentracion_texto": "50 mg/mL, 250 mg/mL", "valor_concentracion": 250, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
