import type { Drug } from '@/lib/types';

export const fentanylFluanisoneDrug: Drug = {
  id: "fentanyl_fluanisone",
  meta_data: {
    nombre_generico: "Fentanilo / Fluanisona",
    nombres_comerciales: ["Hypnorm"],
    grupo_farmacologico: "Neuroleptanalgesia (Opioide / Butirofenona)",
    status_regulatorio: "POM-V CD SCHEDULE 2"
  },
  resumen_clinico: {
    puntos_clave: [
      "Combinación de un opioide mu puro (fentanilo) y una butirofenona (fluanisona).",
      "Produce una sedación y analgesia profunda (neuroleptanalgesia) de larga duración (30–60 min).",
      "Autorizado para uso en conejos, cobayas, ratas y ratones.",
      "Se puede combinar con benzodiazepinas (midazolam) para anestesia quirúrgica completa.",
      "La depresión respiratoria es común; se recomienda suplementar con oxígeno.",
      "La reversión de la parte opioide se puede lograr con buprenorfina o naloxona."
    ],
    usos_principales: "Sedación y analgesia para inmovilización y procedimientos menores en pequeños mamíferos y primates. Premedicación anestésica.",
    inicio_accion: "Rápido (IM/IP)",
    duracion_efecto: "Sedación 30–60 min; Anestesia combinada 20–40 min"
  },
  informacion_cliente: [
    "Medicamento de uso estrictamente hospitalario.",
    "El animal requerirá monitoreo constante de la respiración y temperatura.",
    "La recuperación puede ser prolongada, especialmente con dosis altas.",
    "Asegúrese de mantener al animal en un lugar cálido y tranquilo tras el procedimiento."
  ],
  parametros_dosificacion: {
    conejo: [
      {
        indicacion: "Sedación / Premedicación / Anestesia",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.1,
          dosis_max: 0.5,
          unidad_calculo: "ml/kg (Producto comercial)"
        },
        notas_tecnicas: "Usar el extremo inferior si se combina con benzodiazepinas. Dosis >0.3 ml/kg pueden causar recuperaciones muy largas e hipotermia."
      }
    ],
    cobaya: [
      {
        indicacion: "Sedación / Analgesia",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "ml/kg"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Sedación / Anestesia",
        vias: ["IM", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.2,
          dosis_max: 0.5,
          unidad_calculo: "ml/kg"
        }
      },
      {
        indicacion: "Ratones: Sedación / Anestesia",
        vias: ["IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.1,
          dosis_max: 0.5,
          unidad_calculo: "ml/kg"
        }
      }
    ],
    primates: [
      {
        indicacion: "Sedación profunda",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          dosis_min: 0.1,
          dosis_max: 0.3,
          unidad_calculo: "ml/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Compromiso respiratorio preexistente.",
      "Enfermedad pulmonar severa.",
      "Insuficiencia renal o hepática significativa."
    ],
    efectos_adversos: [
      "Depresión respiratoria profunda (especialmente en la recuperación).",
      "Hipotermia marcada.",
      "Recuperación prolongada.",
      "Hipotensión leve."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria y color de mucosas",
      "Temperatura corporal (vital)",
      "Reflejo palpebral y profundidad anestésica",
      "Saturación de oxígeno (SpO2)"
    ],
    instrucciones_manejo: "Mantener normotermia mediante fuentes de calor externas. Suplementar con oxígeno por mascarilla.",
    sobredosis: {
      signos: ["Apnea", "Bradicardia severa", "Coma"],
      tratamiento: "Ventilación asistida. Reversión con Buprenorfina (analgesia mantenida) o Naloxona (reversión total)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Benzodiazepinas (Midazolam)", efecto: "Sinergia para anestesia quirúrgica con relajación muscular.", severidad: "Importante" },
      { farmaco: "Buprenorfina", efecto: "Revierte la depresión respiratoria pero mantiene la analgesia.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "El fentanilo actúa sobre los receptores mu-opioides (analgesia/sedación) y la fluanisona sobre los receptores dopaminérgicos (neuroléptico), produciendo un estado de indiferencia al entorno y alivio del dolor.",
    farmacocinetica: "Metabolismo hepático. Excreción renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "0.2 mg/ml Fent. + 10 mg/ml Fluan.",
      valor_concentracion: 1,
      unidad_concentracion: "ml/ml",
      es_divisible: false
    }
  ]
};
