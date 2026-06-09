import type { Drug } from '@/lib/types';

export const azithromycinDrug: Drug = {
  id: "azithromycin",
  meta_data: {
    nombre_generico: "Azitromicina",
    nombres_comerciales: ["Zithromax", "Azyter", "Clamelle", "Zedbac"],
    grupo_farmacologico: "Macrólido; Inhibidor de la síntesis proteica (50S)",
    status_regulatorio: "POM. Clasificado como categoría C (Precaución) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Macrólido tiempo-dependiente con una vida media tisular excepcionalmente larga.",
      "Alternativa a la penicilina en individuos alérgicos.",
      "Activo contra Gram-positivos, algunos Gram-negativos (Pasteurella), Mycoplasma y Chlamydia.",
      "Se ha reportado su uso para reducir la hiperplasia gingival secundaria a ciclosporina.",
      "Su actividad se potencia en pH alcalino; administrar con el estómago vacío."
    ],
    usos_principales: "Infecciones del tracto respiratorio, piel y tejidos blandos. Tratamiento de clamidiosis en aves y Babesia gibsoni en perros.",
    inicio_accion: "Rápido (mejor absorción oral que eritromicina)",
    duracion_efecto: "Prolongada (permite intervalos de q24h a q72h)"
  },
  informacion_cliente: [
    "Administrar preferiblemente con el estómago vacío para una mejor absorción.",
    "Completar el tratamiento según lo indicado, incluso si los síntomas desaparecen rápido.",
    "Informe si nota vómitos o color amarillento en los ojos (ictericia).",
    "Agite bien la suspensión oral antes de usar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas / Piel / Respiratorio",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas (puede pasarse a q48h tras 3-5 días)",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Hiperplasia gingival (por Ciclosporina)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones de vías respiratorias altas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 5 días, luego cada 72 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Protocolo alternativo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24h (días 1-2), luego cada 3-5 días (máx 5 dosis)",
          intervalo_horas: 24
        }
      }
    ],
    huron: [
      {
        indicacion: "Protocolo para Helicobacter",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 5 días",
          intervalo_horas: 24
        }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones respiratorias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 22.5,
          dosis_min: 15,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Sífilis del conejo",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4.5,
          dosis_min: 4,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 48 horas por 7 días",
          intervalo_horas: 48
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas y Ratones: Sistémica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas por 14 días",
          intervalo_horas: 12
        }
      }
    ],
    primates: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    ave: [
      {
        indicacion: "Clamidiosis (Psitacosis)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 a 48 horas hasta por 45 días",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Mycoplasma",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 65,
          dosis_min: 50,
          dosis_max: 80,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24h por 3 días, descansar 4 días (repetir 3 semanas)",
          intervalo_horas: 24
        }
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones de piel",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 3 días",
          intervalo_horas: 72
        }
      },
      {
        indicacion: "Infecciones respiratorias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 5 días",
          intervalo_horas: 120
        }
      },
      {
        indicacion: "Infecciones de órganos internos (Hígado/Riñón)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 7 días",
          intervalo_horas: 168
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Fallo renal severo.",
      "Fallo hepático severo.",
      "Hipersensibilidad a macrólidos."
    ],
    efectos_adversos: [
      "Vómitos (menos frecuentes que con eritromicina).",
      "Hepatitis colestásica.",
      "Estomatitis y glositis."
    ],
    monitoreo_recomendado: [
      "Función hepática en tratamientos prolongados",
      "Función renal"
    ],
    sobredosis: {
      signos: ["Vómitos severos", "Diarrea"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Teofilina", efecto: "Puede aumentar los niveles séricos de teofilina.", severidad: "Moderada" },
      { farmaco: "Digoxina", efecto: "Puede aumentar la absorción y toxicidad de la digoxina.", severidad: "Importante" },
      { farmaco: "Metilprednisolona", efecto: "Puede aumentar los niveles de metilprednisolona.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la subunidad ribosomal 50S, inhibiendo la formación del enlace peptídico y la síntesis de proteínas bacterianas.",
    farmacocinetica: "Mejor absorción oral que eritromicina y mayor penetración tisular."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "250 mg, 500 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "40 mg/ml (200mg/5ml)", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};