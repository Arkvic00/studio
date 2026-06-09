import type { Drug } from '@/lib/types';

export const hyaluronateDrug: Drug = {
  id: "hyaluronate",
  meta_data: {
    nombre_generico: "Hialuronato Sódico (Ácido hialurónico)",
    nombres_comerciales: ["An-HyPro", "ClinaDry", "Remend", "Hyabak", "Hylo-Forte", "Vismed"],
    grupo_farmacologico: "Sustituto lagrimal; Agente viscoelástico",
    status_regulatorio: "Venta libre (P)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Fluido viscoelástico con propiedades mucomiméticas.",
      "Aumenta la migración epitelial corneal, favoreciendo la reparación de úlceras.",
      "Tiempo de contacto corneal superior a los sustitutos acuosos simples.",
      "Utilizado como lubricante y en cirugía intraocular (formulaciones específicas).",
      "Excelente tolerancia tisular."
    ],
    usos_principales: "Tratamiento de la queratoconjuntivitis seca (KCS), ojo seco cualitativo y lubricación corneal en traumatismos.",
    inicio_accion: "Inmediato (tópico)",
    duracion_efecto: "Prolongada (4 a 6 horas)"
  },
  informacion_cliente: [
    "Aplique las gotas según el horario indicado para mantener el ojo húmedo y sin dolor.",
    "Puede usarse con tanta frecuencia como sea necesario (incluso cada hora en casos graves).",
    "No permita que la punta del envase toque el ojo.",
    "Informe si nota que el ojo se ve más irritado tras la aplicación (muy inusual)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ojo seco / Reparación corneal",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 6 horas (puede usarse cada hora)",
          intervalo_horas: 4
        }
      }
    ],
    gato: [
      {
        indicacion: "Ojo seco / Queratitis",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 6 horas",
          intervalo_horas: 4
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Ninguna conocida."
    ],
    efectos_adversos: [
      "Visión borrosa momentánea tras la aplicación.",
      "Irritación local leve (extremadamente rara)."
    ],
    monitoreo_recomendado: [
      "Integridad de la superficie corneal (Test de fluoresceína)",
      "Producción de lágrima (Test de Schirmer)"
    ],
    instrucciones_manejo: "Observar precauciones de esterilidad. Las presentaciones sin conservantes son preferibles para uso crónico.",
    sobredosis: {
      signos: ["No aplica"],
      tratamiento: "No requerido."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Polímero de cadena larga que retiene grandes cantidades de agua en la superficie ocular y actúa como andamio para la migración celular.",
    farmacocinetica: "Acción tópica local."
  },
  presentaciones_comerciales: [
    { tipo: "Gotas oftálmicas", concentracion_texto: "0.1% a 0.4%", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Gel de reparación (Remend)", concentracion_texto: "0.4% a 0.75%", valor_concentracion: 4, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
