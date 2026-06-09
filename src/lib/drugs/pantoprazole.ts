import type { Drug } from '@/lib/types';

export const pantoprazoleDrug: Drug = {
  id: "pantoprazole",
  meta_data: {
    nombre_generico: "Pantoprazol",
    nombres_comerciales: ["Protium", "Pantoprazole*"],
    grupo_farmacologico: "Inhibidor de la bomba de protones (IBP)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor de la secreción ácida gástrica potente.",
      "Efecto superior a 24 horas.",
      "Eficacia en perros comparable a otros IBPs.",
      "Poca información detallada en medicina veterinaria comparado con omeprazol."
    ],
    usos_principales: "Manejo de úlceras gástricas y duodenales, esofagitis severa y gastrinomas.",
    inicio_accion: "Rápido (pico en 1-2h)",
    duracion_efecto: "Superior a 24 horas"
  },
  informacion_cliente: [
    "Medicamento inyectable u oral para proteger el estómago.",
    "No administrar mediante inyección en el músculo; solo vía intravenosa lenta.",
    "Informe si nota diarrea o falta de apetito."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Protección gástrica / Úlceras",
        vias: ["IV lenta (15 min)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.85,
          dosis_min: 0.7,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Protección gástrica",
        vias: ["IV lenta (15 min)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.85,
          dosis_min: 0.7,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Administración intramuscular o subcutánea.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Tromboflebitis (vía IV).",
      "Diarrea.",
      "Hiperglucemia transitoria (reportada en humanos)."
    ],
    monitoreo_recomendado: [
      "Resolución de signos clínicos gástricos",
      "Integridad de la vía venosa"
    ],
    instrucciones_manejo: "Administrar IV muy lentamente (mín. 2-15 min). No congelar.",
    sobredosis: {
      signos: ["Trastornos GI leves"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Itraconazol / Ketoconazol", efecto: "El aumento del pH gástrico reduce drásticamente su absorción.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea la bomba H+/K+ ATPasa de la célula parietal gástrica.",
    farmacocinetica: "Reconstituido es estable 2h a temp. ambiente; diluido en salino hasta 22h."
  },
  presentaciones_comerciales: [
    { tipo: "Vial inyectable", concentracion_texto: "40 mg", valor_concentracion: 40, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "20 mg, 40 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: false }
  ]
};
