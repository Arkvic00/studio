import type { Drug } from '@/lib/types';

export const chorionicGonadotrophinDrug: Drug = {
  id: "chorionic_gonadotrophin",
  meta_data: {
    nombre_generico: "Gonadotropina Coriónica (hCG)",
    nombres_comerciales: ["Chorulon"],
    grupo_farmacologico: "Análogo de la Hormona Luteinizante (LH)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Induce la maduración folicular, la ovulación y el desarrollo del cuerpo lúteo en hembras.",
      "Estimula la secreción de testosterona en machos.",
      "Útil en el tratamiento del estro persistente en hurones.",
      "Puede ayudar en la resolución de quistes ováricos en cobayas.",
      "En aves, se utiliza para inhibir la puesta crónica de huevos.",
      "En anfibios, se emplea para la inducción de la reproducción y liberación de esperma."
    ],
    usos_principales: "Inducción de la ovulación, tratamiento de fallos en la concepción, manejo de quistes ováricos, estimulación de la libido masculina y control de la puesta crónica en aves.",
    inicio_accion: "Rápido (estimulación hormonal)",
    duracion_efecto: "Corta (requiere protocolos específicos)"
  },
  informacion_cliente: [
    "El medicamento debe desecharse 24 horas después de su preparación, ya que no contiene conservantes.",
    "Se administra mediante inyección realizada por un profesional.",
    "En machos, puede aumentar la agresividad sin mejorar necesariamente el deseo sexual.",
    "Informe inmediatamente si nota hinchazón en la cara o dificultad para respirar tras la inyección (reacción alérgica rara)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ovulación retrasada",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 22,
          dosis_min: 22,
          dosis_max: 44,
          unidad_calculo: "IU/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24–48h (o dosis única de 44 IU/kg)",
          intervalo_horas: 24
        },
        notas_tecnicas: "Realizar la monta al observar celo conductual."
      },
      {
        indicacion: "Deficiencia de libido masculina",
        vias: ["IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 300,
          dosis_min: 100,
          dosis_max: 500,
          unidad_calculo: "IU/perro"
        },
        frecuencia: {
          texto_ui: "Dos veces por semana hasta por 6 semanas",
          intervalo_horas: 84
        }
      }
    ],
    gato: [
      {
        indicacion: "Inducción de la ovulación",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 22,
          dosis_min: 22,
          dosis_max: 44,
          unidad_calculo: "IU/kg"
        }
      }
    ],
    huron: [
      {
        indicacion: "Tratamiento de estro persistente",
        vias: ["IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 100,
          unidad_calculo: "IU/hurón"
        },
        frecuencia: {
          texto_ui: "Cada 14 días por 2 dosis",
          intervalo_horas: 336
        }
      }
    ],
    conejo: [
      {
        indicacion: "Inducción de la ovulación",
        vias: ["IV"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 22.5,
          dosis_min: 20,
          dosis_max: 25,
          unidad_calculo: "IU/conejo"
        },
        frecuencia: {
          texto_ui: "Dosis única",
          intervalo_horas: 0
        }
      }
    ],
    cobaya: [
      {
        indicacion: "Resolución de quistes ováricos",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "IU/kg"
        },
        frecuencia: {
          texto_ui: "Semanalmente por 3 dosis",
          intervalo_horas: 168
        }
      }
    ],
    primates: [
      {
        indicacion: "Uso general reproductivo",
        vias: ["IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 250,
          unidad_calculo: "IU/animal"
        },
        frecuencia: {
          texto_ui: "Dosis única",
          intervalo_horas: 0
        }
      }
    ],
    ave: [
      {
        indicacion: "Inhibición de la puesta de huevos",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 750,
          dosis_min: 500,
          dosis_max: 1000,
          unidad_calculo: "IU/kg"
        },
        frecuencia: {
          texto_ui: "Días 1, 3 y 7; repetir cada 3-6 semanas",
          intervalo_horas: 0
        }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Inducción de reproducción / Liberación de esperma",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 350,
          dosis_min: 300,
          dosis_max: 400,
          unidad_calculo: "IU/animal"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida a las hormonas gonadotropinas."
    ],
    efectos_adversos: [
      "Reacciones anafilácticas (ocasionales).",
      "Aumento de la agresividad en machos.",
      "Inducción de resistencia inmunológica con el uso repetido (formación de anticuerpos)."
    ],
    monitoreo_recomendado: [
        "Respuesta clínica (ovulación, gestación)",
        "Signos de hipersensibilidad tras la inyección"
    ],
    instrucciones_manejo: "Usar inmediatamente tras la reconstitución. Desechar cualquier sobrante después de 24 horas.",
    sobredosis: {
      signos: ["Hiperestimulación ovárica", "Agresividad extrema"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Análogo de la Hormona Luteinizante (LH). En hembras promueve la ovulación y formación del cuerpo lúteo; en machos estimula a las células de Leydig para producir testosterona.",
    farmacocinetica: "Absorción rápida. Vida media corta en circulación sanguínea."
  },
  presentaciones_comerciales: [
    {
      tipo: "Polvo para reconstitución",
      concentracion_texto: "1500 IU",
      valor_concentracion: 1500,
      unidad_concentracion: "IU",
      es_divisible: false
    }
  ]
};