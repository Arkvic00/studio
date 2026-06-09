import type { Drug } from '@/lib/types';

export const lotilanerDrug: Drug = {
  id: "lotilaner",
  meta_data: {
    nombre_generico: "Lotilaner",
    nombres_comerciales: ["Credelio"],
    grupo_farmacologico: "Isoxazolina; Insecticida y acaricida",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor de los canales de cloruro mediados por GABA y glutamato.",
      "Eficacia inmediata y persistente por un mes contra pulgas y garrapatas.",
      "Activo también contra sarnas (Sarcoptes, Demodex).",
      "Debe administrarse con comida para asegurar la absorción máxima."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por pulgas y garrapatas en perros y gatos.",
    inicio_accion: "Control de pulgas en 4-6 horas; garrapatas en 12-48 horas",
    duracion_efecto: "30 días (Mensual)"
  },
  informacion_cliente: [
    "Administre la tableta masticable siempre con la comida o inmediatamente después de comer.",
    "La mascota debe ser mordida por el parásito para que el fármaco funcione.",
    "No usar en cachorros/gatitos menores de 8 semanas.",
    "Informe si nota temblores o convulsiones, especialmente si su mascota es epiléptica."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Pulgas y Garrapatas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 31.5,
          dosis_min: 20,
          dosis_max: 43,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días con comida", intervalo_horas: 720 },
        notas_tecnicas: "No usar en perros de menos de 1.3 kg."
      }
    ],
    gato: [
      {
        indicacion: "Pulgas y Garrapatas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 6,
          dosis_max: 24,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días con comida", intervalo_horas: 720 },
        notas_tecnicas: "No usar en gatos de menos de 0.5 kg."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales menores de 8 semanas.",
      "Perros < 1.3 kg / Gatos < 0.5 kg.",
      "Animales gestantes o lactantes (seguridad no establecida).",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Signos gastrointestinales leves (vómitos, diarrea).",
      "Anorexia.",
      "Trastornos neurológicos muy raros (ataxia, temblores)."
    ],
    monitoreo_recomendado: [
      "Frecuencia de convulsiones en animales epilépticos",
      "Tolerancia digestiva"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos", "Temblores", "Ataxia"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueador potente de los canales de cloruro mediados por GABA en artrópodos, causando sobreestimulación del SNC y muerte del parásito.",
    farmacocinetica: "Absorción oral potenciada por la comida (biodisponibilidad del 80-100%)."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta masticable (Dogs)", concentracion_texto: "56.25 mg a 900 mg", valor_concentracion: 225, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta masticable (Cats)", concentracion_texto: "12 mg o 48 mg", valor_concentracion: 12, unidad_concentracion: "mg", es_divisible: false }
  ]
};
