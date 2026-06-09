import type { Drug } from '@/lib/types';

export const lufenuronDrug: Drug = {
  id: "lufenuron",
  meta_data: {
    nombre_generico: "Lufenurón",
    nombres_comerciales: ["Program", "Program Plus", "VSP"],
    grupo_farmacologico: "Inhibidor de la síntesis de quitina; Regulador del crecimiento de insectos",
    status_regulatorio: "POM-V, AVM-GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la quitina sintetasa, impidiendo que los huevos de pulga eclosionen.",
      "No mata pulgas adultas; debe combinarse con un adulticida para infestaciones activas.",
      "Acción antifúngica secundaria reportada (aunque dosis no definidas).",
      "Tratamiento de ectoparásitos crustáceos (Argulus) en peces y anfibios.",
      "La administración oral DEBE ser con comida para absorberse."
    ],
    usos_principales: "Prevención de la infestación por pulgas. Control de crustáceos parásitos en acuarios.",
    inicio_accion: "Efecto sobre población de pulgas visible en semanas",
    duracion_efecto: "30 días (PO); 6 meses (SC en gatos)"
  },
  informacion_cliente: [
    "Debe administrarse con la comida principal para que funcione.",
    "Trate a todos los animales del hogar al mismo tiempo.",
    "El inyectable para gatos dura 6 meses.",
    "Si su mascota ya tiene muchas pulgas, este medicamento no las matará rápidamente; use un adulticida adicional.",
    "Seguro en hembras embarazadas y lactantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Prevención de Pulgas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días con comida", intervalo_horas: 720 }
      }
    ],
    gato: [
      {
        indicacion: "Prevención de Pulgas (Inyectable)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 meses", intervalo_horas: 4380 }
      },
      {
        indicacion: "Prevención de Pulgas (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días con comida", intervalo_horas: 720 }
      }
    ],
    huron: [
      {
        indicacion: "Prevención de Pulgas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 37.5,
          dosis_min: 30,
          dosis_max: 45,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Mensualmente", intervalo_horas: 720 }
      }
    ],
    conejo: [
      {
        indicacion: "Prevención de Pulgas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Mensualmente", intervalo_horas: 720 }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Crustáceos parásitos (Argulus)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/l"
        },
        notas_tecnicas: "Idealmente usar la formulación en suspensión."
      }
    ],
    peces: [
      {
        indicacion: "Ectoparásitos crustáceos",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/l"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatitos no destetados.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Letargo tras la inyección en gatos.",
      "Vómitos o diarrea (muy raro).",
      "Prurito o hinchazón local (inyectable)."
    ],
    monitoreo_recomendado: [
      "Presencia de pulgas adultas (indica necesidad de adulticida)"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["No reportados; alta seguridad clínica"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interfiere con la polimerización de la quitina durante el desarrollo del huevo y la muda del insecto.",
    farmacocinetica: "Se acumula en el tejido graso y se libera gradualmente a la sangre para ser ingerido por las pulgas."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "67.8 mg a 409.8 mg", valor_concentracion: 67.8, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral (Cats)", concentracion_texto: "133 mg o 266 mg", valor_concentracion: 133, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "100 mg/ml (0.4 o 0.8 ml)", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
