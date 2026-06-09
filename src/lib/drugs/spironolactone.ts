import type { Drug } from '@/lib/types';

export const spironolactoneDrug: Drug = {
  id: "spironolactone",
  meta_data: {
    nombre_generico: "Espironolactona",
    nombres_comerciales: ["Cardalis", "Prilactone", "Aldactone"],
    grupo_farmacologico: "Antagonista de la aldosterona; Diurético ahorrador de potasio",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antagonista competitivo del receptor de mineralocorticoides.",
      "Inhibe la fibrosis miocárdica y el remodelado vascular mediado por aldosterona.",
      "Diurético débil por sí solo; actúa en el túbulo colector.",
      "Fundamental para prevenir la hipopotasemia inducida por furosemida.",
      "Efecto beneficioso en la supervivencia de perros con enfermedad valvular."
    ],
    usos_principales: "Tratamiento de la insuficiencia cardíaca congestiva (mitral/MCD), ascitis por fallo hepático e hiperaldosteronismo.",
    inicio_accion: "Lento (2-3 días para efecto máximo)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota parece muy débil o tiene diarrea.",
    "Se requieren análisis de sangre periódicos para controlar el potasio y los riñones.",
    "No usar junto con suplementos de potasio sin indicación médica.",
    "No usar en animales destinados a la cría o hembras gestantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Insuficiencia Cardíaca Congestiva",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "A menudo combinada con Benazepril (Cardalis) o Furosemida."
      }
    ],
    gato: [
      {
        indicacion: "Falla Cardíaca / Ascitis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Vigilar dermatitis facial ulcerativa severa reportada en Maine Coons."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hiperpotasemia.",
      "Hipoadrenocorticismo (Addison).",
      "Insuficiencia renal severa anúrica.",
      "Gestación y lactancia.",
      "Machos destinados a la cría (riesgo de atrofia prostática)."
    ],
    efectos_adversos: [
      "Hiperpotasemia.",
      "Hiponatremia.",
      "Vómitos y diarrea.",
      "Atrofia prostática reversible en machos enteros.",
      "Gatos: Dermatitis ulcerativa facial severa (inusual)."
    ],
    monitoreo_recomendado: [
      "Niveles de potasio sérico periódicamente",
      "Función renal (Creatinina/BUN)",
      "Presión arterial"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Debilidad muscular", "Bradicardia", "Colapso por potasio alto"],
      tratamiento: "Cese inmediato. Administrar Gluconato de Calcio IV e Insulina/Dextrosa si es crítica."
    },
    interacciones_farmacologicas: [
      { farmaco: "IECAs (Enalapril) / Potasio", efecto: "Aumentan significativamente el riesgo de hiperpotasemia fatal.", severidad: "Importante" },
      { farmaco: "AINEs", efecto: "Aumentan riesgo de nefrotoxicidad y reducen efecto diurético.", severidad: "Importante" },
      { farmaco: "Digoxina", efecto: "Espironolactona puede aumentar los niveles de digoxina.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista de la aldosterona que impide la reabsorción de sodio y la excreción de potasio en el túbulo distal y conducto colector.",
    farmacocinetica: "Metabolismo hepático rápido a canrenona (metabolito activo). Excreción renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "10 mg, 40 mg, 80 mg",
      valor_concentracion: 40,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
