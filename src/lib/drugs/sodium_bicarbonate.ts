import type { Drug } from '@/lib/types';

export const sodiumBicarbonateDrug: Drug = {
  id: "sodium_bicarbonate",
  meta_data: {
    nombre_generico: "Bicarbonato de Sodio",
    nombres_comerciales: ["Sodium bicarbonate*"],
    grupo_farmacologico: "Agente alcalinizante; Provisión de electrolitos",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Proporciona iones bicarbonato para corregir la acidosis metabólica.",
      "Útil para alcalinizar la orina en intoxicaciones o cálculos.",
      "Tratamiento de elección para la cardiotoxicidad por hiperpotasemia severa.",
      "Requiere análisis de gases sanguíneos para una dosificación precisa.",
      "Riesgo de sobrecarga de sodio (precaución en fallo cardíaco)."
    ],
    usos_principales: "Manejo de acidosis metabólica severa, alcalinización urinaria y crisis de hipercalcemia o hiperpotasemia.",
    inicio_accion: "Inmediato (IV)",
    duracion_efecto: "Corta"
  },
  informacion_cliente: [
    "Fármaco de uso hospitalario de emergencia para desequilibrios químicos graves.",
    "Aporta una cantidad significativa de sal (sodio); no usar en animales con dietas bajas en sal sin supervisión.",
    "Requiere monitoreo constante de la respiración y el ritmo cardíaco."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Acidosis Metabólica Severa (Cálculo)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "mmol NaHCO3 = déficit base × 0.5 × peso (kg)"
        },
        frecuencia: { texto: "Dar la mitad en 3-4 horas, reevaluar gases", intervalo_horas: 0 }
      },
      {
        indicacion: "Hiperpotasemia (Emergencia)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mmol/kg"
        },
        frecuencia: { texto_ui: "Administrar en 30 minutos", intervalo_horas: 0 }
      },
      {
        indicacion: "Acidosis Renal / Alcalinización Orina",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          dosis_min: 8,
          dosis_max: 12,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas (ajustar según CO2 total 18-24 mEq/l)", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Crisis Metabólica / Hiperpotasemia",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mmol/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipoventilación o hipercapnia (incapacidad de expulsar CO2).",
      "Alcalosis metabólica o respiratoria.",
      "Hipocalcemia (el bicarbonato baja más el calcio iónico)."
    ],
    efectos_adversos: [
      "Alcalosis metabólica.",
      "Hipernatremia (exceso de sodio).",
      "Hipopotasemia e hipocalcemia.",
      "Acidosis paradójica del SNC (riesgo de paro respiratorio).",
      "Exacerbación del fallo cardíaco congestivo."
    ],
    monitoreo_recomendado: [
      "Gases sanguíneos (pH, pCO2, HCO3)",
      "Electrolitos séricos (Sodio, Potasio, Calcio)",
      "Estado respiratorio"
    ],
    instrucciones_manejo: "No mezclar con sales de calcio (precipita). Administrar muy lentamente.",
    sobredosis: {
      signos: ["Alcalosis severa", "Debilidad muscular", "Convulsiones"],
      tratamiento: "Cese inmediato; fluidoterapia con NaCl 0.9% para forzar excreción de bicarbonato."
    },
    interacciones_farmacologicas: [
      { farmaco: "Sales de Calcio", efecto: "Incompatibilidad física: precipitación de sales insolubles.", severidad: "Grave" },
      { farmaco: "Tetraciclinas / Aspirina", efecto: "Bicarbonato aumenta su excreción renal.", severidad: "Moderada" },
      { farmaco: "Simpaticomiméticos", efecto: "Bicarbonato disminuye su excreción renal.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Provee iones bicarbonato directamente para neutralizar protones de hidrógeno en el plasma.",
    farmacocinetica: "Eliminación pulmonar (vía CO2) y renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable IV", concentracion_texto: "1.26%, 4.2%, 8.4% (1 mmol/ml)", valor_concentracion: 1, unidad_concentracion: "mmol/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "300 mg, 500 mg, 600 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: true }
  ]
};