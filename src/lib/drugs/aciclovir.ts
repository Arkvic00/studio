import type { Drug } from '@/lib/types';

export const aciclovirDrug: Drug = {
  id: "aciclovir",
  meta_data: {
    nombre_generico: "Aciclovir",
    nombres_comerciales: ["Zovirax", "Aciclovir*"],
    grupo_farmacologico: "Antiviral",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe replicación viral (ADN polimerasa).",
      "Virostático: no erradica infecciones latentes.",
      "Sistémicamente tóxico en gatos (usar solo tópico ocular).",
      "Útil en enfermedad de Pacheco y herpes en quelonios."
    ],
    usos_principales: "Herpesvirus ocular (FHV-1) y sistémico en aves/reptiles.",
    inicio_accion: "Variable",
    duracion_efecto: "Requiere aplicaciones frecuentes"
  },
  informacion_cliente: [
    "No usar por más de 3 semanas.",
    "Puede causar irritación ocular."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Gatos: Herpesvirus felino-1 (FHV-1) ocular",
        vias: ["Tópica ocular (Ungüento 3%)"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "aplicación pequeña" },
        frecuencia: { texto_ui: "5 veces al día (Máximo 3 semanas)", intervalo_horas: 4 },
        notas_tecnicas: "La administración sistémica está contraindicada."
      }
    ],
    conejo: [
      {
        indicacion: "Conejos (Rabbits): Lesiones por herpesvirus",
        vias: ["Tópica"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "aplicación" },
        frecuencia: { texto_ui: "1 a 5 veces al día", intervalo_horas: 6 }
      }
    ],
    ave: [
      {
        indicacion: "Rapaces (Raptors): Herpesvirus sistémico",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 330, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        duracion_tratamiento: "7 a 14 días"
      },
      {
        indicacion: "Psitácidas (Psittacids): Herpesvirus (Pacheco)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 30, dosis_min: 20, dosis_max: 40, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Psitácidas (Psittacids): Herpesvirus (Pacheco) - Oral",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 80, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Canarios (Canaries): Canary Pox",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 80, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 6 horas (10 días)", intervalo_horas: 6 }
      }
    ],
    reptil: [
      {
        indicacion: "Especies Testudo (Tortugas): Herpesvirus",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 80, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Especies Terrapene (Tortugas de caja): Herpesvirus",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 40, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Sistémico en gatos (tóxico)."],
    efectos_adversos: ["Irritación ocular.", "Vómitos en aves."],
    monitoreo_recomendado: ["Superficie corneal", "Estado digestivo en aves"],
    instrucciones_manejo: "Precauciones normales.",
    sobredosis: { signos: ["Vómitos"], tratamiento: "Soporte." },
    interacciones_farmacologicas: [
      { farmaco: "Bencilpenicilina", efecto: "Reduce eliminación en tortugas de orejas rojas.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la ADN polimerasa viral.",
    farmacocinetica: "Requiere activación por timidina quinasa viral."
  },
  presentaciones_comerciales: [
    { tipo: "Ungüento oftálmico", concentracion_texto: "3%", valor_concentracion: 30, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Tableta", concentracion_texto: "200 mg", valor_concentracion: 200, unidad_concentracion: "mg", es_divisible: true }
  ]
};