import type { Drug } from '@/lib/types';

export const miconazoleDrug: Drug = {
  id: "miconazole",
  meta_data: {
    nombre_generico: "Miconazol",
    nombres_comerciales: ["Adaxio", "Aurimic", "Easotic", "Malaseb", "Surolan", "Daktarin", "Mycozole"],
    grupo_farmacologico: "Antifúngico imidazólico",
    status_regulatorio: "POM-V, P, ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de ergosterol dependiente de citocromo P450.",
      "Activo contra Malassezia, Cryptococcus, Candida y Coccidioides.",
      "Útil en el tratamiento de dermatofitosis (tiñas) cutáneas.",
      "En gatos, el champú de miconazol requiere administración concurrente de itraconazol oral.",
      "Uso en anfibios para el tratamiento de la quitridiomicosis."
    ],
    usos_principales: "Tratamiento de infecciones fúngicas en piel y oídos, dermatofitosis y quitridiomicosis en anfibios.",
    inicio_accion: "Inmediato (tópico)",
    duracion_efecto: "Requiere aplicaciones cada 12 a 24 horas"
  },
  informacion_cliente: [
    "Si usa champús, deje actuar el producto de 5 a 10 minutos antes de enjuagar.",
    "Evite el contacto con los ojos de la mascota.",
    "En dermatofitosis, continúe el tratamiento 2 semanas después de la cura clínica y cultivos negativos.",
    "Para chinchillas, se puede añadir el polvo a sus baños de arena."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Otitis fúngica",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 7.5,
          dosis_min: 2,
          dosis_max: 12,
          unidad_calculo: "gotas según producto"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Dermatofitosis / Infecciones cutáneas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación fina"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Dermatitis por Malassezia (Champú)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "baño completo"
        },
        frecuencia: { texto_ui: "Dos veces por semana hasta remisión", intervalo_horas: 84 }
      }
    ],
    gato: [
      {
        indicacion: "Otitis fúngica",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 5,
          unidad_calculo: "gotas"
        }
      },
      {
        indicacion: "Microsporum canis (Champú)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "baño (con Itraconazol oral)"
        },
        frecuencia: { texto_ui: "Dos veces por semana (6-10 semanas)", intervalo_horas: 84 }
      }
    ],
    conejo: [
      {
        indicacion: "Otitis fúngica",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 7,
          dosis_min: 2,
          dosis_max: 12,
          unidad_calculo: "gotas"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Chinchillas: Dermatofitosis",
        vias: ["Tópica (baño de arena)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "cucharadita de polvo por baño"
        }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Quitridiomicosis",
        vias: ["Tópica", "Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.01,
          unidad_calculo: "% (Solución para baño)"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida a imidazoles."
    ],
    efectos_adversos: [
      "Irritación local leve en raras ocasiones."
    ],
    monitoreo_recomendado: [
      "Cultivos fúngicos de control",
      "Estado de la piel y canal auditivo"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Irritación local marcada"],
      tratamiento: "Lavar con agua limpia; soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Altera la permeabilidad de la membrana fúngica al inhibir la síntesis de ergosterol.",
    farmacocinetica: "Acción tópica local con mínima absorción sistémica."
  },
  presentaciones_comerciales: [
    { tipo: "Champú", concentracion_texto: "2%", valor_concentracion: 20, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Crema / Polvo", concentracion_texto: "2%", valor_concentracion: 20, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Suspensión ótica (Easotic)", concentracion_texto: "15.1 mg/ml (+ Gentam./Hidroc.)", valor_concentracion: 15.1, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Suspensión ótica (Surolan)", concentracion_texto: "23 mg/ml (+ Polimix./Pred.)", valor_concentracion: 23, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
