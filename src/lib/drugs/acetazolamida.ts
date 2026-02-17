import type { Drug } from '@/lib/types';

export const acetazolamidaDrug: Drug = {
    "id": "acetazolamida",
    "meta_data": {
      "nombre_generico": "Acetazolamida",
      "nombres_comerciales": ["Diamox"],
      "grupo_farmacologico": "Inhibidor de la anhidrasa carbónica, diurético, agente antiglaucoma",
      "status_regulatorio": "Uso extra-label en perros, gatos y caballos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Tratamiento de glaucoma, alcalosis metabólica y HYPP en caballos.",
        "Reduce la formación de humor acuoso.",
        "Posee actividad anticonvulsiva independiente de su efecto diurético."
      ],
      "usos_principales": "Control de presión intraocular en glaucoma, diuresis en alcalosis metabólica y prevención de parálisis periódica hiperpotasémica (HYPP) en caballos."
    },
    "informacion_cliente": [
      "Dar con comida para reducir el malestar estomacal.",
      "Contactar al veterinario si nota jadeo inusual, debilidad, tambaleo o temblores.",
      "Caballos deben tener acceso a agua fresca constante.",
      "Requiere pruebas de laboratorio periódicas."
    ],
    "monitoreo_paciente": [
      "Presión intraocular (tonometría).",
      "Electrolitos séricos y estado ácido-base.",
      "Gases en sangre venosa.",
      "Hemograma completo (uso crónico)."
    ],
    "interferencia_laboratorio": [
      "Proteína urinaria: Falsos positivos con reactivo azul de bromofenol.",
      "Hormonas tiroideas: Puede disminuir la captación de yodo y bajar concentraciones de T3/T4.",
      "Teofilina: Interfiere con determinación por HPLC."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Glaucoma / Alcalosis metabólica (Extra-label)",
          "vias": ["PO", "IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 7,
            "dosis_min": 4,
            "dosis_max": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 8 a 12 horas", "intervalo_horas": 8 },
          "notas_tecnicas": "Dosis IV solo una vez."
        }
      ],
      "caballo": [
        {
          "indicacion": "Prevención/Tratamiento de episodios de HYPP (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 3.3,
            "dosis_min": 2.2,
            "dosis_max": 4.4,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dos veces al día", "intervalo_horas": 12 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Insuficiencia hepática, renal, pulmonar o adrenocortical significativa.",
        "Hiponatremia, hipopotasemia.",
        "Acidosis hiperclorémica.",
        "Obstrucción pulmonar severa."
      ],
      "precauciones": [
        "Acidosis respiratoria severa.",
        "Dosis altas crónicas: Reducen capacidad de ejercicio en caballos."
      ],
      "efectos_adversos": [
        "Cristaluria y poliuria.",
        "Hipopotasemia.",
        "Sedación y debilidad.",
        "Vómitos y diarrea.",
        "Temblores leves tras administración IV rápida."
      ],
      "sobredosis": {
        "signos": ["Alteración electrolítica severa", "Cambios en estado mental"],
        "tratamiento": "Soporte, monitoreo de gases y electrolitos. Es dializable."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Ciclosporina", "efecto": "Aumenta concentraciones de ciclosporina", "severidad": "Importante" },
        { "farmaco": "Digoxina", "efecto": "Aumenta riesgo de toxicidad por hipopotasemia", "severidad": "Moderada" },
        { "farmaco": "Fenobarbital", "efecto": "Aumenta excreción de fenobarbital por orina alcalina", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibidor no competitivo reversible de la anhidrasa carbónica. Reduce formación de iones H+ y bicarbonato.",
      "farmacocinetica": "Inicio acción IOP: 30 min. Duración: 4-6 h. Excreción renal del 90% inalterada."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "125 mg, 250 mg", "valor_concentracion": 125, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Inyectable (Liofilizado)", "concentracion_texto": "500 mg", "valor_concentracion": 500, "unidad_concentracion": "mg", "es_divisible": false }
    ]
  };
