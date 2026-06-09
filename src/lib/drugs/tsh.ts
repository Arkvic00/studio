import type { Drug } from '@/lib/types';

export const tshDrug: Drug = {
  id: "tsh",
  meta_data: {
    nombre_generico: "Tirotropina alfa (rhTSH)",
    nombres_comerciales: ["Thyrogen"],
    grupo_farmacologico: "Hormona estimulante de la tiroides; Diagnóstico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Hormona estimulante de la tiroides humana recombinante.",
      "Estimula la degradación de tiroglobulina y liberación de T4/T3.",
      "Estándar de oro para el diagnóstico de hipotiroidismo canino.",
      "Permite diferenciar hipotiroidismo verdadero de síndrome del eutiroideo enfermo.",
      "No es útil en animales que ya reciben levotiroxina."
    ],
    usos_principales: "Prueba de estimulación de TSH para el diagnóstico de hipotiroidismo en perros.",
    inicio_accion: "Rápido (pico de T4 en 4-6 horas)",
    duracion_efecto: "Corta"
  },
  informacion_cliente: [
    "Prueba de diagnóstico que requiere que el animal pase varias horas en la clínica.",
    "Se tomarán muestras de sangre antes y después de la inyección.",
    "Ayuda a confirmar si los niveles bajos de hormona se deben a la tiroides o a otra enfermedad.",
    "Muy seguro; raras veces hay efectos secundarios."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Prueba de estimulación de TSH",
        vias: ["IV"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 100,
          dosis_min: 50,
          dosis_max: 150,
          unidad_calculo: "μg (microgramos) por perro"
        },
        frecuencia: { texto_ui: "Dosis única para la prueba", intervalo_horas: 0 },
        notas_tecnicas: "Extraer sangre basal y a las 6 horas post-IV. Un fallo en el aumento de T4 confirma hipotiroidismo."
      }
    ],
    gato: [
      {
        indicacion: "Prueba diagnóstica",
        vias: ["IV"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 25,
          unidad_calculo: "μg/gato"
        },
        notas_tecnicas: "Valor diagnóstico en gatos aún bajo investigación."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas en el uso diagnóstico."
    ],
    efectos_adversos: [
      "Reacciones anafilácticas (extremadamente raras con rhTSH).",
      "Vómitos (inusual)."
    ],
    monitoreo_recomendado: [
      "Niveles de T4 total según protocolo",
      "Signos de hipersensibilidad inmediata"
    ],
    instrucciones_manejo: "Reconstituir y usar inmediatamente o congelar alícuotas para uso futuro.",
    sobredosis: {
      signos: ["Aumento transitorio excesivo de T4"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Glucocorticoides / Fenobarbital", efecto: "Pueden suprimir la respuesta al test.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estimula los receptores de TSH en las células foliculares tiroideas.",
    farmacocinetica: "Eliminación rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "1.1 mg (0.9 mg/ml reconstituido)",
      valor_concentracion: 0.9,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
