import type { Drug } from '@/lib/types';

export const penicillamineDrug: Drug = {
  id: "penicillamine",
  meta_data: {
    nombre_generico: "Penicilamina",
    nombres_comerciales: ["Pendramine", "Penicillamine*"],
    grupo_farmacologico: "Agente quelante; Antirreumático",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente quelante oral que se une al cobre, mercurio y plomo.",
      "También se une a la cistina para formar un complejo soluble.",
      "No es útil en crisis agudas de cobre ya que la quelación tarda semanas o meses.",
      "Puede reducir la absorción de minerales dietéticos (Zinc, Hierro, Calcio) en uso crónico."
    ],
    usos_principales: "Manejo de la enfermedad por almacenamiento de cobre (Bedlington Terriers), hepatopatías asociadas al cobre, cistinuria e intoxicación por plomo.",
    inicio_accion: "Lento (semanas para efecto quelante tisular)",
    duracion_efecto: "Durante el periodo de administración"
  },
  informacion_cliente: [
    "Administrar con el estómago vacío, al menos 1 hora antes de las comidas.",
    "Si causa vómitos, consulte al veterinario; a veces se administran antihistamínicos previos.",
    "Se requieren análisis de sangre y orina semanales al inicio del tratamiento.",
    "Informe si nota fiebre, erupciones cutáneas o moretones inusuales."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Enfermedad por almacenamiento de cobre",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Dar 1 hora antes de comer. La quelación efectiva puede tardar meses."
      },
      {
        indicacion: "Cistinuria",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Intoxicación por Plomo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas por 1-2 semanas", intervalo_horas: 8 },
        notas_tecnicas: "Generalmente administrado tras terapia con CaEDTA."
      }
    ],
    gato: [
      {
        indicacion: "Intoxicación por Plomo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas por 1 semana", intervalo_horas: 8 }
      }
    ],
    huron: [
      {
        indicacion: "Intoxicación por Plomo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Intoxicación por Plomo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Intoxicación por Plomo y Zinc",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 42.5,
          dosis_min: 30,
          dosis_max: 55,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Bajo índice terapéutico en aves; riesgo de hipoglucemia y vómitos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal moderada a severa.",
      "Historial de discrasias sanguíneas por penicilamina.",
      "Alergia conocida a la penicilina (riesgo de sensibilidad cruzada)."
    ],
    efectos_adversos: [
      "Anorexia, vómitos y diarrea.",
      "Fiebre.",
      "Síndrome nefrótico (daño renal).",
      "Leucopenia y trombocitopenia.",
      "Aves: Riesgo de hipoglucemia y muerte."
    ],
    monitoreo_recomendado: [
      "Hemograma completo semanal al inicio",
      "Urianálisis para detectar proteinuria",
      "Niveles de plomo sérico"
    ],
    instrucciones_manejo: "Observar precauciones normales. Proteger de la humedad.",
    sobredosis: {
      signos: ["Vómitos severos", "Supresión medular", "Fallo renal"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antiácidos / Hierro / Zinc", efecto: "Reducen drásticamente la absorción de penicilamina.", severidad: "Importante" },
      { farmaco: "Citotóxicos", efecto: "Aumento de efectos renales y hematológicos.", severidad: "Importante" },
      { farmaco: "AINEs", efecto: "Aumento del riesgo de daño renal.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Forma complejos estables y solubles con metales pesados y cistina, facilitando su excreción renal.",
    farmacocinetica: "Absorción oral rápida pero reducida por la comida."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "125 mg, 250 mg", valor_concentracion: 125, unidad_concentracion: "mg", es_divisible: true }
  ]
};
