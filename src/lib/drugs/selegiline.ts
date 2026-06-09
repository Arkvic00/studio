import type { Drug } from '@/lib/types';

export const selegilineDrug: Drug = {
  id: "selegiline",
  meta_data: {
    nombre_generico: "Selegilina (l-Deprenil)",
    nombres_comerciales: ["Selgian"],
    grupo_farmacologico: "Inhibidor de la Monoamino Oxidasa tipo B (IMAO-B)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe selectivamente la MAO-B, aumentando los niveles de dopamina y feniletilamina.",
      "Posee propiedades neuroprotectoras.",
      "Tratamiento de trastornos emocionales (depresión, fobia generalizada).",
      "Fármaco de elección para la disfunción cognitiva canina (demencia).",
      "No requiere retirada gradual."
    ],
    usos_principales: "Tratamiento de trastornos de la conducta de origen emocional y disfunción cognitiva geriátrica en perros y gatos.",
    inicio_accion: "Lento (evaluar tras 2 meses)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota está más inquieta o excitada.",
    "El tratamiento suele requerir al menos 2 meses para ver resultados.",
    "No usar junto con analgésicos opioides potentes (petidina) o antidepresivos.",
    "Seguro para suspender de forma repentina si es necesario.",
    "No usar en hembras embarazadas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Trastornos conductuales / Disfunción cognitiva",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Deterioro cognitivo senil",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación y lactancia (afecta prolactina).",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Trastornos digestivos leves.",
      "Agitación o inquietud.",
      "Hipotensión transitoria."
    ],
    monitoreo_recomendado: [
      "Estado cognitivo y actividad",
      "Conducta social"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Agitación extrema", "Taquicardia", "Hipertermia"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Amitraz", efecto: "Potenciación del riesgo de toxicidad por IMAO.", severidad: "Importante" },
      { farmaco: "Petidina", efecto: "Riesgo de coma e hipertermia fatal. NO COMBINAR.", severidad: "Grave" },
      { farmaco: "ISRS (Fluoxetina) / Tricíclicos", efecto: "Riesgo de síndrome de serotonina fatal. Esperar 6 semanas de lavado.", severidad: "Grave" },
      { farmaco: "Morfina", efecto: "Potenciación del efecto opioide.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor irreversible de la MAO-B, enzima responsable de la degradación de dopamina.",
    farmacocinetica: "Metabolismo hepático. Vida media corta pero efecto prolongado por unión irreversible."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "4 mg, 10 mg", valor_concentracion: 4, unidad_concentracion: "mg", es_divisible: true }
  ]
};
