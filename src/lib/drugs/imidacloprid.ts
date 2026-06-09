import type { Drug } from '@/lib/types';

export const imidaclopridDrug: Drug = {
  id: "imidacloprid",
  meta_data: {
    nombre_generico: "Imidacloprid",
    nombres_comerciales: ["Advantage", "Advantix", "Advocate", "Seresto", "Moxiclear", "Prinovox"],
    grupo_farmacologico: "Insecticida neonicotinoide",
    status_regulatorio: "POM-V, AVM-GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida por unión a receptores nicotínicos post-sinápticos del insecto.",
      "Provoca parálisis y muerte de pulgas y sus larvas.",
      "Disponible solo o en combinaciones potentes (moxidectina, permetrina, flumetrina).",
      "Eficaz contra piojos y algunos ácaros (Leporacus en conejos).",
      "Mortal para organismos acuáticos y abejas."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por pulgas en perros, gatos, hurones y conejos. Tratamiento de ácaros en lagartos.",
    inicio_accion: "Rápido (control de pulgas en 24h)",
    duracion_efecto: "30 días (pipeta); hasta 8 meses (collar Seresto)"
  },
  informacion_cliente: [
    "Aplicar directamente sobre la piel de la nuca.",
    "¡PELIGRO!: Nunca use productos que contengan permetrina (ej. Advantix) en gatos; es mortal para ellos.",
    "No permitir que el perro nade en aguas naturales durante las 48h posteriores a la aplicación.",
    "El producto tiene un sabor amargo y puede causar babeo si el animal lo lame húmedo.",
    "Retirar el collar Seresto antes de nadar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Pulgas y Garrapatas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 semanas", intervalo_horas: 672 }
      }
    ],
    gato: [
      {
        indicacion: "Pulgas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 semanas", intervalo_horas: 672 }
      }
    ],
    huron: [
      {
        indicacion: "Pulgas y Dirofilaria (Advocate)",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.4,
          unidad_calculo: "ml (pipeta Advocate para gatos pequeños)"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 }
      }
    ],
    conejo: [
      {
        indicacion: "Pulgas (Advantage)",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.4,
          unidad_calculo: "ml (pipeta para <4kg)"
        },
        frecuencia: { texto_ui: "Cada 4 semanas", intervalo_horas: 672 }
      },
      {
        indicacion: "Ácaros del pelo (Leporacus) (Combinado con Permetrina)",
        vias: ["Tópica"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.125, unidad_calculo: "ml/kg" }
      }
    ],
    roedores: [
      {
        indicacion: "Pulgas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 }
      }
    ],
    reptil: [
      {
        indicacion: "Ácaros en Dragones Barbudos/Lagartos (con Moxidectina)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "ml/kg (Solución 100/25 mg/ml)"
        },
        frecuencia: { texto_ui: "Cada 14 días (3 dosis total)", intervalo_horas: 336 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatitos/Cachorros < 8 semanas.",
      "Uso de Permetrina en gatos (¡MORTAL!).",
      "Kittens < 1kg o Puppies < 7 semanas (según combinación)."
    ],
    efectos_adversos: [
      "Prurito y eritema local transitorio.",
      "Salivación profusa si se ingiere.",
      "Letargo y agitación ocasionales.",
      "Toxicidad en organismos acuáticos y aves."
    ],
    monitoreo_recomendado: [
      "Integridad de la piel en el sitio de aplicación",
      "Ausencia de lamido tras la aplicación"
    ],
    instrucciones_manejo: "Lavar manos tras su uso. No contaminar el medio ambiente.",
    sobredosis: {
      signos: ["Hipersalivación", "Temblores (si contiene flumetrina y se ingiere)"],
      tratamiento: "Administrar diazepam si hay ingestión accidental de collares combinados."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de receptores nicotínicos de acetilcolina en insectos, provocando sobreestimulación nerviosa y muerte.",
    farmacocinetica: "Se distribuye por la superficie corporal en la capa lipídica cutánea."
  },
  presentaciones_comerciales: [
    { tipo: "Pipetas Spot-on", concentracion_texto: "100 mg/ml (10%)", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Collar (Seresto)", concentracion_texto: "1.25 g Imid. + 0.56 g Flum.", valor_concentracion: 1.25, unidad_concentracion: "g", es_divisible: false }
  ]
};