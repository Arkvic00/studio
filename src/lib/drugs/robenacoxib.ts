import type { Drug } from '@/lib/types';

export const robenacoxibDrug: Drug = {
  id: "robenacoxib",
  meta_data: {
    nombre_generico: "Robenacoxib",
    nombres_comerciales: ["Onsior"],
    grupo_farmacologico: "AINE (Inhibidor selectivo de COX-2)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor selectivo de la enzima COX-2.",
      "Selectividad tisular: se concentra en sitios de inflamación.",
      "Vida media plasmática corta con persistencia tisular.",
      "Autorizado para uso postoperatorio y musculoesquelético."
    ],
    usos_principales: "Alivio del dolor e inflamación en trastornos musculoesqueléticos y cirugía.",
    inicio_accion: "Rápido",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "En perros, no administrar con comida.",
    "Informe si nota heces negras o vómitos.",
    "No usar en animales de menos de 2.5 kg."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dolor e Inflamación",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Dolor e Inflamación",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipotensión.",
      "Enfermedad GI activa.",
      "Animales < 2.5 kg."
    ],
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Riesgo renal en hipotensión."
    ],
    monitoreo_recomendado: [
      "Función renal y hepática",
      "Signos de sangrado"
    ],
    instrucciones_manejo: "Observar higiene normal.",
    sobredosis: {
      signos: ["Vómitos", "Melena"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs", efecto: "Riesgo de úlceras GI.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor selectivo de la COX-2.",
    farmacocinetica: "Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "5 a 40 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: true }
  ]
};