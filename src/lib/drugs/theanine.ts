import type { Drug } from '@/lib/types';

export const theanineDrug: Drug = {
  id: "theanine",
  meta_data: {
    nombre_generico: "L-Teanina (Suntheanine)",
    nombres_comerciales: ["Anxitane"],
    grupo_farmacologico: "Nutracéutico ansiolítico; Aminoácido",
    status_regulatorio: "GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Aminoácido presente en el té verde con efectos calmantes.",
      "Aumenta los niveles de GABA, serotonina y dopamina en el cerebro.",
      "No causa sedación ni somnolencia.",
      "Uso para ansiedades leves y miedos sociales.",
      "Eficacia demostrada en miedo a tormentas (storm-sensitive).",
      "No apto para agresividad severa o fobias profundas."
    ],
    usos_principales: "Manejo de la ansiedad leve, miedos sociales y estrés ambiental en perros y gatos.",
    inicio_accion: "Rápido (pico en horas)",
    duracion_efecto: "6 a 12 horas"
  },
  informacion_cliente: [
    "Suplemento natural para ayudar a que su mascota esté más tranquila.",
    "Las tabletas son muy sabrosas y suelen aceptarse como premio.",
    "No causa sueño; el animal seguirá alerta pero más relajado.",
    "Para eventos estresantes puntuales, dar 6 horas antes del evento.",
    "Muy seguro para su uso a largo plazo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Manejo de Ansiedad / Miedos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas (o q6h durante eventos agudos)",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Manejo de Ansiedad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Ansiedad con agresividad (puede desinhibir la respuesta)."
    ],
    efectos_adversos: [
      "Generalmente nulos.",
      "Trastornos GI leves (raro)."
    ],
    monitoreo_recomendado: [
      "Grado de relajación del animal",
      "Cambios en conducta social"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Trastornos GI leves"],
      tratamiento: "No suele requerirse intervención."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea competitivamente la unión de ácido glutámico a sus receptores y modula neurotransmisores inhibitorios.",
    farmacocinetica: "Absorción oral rápida. Atraviesa la barrera hematoencefálica."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta masticable",
      concentracion_texto: "50 mg, 100 mg",
      valor_concentracion: 50,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
