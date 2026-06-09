import type { Drug } from '@/lib/types';

export const diazepamDrug: Drug = {
  id: "diazepam",
  meta_data: {
    nombre_generico: "Diazepam",
    nombres_comerciales: ["Diazedor", "Diazemuls", "Valium", "Ziapam", "Stesolid"],
    grupo_farmacologico: "Benzodiazepina; Anticonvulsivo; Ansiolítico",
    status_regulatorio: "POM-V, POM. Sujeto a control de psicotrópicos."
  },
  resumen_clinico: {
    puntos_clave: [
      "Potencia el efecto inhibidor del GABA en el SNC.",
      "Fármaco de elección para el control de emergencia del estatus epiléptico.",
      "Efecto anticonvulsivo corto en perros (~20 min); no apto para mantenimiento oral.",
      "En gatos tiene una vida media mayor y puede usarse como estimulante del apetito.",
      "Relajante de la musculatura estriada (útil en espasmo uretral y tétanos).",
      "Propiedades amnésicas: útil para minimizar el impacto de experiencias aversivas."
    ],
    usos_principales: "Control de convulsiones agudas, manejo de ansiedad/pánico, relajación muscular, estimulación del apetito (gatos) y premedicación en pacientes críticos.",
    inicio_accion: "2-3 min (IV), 5-10 min (Rectal)",
    duracion_efecto: "Corta en perros; acumulativa con dosis repetidas (especialmente en gatos)."
  },
  informacion_cliente: [
    "El uso rectal es efectivo en emergencias si no hay acceso a una vena.",
    "La inyección en el músculo es muy dolorosa y el fármaco se absorbe mal por esa vía.",
    "En gatos, el uso oral repetido puede causar daño hepático grave e irreversible.",
    "Puede causar somnolencia y falta de coordinación pasajera.",
    "No suspenda el medicamento de forma brusca tras un uso de varias semanas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Convulsiones de emergencia (Bolo)",
        vias: ["IV", "Rectal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir cada 10 min si no hay efecto (máx 3 veces)", intervalo_horas: 0.16 },
        notas_tecnicas: "Administrar IV lentamente (1 min por cada 5 mg). Si falla tras 3 dosis, pasar a otros protocolos de estatus."
      },
      {
        indicacion: "Control de convulsiones (CRI)",
        vias: ["IV (Infusión)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg/h"
        }
      },
      {
        indicacion: "Ansiolítico (Táctico)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar 30-60 min antes del evento estresante. Dosis altas para amnesia."
      }
    ],
    gato: [
      {
        indicacion: "Estimulante del apetito",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.15,
          dosis_min: 0.1,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Marcaje con orina / Relajación muscular",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.125,
          dosis_min: 1.25,
          dosis_max: 5.0,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 },
        notas_tecnicas: "¡ALERTA!: Riesgo de necrosis hepática fulminante con uso oral repetido en gatos."
      },
      {
        indicacion: "Convulsiones de emergencia",
        vias: ["IV", "Rectal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    huron: [
      {
        indicacion: "Convulsiones",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Relajación uretral (Post-obstrucción)",
        vias: ["PO", "IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      }
    ],
    conejo: [
      {
        indicacion: "Convulsiones / Sedación / Relajación",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    cobaya: [
      {
        indicacion: "Excitabilidad por prurito extremo",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.75,
          dosis_min: 0.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratones, Ratas, Hámsteres: Sedación/Seizures",
        vias: ["IM", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    ave: [
      {
        indicacion: "Convulsiones",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.55,
          dosis_min: 0.1,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        }
      },
      {
        indicacion: "Aves Rapaces: Estimulante del apetito",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    reptil: [
      {
        indicacion: "Tratamiento de convulsiones",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 0.5,
          dosis_max: 2.5,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Depresión respiratoria severa.",
      "Enfermedad hepática grave (riesgo de encefalopatía).",
      "Debilidad muscular severa (Miastenia gravis).",
      "Gatos: No usar vía oral de forma crónica."
    ],
    efectos_adversos: [
      "Sedación y ataxia (incoordinación).",
      "Debilidad muscular.",
      "Respuestas paradójicas: excitación y agresividad.",
      "Gatos: Necrosis hepática fulminante (vía oral).",
      "Flebitis (con formulaciones de propilenglicol)."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria",
      "Función hepática en gatos",
      "Estado de consciencia"
    ],
    instrucciones_manejo: "Evitar el contacto con plásticos (se adsorbe). Usar recipientes de vidrio o polipropileno para CRI. Inyectar IV lentamente.",
    sobredosis: {
      signos: ["Sedación profunda", "Coma", "Apnea"],
      tratamiento: "Flumazenilo como antagonista específico. Soporte ventilatorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina / Omeprazol", efecto: "Inhiben el metabolismo del diazepam, prolongando su efecto.", severidad: "Importante" },
      { farmaco: "Fenobarbital", efecto: "Acelera el metabolismo del diazepam, reduciendo su vida media.", severidad: "Moderada" },
      { farmaco: "Opiáceos / Antihistamínicos", efecto: "Potencian el efecto sedante.", severidad: "Moderada" },
      { farmaco: "Digoxina", efecto: "El diazepam puede aumentar los niveles de digoxina.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista del receptor benzodiazepínico, facilitando la unión del neurotransmisor inhibidor GABA a sus receptores GABAA.",
    farmacocinetica: "Alta liposolubilidad. Metabolismo hepático a metabolitos activos (Nordiazepam, Oxazepam). Excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable (Emulsión)", concentracion_texto: "5 mg/ml (Diazemuls)", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "2 mg, 5 mg, 10 mg", valor_concentracion: 5, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución rectal", concentracion_texto: "2 mg/ml, 4 mg/ml (tubos)", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
