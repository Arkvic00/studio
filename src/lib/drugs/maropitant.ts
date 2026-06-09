import type { Drug } from '@/lib/types';

export const maropitantDrug: Drug = {
  id: "maropitant",
  meta_data: {
    nombre_generico: "Maropitant",
    nombres_comerciales: ["Cerenia", "Prevomax", "Vetemex"],
    grupo_farmacologico: "Antagonista del receptor NK-1; Antiemético",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antagonista selectivo del receptor de neuroquinina-1 (NK-1).",
      "Bloquea la unión de la Sustancia P en el centro del vómito.",
      "Antiemético potente de acción central y periférica.",
      "Vida media larga (24 horas).",
      "No posee efectos procinéticos.",
      "Reduce el dolor visceral en conejos.",
      "Útil para reducir lesiones por dermatitis ulcerativa en ratones."
    ],
    usos_principales: "Tratamiento y prevención del vómito (incluyendo quimioterapia y mareo por movimiento) en perros y gatos. Manejo de dolor visceral en exóticos.",
    inicio_accion: "Rápido (1 hora antes de eventos)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "No administrar en ayuno prolongado; dar con una pequeña cantidad de comida.",
    "La inyección puede ser dolorosa; mantener el vial refrigerado ayuda a reducir el dolor.",
    "No forzar la tableta a través del blíster para evitar que se rompa.",
    "Si se usa para viajes, administrar 1 hora antes de la salida.",
    "Informe si nota babeo excesivo o respiración rápida tras la inyección."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Tratamiento del vómito",
        vias: ["IV", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg (Inyectable) o 2 mg/kg (Oral)"
        },
        frecuencia: { texto_ui: "Cada 24 horas por hasta 5 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Mareo por movimiento (Cinetosis)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por máximo 2 días", intervalo_horas: 24 },
        notas_tecnicas: "Administrar al menos 1 hora antes del viaje."
      }
    ],
    gato: [
      {
        indicacion: "Tratamiento del vómito",
        vias: ["IV", "IM", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    huron: [
      {
        indicacion: "Antiemético",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Dolor visceral / Estasis colónica",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Se ha reportado que aumenta el peristaltismo colónico."
      }
    ],
    roedores: [
      {
        indicacion: "Ratones: Dermatitis ulcerativa / Auto-trauma",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    erizo: [
      {
        indicacion: "Antiemético",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    petauro: [
      {
        indicacion: "Antiemético",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    primates: [
      {
        indicacion: "Antiemético",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción gastrointestinal o perforación (relativo).",
      "Insuficiencia hepática severa.",
      "Uso prolongado (>48h) sin diagnóstico definitivo."
    ],
    efectos_adversos: [
      "Dolor marcado en el sitio de inyección (especialmente en gatos).",
      "Hipersalivación y taquipnea transitoria.",
      "Hemorragia o hemólisis en gatos a dosis muy altas."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria tras la inyección",
      "Estado de hidratación",
      "Función hepática en tratamientos largos"
    ],
    instrucciones_manejo: "Inyectar el producto frío (de nevera) para reducir el dolor. No mezclar con otros fármacos.",
    sobredosis: {
      signos: ["Vómitos", "Letargo", "Hipersalivación"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Bloqueadores de canales de calcio", efecto: "Maropitant tiene afinidad por estos canales; evitar uso conjunto.", severidad: "Importante" },
      { farmaco: "Fármacos altamente unidos a proteínas", efecto: "Competencia por sitios de unión.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores de neuroquinina-1 (NK-1), bloqueando la acción de la Sustancia P en el Sistema Nervioso Central y Periférico.",
    farmacocinetica: "Alta unión a proteínas plasmáticas (>99%). Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "16 mg, 24 mg, 60 mg, 160 mg", valor_concentracion: 16, unidad_concentracion: "mg", es_divisible: false }
  ]
};