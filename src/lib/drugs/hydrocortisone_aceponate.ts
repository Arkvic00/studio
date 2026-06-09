import type { Drug } from '@/lib/types';

export const hydrocortisoneAceponateDrug: Drug = {
  id: "hydrocortisone_aceponate",
  meta_data: {
    nombre_generico: "Aceponato de Hidrocortisona",
    nombres_comerciales: ["Cortavance", "Easotic"],
    grupo_farmacologico: "Glucocorticoide tópico (pro-fármaco)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Pro-fármaco que se transforma en hidrocortisona 17-propionato en la epidermis.",
      "Minimiza los efectos secundarios sistémicos al actuar localmente.",
      "Potente efecto antiinflamatorio y antipruriginoso.",
      "Utilizado en dermatosis y otitis externa aguda.",
      "El área total tratada no debe exceder los dos flancos del animal."
    ],
    usos_principales: "Tratamiento de dermatosis inflamatorias y pruríticas, y otitis externa aguda asociada a bacterias o Malassezia.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "No aplicar sobre piel con úlceras o heridas abiertas (Cortavance).",
    "No usar en oídos si el tímpano está roto (Easotic).",
    "Informe si nota cambios en el comportamiento o aumento de la sed en el animal.",
    "El spray no requiere masaje tras la aplicación.",
    "Lavar las manos tras su uso."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dermatosis pruríticas (Cortavance)",
        vias: ["Tópica (Spray)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "pulsaciones por cada cuadrado de 10x10cm"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 7 días",
          intervalo_horas: 24
        },
        notas_tecnicas: "Libera 1.52 μg/cm². No exceder el área de tratamiento recomendada (equivalente a ambos flancos)."
      },
      {
        indicacion: "Otitis externa (Easotic)",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "ml (1 pulsación por oído)"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 5 días",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Piel ulcerada.",
      "Tímpano perforado (Easotic).",
      "Perros menores de 7 meses (puede retrasar el crecimiento)."
    ],
    efectos_adversos: [
      "Atrofia epidérmica tras uso muy prolongado.",
      "Eritema aural transitorio (Easotic).",
      "Sordera transitoria en perros geriátricos (muy raro)."
    ],
    monitoreo_recomendado: [
      "Resolución de la inflamación y el prurito",
      "Integridad de la membrana timpánica antes del uso ótico"
    ],
    instrucciones_manejo: "Almacenar a temperatura ambiente. Evitar contacto con ojos.",
    sobredosis: {
      signos: ["Atrofia cutánea", "Signos leves de hipercortisolismo sistémico"],
      tratamiento: "Suspensión del tratamiento."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se biotransforma en la epidermis en su forma activa, la cual reduce la producción de citoquinas proinflamatorias localmente.",
    farmacocinetica: "Baja absorción sistémica debido a su diseño como pro-fármaco de activación dérmica."
  },
  presentaciones_comerciales: [
    { tipo: "Spray cutáneo", concentracion_texto: "0.584 mg/ml (76 ml)", valor_concentracion: 0.584, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Suspensión ótica", concentracion_texto: "1.11 mg/ml Hidroc. (+ Miconazol/Gentam.)", valor_concentracion: 1.11, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
