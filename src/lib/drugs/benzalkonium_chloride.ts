import type { Drug } from '@/lib/types';

export const benzalkoniumChlorideDrug: Drug = {
  id: "benzalkonium_chloride",
  meta_data: {
    nombre_generico: "Cloruro de Benzalconio (Compuesto de amonio cuaternario)",
    nombres_comerciales: ["Ark-Klens", "F10 Antiseptic Solution", "F10 Germicidal Wound Spray"],
    grupo_farmacologico: "Antiséptico / Desinfectante; Compuesto de amonio cuaternario",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Acción biocida por daño irreversible a las membranas celulares.",
      "Utilizado para desinfección de equipo y como agente terapéutico local.",
      "Bajo índice terapéutico; requiere diluciones precisas.",
      "En peces, la toxicidad aumenta significativamente con la temperatura alta y la baja dureza del agua."
    ],
    usos_principales: "Desinfección de equipo. Nebulización, lavados nasales, sinusales y de heridas en múltiples especies. Tratamiento de infecciones externas de piel y branquias en peces.",
    inicio_accion: "Inmediato (contacto directo)",
    duracion_efecto: "Limitada al tiempo de contacto"
  },
  informacion_cliente: [
    "Producto irritante para la piel y los ojos; manejar con precaución.",
    "Seguir estrictamente las guías de dilución para nebulización o lavado de heridas.",
    "En peces, informar al veterinario sobre la temperatura y dureza del agua antes de aplicar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Nebulización / Lavado de heridas / Flushing nasal",
        vias: ["Inhalada", "Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "dilución 1:250 (F10 Antiseptic)"
        },
        notas_tecnicas: "Usar la solución pre-diluida 1:250 o preparar según instrucciones del fabricante para F10."
      }
    ],
    gato: [
      {
        indicacion: "Nebulización / Lavado de heridas / Flushing nasal",
        vias: ["Inhalada", "Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "dilución 1:250 (F10 Antiseptic)"
        }
      }
    ],
    ave: [
      {
        indicacion: "Nebulización / Sinus flushing / Heridas",
        vias: ["Inhalada", "Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "dilución 1:250 (F10 Antiseptic)"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Nebulización / Flushing nasal / Heridas",
        vias: ["Inhalada", "Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "dilución 1:250 (F10 Antiseptic)"
        }
      }
    ],
    axolote: [
      {
        indicacion: "Nebulización / Lavado de heridas (Anfibios)",
        vias: ["Inhalada", "Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "dilución 1:250 (F10 Antiseptic)"
        }
      }
    ],
    peces: [
      {
        indicacion: "Infecciones externas de piel/branquias (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "5-10 minutos",
        notas_tecnicas: "ALERTA: Reducir dosis al 50% (5 mg/l) si la temperatura del agua es alta o la dureza es baja."
      },
      {
        indicacion: "Inmersión prolongada",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/l"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida.",
      "No administrar vía sistémica (inyectable u oral)."
    ],
    contraindicaciones_especie: {
      "Peces": "Reducir la tasa de dosis en un 50% en aguas con baja dureza o temperaturas elevadas."
    },
    efectos_adversos: [
      "Irritación severa de piel y mucosas.",
      "Daño ocular si entra en contacto con los ojos.",
      "Toxicidad en peces en condiciones ambientales adversas."
    ],
    monitoreo_recomendado: [
      "Estado de la piel y branquias (peces)",
      "Patrón respiratorio durante nebulización"
    ],
    instrucciones_manejo: "Irritante. Usar guantes y protección ocular durante la preparación de diluciones concentradas.",
    sobredosis: {
      signos: ["Irritación severa", "Mortalidad aguda en peces"],
      tratamiento: "Dilución inmediata con agua limpia o solución salina."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Surfactante catiónico que altera la permeabilidad de la membrana citoplasmática bacteriana y fúngica, provocando la fuga del contenido celular.",
    farmacocinetica: "Acción tópica local. Mínima absorción sistémica a las diluciones recomendadas."
  },
  presentaciones_comerciales: [
    {
      tipo: "Concentrado líquido",
      concentracion_texto: "12.5% (Ark-Klens)",
      valor_concentracion: 125,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Concentrado antiséptico",
      concentracion_texto: "5.4% (F10)",
      valor_concentracion: 54,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Solución pre-diluida",
      concentracion_texto: "1:250",
      valor_concentracion: 4,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
