import type { Drug } from '@/lib/types';

export const hydrochlorothiazideDrug: Drug = {
  id: "hydrochlorothiazide",
  meta_data: {
    nombre_generico: "Hidroclorotiazida",
    nombres_comerciales: ["Co-amilozide", "Moduret", "Moduretic"],
    grupo_farmacologico: "Diurético tiazídico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la reabsorción de sodio y cloro en el túbulo contorneado distal.",
      "Promueve la excreción de potasio, magnesio y bicarbonato.",
      "Utilizado para lograr el 'bloqueo secuencial de la nefrona' en ICC refractaria.",
      "Debe usarse junto con diuréticos de asa (furosemida).",
      "Casi siempre formulado con amilorida para reducir la pérdida de potasio."
    ],
    usos_principales: "Tratamiento de la ICC refractaria, prevención de urolitiasis por oxalato de calcio e hipertensión.",
    inicio_accion: "Rápido",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Asegúrese de que el animal tenga siempre agua fresca disponible.",
    "Se requieren análisis de sangre periódicos para controlar el potasio y la función renal.",
    "Informe si nota debilidad extrema o falta de apetito.",
    "Generalmente se administra con el estómago vacío."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "ICC refractaria / Hipertensión",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.5,
          dosis_max: 4.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Iniciar con dosis baja y titular cada 5-10 días. Monitorizar urea y creatinina."
      }
    ],
    gato: [
      {
        indicacion: "ICC refractaria",
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
          intervalo_horas: 24
        }
      }
    ],
    reptil: [
      {
        indicacion: "Diuresis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 a 72 horas",
          intervalo_horas: 48
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal severa (reduce la TFG).",
      "Anuria.",
      "Deshidratación severa."
    ],
    efectos_adversos: [
      "Hipopotasemia (niveles bajos de potasio).",
      "Hiponatremia e hipocloremia.",
      "Azotemia prerrenal.",
      "Hiperglucemia.",
      "Activación del sistema renina-angiotensina-aldosterona."
    ],
    monitoreo_recomendado: [
      "Electrolitos séricos (Potasio, Sodio)",
      "Función renal (Creatinina/BUN)",
      "Presión arterial"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Deshidratación severa", "Desequilibrio electrolítico profundo", "Debilidad"],
      tratamiento: "Soporte de volumen con fluidos isotónicos y corrección de potasio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Diuréticos de asa (Furosemida)", efecto: "Riesgo extremo de deshidratación e hipopotasemia.", severidad: "Grave" },
      { farmaco: "Digoxina", efecto: "La hipopotasemia inducida por tiazidas aumenta drásticamente el riesgo de toxicidad por digoxina.", severidad: "Importante" },
      { farmaco: "Corticosteroides", efecto: "Aumentan la pérdida de potasio.", severidad: "Importante" },
      { farmaco: "Vitamina D / Sales de Calcio", efecto: "Riesgo de hipercalcemia.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea el simporte Na+/Cl- en la membrana luminal de las células del túbulo distal.",
    farmacocinetica: "Absorción oral rápida. Excreción renal predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta combinada", concentracion_texto: "25 mg HCTZ + 2.5 mg Amilorida", valor_concentracion: 25, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta combinada", concentracion_texto: "50 mg HCTZ + 5 mg Amilorida", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true }
  ]
};
