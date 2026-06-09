import type { Drug } from '@/lib/types';

export const ivermectinDrug: Drug = {
  id: "ivermectin",
  meta_data: {
    nombre_generico: "Ivermectina",
    nombres_comerciales: ["Otimectin", "Animec", "Ivomec", "Virbamec", "Xeno"],
    grupo_farmacologico: "Lactona macrocíclica; Endectocida",
    status_regulatorio: "POM-V, POM-VPS, ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca parálisis flácida de los parásitos al interaccionar con canales de cloruro.",
      "Amplio espectro contra nematodos y artrópodos.",
      "Uso autorizado en gatos para ácaros del oído (Otodectes).",
      "En perros se usa para sarnas y demodicosis cuando fallan otros tratamientos.",
      "¡EXTREMADAMENTE TÓXICO PARA TORTUGAS!: Atraviesa la barrera hematoencefálica causando parálisis y muerte.",
      "Riesgo de neurotoxicidad en razas con mutación MDR1 (Collies)."
    ],
    usos_principales: "Tratamiento de sarnas (demodécica, sarcóptica), ácaros del oído, nematodos gastrointestinales y pulmonares. Prevención de Dirofilaria. Tratamiento de ácaros en serpientes.",
    inicio_accion: "Rápido",
    duracion_efecto: "Persistente (requiere dosis q7-14d para sarnas)"
  },
  informacion_cliente: [
    "¡PELIGRO!: No usar en razas tipo Collie, Pastor Shetland o sus cruces sin test genético previo (MDR1).",
    "¡PELIGRO!: Nunca administrar a tortugas o galápagos; es mortal para ellos.",
    "Producto altamente tóxico para peces y vida acuática; no bañar al animal en ríos tras el tratamiento.",
    "El gel de oídos para gatos debe aplicarse semanalmente.",
    "Informe si nota que su mascota parece desorientada, tiembla o choca con objetos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Demodicosis generalizada",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.45,
          dosis_min: 0.3,
          dosis_max: 0.6,
          unidad_calculo: "mg/kg (300-600 μg/kg)"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Usar solo si no hay mutación MDR1. Continuar hasta 2 raspados negativos."
      },
      {
        indicacion: "Sarna sarcóptica",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.2,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 2 semanas por 4-6 semanas", intervalo_horas: 336 }
      },
      {
        indicacion: "Cheyletiellosis",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.2,
          dosis_max: 0.3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 1-2 semanas por 6-8 semanas", intervalo_horas: 168 }
      }
    ],
    gato: [
      {
        indicacion: "Ácaros del oído (Otodectes)",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación semanal"
        },
        frecuencia: { texto_ui: "Semanal por 3 semanas", intervalo_horas: 168 }
      },
      {
        indicacion: "Demodicosis / Parásitos internos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.45,
          dosis_min: 0.3,
          dosis_max: 0.6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    huron: [
      {
        indicacion: "Parásitos / Ácaros",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.2,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir a los 14, 28 y 42 días", intervalo_horas: 336 }
      }
    ],
    roedores: [
      {
        indicacion: "Parásitos internos y externos",
        vias: ["PO", "SC", "Tópica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.2,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 7 a 14 días", intervalo_horas: 168 }
      }
    ],
    ave: [
      {
        indicacion: "Ácaros y piojos",
        vias: ["Tópica", "PO", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg (200 μg/kg)"
        },
        frecuencia: { texto_ui: "Cada 7 a 14 días", intervalo_horas: 168 }
      },
      {
        indicacion: "Aves Rapaces (Capillariasis)",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 7 a 14 días", intervalo_horas: 168 }
      },
      {
        indicacion: "Palomas (Piel desnuda)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "ml de sol. 0.02%"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Nematodos / Ácaros (No Quelonios)",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 10 a 14 días hasta negativo", intervalo_horas: 240 },
        notas_tecnicas: "¡PROHIBIDO EN TORTUGAS! En serpientes, puede usarse spray al 5 mg/L para el entorno."
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Parásitos",
        vias: ["PO", "Inmersión"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.2,
          dosis_max: 0.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 14 días", intervalo_horas: 336 },
        notas_tecnicas: "Inmersión: 10 mg/L por 60 minutos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Quelonios (Tortugas/Galápagos) - Mortal.",
      "Perros con mutación MDR1 (Collies, Shelties, etc.).",
      "Indigo snakes y Skinks (sensibilidad reportada).",
      "Cachorros menores de 6 semanas."
    ],
    contraindicaciones_especie: {
      "Tortuga": "¡PROHIBIDO!: Mortalidad inmediata por neurotoxicidad.",
      "Perro (Collie)": "Riesgo de neurotoxicidad severa; realizar test genético.",
      "Peces": "¡TÓXICO!: No utilizar."
    },
    efectos_adversos: [
      "Neurotoxicidad: ataxia, ceguera, temblores, midriasis, coma.",
      "Salivación y vómitos.",
      "Reacción inflamatoria en el sitio de inyección.",
      "Muerte en especies sensibles."
    ],
    monitoreo_recomendado: [
      "Estado neurológico",
      "Estado mental y coordinación",
      "Resolución de la carga parasitaria"
    ],
    instrucciones_manejo: "Altamente tóxico para organismos acuáticos. No permitir que perros tratados entren en contacto con el agua.",
    sobredosis: {
      signos: ["Depresión severa del SNC", "Temblores", "Coma"],
      tratamiento: "Soporte intensivo; infusión de lípidos (Intralipid) puede ser efectiva."
    },
    interacciones_farmacologicas: [
      { farmaco: "Inhibidores de P-gp (Ciclosporina, Ketoconazol, Spinosad)", efecto: "Aumentan drásticamente el riesgo de neurotoxicidad de la ivermectina.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a los canales de cloruro mediados por glutamato en invertebrados, aumentando su permeabilidad y causando hiperpolarización, parálisis y muerte.",
    farmacocinetica: "Alta liposolubilidad. Metabolismo hepático parcial. Excreción fecal predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "10 mg/ml (1%)", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Gotas óticas (Otimectin)", concentracion_texto: "1 mg/g", valor_concentracion: 1, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Spot-on (Xeno)", concentracion_texto: "Variable (10 μg a 450 μg)", valor_concentracion: 1, unidad_concentracion: "ug", es_divisible: false }
  ]
};