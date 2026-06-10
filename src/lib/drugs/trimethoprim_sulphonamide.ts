import type { Drug } from '@/lib/types';

export const trimethoprimSulphonamideDrug: Drug = {
  id: "trimethoprim_sulphonamide",
  meta_data: {
    nombre_generico: "Trimetoprim / Sulfonamida (Sulfonamidas Potenciadas)",
    nombres_comerciales: ["Duphatrim", "Norodine", "Trimacare", "Trimedoxine", "Septrin"],
    grupo_farmacologico: "Antibacteriano de amplio espectro (Sulfonamida potenciada)",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea pasos secuenciales en la síntesis de ácido fólico bacteriano.",
      "Bactericida tiempo-dependiente de amplio espectro.",
      "Excelente penetración en próstata, ojo y sistema nervioso central.",
      "Ineficaz en presencia de tejido necrótico o pus.",
      "Riesgo de queratoconjuntivitis seca (KCS) irreversible en tratamientos prolongados.",
      "Los Dobermanns son más susceptibles a reacciones inmunomediadas (poliartritis)."
    ],
    usos_principales: "Tratamiento de infecciones urinarias, respiratorias, prostáticas y parasitosis como Toxoplasma y Giardia.",
    inicio_accion: "Rápido",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Asegúrese de que el animal tenga siempre agua fresca disponible.",
    "Informe inmediatamente si nota que los ojos de su mascota se ven rojos, secos o si hay secreción espesa.",
    "En tratamientos largos, el veterinario realizará pruebas de lágrima periódicas.",
    "Informe si nota que el perro camina con dificultad o tiene las articulaciones hinchadas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas / Urinarias / Respiratorias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 22.5,
          dosis_min: 15,
          dosis_max: 30,
          unidad_calculo: "mg/kg (Combinado)"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Infecciones sistémicas (Parenteral)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas / Toxoplasmosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 15,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Puede causar salivación profusa si se administra la tableta directamente (mal sabor)."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Queratoconjuntivitis seca (KCS) preexistente.",
      "Insuficiencia renal o hepática severa.",
      "Historial de reacciones a sulfonamidas."
    ],
    efectos_adversos: [
      "Ojo seco (KCS) irreversible.",
      "Poliartritis inmunomediada (especialmente Dobermanns).",
      "Anemia, leucopenia y trombocitopenia.",
      "Necrosis hepática aguda.",
      "Cristaluria (si hay deshidratación).",
      "Salivación (gatos)."
    ],
    monitoreo_recomendado: [
      "Test de Schirmer (STT) antes y durante el tratamiento",
      "Hemograma completo en tratamientos largos",
      "Estado de hidratación",
      "Función tiroidea (uso crónico)"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos", "Depresión", "Signos neurológicos", "Cristaluria"],
      tratamiento: "Cese del fármaco, fluidoterapia para forzar diuresis y soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Acidificantes urinarios", efecto: "Aumentan el riesgo de formación de cristales en el riñón.", severidad: "Importante" },
      { farmaco: "Antiácidos", efecto: "Pueden reducir la absorción de la sulfonamida.", severidad: "Moderada" },
      { farmaco: "Procaina", efecto: "Puede inhibir la acción de las sulfonamidas.", severidad: "Moderada" },
      { farmaco: "Digoxina", efecto: "Las sulfonamidas pueden aumentar sus niveles.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interrupción de la síntesis de ácido tetrahidrofólico en dos puntos distintos de la cadena metabólica bacteriana.",
    farmacocinetica: "Metabolismo hepático y excreción renal. El trimetoprim se concentra en fluidos ácidos."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "20 mg a 480 mg total", valor_concentracion: 80, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "48 mg/ml", valor_concentracion: 48, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "240 mg/ml (40 Trim + 200 Sulfadiazina)", valor_concentracion: 240, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
