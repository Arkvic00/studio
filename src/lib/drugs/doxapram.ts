import type { Drug } from '@/lib/types';

export const doxapramDrug: Drug = {
  id: "doxapram",
  meta_data: {
    nombre_generico: "Doxapram (Clorhidrato de Doxapram)",
    nombres_comerciales: ["Dopram-V", "Doxapram*"],
    grupo_farmacologico: "Estimulante respiratorio",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula la respiración aumentando la sensibilidad de los quimiorreceptores aórticos y carotídeos.",
      "Uso principal: estimular la respiración en neonatos tras cesárea o post-anestesia general.",
      "No es efectivo en presencia de hipoxemia severa sin ventilación previa.",
      "Duración de efecto corta (15-20 min).",
      "No sustituye la intubación y ventilación en depresión respiratoria grave.",
      "En neonatos, precaución por el contenido de alcohol bencílico."
    ],
    usos_principales: "Estimulación respiratoria durante y después de la anestesia, reanimación de neonatos y tratamiento de depresión respiratoria en peces.",
    inicio_accion: "Rápido (minutos tras IV)",
    duracion_efecto: "15–20 minutos"
  },
  informacion_cliente: [
    "Medicamento de emergencia para ayudar al animal a respirar mejor.",
    "El efecto es de corta duración y el animal debe ser monitoreado constantemente.",
    "Puede causar temblores o agitación momentánea."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Depresión respiratoria (Neonatos)",
        vias: ["Sublingual", "SC", "IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única (repetir si es necesario tras 15-20 min)", intervalo_horas: 0 }
      },
      {
        indicacion: "Post-anestesia (Adultos)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    gato: [
      {
        indicacion: "Neonatos / Post-anestesia",
        vias: ["Sublingual", "IV", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    huron: [
      {
        indicacion: "Estimulación respiratoria",
        vias: ["IV", "IM", "IP", "Sublingual"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Estimulación respiratoria",
        vias: ["IV", "IM", "IP", "Sublingual"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    cobaya: [
      {
        indicacion: "Estimulación respiratoria",
        vias: ["IV", "SC", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas/Ratones/Hamsters",
        vias: ["IV", "IM", "IP", "Sublingual"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Depresión respiratoria",
        vias: ["IM", "IV", "Intratraqueal", "Intraósea"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 5,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Depresión respiratoria",
        vias: ["IM", "IV", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 8,
          dosis_min: 4,
          dosis_max: 12,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    peces: [
      {
        indicacion: "Depresión respiratoria",
        vias: ["IV", "Intracelómica", "Tópica branquial"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Falta de vía aérea patente (obstrucción).",
      "Hipoxemia severa sin soporte ventilatorio previo."
    ],
    efectos_adversos: [
      "Hiperventilación excesiva seguida de alcalosis respiratoria.",
      "Tromboflebitis (irritante local).",
      "Hipertensión y taquicardia.",
      "Excitación del SNC y convulsiones.",
      "Hipoxia cerebral por vasoconstricción secundaria a baja CO2."
    ],
    monitoreo_recomendado: [
      "Esfuerzo y patrón respiratorio",
      "Frecuencia cardiaca y presión arterial",
      "Estado de consciencia"
    ],
    instrucciones_manejo: "Proteger de la luz. Inyectar IV lentamente. Incompatible con bicarbonato sódico o tiopental.",
    sobredosis: {
      signos: ["Convulsiones", "Hipertensión severa", "Taquicardia extrema"],
      tratamiento: "Oxigenoterapia y barbitúricos de acción corta o propofol para controlar convulsiones."
    },
    interactions_farmacologicas: [
      { farmaco: "Simpaticomiméticos (Adrenalina)", efecto: "Riesgo de hipertensión severa y arritmias.", severidad: "Importante" },
      { farmaco: "Teofilina", efecto: "Aumento de la estimulación del SNC.", severidad: "Moderada" },
      { farmaco: "Morfina", efecto: "Riesgo de convulsiones tras administración de doxapram.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estimula los centros respiratorios del tronco encefálico mediante la activación de los quimiorreceptores periféricos.",
    farmacocinetica: "Eliminación rápida en mamíferos."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "20 mg/ml", valor_concentracion: 20, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};