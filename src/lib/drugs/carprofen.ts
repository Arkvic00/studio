import type { Drug } from '@/lib/types';

export const carprofenDrug: Drug = {
  id: "carprofen",
  meta_data: {
    nombre_generico: "Carprofeno",
    nombres_comerciales: ["Rimadyl", "Canidryl", "Carprodyl", "Carprox Vet", "Dolagis", "Carprieve", "Rycarfa"],
    grupo_farmacologico: "AINE (Inhibidor preferencial de COX-2)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe preferencialmente la enzima COX-2, reduciendo la producción de prostaglandinas inflamatorias.",
      "Excelente para el dolor postoperatorio y la inflamación crónica (osteoartritis).",
      "En gatos, solo está autorizado como dosis única perioperatoria.",
      "Puede afectar la perfusión renal durante la hipotensión anestésica.",
      "Las formulaciones masticables son altamente palatables; riesgo de ingestión voluntaria masiva."
    ],
    usos_principales: "Control del dolor y la inflamación postoperatoria. Reducción de la inflamación crónica en enfermedades articulares degenerativas.",
    inicio_accion: "Rápido (pico plasmático en 1-3 horas)",
    duracion_efecto: "Hasta 24 horas"
  },
  informacion_cliente: [
    "Administrar preferiblemente con comida.",
    "Mantener las tabletas masticables fuera del alcance de las mascotas (pueden comerlas como premios).",
    "Informe inmediatamente si nota heces negras, vómitos o pérdida de apetito.",
    "No administrar otros antiinflamatorios (aspirina, meloxicam) o corticoides simultáneamente.",
    "En gatos, no administrar dosis repetidas sin supervisión estricta."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dolor postoperatorio / Osteoartritis (Dosis inicial)",
        vias: ["IV", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas (o dividido q12h)", intervalo_horas: 24 },
        notas_tecnicas: "La dosis puede reducirse a 2 mg/kg/día después de 7 días según respuesta clínica."
      }
    ],
    gato: [
      {
        indicacion: "Dolor postoperatorio (Dosis ÚNICA)",
        vias: ["IV", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única preoperatoria", intervalo_horas: 0 },
        notas_tecnicas: "No autorizado para uso crónico en gatos. Las tabletas no están autorizadas para esta especie."
      }
    ],
    huron: [
      {
        indicacion: "Analgesia / Inflamación",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia (Parenteral)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Analgesia (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    roedores: [
      {
        indicacion: "Dosis diaria total",
        vias: ["IV", "IM", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Analgesia / Artritis",
        vias: ["IM", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "Las dosis más altas parecen ser efectivas por 24h. Usar con precaución en buitres."
      }
    ],
    reptil: [
      {
        indicacion: "Dosis de carga",
        vias: ["SC", "IM", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Mantenimiento",
        vias: ["SC", "IM", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    peces: [
      {
        indicacion: "Analgesia (Trucha Arcoíris)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosis altas pueden causar depresión de la actividad."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales deshidratados, hipovolémicos o hipotensos.",
      "Enfermedad gastrointestinal activa o sangrado.",
      "Trastornos de la coagulación.",
      "Animales menores de 6 semanas.",
      "Hembras gestantes o lactantes."
    ],
    contraindicaciones_especie: {
      "Buitre": "Usar con extrema precaución; sensibilidad reportada en algunas especies de aves carroñeras.",
      "Gato": "NO usar dosis repetidas. Prohibidas las tabletas."
    },
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Hemorragia o ulceración GI.",
      "Toxicidad renal (especialmente si hay hipotensión).",
      "Hepatotoxicidad idiopática (rara).",
      "Depresión de la actividad en peces a dosis altas."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN)",
      "Función hepática",
      "Presión arterial durante la anestesia"
    ],
    instrucciones_manejo: "Conservar la solución inyectable en refrigeración (2-8°C). Una vez abierto, estable 28 días a temperatura ambiente.",
    sobredosis: {
      signs: ["Vómitos severos", "Melena", "Fallo renal", "Convulsiones (en ingestión masiva de masticables)"],
      tratamiento: "Lavado gástrico, carbón activado y soporte gastroprotector y renal intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Corticosteroides", efecto: "Aumenta drásticamente el riesgo de úlceras GI. Esperar 1-2 semanas entre cambios.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Aumento significativo del riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Diuréticos", efecto: "Pueden reducir el efecto diurético y aumentar el riesgo renal.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor preferencial de la ciclooxigenasa-2 (COX-2). Posee también efectos analgésicos centrales.",
    farmacocinetica: "Metabolismo hepático. Vida media significativamente más larga en gatos que en perros."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "50 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "20 mg, 50 mg, 100 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: true }
  ]
};
