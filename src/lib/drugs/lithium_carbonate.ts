import type { Drug } from '@/lib/types';

export const lithiumCarbonateDrug: Drug = {
  id: "lithium_carbonate",
  meta_data: {
    nombre_generico: "Carbonato de Litio",
    nombres_comerciales: ["Camcolit", "Liskonum", "Priadel"],
    grupo_farmacologico: "Estimulante de la médula ósea",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula las células madre de la médula ósea, aumentando la producción de granulocitos.",
      "Uso principal en anemias aplásicas, neutropenias inducidas por quimioterapia o estrógenos.",
      "Existe un periodo de latencia de hasta 4 semanas antes de ver resultados.",
      "¡EXTREMADAMENTE TÓXICO PARA GATOS!",
      "Requiere monitoreo de niveles séricos (Rango: 0.5–1.8 mmol/l)."
    ],
    usos_principales: "Tratamiento de la neutropenia, trombocitopenia o hipoplasia medular en perros.",
    inicio_accion: "Lento (hasta 4 semanas)",
    duracion_efecto: "Requiere administración diaria"
  },
  informacion_cliente: [
    "Administrar siempre con comida.",
    "Asegúrese de que su perro esté siempre bien hidratado.",
    "¡NUNCA dar a gatos! Es mortal para ellos.",
    "Se requieren análisis de sangre cada 3 meses para vigilar los niveles de litio y riñón.",
    "Vigile si su mascota parece muy débil, tiene temblores o bebe mucha agua."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estimulación medular / Neutropenia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas con comida",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "N/A"
        },
        notas_tecnicas: "Altamente tóxico en esta especie."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Insuficiencia renal (nefrotóxico a dosis altas).",
      "Enfermedad cardíaca.",
      "Deshidratación.",
      "Hipoadrenocorticismo (Addison)."
    ],
    efectos_adversos: [
      "Náuseas, vómitos y diarrea.",
      "Debilidad muscular y fatiga.",
      "Poliuria y polidipsia.",
      "Convulsiones.",
      "Hipotiroidismo (bloquea liberación de T3/T4)."
    ],
    monitoreo_recomendado: [
      "Niveles séricos de litio cada 3 meses (0.5–1.8 mmol/l)",
      "Función tiroidea (T4) cada 6 meses",
      "Función renal (Creatinina/BUN)",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Convulsiones", "Debilidad extrema", "Fallo renal"],
      tratamiento: "Cese inmediato. Fluidoterapia intensiva para favorecer excreción. Corregir desequilibrios de sodio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Diuréticos (Tiazidas / Furosemida)", efecto: "Aumentan drásticamente el riesgo de toxicidad por litio al alterar el sodio.", severidad: "Grave" },
      { farmaco: "IECAs (Enalapril) / AINEs", efecto: "Reducen la excreción de litio, aumentando su toxicidad.", severidad: "Importante" },
      { farmaco: "Bloqueadores de canales de calcio (Diltiazem)", efecto: "Riesgo de neurotoxicidad.", severidad: "Importante" },
      { farmaco: "Teofilina", efecto: "Aumenta la excreción de litio, bajando su eficacia.", severidad: "Moderada" },
      { farmaco: "Neostigmina / Piridostigmina", efecto: "El litio antagoniza sus efectos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estimula la producción de factores de crecimiento hematopoyéticos en la médula ósea.",
    farmacocinetica: "Eliminación renal. Compite con el sodio por la reabsorción tubular."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "250 mg, 400 mg",
      valor_concentracion: 250,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};