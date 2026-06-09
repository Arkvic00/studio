import type { Drug } from '@/lib/types';

export const amantadinaDrug: Drug = {
  id: "amantadina",
  meta_data: {
    nombre_generico: "Amantadina",
    nombres_comerciales: ["Lysovir", "Symmetrel"],
    grupo_farmacologico: "Antagonista NMDA; Analgésico adyuvante; Antiviral",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Proporciona analgesia a través de la acción antagonista de los receptores NMDA.",
      "Potencia los efectos de otros analgésicos.",
      "Analgésico adyuvante en animales que no responden a los opioides o requieren alivio del dolor crónico en casa.",
      "Actividad antiviral propuesta para influenza aviar e infecciones por bornavirus.",
      "En aves, se utiliza para la enfermedad de dilatación proventricular (PDD)."
    ],
    usos_principales: "Manejo del dolor crónico (osteoartritis, dolor oncológico) en perros y gatos. Tratamiento de PDD en loros. Analgesia para dolor neuropático en pequeños mamíferos.",
    inicio_accion: "No especificado",
    duracion_efecto: "Requiere administración diaria (q24h)"
  },
  informacion_cliente: [
    "Vigilar posibles efectos secundarios digestivos o nerviosos (aunque son raros en animales).",
    "En gatos, el tratamiento debe comenzar con la dosis más baja e incrementarse lentamente.",
    "No se recomienda como analgésico de primera línea en aves debido a la falta de estudios de eficacia."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dolor Crónico / Osteoartritis (Adyuvante)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          dosis_min: 3,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Útil en perros refractarios a los AINEs; mejora la actividad física en casos de osteoartritis clínica."
      }
    ],
    gato: [
      {
        indicacion: "Dolor Crónico (Adyuvante)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 1,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "ADVERTENCIA: Recomendación anecdótica. Iniciar con la dosis más baja e incrementar lentamente según respuesta."
      }
    ],
    huron: [
      {
        indicacion: "Analgésico adyuvante",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          dosis_min: 3,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    conejo: [
      {
        indicacion: "Dolor Neuropático",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          dosis_min: 3,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    roedores: [
      {
        indicacion: "Dolor Neuropático",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          dosis_min: 3,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    ave: [
      {
        indicacion: "Dosis general / Analgesia adyuvante",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "No se recomienda como analgésico de primera línea. Su uso principal es sintomático."
      },
      {
        indicacion: "Loro Amazona de ala naranja: Analgesia / PDD",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
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
      "No hay información específica de contraindicaciones absolutas."
    ],
    precauciones: [
      "Se excreta por vía renal; es probable que se acumule en animales con disfunción renal. Usar con extrema precaución en estos pacientes."
    ],
    efectos_adversos: [
      "En humanos: efectos gastrointestinales y del SNC menores (insomnio, mareos). No han sido reportados formalmente en animales domésticos."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) en tratamientos prolongados o animales geriátricos.",
      "Control del dolor crónico para ajuste de dosis."
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Potencial aumento de efectos neurológicos"],
      tratamiento: "Soporte sintomático y favorecer eliminación renal si es posible."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista de los receptores NMDA (N-metil-D-aspartato), modulando la sensibilización central al dolor.",
    farmacocinetica: "Excreción renal predominante. Farmacocinética estudiada en loros de ala naranja."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula oral",
      concentracion_texto: "100 mg",
      valor_concentracion: 100,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Jarabe / Solución oral",
      concentracion_texto: "10 mg/ml",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};