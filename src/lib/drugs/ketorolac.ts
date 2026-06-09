import type { Drug } from '@/lib/types';

export const ketorolacDrug: Drug = {
  id: "ketorolac",
  meta_data: {
    nombre_generico: "Ketorolaco (Ketorolaco trometamol)",
    nombres_comerciales: ["Acular"],
    grupo_farmacologico: "AINE oftálmico; Inhibidor de COX",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor de la COX que reduce la producción de prostaglandinas inflamatorias.",
      "Utilizado para uveítis anterior y queratitis ulcerativa cuando los corticoides están contraindicados.",
      "Puede aumentar la presión intraocular; usar con precaución en glaucoma.",
      "Puede retrasar la cicatrización epitelial de la córnea."
    ],
    usos_principales: "Tratamiento de la uveítis anterior y queratitis ulcerativa.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Corta (requiere dosis frecuentes)"
  },
  informacion_cliente: [
    "Administre las gotas según el horario indicado por su veterinario.",
    "Informe si nota irritación excesiva o si el ojo parece más doloroso.",
    "Use con precaución si su mascota tiene glaucoma.",
    "No permita que la punta del aplicador toque el ojo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Uveítis anterior / Queratitis ulcerativa",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 24 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Uveítis anterior / Queratitis ulcerativa",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 24 horas",
          intervalo_horas: 12
        }
      }
    ],
    ave: [
      {
        indicacion: "Inflamación ocular",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    reptil: [
      {
        indicacion: "Uso sistémico (Tortugas de caja)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
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
      "Hipersensibilidad a los AINEs.",
      "Glaucoma no controlado (usar con precaución)."
    ],
    efectos_adversos: [
      "Irritación local.",
      "Retraso en la cicatrización epitelial corneal.",
      "Riesgo de 'melting' corneal (keratomalacia)."
    ],
    monitoreo_recomendado: [
      "Presión intraocular",
      "Integridad de la superficie corneal"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Irritación ocular marcada"],
      tratamiento: "Lavar con abundante salino estéril."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides tópicos", efecto: "Riesgo de precipitar problemas corneales.", severidad: "Importante" },
      { farmaco: "Gentamicina", efecto: "Puede aumentar la penetración del AINE al dañar el epitelio.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la ciclooxigenasa (COX) que reduce la producción de prostaglandinas mediadoras de la inflamación.",
    farmacocinetica: "Acción tópica local con penetración corneal efectiva."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución oftálmica",
      concentracion_texto: "0.5% (5 mg/ml)",
      valor_concentracion: 5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};