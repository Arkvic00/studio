import type { Drug } from '@/lib/types';

export const bethanecolDrug: Drug = {
  id: "bethanecol",
  meta_data: {
    nombre_generico: "Betanecol (Cloruro de Betanecol)",
    nombres_comerciales: ["Myotonine"],
    grupo_farmacologico: "Agonista muscarínico (Colinérgico)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Aumenta el tono y la contracción del músculo detrusor de la vejiga urinaria.",
      "No inicia el reflejo detrusor; es ineficaz si la vejiga es arefléxica.",
      "Se debe administrar preferiblemente con el estómago vacío.",
      "La dosis debe titularse gradualmente para minimizar efectos secundarios."
    ],
    usos_principales: "Manejo de la retención urinaria asociada a atonía o reducción del tono del músculo detrusor.",
    inicio_accion: "30-90 minutos",
    duracion_efecto: "6-8 horas"
  },
  informacion_cliente: [
    "Dar el medicamento al menos 1 hora antes o 2 horas después de las comidas.",
    "Vigilar si el animal presenta babeo excesivo, vómitos o diarrea.",
    "Informe si nota que su mascota tiene dificultad para orinar a pesar del tratamiento.",
    "En caso de sobredosis, el veterinario utilizará atropina como antídoto."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Atonía del detrusor / Retención urinaria",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 8.75,
          dosis_min: 2.5,
          dosis_max: 15,
          unidad_calculo: "mg/perro"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "Iniciar con la dosis más baja y titular hacia arriba según respuesta y tolerancia."
      }
    ],
    gato: [
      {
        indicacion: "Atonía del detrusor / Retención urinaria",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.125,
          dosis_min: 1.25,
          dosis_max: 5,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        }
      }
    ],
    conejo: [
      {
        indicacion: "Retención urinaria / Hipotonia vesical",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.75,
          dosis_min: 2.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción uretral mecánica.",
      "Integridad de la pared vesical comprometida.",
      "Obstrucción gastrointestinal o cirugía intestinal reciente.",
      "Asma bronquial.",
      "Hipertiroidismo.",
      "Enfermedad cardiovascular severa (bradicardia, hipotensión)."
    ],
    contraindicaciones_especie: {
      "Perro": "No usar si la resistencia uretral es alta, a menos que se use con bloqueadores alfa como fenoxibenzamina.",
      "Gato": "Vigilar estrechamente la aparición de salivación profusa."
    },
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Cólicos gastrointestinales.",
      "Salivación (ptialismo).",
      "Anorexia.",
      "Bradicardia (especialmente en sobredosis)."
    ],
    monitoreo_recomendado: [
      "Volumen de orina residual tras la micción",
      "Frecuencia cardíaca",
      "Estado gastrointestinal"
    ],
    instrucciones_manejo: "Administrar con el estómago vacío para reducir el malestar GI.",
    sobredosis: {
      signos: ["Salivación extrema", "Vómitos", "Bradicardia severa", "Colapso"],
      tratamiento: "Atropina (0.02 - 0.04 mg/kg IV o IM) como antídoto específico.",
      contraindicado_en_urgencia: ["No inducir vómito si hay colapso."]
    },
    interacciones_farmacologicas: [
      { farmaco: "Anticolinérgicos (Atropina)", efecto: "Antagonismo directo de los efectos del betanecol.", severidad: "Importante" },
      { farmaco: "Inhibidores de la Colinesterasa", efecto: "Efectos aditivos, riesgo de toxicidad colinérgica.", severidad: "Grave" },
      { farmaco: "Quinidina / Procainamida", efecto: "Pueden antagonizar los efectos colinérgicos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de los receptores muscarínicos que estimula selectivamente el músculo detrusor de la vejiga e incrementa la motilidad gástrica.",
    farmacocinetica: "Absorción oral variable. Efecto máximo a la hora. No cruza la barrera hematoencefálica significativamente."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "10 mg",
      valor_concentracion: 10,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
