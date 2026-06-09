import type { Drug } from '@/lib/types';

export const nicotinamideDrug: Drug = {
  id: "nicotinamide",
  meta_data: {
    nombre_generico: "Nicotinamida (Niacinamida, Vitamina B3)",
    nombres_comerciales: ["Niacinamide*"],
    grupo_farmacologico: "Inmunomodulador; Vitamina B3",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea la liberación de histamina inducida por antígenos.",
      "Inhibe la actividad de la fosfodiesterasa y la liberación de proteasas.",
      "Se utiliza casi exclusivamente en combinación con tetraciclinas (ej. Doxiciclina).",
      "Terapia adyuvante para dermatopatías inmunomediadas.",
      "No confundir con el ácido nicotínico (Niacina), que causa vasodilatación intensa."
    ],
    usos_principales: "Tratamiento de la onicodistrofia lupoide, lupus eritematoso discoide y pénfigo foliáceo (adyuvante).",
    inicio_accion: "Lento (mejoría clínica en 4-8 semanas)",
    duracion_efecto: "Requiere administración cada 8 horas"
  },
  informacion_cliente: [
    "Informe si nota vómitos o falta de apetito (efectos digestivos leves comunes).",
    "El medicamento debe darse 3 veces al día para que sea efectivo.",
    "Asegúrese de comprar Nicotinamida (Niacinamida), no Ácido Nicotínico.",
    "Los resultados tardan varias semanas en ser visibles."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Inmunomodulación (Perro hasta 25 kg)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 250,
          unidad_calculo: "mg/perro"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 },
        notas_tecnicas: "Reducir dosis según respuesta. Combinar con Doxiciclina (5 mg/kg q12h) o Tetraciclina."
      },
      {
        indicacion: "Inmunomodulación (Perro >25 kg)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 500,
          unidad_calculo: "mg/perro"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No utilizar Ácido Nicotínico (Niacina) como sustituto (causa eritema y prurito marcado)."
    ],
    efectos_adversos: [
      "Irritación gastrointestinal leve (vómitos, anorexia).",
      "Letargo transitorio.",
      "Convulsiones (reporte muy raro)."
    ],
    monitoreo_recomendado: [
      "Estado de las uñas y piel",
      "Tolerancia digestiva"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Vómitos", "Letargo"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Tetraciclinas", efecto: "Sinergia terapéutica en dermatopatías inmunomediadas.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Modula la respuesta inflamatoria mediante la inhibición de la degranulación de mastocitos y la supresión de la cascada del complemento.",
    farmacocinetica: "Absorción oral rápida."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "50 mg, 100 mg, 250 mg, 500 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true }
  ]
};