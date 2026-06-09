import type { Drug } from '@/lib/types';

export const alprazolamDrug: Drug = {
  id: "alprazolam",
  meta_data: {
    nombre_generico: "Alprazolam",
    nombres_comerciales: ["Xanax", "Alprazolam*"],
    grupo_farmacologico: "Benzodiazepina",
    status_regulatorio: "POM (Sujeto a control de psicotrópicos según legislación local)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Benzodiazepina de acción corta con potente efecto ansiolítico.",
      "Posee propiedades amnésicas anterógradas y retrógradas únicas.",
      "Ideal para eventos agudos de miedo o pánico (tormentas, pirotecnia).",
      "Puede usarse para minimizar el impacto emocional de una experiencia aversiva si se da inmediatamente después."
    ],
    usos_principales: "Tratamiento de trastornos de ansiedad y miedo en perros y gatos. Adjunto en el manejo de fobias. Control del marcaje con orina en gatos.",
    inicio_accion: "Rápido (30 minutos antes del evento)",
    duracion_efecto: "Corta (requiere dosis repetidas si el estímulo persiste)"
  },
  informacion_cliente: [
    "Administrar aproximadamente 30 minutos antes del evento previsible de miedo.",
    "Puede causar somnolencia o leve falta de coordinación.",
    "En algunos animales, puede causar una respuesta paradójica de excitación o agresividad.",
    "No interrumpir el tratamiento de forma brusca tras un uso prolongado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ansiolisis / Miedo / Pánico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.01,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Según sea necesario (hasta 4 veces al día)",
          intervalo_horas: 6
        },
        notas_tecnicas: "Titular hasta la dosis mínima efectiva. Dosis únicas >0.25 mg/kg pueden bloquear la memoria significativamente pero causan sedación."
      }
    ],
    gato: [
      {
        indicacion: "Ansiolisis / Marcaje con orina",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.18,
          dosis_min: 0.125,
          dosis_max: 0.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Según sea necesario (hasta 2 veces al día)",
          intervalo_horas: 12
        },
        notas_tecnicas: "En marcaje con orina, se espera una alta tasa de recaída al retirar el fármaco. Se han reportado dosis desde 0.25 mg/gato hasta 0.6 mg/kg."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a las benzodiazepinas.",
      "Glaucoma.",
      "Enfermedad renal o hepática significativa.",
      "Animales gestantes o lactantes."
    ],
    precauciones: [
      "Riesgo de desinhibición en animales con agresividad ansiosa.",
      "Utilizar con precaución en animales de trabajo (afecta la memoria y coordinación)."
    ],
    efectos_adversos: [
      "Somnolencia.",
      "Ataxia leve y transitoria (incoordinación).",
      "Desinhibición de la agresión.",
      "Polifagia (aumento del apetito)."
    ],
    monitoreo_recomendado: [
      "Función hepática en tratamientos prolongados",
      "Cambios en el comportamiento (agresividad)"
    ],
    sobredosis: {
      signos: ["Sedación profunda", "Coma", "Depresión respiratoria"],
      tratamiento: "Flumazenilo (antagonista específico), soporte cardiorrespiratorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Itraconazol / Ketoconazol", efecto: "Inhiben el metabolismo del alprazolam, aumentando su toxicidad.", severidad: "Importante" },
      { farmaco: "Depresores del SNC", efecto: "Efectos sedantes aditivos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Potencia la actividad del neurotransmisor GABA en el sistema nervioso central, resultando en efectos ansiolíticos, sedantes y amnésicos."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "0.25 mg, 0.5 mg, 1 mg, 2 mg",
      valor_concentracion: 0.25,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
