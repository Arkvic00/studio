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
      "Tratamiento de ectoparásitos en peces (protozoos, monogeneos).",
      "Manejo de disbiosis intestinal en aves (macrorhabdiasis).",
      "Más seguro que otras alternativas para parvadas de aves.",
      "Corrosivo e irritante: manejar con cuidado extremo."
    ],
    usos_principales: "Ectoparásitos en peces y disbiosis (macrorhabdiasis) en aves.",
    inicio_accion: "Inmediato (inmersión)",
    duracion_efecto: "Limitada al tiempo de contacto"
  },
  informacion_cliente: [
    "Sustancia corrosiva; evitar contacto con piel y ojos.",
    "En aves enfermas individualmente, la Anfotericina-B suele ser más efectiva.",
    "Precaución en peces tropicales pequeños."
  ],
  parametros_dosificacion: {
    ave: [
      {
        indicacion: "Aves Adultas: Disbiosis / Macrorhabdiasis (Agua)",
        vias: ["PO (Agua de bebida)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 15,
          unidad_calculo: "ml/l (Vinagre de manzana)"
        }
      },
      {
        indicacion: "Aves Adultas: Disbiosis / Macrorhabdiasis (Comida)",
        vias: ["PO (Alimento fresco)"],
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
        vias: ["PO (Fórmula de cría)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "gotas diarias"
        }
      }
    ],
    peces: [
      {
        indicacion: "Peces: Ectoparásitos",
        vias: ["Inmersión (Ácido glacial 100%)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "ml/l"
        },
        duracion_tratamiento: "30-60 segundos",
        notas_tecnicas: "No exceder los 60 segundos. Riesgo de toxicidad en especies tropicales pequeñas."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["No hay información específica."],
    efectos_adversos: [
      "Toxicidad en peces pequeños.",
      "Irritación severa de mucosas."
    ],
    monitoreo_recomendado: [
      "Flotabilidad en peces tras inmersión",
      "Estado de mucosas"
    ],
    instrucciones_manejo: "ALTAMENTE CORROSIVO. Usar guantes y protección ocular.",
    sobredosis: {
      signos: ["Mortalidad rápida en peces", "Quemaduras químicas"],
      tratamiento: "Dilución inmediata."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Desconocido.",
    farmacocinetica: "Actúa principalmente por cambio local de pH."
  },
  presentaciones_comerciales: [
    { tipo: "Líquido (Glacial)", concentracion_texto: "100%", valor_concentracion: 100, unidad_concentracion: "%", es_divisible: false },
    { tipo: "Vinagre", concentracion_texto: "5-20%", valor_concentracion: 5, unidad_concentracion: "%", es_divisible: false }
  ]
};
