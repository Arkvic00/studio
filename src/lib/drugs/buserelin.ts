import type { Drug } from '@/lib/types';

export const buserelinDrug: Drug = {
  id: "buserelin",
  meta_data: {
    nombre_generico: "Buserelina",
    nombres_comerciales: ["Busol", "Fertigest", "Receptal", "Veterelin"],
    grupo_farmacologico: "Análogo sintético de la GnRH (Hormona liberadora de gonadotropinas)",
    status_regulatorio: "POM-V. Autorizado para conejos y truchas."
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo sintético de la GnRH que estimula la producción de LH y FSH.",
      "Induce y progresa el estro.",
      "Autorizado en conejos para mejorar la tasa de concepción e inducción de ovulación.",
      "En machos, estimula la secreción de testosterona (útil en hipoplasia genital y libido baja).",
      "En aves, se usa para la puesta crónica de huevos (combinado con cambios de manejo).",
      "En truchas, facilita el desove (stripping) y reduce mortalidad por retención de huevos."
    ],
    usos_principales: "Inducción de ovulación, mejora de tasas de concepción, manejo de quistes ováricos (cobayas) y control de puesta crónica en aves.",
    inicio_accion: "Rápido (estimulación hormonal)",
    duracion_efecto: "Corta"
  },
  informacion_cliente: [
    "Las personas embarazadas o que sospechen estarlo NO deben manipular este fármaco.",
    "El fármaco se administra mediante inyección.",
    "En aves, es fundamental realizar cambios en el entorno y manejo para que el tratamiento sea efectivo."
  ],
  parametros_dosificacion: {
    huron: [
      {
        indicacion: "Manejo de signos de estro",
        vias: ["IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          unidad_calculo: "μg/hurón"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 2 días",
          intervalo_horas: 24
        }
      }
    ],
    conejo: [
      {
        indicacion: "Inducción de ovulación / Mejora de concepción",
        vias: ["SC"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.8,
          unidad_calculo: "μg/conejo"
        },
        notas_tecnicas: "Administrar al momento de la inseminación o monta."
      }
    ],
    cobaya: [
      {
        indicacion: "Quistes ováricos",
        vias: ["IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 25,
          unidad_calculo: "μg/cobaya"
        },
        frecuencia: {
          texto_ui: "Repetir en 2 semanas",
          intervalo_horas: 336
        }
      }
    ],
    ave: [
      {
        indicacion: "Puesta crónica de huevos",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "μg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 48 horas (hasta 3 veces)",
          intervalo_horas: 48
        }
      }
    ],
    peces: [
      {
        indicacion: "Facilitar desove (Truchas)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 3,
          dosis_max: 4,
          unidad_calculo: "μg/kg"
        },
        notas_tecnicas: "Realizar el desove manual (strip) 2 a 3 días después de la inyección."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay información específica de contraindicaciones absolutas."
    ],
    efectos_adversos: [
      "Reacciones anafilácticas ocasionales."
    ],
    instrucciones_manejo: "PELIGRO: Las personas embarazadas NO deben manipular este producto.",
    sobredosis: {
      signos: ["No especificados; potencial desequilibrio hormonal"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Análogo sintético de la hormona liberadora de gonadotropinas (GnRH). Estimula la liberación de LH y FSH desde la pituitaria anterior.",
    farmacocinetica: "Absorción rápida tras administración parenteral."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "4 μg/ml",
      valor_concentracion: 4,
      unidad_concentracion: "μg/ml",
      es_divisible: false
    }
  ]
};