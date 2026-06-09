import type { Drug } from '@/lib/types';

export const sarolanerDrug: Drug = {
  id: "sarolaner",
  meta_data: {
    nombre_generico: "Sarolaner",
    nombres_comerciales: ["Simparica", "Stronghold Plus"],
    grupo_farmacologico: "Isoxazolina; Insecticida y acaricida",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea los canales de cloruro regulados por GABA.",
      "Eficacia inmediata y persistente por un mes contra pulgas y garrapatas.",
      "Activo contra ácaros del oído (Otodectes) y sarnas (Demodex/Sarcoptes).",
      "El parásito debe empezar a alimentarse para exponerse al fármaco."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por pulgas, garrapatas y ácaros en perros y gatos.",
    inicio_accion: "Pulgas: 8h; Garrapatas: 12h",
    duracion_efecto: "30 días (Mensual)"
  },
  informacion_cliente: [
    "Administrar mensualmente.",
    "La tableta para perros es masticable y suele aceptarse bien.",
    "En gatos, el producto se aplica habitualmente como pipeta (Stronghold Plus).",
    "Informe si nota temblores o convulsiones, especialmente si su mascota ya tiene epilepsia.",
    "No usar en animales de menos de 8 semanas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Pulgas / Garrapatas / Sarnas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 },
        notas_tecnicas: "No usar en perros < 1.3 kg."
      }
    ],
    gato: [
      {
        indicacion: "Pulgas / Garrapatas / Ácaros (Stronghold Plus)",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 },
        notas_tecnicas: "Viene combinado con selamectina (6 mg/kg). No usar en gatos < 1.25 kg."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales menores de 8 semanas.",
      "Perros < 1.3 kg / Gatos < 1.25 kg.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Signos gastrointestinales leves (diarrea).",
      "Prurito leve en sitio de aplicación (gatos).",
      "Trastornos neurológicos muy raros (ataxia, temblores)."
    ],
    monitoreo_recomendado: [
      "Frecuencia de convulsiones en animales epilépticos",
      "Integridad de la piel en sitio de aplicación"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Letargo", "Vómitos", "Signos neurológicos transitorios"],
      treatment: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs / Warfarina", efecto: "Competencia potencial por unión a proteínas.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueador potente de los canales de cloruro mediados por GABA en artrópodos.",
    farmacocinetica: "Absorción rápida y amplia distribución tisular."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta masticable (Dogs)", concentracion_texto: "5 mg a 120 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Pipeta Spot-on (Cats)", concentracion_texto: "10 mg/ml sarolaner (+ 60mg/ml selamectina)", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
