import type { Drug } from '@/lib/types';

export const doxycyclineDrug: Drug = {
  id: "doxycycline",
  meta_data: {
    nombre_generico: "Doxiciclina",
    nombres_comerciales: ["Doxybactin", "Ronaxan", "Karidox", "Ornicure", "Vibramycin"],
    grupo_farmacologico: "Tetraciclina de 2ª generación; Antibiótico bacteriostático (30S)",
    status_regulatorio: "POM-V. Categoría D (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Antibiótico tiempo-dependiente altamente liposoluble.",
      "Excelente penetración en próstata, ojo y secreciones bronquiales.",
      "Fármaco de elección para clamidiosis felina y aviar.",
      "Tratamiento adyuvante en Heartworm (elimina Wolbachia).",
      "A diferencia de otras tetraciclinas, se excreta principalmente por heces y es seguro en fallo renal."
    ],
    usos_principales: "Tratamiento de Mycoplasma, Chlamydia, Rickettsia (Ehrlichia), Borrelia, Leptospira y Wolbachia. Infecciones respiratorias y genitourinarias.",
    inicio_accion: "Rápido tras administración oral",
    duracion_efecto: "24 horas (en la mayoría de especies)"
  },
  informacion_cliente: [
    "Administrar siempre con comida para reducir náuseas y prevenir irritación del esófago.",
    "En gatos, dar una pequeña cantidad de agua o comida tras la tableta para asegurar que llegue al estómago.",
    "Completar el ciclo de tratamiento (especialmente en psitacosis: 45 días).",
    "No usar en animales gestantes.",
    "Informe si nota que el animal tiene dificultad para tragar o vomita repetidamente."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas / Ehrlichia / Wolbachia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas con comida", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Clamidiosis felina / Mycoplasma",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 3-4 semanas", intervalo_horas: 24 },
        notas_tecnicas: "Esencial dar agua post-toma para evitar estenosis esofágica por hialato de doxiciclina."
      }
    ],
    huron: [
      {
        indicacion: "Infecciones bacterianas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones respiratorias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.25,
          dosis_min: 2.5,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas y Ratones: Infecciones respiratorias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Clamidiosis (Psitacosis)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 32.5,
          dosis_min: 15,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 45 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Clamidiosis (Inyectable LA)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 87.5,
          dosis_min: 75,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 7 días por 6-7 semanas", intervalo_horas: 168 },
        notas_tecnicas: "Alternar sitios de inyección; es muy irritante localmente."
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación (causa decoloración dental fetal y anomalías esqueléticas).",
      "Presencia de esofagitis o disfagia.",
      "Fallo hepático severo."
    ],
    efectos_adversos: [
      "Vómitos, náuseas y diarrea.",
      "Esofagitis y úlceras esofágicas (especialmente en gatos).",
      "Decoloración dental (menor riesgo que con oxitetraciclina).",
      "Fotosensibilización.",
      "Hepatotoxicidad (dosis altas)."
    ],
    monitoreo_recomendado: [
      "Estado digestivo y apetito",
      "Función hepática en tratamientos muy prolongados"
    ],
    instrucciones_manejo: "El hialato de doxiciclina es muy ácido; el monohidrato es preferible por ser menos irritante para el esófago.",
    sobredosis: {
      signos: ["Vómitos severos", "Daño hepático agudo"],
      tratamiento: "Soporte sintomático y protectores gástricos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anticácidos / Calcio / Hierro", efecto: "Reducen drásticamente la absorción oral de doxiciclina.", severidad: "Importante" },
      { farmaco: "Fenobarbital", efecto: "Acelera el metabolismo de la tetraciclina.", severidad: "Moderada" },
      { farmaco: "Antibióticos bactericidas", efecto: "Antagonismo potencial.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis de proteínas bacterianas al unirse de forma reversible a la subunidad 30S del ribosoma.",
    farmacocinetica: "Alta unión a proteínas y alta liposolubilidad. Excreción intestinal independiente del riñón."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "20 mg, 100 mg, 300 mg, 400 mg", valor_concentracion: 100, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
