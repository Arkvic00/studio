import type { Drug } from '@/lib/types';

export const sertralineDrug: Drug = {
  id: "sertraline",
  meta_data: {
    nombre_generico: "Sertralina",
    nombres_comerciales: ["Lustral"],
    grupo_farmacologico: "ISRS (Inhibidor selectivo de la recaptación de serotonina)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Eleva los niveles de serotonina en las sinapsis cerebrales.",
      "Utilizado para trastornos de ansiedad y comportamientos compulsivos.",
      "Posible menor efecto supresor del apetito que la fluoxetina.",
      "Uso en gatos para control de impulsividad (agresión por juego).",
      "Requiere periodos de lavado largos al cambiar desde o hacia un IMAOs."
    ],
    usos_principales: "Tratamiento de ansiedad, acicalamiento excesivo (lamido acral) y trastornos de conducta agresiva impulsiva.",
    inicio_accion: "Lento (4-6 semanas)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "El efecto máximo puede tardar hasta un mes en observarse.",
    "Informe si nota aumento de la agresividad o cambios en el apetito.",
    "Puede causar somnolencia o vómitos leves al inicio.",
    "No suspenda el tratamiento de forma repentina.",
    "No usar en animales con antecedentes de convulsiones."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ansiedad / Comportamientos compulsivos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Control de impulsividad / Ansiedad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.5,
          dosis_max: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Historial de convulsiones.",
      "Hipersensibilidad a los ISRS.",
      "Uso conjunto con otros agentes serotoninérgicos."
    ],
    efectos_adversos: [
      "Letargo y disminución del apetito.",
      "Vómitos y diarrea.",
      "Aumento paradójico de la agresión.",
      "Temblores."
    ],
    monitoreo_recomendado: [
      "Peso corporal",
      "Estado mental y conducta",
      "Frecuencia de micción"
    ],
    instrucciones_manejo: "Periodo de lavado de 2 semanas tras IMAO y 6 semanas antes de iniciar un IMAO tras sertralina.",
    sobredosis: {
      signos: ["Convulsiones", "Agitación extrema", "Vómitos"],
      tratamiento: "Soporte sintomático; diazepam para convulsiones."
    },
    interacciones_farmacologicas: [
      { farmaco: "IMAOs (Selegilina)", efecto: "Riesgo de síndrome de serotonina fatal. NO USAR JUNTOS.", severidad: "Grave" },
      { farmaco: "Aspirina / Anticoagulantes", efecto: "Aumento del riesgo de hemorragia.", severidad: "Importante" },
      { farmaco: "Tramadol", efecto: "Riesgo potencial de síndrome de serotonina.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor potente y altamente selectivo de la recaptación de serotonina.",
    farmacocinetica: "Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "50 mg, 100 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true }
  ]
};
