import type { Drug } from '@/lib/types';

export const filgrastimDrug: Drug = {
  id: "filgrastim",
  meta_data: {
    nombre_generico: "Filgrastim (rhG-CSF)",
    nombres_comerciales: ["Neupogen"],
    grupo_farmacologico: "Agente estimulante de colonias de granulocitos",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Factor estimulante de colonias de granulocitos humano recombinante (rhG-CSF).",
      "Activa la proliferación y diferenciación de los precursores de neutrófilos.",
      "Aumenta el recuento de neutrófilos en sangre periférica en 24 horas.",
      "Uso principal en pacientes con neutropenia severa (<1 x 10⁹/l) por quimioterapia.",
      "En perros sanos, el uso repetido induce la formación de anticuerpos neutralizantes."
    ],
    usos_principales: "Manejo de la neutropenia inducida por quimioterapia, sepsis, parvovirosis, ehrlichiosis o anemia cíclica canina.",
    inicio_accion: "Rápido (aumento de neutrófilos en 24h)",
    duracion_efecto: "Niveles vuelven a la normalidad 5 días tras suspender"
  },
  informacion_cliente: [
    "Medicamento inyectable utilizado para subir las defensas (glóbulos blancos).",
    "Se requieren análisis de sangre diarios para controlar la respuesta.",
    "Puede causar dolor en los huesos durante el tratamiento.",
    "Informe si nota que su mascota parece tener dolor al caminar o está muy decaída."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Neutropenia severa / Sepsis",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "μg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 3 a 5 días",
          intervalo_horas: 24
        },
        notas_tecnicas: "Administrar al menos 24h DESPUÉS de la última dosis de quimioterapia para evitar sensibilizar precursores al citotóxico."
      }
    ],
    gato: [
      {
        indicacion: "Neutropenia (FeLV / FIV / Panleucopenia)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "μg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 3 a 5 días",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida a productos derivados de E. coli.",
      "No administrar en animales que ya han desarrollado anticuerpos neutralizantes previos (causa neutropenia refractaria).",
      "No usar simultáneamente con quimioterapia (esperar 24h)."
    ],
    efectos_adversos: [
      "Dolor óseo (común).",
      "Irritación en el sitio de inyección.",
      "Hipotensión transitoria.",
      "Esplenomegalia (agrandamiento del bazo).",
      "Neutropenia por anticuerpos (uso crónico en animales sanos)."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) diario",
      "Signos de dolor musculoesquelético",
      "Función hepática"
    ],
    instrucciones_manejo: "Mantener en refrigeración (2-8°C). No agitar vigorosamente.",
    sobredosis: {
      signos: ["Leucocitosis extrema", "Dolor óseo severo"],
      tratamiento: "Suspensión del fármaco; el recuento bajará en pocos días."
    },
    interacciones_farmacologicas: [
      { farmaco: "Quimioterápicos", efecto: "Pueden destruir los precursores estimulados si se dan el mismo día.", severidad: "Importante" },
      { farmaco: "Corticosteroides / Litio", efecto: "Pueden potenciar la liberación de neutrófilos.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a receptores específicos en la superficie de las células hematopoyéticas, estimulando la proliferación, diferenciación y activación funcional de los neutrófilos.",
    farmacocinetica: "Absorción rápida tras SC. Eliminación por degradación mediada por neutrófilos y aclaramiento renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable (Jeringas precargadas)",
      concentracion_texto: "300 μg/ml (30 millones IU)",
      valor_concentracion: 300,
      unidad_concentracion: "μg/ml",
      es_divisible: false
    }
  ]
};
