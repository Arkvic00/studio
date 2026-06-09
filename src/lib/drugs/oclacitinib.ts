import type { Drug } from '@/lib/types';

export const oclacitinibDrug: Drug = {
  id: "oclacitinib",
  meta_data: {
    nombre_generico: "Oclacitinib",
    nombres_comerciales: ["Apoquel"],
    grupo_farmacologico: "Inhibidor de la Janus quinasa (JAK)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe selectivamente las enzimas JAK1 y JAK3.",
      "Bloquea citoquinas del picor (especialmente IL-31).",
      "Control rápido del prurito alérgico.",
      "Puede aumentar la susceptibilidad a infecciones y demodicosis."
    ],
    usos_principales: "Tratamiento del prurito por dermatitis alérgica y dermatitis atópica en perros.",
    inicio_accion: "Muy rápido (4-12 horas)",
    duracion_efecto: "Requiere administración diaria"
  },
  informacion_cliente: [
    "No usar en perros menores de 12 meses o de menos de 3 kg.",
    "Puede administrarse con o sin comida.",
    "Informe si nota vómitos o diarrea.",
    "Vigile la aparición de bultos en la piel."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dermatitis Atópica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.4,
          dosis_max: 0.6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas por 14 días, luego cada 24 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perros < 12 meses.",
      "Perros < 3 kg.",
      "Gestación y lactancia.",
      "Infecciones graves o neoplasias activas."
    ],
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Polifagia.",
      "Aumento del riesgo de infecciones.",
      "Papilomatosis cutánea."
    ],
    monitoreo_recomendado: [
      "Hemograma (CBC) periódico",
      "Estado de la piel"
    ],
    instrucciones_manejo: "Lavar manos tras la administración.",
    sobredosis: {
      signos: ["Trastornos GI"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de quinasas JAK bloqueando la transducción de señales pro-inflamatorias.",
    farmacocinetica: "Absorción oral rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "3.6 mg, 5.4 mg, 16 mg",
      valor_concentracion: 3.6,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};