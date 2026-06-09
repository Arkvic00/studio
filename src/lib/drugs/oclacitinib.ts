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
      "Bloquea la función de citoquinas proinflamatorias y pruriginosas (especialmente IL-31).",
      "Control rápido del prurito asociado a dermatitis alérgica.",
      "Monitorear CBC y bioquímica en tratamientos a largo plazo.",
      "Puede aumentar la susceptibilidad a infecciones y demodicosis."
    ],
    usos_principales: "Tratamiento del prurito asociado con dermatitis alérgica y dermatitis atópica en perros.",
    inicio_accion: "Muy rápido (alivio en 4-12 horas)",
    duracion_efecto: "Requiere administración diaria para mantenimiento"
  },
  informacion_cliente: [
    "No usar en perros menores de 12 meses o de menos de 3 kg.",
    "No utilizar en perras embarazadas o que estén amamantando.",
    "Puede administrarse con o sin comida.",
    "Vigile si nota la aparición de nuevos bultos en la piel o si el perro parece muy decaído.",
    "Informe si nota vómitos o diarrea (efectos secundarios comunes)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dermatitis Atópica / Alérgica",
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
        },
        notas_tecnicas: "Solo para perros >12 meses y >3 kg. La dosis de mantenimiento es una vez al día."
      }
    ],
    gato: [
      {
        indicacion: "Dermatitis alérgica (Uso extra-label)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.4,
          dosis_max: 0.6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas (Escasa información farmacocinética)",
          intervalo_horas: 12
        },
        notas_tecnicas: "La dosis óptima y perfil de seguridad en gatos no han sido establecidos detalladamente."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perros menores de 12 meses.",
      "Perros con un peso menor a 3 kg.",
      "Gestación y lactancia.",
      "Evitar en casos de infecciones graves o neoplasias malignas activas."
    ],
    efectos_adversos: [
      "Vómitos, diarrea y anorexia.",
      "Letargo.",
      "Polifagia y polidipsia.",
      "Aumento de la agresividad (reportado).",
      "Aumento del riesgo de infecciones cutáneas y demodicosis.",
      "Aparición de histiocitomas o nuevos bultos cutáneos.",
      "Proteinuria en tratamientos crónicos."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) periódico",
      "Perfil bioquímico",
      "Detección de infecciones secundarias"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Lavarse las manos tras la administración.",
    sobredosis: {
      signos: ["Vómitos", "Diarrea", "Signos de inmunosupresión"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de las quinasas JAK1 y JAK3, bloqueando la transducción de señales de citoquinas involucradas en la inflamación y el prurito.",
    farmacocinetica: "Absorción oral rápida. Metabolismo hepático mínimo."
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
