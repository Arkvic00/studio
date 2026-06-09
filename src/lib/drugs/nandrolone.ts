import type { Drug } from '@/lib/types';

export const nandroloneDrug: Drug = {
  id: "nandrolone",
  meta_data: {
    nombre_generico: "Nandrolona (Decanoato de nandrolona)",
    nombres_comerciales: ["Laurabolin", "Nandrolin"],
    grupo_farmacologico: "Esteroide anabólico",
    status_regulatorio: "POM-V CD SCHEDULE 4"
  },
  resumen_clinico: {
    puntos_clave: [
      "Promueve la síntesis de proteínas y reduce el catabolismo.",
      "Estimula la producción de eritropoyetina.",
      "Uso principal en anemias refractarias y caquexia.",
      "Efecto de larga duración (3-4 semanas).",
      "Puede causar masculinización en hembras."
    ],
    usos_principales: "Tratamiento de la anemia aplásica, soporte en fallo renal crónico y debilidad senil.",
    inicio_accion: "Lento (semanas)",
    duracion_efecto: "3 a 4 semanas"
  },
  informacion_cliente: [
    "Medicamento inyectable de larga duración.",
    "Puede causar un aumento del apetito.",
    "En hembras, puede provocar cambios en el comportamiento.",
    "Informe si nota agresividad inusual."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Anemia / Caquexia",
        vias: ["IM profunda", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 3 a 4 semanas", intervalo_horas: 504 }
      }
    ],
    gato: [
      {
        indicacion: "Anemia por fallo renal",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 25,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 3 semanas", intervalo_horas: 504 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación (masculinización fetal).",
      "Carcinoma de próstata.",
      "Insuficiencia hepática severa."
    ],
    efectos_adversos: [
      "Virilización (agresividad).",
      "Retención de sodio.",
      "Olor fuerte en la orina."
    ],
    monitoreo_recomendado: [
      "Función hepática",
      "Hematocrito (PCV)",
      "Peso corporal"
    ],
    instrucciones_manejo: "Administrar por inyección IM profunda. Proteger de la luz.",
    sobredosis: {
      signos: ["Agresividad", "Edema"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides", efecto: "Riesgo de edema.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a receptores androgénicos intracelulares estimulando la síntesis proteica.",
    farmacocinetica: "Absorción lenta desde el depósito oleoso."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "20 mg/ml, 50 mg/ml",
      valor_concentracion: 20,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};