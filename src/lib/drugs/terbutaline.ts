import type { Drug } from '@/lib/types';

export const terbutalineDrug: Drug = {
  id: "terbutaline",
  meta_data: {
    nombre_generico: "Terbutalina",
    nombres_comerciales: ["Bricanyl", "Monovent"],
    grupo_farmacologico: "Agonista beta-2 adrenérgico selectivo; Broncodilatador",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula directamente los receptores beta-2, provocando broncodilatación.",
      "Uso en el asma felina y bronquitis crónica canina.",
      "Útil para el manejo del síndrome del seno enfermo (bradicardia).",
      "Menos efectos cardíacos que el isoproterenol.",
      "Requiere precaución en animales con hipertiroidismo o diabetes."
    ],
    usos_principales: "Broncodilatación y mantenimiento de la frecuencia cardíaca en bradiarritmias.",
    inicio_accion: "Rápido (minutos tras SC; 30-60 min PO)",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Informe si nota temblores, agitación o latidos cardíacos muy rápidos.",
    "Generalmente se administra dos o tres veces al día.",
    "Utilizar con precaución en animales con antecedentes de convulsiones.",
    "Informe al veterinario si su mascota es diabética."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Broncodilatación",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.125,
          dosis_min: 1.25,
          dosis_max: 5,
          unidad_calculo: "mg/perro"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Bradiarritmias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Broncodilatación / Asma",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.625,
          dosis_min: 0.312,
          dosis_max: 1.25,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia cardíaca congestiva severa.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Taquicardia y arritmias.",
      "Temblores musculares finos e inquietud.",
      "Hipopotasemia.",
      "Hipertensión transitoria."
    ],
    monitoreo_recomendado: [
      "Frecuencia y ritmo cardíaco",
      "Estado respiratorio",
      "Niveles de potasio en uso intensivo"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Taquicardia extrema", "Convulsiones", "Vómitos"],
      tratamiento: "Soporte sintomático; considerar bloqueadores beta-1 selectivos (atenolol) si la taquicardia es crítica."
    },
    interacciones_farmacologicas: [
      { farmaco: "Teofilina / Corticosteroides", efecto: "Aumentan el riesgo de hipopotasemia.", severidad: "Moderada" },
      { farmaco: "Betabloqueadores", efecto: "Antagonismo directo de efectos.", severidad: "Importante" },
      { farmaco: "Digitálicos", efecto: "Aumentan riesgo de arritmias cardíacas.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista selectivo de receptores adrenérgicos beta-2, aumentando el AMP cíclico intracelular y relajando el músculo liso bronquial.",
    farmacocinetica: "Absorción oral buena. Excreción renal predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "5 mg", valor_concentracion: 5, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Jarabe oral", concentracion_texto: "1.5 mg/5 ml", valor_concentracion: 0.3, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "0.5 mg/ml", valor_concentracion: 0.5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
