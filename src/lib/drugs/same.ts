import type { Drug } from '@/lib/types';

export const sameDrug: Drug = {
  id: "same",
  meta_data: {
    nombre_generico: "S-Adenosilmetionina (SAMe)",
    nombres_comerciales: ["Denosyl", "Zentonil"],
    grupo_farmacologico: "Nutracéutico; Citoprotector hepático",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Molécula endógena esencial para el metabolismo celular y la desintoxicación hepática.",
      "Aumenta los niveles de glutatión hepático.",
      "Protege a los hepatocitos de la muerte celular y mejora la fluidez de la membrana.",
      "También utilizado para el soporte de la función cognitiva.",
      "Debe administrarse en ayunas para una absorción óptima."
    ],
    usos_principales: "Tratamiento adyuvante de hepatopatías crónicas, toxicidad hepática y disfunción cognitiva geriátrica.",
    inicio_accion: "Lento (efectos observados en semanas)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Administrar la tableta entera, sin triturar ni romper.",
    "Dar preferiblemente por la mañana, al menos una hora antes de la comida.",
    "Es un suplemento muy seguro con pocos efectos secundarios.",
    "Acompañar con un poco de agua para asegurar que la tableta llegue al estómago."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Soporte hepático / Cognitivo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 18,
          dosis_min: 15,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Soporte hepático / Lipidosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 18,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Ninguna conocida."],
    efectos_adversos: ["Malestar gastrointestinal leve (raro)."],
    monitoreo_recomendado: ["Enzimas hepáticas (ALT/ALP)"],
    instrucciones_manejo: "Mantener en envase original protegido de la humedad.",
    sobredosis: {
      signos: ["No reportados; margen de seguridad muy amplio."],
      treatment: "No requerido."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Precursor de la cisteína, necesaria para la síntesis de glutatión (principal antioxidante hepático).",
    farmacocinetica: "Absorción intestinal variable, mejora significativamente en ayunas."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta entérica", concentracion_texto: "90 mg, 225 mg, 425 mg", valor_concentracion: 225, unidad_concentracion: "mg" }
  ]
};