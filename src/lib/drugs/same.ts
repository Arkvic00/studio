import type { Drug } from '@/lib/types';

export const sameDrug: Drug = {
  id: "same",
  meta_data: {
    nombre_generico: "S-Adenosilmetionina (SAMe)",
    nombres_comerciales: ["Denamarin", "Samylin"],
    grupo_farmacologico: "Antioxidante hepático",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Precursor del Glutatión (GSH).",
      "Potente antioxidante hepatocelular.",
      "Ayuda en el manejo de la disfunción cognitiva.",
      "Administrar estrictamente en ayunas."
    ],
    usos_principales: "Soporte hepático y manejo de la demencia senil canina.",
    inicio_accion: "Lento (semanas)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Dar el medicamento 1 hora antes de la comida.",
    "Las tabletas deben tragarse enteras.",
    "Informe si nota vómitos o diarrea."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Soporte Hepático / Cognitivo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas (en ayunas)", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Soporte Hepático",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 100,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Ninguna conocida."],
    efectos_adversos: ["Trastornos GI leves."],
    monitoreo_recomendado: ["Enzimas hepáticas", "Estado cognitivo"],
    instrucciones_manejo: "Mantener envase cerrado.",
    sobredosis: {
      signos: ["Vómitos"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antidepresivos", efecto: "Riesgo de síndrome de serotonina.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Donante de grupos metilo para síntesis de GSH.",
    farmacocinetica: "Absorción oral reducida por la comida."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "90 mg a 425 mg", valor_concentracion: 200, unidad_concentracion: "mg", es_divisible: false }
  ]
};