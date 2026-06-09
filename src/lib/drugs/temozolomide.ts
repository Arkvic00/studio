import type { Drug } from '@/lib/types';

export const temozolomideDrug: Drug = {
  id: "temozolomide",
  meta_data: {
    nombre_generico: "Temozolomida",
    nombres_comerciales: ["Temcad", "Temodal", "Temodar"],
    group_farmacologico: "Antineoplásico; Agente alquilante",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente alquilante oral que atraviesa la barrera hematoencefálica.",
      "Uso principal en tumores cerebrales (gliomas) y melanoma maligno.",
      "Mielosupresión severa (bajada de defensas) es el efecto limitante.",
      "Requiere protocolos de bioseguridad para citotóxicos."
    ],
    usos_principales: "Tratamiento de gliomas, melanoma maligno y linfoma refractario en perros.",
    inicio_accion: "Interferencia inmediata con ADN",
    duracion_efecto: "Ciclos mensuales de 5 días"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejar siempre con guantes impermeables.",
    "Las cápsulas no deben abrirse; deben tragarse enteras.",
    "Informe inmediatamente si nota fiebre, hematomas o vómitos.",
    "Se requieren análisis de sangre frecuentes.",
    "Evitar contacto con excretas del animal por 48 horas post-dosis."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Neoplasias (Gliomas / Melanoma / Linfoma)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 62.5,
          dosis_min: 60,
          dosis_max: 100,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 5 días consecutivos al mes",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de médula ósea preexistente.",
      "Insuficiencia renal o hepática severa.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Mielosupresión profunda.",
      "Trastornos GI (vómitos, anorexia).",
      "Letargo.",
      "Elevación de enzimas hepáticas."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) semanal",
      "Perfil bioquímico renal y hepático"
    ],
    instrucciones_manejo: "CITOTÓXICO. Seguir protocolos de seguridad oncológica.",
    sobredosis: {
      signos: ["Mielosupresión severa", "Vómitos incoercibles"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Alquila el ADN en las posiciones N-7 y O-6 de los residuos de guanina, causando roturas en las hebras y muerte celular.",
    farmacocinetica: "Absorción oral rápida y completa. Atraviesa bien el SNC."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula oral",
      concentracion_texto: "5 mg a 250 mg",
      valor_concentracion: 20,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
