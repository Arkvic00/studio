import type { Drug } from '@/lib/types';

export const levetiracetamDrug: Drug = {
  id: "levetiracetam",
  meta_data: {
    nombre_generico: "Levetiracetam (S-Etiracetam)",
    nombres_comerciales: ["Desitrend", "Keppra"],
    grupo_farmacologico: "Anticonvulsivo",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Se une a la proteína de la vesícula presináptica SV2A, modulando la liberación de neurotransmisores.",
      "Utilizado como terapia de mantenimiento adjunta en epilepsia refractaria.",
      "Excelente opción para terapia de pulsos en convulsiones en racimo (cluster seizures).",
      "La infusión continua puede usarse para el control de emergencia del estatus epiléptico.",
      "Absorción rápida (<2h) y estado estacionario alcanzado en 2 días.",
      "Eliminación renal; requiere ajuste de dosis en insuficiencia renal."
    ],
    usos_principales: "Tratamiento de la epilepsia idiopática refractaria, control de convulsiones en racimo, estatus epiléptico y manejo del dolor neuropático (experimental).",
    inicio_accion: "Rápido (< 2 horas)",
    duracion_efecto: "Corta (vida media de 3-4 horas en perros)"
  },
  informacion_cliente: [
    "No suspenda el medicamento de forma repentina; requiere una retirada gradual para evitar convulsiones de rebote.",
    "Puede causar somnolencia o falta de coordinación al inicio del tratamiento.",
    "Informe si nota pérdida de apetito o babeo excesivo, especialmente en gatos.",
    "El medicamento puede administrarse por vía rectal en emergencias si el animal no puede tragar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Mantenimiento (Adjunto o único)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          dosis_min: 20,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Terapia de pulsos (Convulsiones en racimo)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas durante el racimo (2-3 días)", intervalo_horas: 6 },
        notas_tecnicas: "Reducir gradualmente hasta detener tras el cese de las convulsiones."
      },
      {
        indicacion: "Estatus Epiléptico",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 60,
          unidad_calculo: "mg/kg (Bolo)"
        },
        notas_tecnicas: "Seguir con infusión continua (CRI) de 8 mg/kg/h si es necesario."
      },
      {
        indicacion: "Administración Rectal (Emergencia)",
        vias: ["Rectal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    gato: [
      {
        indicacion: "Mantenimiento / Terapia de pulsos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          dosis_min: 20,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Estatus Epiléptico",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 60,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Perros de la pradera: Convulsiones",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Convulsiones (Dosis estándar)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Convulsiones (Dosis alta / Loros Amazona)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 125,
          dosis_min: 100,
          dosis_max: 150,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Requiere monitoreo de niveles séricos debido a la alta variación individual."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal severa.",
      "Hipersensibilidad al fármaco."
    ],
    efectos_adversos: [
      "Sedación y ataxia (más común en perros).",
      "Reducción del apetito y letargo (gatos).",
      "Ptialismo (salivación excesiva en gatos).",
      "Debilidad y mareos (en humanos)."
    ],
    monitoreo_recomendado: [
      "Frecuencia y severidad de las convulsiones",
      "Función renal (Creatinina/BUN)",
      "Niveles séricos en aves (si hay falta de respuesta)"
    ],
    instrucciones_manejo: "Retirar de forma gradual. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Sedación profunda", "Ataxia severa", "Vómitos"],
      tratamiento: "Soporte sintomático; la eliminación renal es rápida."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fenobarbital", efecto: "Puede aumentar el aclaramiento del levetiracetam, reduciendo su vida media.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la proteína SV2A de las vesículas sinápticas, modulando la exocitosis de neurotransmisores y estabilizando la excitabilidad neuronal.",
    farmacocinetica: "Absorción oral casi completa. Mínima unión a proteínas plasmáticas. Excreción renal predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "250 mg, 500 mg, 1000 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable IV", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
