import type { Drug } from '@/lib/types';

export const acetylcysteineDrug: Drug = {
  id: "acetylcysteine",
  meta_data: {
    nombre_generico: "Acetilcisteína",
    nombres_comerciales: ["Ilube", "Parvolex", "StromEase"],
    grupo_farmacologico: "Mucolítico; Antídoto hepatoprotector",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Mucolítico y precursor de glutatión.",
      "Antídoto para intoxicación por paracetamol y xilitol.",
      "Actividad anticolagenasa útil en úlceras corneales.",
      "Sabor muy desagradable (dar vía sonda si es oral)."
    ],
    usos_principales: "Hepatotoxicidad (paracetamol), enfermedades respiratorias, KCS y muda de anteojos en reptiles.",
    inicio_accion: "Rápido",
    duracion_efecto: "Variable"
  },
  informacion_cliente: [
    "La solución oral sabe mal y puede causar náuseas.",
    "Uso oftálmico frecuente en úlceras 'melting'."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Perros: Intoxicación por paracetamol (Carga IV)",
        vias: ["IV lenta (15-20 min)"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 210, dosis_min: 140, dosis_max: 280, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Diluir al 5% en Dextrosa 5%."
      },
      {
        indicacion: "Perros: Intoxicación por paracetamol (Mantenimiento)",
        vias: ["IV lenta"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 70, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 6 horas (7 dosis)", intervalo_horas: 6 }
      },
      {
        indicacion: "Perros: Mucolítico (Nebulización)",
        vias: ["Nebulización"],
        math: { tipo_calculo: "fija", dosis_recomendada: 50, unidad_calculo: "mg (solución 2%)" },
        duracion_tratamiento: "30–60 min"
      }
    ],
    gato: [
      {
        indicacion: "Gatos: Intoxicación por paracetamol (Carga IV)",
        vias: ["IV lenta"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 210, dosis_min: 140, dosis_max: 280, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Vía IV preferida por baja biodisponibilidad oral."
      },
      {
        indicacion: "Gatos: Mucolítico (¡CUIDADO ASMA!)",
        vias: ["Nebulización"],
        math: { tipo_calculo: "fija", dosis_recomendada: 50, unidad_calculo: "mg" },
        notas_tecnicas: "Riesgo de broncoespasmo en asma felina."
      }
    ],
    conejo: [
      {
        indicacion: "Conejos (Rabbits): Lavado ótico (Otitis media)",
        vias: ["Ótica"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1.5, dosis_min: 1, dosis_max: 2, unidad_calculo: "ml (solución 20%)" }
      }
    ],
    roedores: [
      {
        indicacion: "Hámsteres, Ratas, Ratones: Mucolítico",
        vias: ["Nebulización"],
        math: { tipo_calculo: "fija", dosis_recomendada: 20, unidad_calculo: "mg/ml" },
        frecuencia: { texto_ui: "Cada 6-12 horas", intervalo_horas: 12 },
        duracion_tratamiento: "30-60 min"
      }
    ],
    ave: [
      {
        indicacion: "Aves: Mucolítico / Potenciar fármacos",
        vias: ["Nebulización"],
        math: { tipo_calculo: "fija", dosis_recomendada: 22, unidad_calculo: "mg/ml" }
      }
    ],
    reptil: [
      {
        indicacion: "Reptiles: Retención de anteojos (Spectacles)",
        vias: ["Tópica"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "aplicación" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Hipersensibilidad conocida."],
    efectos_adversos: [
      "Broncoespasmo (inhalado).",
      "Náuseas y vómitos (PO)."
    ],
    monitoreo_recomendado: [
      "Patrón respiratorio durante nebulización",
      "Función hepática"
    ],
    instrucciones_manejo: "Usar guantes para evitar olor persistente.",
    sobredosis: {
      signos: ["Vómitos severos"],
      tratamiento: "Soporte."
    },
    interacciones_farmacologicas: [
      { farmaco: "Carbón activado", efecto: "Puede reducir la absorción de acetilcisteína.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Reduce viscosidad de secreciones y mantiene niveles de glutatión.",
    farmacocinetica: "Baja biodisponibilidad oral en gatos."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "200 mg/ml", valor_concentracion: 200, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Sol. Oftálmica", concentracion_texto: "5%", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};