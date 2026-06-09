import type { Drug } from '@/lib/types';

export const toldimphosDrug: Drug = {
  id: "toldimphos",
  meta_data: {
    nombre_generico: "Toldimfos (Fosfato orgánico)",
    nombres_comerciales: ["Foston"],
    grupo_farmacologico: "Suplemento mineral; Fosfato",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Fosfato orgánico esencial para el metabolismo energético (ATP).",
      "Vital para la función nerviosa, muscular y de los glóbulos rojos.",
      "Suplementación necesaria en estados de hipofosfatemia severa.",
      "Monitorizar electrolitos durante la infusión IV."
    ],
    usos_principales: "Tratamiento de la hipofosfatemia, soporte en fluidoterapia intensiva y adyuvante en cetosis o paresia.",
    inicio_accion: "Rápido (parenteral)",
    duracion_efecto: "Variable"
  },
  informacion_cliente: [
    "Informe si nota que el animal parece muy débil tras la inyección.",
    "Se requieren análisis de sangre para vigilar los niveles de calcio y fósforo.",
    "El medicamento puede administrarse por inyección debajo de la piel o en el músculo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipofosfatemia crónica",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "ml/perro (Solución 20%)"
        },
        frecuencia: { texto_ui: "Cada 48 horas por 5 a 10 dosis", intervalo_horas: 48 }
      },
      {
        indicacion: "Hipofosfatemia aguda severa",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.12,
          dosis_min: 0.06,
          dosis_max: 0.18,
          unidad_calculo: "mmol/kg de fosfato potásico"
        },
        frecuencia: { texto_ui: "Administrar en un periodo de 6 horas", intervalo_horas: 0 }
      }
    ],
    gato: [
      {
        indicacion: "Hipofosfatemia (Post-insulina o nutrición)",
        vias: ["PO", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2.0,
          unidad_calculo: "mmol/kg/día"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hiperfosfatemia.",
      "Hipocalcemia (el fósforo baja más el calcio).",
      "Insuficiencia renal oligúrica.",
      "Necrosis tisular extensa."
    ],
    efectos_adversos: [
      "Hipotensión (si es IV rápido).",
      "Fallo renal por calcificación metastásica.",
      "Hipocalcemia iatrogénica.",
      "Hiperpotasemia (si se usa fosfato potásico)."
    ],
    monitoreo_recomendado: [
      "Niveles séricos de Calcio y Fósforo",
      "Electrolitos (Sodio, Potasio)",
      "Función renal"
    ],
    instrucciones_manejo: "Incompatible con soluciones que contengan calcio o magnesio (precipitan).",
    sobredosis: {
      signos: ["Convulsiones por hipocalcemia", "Fallo renal agudo"],
      tratamiento: "Gluconato de calcio IV para tetania; diuresis salina."
    },
    interacciones_farmacologicas: [
      { farmaco: "Sales de Calcio / Magnesio", efecto: "Incompatibilidad física y riesgo de depósitos de fosfato cálcico.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Aporta fósforo orgánico que se integra en los procesos de fosforilación oxidativa celular.",
    farmacocinetica: "Eliminación renal predominante (80% reabsorción tubular)."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable (Foston)", concentracion_texto: "20% (200 mg/ml)", valor_concentracion: 200, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};