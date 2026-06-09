import type { Drug } from '@/lib/types';

export const melatoninDrug: Drug = {
  id: "melatonin",
  meta_data: {
    nombre_generico: "Melatonina",
    nombres_comerciales: ["Circadin"],
    grupo_farmacologico: "Hormona pineal",
    status_regulatorio: "POM / OTC"
  },
  resumen_clinico: {
    puntos_clave: [
      "Hormona involucrada en el control neuroendocrino de los ritmos circadianos y la muda estacional.",
      "Utilizada para trastornos del ciclo del pelo en perros.",
      "Tratamiento paliativo eficaz para la enfermedad adrenal en hurones.",
      "Efecto variable; evaluar respuesta tras 4-6 semanas de tratamiento.",
      "Posee un alto perfil de seguridad clínica."
    ],
    usos_principales: "Tratamiento de la alopecia estacional de los flancos y alopecia X en perros. Manejo de la enfermedad adrenal en hurones.",
    inicio_accion: "Lento (semanas para crecimiento de pelo)",
    duracion_efecto: "Requiere administración diaria"
  },
  informacion_cliente: [
    "Medicamento para ayudar a que el pelo vuelva a crecer.",
    "En hurones, ayuda a reducir los síntomas del problema de las glándulas adrenales.",
    "Si no se observa crecimiento tras 6 semanas, el veterinario suspenderá el tratamiento.",
    "Existen muchas presentaciones de venta libre, pero consulte siempre la dosis correcta."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Alopecia estacional / Alopecia X",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 4.5,
          dosis_min: 3,
          dosis_max: 6,
          unidad_calculo: "mg/perro"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "Dosis empírica. La biodisponibilidad oral en perros es desconocida. Evaluar tras 6 semanas."
      }
    ],
    huron: [
      {
        indicacion: "Enfermedad Adrenal (Paliativo)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/hurón"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas reportadas."
    ],
    efectos_adversos: [
      "Sedación leve (muy poco frecuente).",
      "Trastornos digestivos esporádicos."
    ],
    monitoreo_recomendado: [
      "Crecimiento del pelaje",
      "Estado clínico en hurones"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Letargo", "Somnolencia"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Modula la liberación de hormonas hipofisarias y suprarrenales, influyendo en los receptores del folículo piloso.",
    farmacocinetica: "Absorción oral rápida. Vida media corta."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "2 mg, 3 mg",
      valor_concentracion: 2,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
