import type { Drug } from '@/lib/types';

export const neostigmineDrug: Drug = {
  id: "neostigmine",
  meta_data: {
    nombre_generico: "Neostigmina",
    nombres_comerciales: ["Robinul-Neostigmine"],
    grupo_farmacologico: "Anticolinesterásico; Inhibidor de la colinesterasa",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Prolonga la acción de la acetilcolina en la unión neuromuscular.",
      "Baja penetración en el SNC (estructura polar).",
      "Inicio de acción más lento que el edrofonio pero duración mayor (30 min - 2h).",
      "Fármaco de elección para el manejo de la crisis miasténica.",
      "Suele combinarse con glicopirronio para reducir efectos colinérgicos (salivación, bradicardia).",
      "Obligatorio tener atropina (0.05 mg/kg) lista para revertir crisis colinérgicas."
    ],
    usos_principales: "Tratamiento de la crisis de Miastenia Gravis, diagnóstico alternativo de MG y antagonismo de bloqueadores neuromusculares no despolarizantes.",
    inicio_accion: "5-10 minutos (IV)",
    duracion_efecto: "30 minutos a 2 horas"
  },
  informacion_cliente: [
    "Medicamento de uso estrictamente hospitalario.",
    "Puede causar babeo excesivo, vómitos o diarrea poco después de la inyección.",
    "El veterinario vigilará el ritmo cardíaco y la respiración del animal constantemente.",
    "Informe si nota temblores musculares o debilidad extrema tras la dosis."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Crisis Miasténica (Aguda)",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.01,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Según duración de la respuesta", intervalo_horas: 0 }
      },
      {
        indicacion: "Miastenia Gravis (Mantenimiento si no hay oral)",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.04,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 }
      },
      {
        indicacion: "Antagonismo de bloqueo neuromuscular",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Mezclar con 0.01 mg/kg de glicopirronio e inyectar en 2 minutos. Si no hay glicopirronio, dar atropina (0.04 mg/kg) antes."
      },
      {
        indicacion: "Diagnóstico de Miastenia Gravis",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.02,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Combinar con glicopirrolato. Si no hay respuesta en 4h, repetir con 0.03 mg/kg."
      }
    ],
    gato: [
      {
        indicacion: "Crisis Miasténica / Antagonismo",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosis extrapoladas de perros; usar con extrema precaución por riesgo de broncoespasmo."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción mecánica GI o urinaria.",
      "Peritonitis.",
      "Asma bronquial felina (extrema precaución)."
    ],
    efectos_adversos: [
      "Crisis colinérgica: salivación, lagrimeo, micción/defecación involuntaria.",
      "Bradicardia severa y asistolia (si no se usa antimuscarínico).",
      "Vómitos y diarrea.",
      "Fasciculaciones musculares.",
      "Bronconstricción."
    ],
    monitoreo_recomendado: [
      "Frecuencia y ritmo cardíaco (ECG)",
      "Esfuerzo respiratorio",
      "Fuerza muscular post-dosis"
    ],
    instrucciones_manejo: "Administrar siempre con un anticolinérgico (atropina o glicopirronio) para mitigar efectos muscarínicos.",
    sobredosis: {
      signos: ["Hipersalivación masiva", "Parálisis muscular", "Bradicardia extrema"],
      tratamiento: "Atropina (0.05 mg/kg IV) inmediata; soporte ventilatorio es prioridad 1."
    },
    interacciones_farmacologicas: [
      { farmaco: "Betabloqueadores", efecto: "Riesgo extremo de bradicardia severa.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos / Clindamicina", efecto: "Antagonizan el efecto de la neostigmina.", severidad: "Importante" },
      { farmaco: "Suxametonio", efecto: "Neostigmina inhibe su metabolismo, prolongando la apnea.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor reversible de la enzima acetilcolinesterasa, aumentando los niveles de acetilcolina en las sinapsis.",
    farmacocinetica: "No cruza la barrera hematoencefálica significativamente."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "2.5 mg/ml", valor_concentracion: 2.5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Combinado (con Glicopirronio)", concentracion_texto: "2.5 mg Neost. + 0.5 mg Glico.", valor_concentracion: 2.5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "15 mg", valor_concentracion: 15, unidad_concentracion: "mg", es_divisible: true }
  ]
};