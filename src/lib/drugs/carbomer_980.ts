import type { Drug } from '@/lib/types';

export const carbomer980Drug: Drug = {
  id: "carbomer_980",
  meta_data: {
    nombre_generico: "Carbómero 980 (Ácido poliacrílico)",
    nombres_comerciales: ["Lubrithal", "Ocry-gel", "OptixCare", "Viscotears"],
    grupo_farmacologico: "Sustituto lagrimal; Mucinomimético",
    status_regulatorio: "Venta libre (P, GSL)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Sustituto lagrimal mucinomimético que reemplaza las capas acuosa y de mucina de la película lagrimal.",
      "Posee un tiempo de contacto corneal significativamente mayor que los sustitutos acuosos simples.",
      "Fundamental durante la anestesia para prevenir la desecación y úlceras corneales.",
      "Bien tolerado, con baja incidencia de irritación ocular."
    ],
    usos_principales: "Tratamiento de la queratoconjuntivitis seca (KCS) y lubricación ocular durante procedimientos bajo sedación o anestesia.",
    inicio_accion: "Inmediato (tópico)",
    duracion_efecto: "Prolongado (superior a la polivinilpirrolidona)"
  },
  informacion_cliente: [
    "Aplicar las gotas siguiendo estrictamente el horario para evitar el dolor por ojo seco.",
    "Durante recuperaciones anestésicas en casa, mantenga el ojo bien lubricado si el animal no parpadea normalmente.",
    "No permita que la punta del aplicador toque el ojo u otras superficies para evitar contaminación."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Queratoconjuntivitis seca (KCS) / Ojo seco",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recommended: 1,
          unidad_calculo: "gota por ojo"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 6 horas",
          intervalo_horas: 4
        }
      },
      {
        indicacion: "Protección ocular durante anestesia",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recommended: 1,
          unidad_calculo: "gota por ojo"
        },
        frecuencia: {
          texto_ui: "Cada 15 minutos",
          intervalo_horas: 0.25
        },
        notas_tecnicas: "Vital si se usa Ketamina (los ojos permanecen abiertos) o calentamiento con aire forzado."
      }
    ],
    gato: [
      {
        indicacion: "Sustitución lagrimal",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recommended: 1,
          unidad_calculo: "gota por ojo"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 6 horas",
          intervalo_horas: 6
        }
      },
      {
        indicacion: "Lubricación en anestesia",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recommended: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 15 minutos",
          intervalo_horas: 0.25
        }
      }
    ],
    huron: [
       {
        indicacion: "Lubricación ocular",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recommended: 1, unidad_calculo: "gota" },
        frecuencia: { texto_ui: "Cada 6-8 horas", intervalo_horas: 6 }
      }
    ],
    conejo: [
       {
        indicacion: "Lubricación ocular",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recommended: 1, unidad_calculo: "gota" },
        frecuencia: { texto_ui: "Cada 6-8 horas", intervalo_horas: 6 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No se han reportado contraindicaciones específicas."
    ],
    efectos_adversos: [
      "Irritación ocular leve (muy inusual).",
      "Visión borrosa transitoria tras la aplicación del gel."
    ],
    monitoreo_recomendado: [
      "Integridad de la superficie corneal (Test de Fluoresceína)",
      "Producción de lágrima (Test de Schirmer)"
    ],
    instrucciones_manejo: "Observar precauciones de esterilidad. Desechar viales monodosis tras un solo uso.",
    sobredosis: {
      signos: ["No reportados"],
      tratamiento: "No requerido."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Polímero de ácido poliacrílico que actúa como mucinomimético, adhiriéndose a la superficie corneal y reteniendo la capa acuosa de la película lagrimal.",
    farmacocinetica: "Acción puramente local. No se absorbe sistémicamente."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gel oftálmico",
      concentracion_texto: "0.2% - 0.25%",
      valor_concentracion: 0.2,
      unidad_concentracion: "%",
      es_divisible: false
    }
  ]
};
