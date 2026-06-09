import type { Drug } from '@/lib/types';

export const ephedrineDrug: Drug = {
  id: "ephedrine",
  meta_data: {
    nombre_generico: "Efedrina",
    nombres_comerciales: ["Enurace"],
    grupo_farmacologico: "Simpaticomimético no catecolamina",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula receptores alfa y beta de forma directa e indirecta.",
      "Aumenta la fuerza de contracción cardiaca y la frecuencia.",
      "Provoca contracción del esfínter uretral interno.",
      "El efecto tiende a disminuir tras 2-3 dosis debido al agotamiento de noradrenalina endógena.",
      "Menor efecto de rebote que otros simpaticomiméticos potentes."
    ],
    usos_principales: "Tratamiento de la hipotensión durante la anestesia, manejo de la incontinencia urinaria y congestión nasal.",
    inicio_accion: "Rápido (IV inmediato; PO 30-60 min)",
    duracion_efecto: "Corta (IV 5-15 min; PO 12 horas)"
  },
  informacion_cliente: [
    "Las personas embarazadas deben usar guantes para administrar el medicamento.",
    "No usar en animales con glaucoma.",
    "Informe si nota que su mascota está muy inquieta, jadea demasiado o tiene el corazón muy rápido.",
    "Asegúrese de que el veterinario haya descartado otras causas de micción excesiva antes de empezar el tratamiento."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipotensión transanestésica",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.125,
          dosis_min: 0.05,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir según sea necesario (efecto wanes tras 2-3 dosis)", intervalo_horas: 0 }
      },
      {
        indicacion: "Incontinencia Urinaria",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_max: 2.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Congestión nasal",
        vias: ["Intranasal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota (solución 0.5%)"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Hipotensión transanestésica",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Congestión nasal",
        vias: ["Intranasal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota (0.5%)"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Glaucoma.",
      "Gestación y lactancia.",
      "Enfermedad cardiovascular severa.",
      "Hipertensión sistémica."
    ],
    efectos_adversos: [
      "Taquicardia y fibrilación auricular.",
      "Hipertensión.",
      "Jadeo y midriasis.",
      "Inquietud y estimulación del SNC.",
      "Reducción de la motilidad intestinal."
    ],
    monitoreo_recomendado: [
      "Frecuencia y ritmo cardiaco (ECG)",
      "Presión arterial",
      "Estado de consciencia"
    ],
    instrucciones_manejo: "Usar guantes. Almacenar protegido de la luz.",
    sobredosis: {
      signos: ["Taquicardia severa", "Hipertensión", "Convulsiones"],
      tratamiento: "Soporte sintomático; considerar beta-bloqueadores para taquicardia severa."
    },
    interacciones_farmacologicas: [
      { farmaco: "Digoxina / Antidepresivos tricíclicos", efecto: "Riesgo aumentado de arritmias fatales.", severidad: "Grave" },
      { farmaco: "IMAOs (Selegilina)", efecto: "Riesgo de crisis hipertensiva fatal.", severidad: "Grave" },
      { farmaco: "Anestésicos volátiles", efecto: "Aumentan la sensibilidad del corazón a la efedrina.", severidad: "Importante" },
      { farmaco: "Teofilina", efecto: "Potenciación de efectos simpaticomiméticos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista adrenérgico alfa y beta que también libera noradrenalina de las terminales nerviosas. Produce vasoconstricción periférica e inotropía positiva.",
    farmacocinetica: "Metabolismo hepático y excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "10 mg, 15 mg, 30 mg, 50 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Inyectable", concentracion_texto: "3 mg/ml, 30 mg/ml", valor_concentracion: 30, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Gotas nasales", concentracion_texto: "0.5%, 1%", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
