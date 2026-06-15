import type { Drug } from '@/lib/types';

export const pyrantelDrug: Drug = {
  id: "pyrantel",
  meta_data: {
    nombre_generico: "Pirantel",
    nombres_comerciales: ["Droncit", "Drontal", "Strongid", "Anthelmin"],
    grupo_farmacologico: "Antiparasitario (Nematodos)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente antihelmíntico eficaz contra nematodos (ascaris, anquilostomas).",
      "Actúa como un bloqueador neuromuscular despolarizante, causando parálisis espástica en los parásitos.",
      "Muy seguro debido a su mínima absorción sistémica en el tracto gastrointestinal.",
      "Se utiliza comúnmente en combinación con otros antiparasitarios como el praziquantel."
    ],
    usos_principales: "Tratamiento de infestaciones por nematodos en mamíferos.",
    inicio_accion: "Rápido",
    duracion_efecto: "Dosis única (eliminación con las heces)"
  },
  informacion_cliente: [
    "Agitar bien la suspensión antes de usar.",
    "Se puede administrar con una pequeña cantidad de comida para facilitar la ingesta.",
    "Mantener fuera del alcance de los niños."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Antiparasitario (Nematodos)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única" }
      }
    ],
    gato: [
      {
        indicacion: "Antiparasitario (Nematodos)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Hipersensibilidad conocida al pirantel."],
    efectos_adversos: ["Vómitos ocasionales.", "Diarrea leve y transitoria."],
    monitoreo_recomendado: ["Eficacia del tratamiento (análisis de heces)"],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos", "Náuseas"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Piperazina", efecto: "Antagonismo mutuo.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista colinérgico que bloquea la transmisión neuromuscular en el parásito.",
    farmacocinetica: "Pobre absorción oral, permaneciendo en el lumen intestinal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Suspensión Oral",
      concentracion_texto: "50 mg/ml",
      valor_concentracion: 50,
      unidad_concentracion: "mg/ml"
    }
  ]
};