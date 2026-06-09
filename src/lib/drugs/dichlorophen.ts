import type { Drug } from '@/lib/types';

export const dichlorophenDrug: Drug = {
  id: "dichlorophen",
  meta_data: {
    nombre_generico: "Diclorofeno",
    nombres_comerciales: ["Varios productos comerciales"],
    grupo_farmacologico: "Cestocida",
    status_regulatorio: "AVM-GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Cestocida que actúa interfiriendo con la fosforilación oxidativa.",
      "Eficaz contra Taenia y Dipylidium, pero NO contra Echinococcus.",
      "Los parásitos afectados se desintegran en el tracto GI, por lo que no suelen ser reconocibles en las heces.",
      "Administrar preferiblemente justo antes de la comida principal."
    ],
    usos_principales: "Control de infecciones por tenias en perros y gatos mayores de 6 meses.",
    inicio_accion: "Rápido (desintegración del parásito en 6-8 horas)",
    duracion_efecto: "Tratamiento puntual cada 4-6 meses"
  },
  informacion_cliente: [
    "Administrar la tableta entera o triturada con la comida.",
    "No repetir el tratamiento si el animal vomita poco después de la dosis.",
    "No utilizar en cachorros o gatitos menores de 6 meses de edad.",
    "Es normal no ver los parásitos en las heces ya que se deshacen en el intestino."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infección por Tenias (Animales <2.5 kg)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 250,
          unidad_calculo: "mg (Dosis total)"
        }
      },
      {
        indicacion: "Infección por Tenias (Animales >2.5 kg)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Equivalente a 500 mg por cada 2.5 kg de peso. Máximo 6 tabletas por toma; el resto 3 horas después si no hay vómitos."
      }
    ],
    gato: [
      {
        indicacion: "Infección por Tenias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Gatos <2.5 kg: dosis fija de 250 mg. Mayores de 2.5 kg: 500 mg por cada 2.5 kg."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales menores de 6 meses de edad.",
      "Animales con un peso inferior a 1.25 kg.",
      "No repetir el tratamiento en menos de 10 días."
    ],
    efectos_adversos: [
      "Vómitos.",
      "Salivación excesiva.",
      "Hipereestesia (sensibilidad exagerada).",
      "Pérdida de coordinación (raro)."
    ],
    monitoreo_recomendado: [
      "Tolerancia gastrointestinal post-dosis",
      "Estado de coordinación motora"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos severos", "Ataxia", "Salivación"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interfiere con la fosforilación oxidativa en los cestodos, provocando su desprendimiento y posterior lisis.",
    farmacocinetica: "Actúa localmente en el lumen intestinal; los restos del parásito se eliminan en 6-8 horas."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "250 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta oral", concentracion_texto: "500 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true }
  ]
};
