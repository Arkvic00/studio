import type { Drug } from '@/lib/types';

export const pradofloxacinDrug: Drug = {
  id: "pradofloxacin",
  meta_data: {
    nombre_generico: "Pradofloxacino",
    nombres_comerciales: ["Veraflox"],
    grupo_farmacologico: "Fluoroquinolona de 3ª generación",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor bactericida de la ADN girasa y topoisomerasa IV.",
      "Actividad mejorada contra anaerobios y Gram-positivos comparado con fluoroquinolonas previas.",
      "Excelente penetración en el tracto urogenital y la próstata.",
      "Reservar para infecciones resistentes a terapias de primera línea.",
      "No usar en perros jóvenes por riesgo de artropatía."
    ],
    usos_principales: "Tratamiento de piodermas, infecciones de heridas, ITU, enfermedad periodontal grave e infecciones respiratorias.",
    inicio_accion: "Rápido",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Administrar una vez al día.",
    "No usar en animales gestantes o lactantes.",
    "Informe si nota vómitos o falta de apetito.",
    "Espaciar 2 horas de suplementos que contengan calcio o hierro.",
    "Completar el ciclo de tratamiento indicado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas / Piel / Urinarias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.75,
          dosis_min: 3,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones respiratorias / Heridas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 3,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación y lactancia.",
      "Perros < 12 meses (< 18 meses razas gigantes).",
      "Gatos < 6 semanas.",
      "Historial de epilepsia o convulsiones."
    ],
    efectos_adversos: [
      "Malestar gastrointestinal leve.",
      "Riesgo de daño en cartílagos articulares en crecimiento.",
      "Posible supresión de médula ósea en dosis muy altas (gatos)."
    ],
    monitoreo_recomendado: [
      "Resolución de la infección",
      "Estado de las articulaciones en jóvenes"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Vómitos", "Convulsiones"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anticácidos / Calcio / Hierro", efecto: "Reducen drásticamente la absorción oral.", severidad: "Importante" },
      { farmaco: "Teofilina", efecto: "Aumenta los niveles plasmáticos de teofilina.", severidad: "Moderada" },
      { farmaco: "Ciclosporina", efecto: "Aumento potencial de la nefrotoxicidad.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea la replicación bacteriana mediante la inhibición dual de la ADN girasa y la topoisomerasa IV.",
    farmacocinetica: "Absorción oral excelente. Alta liposolubilidad."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "15 mg, 60 mg, 120 mg", valor_concentracion: 15, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "25 mg/ml", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};