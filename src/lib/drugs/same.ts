import type { Drug } from '@/lib/types';

export const sameDrug: Drug = {
  id: "same",
  meta_data: {
    nombre_generico: "S-Adenosilmetionina (SAMe)",
    nombres_comerciales: ["Denamarin", "Denosyl", "Samylin", "Zentonil", "Novifit"],
    grupo_farmacologico: "Antioxidante hepático; Nutracéutico cognitivo",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Molecula endógena clave para la producción de Glutatión (GSH).",
      "Potente antioxidante que protege los hepatocitos de toxinas.",
      "Mejora la fluidez de membrana y el metabolismo de monoaminas en el SNC.",
      "Uso adyuvante en hepatopatías tóxicas (ej. paracetamol, CCNU).",
      "Ayuda en el manejo de la disfunción cognitiva geriátrica.",
      "Administrar estrictamente con el estómago vacío."
    ],
    usos_principales: "Soporte hepático, intoxicaciones, y manejo de la demencia senil canina.",
    inicio_accion: "Lento (mejoría clínica en semanas)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Dar el medicamento siempre 1 hora ANTES de la comida.",
    "Las tabletas deben tragarse enteras (no triturar ni dividir).",
    "Suele ser parte de un tratamiento a largo plazo.",
    "Seguro y con muy pocos efectos secundarios.",
    "Informe si nota vómitos o diarrea (poco frecuente)."
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
        frecuencia: { texto_ui: "Cada 24 horas (en ayunas)", intervalo_horas: 24 },
        notas_tecnicas: "Dosis mínima común: 100 mg por cada 10 kg."
      }
    ],
    gato: [
      {
        indicacion: "Soporte Hepático / Biliar",
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
    contraindicaciones: [
      "Ninguna conocida de importancia clínica."
    ],
    efectos_adversos: [
      "Trastornos gastrointestinales leves (vómitos).",
      "Agitación o ansiedad paradójica (raro).",
      "Boca seca."
    ],
    monitoreo_recomendado: [
      "Enzimas hepáticas (ALT, ALP)",
      "Estado cognitivo",
      "Niveles de Glutatión (si es posible)"
    ],
    instrucciones_manejo: "Higroscópico. Mantener en envase original cerrado.",
    sobredosis: {
      signos: ["Vómitos", "Diarrea"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antidepresivos (ISRS / IMAOs)", efecto: "Riesgo de potenciar efectos serotoninérgicos.", severidad: "Moderada" },
      { farmaco: "Tramadol", efecto: "Riesgo potencial de síndrome de serotonina.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Precursor del glutatión y donante de grupos metilo para reacciones de transmetilación esenciales en el hígado y cerebro.",
    farmacocinetica: "Absorción oral pobre y muy variable (reducida drásticamente por la comida)."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "90 mg a 425 mg", valor_concentracion: 200, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Sobre (polvo)", concentracion_texto: "75 mg a 400 mg", valor_concentracion: 200, unidad_concentracion: "mg", es_divisible: false }
  ]
};
