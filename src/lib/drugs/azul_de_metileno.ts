import type { Drug } from '@/lib/types';

export const azulDeMetilenoDrug: Drug = {
  id: "azul_de_metileno",
  meta_data: {
    nombre_generico: "Cloruro de Metiltioninio (Azul de Metileno)",
    nombres_comerciales: ["Methylthioninium chloride*"],
    grupo_farmacologico: "Antídoto; Antiséptico externo (Peces)",
    status_regulatorio: "POM, AVM-GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Actúa como donante de electrones para la metahemoglobina reductasa.",
      "Tratamiento de elección para la metahemoglobinemia.",
      "Uso en peces para infecciones fúngicas externas y protozoos.",
      "¡CUIDADO EN GATOS!: Causa anemia por cuerpos de Heinz severa.",
      "Mancha permanentemente el equipo, especialmente plásticos.",
      "Puede dañar los filtros biológicos de los acuarios."
    ],
    usos_principales: "Tratamiento de la metahemoglobinemia (especialmente por nitritos o fármacos) en mamíferos. Tratamiento de hongos y parásitos externos en peces.",
    inicio_accion: "Rápido (vía IV)",
    duracion_efecto: "Variable"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario o para tratamiento de agua.",
    "Provoca una coloración azul intensa en el agua y el equipo del acuario.",
    "¡EXTREMA PRECAUCIÓN EN GATOS!: Informe si nota palidez extrema o debilidad.",
    "Asegúrese de usar un filtro en línea si se administra por vía intravenosa."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Metahemoglobinemia",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 1.0,
          dosis_max: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única (repetir si es necesario)", intervalo_horas: 0 }
      }
    ],
    gato: [
      {
        indicacion: "Metahemoglobinemia (Extrema precaución)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 1.0,
          dosis_max: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única (¡SOLO UNA VEZ!)", intervalo_horas: 0 },
        notas_tecnicas: "Muchos autores lo consideran contraindicado en gatos por el alto riesgo de hemólisis fatal."
      }
    ],
    peces: [
      {
        indicacion: "Micosis externas / Protozoos",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 3,
          unidad_calculo: "mg/l"
        },
        notas_tecnicas: "Seguir recomendaciones para formulaciones comerciales para asegurar pureza."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal severa.",
      "Anemia hemolítica preexistente.",
      "Gatos (Relativa; riesgo de hemólisis severa)."
    ],
    efectos_adversos: [
      "Anemia hemolítica por cuerpos de Heinz (especialmente en gatos).",
      "Fallo renal.",
      "Tinción de tejidos y superficies.",
      "Toxicidad en algunas especies de peces sin escamas y plantas."
    ],
    monitoreo_recomendado: [
      "Hemograma (vigilar cuerpos de Heinz y hematocrito)",
      "Función renal (Creatinina/BUN)",
      "Nivel de saturación de oxígeno"
    ],
    instrucciones_manejo: "Usar filtro en línea de ser posible. Proteger de la luz. Evitar contacto con piel humana.",
    sobredosis: {
      signos: ["Hemorragia masiva", "Cianosis", "Muerte en peces"],
      tratamiento: "Cese inmediato; soporte hematológico y renal; cambio de agua masivo en peces."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Actúa como cofactor acelerando la reducción de la metahemoglobina (forma de hemoglobina incapaz de transportar O2) a hemoglobina funcional.",
    farmacocinetica: "Metabolismo rápido. Excreción renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "10 mg/ml (1%)",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Solución para inmersión",
      concentracion_texto: "Variable según producto",
      valor_concentracion: 0,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
