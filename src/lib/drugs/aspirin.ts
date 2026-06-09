import type { Drug } from '@/lib/types';

export const aspirinDrug: Drug = {
  id: "aspirin",
  meta_data: {
    nombre_generico: "Aspirina (Ácido Acetilsalicílico)",
    nombres_comerciales: ["Aspirina BP", "Adiro", "Aspirina"],
    grupo_farmacologico: "AINE; Antiagregante plaquetario",
    status_regulatorio: "P, OTC"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibición irreversible de la ciclooxigenasa (COX-1) mediante acetilación.",
      "Previene la producción de prostaglandinas y tromboxanos.",
      "Uso principal: prevención de tromboembolismo arterial.",
      "AINE no selectivo: perfil de seguridad inferior a inhibidores de COX-2 para analgesia.",
      "Debe suspenderse al menos 2 semanas antes de una cirugía para recuperar la función plaquetaria."
    ],
    usos_principales: "Prevención de tromboembolismo arterial, tratamiento adyuvante en anemia hemolítica inmunomediada (IMHA) y control de dolor leve a moderado.",
    inicio_accion: "Rápido tras administración oral",
    duracion_efecto: "Efecto antiagregante dura toda la vida de la plaqueta (7-10 días)"
  },
  informacion_cliente: [
    "Administrar preferiblemente con comida para reducir la irritación gástrica.",
    "Informe inmediatamente si nota heces negras, con sangre o vómitos.",
    "Es vital suspender el medicamento antes de cualquier cirugía programada.",
    "En gatos, la frecuencia de administración es mucho menor debido a su lento metabolismo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Antiagregante plaquetario (ej. IMHA)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Dosis ultra-bajas han demostrado mejorar la supervivencia en IMHA combinadas con glucocorticoides."
      },
      {
        indicacion: "Analgesia / Inflamación / Fiebre",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "La seguridad y eficacia de este rango para analgesia no está bien establecida comparada con AINEs modernos."
      }
    ],
    gato: [
      {
        indicacion: "Prevención de tromboembolismo (Dosis baja)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 18.75,
          unidad_calculo: "mg/gato (1/4 de tableta de 75mg)"
        },
        frecuencia: {
          texto_ui: "3 veces por semana",
          intervalo_horas: 56
        }
      },
      {
        indicacion: "Prevención de tromboembolismo (Dosis ultra-baja)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    huron: [
      {
        indicacion: "Antiinflamatorio / Analgésico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ],
    roedores: [
      {
        indicacion: "Analgesia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          dosis_min: 50,
          dosis_max: 150,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 8 horas",
          intervalo_horas: 6
        }
      }
    ],
    primates: [
      {
        indicacion: "Analgesia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 6 horas",
          intervalo_horas: 6
        }
      }
    ],
    ave: [
      {
        indicacion: "Loros: Analgesia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales deshidratados, hipovolémicos o hipotensos.",
      "Enfermedad gastrointestinal activa (úlceras).",
      "Animales gestantes.",
      "Animales menores de 6 semanas.",
      "Fallo renal severo."
    ],
    efectos_adversos: [
      "Irritación y ulceración GI.",
      "Hemorragia digestiva.",
      "Necrosis papilar renal (riesgo aumentado en hipotensión).",
      "Sangrado prolongado por inhibición plaquetaria."
    ],
    monitoreo_recomendado: [
      "Signos de sangrado GI (melena)",
      "Función renal (Creatinina/BUN)",
      "Hematocrito (en uso prolongado)"
    ],
    instrucciones_manejo: "Suspender 2 semanas antes de cirugías.",
    sobredosis: {
      signos: ["Vómitos", "Hiperventilación", "Acidosis metabólica", "Convulsiones"],
      tratamiento: "Lavado gástrico, carbón activado, fluidoterapia y corrección del estado ácido-base."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Glucocorticoides", efecto: "Aumenta drásticamente el riesgo de úlceras GI.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Aumenta el riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Furosemida", efecto: "Puede reducir el efecto diurético.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor irreversible de la ciclooxigenasa (COX) mediante acetilación.",
    farmacocinetica: "Metabolismo hepático. Excreción renal dependiente del pH urinario (orina alcalina favorece excreción)."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "75 mg, 100 mg, 300 mg, 500 mg",
      valor_concentracion: 75,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
