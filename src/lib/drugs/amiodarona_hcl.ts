import type { Drug } from '@/lib/types';

export const amiodaronaHclDrug: Drug = {
    "id": "amiodarona_hcl",
    "meta_data": {
      "nombre_generico": "Amiodarona HCl",
      "nombres_comerciales": ["Cordarone", "Pacerone"],
      "grupo_farmacologico": "Antiarrítmico Clase III",
      "status_regulatorio": "Uso extra-label en perros y caballos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Utilizado para arritmias ventriculares y supraventriculares refractarias a otros fármacos.",
        "Posee características de las 4 clases de antiarrítmicos.",
        "Vida media extremadamente larga y acumulación en tejidos.",
        "Efectos adversos serios (hígado, tiroides, anafilaxia) son comunes."
      ],
      "usos_principales": "Cardiomiopatía dilatada en Dobermans, fibrilación auricular en caballos y taquicardia ventricular maligna."
    },
    "informacion_cliente": [
      "Requiere monitoreo frecuente del hígado y tiroides.",
      "Puede causar que la piel se vuelva fotosensible.",
      "Efectos adversos como falta de apetito o vómitos deben reportarse de inmediato."
    ],
    "monitoreo_paciente": [
      "ECG continuo durante inicio de terapia.",
      "Enzimas hepáticas (ALT/ALP) - Riesgo alto de hepatotoxicidad.",
      "Panel tiroideo (T4).",
      "Presión arterial."
    ],
    "interferencia_laboratorio": [
      "T4/T3: Puede alterar pruebas de función tiroidea (hipotiroidismo o hipertiroidismo).",
      "Enzimas hepáticas: Elevación frecuente."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Arritmias ventriculares refractarias",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "dosis_min": 10,
            "dosis_max": 15,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas por 7 días (Carga), luego reducir", "intervalo_horas": 12 },
          "notas_tecnicas": "Dosis de mantenimiento usual: 5-7.5 mg/kg cada 24h. La forma IV puede causar anafilaxia severa en perros (por el vehículo Polisorbato 80)."
        }
      ],
      "caballo": [
        {
          "indicacion": "Fibrilación auricular",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 5,
            "dosis_min": 5,
            "dosis_max": 7,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Infusión lenta", "intervalo_horas": 0 },
          "notas_tecnicas": "Administrar diluido en dextrosa al 5%. Riesgo de flebitis."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Bloqueo AV de segundo o tercer grado.",
        "Bradicardia sinusal severa.",
        "Disfunción tiroidea severa.",
        "Hipersensibilidad al yodo."
      ],
      "precauciones": [
        "Enfermedad hepática.",
        "El inyectable IV en perros causa reacción anafilactoide (hipotensión masiva) - USAR CON EXTREMA PRECAUCIÓN."
      ],
      "efectos_adversos": [
        "Hepatopatía (reversible si se detecta temprano).",
        "Hipotiroidismo (común en tratamientos largos).",
        "Anorexia y vómitos.",
        "Neutropenia/Trombocitopenia.",
        "Fibrosis pulmonar (reportado en humanos, posible en animales)."
      ],
      "sobredosis": {
        "signos": ["Bradicardia", "Bloqueo AV", "Hipotensión"],
        "tratamiento": "Agonistas beta-adrenérgicos, marcapasos temporal, colestiramina para aumentar excreción."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Digoxina", "efecto": "Aumenta niveles de digoxina (reducir dosis de digoxina al 50%)", "severidad": "Grave" },
        { "farmaco": "Warfarina", "efecto": "Aumenta efecto anticoagulante", "severidad": "Importante" },
        { "farmaco": "Lidocaína", "efecto": "Riesgo de convulsiones", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Prolonga la duración del potencial de acción y el periodo refractario (bloqueo canales de K+). También bloquea canales de Na+, Ca++ y receptores beta.",
      "farmacocinetica": "Absorción lenta. Se acumula en grasa, hígado y pulmones. Vida media de eliminación de días a semanas."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "100 mg, 200 mg, 400 mg", "valor_concentracion": 200, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  };
