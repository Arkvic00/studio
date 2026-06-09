import type { Drug } from '@/lib/types';

export const clotrimazoleDrug: Drug = {
  id: "clotrimazole",
  meta_data: {
    nombre_generico: "Clotrimazol",
    nombres_comerciales: ["Canesten", "Lotriderm"],
    grupo_farmacologico: "Antifúngico imidazólico tópico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe el crecimiento de dermatofitos patógenos, Aspergillus y levaduras.",
      "Actúa inhibiendo la síntesis de ergosterol dependiente de citocromo P450.",
      "Uso principal en micosis superficiales e infecciones naso-sinusales (aspergilosis).",
      "En aves, se utiliza vía intratraqueal o nebulizada para aspergilosis respiratoria."
    ],
    usos_principales: "Tratamiento de micosis cutáneas superficiales, otitis fúngicas y aspergilosis nasal.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Requiere aplicaciones cada 12 a 24 horas"
  },
  informacion_cliente: [
    "Aplicar sobre el área afectada masajeando suavemente.",
    "Si no hay mejoría en 4 semanas, se debe reevaluar el diagnóstico.",
    "En uso ótico, instilar las gotas indicadas por el veterinario.",
    "Informe si nota irritación severa en la zona de aplicación."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Micosis superficiales",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación local"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Otitis fúngica",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 4,
          dosis_min: 3,
          dosis_max: 5,
          unidad_calculo: "gotas por oído"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Aspergilosis Nasal (Infusión frontal)",
        vias: ["Instilación en senos frontales"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "g de crema al 1%"
        },
        notas_tecnicas: "10g en perros <10kg; 20g en perros >10kg. Solo si la placa cribiforme está intacta."
      }
    ],
    gato: [
      {
        indicacion: "Micosis superficiales / Otitis",
        vias: ["Tópica", "Ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Micosis superficiales",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Otitis fúngica",
        vias: ["Ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 4,
          dosis_min: 3,
          dosis_max: 5,
          unidad_calculo: "gotas"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Micosis cutáneas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación"
        },
        frecuencia: { texto_ui: "Cada 12 horas por 3 a 6 semanas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Aspergilosis (Lavado nasal)",
        vias: ["Lavado nasal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "mg/ml (volumen 20 ml/kg)"
        }
      },
      {
        indicacion: "Aspergilosis (Nebulización)",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2.5,
          dosis_min: 2,
          dosis_max: 3,
          unidad_calculo: "ml de sol. 1%"
        },
        duracion_tratamiento: "1 hora diaria",
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Lesiones fúngicas (Endoscópico)",
        vias: ["Tópica directa"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Micosis cutáneas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida a imidazoles.",
      "No usar en senos frontales si la placa cribiforme no está intacta."
    ],
    efectos_adversos: [
      "Irritación local transitoria.",
      "Hipersensibilidad cutánea."
    ],
    monitoreo_recomendado: [
      "Resolución de lesiones",
      "Estado de la mucosa nasal en infusiones"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Irritación local severa"],
      tratamiento: "Lavar con abundante agua limpia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Altera la permeabilidad de la membrana fúngica al inhibir la síntesis de ergosterol.",
    farmacocinetica: "Acción tópica local con mínima absorción sistémica cutánea."
  },
  presentaciones_comerciales: [
    { tipo: "Crema tópica", concentracion_texto: "1% (10 mg/g)", valor_concentracion: 10, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Solución tópica", concentracion_texto: "1% (10 mg/ml)", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};