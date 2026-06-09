import type { Drug } from '@/lib/types';

export const fipronilDrug: Drug = {
  id: "fipronil",
  meta_data: {
    nombre_generico: "Fipronil",
    nombres_comerciales: ["Broadline", "Frontect", "Frontline", "Frontline Combo/Plus", "Effipro", "PestiGon"],
    grupo_farmacologico: "Insecticida y acaricida (Fenilpirazol)",
    status_regulatorio: "AVM-GSL, NFA-VPS, POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea los canales de cloruro regulados por GABA en los parásitos.",
      "Eficaz contra pulgas, garrapatas y piojos masticadores.",
      "Persistencia de hasta 2 meses contra pulgas y 1 mes contra garrapatas.",
      "¡EXTREMADAMENTE TÓXICO PARA CONEJOS!: Puede causar la muerte.",
      "Uso en reptiles para el control de ácaros (Hirstiella)."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por ectoparásitos en perros, gatos, hurones, roedores, aves y reptiles.",
    inicio_accion: "Rápido (eliminación de pulgas en 24h)",
    duracion_efecto: "30 a 60 días"
  },
  informacion_cliente: [
    "No bañar al animal 48h antes ni 24h después de la aplicación.",
    "Aplicar directamente sobre la piel, no sobre el pelo.",
    "El spray contiene alcohol; mantener alejado de llamas o fuentes de calor.",
    "¡NUNCA usar en conejos! Es mortal para ellos.",
    "Producto tóxico para organismos acuáticos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infestación por Pulgas y Garrapatas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta según peso"
        },
        frecuencia: { texto_ui: "Cada 4 semanas", intervalo_horas: 672 }
      },
      {
        indicacion: "Sarcoptes / Cheyletiella (Spray)",
        vias: ["Tópica (Spray)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4.5,
          dosis_min: 3,
          dosis_max: 6,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Cada 1 a 2 semanas", intervalo_horas: 168 }
      }
    ],
    gato: [
      {
        indicacion: "Pulgas y Garrapatas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta"
        },
        frecuencia: { texto_ui: "Mensual", intervalo_horas: 672 }
      }
    ],
    huron: [
      {
        indicacion: "Pulgas y Garrapatas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "ml/animal (50 mg fipronil)"
        },
        frecuencia: { texto_ui: "Cada 30 a 60 días", intervalo_horas: 720 }
      }
    ],
    roedores: [
      {
        indicacion: "Ectoparásitos (Ratas/Ratones)",
        vias: ["Tópica (Spray)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 a 60 días", intervalo_horas: 720 }
      }
    ],
    ave: [
      {
        indicacion: "Ácaros y Piojos (Loros/Rapaces)",
        vias: ["Tópica (Spray)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación con algodón tras la cabeza/alas"
        },
        frecuencia: { texto_ui: "Cada 30 a 60 días", intervalo_horas: 720 }
      }
    ],
    reptil: [
      {
        indicacion: "Ácaros (Iguanas/Serpientes)",
        vias: ["Tópica (Wipe)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación con paño (lavar tras 5 min)"
        },
        frecuencia: { texto_ui: "Cada 7 a 14 días", intervalo_horas: 168 },
        notas_tecnicas: "Aplicar con un paño y retirar lavando con agua tras 5 minutos para evitar absorción excesiva."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Conejos (Mortal).",
      "Animales menores de 8 semanas.",
      "Perros < 2kg o Gatos < 1kg (Spot-on).",
      "Hipersensibilidad conocida."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO!: Altamente tóxico, causa reacciones neurológicas fatales.",
      "Peces": "¡TÓXICO!: No contaminar acuarios o estanques."
    },
    efectos_adversos: [
      "Prurito o alopecia local en el sitio de aplicación.",
      "Salivación si se ingiere el producto húmedo.",
      "Toxicidad en reptiles jóvenes o recién mudados."
    ],
    monitoreo_recomendado: [
      "Integridad de la piel en el sitio de aplicación",
      "Estado neurológico en especies pequeñas"
    ],
    instrucciones_manejo: "Inflamable (spray). Lavarse las manos tras su uso. Evitar contacto con ojos.",
    sobredosis: {
      signos: ["Hipersalivación", "Temblores", "Depresión"],
      tratamiento: "Lavar con detergente suave; soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Amitraz", efecto: "Sinergia en la velocidad de eliminación de garrapatas.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interacciona con los canales de cloruro regulados por ligando (GABA), bloqueando la transferencia iónica pre y post-sináptica.",
    farmacocinetica: "Se concentra en las glándulas sebáceas y se libera gradualmente a través de los folículos pilosos."
  },
  presentaciones_comerciales: [
    { tipo: "Pipetas Spot-on", concentracion_texto: "10% p/v", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Spray cutáneo", concentracion_texto: "0.25% p/v", valor_concentracion: 2.5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};