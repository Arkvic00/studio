import type { Drug } from '@/lib/types';

export const paroxetineDrug: Drug = {
  id: "paroxetine",
  meta_data: {
    nombre_generico: "Paroxetina",
    nombres_comerciales: ["Paxil", "Seroxat"],
    grupo_farmacologico: "ISRS (Inhibidor selectivo de la recaptación de serotonina)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antidepresivo que eleva los niveles de serotonina en las sinapsis cerebrales.",
      "Aumenta el umbral de actividad motora.",
      "Alternativa a la fluoxetina o clomipramina en trastornos de ansiedad.",
      "En gatos, se usa para el marcaje urinario con agresividad.",
      "En aves, ayuda en el picaje de plumas y automutilación.",
      "Requiere periodos de lavado (wash-out) prolongados al cambiar desde o hacia un IMAOs."
    ],
    usos_principales: "Tratamiento de la ansiedad generalizada, impulsividad, marcaje urinario y trastornos de comportamiento en aves.",
    inicio_accion: "Lento (4-6 semanas para efecto completo)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "El efecto máximo puede tardar hasta un mes en observarse.",
    "Informe inmediatamente si nota un aumento de la agresividad en su mascota.",
    "Puede causar somnolencia o pérdida del apetito inicial.",
    "No suspenda el tratamiento de forma brusca; requiere retirada gradual.",
    "No usar en animales epilépticos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ansiedad generalizada / Impulsividad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1.0,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Marcaje urinario / Agresividad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas (puede subirse a q24h con monitoreo)", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Picaje de plumas / Automutilación",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a los ISRS.",
      "Historial de convulsiones (Epilepsia).",
      "Uso concurrente con otros agentes serotoninérgicos (riesgo de Síndrome de Serotonina)."
    ],
    efectos_adversos: [
      "Letargo y disminución del apetito.",
      "Vómitos y diarrea.",
      "Inquietud y agitación.",
      "Aumento paradójico de la agresividad."
    ],
    monitoreo_recomendado: [
      "Estado de la mente y conducta",
      "Frecuencia de micción en gatos",
      "Peso corporal"
    ],
    instrucciones_manejo: "Lavar manos tras su uso. Tapering obligatorio de 3-4 semanas.",
    sobredosis: {
      signos: ["Convulsiones", "Agitación extrema", "Vómitos severos"],
      tratamiento: "Soporte sintomático; diazepam para convulsiones; carbón activado si la ingesta es reciente."
    },
    interacciones_farmacologicas: [
      { farmaco: "IMAOs (Selegilina)", efecto: "Riesgo de síndrome de serotonina fatal. Esperar 2-6 semanas entre fármacos.", severidad: "Grave" },
      { farmaco: "Aspirina / Anticoagulantes", efecto: "Aumenta el riesgo de sangrado tras trauma.", severidad: "Importante" },
      { farmaco: "Fenotiazinas", efecto: "Paroxetina puede potenciar sus efectos adversos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe selectivamente la recaptación de serotonina en la hendidura sináptica.",
    farmacocinetica: "Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "20 mg, 30 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};