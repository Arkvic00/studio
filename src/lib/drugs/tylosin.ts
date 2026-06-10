import type { Drug } from '@/lib/types';

export const tylosinDrug: Drug = {
  id: "tylosin",
  meta_data: {
    nombre_generico: "Tilosina",
    nombres_comerciales: ["Bilosin", "Tylan", "Tyluvet"],
    grupo_farmacologico: "Macrólido",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antibiótico tiempo-dependiente del grupo de los macrólidos.",
      "Excelente actividad contra Mycoplasma spp.",
      "Espectro similar a la eritromicina pero con mayor potencia contra ciertos patógenos.",
      "Uso de elección para la diarrea que responde a antibióticos en perros.",
      "Se concentra en fluidos alcalinos.",
      "La inyección intramuscular es muy dolorosa."
    ],
    usos_principales: "Tratamiento de la colitis/diarrea crónica en perros, micoplasmosis y cryptosporidiosis.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 24 horas"
  },
  informacion_cliente: [
    "La versión en polvo tiene un sabor muy amargo; puede requerir cápsulas para su administración.",
    "Completar el ciclo de tratamiento según lo indicado por el veterinario.",
    "Informe si nota vómitos o diarrea severa.",
    "Mantener el envase bien cerrado y protegido de la humedad."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Diarrea que responde a antibióticos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 11,
          dosis_min: 7,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Colitis severa",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 16,
          dosis_min: 12,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas con comida", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas / Mycoplasma",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 11,
          dosis_min: 7,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Micoplasmosis (Agua de bebida)",
        vias: ["PO (Agua)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "g/l"
        },
        frecuencia: { texto_ui: "Cambiar cada 24 horas por 3-5 días", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida a macrólidos.",
      "Uso en caballos (riesgo de enterotoxemia fatal)."
    ],
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Dolor intenso y necrosis en el sitio de inyección IM.",
      "Anorexia leve."
    ],
    monitoreo_recomendado: [
      "Consistencia de las heces",
      "Estado digestivo general"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Evitar el uso IM si la vía oral es posible.",
    sobredosis: {
      signos: ["Trastornos GI severos"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Lincosamidas / Cloranfenicol", efecto: "Antagonismo competitivo; no usar en combinación.", severidad: "Importante" },
      { farmaco: "Digoxina", efecto: "Puede aumentar los niveles de digoxina.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la subunidad ribosomal 50S, inhibiendo la síntesis de proteínas bacterianas.",
    farmacocinetica: "Absorción oral rápida. Metabolismo hepático parcial."
  },
  presentaciones_comerciales: [
    {
      tipo: "Polvo soluble oral",
      concentracion_texto: "100 g",
      valor_concentracion: 1,
      unidad_concentracion: "g",
      es_divisible: false
    },
    {
      tipo: "Inyectable",
      concentracion_texto: "200 mg/ml",
      valor_concentracion: 200,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
