import type { Drug } from '@/lib/types';

export const ranitidineDrug: Drug = {
  id: "ranitidine",
  meta_data: {
    nombre_generico: "Ranitidina",
    nombres_comerciales: ["Zantac", "Zantadine"],
    grupo_farmacologico: "Antagonista de los receptores H2 de histamina",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la secreción de ácido gástrico mediante el bloqueo de los receptores H2.",
      "También posee efectos procinéticos al inhibir la acetilcolinesterasa.",
      "Menos propenso a interacciones farmacológicas que la cimetidina.",
      "Útil en el tratamiento de úlceras gástricas y duodenales, y esofagitis por reflujo."
    ],
    usos_principales: "Tratamiento de úlceras gastroduodenales, gastritis erosiva y reflujo gastroesofágico.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Puede administrarse con o sin alimentos.",
    "Informe si nota sangre en el vómito o en las heces.",
    "Completar el ciclo de tratamiento indicado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Gastritis / Úlceras / Reflujo",
        vias: ["PO", "IV lenta", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Gastritis / Úlceras / Reflujo",
        vias: ["PO", "IV lenta", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Hipersensibilidad conocida.", "Insuficiencia renal (requiere ajuste de dosis)."],
    efectos_adversos: ["Generalmente bien tolerada.", "Vómitos y diarrea (raros)."],
    monitoreo_recomendado: ["Función renal en tratamientos prolongados"],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Vómitos", "Temblores", "Hipotensión"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Ketoconazol / Itraconazol", efecto: "La reducción del ácido gástrico puede disminuir su absorción.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de la histamina en los receptores H2 de las células parietales gástricas.",
    farmacocinetica: "Biodisponibilidad oral de ~50%. Eliminación renal predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "25 mg/ml", valor_concentracion: 25, unidad_concentracion: "mg/ml" },
    { tipo: "Tableta oral", concentracion_texto: "75 mg, 150 mg", valor_concentracion: 75, unidad_concentracion: "mg" }
  ]
};