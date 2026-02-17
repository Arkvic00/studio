import type { Drug } from '@/lib/types';

export const aminofilinaDrug: Drug = {
    "id": "aminofilina",
    "meta_data": {
      "nombre_generico": "Aminofilina",
      "nombres_comerciales": ["Phyllocontin", "Truphylline"],
      "grupo_farmacologico": "Broncodilatador (Metilxantina)",
      "status_regulatorio": "Uso extra-label; Aprobado FDA para humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Es un complejo de Teofilina + Etilendiamina (para hacerlo soluble en agua).",
        "Libera ~80% de teofilina activa.",
        "Broncodilatador con efectos diuréticos y estimulantes cardiacos leves.",
        "Tiene un índice terapéutico estrecho (dosis tóxica cerca de la terapéutica)."
      ],
      "usos_principales": "Broncodilatación en asma, bronquitis crónica, colapso traqueal y edema pulmonar cardiogénico (insuficiencia cardiaca izquierda)."
    },
    "informacion_cliente": [
      "Puede causar excitación nerviosa, insomnio o aumento de micción.",
      "Dar con comida si causa vómitos.",
      "No cambiar de marca sin consultar al veterinario (la absorción varía)."
    ],
    "monitoreo_paciente": [
      "Frecuencia cardiaca y respiratoria.",
      "Signos de toxicidad (vómitos, temblores, taquicardia).",
      "Niveles séricos de teofilina en terapias largas."
    ],
    "interferencia_laboratorio": [
      "Ácido úrico: Falsa elevación.",
      "Catecolaminas urinarias: Aumento."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Broncodilatación",
          "vias": ["PO", "IV lento"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "dosis_min": 5,
            "dosis_max": 11,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 8-12 horas", "intervalo_horas": 8 },
          "notas_tecnicas": "La dosis IV debe diluirse y pasarse muy lento para evitar arritmias fatales."
        }
      ],
      "gato": [
        {
          "indicacion": "Asma felina / Bronquitis",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 6.6,
            "dosis_min": 4,
            "dosis_max": 6.6,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a xantinas (chocolate/cafeína).",
        "Arritmias cardiacas severas no controladas."
      ],
      "precauciones": [
        "Enfermedad hepática (reduce metabolismo).",
        "Úlcera gástrica.",
        "Hipertiroidismo."
      ],
      "efectos_adversos": [
        "Gastrointestinales: Vómitos, diarrea, anorexia.",
        "SNC: Excitación, temblores, convulsiones (en sobredosis).",
        "Cardiacos: Taquicardia sinusal, arritmias.",
        "Renal: Poliuria (aumento de orina)."
      ],
      "sobredosis": {
        "signos": ["Convulsiones refractarias", "Taquicardia severa"],
        "tratamiento": "Carbón activado, control de convulsiones (Diazepam), control de arritmias (Lidocaína/Beta-bloqueadores)."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Fluoroquinolonas (Enrofloxacina)", "efecto": "Aumentan drásticamente los niveles de teofilina (riesgo de toxicidad)", "severidad": "Grave" },
        { "farmaco": "Fenobarbital", "efecto": "Disminuye los niveles de teofilina (falla terapéutica)", "severidad": "Moderada" },
        { "farmaco": "Cimetidina", "efecto": "Aumenta toxicidad de aminofilina", "severidad": "Importante" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición de la fosfodiesterasa (aumenta AMPc), antagonismo de adenosina y alteración del calcio intracelular, resultando en relajación del músculo liso bronquial.",
      "farmacocinetica": "Metabolismo hepático extenso. Vida media varía mucho entre individuos."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "100 mg, 200 mg", "valor_concentracion": 100, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Inyectable", "concentracion_texto": "25 mg/mL", "valor_concentracion": 25, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
