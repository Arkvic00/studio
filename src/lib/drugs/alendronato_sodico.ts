import type { Drug } from '@/lib/types';

export const alendronatoSodicoDrug: Drug = {
    "id": "alendronato_sodico",
    "meta_data": {
      "nombre_generico": "Alendronato Sódico",
      "nombres_comerciales": ["Fosamax"],
      "grupo_farmacologico": "Bifosfonato",
      "status_regulatorio": "Uso extra-label en perros y gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inhibidor de la resorción ósea mediada por osteoclastos.",
        "Extremadamente irritante para el esófago.",
        "Debe administrarse con el estómago vacío y mantener al animal en pie tras la dosis.",
        "Baja biodisponibilidad oral (<1%)."
      ],
      "usos_principales": "Tratamiento de hipercalcemia idiopática en gatos y manejo adyuvante de osteosarcoma en perros."
    },
    "informacion_cliente": [
      "Administrar por la mañana con el estómago vacío.",
      "Seguir la tableta con al menos 5-10 mL de agua para asegurar que llegue al estómago.",
      "NO permitir que el animal se acueste durante 30 minutos después de la dosis para evitar quemaduras esofágicas.",
      "No dar comida ni otros medicamentos por al menos 30-60 min."
    ],
    "monitoreo_paciente": [
      "Calcio sérico (Ionizado preferiblemente).",
      "Función renal (BUN, Creatinina).",
      "Signos de esofagitis (regurgitación, inapetencia)."
    ],
    "interferencia_laboratorio": [
      "Calcio y Fosfatos: Disminución de niveles séricos debido al efecto farmacológico."
    ],
    "parametros_dosificacion": {
      "gato": [
        {
          "indicacion": "Hipercalcemia idiopática (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 10,
            "dosis_min": 5,
            "dosis_max": 30,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Una vez por semana", "intervalo_horas": 168 },
          "notas_tecnicas": "Ajustar dosis según niveles de calcio ionizado."
        }
      ],
      "perro": [
        {
          "indicacion": "Manejo de osteosarcoma (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 1,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día", "intervalo_horas": 24 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Anormalidades esofágicas (megaesófago, estenosis).",
        "Incapacidad para mantenerse erguido por 30 min.",
        "Hipocalcemia.",
        "Falla renal severa."
      ],
      "precauciones": [
        "Gastritis o úlceras activas.",
        "Deficiencia de Vitamina D."
      ],
      "efectos_adversos": [
        "Esofagitis severa / Estenosis esofágica.",
        "Vómitos y diarrea.",
        "Hipocalcemia e hipofosfemia."
      ],
      "sobredosis": {
        "signos": ["Hipocalcemia", "Malestar GI severo"],
        "tratamiento": "Administrar leche o antiácidos para fijar el fármaco. NO inducir el vómito."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Antiácidos / Calcio / Hierro", "efecto": "Interfieren drásticamente con la absorción", "severidad": "Grave" },
        { "farmaco": "AINEs (NSAIDs)", "efecto": "Aumentan riesgo de úlcera gástrica", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se une a los cristales de hidroxiapatita en el hueso; cuando los osteoclastos intentan reabsorber el hueso, el alendronato inhibe su actividad y promueve su apoptosis.",
      "farmacocinetica": "Se almacena en el hueso por años."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "5, 10, 35, 70 mg", "valor_concentracion": 10, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  };
