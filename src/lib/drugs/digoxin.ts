import type { Drug } from '@/lib/types';

export const digoxinDrug: Drug = {
  id: "digoxin",
  meta_data: {
    nombre_generico: "Digoxina",
    nombres_comerciales: ["Lanoxin", "Digoxin*"],
    grupo_farmacologico: "Glucósido cardíaco; Inotrópico positivo; Antiarrítmico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Aumenta la fuerza de contracción miocárdica (inotrópico positivo leve).",
      "Reduce la frecuencia ventricular en fibrilación auricular mediante efectos vagomiméticos.",
      "Mejora los reflejos barorreceptores deteriorados en insuficiencia cardíaca.",
      "Índice terapéutico muy estrecho: el riesgo de toxicidad es elevado.",
      "La biodisponibilidad varía: elixires (75%) > tabletas (60%).",
      "La hipopotasemia (niveles bajos de potasio) predispone fuertemente a la toxicidad."
    ],
    usos_principales: "Control de la frecuencia ventricular en fibrilación auricular y manejo de la insuficiencia cardíaca congestiva. Tratamiento de MCD en hurones y conejos.",
    inicio_accion: "Días (requiere alcanzar estado estacionario)",
    duracion_efecto: "Requiere monitoreo de niveles séricos tras 7-10 días"
  },
  informacion_cliente: [
    "Es vital no saltarse ninguna dosis y seguir el horario estrictamente.",
    "Informe inmediatamente si nota pérdida de apetito, vómitos, diarrea o letargo extremo (signos de intoxicación).",
    "Se requieren análisis de sangre periódicos para medir los niveles de medicamento y de potasio.",
    "Informe si el animal parece tener un ritmo cardíaco inusual o desmayos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Fibrilación Auricular / Falla Cardíaca",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.003,
          dosis_min: 0.0025,
          dosis_max: 0.0035,
          unidad_calculo: "mg/kg (2.5-3.5 μg/kg)"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Basar dosis en el PESO MAGRO. Máximo 0.25 mg por perro q12h. Medir niveles séricos a los 7-10 días (6-8h post-toma). Rango ideal: 0.6–1.2 ng/ml."
      }
    ],
    gato: [
      {
        indicacion: "Falla Cardíaca (Uso limitado)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg (10 μg/kg)"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas", intervalo_horas: 36 },
        notas_tecnicas: "Gatos son altamente sensibles. Iniciar con dosis baja. Contraindicado en cardiomiopatía hipertrófica."
      }
    ],
    huron: [
      {
        indicacion: "Cardiomiopatía dilatada",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.0075,
          dosis_min: 0.005,
          dosis_max: 0.01,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Cardiomiopatía dilatada",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.016,
          dosis_min: 0.003,
          dosis_max: 0.03,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas", intervalo_horas: 36 }
      }
    ],
    roedores: [
      {
        indicacion: "Hámsteres: Falla cardíaca",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Falla cardíaca (Raptors/Palomas/Loros)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.035,
          dosis_min: 0.02,
          dosis_max: 0.05,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Arritmias ventriculares frecuentes.",
      "Bloqueo AV de alto grado.",
      "Cardiomiopatía hipertrófica felina.",
      "Hipopotasemia severa (corregir antes)."
    ],
    efectos_adversos: [
      "Anorexia y vómitos (signo temprano de toxicidad).",
      "Diarrea.",
      "Depresión.",
      "Arritmias cardíacas (Bloqueo AV, bigeminismo, VPCs).",
      "Gatos: Sensibilidad extrema a efectos tóxicos."
    ],
    monitoreo_recomendado: [
      "Niveles séricos de digoxina (Trough 0.6–1.2 ng/ml)",
      "Electrolitos (Potasio, Calcio, Magnesio)",
      "Función renal (Creatinina/BUN)",
      "ECG periódico"
    ],
    instrucciones_manejo: "Reducir dosis en obesos, geriátricos o pacientes renales.",
    sobredosis: {
      signos: ["Vómitos incoercibles", "Arritmias fatales", "Colapso"],
      tratamiento: "Cese inmediato. Lidocaína o Fenitoína para arritmias ventriculares. Atropina para bradicardia. Fragmentos de anticuerpos específicos (DigiBind) en humanos (uso raro en vet)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Diuréticos de asa (Furosemida)", efecto: "Riesgo extremo de toxicidad por hipopotasemia.", severidad: "Grave" },
      { farmaco: "Anticancerosos / Antiácidos / Metoclopramida", efecto: "Disminuyen la absorción de digoxina.", severidad: "Importante" },
      { farmaco: "Amiodarona / Diazepam / Eritromicina / Verapamilo", efecto: "Aumentan los niveles séricos de digoxina.", severidad: "Importante" },
      { farmaco: "Espironolactona", efecto: "Puede aumentar o disminuir la toxicidad (variable).", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la Na+/K+ ATPasa, aumentando el sodio intracelular, lo que favorece el intercambio por calcio y aumenta la contractilidad. Sensibiliza el tono vagal reduciendo la conducción AV.",
    farmacocinetica: "Eliminación predominantemente renal. Vida media larga."
  },
  presentaciones_comerciales: [
    { tipo: "Tabletas", concentracion_texto: "62.5 μg, 125 μg, 250 μg", valor_concentracion: 0.125, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Elixir oral", concentracion_texto: "50 μg/ml (0.05 mg/ml)", valor_concentracion: 0.05, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "100 μg/ml, 250 μg/ml", valor_concentracion: 0.25, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
