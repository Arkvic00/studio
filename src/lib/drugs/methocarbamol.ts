import type { Drug } from '@/lib/types';

export const methocarbamolDrug: Drug = {
  id: "methocarbamol",
  meta_data: {
    nombre_generico: "Metocarbamol",
    nombres_comerciales: ["Robaxin"],
    grupo_farmacologico: "Relajante musculoesquelético de acción central",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Relajante muscular que actúa sobre el sistema nervioso central.",
      "No tiene acción directa sobre el músculo ni la placa motora.",
      "Uso principal en espasmos musculares severos (ej. Tétanos).",
      "Eficaz en el manejo de toxicidades que cursan con temblores (piretroides, estricnina).",
      "El aclaramiento se reduce significativamente en pacientes con insuficiencia renal o hepática."
    ],
    usos_principales: "Tratamiento de espasmos musculares, tétanos y temblores por toxicidad en perros y gatos.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota está excesivamente débil, somnolienta o babea mucho.",
    "El medicamento se administra generalmente tres veces al día.",
    "No exceder la dosis máxima recomendada por el veterinario.",
    "Vigilar la capacidad del animal para caminar y coordinar movimientos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Espasmos musculares / Toxicidad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 32.5,
          dosis_min: 20,
          dosis_max: 45,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "En tétanos pueden requerirse dosis más altas (máximo recomendado 330 mg/kg/día)."
      }
    ],
    gato: [
      {
        indicacion: "Espasmos musculares / Toxicidad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 32.5,
          dosis_min: 20,
          dosis_max: 45,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas reportadas.",
      "Usar con precaución en insuficiencia renal o hepática severa."
    ],
    efectos_adversos: [
      "Sedación y letargo.",
      "Ataxia (falta de coordinación).",
      "Debilidad muscular.",
      "Salivación y vómitos.",
      "Orina de color oscuro (marrón/negro/verde)."
    ],
    monitoreo_recomendado: [
      "Estado de alerta",
      "Coordinación motora",
      "Función hepática y renal en tratamientos prolongados"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Depresión severa del SNC", "Incapacidad para mantenerse en pie", "Vómitos"],
      tratamiento: "Soporte sintomático; el efecto suele remitir al bajar la dosis o suspenderla."
    },
    interacciones_farmacologicas: [
      { farmaco: "Depresores del SNC", efecto: "Efecto sedante aditivo.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Derivado del guayacol que deprime la conducción en las vías polisinápticas de la médula espinal y centros subcorticales.",
    farmacocinetica: "Absorción oral rápida. Metabolismo hepático."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "500 mg, 750 mg",
      valor_concentracion: 500,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
