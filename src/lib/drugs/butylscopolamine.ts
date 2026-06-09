import type { Drug } from '@/lib/types';

export const butylscopolamineDrug: Drug = {
  id: "butylscopolamine",
  meta_data: {
    nombre_generico: "Butilescopolamina (Hioscina)",
    nombres_comerciales: ["Buscopan", "Buscopan Compositum"],
    grupo_farmacologico: "Anticolinérgico; Antiespasmódico",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe los receptores colinérgicos muscarínicos M1 en los tractos GI y urinario.",
      "Provoca la relajación del músculo liso (efecto antiespasmódico).",
      "No atraviesa la barrera hematoencefálica (pocos efectos secundarios en SNC).",
      "Debe usarse siempre junto con la investigación de la causa primaria del dolor.",
      "La formulación 'Compositum' incluye metamizol (dipirona) para un efecto analgésico y antipirético adicional."
    ],
    usos_principales: "Control de la diarrea y el malestar abdominal (cólicos) en perros y conejos. Manejo del dolor asociado a obstrucción urinaria.",
    inicio_accion: "Rápido",
    duracion_efecto: "12 horas"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario o bajo estricta supervisión.",
    "Evitar la autoinyección accidental: el metamizol puede causar reacciones alérgicas serias en humanos.",
    "Proteger la solución de la luz solar.",
    "Vigilar si el animal presenta estreñimiento o dificultad para orinar tras el tratamiento."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Diarrea y dolor abdominal (Buscopan Compositum)",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "ml/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Dosis basada en el producto que contiene 4 mg/ml de butilescopolamina + 500 mg/ml de metamizol."
      },
      {
        indicacion: "Espasmólisis (Solo Butilescopolamina)",
        vias: ["IM", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    conejo: [
      {
        indicacion: "Dolor GI / Obstrucción urinaria (Compositum)",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "ml/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "¡CONTRAINDICADO! en casos de íleo gastrointestinal verdadero."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción intestinal mecánica.",
      "Íleo gastrointestinal en conejos (agravamiento del cuadro).",
      "Glaucoma de ángulo estrecho.",
      "Taquicardia severa."
    ],
    contraindicaciones_especie: {
      "Gato": "¡CONTRAINDICADO!: No se recomienda su uso en esta especie según literatura provista.",
      "Perro": "No usar metamizol si el perro ha sido tratado previamente con fenotiazinas (riesgo de hipotermia)."
    },
    efectos_adversos: [
      "Boca seca (xerostomía).",
      "Visión borrosa.",
      "Micción vacilante o retención urinaria.",
      "Estreñimiento.",
      "Reacción local dolorosa en el sitio de inyección IM."
    ],
    monitoreo_recomendado: [
      "Frecuencia de defecación y ruidos intestinales",
      "Producción de orina",
      "Frecuencia cardíaca"
    ],
    instrucciones_manejo: "El metamizol en humanos puede causar agranulocitosis reversible pero seria. Manejar con precaución.",
    sobredosis: {
      signos: ["Taquicardia", "Ataxia", "Estreñimiento severo"],
      tratamiento: "Soporte sintomático; agentes parasimpaticomiméticos si los efectos anticolinérgicos son graves."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fenotiazinas (Acepromazina)", efecto: "Riesgo de hipotermia severa si se combinan con metamizol.", severidad: "Importante" },
      { farmaco: "Anticolinérgicos / Analgésicos", efecto: "Potenciación de los efectos secundarios del Buscopan.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista de receptores muscarínicos que bloquea la estimulación colinérgica del músculo liso gástrico, intestinal y urogenital.",
    farmacocinetica: "No atraviesa la barrera hematoencefálica. Excreción renal y fecal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Buscopan Compositum (Inyectable)",
      concentracion_texto: "4 mg/ml Butil. + 500 mg/ml Metamizol",
      valor_concentracion: 4,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Ampollas (Butilescopolamina sola)",
      concentracion_texto: "20 mg/ml",
      valor_concentracion: 20,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Tabletas",
      concentracion_texto: "10 mg",
      valor_concentracion: 10,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
