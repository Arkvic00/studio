import type { Drug } from '@/lib/types';

export const clonidineDrug: Drug = {
  id: "clonidine",
  meta_data: {
    nombre_generico: "Clonidina",
    nombres_comerciales: ["Catapres"],
    grupo_farmacologico: "Agonista alfa-2 adrenérgico central",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula la secreción de GHRH desde el hipotálamo.",
      "Utilizado como prueba diagnóstica para el enanismo hipofisario.",
      "Uso conductual táctico para respuestas de pánico y miedo.",
      "Efecto rápido (30 min) y de corta duración (3-4 h).",
      "Requiere retirada gradual para evitar hipertensión de rebote."
    ],
    usos_principales: "Prueba de estimulación de la hormona del crecimiento (GH) y manejo de miedos/pánicos en perros.",
    inicio_accion: "30 minutos",
    duracion_efecto: "3–4 horas"
  },
  informacion_cliente: [
    "Medicamento utilizado para miedos específicos o pruebas hormonales.",
    "Si se usa a largo plazo, no suspenda el medicamento de forma repentina.",
    "Puede causar una sedación pasajera.",
    "Informe si nota que el corazón de su perro late muy lento tras la dosis."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Prueba de estimulación de GH",
        vias: ["IV"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          dosis_min: 3,
          dosis_max: 10,
          unidad_calculo: "μg/kg"
        },
        frecuencia: { texto_ui: "Dosis única para la prueba", intervalo_horas: 0 },
        notas_tecnicas: "Consultar textos especialistas para el protocolo exacto del test. Medir IGF-1 puede ser una alternativa de tamizaje."
      },
      {
        indicacion: "Modificación de conducta (Miedo/Pánico)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.03,
          dosis_min: 0.01,
          dosis_max: 0.05,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Según sea necesario (hasta q12h)",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Uso con extrema precaución en enfermedad renal o cardiovascular severa."
    ],
    efectos_adversos: [
      "Sedación transitoria.",
      "Bradicardia (latido lento).",
      "Hipertensión de rebote si se retira bruscamente."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Presión arterial",
      "Respuesta conductual"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Sedación profunda", "Bradicardia severa", "Hipotensión"],
      tratamiento: "Soporte cardiovascular; atipamezol puede considerarse para revertir efectos alfa-2."
    },
    interacciones_farmacologicas: [
      { farmaco: "Beta-bloqueadores", efecto: "Riesgo de bradicardia e hipotensión severa.", severidad: "Importante" },
      { farmaco: "Opiáceos / Barbitúricos", efecto: "Potenciación de la sedación.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de los receptores alfa-2 adrenérgicos presinápticos en el tallo cerebral, reduciendo el flujo simpático.",
    farmacocinetica: "Absorción oral rápida."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "25 μg", valor_concentracion: 0.025, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Inyectable", concentracion_texto: "150 μg/ml", valor_concentracion: 0.15, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
