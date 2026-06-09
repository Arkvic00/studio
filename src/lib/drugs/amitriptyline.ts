import type { Drug } from '@/lib/types';

export const amitriptylineDrug: Drug = {
  id: "amitriptyline",
  meta_data: {
    nombre_generico: "Amitriptilina",
    nombres_comerciales: ["Amitriptilina*"],
    grupo_farmacologico: "Antidepresivo tricíclico; Inhibidor de la recaptación de noradrenalina y serotonina",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea la recaptación de noradrenalina y serotonina en el cerebro.",
      "Posee actividad antidepresiva y estabilizadora de mastocitos.",
      "Útil en condiciones de ansiedad crónica e inflamación (ej. cistitis idiopática felina).",
      "Sabor muy amargo: puede causar salivación profusa (ptialismo) en gatos.",
      "Requiere un periodo de lavado de 2 semanas al cambiar desde MAOIs."
    ],
    usos_principales: "Manejo de ansiedad crónica, trastornos compulsivos y ansiedad por separación en perros. Alopecia psicógena, hipervocalización y cistitis idiopática en gatos. Picaje de plumas en aves.",
    inicio_accion: "Efectos conductuales pueden tardar semanas en ser evidentes",
    duracion_efecto: "Requiere administración diaria constante"
  },
  informacion_cliente: [
    "El medicamento es muy amargo; no triturar las tabletas para gatos ya que causará babeo intenso.",
    "Puede causar somnolencia o aumento de peso.",
    "No interrumpir el tratamiento súbitamente.",
    "Informe si su mascota presenta convulsiones o dificultad para orinar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ansiedad crónica / Trastornos compulsivos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Clomipramina puede ser preferible para trastornos puramente compulsivos."
      }
    ],
    gato: [
      {
        indicacion: "Cistitis idiopática / Alopecia psicógena",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "El sabor amargo puede causar ptialismo intenso. Evitar triturar la dosis."
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Trastornos de conducta",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 5,
          dosis_max: 20,
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
        indicacion: "Picaje de plumas / Ansiedad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 1,
          dosis_max: 9,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas (Mínimo 30 días)",
          intervalo_horas: 12
        },
        notas_tecnicas: "Iniciar con dosis baja y titular hacia arriba. PRECAUCIÓN: Signos extrapiramidales severos reportados en Guacamayas a dosis de 5 mg/kg."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a antidepresivos tricíclicos.",
      "Glaucoma.",
      "Historial de convulsiones.",
      "Retención urinaria.",
      "Enfermedad hepática severa."
    ],
    precauciones: [
      "Usar con cautela en pacientes con enfermedad cardíaca o renal.",
      "Periodo de lavado mínimo de 2 semanas tras uso de MAOIs (clorprenalina, cimetidina)."
    ],
    efectos_adversos: [
      "Sedación.",
      "Boca seca (xerostomía).",
      "Vómitos y alteraciones GI.",
      "Arritmias e hipotensión.",
      "Aumento de apetito y peso.",
      "Ptialismo (por sabor amargo en gatos y aves).",
      "Aves: Posibles signos extrapiramidales."
    ],
    monitoreo_recomendado: [
      "Función hepática y renal",
      "Ritmo cardíaco (ECG) en pacientes de riesgo",
      "Estado de alerta"
    ],
    sobredosis: {
      signos: ["Convulsiones", "Arritmias cardíacas fatales", "Sedación profunda"],
      tratamiento: "Soporte sintomático intensivo, carbón activado si la ingestión es reciente."
    },
    interacciones_farmacologicas: [
      { farmaco: "Tramadol", efecto: "Riesgo de síndrome de serotonina.", severidad: "Importante" },
      { farmaco: "ISRS (Fluoxetina/Clomipramina)", efecto: "Riesgo de síndrome de serotonina. NO USAR CONJUNTAMENTE.", severidad: "Grave" },
      { farmaco: "MAOIs", efecto: "Interacción potencialmente fatal. Requiere periodo de lavado.", severidad: "Grave" },
      { farmaco: "Diazepam", efecto: "Puede aumentar los niveles sanguíneos de amitriptilina.", severidad: "Moderada" },
      { farmaco: "Cimetidina", efecto: "Inhibe el metabolismo de la amitriptilina.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la recaptación neuronal de noradrenalina y serotonina en el SNC. Posee efectos anticolinérgicos, antihistamínicos y estabilizadores de membrana.",
    farmacocinetica: "Absorción oral buena pero con efecto de primer paso hepático significativo."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta", concentracion_texto: "10 mg, 25 mg, 50 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
