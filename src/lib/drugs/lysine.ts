import type { Drug } from '@/lib/types';

export const lysineDrug: Drug = {
  id: "lysine",
  meta_data: {
    nombre_generico: "L-Lisina",
    nombres_comerciales: ["Enisyl"],
    grupo_farmacologico: "Aminoácido esencial; Antiviral adyuvante",
    status_regulatorio: "GSL (Venta libre)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antagoniza la arginina, aminoácido requerido para la replicación del herpesvirus.",
      "Uso principal en la supresión y prevención de reactivaciones de Herpesvirus Felino-1 (FHV-1).",
      "Seguro en gatos, pero la evidencia clínica de eficacia es limitada en algunos estudios.",
      "Es vital no reducir la arginina de la dieta, ya que los gatos son muy sensibles a su deficiencia."
    ],
    usos_principales: "Manejo de la infección por Herpesvirus Felino-1 (FHV-1) y reducción de la excreción viral.",
    inicio_accion: "Lento (efecto preventivo)",
    duracion_efecto: "Requiere suplementación diaria"
  },
  informacion_cliente: [
    "Suplemento seguro para ayudar a controlar los brotes de gripe felina (herpes).",
    "Disponible en pasta, cápsulas o premios masticables.",
    "Informe si su mascota presenta diarrea leve (único efecto secundario común).",
    "No es una cura definitiva, sino una ayuda para las defensas del gato."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Manejo de FHV-1 (Gato Adulto)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 500,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "Equivalente a 2 ml o 2 pulsaciones de pasta Enisyl."
      },
      {
        indicacion: "Manejo de FHV-1 (Gatitos)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 250,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No usar preparaciones que contengan propilenglicol en gatos."
    ],
    efectos_adversos: [
      "Diarrea leve y reversible.",
      "Malestar gastrointestinal ocasional."
    ],
    monitoreo_recomendado: [
      "Frecuencia de brotes de FHV-1 (estornudos, conjuntivitis)",
      "Estado digestivo"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Diarrea"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Competición con la arginina por la incorporación en las proteínas virales del herpesvirus, inhibiendo su síntesis.",
    farmacocinetica: "Absorción oral rápida."
  },
  presentaciones_comerciales: [
    { tipo: "Pasta oral", concentracion_texto: "250 mg/ml", valor_concentracion: 250, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Cápsula", concentracion_texto: "250 mg, 500 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: false }
  ]
};
