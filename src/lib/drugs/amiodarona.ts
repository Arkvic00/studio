import type { Drug } from '@/lib/types';

export const amiodaronaDrug: Drug = {
  id: "amiodarona",
  meta_data: {
    nombre_generico: "Amiodarona",
    nombres_comerciales: ["Cordarone"],
    grupo_farmacologico: "Antiarrítmico de Clase III (Bloqueador de canales de potasio)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antiarrítmico potente con acciones de clases 1, 2, 3 y 4.",
      "Prolonga el periodo refractario efectivo en todos los tejidos cardíacos.",
      "Vida media de eliminación muy larga (hasta 3.2 días en perros).",
      "Se reserva para pacientes donde otros agentes no han sido efectivos debido a sus numerosos efectos secundarios.",
      "Requiere un protocolo de carga inicial para alcanzar niveles terapéuticos."
    ],
    usos_principales: "Tratamiento de arritmias ventriculares y supraventriculares en perros. Control de frecuencia o conversión a ritmo sinusal en fibrilación auricular.",
    inicio_accion: "Lento (debido a absorción GI variable)",
    duracion_efecto: "Prolongada (eliminación lenta)"
  },
  informacion_cliente: [
    "Se requieren análisis de sangre frecuentes (hígado y tiroides) antes y durante el tratamiento.",
    "Informe si nota pérdida de apetito, vómitos o debilidad extrema.",
    "El tratamiento IV puede causar reacciones alérgicas; a menudo se premedica al animal."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Arritmias (Fase de Carga - Semana 1)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas por 7 días",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Arritmias (Fase de Transición - Semanas 2 y 3)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6.25,
          dosis_min: 5,
          dosis_max: 7.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas por 14 días",
          intervalo_horas: 12
        },
        notas_tecnicas: "Evaluar niveles séricos al final de esta fase (semana 3)."
      },
      {
        indicacion: "Arritmias (Mantenimiento - Desde Semana 4)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6.25,
          dosis_min: 5,
          dosis_max: 7.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Arritmias Refractarias (CRI)",
        vias: ["IV (Infusión)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.04,
          dosis_min: 0.03,
          dosis_max: 0.05,
          unidad_calculo: "mg/kg/min"
        },
        notas_tecnicas: "Dosis por MINUTO. Usar para conversión de fibrilación auricular o taquicardia supraventricular sostenida."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Bradicardia sinusal.",
      "Bloqueo AV.",
      "Disfunción tiroidea previa."
    ],
    efectos_adversos: [
      "Bradicardia y bloqueo AV.",
      "Hepatotoxicidad (elevación de enzimas hepáticas).",
      "Hipotiroidismo (disminución de T4).",
      "Anorexia y disturbios GI.",
      "Queropatía y prueba de Coombs positiva.",
      "Fibrosis pulmonar (reportada en humanos).",
      "Hipotensión y flebitis (vía IV)."
    ],
    monitoreo_recommended: [
      "Enzimas hepáticas (ALT, ALP) basal y cada 1-3 meses",
      "Función tiroidea (T4) basal y cada 1-3 meses",
      "Niveles séricos de amiodarona a las 3 semanas de inicio",
      "ECG (intervalo QT y ritmo)"
    ],
    instrucciones_manejo: "En administración IV, considerar pretratamiento con dexametasona para reducir riesgo de anafilaxia.",
    sobredosis: {
      signos: ["Bradicardia severa", "Hipotensión profunda", "Bloqueos cardíacos"],
      tratamiento: "Soporte inotrópico, atropina para bradicardia y manejo de la presión arterial."
    },
    interacciones_farmacologicas: [
      { farmaco: "Digoxina / Lidocaína / Teofilina", efecto: "Aumenta significativamente sus niveles séricos (riesgo de toxicidad).", severidad: "Grave" },
      { farmaco: "Anticoagulantes / Beta-bloqueadores", efecto: "Potencia sus efectos farmacológicos.", severidad: "Importante" },
      { farmaco: "Bloqueadores de canales de calcio", efecto: "Efectos aditivos en la conducción y contractilidad.", severidad: "Importante" },
      { farmaco: "Ciclosporina", efecto: "Aumenta los niveles de ciclosporina.", severidad: "Moderada" },
      { farmaco: "Cimetidina", efecto: "Aumenta los niveles séricos de amiodarona.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Prolonga la duración del potencial de acción y el periodo refractario efectivo en todos los tejidos cardíacos. Bloquea canales de potasio, sodio y calcio, además de receptores alfa y beta adrenérgicos.",
    farmacocinetica: "Absorción GI lenta y variable. Metabolismo hepático."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "100 mg, 200 mg",
      valor_concentracion: 100,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Inyectable",
      concentracion_texto: "50 mg/ml (para dilución)",
      valor_concentracion: 50,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
