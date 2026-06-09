import type { Drug } from '@/lib/types';

export const ranitidineDrug: Drug = {
  id: "ranitidine",
  meta_data: {
    nombre_generico: "Ranitidina",
    nombres_comerciales: ["Zantac*"],
    grupo_farmacologico: "Antagonista de receptores H2; Procinético",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Reduce la secreción ácida gástrica.",
      "Posee efectos procinéticos al inhibir la acetilcolinesterasa.",
      "Útil en el manejo del megacolon felino e íleo gástrico.",
      "Eficacia como antiácido es baja en perros comparado con omeprazol.",
      "Ineficaz como supresor de ácido en gatos sanos."
    ],
    usos_principales: "Manejo de úlceras gastroduodenales, esofagitis, procinético GI y megacolon felino.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Medicamento para reducir la acidez y mejorar el movimiento intestinal.",
    "El tratamiento suele durar al menos un mes.",
    "Informe si nota latidos cardíacos inusuales o debilidad.",
    "Espaciar 2 horas de otros medicamentos como el sucralfato."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Gastritis / Úlceras / Procinético",
        vias: ["PO", "SC", "IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Gastritis / Megacolon / Procinético",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Urgencia (IV)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas (o CRI 2 mg/kg/día)", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas reportadas."
    ],
    efectos_adversos: [
      "Arritmias cardíacas (raro).",
      "Hipotensión tras inyección IV rápida.",
      "Malestar digestivo leve."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Respuesta clínica digestiva"
    ],
    instrucciones_manejo: "Inyectar IV de forma muy lenta.",
    sobredosis: {
      signos: ["Arritmias", "Vómitos", "Letargo"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Sucralfato", efecto: "Reduce la absorción de la ranitidina. Espaciar 2 horas.", severidad: "Leve" },
      { farmaco: "Digoxina / Metoclopramida", efecto: "Ranitidina puede reducir su absorción.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista H2 competitivo. Inhibe la colinesterasa, aumentando la disponibilidad de acetilcolina en el músculo liso GI.",
    farmacocinetica: "Biodisponibilidad del 50%. Metabolismo hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "75 mg, 150 mg, 300 mg", valor_concentracion: 150, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Inyectable", concentracion_texto: "25 mg/ml", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
