import type { Drug } from '@/lib/types';

export const polymyxinBDrug: Drug = {
  id: "polymyxin_b",
  meta_data: {
    nombre_generico: "Polimixina B",
    nombres_comerciales: ["Surolan", "Polyfax"],
    grupo_farmacologico: "Antibacteriano polipeptídico",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida dependiente de concentración que altera la membrana externa bacteriana.",
      "Eficaz contra Gram-negativos, incluyendo Pseudomonas aeruginosa.",
      "Demasiado tóxica para uso sistémico (inyectable/oral).",
      "Acción sinérgica con Tris-EDTA y clorhexidina.",
      "No se absorbe a través de la piel intacta."
    ],
    usos_principales: "Tratamiento tópico de otitis externa, infecciones cutáneas y queratoconjuntivitis bacteriana.",
    inicio_accion: "Inmediato (tópico)",
    duracion_efecto: "Requiere aplicaciones cada 12 horas"
  },
  informacion_cliente: [
    "Medicamento para uso exclusivo en la superficie del cuerpo (piel, ojos u oídos).",
    "No usar en oídos si sospecha que el tímpano está roto.",
    "Informe si nota que el animal parece perder el equilibrio tras el tratamiento.",
    "Complete el ciclo indicado por el veterinario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Otitis externa / Infecciones cutáneas",
        vias: ["Tópica", "Ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "unas gotas bien repartidas"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Oftálmico (Polyfax)",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación de pomada"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Otitis / Piel / Ojo",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Tímpano perforado (riesgo de ototoxicidad).",
      "Uso sistémico (parenteral).",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Nefrotoxicidad y neurotoxicidad severa si se absorbe sistémicamente.",
      "Potencial ototoxicidad.",
      "Irritación local leve."
    ],
    monitoreo_recomendado: [
      "Integridad de la membrana timpánica antes del uso ótico",
      "Estado de la audición"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Ototoxicidad marcada (si es ótico)"],
      tratamiento: "Lavar con abundante salino estéril."
    },
    interacciones_farmacologicas: [
      { farmaco: "Tris-EDTA / Clorhexidina", efecto: "Sinergia potente contra Pseudomonas.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Surfactante catiónico que desorganiza la membrana citoplasmática bacteriana, provocando la fuga de componentes celulares vitales.",
    farmacocinetica: "Nula absorción cutánea u oral."
  },
  presentaciones_comerciales: [
    { tipo: "Suspensión ótica/cutánea (Surolan)", concentracion_texto: "5,500 IU/ml (+ Miconazol/Pred.)", valor_concentracion: 5500, unidad_concentracion: "IU/ml", es_divisible: false },
    { tipo: "Pomada oftálmica (Polyfax)", concentracion_texto: "10,000 IU/g (+ Bacitracina)", valor_concentracion: 10000, unidad_concentracion: "IU/g", es_divisible: false }
  ]
};