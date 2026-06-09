import type { Drug } from '@/lib/types';

export const cisaprideDrug: Drug = {
  id: "cisapride",
  meta_data: {
    nombre_generico: "Cisaprida",
    nombres_comerciales: ["Cisapride (VSP)"],
    grupo_farmacologico: "Procinético gastrointestinal (Agonista 5-HT4)",
    status_regulatorio: "POM-V. Disponible habitualmente vía formulación magistral."
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente procinético que estimula la motilidad desde el esófago hasta el colon.",
      "Aumenta la liberación de acetilcolina en los plexos mientéricos.",
      "No posee actividad antiemética central (a diferencia de la metoclopramida).",
      "Uso fundamental en estasis gastrointestinal de herbívoros (conejos/cobayas).",
      "Tratamiento de elección para megacolon y estreñimiento crónico en gatos.",
      "Aumenta la presión del esfínter esofágico inferior en perros."
    ],
    usos_principales: "Tratamiento de estasis gastrointestinal, estreñimiento, megacolon felino y reflujo gastroesofágico.",
    inicio_accion: "30-60 minutos",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Administrar preferiblemente 30 minutos antes de la comida.",
    "Utilizar guantes para manipular el medicamento para evitar la absorción accidental por parte del dueño.",
    "Informe si nota que su mascota presenta diarrea, vómitos o dolor abdominal intenso.",
    "El tratamiento para el megacolon felino suele ser de larga duración.",
    "No usar si sospecha que el animal ha tragado un objeto que bloquea su intestino."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipomotilidad gástrica / Reflujo / Esfínter esofágico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.1,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Administrar 30 min antes de alimentar. Puede titularse hasta 1 mg/kg si se tolera bien. No efectivo para megaesófago (músculo estriado)."
      }
    ],
    gato: [
      {
        indicacion: "Estreñimiento / Megacolon",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Dosis fija común: 2.5-5 mg por gato. En gatos grandes, se puede titular hasta 7.5 mg por toma."
      }
    ],
    conejo: [
      {
        indicacion: "Estasis gastrointestinal (Íleo)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.1,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Indispensable descartar obstrucción física antes de iniciar. Combinar con fluidoterapia y soporte nutricional."
      }
    ],
    cobaya: [
      {
        indicacion: "Estasis gastrointestinal",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.1,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    primates: [
      {
        indicacion: "Hipomotilidad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    petauro: [
      {
        indicacion: "Hipomotilidad",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 24 horas",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción gastrointestinal mecánica.",
      "Perforación gastrointestinal.",
      "Hemorragia gastrointestinal activa."
    ],
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Cólicos y dolor abdominal.",
      "QT prolongado y arritmias cardíacas (descrito en humanos, riesgo teórico en animales)."
    ],
    monitoreo_recomendado: [
      "Producción de heces y apetito",
      "Frecuencia cardíaca",
      "Función renal y hepática en tratamientos crónicos"
    ],
    instrucciones_manejo: "Usar guantes para administración manual. Mantener alejado del alcance de niños por riesgo de arritmias fatales tras ingesta accidental.",
    sobredosis: {
      signos: ["Diarrea profusa", "Arritmias", "Vómitos severos"],
      tratamiento: "Soporte sintomático y suspensión inmediata."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antifúngicos imidazoles (Itraconazol/Ketoconazol) / Macrólidos (Eritromicina)", efecto: "Inhiben el metabolismo de la cisaprida, aumentando drásticamente el riesgo de arritmias fatales.", severidad: "Grave" },
      { farmaco: "Cimetidina / Cloranfenicol / Amiodarona", efecto: "Aumentan los niveles plasmáticos de cisaprida.", severidad: "Importante" },
      { farmaco: "Antidepresivos tricíclicos / Sotalol", efecto: "Riesgo potenciado de prolongación del intervalo QT.", severidad: "Importante" },
      { farmaco: "Opioides / Anticolinérgicos (Atropina)", efecto: "Antagonizan el efecto procinético de la cisaprida.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de los receptores 5-HT4 en las neuronas colinérgicas entéricas. Esto induce la despolarización y contracción del músculo liso gastrointestinal al liberar acetilcolina.",
    farmacocinetica: "Metabolismo hepático vía citocromo P450 (CYP3A4). Reducir dosis en insuficiencia renal o hepática."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "2.5 mg, 5 mg",
      valor_concentracion: 5,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Suspensión oral magistral",
      concentracion_texto: "Variable (ej. 5 mg/ml)",
      valor_concentracion: 5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
