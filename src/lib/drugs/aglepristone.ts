import type { Drug } from '@/lib/types';

export const aglepristoneDrug: Drug = {
  id: "aglepristone",
  meta_data: {
    nombre_generico: "Aglepristona",
    nombres_comerciales: ["Alizin"],
    grupo_farmacologico: "Bloqueador del receptor de progesterona",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "El bloqueo de los receptores de progesterona conduce a la eliminación del soporte de progesterona por hasta 7 días.",
      "Se utiliza para la interrupción de la gestación en cualquier etapa.",
      "Tratamiento de la piometra en perros (la recurrencia es frecuente, especialmente en perras mayores).",
      "Inducción del parto en gatos y perros.",
      "Tratamiento de la acromegalia inducida por progesterona en perros e hiperplasia mamaria fibroadenomatosa en gatos."
    ],
    usos_principales: "Interrupción de la gestación, tratamiento de piometra, inducción al parto y manejo de condiciones dependientes de progesterona (acromegalia/hiperplasia mamaria).",
    inicio_accion: "Bloqueo receptor inmediato",
    duracion_efecto: "Soporte de progesterona eliminado por hasta 7 días"
  },
  informacion_cliente: [
    "La inyección accidental es un riesgo para mujeres embarazadas o que planeen estarlo. Manejar con extrema precaución.",
    "En perras gestantes confirmadas, puede ocurrir un aborto parcial en hasta el 5% de los casos.",
    "Se recomienda un examen clínico (ecografía) 10 días después del tratamiento para confirmar la terminación.",
    "Es frecuente observar un retorno temprano al estro (el intervalo entre estros puede acortarse de 1 a 3 meses)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Interrupción de la gestación",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dos dosis con 24 horas de diferencia",
          intervalo_horas: 24
        },
        notas_tecnicas: "Máximo 5 ml inyectados en un solo sitio. Administrar al final del estro o inicio del metaestro."
      },
      {
        indicacion: "Acromegalia inducida por progesterona",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24h por 2 dosis, luego cada 7 días por 3 dosis más",
          intervalo_horas: 168
        }
      },
      {
        indicacion: "Piometra",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Días 1, 2 y 7 (Dosis extra días 14 y 21 si es necesario)",
          intervalo_horas: 0
        },
        notas_tecnicas: "La recurrencia no es inusual, especialmente en animales mayores."
      }
    ],
    gato: [
      {
        indicacion: "Interrupción de la gestación",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dos dosis con 24 horas de diferencia",
          intervalo_horas: 24
        },
        notas_tecnicas: "Máximo 5 ml inyectados en un solo sitio. Dar inmediatamente después del apareamiento sospechado."
      },
      {
        indicacion: "Hiperplasia Fibroadenomatosa Mamaria",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 7 días",
          intervalo_horas: 168
        },
        notas_tecnicas: "Considerar atenolol si el gato presenta taquicardia (>200 lpm)."
      },
      {
        indicacion: "Piometra",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Días 1, 2 y 7 (Dosis extra días 14 y 21 si es necesario)",
          intervalo_horas: 0
        }
      }
    ],
    conejo: [
      {
        indicacion: "Interrupción de la gestación",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar en los días 6 y 7 post-implantación."
      }
    ],
    cobaya: [
      {
        indicacion: "Piometra / Metritis",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Días 1, 2 y 8",
          intervalo_horas: 0
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Interrupción de la gestación",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Días 11 y 12 después del apareamiento (24h de diferencia)",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay información específica disponible."
    ],
    contraindicaciones_especie: {
      "Perro": "Evitar en animales con hipoadrenocorticismo diagnosticado o sospechado.",
      "Gato": "Evitar en animales con hipoadrenocorticismo o diabetes mellitus."
    },
    efectos_adversos: [
      "Dolor transitorio en el sitio de inyección.",
      "Inflamación local (suele resolverse sin problemas).",
      "Signos fisiológicos de parto (expulsión fetal, anorexia, congestión mamaria) en tratamientos tardíos (>20 días gestación)."
    ],
    monitoreo_recomendado: [
      "Confirmación ecográfica de terminación (día 10)",
      "Vigilar signos de parto en abortos tardíos"
    ],
    instrucciones_manejo: "PELIGRO: Las personas embarazadas o que planeen estarlo NO deben manipular este fármaco debido al riesgo de inyección accidental.",
    sobredosis: {
      signos: ["Dolor e inflamación local aumentada"],
      tratamiento: "Soporte sintomático de la inflamación local."
    },
    interacciones_farmacologicas: [
      { farmaco: "Glucocorticoides", efecto: "Puede interferir con sus acciones al unirse a receptores de glucocorticoides; significancia clínica incierta.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueador competitivo de los receptores de progesterona, impidiendo el mantenimiento hormonal de la gestación.",
    farmacocinetica: "Bloqueo receptor efectivo por hasta 7 días."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "30 mg/ml",
      valor_concentracion: 30,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};