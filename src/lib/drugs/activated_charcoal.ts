import type { Drug } from '@/lib/types';

export const activatedCharcoalDrug: Drug = {
  id: "activated_charcoal",
  meta_data: {
    nombre_generico: "Carbón Activado",
    nombres_comerciales: ["Actidose-Aqua", "Charcodote", "Liqui-Char"],
    grupo_farmacologico: "Adsorbente de toxinas; Antídoto",
    status_regulatorio: "AVM-GSL, P"
  },
  resumen_clinico: {
    puntos_clave: [
      "Adsorbe toxinas, fluidos y gases en el tracto gastrointestinal.",
      "Como regla general, administrar al menos 10 veces el volumen del intoxicante ingerido.",
      "Repetir dosis si ocurre emesis o ingesta masiva.",
      "Necesario repetir dosis en toxinas altamente liposolubles (recirculación enterohepática).",
      "Útil en el manejo de aves empetroladas."
    ],
    usos_principales: "Intoxicaciones agudas (organofosforados, pesticidas, etilenglicol, metales pesados, etc.). Reducción de la absorción de tóxicos ingeridos.",
    inicio_accion: "Inmediato (acción local en tracto GI)",
    duracion_efecto: "Durante el tránsito intestinal"
  },
  informacion_cliente: [
    "Provocará que las heces de su mascota se vuelvan negras; esto es normal y no representa peligro médico.",
    "El polvo es muy volátil y mancha permanentemente; prepárelo con extrema precaución.",
    "No administrar junto con medicamentos que provoquen el vómito (eméticos).",
    "Reduce la eficacia de otros medicamentos administrados por boca."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Intoxicación aguda (Dosis general)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2250,
          dosis_min: 500,
          dosis_max: 4000,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única o repetir según sea necesario", intervalo_horas: 0 },
        notas_tecnicas: "Administrar como una papilla en agua. Preferiblemente 10 veces la cantidad de toxina ingerida."
      }
    ],
    gato: [
      {
        indicacion: "Intoxicación aguda",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2250,
          dosis_min: 500,
          dosis_max: 4000,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    huron: [
      {
        indicacion: "Intoxicación aguda",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2750,
          dosis_min: 500,
          dosis_max: 5000,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Intoxicación aguda",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2750,
          dosis_min: 500,
          dosis_max: 5000,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Intoxicación aguda",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2750,
          dosis_min: 500,
          dosis_max: 5000,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Intoxicación / Aves empetroladas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3750,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Quelonios (Tortugas): Intoxicación",
        vias: ["Sonda gástrica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5000,
          dosis_min: 2000,
          dosis_max: 8000,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Uso previo a la administración de eméticos (el carbón absorbe el emético).",
      "Pacientes deshidratados con hipernatremia grave.",
      "Obstrucción gastrointestinal o perforación GI sospechada.",
      "Animales con riesgo de aspiración (problemas de deglución)."
    ],
    efectos_adversos: [
      "Heces de color negro (clínicamente insignificante).",
      "Estreñimiento o diarrea.",
      "Vómitos (especialmente con administración rápida).",
      "Hipernatremia (si se usan productos con sorbitol)."
    ],
    monitoreo_recomendado: [
      "Estado de hidratación",
      "Niveles de sodio sérico en uso repetido",
      "Frecuencia de defecación"
    ],
    instrucciones_manejo: "PRECAUCIÓN: El polvo mancha permanentemente. Manejar con cuidado extremo. Las pastas son más fáciles de controlar.",
    sobredosis: {
      signos: ["Estreñimiento severo", "Hipernatremia"],
      tratamiento: "Soporte sintomático y corrección de electrolitos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fármacos orales (General)", efecto: "Reduce drásticamente su absorción y eficacia.", severidad: "Importante" },
      { farmaco: "Jarabe de Ipecacuana", efecto: "El carbón inactiva el emético.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Superficie porosa masiva que atrae y atrapa moléculas de toxinas mediante fuerzas de Van der Waals, impidiendo su absorción sistémica.",
    farmacocinetica: "No se absorbe. Se elimina intacto por las heces junto con las toxinas adsorbidas."
  },
  presentaciones_comerciales: [
    {
      tipo: "Polvo",
      concentracion_texto: "50 g",
      valor_concentracion: 50000,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Suspensión preparada",
      concentracion_texto: "200 mg/ml (20%)",
      valor_concentracion: 200,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};