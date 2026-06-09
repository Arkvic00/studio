import type { Drug } from '@/lib/types';

export const midazolamDrug: Drug = {
  id: "midazolam",
  meta_data: {
    nombre_generico: "Midazolam",
    nombres_comerciales: ["Buccolam", "Epistatus", "Hypnovel", "Dormazolam"],
    grupo_farmacologico: "Benzodiazepina; Sedante; Anticonvulsivo",
    status_regulatorio: "POM CD Schedule 3 (Psicotrópico)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potencia el efecto inhibidor del GABA en el receptor GABAA.",
      "Más potente y de acción más corta que el diazepam.",
      "Menos irritante para los tejidos; puede usarse IM, SC e intranasal.",
      "Efecto amnésico y relajante muscular marcado.",
      "Fármaco de elección para el control de emergencia de convulsiones.",
      "En aves, puede afectar la motilidad gastrointestinal."
    ],
    usos_principales: "Sedación con amnesia, premedicación anestésica y control de emergencia del estatus epiléptico.",
    inicio_accion: "Inmediato (IV); 5-15 min (IM/IN)",
    duracion_efecto: "Corta (< 1 hora en perros)"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario estrictamente controlado.",
    "Puede causar una excitación pasajera en algunos animales antes de la sedación.",
    "El efecto desaparece rápido, lo cual es ideal para procedimientos cortos.",
    "Vigilar la respiración del animal tras la administración."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estatus Epiléptico / Convulsiones",
        vias: ["IV", "Intrarectal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.2,
          dosis_max: 0.3,
          unit_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir cada 10 min si es necesario (máx 3 veces)", intervalo_horas: 0.16 },
        notas_tecnicas: "Seguir con CRI de 0.3 mg/kg/h si es necesario para mantenimiento."
      },
      {
        indicacion: "Sedación / Premedicación",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          dosis_min: 0.1,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    gato: [
      {
        indicacion: "Estatus Epiléptico / Sedación",
        vias: ["IV", "IM", "SC", "Intrarectal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.2,
          dosis_max: 0.3,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    huron: [
      {
        indicacion: "Sedación",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Sedación / Anestesia combinada",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.1,
          dosis_min: 0.2,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Inmovilización / Sedación",
        vias: ["IV", "IM", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 0.25,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    primates: [
      {
        indicacion: "Sedación",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    erizo: [
      {
        indicacion: "Sedación",
        vias: ["SC", "IM", "Intranasal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.5,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Sedación / Premedicación",
        vias: ["IM", "IV", "Intranasal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.05,
          dosis_max: 3.0,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Loros: 1-2 mg/kg IM tiene efecto ahorrador de isoflurano significativo."
      }
    ],
    reptil: [
      {
        indicacion: "Sedación ligera",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.55,
          dosis_min: 0.1,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Sedación (con Ketamina)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Miastenia gravis.",
      "Neonatos.",
      "Hipotensión severa.",
      "Insuficiencia respiratoria grave."
    ],
    efectos_adversos: [
      "Depresión respiratoria dosis-dependiente.",
      "Hipotensión arterial.",
      "Excitación paradójica ocasional.",
      "Hipotermia."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria y saturación (SpO2)",
      "Presión arterial",
      "Temperatura corporal",
      "Estado mental"
    ],
    instrucciones_manejo: "Evitar diluir con fluidos que contengan calcio (precipita). Usar NaCl 0.9%.",
    sobredosis: {
      signos: ["Depresión severa del SNC", "Apnea", "Coma"],
      tratamiento: "Antagonista específico: Flumazenilo; soporte ventilatorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Eritromicina", efecto: "Inhibe el metabolismo del midazolam, prolongando su efecto.", severidad: "Importante" },
      { farmaco: "Anestésicos (Propofol/Gases)", efecto: "Midazolam reduce drásticamente las dosis requeridas.", severidad: "Importante" },
      { farmaco: "Opioides", efecto: "Sinergia en sedación y depresión respiratoria.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista del receptor benzodiazepínico, facilitando la acción del neurotransmisor inhibidor GABA.",
    farmacocinetica: "Metabolismo hepático rápido (CYP450). Excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "1 mg/ml, 2 mg/ml, 5 mg/ml", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Solución bucal (Buccolam)", concentracion_texto: "5 mg/ml, 10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
