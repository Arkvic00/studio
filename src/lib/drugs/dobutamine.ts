import type { Drug } from '@/lib/types';

export const dobutamineDrug: Drug = {
  id: "dobutamine",
  meta_data: {
    nombre_generico: "Dobutamina",
    nombres_comerciales: ["Dobutrex", "Posiject"],
    grupo_farmacologico: "Agonista beta-1 adrenérgico; Inotrópico positivo",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Catecolamina sintética de acción directa.",
      "Aumenta la fuerza de contracción cardíaca (inotropía) con mínimos efectos en la frecuencia (cronotropía).",
      "Vida media muy corta; requiere administración exclusiva mediante infusión continua (CRI).",
      "Eficacia disminuye tras 48 horas debido a la regulación a la baja de los receptores beta.",
      "La solución puede volverse rosa al degradarse; debe descartarse si ocurre."
    ],
    usos_principales: "Soporte inotrópico a corto plazo en falla cardíaca por disfunción sistólica (MCD), shock séptico o cardiogénico, e hipotensión transanestésica.",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Muy corta (minutos tras el cese de la infusión)"
  },
  informacion_cliente: [
    "Medicamento de uso estrictamente hospitalario en cuidados intensivos.",
    "Requiere monitoreo constante del ritmo cardíaco y la presión arterial.",
    "Informe si nota que el animal parece inquieto o tiene temblores."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Soporte Inotrópico / Shock (CRI)",
        vias: ["IV (Infusión continua)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 2.5,
          dosis_max: 20,
          unidad_calculo: "μg/kg/min (microgramos)"
        },
        notas_tecnicas: "Iniciar en 2.5-5 μg/kg/min y titular a efecto. Riesgo de arritmias aumenta significativamente por encima de 10 μg/kg/min."
      }
    ],
    gato: [
      {
        indicacion: "Soporte Inotrópico (CRI)",
        vias: ["IV (Infusión continua)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "μg/kg/min"
        },
        notas_tecnicas: "Gatos son más sensibles. Dosis >2.5 μg/kg/min pueden causar arritmias. Dosis >5 μg/kg/min pueden inducir convulsiones."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción del flujo de salida cardíaco (ej. estenosis aórtica).",
      "Fibrilación ventricular.",
      "Hipersensibilidad a la dobutamina."
    ],
    efectos_adversos: [
      "Taquicardia y arritmias ventriculares.",
      "Hipertensión sistémica.",
      "Náuseas y vómitos.",
      "Hipopotasemia (con uso prolongado).",
      "Gatos: Convulsiones (dosis-dependiente)."
    ],
    monitoreo_recommended: [
      "ECG continuo (esencial para detectar arritmias)",
      "Presión arterial (idealmente invasiva)",
      "Niveles de potasio sérico",
      "Perfusión tisular (lactato, tiempo de llenado capilar)"
    ],
    instrucciones_manejo: "Diluir a 25 μg/ml en dextrosa o salino normal. Estable por 24h tras reconstitución. Descartar si hay coloración rosa.",
    sobredosis: {
      signos: ["Taquicardia severa", "Arritmias complejas", "Hipertensión marcada"],
      tratamiento: "Reducir la velocidad de infusión o detenerla temporalmente; el efecto desaparece en minutos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Beta-bloqueadores (Propranolol)", efecto: "Antagonizan el efecto inotrópico y pueden aumentar la resistencia vascular.", severidad: "Importante" },
      { farmaco: "IMAOs (Selegilina)", efecto: "Aumentan drásticamente el riesgo de hipertensión severa.", severidad: "Grave" },
      { farmaco: "Halotano", efecto: "Aumenta la incidencia de arritmias inducidas por dobutamina.", severidad: "Importante" },
      { farmaco: "Insulina", efecto: "Dobutamina puede aumentar los requerimientos de insulina en diabéticos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista directo de los receptores beta-1 adrenérgicos del miocardio, con efectos leves en receptores beta-2 y alfa-1.",
    farmacocinetica: "Eliminación muy rápida. No atraviesa la barrera hematoencefálica significativamente en dosis normales."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable para infusión",
      concentracion_texto: "12.5 mg/ml, 50 mg/ml",
      valor_concentracion: 12.5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
