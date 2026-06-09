import type { Drug } from '@/lib/types';

export const mannitolDrug: Drug = {
  id: "mannitol",
  meta_data: {
    nombre_generico: "Manitol",
    nombres_comerciales: ["Mannitol*"],
    grupo_farmacologico: "Diurético osmótico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Azúcar alcohol inerte que actúa como diurético osmótico.",
      "Reduce la presión intracraneal e intraocular en 15 min.",
      "El efecto dura de 3 a 8 horas tras suspender la infusión.",
      "Las soluciones al 20% suelen cristalizar en frío; calentar para disolver antes de usar.",
      "Se recomienda el uso de un filtro en línea para infusiones de soluciones concentradas.",
      "La administración en bolo (20-30 min) puede ser más efectiva que la continua para reducir la PIC."
    ],
    usos_principales: "Reducción de la presión intracraneal (PIC) aguda, tratamiento del glaucoma agudo y manejo de la insuficiencia renal oligúrica.",
    inicio_accion: "15 minutos (IV)",
    duracion_efecto: "3 a 8 horas"
  },
  informacion_cliente: [
    "Fármaco de uso estrictamente hospitalario para emergencias neurológicas u oculares.",
    "Requiere monitoreo constante de la hidratación y los riñones.",
    "Informe si nota que el animal parece tener dificultad para respirar o se hincha (edema)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Presión intracraneal (PIC) elevada",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1000,
          dosis_min: 250,
          dosis_max: 2000,
          unidad_calculo: "mg/kg (solución 15-20%)"
        },
        frecuencia: { texto_ui: "Administrar en 20-30 min; puede repetirse cada 4-8h", intervalo_horas: 4 },
        notas_tecnicas: "Dosis recomendada: 0.25 - 1.0 g/kg. Evitar hipovolemia para mantener la presión de perfusión cerebral."
      },
      {
        indicacion: "Glaucoma agudo (Refractario)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1250,
          dosis_min: 500,
          dosis_max: 2000,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Administrar en 30 min; repetir 2-4 veces en 48h si es necesario", intervalo_horas: 12 },
        notas_tecnicas: "Restringir el acceso al agua las primeras horas tras la dosis para maximizar el efecto osmótico."
      },
      {
        indicacion: "Fallo renal oligúrico o anúrico temprano",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 375,
          dosis_min: 250,
          dosis_max: 500,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Administrar en 5-10 min; puede repetirse en 4h si hay éxito", intervalo_horas: 4 },
        notas_tecnicas: "Rehidratar al paciente ANTES de usar manitol."
      }
    ],
    gato: [
      {
        indicacion: "PIC elevada / Glaucoma / Fallo Renal",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 500,
          dosis_min: 250,
          dosis_max: 1000,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    huron: [
      {
        indicacion: "Edema cerebral / PIC",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 750,
          dosis_min: 500,
          dosis_max: 1000,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Infusión en 20 minutos", intervalo_horas: 0 }
      }
    ],
    primates: [
      {
        indicacion: "PIC elevada",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 375,
          dosis_min: 250,
          dosis_max: 500,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Infusión en 5-10 minutos", intervalo_horas: 0 }
      }
    ],
    ave: [
      {
        indicacion: "Fallo renal agudo / Edema cerebral",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.1,
          dosis_min: 0.2,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Deshidratación severa.",
      "Congestión pulmonar severa o edema pulmonar.",
      "Anuria por fallo renal antes de rehidratar.",
      "Fallo cardíaco congestivo severo."
    ],
    efectos_adversos: [
      "Desequilibrios de fluidos y electrolitos (hiponatremia, hipopotasemia).",
      "Sobrecarga circulatoria y acidosis (en dosis altas).",
      "Tromboflebitis y necrosis cutánea por extravasación.",
      "Efecto rebote: el uso prolongado puede acumular manitol en el cerebro y empeorar el edema.",
      "Diarrea si se administra vía oral."
    ],
    monitoreo_recomendado: [
      "Estado de hidratación y producción de orina",
      "Electrolitos séricos y equilibrio ácido-base",
      "Presión arterial",
      "Integridad de la vía venosa"
    ],
    instrucciones_manejo: "Calentar el frasco si hay cristales visibles (especialmente en sol. al 20%). Usar filtro en línea.",
    sobredosis: {
      signos: ["Sobrecarga circulatoria", "Edema pulmonar", "Acidosis"],
      tratamiento: "Cese inmediato de la infusión y tratamiento de soporte."
    },
    interacciones_farmacologicas: [
      { farmaco: "Ciclosporina", efecto: "Aumento del riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Diuréticos de asa (Furosemida)", efecto: "Riesgo de hipopotasemia severa.", severidad: "Moderada" },
      { farmaco: "Sangre entera", efecto: "Incompatible en la misma línea de infusión.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Aumenta la osmolaridad del plasma, extrayendo agua de los compartimentos intracelular e intersticial (incluyendo cerebro y ojo) hacia el sistema vascular. En el riñón, impide la reabsorción de agua por ósmosis en el túbulo proximal.",
    farmacocinetica: "Mínima absorción oral. Excreción renal rápida tras administración IV."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable IV", concentracion_texto: "10%, 15%, 20%", valor_concentracion: 200, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
