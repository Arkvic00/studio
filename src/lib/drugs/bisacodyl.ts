import type { Drug } from '@/lib/types';

export const bisacodylDrug: Drug = {
  id: "bisacodyl",
  meta_data: {
    nombre_generico: "Bisacodilo",
    nombres_comerciales: ["Dulcolax", "Entrolax"],
    grupo_farmacologico: "Laxante estimulante suave",
    status_regulatorio: "P (Farmacia)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Laxante estimulante que incrementa la motilidad intestinal e inhibe la absorción de agua.",
      "Actúa localmente en el colon con mínima absorción sistémica (<5%).",
      "No debe triturarse ni dividirse para evitar calambres severos.",
      "Uso exclusivo a corto plazo; las dosis son empíricas."
    ],
    usos_principales: "Tratamiento del estreñimiento.",
    inicio_accion: "6–10 horas (oral); 15–60 minutos (rectal).",
    duracion_efecto: "Variable (usar según sea necesario)"
  },
  informacion_cliente: [
    "Las tabletas deben tragarse enteras; no las triture ni las divida, ya que esto puede causar calambres estomacales severos.",
    "No es adecuado para uso a largo plazo sin supervisión veterinaria.",
    "Informe si su mascota presenta diarrea persistente o dolor abdominal."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estreñimiento",
        vias: ["PO", "Rectal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          dosis_min: 5,
          dosis_max: 15,
          unidad_calculo: "mg/perro"
        },
        frecuencia: {
          texto_ui: "Según sea necesario (prn)",
          intervalo_horas: 0
        },
        notas_tecnicas: "Dosis empíricas basadas en el tamaño del animal. No exceder 15 mg."
      }
    ],
    gato: [
      {
        indicacion: "Estreñimiento",
        vias: ["PO", "Rectal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Según sea necesario (prn)",
          intervalo_horas: 0
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Íleo paralítico.",
      "Obstrucción intestinal mecánica.",
      "Deshidratación severa."
    ],
    efectos_adversos: [
      "Malestar abdominal y cólicos.",
      "Diarrea."
    ],
    monitoreo_recomendado: [
      "Estado de hidratación",
      "Frecuencia de defecación"
    ],
    instrucciones_manejo: "No triturar ni dividir las tabletas entéricas.",
    sobredosis: {
      signos: ["Diarrea severa", "Cólicos intensos"],
      tratamiento: "Soporte sintomático y corrección de deshidratación si ocurre."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estimula los plexos nerviosos intramurales del colon para aumentar el peristaltismo. Altera el transporte de electrolitos de la mucosa intestinal, aumentando el contenido de agua en las heces.",
    farmacocinetica: "Menos del 5% se absorbe sistémicamente."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta con recubrimiento entérico",
      concentracion_texto: "5 mg",
      valor_concentracion: 5,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Supositorio rectal",
      concentracion_texto: "10 mg",
      valor_concentracion: 10,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
