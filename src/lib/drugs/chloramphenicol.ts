import type { Drug } from '@/lib/types';

export const chloramphenicolDrug: Drug = {
  id: "chloramphenicol",
  meta_data: {
    nombre_generico: "Cloranfenicol",
    nombres_comerciales: ["Chloromycetin", "Kemicetine", "Chlorogen", "Redidrops", "Minims", "Optrex"],
    grupo_farmacologico: "Antibiótico de amplio espectro; Bacteriostático (50S)",
    status_regulatorio: "POM. Categoría C (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bacteriostático de amplio espectro que inhibe la síntesis proteica (subunidad 50S).",
      "Alta liposolubilidad: excelente penetración en el ojo (intraocular) y Sistema Nervioso Central (SNC).",
      "Uso restringido a infecciones graves con susceptibilidad confirmada (ej. MRSA) debido a toxicidad humana.",
      "Cruza la barrera placentaria y se excreta en la leche.",
      "Los gatos son más susceptibles a la supresión de médula ósea por su metabolismo lento."
    ],
    usos_principales: "Infecciones intraoculares, meningitis/encefalitis, salmonelosis resistente y quitridiomicosis en anfibios.",
    inicio_accion: "Rápido (pico plasmático en 1-3 horas)",
    duracion_efecto: "Corta (requiere dosis cada 6 a 12 horas)"
  },
  informacion_cliente: [
    "¡PELIGRO!: El contacto humano con este fármaco puede causar anemia aplásica fatal en personas predispuestas. Use SIEMPRE guantes impermeables.",
    "No triturar las cápsulas; deben tragarse enteras.",
    "Informe inmediatamente si nota que su mascota está muy pálida, presenta fiebre o moretones.",
    "En gatos, el tratamiento prolongado requiere análisis de sangre frecuentes.",
    "¡NUNCA dar vía oral a conejos o cobayas! Riesgo de muerte por diarrea severa."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas / Oculares profundas",
        vias: ["PO", "IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 45,
          dosis_min: 40,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Infecciones del SNC (Neurológicas)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 a 6 horas", intervalo_horas: 6 }
      },
      {
        indicacion: "Tópico Ocular",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "gota" },
        frecuencia: { texto_ui: "Cada 4 a 8 horas (Ungüento q8-12h)", intervalo_horas: 6 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "IV lenta", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Vigilancia estrecha de la médula ósea en esta especie."
      }
    ],
    huron: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "SC", "IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 37.5,
          dosis_min: 25,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones sistémicas (¡SOLO SC!)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "¡ADVERTENCIA!: Evitar vía oral (enterotoxemia fatal)."
      }
    ],
    roedores: [
      {
        indicacion: "Ratas y Ratones: Sistémica",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Cobayas / Jerbos: Agua de bebida",
        vias: ["PO (Agua)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "mg/ml (1000 mg/l)"
        }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones sistémicas (Parenteral)",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Infecciones sistémicas (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Palomas: Sistémica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas (General)",
        vias: ["PO", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 45,
          dosis_min: 40,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Boidos / Serpientes de agua",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 72 horas (según especie)", intervalo_horas: 24 }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Sistémica",
        vias: ["SC", "IM", "Intracelómica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Quitridiomicosis (Baño)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/l"
        },
        notas_tecnicas: "Seguro para larvas y adultos. En salamandras gigantes (Hellbenders) pueden requerirse hasta 200 mg/l."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida.",
      "Fallo hepático severo.",
      "Neonatos (reducir dosis o evitar).",
      "Manipulación sin protección (riesgo humano de anemia aplásica)."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO VÍA ORAL!: Riesgo de enterotoxemia fatal.",
      "Cobaya": "¡PROHIBIDO VÍA ORAL!: Riesgo de enterotoxemia fatal.",
      "Anfibios": "Puede alterar drásticamente el microbioma cutáneo protector."
    },
    efectos_adversos: [
      "Supresión reversible de médula ósea (dosis-dependiente).",
      "Gastrotoxicidad (vómitos, diarrea).",
      "Anafilaxia.",
      "Anemia aplásica fatal en humanos (contacto)."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) en tratamientos prolongados (>1 semana)",
      "Función hepática y renal",
      "Estado digestivo en herbívoros"
    ],
    instrucciones_manejo: "EXTREMA PRECAUCIÓN: Utilizar guantes impermeables y mascarilla. Evitar contacto con piel y mucosas. Proteger de la luz.",
    sobredosis: {
      signos: ["Pancitopenia", "Vómitos severos", "Colapso"],
      tratamiento: "Cese inmediato y soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Inhibidores CYP450 (Fenobarbital/Propofol)", efecto: "El cloranfenicol aumenta sus niveles sanguíneos al inhibir su metabolismo.", severidad: "Importante" },
      { farmaco: "Rifampicina", efecto: "Acelera el metabolismo del cloranfenicol, bajando su eficacia.", severidad: "Moderada" },
      { farmaco: "Antibióticos bactericidas (Beta-lactámicos/Aminoglucósidos)", efecto: "El cloranfenicol puede inhibir su actividad bactericida.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la subunidad ribosomal 50S, impidiendo la formación de enlaces peptídicos y la síntesis de proteínas bacterianas.",
    farmacocinetica: "Absorción rápida. Alta penetración tisular y de barreras naturales (SNC, próstata, ojo)."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsulas", concentracion_texto: "250 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Vial inyectable (Polvo)", concentracion_texto: "1 g", valor_concentracion: 1000, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Ungüento oftálmico", concentracion_texto: "1%", valor_concentracion: 10, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Solución oftálmica", concentracion_texto: "0.5%", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};