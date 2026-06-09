import type { Drug } from '@/lib/types';

export const lincomycinDrug: Drug = {
  id: "lincomycin",
  meta_data: {
    nombre_generico: "Lincomicina",
    nombres_comerciales: ["Lincocin", "Lincoject", "Linco-Sol", "Linco-Spectin", "Ocnil"],
    grupo_farmacologico: "Lincosamida",
    status_regulatorio: "POM-V. Categoría C (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis proteica bacteriana uniéndose a la subunidad 50S.",
      "Mecanismo tiempo-dependiente; bacteriostático o bactericida según concentración.",
      "Se concentra en fluidos ácidos (próstata, leche, fluido intracelular) por atrapamiento iónico.",
      "Activa contra Gram-positivos y muchos anaerobios obligados.",
      "Especialmente indicada para infecciones estafilocócicas en huesos y articulaciones.",
      "¡PELIGRO!: Puede causar enterotoxemia fatal en herbívoros pequeños."
    ],
    usos_principales: "Tratamiento de infecciones sistémicas, óseas y articulares causadas por Gram-positivos y anaerobios.",
    inicio_accion: "Rápido",
    duracion_efecto: "Corta (requiere dosis q8-24h)"
  },
  informacion_cliente: [
    "Administrar por vía intravenosa de forma muy lenta para evitar colapsos cardíacos.",
    "¡PELIGRO!: No administrar nunca por vía oral a conejos, cobayas o hámsteres; puede ser mortal.",
    "Informe inmediatamente si nota que su mascota presenta diarrea con sangre.",
    "Completar el ciclo de tratamiento según lo indicado por el veterinario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas (Parenteral)",
        vias: ["IM", "IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 16.5,
          dosis_min: 11,
          dosis_max: 22,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "Dosis de 22 mg/kg q24h o 11 mg/kg q12h IM. IV lenta q12-24h."
      },
      {
        indicacion: "Infecciones sistémicas (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 18.5,
          dosis_min: 15,
          dosis_max: 22,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IM", "IV lenta", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 11,
          dosis_max: 22,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas según vía", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 11,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    petauro: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 62.5,
          dosis_min: 50,
          dosis_max: 75,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Palomas (Lincomicina/Espectinomicina)",
        vias: ["PO (Agua)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 625,
          dosis_min: 500,
          dosis_max: 750,
          unidad_calculo: "mg/l de actividad combinada"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Administración IV rápida (riesgo de colapso por depresión cardíaca).",
      "Uso oral en herbívoros pequeños.",
      "Hipersensibilidad a lincosamidas."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO VÍA ORAL!: Causa enterotoxemia fatal.",
      "Cobaya": "¡PROHIBIDO VÍA ORAL!: Riesgo de muerte por disbiosis.",
      "Hamster": "¡PROHIBIDO VÍA ORAL!: Causa enterotoxemia fatal.",
      "Reptil": "PRECAUCIÓN: Puede ser nefrotoxico en algunos individuos."
    },
    efectos_adversos: [
      "Diarrea y colitis (especialmente hemorrágica).",
      "Vómitos.",
      "Toxicidad hepática potencial.",
      "Bloqueo neuromuscular periférico.",
      "Colapso cardiovascular si es IV rápido."
    ],
    monitoreo_recomendado: [
      "Estado gastrointestinal (consistencia heces)",
      "Función hepática en tratamientos largos",
      "Estado cardiovascular durante administración IV"
    ],
    instrucciones_manejo: "Administrar IV de forma muy lenta.",
    sobredosis: {
      signos: ["Diarrea severa", "Colapso cardiovascular", "Bloqueo neuromuscular"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Bloqueadores neuromusculares", efecto: "La lincomicina potencia su efecto bloqueador.", severidad: "Importante" },
      { farmaco: "Kaolín", efecto: "Reduce la absorción oral de la lincomicina.", severidad: "Moderada" },
      { farmaco: "Cloranfenicol / Macrólidos", efecto: "Antagonismo competitivo; no usar en combinación.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la subunidad ribosomal 50S, bloqueando la síntesis de proteínas bacterianas.",
    farmacocinetica: "Metabolismo hepático y excreción renal/biliar. Atraviesa bien barreras tisulares en medios ácidos."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Polvo para solución oral", concentracion_texto: "Variable", valor_concentracion: 1, unidad_concentracion: "mg", es_divisible: false }
  ]
};