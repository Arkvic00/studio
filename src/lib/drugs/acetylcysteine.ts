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
      "En conejos se usa para otitis media secretora.",
      "Sabor muy desagradable (dar vía sonda si es oral)."
    ],
    usos_principales: "Hepatotoxicidad (paracetamol), enfermedades respiratorias, KCS y muda de anteojos en reptiles.",
    inicio_accion: "Rápido",
    duracion_efecto: "Variable"
  },
  informacion_cliente: [
    "La solución oral sabe mal y puede causar náuseas.",
    "En los ojos se puede combinar con hipromelosa."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Perros: Intoxicación por paracetamol (Carga)",
        vias: ["IV lenta (15-20 min)"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 210, dosis_min: 140, dosis_max: 280, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Diluir al 5% en dextrosa al 5%. Continuar con 70 mg/kg cada 6h por 7 dosis."
      },
      {
        indicacion: "Perros: Mucolítico",
        vias: ["Nebulización (Solución 2%)"],
        math: { tipo_calculo: "fija", dosis_recomendada: 50, unidad_calculo: "mg" },
        duracion_tratamiento: "30–60 min"
      }
    ],
    gato: [
      {
        indicacion: "Gatos: Intoxicación por paracetamol (Carga)",
        vias: ["IV lenta"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 210, dosis_min: 140, dosis_max: 280, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Vía IV preferida sobre la oral debido a baja biodisponibilidad en gatos."
      },
      {
        indicacion: "Gatos: Mucolítico (¡CUIDADO ASMA!)",
        vias: ["Nebulización"],
        math: { tipo_calculo: "fija", dosis_recomendada: 50, unidad_calculo: "mg" },
        notas_tecnicas: "Riesgo de broncoespasmo en gatos con asma felina."
      }
    ],
    conejo: [
      {
        indicacion: "Conejos (Rabbits): Lavado ótico (Otitis media)",
        vias: ["Ótica (Solución 20%)"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1.5, dosis_min: 1, dosis_max: 2, unidad_calculo: "ml" }
      }
    ],
    ave: [
      {
        indicacion: "Aves: Mucolítico / Mejorar penetración de fármacos",
        vias: ["Nebulización"],
        math: { tipo_calculo: "fija", dosis_recomendada: 22, unidad_calculo: "mg/ml" },
        notas_tecnicas: "Mejora la penetración de antibióticos nebulizados (Amikacina/Gentamicina)."
      }
    ],
    reptil: [
      {
        indicacion: "Reptiles: Retención de anteojos",
        vias: ["Tópica"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "aplicación" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Hipersensibilidad."],
    efectos_adversos: [
      "Broncoespasmo (inhalado).",
      "Náuseas y vómitos (vía oral)."
    ],
    monitoreo_recomendado: [
      "Patrón respiratorio durante nebulización",
      "Función hepática"
    ],
    instrucciones_manejo: "Precauciones normales.",
    sobredosis: {
      signos: ["Vómitos", "Signos alérgicos"],
      tratamiento: "Soporte."
    },
    interacciones_farmacologicas: [
      { farmaco: "Carbón activado", efecto: "Puede reducir la absorción de la acetilcisteína.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Mucolítico y precursor de glutatión hepático.",
    farmacocinetica: "Baja biodisponibilidad oral en gatos."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "200 mg/ml", valor_concentracion: 200, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Colirio", concentracion_texto: "25 mg/ml", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Sol. Oftálmica", concentracion_texto: "5%", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
