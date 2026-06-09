import type { Drug } from '@/lib/types';

export const amproliumDrug: Drug = {
  id: "amprolium",
  meta_data: {
    nombre_generico: "Amprolio",
    nombres_comerciales: ["Harkers Pigeon Coccidiosis Treatment", "Amproline", "Coccibal", "Coxoid", "Eimeryl", "Surricoxx"],
    grupo_farmacologico: "Análogo de la tiamina; Antiprotozoario",
    status_regulatorio: "AVM-GSL, ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo de la tiamina que interrumpe el metabolismo de los protozoos.",
      "Limitado al tratamiento de la coccidiosis.",
      "La duración del tratamiento no debe exceder las 2 semanas.",
      "Dosis altas o prolongadas pueden inducir deficiencia de Vitamina B1 (tiamina)."
    ],
    usos_principales: "Tratamiento de la coccidiosis en perros, gatos, palomas de carrera y pequeños mamíferos (roedores, conejos, hurones).",
    inicio_accion: "Rápido",
    duracion_efecto: "Requiere administración diaria o según protocolo"
  },
  informacion_cliente: [
    "No administrar por más de 14 días seguidos para evitar problemas nutricionales.",
    "Si nota debilidad, parálisis o cambios en el caminar, suspenda el uso y contacte al veterinario inmediatamente.",
    "El agua con medicamento (en aves) debe prepararse fresca cada 24 horas.",
    "Evite dar suplementos vitamínicos que contengan Vitamina B1 durante el tratamiento, ya que anulan el efecto del fármaco."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Coccidiosis (Perro Adulto)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 250,
          dosis_min: 200,
          dosis_max: 300,
          unidad_calculo: "mg/perro"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 7 a 12 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Coccidiosis (Cachorro Pequeño)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 80,
          dosis_min: 60,
          dosis_max: 100,
          unidad_calculo: "mg/cachorro"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Coccidiosis (Cachorro Grande)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 200,
          unidad_calculo: "mg/cachorro"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Coccidiosis (Dosis fija)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 80,
          dosis_min: 60,
          dosis_max: 100,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 7 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Coccidiosis (Basado en peso)",
        vias: ["PO (en comida)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 165,
          dosis_min: 110,
          dosis_max: 220,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 7 a 12 días", intervalo_horas: 24 }
      }
    ],
    huron: [
      {
        indicacion: "Coccidiosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 19,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 72 horas", intervalo_horas: 72 }
      }
    ],
    conejo: [
      {
        indicacion: "Coccidiosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 2 a 4 semanas", intervalo_horas: 24 },
        notas_tecnicas: "La duración puede extenderse hasta 4 semanas bajo supervisión clínica."
      }
    ],
    roedores: [
      {
        indicacion: "Roedores y Chinchillas: Coccidiosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis diaria total (puede dividirse)", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Palomas: Coccidiosis (Agua de bebida)",
        vias: ["PO (Agua)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 6.2,
          unidad_calculo: "ml de solución por litro de agua"
        },
        notas_tecnicas: "Protocolo Harkers: 28 ml en 4.5 L de agua (6.2 ml/L) por 7 días. Brotes severos: continuar 7 días más con 14 ml en 4.5 L."
      },
      {
        indicacion: "Paseriformes: Coccidiosis (Agua de bebida)",
        vias: ["PO (Agua)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 75,
          dosis_min: 50,
          dosis_max: 100,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "5 días o más"
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Tratamientos superiores a 2 semanas (riesgo de hipovitaminosis B1).",
      "Administración concomitante de Tiamina (Vitamina B1)."
    ],
    efectos_adversos: [
      "Anorexia y depresión (especialmente en perros).",
      "Diarrea.",
      "Signos neurológicos por deficiencia de tiamina (ataxia, debilidad)."
    ],
    monitoreo_recomendado: [
      "Estado neurológico",
      "Ingesta de agua en aves"
    ],
    instrucciones_manejo: "El agua medicada debe descartarse cada 24 horas.",
    sobredosis: {
      signos: ["Signos neurológicos", "Debilidad extrema"],
      tratamiento: "Suspender el fármaco y administrar Vitamina B1 (tiamina) por vía parenteral."
    },
    interacciones_farmacologicas: [
      { farmaco: "Vitamina B1 (Tiamina)", efecto: "Antagonismo directo; reduce la eficacia del amprolio.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor competitivo del transporte de tiamina en los protozoos, impidiendo su desarrollo y metabolismo celular.",
    farmacocinetica: "Absorción sistémica baja, actuando principalmente a nivel intestinal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución oral",
      concentracion_texto: "3.84% (38.4 mg/ml)",
      valor_concentracion: 38.4,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};