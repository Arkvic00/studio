import type { Drug } from '@/lib/types';

export const glycopyrroniumDrug: Drug = {
  id: "glycopyrronium",
  meta_data: {
    nombre_generico: "Glicopirronio (Glicopirrolato)",
    nombres_comerciales: ["Robinul"],
    grupo_farmacologico: "Anticolinérgico (Antimuscarínico)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea los receptores muscarínicos periféricos.",
      "No cruza la barrera hematoencefálica (quaternario), a diferencia de la atropina.",
      "Duración de acción más larga que la atropina (hasta 2-4 horas).",
      "Potente inhibidor de las secreciones salivales y bronquiales.",
      "Ideal para prevenir bradicardias inducidas por opioides potentes.",
      "Preferido en conejos debido a que la atropina es impredecible en esta especie."
    ],
    usos_principales: "Prevención y tratamiento de bradiarritmias vagales, reducción de la hipersalivación y componente del antagonismo del bloqueo neuromuscular.",
    inicio_accion: "Rápido (minutos)",
    duracion_efecto: "2 a 4 horas"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario durante la anestesia o procedimientos.",
    "Reduce el babeo y las secreciones pulmonares durante la cirugía.",
    "No afecta las pupilas de la mascota (a diferencia de la atropina).",
    "Informe si nota que el animal parece tener dificultad para orinar tras el procedimiento."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Manejo de bradiarritmias vagales",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.005,
          dosis_min: 0.002,
          dosis_max: 0.01,
          unidad_calculo: "mg/kg (2-10 μg/kg)"
        },
        notas_tecnicas: "Dosis muy bajas IV pueden causar bradicardia paradójica inicial."
      },
      {
        indicacion: "Antagonismo de bloqueo neuromuscular",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar junto con neostigmina (0.05 mg/kg)."
      }
    ],
    gato: [
      {
        indicacion: "Manejo de bradiarritmias / Secreciones",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.005,
          dosis_min: 0.002,
          dosis_max: 0.01,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Anticolinérgico pre-anestésico",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.015,
          dosis_min: 0.01,
          dosis_max: 0.02,
          unidad_calculo: "mg/kg (10-20 μg/kg)"
        },
        notas_tecnicas: "Fármaco de elección en conejos sobre la atropina."
      }
    ],
    cobaya: [
      {
        indicacion: "Reducción de hipersalivación profusa",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.015,
          dosis_min: 0.01,
          dosis_max: 0.02,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Premedicación / Bradicardia",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          dosis_min: 0.01,
          dosis_max: 0.03,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Anticolinérgico",
        vias: ["IM", "IV", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Puede ser ineficaz en iguanas verdes."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción gastrointestinal o urinaria mecánica.",
      "Taicardia severa.",
      "Glaucoma (aunque el riesgo es menor que con atropina)."
    ],
    efectos_adversos: [
      "Taquicardia (usualmente transitoria).",
      "Secreciones bronquiales espesas ('pegajosas').",
      "Reducción de la motilidad intestinal (íleo).",
      "Retención urinaria."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Estado respiratorio (viscosidad de moco)",
      "Producción de orina"
    ],
    instrucciones_manejo: "No se recomienda su uso rutinario en premedicación; monitorizar y dar solo si la frecuencia cardíaca cae.",
    sobredosis: {
      signos: ["Taquicardia severa", "Temblores", "Íleo paralítico"],
      tratamiento: "Soporte sintomático; lidocaína si hay arritmias ventriculares graves."
    },
    interacciones_farmacologicas: [
      { farmaco: "Barbituratos", efecto: "Pueden formar precipitados si se mezclan físicamente.", severidad: "Importante" },
      { farmaco: "Agonistas Alfa-2", efecto: "Combinación NO RECOMENDADA por riesgo de hipertensión y arritmias.", severidad: "Importante" },
      { farmaco: "Antihistamínicos / Benzodiazepinas", efecto: "Pueden potenciar el efecto anticolinérgico.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de la acetilcolina en los receptores colinérgicos muscarínicos post-ganglionares del sistema nervioso autónomo.",
    farmacocinetica: "Estructura de amonio cuaternario que limita su paso por membranas lipídicas y barrera hematoencefálica."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "200 μg/ml (0.2 mg/ml)",
      valor_concentracion: 0.2,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
