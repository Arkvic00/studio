import type { Drug } from '@/lib/types';

export const clarithromycinDrug: Drug = {
  id: "clarithromycin",
  meta_data: {
    nombre_generico: "Claritromicina",
    nombres_comerciales: ["Klaricid", "Biaxin"],
    grupo_farmacologico: "Macrólido; Antibiótico derivado de la eritromicina",
    status_regulatorio: "POM. Categoría C (Precaución) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Macrólido tiempo-dependiente con mayor actividad y mejor absorción que la eritromicina.",
      "Altamente liposoluble; excelente para patógenos intracelulares.",
      "Activo contra Gram-positivos, algunos Gram-negativos (Pasteurella), espiroquetas (Helicobacter) y micobacterias.",
      "Útil en infecciones respiratorias, de piel y micobacteriosis no tuberculosas.",
      "La actividad se potencia en pH alcalino; administrar con el estómago vacío.",
      "En hurones, parte del protocolo para Helicobacter mustelae y micobacteriosis."
    ],
    usos_principales: "Tratamiento de infecciones respiratorias, micobacteriosis (lepra felina/canina), Helicobacter spp. y mycoplasmosis severa en tortugas.",
    inicio_accion: "Rápido tras administración oral",
    duracion_efecto: "Requiere administración cada 12 a 24 horas"
  },
  informacion_cliente: [
    "Administrar preferiblemente con el estómago vacío para una mejor absorción.",
    "Informe si nota vómitos, llagas en la boca (estomatitis) o color amarillento en los ojos.",
    "Completar el ciclo de tratamiento según lo indicado por el veterinario.",
    "Puede aumentar los niveles de otros medicamentos en sangre, como la teofilina o la digoxina."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas susceptibles",
        vias: ["PO", "IV (infusión)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 8,
          dosis_min: 4,
          dosis_max: 12,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Síndrome de Granuloma Leproide (con Rifampicina)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 15,
          dosis_max: 25,
          unidad_calculo: "mg/kg/día"
        },
        frecuencia: { texto_ui: "Dosis diaria total dividida q8-12h", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas susceptibles",
        vias: ["PO", "IV (infusión)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Síndrome de Lepra Felina (Dosis fija)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 62.5,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Usualmente combinado con una fluoroquinolona y rifampicina o clofazimina."
      }
    ],
    huron: [
      {
        indicacion: "Helicobacter mustelae / Mycobacterium abscessus",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          dosis_min: 8,
          dosis_max: 12.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Osteomielitis por Staphylococcus (con Rifampicina)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 80,
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
          dosis_recomendada: 6.75,
          dosis_min: 3.5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    primates: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    erizo: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Dosis general (anecdótica)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 85,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Terapia micobacteriana (Palerma)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 55,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    reptil: [
      {
        indicacion: "Tortugas del desierto: Mycoplasmosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 a 72 horas", intervalo_horas: 48 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia hepática severa.",
      "Hipersensibilidad a macrólidos."
    ],
    efectos_adversos: [
      "Vómitos y náuseas.",
      "Hepatitis colestásica.",
      "Estomatitis y glositis.",
      "Diarrea."
    ],
    monitoreo_recomendado: [
      "Enzimas hepáticas en tratamientos prolongados",
      "Función renal en pacientes predispuestos"
    ],
    instrucciones_manejo: "Usar con precaución en animales con disfunción hepática. Reducir dosis en fallo renal.",
    sobredosis: {
      signos: ["Trastornos gastrointestinales severos"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Teofilina / Metilprednisolona / Omeprazol / Itraconazol", efecto: "Aumenta sus niveles séricos (riesgo de toxicidad).", severidad: "Importante" },
      { farmaco: "Digoxina", efecto: "Puede potenciar su absorción y toxicidad.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la subunidad ribosomal 50S, inhibiendo la formación del enlace peptídico y la síntesis de proteínas bacterianas.",
    farmacocinetica: "Vida media tisular prolongada. Metabolismo hepático activo."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "250 mg, 500 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "25 mg/ml (125mg/5ml)", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Vial inyectable", concentracion_texto: "500 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: false }
  ]
};