import type { Drug } from '@/lib/types';

export const tetanusAntitoxinDrug: Drug = {
  id: "tetanus_antitoxin",
  meta_data: {
    nombre_generico: "Antitoxina Tetánica",
    nombres_comerciales: ["Tetanus antitoxin Behring"],
    grupo_farmacologico: "Inmunoglobulina; Antisuero",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anticuerpos específicos que neutralizan la toxina tetánica libre.",
      "Ineficaz contra la toxina ya fijada al tejido nervioso.",
      "Uso profiláctico en heridas altamente contaminadas o cirugías de riesgo.",
      "Riesgo elevado de anafilaxia (suero de origen equino).",
      "¡NUNCA usar en gatos!: No pueden metabolizar el preservativo fenólico."
    ],
    usos_principales: "Prevención y tratamiento temprano del tétanos en perros.",
    inicio_accion: "Inmediato (neutralización)",
    duracion_efecto: "Variable"
  },
  informacion_cliente: [
    "Tratamiento de emergencia hospitalaria.",
    "¡PELIGRO!: No usar en gatos por riesgo de toxicidad fatal.",
    "Existe un riesgo alto de reacción alérgica grave durante la administración.",
    "El veterinario realizará una prueba de piel antes de administrar la dosis completa."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Profilaxis (Heridas de riesgo)",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 80,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Dosis única (máximo 2500 IU/perro)", intervalo_horas: 0 }
      },
      {
        indicacion: "Tratamiento del tétanos clínico",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 500,
          dosis_min: 100,
          dosis_max: 1000,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Dosis única (máximo 20,000 IU/perro)", intervalo_horas: 0 },
        notas_tecnicas: "Administrar tras una dosis de prueba intradérmica/SC de 0.1 ml y observar 30 min por anafilaxia."
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "N/A" },
        notas_tecnicas: "¡MORTAL!: Contiene fenol como preservativo. Gatos carecen de capacidad de glucuronidación."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (¡MORTAL!).",
      "Hipersensibilidad previa a suero equino."
    ],
    efectos_adversos: [
      "Anafilaxia severa (edema, urticaria, shock).",
      "Fiebre y artralgias.",
      "Enfermedad del suero (tardía).",
      "Encefalomielitis post-vacunal (raro)."
    ],
    monitoreo_recomendado: [
      "Signos vitales durante la infusión",
      "Sitio de inyección por 24 horas",
      "Estado respiratorio"
    ],
    instrucciones_manejo: "Almacenar refrigerado (2-8°C). No congelar. Tener adrenalina lista.",
    sobredosis: {
      signos: ["Anafilaxia inmediata"],
      tratamiento: "Adrenalina (0.01 mg/kg IV/IM) y soporte intensivo."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Neutralización química de la toxina mediante la formación de complejos antígeno-anticuerpo.",
    farmacocinetica: "Acción sistémica inmediata tras inyección."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "1000 IU/ml",
      valor_concentracion: 1000,
      unidad_concentracion: "IU/ml",
      es_divisible: false
    }
  ]
};
