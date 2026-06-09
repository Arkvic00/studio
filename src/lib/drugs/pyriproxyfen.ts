import type { Drug } from '@/lib/types';

export const pyriproxyfenDrug: Drug = {
  id: "pyriproxyfen",
  meta_data: {
    nombre_generico: "Piriproxifeno",
    nombres_comerciales: ["Indorex", "Vectra 3D", "Effipro Duo", "Indorex Spray"],
    grupo_farmacologico: "Regulador del crecimiento de insectos (IGR)",
    status_regulatorio: "POM-V, AVM-GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo de la hormona juvenil que detiene el desarrollo larvario.",
      "No mata pulgas adultas; previene la eclosión de huevos en el ambiente.",
      "Eficacia de hasta 12 meses en el hogar mediante sprays ambientales.",
      "A menudo combinado con adulticidas (fipronil, permetrina, dinotefuran).",
      "Mortal para peces y organismos acuáticos."
    ],
    usos_principales: "Control integral de la población de pulgas mediante la interrupción de su ciclo de vida.",
    inicio_accion: "Inmediato (preventivo)",
    duracion_efecto: "30 días (tópico); 12 meses (ambiental)"
  },
  informacion_cliente: [
    "Si usa el spray para la casa, mantenga alejados a aves y peces durante la aplicación.",
    "No use el spray de casa directamente sobre su mascota.",
    "Para que funcione bien, trate a todos los animales del hogar al mismo tiempo.",
    "Seguro para hembras preñadas si se usa en pipetas combinadas autorizadas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Control de Pulgas (Tópico)",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta según peso"
        },
        frecuencia: { texto_ui: "Cada 4 semanas", intervalo_horas: 672 }
      },
      {
        indicacion: "Control de Pulgas (Mezcla alimento)",
        vias: ["PO (Alimento)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Diariamente", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Control de Pulgas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Uso de sprays ambientales directamente sobre el animal.",
      "Uso de productos con permetrina en gatos (¡MORTAL!)."
    ],
    efectos_adversos: [
      "Generalmente nulos por sí solo.",
      "Irritación local en sitio de aplicación de pipetas combinadas.",
      "Toxicidad acuática severa."
    ],
    monitoreo_recomendado: [
      "Presencia de estadios inmaduros en el ambiente"
    ],
    instrucciones_manejo: "Evitar contaminar cursos de agua. Ventilar bien las habitaciones tras el uso del spray.",
    sobredosis: {
      signos: ["No reportados; alta seguridad clínica"],
      tratamiento: "No requerido."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Imita la hormona juvenil impidiendo que las larvas muden a estadios adultos y bloqueando la eclosión de los huevos.",
    farmacocinetica: "Se distribuye por las capas lipídicas superficiales."
  },
  presentaciones_comerciales: [
    { tipo: "Spray ambiental", concentracion_texto: "Variable (con Permetrina)", valor_concentracion: 1, unidad_concentracion: "unidad", es_divisible: false },
    { tipo: "Pipeta Spot-on", concentracion_texto: "Variable (con Fipronil)", valor_concentracion: 1, unidad_concentracion: "unidad", es_divisible: false },
    { tipo: "Pre-mezcla alimento (1%)", concentracion_texto: "10 mg/g", valor_concentracion: 10, unidad_concentracion: "mg/g", es_divisible: false }
  ]
};
