import type { Drug } from '@/lib/types';

export const atenololDrug: Drug = {
  id: "atenolol",
  meta_data: {
    nombre_generico: "Atenolol",
    nombres_comerciales: ["Tenormin", "Atenolol*"],
    grupo_farmacologico: "Bloqueador beta-adrenérgico cardioselectivo",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador beta-1 selectivo; reduce la demanda de oxígeno miocárdico.",
      "Bloquea los efectos cronotrópicos e inotrópicos positivos de la estimulación simpática.",
      "Ideal para taquiarritmias supraventriculares y control de frecuencia en hipertiroidismo.",
      "Se debe retirar el tratamiento de forma GRADUAL tras un uso crónico.",
      "Contraindicado en pacientes con fallo cardíaco congestivo descompensado."
    ],
    usos_principales: "Tratamiento de taquiarritmias cardíacas, cardiomiopatía hipertrófica obstructiva (gatos), estenosis aórtica o pulmonar severa e hipertensión sistémica.",
    inicio_accion: "Rápido",
    duracion_efecto: "Requiere administración cada 12-24 horas"
  },
  informacion_cliente: [
    "No suspenda el medicamento de forma repentina; esto puede causar problemas cardíacos graves.",
    "Puede causar letargo o debilidad en algunos animales.",
    "Informe si nota desmayos o dificultad respiratoria inusual.",
    "Se recomienda el monitoreo regular de la frecuencia cardíaca y la presión arterial."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Taquiarritmias / Hipertensión / Estenosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.2,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Iniciar con la dosis más baja y titular hacia arriba gradualmente según respuesta clínica."
      }
    ],
    gato: [
      {
        indicacion: "Taquiarritmias / Cardiomiopatía / Hipertiroidismo",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 6.25,
          dosis_min: 6.25,
          dosis_max: 12.5,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Dosis fija independientemente del peso. Si se usa jarabe, dosificar a 0.2-2 mg/kg cada 12h."
      }
    ],
    huron: [
      {
        indicacion: "Enfermedad cardíaca",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.125,
          dosis_min: 3.125,
          dosis_max: 6.25,
          unidad_calculo: "mg/hurón"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    conejo: [
      {
        indicacion: "Control de frecuencia cardíaca",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Control cardíaco",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.2,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Ratones: Control cardíaco",
        vias: ["IV", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 2,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    ave: [
      {
        indicacion: "Taquicardia supraventricular",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Sotalol es una alternativa común en aves (1 mg/kg q12h)."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Bradiarritmias (Bradicardia severa).",
      "Bloqueo AV de 2do o 3er grado.",
      "Fallo cardíaco congestivo agudo o descompensado.",
      "Shock cardiogénico."
    ],
    precauciones: [
      "Asma o enfermedad bronquial (riesgo de broncoespasmo).",
      "Insuficiencia renal (requiere ajuste de dosis).",
      "Diabetes mellitus (puede enmascarar signos de hipoglucemia)."
    ],
    efectos_adversos: [
      "Bradicardia y bloqueos de conducción.",
      "Hipotensión.",
      "Letargo y depresión (por penetración al SNC).",
      "Broncoespasmo.",
      "Diarrea.",
      "Hipoglucemia."
    ],
    monitoreo_recomendado: [
      "Frecuencia y ritmo cardíaco (ECG)",
      "Presión arterial",
      "Niveles de glucosa en diabéticos",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Retirar de forma gradual. Almacenar a temperatura ambiente protegido de la luz.",
    sobredosis: {
      signos: ["Bradicardia severa", "Hipotensión profunda", "Fallo cardíaco agudo", "Convulsiones (raro)"],
      tratamiento: "Glucagón IV (inotrópico positivo), Atropina para bradicardia, agonistas beta (Dobutamina/Isoproterenol) y fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Bloqueadores de canales de Calcio (Diltiazem/Verapamilo)", efecto: "Riesgo extremo de bradicardia severa, hipotensión y fallo cardíaco.", severidad: "Grave" },
      { farmaco: "Digoxina", efecto: "Potencia el riesgo de bradicardia y bloqueos AV.", severidad: "Importante" },
      { farmaco: "Insulina", efecto: "Puede potenciar la hipoglucemia y enmascarar sus signos.", severidad: "Importante" },
      { farmaco: "Anestésicos / Fenotiazinas", efecto: "Potenciación del efecto hipotensor.", severidad: "Moderada" },
      { farmaco: "Teofilina", efecto: "El atenolol puede bloquear el efecto broncodilatador.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores beta-1 adrenérgicos del miocardio. Reduce la frecuencia cardíaca, la contractilidad y la velocidad de conducción.",
    farmacocinetica: "Eliminación renal predominante. Cruza la barrera hematoencefálica debido a su naturaleza lipofílica."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "25 mg, 50 mg, 100 mg", valor_concentracion: 25, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Jarabe libre de azúcar", concentracion_texto: "5 mg/ml", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "0.5 mg/ml", valor_concentracion: 0.5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};