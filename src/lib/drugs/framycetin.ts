import type { Drug } from '@/lib/types';

export const framycetinDrug: Drug = {
  id: "framycetin",
  meta_data: {
    nombre_generico: "Framicetina (Sulfato de framicetina)",
    nombres_comerciales: ["Canaural"],
    grupo_farmacologico: "Aminoglucósido ótico; Antibacteriano",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antibiótico bactericida tiempo-dependiente.",
      "Eficaz principalmente contra bacterias Gram-negativas en el canal auditivo.",
      "Componente de la formulación Canaural (con ácido fusídico, nistatina y prednisolona).",
      "Requiere un ambiente rico en oxígeno para ser eficaz (ineficaz en presencia de pus denso).",
      "Posee un marcado efecto post-antibiótico."
    ],
    usos_principales: "Tratamiento de otitis externa bacteriana y parasitaria (Otodectes cynotis) en perros, gatos y hurones.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Requiere aplicaciones cada 12 horas"
  },
  informacion_cliente: [
    "Agite bien el envase antes de aplicar las gotas.",
    "Limpie suavemente el exceso de cerumen antes de la administración.",
    "No utilice el medicamento si sospecha que el tímpano de su mascota está roto.",
    "Informe si nota que su mascota parece perder el equilibrio o la audición tras el tratamiento.",
    "Completar el ciclo de tratamiento según lo prescrito."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Otitis externa bacteriana / parasitaria",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "gotas por oído"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Asegurar que el tímpano esté intacto previo a la administración."
      }
    ],
    gato: [
      {
        indicacion: "Otitis externa bacteriana / parasitaria",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "gotas por oído"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    huron: [
      {
        indicacion: "Otitis parasitaria (Otodectes)",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 6,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "gotas por oído"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Tímpano perforado (riesgo de ototoxicidad severa).",
      "Uso conjunto con otros productos ototóxicos.",
      "Hipersensibilidad a aminoglucósidos."
    ],
    efectos_adversos: [
      "Ototoxicidad (sordera, ataxia, nistagmus) si el tímpano no está intacto.",
      "Irritación local transitoria.",
      "En animales gestantes o conejos, se prefieren preparados sin corticosteroides."
    ],
    monitoreo_recomendado: [
      "Integridad de la membrana timpánica",
      "Estado de la audición y el equilibrio"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Sordera", "Pérdida de equilibrio"],
      tratamiento: "Lavar el canal auditivo con abundante salino estéril; suspender el tratamiento."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis de proteínas bacterianas al unirse a la subunidad ribosomal 30S.",
    farmacocinetica: "Acción tópica local."
  },
  presentaciones_comerciales: [
    {
      tipo: "Suspensión ótica (Canaural)",
      concentracion_texto: "5 mg/g Framicetina (+ Ác. Fusídico/Nist./Pred.)",
      valor_concentracion: 5,
      unidad_concentracion: "mg/g",
      es_divisible: false
    }
  ]
};
