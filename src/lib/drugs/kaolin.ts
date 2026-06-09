import type { Drug } from '@/lib/types';

export const kaolinDrug: Drug = {
  id: "kaolin",
  meta_data: {
    nombre_generico: "Kaolín (Caolín)",
    nombres_comerciales: ["Kaogel VP", "Prokolin"],
    grupo_farmacologico: "Adsorbente antidiarréico",
    status_regulatorio: "AVM-GSL, Venta libre"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente adsorbente que mejora la consistencia de las heces.",
      "Posible efecto antisecretor.",
      "No corrige el balance hídrico ni acorta la morbilidad de forma probada.",
      "Útil en diarreas de origen inespecífico.",
      "En aves, establecer si el cuadro es diarrea verdadera o poliuria antes de tratar."
    ],
    usos_principales: "Tratamiento de diarreas inespecíficas en perros, gatos, aves y pequeños mamíferos.",
    inicio_accion: "Rápido (acción local)",
    duracion_efecto: "Durante el tránsito intestinal"
  },
  informacion_cliente: [
    "Ayuda a que las heces sean más firmes pero no trata la causa subyacente de la diarrea.",
    "Asegúrese de que su mascota tenga acceso a abundante agua.",
    "No administrar si sospecha que el animal ha tragado un objeto extraño (obstrucción).",
    "Espacie la administración de otros medicamentos orales al menos 2 horas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Diarrea inespecífica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Dosis diaria total (puede dividirse q6-8h)", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Diarrea inespecífica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Dosis diaria total dividida", intervalo_horas: 24 }
      }
    ],
    huron: [
      {
        indicacion: "Diarrea (Kaolin/Pectina)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Cada 2 a 6 horas", intervalo_horas: 4 }
      }
    ],
    roedores: [
      {
        indicacion: "Hámsteres: Diarrea",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Cada 2 a 6 horas", intervalo_horas: 4 }
      }
    ],
    primates: [
      {
        indicacion: "Diarrea",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Cada 2 a 6 horas", intervalo_horas: 4 }
      }
    ],
    ave: [
      {
        indicacion: "Diarrea (Kaolin/Pectina)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción intestinal mecánica.",
      "Perforación gastrointestinal."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡NO RECOMENDADO!: Riesgo de disminuir la motilidad gastrointestinal y agravar el íleo.",
      "Cobaya": "¡NO RECOMENDADO!: Riesgo de disminuir la motilidad GI.",
      "Chinchilla": "¡NO RECOMENDADO!: Riesgo de disminuir la motilidad GI."
    },
    efectos_adversos: [
      "Estreñimiento (si se abusa).",
      "Reducción de la absorción de otros fármacos orales."
    ],
    monitoreo_recomendado: [
      "Consistencia de las heces",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Agitar bien antes de usar.",
    sobredosis: {
      signos: ["Estreñimiento severo", "Impactación fecal"],
      tratamiento: "Suspensión del fármaco y fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Lincomicina / Trimetoprim / Sulfonamidas", efecto: "El kaolín disminuye significativamente su absorción oral.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Adsorbe toxinas, bacterias y fluidos en el lumen intestinal. Protege la mucosa irritada.",
    farmacocinetica: "No se absorbe sistémicamente; se elimina íntegramente por las heces."
  },
  presentaciones_comerciales: [
    {
      tipo: "Suspensión oral",
      concentracion_texto: "198 mg/ml (0.99g / 5ml)",
      valor_concentracion: 198,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
