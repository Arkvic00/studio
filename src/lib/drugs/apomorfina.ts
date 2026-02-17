import type { Drug } from '@/lib/types';

export const apomorfinaDrug: Drug = {
    "id": "apomorfina",
    "meta_data": {
      "nombre_generico": "Apomorfina Clorhidrato",
      "nombres_comerciales": [
        "Apokyn",
        "Emetor"
      ],
      "grupo_farmacologico": "Emético (Agonista Dopaminérgico)",
      "status_regulatorio": "Uso extra-label en perros (común). Existen formulaciones oftálmicas aprobadas."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Emético de elección para PERROS.",
        "NO RECOMENDADO EN GATOS (poco efectivo y causa excitación maníaca; usar Xilacina o Dexmedetomidina en gatos).",
        "Induce el vómito rápidamente (2-10 min) tras administración IV o en saco conjuntival.",
        "Si la primera dosis no funciona, NO repetir (satura receptores y no funcionará)."
      ],
      "usos_principales": "Inducción del vómito tras ingestión de toxinas o cuerpos extraños recientes (antes de 2-4 horas)."
    },
    "informacion_cliente": [
      "Se administra para que el perro expulse el veneno.",
      "El perro puede quedar mareado o con náuseas un rato después.",
      "Los ojos pueden enrojecerse si se administra vía ocular."
    ],
    "monitoreo_paciente": [
      "Efectividad del vómito.",
      "Estado mental (sedación).",
      "Aspiración (vigilar que no inhale vómito)."
    ],
    "interferencia_laboratorio": [
      "Ninguna."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Inducción del vómito",
          "vias": ["IV", "IM", "Oftálmica (Saco conjuntival)"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.03,
            "dosis_min": 0.02,
            "dosis_max": 0.04,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "IV: 0.03 mg/kg. Oftálmica: Disolver tableta y poner gotas en el ojo, o poner trozo de tableta en saco conjuntival; lavar el ojo profusamente en cuanto vomite para detener el efecto."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Gatos (Usar Xilacina).",
        "Ingestión de cáusticos, corrosivos o destilados de petróleo (riesgo de daño esofágico o neumonía al vomitar).",
        "Pacientes en coma, con convulsiones o sin reflejo de deglución (riesgo de aspiración).",
        "Ingestión de objetos punzocortantes."
      ],
      "precauciones": [
        "Colapso circulatorio."
      ],
      "efectos_adversos": [
        "Vómito prolongado (dar Maropitant o Metoclopramida para detener).",
        "Sedación.",
        "Irritación ocular (vía conjuntival)."
      ],
      "sobredosis": {
        "signos": ["Depresión respiratoria", "Sedación excesiva", "Vómito incesante"],
        "tratamiento": "Naloxona (revierte depresión SNC pero no el vómito). Antieméticos."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Antieméticos (Maropitant)",
          "efecto": "Antagonizan el efecto (obviamente)",
          "severidad": "Importante"
        },
        {
          "farmaco": "Opiáceos",
          "efecto": "Potenciación de depresión SNC",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Estimula directamente los receptores de dopamina (D2) en la Zona Gatillo Quimiorreceptora (CRTZ) del bulbo raquídeo.",
      "farmacocinetica": "Inicio rápido. Metabolismo hepático."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Inyectable",
        "concentracion_texto": "Varios",
        "valor_concentracion": 10,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      },
      {
        "tipo": "Tableta Soluble",
        "concentracion_texto": "6 mg",
        "valor_concentracion": 6,
        "unidad_concentracion": "mg",
        "es_divisible": true
      }
    ]
  };
