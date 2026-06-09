import type { Drug } from '@/lib/types';

export const acidoAceticoDrug: Drug = {
  id: "acido_acetico",
  meta_data: {
    nombre_generico: "Ácido Acético",
    nombres_comerciales: ["Vinagre de Manzana", "Glacial Acetic Acid"],
    grupo_farmacologico: "Ectoparasiticida; Acidificante",
    status_regulatorio: "OTC"
  },
  resumen_clinico: {
    puntos_clave: [
      "Tratamiento de ectoparásitos en peces.",
      "Manejo de disbiosis intestinal en aves (macrorhabdiasis).",
      "Mucho más seguro que terapias alternativas para macrorhabdiasis.",
      "Sustancia corrosiva: manejar con extrema precaución."
    ],
    usos_principales: "Tratamiento de ectoparásitos (protozoos, monogeneos, hirudíneos, crustáceos) en peces y manejo de disbiosis intestinal en aves.",
    inicio_accion: "Inmediato (inmersión)",
    duracion_efecto: "Limitada al tiempo de contacto"
  },
  informacion_cliente: [
    "Sustancia corrosiva; evitar contacto con piel y ojos.",
    "En aves enfermas, la Anfotericina-B suele ser una terapia más probada para casos individuales.",
    "Seguir las guías de uso responsable de parasiticidas."
  ],
  parametros_dosificacion: {
    ave: [
      {
        indicacion: "Aves: Disbiosis / Macrorhabdiasis (Agua de bebida)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 15,
          unidad_calculo: "ml/l (Vinagre de manzana)"
        }
      },
      {
        indicacion: "Aves Adultas: Disbiosis / Macrorhabdiasis (Alimento fresco)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "cucharadita diaria"
        }
      },
      {
        indicacion: "Polluelos (Chicks): Crianza a mano",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "gotas diarias (en fórmula)"
        }
      }
    ],
    peces: [
      {
        indicacion: "Peces: Ectoparásitos (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "ml/l (Ácido glacial 100%)"
        },
        duracion_tratamiento: "30-60 segundos",
        notas_tecnicas: "No exceder los 60 segundos de inmersión. Otros tratamientos pueden ser más seguros."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["No hay información específica."],
    efectos_adversos: [
      "Puede ser tóxico para peces tropicales pequeños.",
      "Irritación severa de mucosas.",
      "Corrosivo para la piel."
    ],
    monitoreo_recomendado: [
      "Comportamiento de los peces durante y después de la inmersión",
      "Estado de la piel y mucosas en aves"
    ],
    instrucciones_manejo: "ALTAMENTE CORROSIVO. Usar guantes y protección ocular. Irritante para las membranas mucosas.",
    sobredosis: {
      signos: ["Mortalidad rápida en peces", "Quemaduras químicas"],
      tratamiento: "Dilución inmediata con abundante agua limpia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "No se conoce con exactitud; probablemente actúa alterando el pH local para eliminar parásitos externos.",
    farmacocinetica: "Actúa localmente por contacto."
  },
  presentaciones_comerciales: [
    {
      tipo: "Ácido Glacial",
      concentracion_texto: "100%",
      valor_concentracion: 100,
      unidad_concentracion: "%",
      es_divisible: false
    },
    {
      tipo: "Vinagre",
      concentracion_texto: "5-20%",
      valor_concentracion: 5,
      unidad_concentracion: "%",
      es_divisible: false
    }
  ]
};
