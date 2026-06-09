import type { Drug } from '@/lib/types';

export const paroxetineDrug: Drug = {
  id: "paroxetine",
  meta_data: {
    nombre_generico: "Paroxetina",
    nombres_comerciales: ["Paxil"],
    grupo_farmacologico: "ISRS",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Eleva niveles de serotonina.",
      "Uso en ansiedad e impulsividad.",
      "Requiere lavado largo con IMAOs."
    ],
    usos_principales: "Ansiedad, marcaje urinario y trastornos conductuales.",
    inicio_accion: "Lento (4-6 semanas)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Efecto máximo en un mes.",
    "Informe si hay agresividad.",
    "No suspender bruscamente."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ansiedad / Impulsividad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1.0,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Marcaje / Agresividad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Epilepsia.", "ISRS concurrentes."],
    efectos_adversos: ["Letargo.", "Anorexia.", "Agresividad."],
    monitoreo_recomendado: ["Peso", "Conducta"],
    instrucciones_manejo: "Tapering obligatorio.",
    sobredosis: {
      signos: ["Convulsiones", "Vómitos"],
      tratamiento: "Soporte."
    },
    interacciones_farmacologicas: [
      { farmaco: "IMAOs", efecto: "Síndrome de serotonina fatal.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor selectivo de recaptación de serotonina.",
    farmacocinetica: "Metabolismo hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "20 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: true }
  ]
};