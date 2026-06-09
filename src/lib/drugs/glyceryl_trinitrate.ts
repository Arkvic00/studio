import type { Drug } from '@/lib/types';

export const glycerylTrinitrateDrug: Drug = {
  id: "glyceryl_trinitrate",
  meta_data: {
    nombre_generico: "Trinitrato de Glicerilo (Nitroglicerina)",
    nombres_comerciales: ["Percutol", "Deponit", "Minitran", "Glytrin"],
    grupo_farmacologico: "Vasodilatador sistémico (Nitratos)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potente venodilatador que reduce el retorno venoso al corazón (precarga).",
      "Disminuye las presiones de llenado del ventrículo izquierdo.",
      "Uso principal: manejo a corto plazo (1-2 días) del edema pulmonar agudo.",
      "Eficacia debatible en uso crónico debido al desarrollo de tolerancia (taquifilaxia).",
      "Se absorbe rápidamente a través de la piel intacta."
    ],
    usos_principales: "Manejo de emergencia del edema cardiogénico y falla cardíaca congestiva.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "6 a 8 horas (pomada)"
  },
  informacion_cliente: [
    "¡PRECAUCIÓN!: Use siempre guantes para aplicar la pomada; si entra en contacto con su piel, puede causarle fuertes dolores de cabeza e hipotensión.",
    "No toque la zona donde se aplicó el medicamento en su mascota.",
    "Rotar el sitio de aplicación (orejas, tórax, ingle).",
    "Limpiar bien la zona antes de la siguiente aplicación."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Edema pulmonar agudo (Pomada 2%)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 25,
          dosis_min: 6,
          dosis_max: 50,
          unidad_calculo: "mm de pomada (1/4 a 1 pulgada)"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas por 1-2 días",
          intervalo_horas: 6
        },
        notas_tecnicas: "Dosis aproximada de 800 μg/kg/h por cada pulgada de pomada aplicada. Monitorear presión arterial."
      },
      {
        indicacion: "Manejo crónico (Parches)",
        vias: ["Tópica (Parche)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Parche según peso (5mg para <5kg; 10mg para medianos/grandes)"
        },
        frecuencia: { texto_ui: "Cambiar cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Edema pulmonar agudo",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 6,
          dosis_min: 3,
          dosis_max: 6,
          unidad_calculo: "mm de pomada (1/4 pulgada)"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas",
          intervalo_horas: 8
        }
      }
    ],
    huron: [
      {
        indicacion: "Falla cardíaca",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 3,
          unidad_calculo: "mm de pomada"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ],
    roedores: [
      {
        indicacion: "Dosis general cardíaca",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3,
          unidad_calculo: "mm de pomada"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 8
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipotensión sistémica.",
      "Hipovolemia (deshidratación severa).",
      "Hemorragia cerebral o trauma craneal.",
      "Taponamiento cardíaco."
    ],
    efectos_adversos: [
      "Hipotensión profunda.",
      "Taquicardia compensatoria.",
      "Erupción cutánea en el sitio de aplicación.",
      "Dolor de cabeza (inferido de humanos).",
      "Taquifilaxia (pérdida de efecto rápido)."
    ],
    monitoreo_recomendado: [
      "Presión arterial sistémica (crítico)",
      "Frecuencia cardíaca",
      "Esfuerzo respiratorio"
    ],
    instrucciones_manejo: "EL PERSONAL DEBE USAR GUANTES NO PERMEABLES. Frotar bien la pomada en la piel. Proteger de la luz.",
    sobredosis: {
      signos: ["Hipotensión severa", "Síncope", "Colapso"],
      tratamiento: "Limpiar restos de pomada de la piel. Elevar extremidades/tren posterior. Fluidoterapia si es necesario."
    },
    interacciones_farmacologicas: [
      { farmaco: "IECAs / Beta-bloqueadores / Diuréticos", efecto: "Efecto hipotensor aditivo marcado.", severidad: "Importante" },
      { farmaco: "AINEs", efecto: "Pueden antagonizar los efectos hipotensores de los nitratos.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se convierte en óxido nítrico, que activa la guanilato ciclasa y aumenta el GMP cíclico, provocando la relajación del músculo liso vascular (principalmente venoso).",
    farmacocinetica: "Absorción cutánea rápida. Metabolismo hepático de primer paso muy extenso (por eso no se usa vía oral estándar)."
  },
  presentaciones_comerciales: [
    {
      tipo: "Pomada tópica",
      concentracion_texto: "2% (Percutol)",
      valor_concentracion: 20,
      unidad_concentracion: "mg/g",
      es_divisible: false
    },
    {
      tipo: "Parches transdérmicos",
      concentracion_texto: "5 mg a 15 mg / 24h",
      valor_concentracion: 1,
      unidad_concentracion: "parche",
      es_divisible: false
    }
  ]
};
