import type { Drug } from '@/lib/types';

export const toceranibDrug: Drug = {
  id: "toceranib",
  meta_data: {
    nombre_generico: "Toceranib (Fosfato de toceranib)",
    nombres_comerciales: ["Palladia"],
    grupo_farmacologico: "Inhibidor de la tirosina quinasa; Antineoplásico",
    status_regulatorio: "POM-V. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor selectivo de receptores de tirosina quinasa (c-KIT, VEGFR2, PDGFR).",
      "Posee efectos antitumorales y antiangiogénicos.",
      "Tratamiento de elección para mastocitomas caninos no resecables (Grado 2/3).",
      "Requiere monitoreo mensual estricto (sangre, orina, presión arterial).",
      "Puede causar hipertensión y pérdida de proteínas por orina."
    ],
    usos_principales: "Mastocitomas recurrentes, carcinomas de glándula mamaria, sarcomas de tejidos blandos y melanomas en perros.",
    inicio_accion: "Interferencia inmediata con señalización celular",
    duracion_efecto: "Requiere administración cada 48 horas"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia; manejar siempre con guantes.",
    "Las tabletas están recubiertas y no deben romperse ni triturarse.",
    "Informe inmediatamente si nota diarrea con sangre, vómitos, pérdida de peso o letargo.",
    "Se requieren análisis de sangre y orina mensuales obligatorios.",
    "Evitar contacto con excretas del animal por 48h post-dosis."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Mastocitoma / Neoplasias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.75,
          dosis_min: 2.5,
          dosis_max: 3.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 horas (o Lunes-Miércoles-Viernes)", intervalo_horas: 48 },
        notas_tecnicas: "Ajustar dosis según tolerancia. Monitorizar UPC para vigilar proteinuria."
      }
    ],
    gato: [
      {
        indicacion: "Uso extra-label (Carcinomas / Sarcomas)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 1.5,
          dosis_max: 3.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 horas o 3 veces por semana", intervalo_horas: 48 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hembras gestantes o lactantes.",
      "Perros menores de 2 años o < 5 kg.",
      "Hemorragia gastrointestinal activa.",
      "Hipersensibilidad al toceranib."
    ],
    efectos_adversos: [
      "Diarrea, vómitos y anorexia (comunes).",
      "Mielosupresión (neutropenia).",
      "Hipertensión sistémica.",
      "Proteinuria (pérdida de proteínas).",
      "Cojera o dolor musculoesquelético.",
      "Cambios en la pigmentación del pelo."
    ],
    monitoreo_recomendado: [
      "Hemograma y bioquímica mensual",
      "Urianálisis (UPC) mensual",
      "Presión arterial",
      "Prueba de sangre oculta en heces si hay sospecha GI"
    ],
    instrucciones_manejo: "CITOTÓXICO. Seguir protocolos de seguridad. Lavarse las manos tras la administración.",
    sobredosis: {
      signos: ["Trastornos GI severos", "Supresión medular", "Fallo multiorgánico"],
      tratamiento: "Soporte sintomático intensivo y suspensión del fármaco."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs / Corticosteroides", efecto: "Aumentan significativamente el riesgo de toxicidad GI.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de múltiples quinasas involucradas en el crecimiento tumoral, la supervivencia celular y la angiogénesis patológica.",
    farmacocinetica: "Metabolismo hepático y eliminación fecal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta recubierta",
      concentracion_texto: "10 mg, 15 mg, 50 mg",
      valor_concentracion: 15,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
