import type { Drug } from '@/lib/types';

export const amiloridaDrug: Drug = {
  id: "amilorida",
  meta_data: {
    nombre_generico: "Amilorida (Clorhidrato de amilorida)",
    nombres_comerciales: ["Amilamont", "Moduret*", "Moduretic*", "Co-amilozide*", "Frumil*", "Frumil LS*"],
    grupo_farmacologico: "Diurético ahorrador de potasio",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la absorción de sodio en las células del túbulo distal y del conducto colector.",
      "Resulta en pérdida de sodio y retención de potasio.",
      "Es un diurético débil cuando se usa solo; casi siempre se combina con tiazidas o furosemida.",
      "Útil para lograr un bloqueo secuencial de la nefrona en insuficiencia cardíaca refractaria."
    ],
    usos_principales: "Tratamiento de edema o ascitis debido a insuficiencia hepática o cardíaca. Se añade a diuréticos más potentes en casos de insuficiencia cardíaca refractaria.",
    inicio_accion: "No ampliamente reportado en literatura veterinaria",
    duracion_efecto: "Requiere administración cada 12 horas"
  },
  informacion_cliente: [
    "Evitar la administración de suplementos de potasio junto con este medicamento.",
    "Vigilar signos de debilidad o cambios en el comportamiento.",
    "Se requieren análisis de sangre periódicos para controlar los niveles de sales (electrolitos) y la función renal."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Edema / Insuficiencia cardíaca (Sugerido)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Dosis sugerida basada en medicina humana. Iniciar con la dosis más baja y titular con precaución."
      },
      {
        indicacion: "En combinación con Hidroclorotiazida",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.225,
          dosis_min: 0.05,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Edema / Insuficiencia cardíaca (Sugerido)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "En combinación con Hidroclorotiazida",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.1,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hiperpotasemia (niveles altos de potasio).",
      "Fallo renal anúrico.",
      "Hipersensibilidad al fármaco."
    ],
    efectos_adversos: [
      "Hipotensión.",
      "Hiperpotasemia (el efecto más crítico).",
      "Acidosis metabólica.",
      "Hiponatremia."
    ],
    monitoreo_recomendado: [
      "Electrolitos séricos (especialmente Potasio)",
      "Urea y Creatinina (función renal)",
      "Presión arterial"
    ],
    instrucciones_manejo: "Observar precauciones normales. Monitorear antes y después de cualquier ajuste de dosis.",
    sobredosis: {
      signos: ["Desequilibrio electrolítico severo", "Hipotensión profunda"],
      tratamiento: "Terapia de soporte y corrección de electrolitos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Potasio (Suplementos)", efecto: "Riesgo severo de hiperpotasemia fatal.", severidad: "Grave" },
      { farmaco: "IECAs (Enalapril/Benazepril)", efecto: "Aumentan el riesgo de hiperpotasemia.", severidad: "Importante" },
      { farmaco: "AINEs", efecto: "Pueden reducir el efecto diurético y aumentar el riesgo de nefrotoxicidad.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Diurético ahorrador de potasio que inhibe el intercambio de sodio por potasio en el túbulo distal y el conducto colector.",
    farmacocinetica: "Se elimina principalmente por vía renal sin metabolizar."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "5 mg",
      valor_concentracion: 5,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Solución oral",
      concentracion_texto: "1 mg/ml",
      valor_concentracion: 1,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
