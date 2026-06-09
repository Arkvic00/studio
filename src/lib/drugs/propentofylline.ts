import type { Drug } from '@/lib/types';

export const propentofyllineDrug: Drug = {
  id: "propentofylline",
  meta_data: {
    nombre_generico: "Propentofilina",
    nombres_comerciales: ["Vivitonin", "Vitofyllin"],
    grupo_farmacologico: "Derivado de xantina; Inhibidor de PDE",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la fosfodiesterasa, aumentando el flujo sanguíneo cerebral y periférico.",
      "Posee efectos broncodilatadores y antiarrítmicos leves.",
      "Mejora la agudeza mental y la tolerancia al ejercicio en perros viejos.",
      "No es un estimulante del SNC per se, sino un facilitador metabólico.",
      "Administrar 30 minutos antes de la comida."
    ],
    usos_principales: "Mejora del estado de ánimo y cognición en perros geriátricos (disfunción cognitiva).",
    inicio_accion: "Lento (mejoría tras 2-4 semanas)",
    duracion_efecto: "12 horas"
  },
  informacion_cliente: [
    "Dar el medicamento siempre 30 minutos antes de la comida.",
    "Específico para perros mayores que parecen confundidos o están menos activos.",
    "Ayuda a que el animal esté más alerta y respire mejor al caminar.",
    "Informe si nota que el animal parece muy agitado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Geriátricos / Disfunción Cognitiva",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.75,
          dosis_min: 2.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas (en ayunas)", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Uso extra-label (Disfunción cognitiva)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 12.5,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación y lactancia.",
      "Animales destinados a la cría."
    ],
    efectos_adversos: [
      "Aumento de la frecuencia cardíaca (inusual).",
      "Agitación leve.",
      "Vómitos (raro)."
    ],
    monitoreo_recomendado: [
      "Estado cognitivo y actividad",
      "Frecuencia cardíaca en cardiópatas"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Taquicardia", "Agitación extrema"],
      tratamiento: "Suspensión temporal y soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la fosfodiesterasa y aumenta la adenosina extracelular, provocando vasodilatación y mejora del metabolismo energético neuronal.",
    farmacocinetica: "Absorción oral rápida. Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "50 mg, 100 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true }
  ]
};