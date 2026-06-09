import type { Drug } from '@/lib/types';

export const adequanDrug: Drug = {
  id: "adequan",
  meta_data: {
    nombre_generico: "Glicosaminoglicano Polisulfatado (PSGAG)",
    nombres_comerciales: ["Adequan"],
    grupo_farmacologico: "Condroprotector; Modificador de la enfermedad",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Precursor de los mucopolisacáridos del cartílago.",
      "Estimula a los condrocitos para sintetizar nuevos glicosaminoglicanos.",
      "Inhibe enzimas catabólicas que destruyen la matriz articular.",
      "Posee una ligera actividad anticoagulante (similar a la heparina).",
      "¡CONTRAINDICADO EN AVES!: Reportada mortalidad por coagulopatía."
    ],
    usos_principales: "Manejo coadyuvante de artritis no infecciosas y no inmunomediadas en perros, conejos y primates.",
    inicio_accion: "Lento (progresivo durante el ciclo)",
    duracion_efecto: "Semanas tras el tratamiento inicial"
  },
  informacion_cliente: [
    "Se administra mediante inyecciones en el músculo.",
    "No es un calmante de alivio inmediato; ayuda a la salud de la articulación a largo plazo.",
    "Informe si nota sangrado inusual o moretones en su mascota.",
    "¡NUNCA usar en aves! Es fatal para ellas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Artritis no infecciosa",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 3 a 4 días por 8 aplicaciones (4 semanas)", intervalo_horas: 84 },
        notas_tecnicas: "No exceder las 8 dosis totales por ciclo recomendado."
      }
    ],
    conejo: [
      {
        indicacion: "Osteoartritis",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 3 días por 28 días, luego quincenal", intervalo_horas: 72 }
      }
    ],
    primates: [
      {
        indicacion: "Artritis crónica",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 3 a 5 días por 2 a 3 meses", intervalo_horas: 96 }
      }
    ],
    ave: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "N/A" },
        notas_tecnicas: "¡MORTAL!: Causa diátesis hemorrágica fatal en aves (rapaces, loros, etc.)."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Aves (¡MORTAL!).",
      "Artritis séptica (infección activa).",
      "Cirugía ósea planificada (riesgo de hemorragia).",
      "Trastornos de la coagulación."
    ],
    efectos_adversos: [
      "Hemorragias (efecto heparinoide).",
      "Dolor en el sitio de inyección.",
      "Sepsis articular (si es intra-articular y la técnica falla)."
    ],
    monitoreo_recomendado: [
      "Estado de la coagulación",
      "Frecuencia y consistencia de las heces"
    ],
    instrucciones_manejo: "Asepsia rigurosa en inyecciones. Almacenar a temperatura ambiente.",
    sobredosis: {
      signs: ["Hemorragias espontáneas", "Hematomas"],
      tratamiento: "Soporte sintomático; considerar agentes procoagulantes."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anticoagulantes", efecto: "Potenciación del riesgo de sangrado.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la matriz dañada del cartílago, estimulando el anabolismo de los condrocitos e inhibiendo metaloproteasas.",
    farmacocinetica: "Absorción rápida tras IM; alcanza niveles terapéuticos en articulaciones en horas."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};