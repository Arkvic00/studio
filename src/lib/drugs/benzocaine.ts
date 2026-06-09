import type { Drug } from '@/lib/types';

export const benzocaineDrug: Drug = {
  id: "benzocaine",
  meta_data: {
    nombre_generico: "Benzocaína",
    nombres_comerciales: ["Optomease Vet"],
    grupo_farmacologico: "Anestésico local (Éster); Anestésico para peces",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anestésico liposoluble absorbido rápidamente a través de las branquias y la piel.",
      "Requiere disolución previa en acetona o etanol (100 g/l) para una dosificación precisa.",
      "Es fundamental tamponar la solución con bicarbonato sódico al mismo pH del agua de origen.",
      "La potencia del fármaco disminuye conforme aumenta la temperatura del agua.",
      "Los peces pueden retener cierto movimiento, lo que lo hace menos ideal para cirugías invasivas."
    ],
    usos_principales: "Sedación, inmovilización, anestesia y eutanasia en peces.",
    inicio_accion: "Rápido (inmersión)",
    duracion_efecto: "Dependiente del tiempo de exposición y concentración"
  },
  informacion_cliente: [
    "Retirar el alimento de los peces 12-24 horas antes de la anestesia.",
    "El agua para el procedimiento debe provenir del mismo tanque o estanque de origen.",
    "La solución anestésica debe usarse el mismo día de su preparación.",
    "Asegurar una oxigenación vigorosa del agua durante todo el procedimiento."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Inducción de anestesia (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 112.5,
          dosis_min: 25,
          dosis_max: 200,
          unidad_calculo: "mg/l"
        },
        notas_tecnicas: "La etapa de anestesia depende de la concentración y el tiempo de exposición. Probar primero con un grupo pequeño."
      },
      {
        indicacion: "Mantenimiento de anestesia (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 27.5,
          dosis_min: 15,
          dosis_max: 40,
          unidad_calculo: "mg/l"
        }
      },
      {
        indicacion: "Eutanasia (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1000,
          unidad_calculo: "mg/l (5-10 veces la dosis anestésica)"
        },
        duracion_tratamiento: "Mínimo 60 minutos tras el cese de respiración",
        notas_tecnicas: "Mantener al pez sumergido por un periodo prolongado para asegurar el éxito del procedimiento."
      }
    ],
    axolote: [
      {
        indicacion: "Sedación / Anestesia (Anfibios)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "N/A"
        },
        notas_tecnicas: "Uso previo reportado en anfibios, pero puede causar apnea severa. Se prefieren alternativas como la tricaína (MS-222)."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No utilizar soluciones no tamponadas (pueden irritar las branquias).",
      "No utilizar en agua que no esté bien aireada."
    ],
    contraindicaciones_especie: {
      "Axolote": "NO RECOMENDADO: Puede inducir apnea súbita en anfibios. Usar con extrema precaución o preferir tricaína."
    },
    efectos_adversos: [
      "Apnea (especialmente en anfibios).",
      "Irritación branquial si el pH no es el adecuado.",
      "Regurgitación si no se realizó ayuno previo."
    ],
    monitoreo_recomendado: [
      "Movimiento opercular (respiración)",
      "Reflejo de enderezamiento",
      "Oxigenación del agua",
      "pH y Temperatura del agua"
    ],
    instrucciones_manejo: "Almacenar el polvo seco y las soluciones stock protegidas de la luz.",
    sobredosis: {
      signos: ["Falla respiratoria profunda", "Muerte"],
      tratamiento: "Retorno inmediato a agua limpia, oxigenada y con parámetros químicos normales."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Impide la transmisión de señales nerviosas periféricas al SNC bloqueando los canales de sodio en las membranas neuronales.",
    farmacocinetica: "Se absorbe rápidamente a través de las branquias y la piel debido a su alta liposolubilidad."
  },
  presentaciones_comerciales: [
    {
      tipo: "Líquido concentrado",
      concentracion_texto: "200 mg/ml (20%)",
      valor_concentracion: 200,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Polvo puro",
      concentracion_texto: "100%",
      valor_concentracion: 100,
      unidad_concentracion: "%",
      es_divisible: false
    }
  ]
};