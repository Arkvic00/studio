import type { Drug } from '@/lib/types';

export const acidoAceticoDrug: Drug = {
  id: "acido_acetico",
  meta_data: {
    nombre_generico: "Ácido Acético",
    nombres_comerciales: ["Glacial Acetic Acid", "Vinagre de Manzana"],
    grupo_farmacologico: "Ectoparasiticida; Antiséptico; Acidificante",
    status_regulatorio: "OTC / Uso extra-label"
  },
  resumen_clinico: {
    puntos_clave: [
      "Tratamiento de ectoparásitos en peces (protozoos, monogeneos, crustáceos).",
      "Manejo de disbiosis intestinal en aves, especialmente macrorhabdiasis.",
      "Mucho más seguro que terapias alternativas para macrorhabdiasis en parvadas.",
      "La evidencia de eficacia es baja en aves (datos de aves de corral)."
    ],
    usos_principales: "Ectoparásitos en peces y disbiosis intestinal (macrorhabdiasis) en aves.",
    inicio_accion: "Inmediato (baño) / Variable (oral)",
    duracion_efecto: "Durante el tiempo de inmersión / Tránsito digestivo"
  },
  informacion_cliente: [
    "Corrosivo para la piel e irritante para las mucosas; manejar con cuidado.",
    "Para aves enfermas individualmente, la Anfotericina-B es una terapia más probada.",
    "En peces, se recomienda precaución con especies tropicales pequeñas."
  ],
  parametros_dosificacion: {
    ave: [
      {
        indicacion: "Disbiosis / Macrorhabdiasis (Agua de bebida)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 15,
          unidad_calculo: "ml/l (Vinagre de manzana)"
        },
        frecuencia: {
          texto_ui: "Diario en agua de bebida",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Disbiosis / Macrorhabdiasis (Alimento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "cucharadita/día (Adultos)"
        },
        frecuencia: {
          texto_ui: "En alimento fresco",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Polluelos (Fórmula de cría)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "gotas/día"
        },
        frecuencia: {
          texto_ui: "En fórmula de crianza manual",
          intervalo_horas: 24
        }
      }
    ],
    peces: [
      {
        indicacion: "Ectoparásitos (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "ml/l (Ácido acético glacial)"
        },
        duracion_tratamiento: "30 a 60 segundos",
        notas_tecnicas: "Inmersión corta de 30-60 segundos únicamente. Puede ser tóxico para peces tropicales pequeños."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay información disponible específica de contraindicaciones médicas.",
      "Evitar contacto directo con piel y mucosas por su naturaleza corrosiva."
    ],
    efectos_adversos: [
      "Toxicidad en peces tropicales pequeños.",
      "Irritación de mucosas."
    ],
    monitoreo_recomendado: [
      "Comportamiento y flotabilidad en peces tras baño",
      "Estado de mucosas"
    ],
    instrucciones_manejo: "Sustancia corrosiva para la piel e irritante para las mucosas. Usar equipo de protección adecuado durante la manipulación.",
    sobredosis: {
      signos: ["Mortalidad en peces", "Irritación severa"],
      tratamiento: "Dilución inmediata con agua limpia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Desconocido.",
    farmacocinetica: "Actúa principalmente por contacto (peces) o cambio de pH en el lumen intestinal (aves)."
  },
  presentaciones_comerciales: [
    {
      tipo: "Líquido (Glacial)",
      concentracion_texto: "100%",
      valor_concentracion: 100,
      unidad_concentracion: "%",
      es_divisible: false
    },
    {
      tipo: "Vinagre",
      concentracion_texto: "5% a 20%",
      valor_concentracion: 5,
      unidad_concentracion: "%",
      es_divisible: false
    }
  ]
};
