import type { Drug } from '@/lib/types';

export const thyroxineDrug: Drug = {
  id: "thyroxine",
  meta_data: {
    nombre_generico: "L-Tiroxina (Levotiroxina, T4)",
    nombres_comerciales: ["Leventa", "Soloxine", "Thyforon"],
    grupo_farmacologico: "Hormona tiroidea sintética",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Reemplazo sintético de la hormona tiroidea endógena T4.",
      "Requiere monitoreo de niveles séricos 4-8h post-toma.",
      "Pacientes con enfermedad cardíaca requieren dosis iniciales reducidas.",
      "Puede desenmascarar una insuficiencia adrenal (Addison).",
      "La biodisponibilidad es mejor en ayunas."
    ],
    usos_principales: "Tratamiento de elección para el hipotiroidismo en perros y gatos.",
    inicio_accion: "Variable (mejoría clínica en semanas)",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota está muy inquieta, tiene el corazón rápido o jadea en exceso.",
    "El tratamiento es de por vida.",
    "Realizar análisis de sangre periódicos para ajustar la dosis.",
    "Informe al veterinario si el animal tiene problemas de corazón o diabetes.",
    "Administrar preferiblemente con el estómago vacío."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipotiroidismo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          dosis_min: 0.02,
          dosis_max: 0.04,
          unidad_calculo: "mg/kg/día"
        },
        frecuencia: { texto_ui: "Cada 24 horas (o dividido q12h)", intervalo_horas: 24 },
        notas_tecnicas: "Ajustar según niveles valle y pico de T4 (Objetivo: rango alto de normalidad)."
      }
    ],
    gato: [
      {
        indicacion: "Hipotiroidismo iatrogénico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Tirotoxicosis.",
      "Infarto de miocardio agudo.",
      "Insuficiencia adrenal no corregida."
    ],
    efectos_adversos: [
      "Taicardia e inquietud (sobredosis).",
      "Jadeo excesivo.",
      "Polidipsia y poliuria.",
      "Vómitos y diarrea.",
      "Pérdida de peso rápida."
    ],
    monitoreo_recomendado: [
      "T4 total a las 4-6 horas post-toma",
      "Frecuencia cardíaca",
      "Niveles de glucosa en diabéticos"
    ],
    instrucciones_manejo: "Observar precauciones normales. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Tirotoxicosis: agitación, arritmias, hipertermia"],
      tratamiento: "Suspensión temporal del fármaco; soporte sintomático; betabloqueadores si hay taicardia severa."
    },
    interacciones_farmacologicas: [
      { farmaco: "Simpaticomiméticos (Adrenalina)", efecto: "Riesgo de arritmias cardíacas fatales.", severidad: "Importante" },
      { farmaco: "Insulina", efecto: "Puede alterar los requerimientos de insulina en diabéticos.", severidad: "Moderada" },
      { farmaco: "Digoxina", efecto: "La tiroxina puede reducir su efecto terapéutico.", severidad: "Leve" },
      { farmaco: "Ketamina", efecto: "Riesgo de hipertensión y taicardia.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a receptores nucleares alterando la expresión génica y activando el metabolismo basal.",
    farmacocinetica: "Metabolismo hepático y eliminación biliar/fecal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "0.1 mg a 0.8 mg", valor_concentracion: 0.2, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "1 mg/ml", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
