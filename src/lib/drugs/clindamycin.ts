import type { Drug } from '@/lib/types';

export const clindamycinDrug: Drug = {
  id: "clindamycin",
  meta_data: {
    nombre_generico: "Clindamicina",
    nombres_comerciales: ["Antirobe", "Clinacin", "Clindacyl", "Clindaseptin", "Mycinor", "Zodon"],
    grupo_farmacologico: "Lincosamida",
    status_regulatorio: "POM-V. Categoría C (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Antibiótico lincosamida tiempo-dependiente que inhibe la síntesis proteica (50S).",
      "Excelente penetración en hueso, bilis, próstata y fluidos intracelulares.",
      "Activo contra Gram-positivos (incluyendo estafilococos resistentes a penicilina), anaerobios obligados y protozoos (Toxoplasma, Neospora).",
      "Resistencia cruzada completa con lincomicina y parcial con eritromicina."
    ],
    usos_principales: "Infecciones de cavidad oral (enfermedad periodontal), pioderma, osteomielitis, artritis séptica, toxoplasmosis y neosporosis.",
    inicio_accion: "Rápido",
    duracion_efecto: "Requiere administración cada 12 a 24 horas"
  },
  informacion_cliente: [
    "En gatos, administrar la tableta seguida de una pequeña cantidad de agua o comida para prevenir irritación del esófago (esofagitis).",
    "¡PELIGRO!: No administrar a conejos, cobayas o hámsteres; puede causar una diarrea mortal.",
    "Informe si nota diarrea severa o pérdida de apetito en su mascota.",
    "Puede administrarse con o sin comida, pero la comida suele reducir las molestias estomacales."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones orales / Pioderma / Hueso",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Dosis alternativa: 11 mg/kg q24h. En infecciones graves, puede aumentarse a 11 mg/kg q12h."
      },
      {
        indicacion: "Toxoplasmosis / Neosporosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas por 4 semanas", intervalo_horas: 12 },
        notas_tecnicas: "Dosis total diaria de 25 mg/kg dividida en dos tomas."
      }
    ],
    gato: [
      {
        indicacion: "Infecciones orales / Pioderma",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Asegurar la deglución con agua/comida para evitar esofagitis."
      },
      {
        indicacion: "Toxoplasmosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "En casos de afectación del SNC, se recomiendan dosis más altas (hasta 50 mg/kg/día total)."
      }
    ],
    huron: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 8.25,
          dosis_min: 5.5,
          dosis_max: 11,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Toxoplasmosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 18.75,
          dosis_min: 12.5,
          dosis_max: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 16,
          dosis_min: 7.5,
          dosis_max: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    primates: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "10 mg/kg PO q12h o 20 mg/kg IM q8h."
      }
    ],
    petauro: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5.5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    erizo: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5.5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones sistémicas (General)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          dosis_min: 25,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas (ver notas)", intervalo_horas: 12 },
        notas_tecnicas: "Dosis según intervalo: 25 mg/kg q8h, 50 mg/kg q12h o 100 mg/kg q24h."
      },
      {
        indicacion: "Palomas: Infecciones",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 }
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.75,
          dosis_min: 2.5,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Choleoeimeria (Dragones de Rankin)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 7 días", intervalo_horas: 24 },
        notas_tecnicas: "Usar en combinación con toltrazuril."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a las lincosamidas.",
      "Conejos, cobayas, hámsteres y chinchillas (Absoluta).",
      "No usar en caballos o rumiantes (enterotoxemia fatal)."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO!: Causa enterotoxemia fatal. No administrar bajo ninguna circunstancia.",
      "Cobaya": "¡PROHIBIDO!: Causa enterotoxemia fatal.",
      "Hamster": "¡PROHIBIDO!: Causa enterotoxemia fatal.",
      "Gato": "Riesgo de esofagitis y estenosis esofágica con formas sólidas si no se lavan con agua."
    },
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Colitis.",
      "Esofagitis (especialmente en gatos).",
      "Enterotoxemia fatal en herbívoros pequeños."
    ],
    monitoreo_recomendado: [
      "Función renal y hepática en tratamientos prolongados",
      "Consistencia de las heces"
    ],
    instrucciones_manejo: "No triturar cápsulas/tabletas si es posible. Seguir con 5ml de agua en gatos.",
    sobredosis: {
      signos: ["Diarrea severa", "Vómitos", "Anorexia"],
      tratamiento: "Soporte sintomático y suspensión inmediata."
    },
    interacciones_farmacologicas: [
      { farmaco: "Relajantes musculares no despolarizantes", efecto: "Puede potenciar su efecto bloqueador.", severidad: "Importante" },
      { farmaco: "Macrólidos / Cloranfenicol", efecto: "Antagonismo competitivo por el sitio de unión ribosomal.", severidad: "Importante" },
      { farmaco: "Neostigmina / Piridostigmina", efecto: "La clindamicina puede antagonizar sus efectos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la subunidad 50S del ribosoma bacteriano, bloqueando la formación de la cadena peptídica. Puede ser bactericida o bacteriostático según la susceptibilidad.",
    farmacocinetica: "Siendo una base débil, se concentra en fluidos ácidos (ion-trapping) como leche, próstata y fluidos intracelulares."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula/Tableta", concentracion_texto: "25 mg a 300 mg", valor_concentracion: 75, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "25 mg/ml", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
