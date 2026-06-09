import type { Drug } from '@/lib/types';

export const diazoxideDrug: Drug = {
  id: "diazoxide",
  meta_data: {
    nombre_generico: "Diazóxido",
    nombres_comerciales: ["Eudemine"],
    grupo_farmacologico: "Inhibidor de la secreción de insulina; Vasodilatador",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la secreción de insulina pancreática al bloquear la movilización de calcio.",
      "Uso principal en el manejo médico del insulinoma (hiperinsulinismo).",
      "La eficacia clínica puede disminuir tras varios meses de tratamiento.",
      "Posee efectos vasodilatadores periféricos.",
      "Debe administrarse preferiblemente con comida para mitigar efectos secundarios gastrointestinales."
    ],
    usos_principales: "Manejo de la hipoglucemia persistente causada por insulinoma en perros y hurones.",
    inicio_accion: "Variable",
    duracion_efecto: "Requiere administración cada 12 horas"
  },
  informacion_cliente: [
    "Administrar el medicamento junto con el alimento para reducir náuseas y vómitos.",
    "El ajuste de la dosis depende de los niveles de glucosa en sangre del animal.",
    "Informe inmediatamente si nota hinchazón en las patas, dificultad para respirar o debilidad extrema.",
    "Este fármaco ayuda a controlar los síntomas pero no elimina el tumor subyacente."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipoglucemia por Insulinoma",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 5,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Iniciar con 5 mg/kg q12h e incrementar gradualmente según la respuesta glucémica hasta un máximo de 30 mg/kg q12h."
      }
    ],
    huron: [
      {
        indicacion: "Hipoglucemia por Insulinoma",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 17.5,
          dosis_min: 5,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "En hurones suele ser necesario combinarlo con prednisolona para un control óptimo."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas en el manejo paliativo, pero usar con cautela en pacientes cardiópatas o renales.",
      "Hipersensibilidad a las tiazidas."
    ],
    efectos_adversos: [
      "Anorexia, náuseas, vómitos y diarrea (frecuentes).",
      "Retención de sodio y agua (edema).",
      "Hipotensión y taquicardia.",
      "Supresión de la médula ósea.",
      "Pancreatitis aguda.",
      "Cataratas (asociado a uso crónico)."
    ],
    monitoreo_recomendado: [
      "Niveles de glucosa en sangre regularmente",
      "Presencia de edema o aumento de peso injustificado",
      "Hemograma completo (CBC) periódico",
      "Signos de pancreatitis (dolor abdominal, vómitos)"
    ],
    instrucciones_manejo: "Administrar con alimento. Proteger de la luz.",
    sobredosis: {
      signos: ["Hiperglucemia marcada", "Hipotensión profunda", "Letargo"],
      tratamiento: "Soporte sintomático; administración de insulina si la hiperglucemia es grave."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fenotiazinas / Diuréticos tiazídicos", efecto: "Pueden aumentar el efecto hiperglucemiante del diazóxido.", severidad: "Importante" },
      { farmaco: "Fenoxibenzamina", efecto: "Antagoniza los efectos del diazóxido.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de los canales de potasio dependientes de ATP que inhibe la liberación de insulina de las células beta pancreáticas y promueve la glucogenólisis hepática.",
    farmacocinetica: "Absorción oral variable. Se une altamente a proteínas plasmáticas."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "50 mg",
      valor_concentracion: 50,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Inyectable",
      concentracion_texto: "15 mg/ml",
      valor_concentracion: 15,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
