import type { Drug } from '@/lib/types';

export const clomipramineDrug: Drug = {
  id: "clomipramine",
  meta_data: {
    nombre_generico: "Clomipramina",
    nombres_comerciales: ["Clomicalm"],
    grupo_farmacologico: "Antidepresivo tricíclico (ATC); Inhibidor de la recaptación de serotonina y noradrenalina",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea la recaptación de serotonina y noradrenalina en el cerebro.",
      "Efectos ansiolíticos, antidepresivos y anticompulsivos.",
      "Indicado para trastornos relacionados con la separación y comportamientos compulsivos.",
      "Margen de seguridad estrecho; efectos tóxicos a dosis bajas (2–3 mg/kg).",
      "Requiere un periodo de lavado de 2 semanas tras el uso de IMAOs."
    ],
    usos_principales: "Tratamiento de la ansiedad por separación en perros, trastornos compulsivos, miedos a ruidos, marcaje con orina en gatos y picaje de plumas en aves.",
    inicio_accion: "Efectos conductuales pueden tardar semanas en ser evidentes",
    duracion_efecto: "Requiere administración diaria constante"
  },
  informacion_cliente: [
    "Administrar preferiblemente con una pequeña cantidad de comida para reducir los vómitos.",
    "No suspenda el medicamento de forma repentina.",
    "El tratamiento debe acompañarse de un plan de modificación de conducta.",
    "No se recomienda el uso en machos destinados a la reproducción (riesgo de problemas testiculares).",
    "Informe si nota que su mascota presenta letargo inusual o cambios en el apetito."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ansiedad por separación / Trastornos compulsivos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "La dosis autorizada es de 1-2 mg/kg cada 12h. Usar siempre junto a terapia conductual."
      },
      {
        indicacion: "Cataplexia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas por 3 meses",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Trastornos de ansiedad / Marcaje con orina",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Puede causar retención urinaria en esta especie. Monitorear micción."
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Trastornos de conducta",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 24,
          dosis_min: 16,
          dosis_max: 32,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    ave: [
      {
        indicacion: "Picaje de plumas (Separación)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas",
          intervalo_horas: 8
        }
      },
      {
        indicacion: "Protocolo alternativo (Loros)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a antidepresivos tricíclicos.",
      "Uso concurrente o reciente (2 semanas) de IMAOs (ej. Selegilina).",
      "Machos reproductores (riesgo de hipoplasia testicular).",
      "Uso con precaución en glaucoma, arritmias, epilepsia o retención urinaria."
    ],
    efectos_adversos: [
      "Vómitos esporádicos (reducir dando con comida).",
      "Cambios en el apetito (anorexia o polifagia).",
      "Letargo.",
      "Retención urinaria (especialmente en gatos).",
      "Sequedad de mucosas (efecto anticolinérgico)."
    ],
    monitoreo_recomendado: [
      "Función hepática en tratamientos prolongados",
      "Frecuencia cardíaca y ritmo",
      "Estado de micción en gatos"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos", "Letargo", "Arritmias cardíacas", "Ataxia", "Convulsiones"],
      tratamiento: "Soporte sintomático; no existe antídoto específico. Considerar carbón activado si la ingestión es reciente."
    },
    interacciones_farmacologicas: [
      { farmaco: "IMAOs (Selegilina)", efecto: "Riesgo de toxicidad severa y síndrome de serotonina. NO USAR CONJUNTAMENTE.", severidad: "Grave" },
      { farmaco: "Anticolinérgicos (Atropina)", efecto: "Potenciación de efectos secundarios (sequedad, retención urinaria).", severidad: "Importante" },
      { farmaco: "Depresores del SNC (Benzodiazepinas, Barbitúricos)", efecto: "Efectos sedantes aditivos.", severidad: "Moderada" },
      { farmaco: "Cimetidina", efecto: "Aumenta los niveles plasmáticos de clomipramina.", severidad: "Moderada" },
      { farmaco: "Antiepilépticos (Fenitoína, Carbamazepina)", efecto: "La clomipramina puede aumentar sus niveles en sangre.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibibe la recaptación neuronal de serotonina y noradrenalina en el SNC. Su metabolito, la desmetilclomipramina, también es activo.",
    farmacocinetica: "Absorción oral rápida. Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "5 mg, 20 mg, 80 mg",
      valor_concentracion: 5,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};