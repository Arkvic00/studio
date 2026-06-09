import type { Drug } from '@/lib/types';

export const antivenomAdderDrug: Drug = {
  id: "antivenom_adder",
  meta_data: {
    nombre_generico: "Antisuero (Víbora Europea)",
    nombres_comerciales: ["Antivenom (European Adder)"],
    grupo_farmacologico: "Inmunoglobulina (Antisuero)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inmunoglobulina específica contra el veneno de la Víbora Europea (Vipera berus).",
      "La eficacia disminuye con el tiempo transcurrido tras la mordedura.",
      "Beneficios sobre la inflamación local limitados a las primeras 24h.",
      "Beneficios sobre signos sistémicos pueden persistir incluso después de 24h.",
      "Es poco probable que sea eficaz contra mordeduras de otras especies de serpientes.",
      "No hay estudios concluyentes que demuestren una mejora en el tiempo de recuperación en animales pequeños."
    ],
    usos_principales: "Manejo de envenenamiento por mordedura de Víbora Europea (Adder) en perros y gatos.",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Variable"
  },
  informacion_cliente: [
    "Tratamiento de emergencia hospitalaria.",
    "El riesgo de reacciones alérgicas graves (anafilaxia) es alto; el animal será monitoreado intensivamente.",
    "Informe si nota jadeo excesivo, tos o hinchazón en la cara del animal durante la administración."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Envenenamiento por mordedura de víbora",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "ml (vial completo)"
        },
        notas_tecnicas: "Dosis fija independientemente del peso. Considerar administrar 0.5 ml IV primero y esperar 20 min para descartar anafilaxia antes de pasar el resto."
      }
    ],
    gato: [
      {
        indicacion: "Envenenamiento por mordedura de víbora",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "ml (vial completo)"
        },
        notas_tecnicas: "Dosis fija independientemente del peso. Prueba previa de 0.5 ml recomendada."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay información de contraindicaciones absolutas en emergencias vitales."
    ],
    efectos_adversos: [
      "Reacciones anafilácticas (graves).",
      "Edema facial (no relacionado con el sitio de la mordedura).",
      "Jadeo profundo.",
      "Tos improductiva."
    ],
    monitoreo_recomendado: [
      "Signos vitales durante la infusión",
      "Reacciones de hipersensibilidad (especialmente los primeros 30 min)",
      "Resolución de signos sistémicos"
    ],
    instrucciones_manejo: "Administrar por vía IV lenta. Tener preparado equipo de reanimación y adrenalina por riesgo de anafilaxia.",
    sobredosis: {
      signos: ["Aumento del riesgo de reacciones alérgicas"],
      tratamiento: "Soporte sintomático y manejo de hipersensibilidad."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inmunoglobulina que se une y neutraliza los componentes tóxicos del veneno de la víbora, impidiendo su interacción con los tejidos diana.",
    farmacocinetica: "Distribución rápida tras administración IV."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "100 mg/ml (Vial de 10 ml)",
      valor_concentracion: 100,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};