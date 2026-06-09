import type { Drug } from '@/lib/types';

export const melphalanDrug: Drug = {
  id: "melphalan",
  meta_data: {
    nombre_generico: "Melfalán",
    nombres_comerciales: ["Alkeran"],
    grupo_farmacologico: "Agente alquilante; Antineoplásico",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente alquilante que forma enlaces cruzados con el ADN, inhibiendo su síntesis.",
      "Tratamiento de elección para el mieloma múltiple.",
      "Sustituto de la ciclofosfamida en algunos protocolos de linfoma.",
      "Riesgo de sobredosis en perros pequeños debido al tamaño de las tabletas (no deben dividirse).",
      "Administrar estrictamente con el estómago vacío."
    ],
    usos_principales: "Tratamiento de mieloma múltiple, leucemia linfocítica crónica (LLC) y como rescate en linfoma. Tumores sólidos (ovario, osteosarcoma).",
    inicio_accion: "Interferencia inmediata con el ciclo celular",
    duracion_efecto: "Persistente y acumulativo"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejar siempre con guantes impermeables.",
    "Las tabletas deben tragarse enteras; NO dividirlas ni triturarlas.",
    "Administrar sin comida (estómago vacío).",
    "Se requieren análisis de sangre frecuentes para vigilar los glóbulos blancos y plaquetas.",
    "Informe inmediatamente si nota moretones, fiebre o letargo extremo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Mieloma Múltiple (Inducción)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 2,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 1-2 semanas, luego reducir q48h", intervalo_horas: 24 }
      },
      {
        indicacion: "Linfoma (Rescate)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 20,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 14 días", intervalo_horas: 336 }
      },
      {
        indicacion: "Neoplasias sólidas (Ovario / Mama / Pulmón)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_min: 2,
          dosis_max: 4,
          dosis_recomendada: 3,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 48 horas", intervalo_horas: 48 }
      }
    ],
    gato: [
      {
        indicacion: "Leucemia Linfocítica Crónica (LLC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 2,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 48 horas (con o sin prednisolona)", intervalo_horas: 48 }
      },
      {
        indicacion: "Mieloma Múltiple",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24h por 14 días, luego cada 48h", intervalo_horas: 24 },
        notas_tecnicas: "Si hay leucopenia/anemia previa, administrar cada 72 horas."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de la médula ósea preexistente.",
      "Infección activa.",
      "Insuficiencia renal severa."
    ],
    efectos_adversos: [
      "Mielosupresión (leucopenia, trombocitopenia); puede ser prolongada.",
      "Anorexia, náuseas y vómitos.",
      "Fibrosis pulmonar o infiltrados (raro).",
      "Ulceración oral."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) regularmente",
      "Función renal (Creatinina/BUN)",
      "Signos de infección"
    ],
    instrucciones_manejo: "CITOTÓXICO. Mantener en refrigeración (2-8°C) en envase cerrado y protegido de la luz.",
    sobredosis: {
      signos: ["Supresión medular profunda", "Vómitos severos"],
      tratamiento: "Soporte sintomático intensivo y manejo de complicaciones hematológicas."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina", efecto: "Reduce la absorción oral del melfalán.", severidad: "Importante" },
      { farmaco: "Corticosteroides", efecto: "Potencian el efecto antitumoral del melfalán.", severidad: "Leve" },
      { farmaco: "Ciclosporina", efecto: "Aumenta el riesgo de toxicidad renal fatal.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Forma enlaces cruzados intra e inter-cadena en el ADN, bloqueando la replicación y función celular.",
    farmacocinetica: "Absorción oral variable. Eliminación rápida del plasma pero efectos biológicos persistentes."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "2 mg", valor_concentracion: 2, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Vial inyectable", concentracion_texto: "50 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: false }
  ]
};
