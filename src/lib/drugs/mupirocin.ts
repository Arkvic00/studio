import type { Drug } from '@/lib/types';

export const mupirocinDrug: Drug = {
  id: "mupirocin",
  meta_data: {
    nombre_generico: "Mupirocina",
    nombres_comerciales: ["Bactroban"],
    grupo_farmacologico: "Antibacteriano tópico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de proteínas al unirse a la isoleucil-tRNA sintetasa bacteriana.",
      "Excelente actividad contra Gram-positivos, especialmente Staphylococcus spp. y Streptococcus spp.",
      "Mínima absorción sistémica tras la aplicación tópica.",
      "Útil en el manejo de piodermas localizadas e infecciones en el sitio de salida de catéteres.",
      "No debe usarse en heridas abiertas grandes debido al riesgo de absorción de polietilenglicol (nefrotóxico)."
    ],
    usos_principales: "Tratamiento de piodermas superficiales localizadas e infecciones cutáneas bacterianas en perros y gatos.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Requiere aplicaciones cada 8 a 12 horas"
  },
  informacion_cliente: [
    "Aplique una capa fina sobre la zona afectada según lo indicado.",
    "Evite que el animal lama el producto inmediatamente después de la aplicación.",
    "No usar en los ojos ni cerca de ellos.",
    "Informe si nota irritación severa o enrojecimiento en el sitio de aplicación."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones cutáneas superficiales / Pioderma",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación local"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones cutáneas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación local"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a la mupirocina o a los polietilenglicoles.",
      "No aplicar en quemaduras extensas o heridas abiertas profundas."
    ],
    efectos_adversos: [
      "Irritación local, prurito o eritema transitorio.",
      "Riesgo de nefrotoxicidad por absorción de polietilenglicol en áreas extensas de piel dañada."
    ],
    monitoreo_recomendado: [
      "Evolución de las lesiones cutáneas",
      "Integridad de la piel tratada"
    ],
    instrucciones_manejo: "Usar guantes para la aplicación. Evitar el contacto con ojos y mucosas.",
    sobredosis: {
      signos: ["Irritación local marcada"],
      treatment: "Lavar el área con agua y jabón neutro."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une de forma reversible y específica a la isoleucil-tRNA sintetasa bacteriana, impidiendo la síntesis de proteínas.",
    farmacocinetica: "Acción puramente local con absorción sistémica insignificante a través de la piel intacta."
  },
  presentaciones_comerciales: [
    {
      tipo: "Ungüento tópico",
      concentracion_texto: "2% (20 mg/g)",
      valor_concentracion: 20,
      unidad_concentracion: "mg/g",
      es_divisible: false
    }
  ]
};
