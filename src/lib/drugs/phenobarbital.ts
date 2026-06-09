import type { Drug } from '@/lib/types';

export const phenobarbitalDrug: Drug = {
  id: "phenobarbital",
  meta_data: {
    nombre_generico: "Fenobarbital",
    nombres_comerciales: ["Epiphen", "Epityl", "Phenoleptil", "Gardenal"],
    grupo_farmacologico: "Anticonvulsivo; Barbitúrico",
    status_regulatorio: "POM-V, POM CD SCHEDULE 3"
  },
  resumen_clinico: {
    puntos_clave: [
      "Fármaco de primera elección para la epilepsia idiopática.",
      "Potencia la inhibición mediada por GABA y reduce la excitación por glutamato.",
      "Requiere de 7 a 10 días para alcanzar niveles estables en sangre (steady state).",
      "Inductor enzimático hepático: su vida media disminuye con el uso prolongado.",
      "El rango terapéutico sugerido es de 15 a 45 μg/ml.",
      "Niveles >35 μg/ml aumentan significativamente el riesgo de hepatotoxicidad."
    ],
    usos_principales: "Manejo crónico de la epilepsia idiopática, control de convulsiones por enfermedad estructural cerebral y manejo de emergencia del estatus epiléptico.",
    inicio_accion: "8-12 horas (oral); 20 min (IV para niveles en SNC)",
    duracion_efecto: "Requiere administración cada 12 horas"
  },
  informacion_cliente: [
    "No suspenda el medicamento de forma repentina; esto puede causar convulsiones mortales.",
    "Es normal notar somnolencia o falta de coordinación durante la primera semana.",
    "El perro tendrá mucha más hambre y sed de lo habitual; no restrinja el agua.",
    "Se requieren análisis de sangre cada 6-12 meses para vigilar el hígado y los niveles del fármaco.",
    "Informe si nota color amarillento en los ojos o piel (ictericia)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Epilepsia Idiopática (Mantenimiento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 2.5,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Dosis inicial autorizada de 2-2.5 mg/kg, pero a menudo se requiere 3 mg/kg q12h para alcanzar niveles terapéuticos."
      },
      {
        indicacion: "Estatus Epiléptico (Carga en no tratados)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 18,
          dosis_min: 12,
          dosis_max: 24,
          unidad_calculo: "mg/kg (Dosis total)"
        },
        notas_tecnicas: "Dar 12 mg/kg inicial. Esperar 20 min. Si persiste, dar bolos de 4-6 mg/kg cada 20 min hasta el total de 24 mg/kg."
      },
      {
        indicacion: "Ansiedad / Fiedos (con Propranolol)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 2,
          dosis_max: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Manejo de Convulsiones",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.25,
          dosis_min: 1.5,
          dosis_max: 3.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Control de convulsiones",
        vias: ["PO", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1.0,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Convulsiones (Psitácidas)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5.25,
          dosis_min: 3.5,
          dosis_max: 7.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia hepática severa.",
      "Hipersensibilidad a los barbitúricos.",
      "No usar para convulsiones por toxicidad de ivermectina/moxidectina (empeora el cuadro)."
    ],
    efectos_adversos: [
      "Sedación y ataxia (suelen remitir en 1 semana).",
      "Polifagia, poliuria y polidipsia (persisten).",
      "Hepatotoxicidad (elevación de ALP/ALT es común; vigilar función).",
      "Citopenias sanguíneas (raro).",
      "Hiperexcitabilidad en dosis subterapéuticas."
    ],
    monitoreo_recomendado: [
      "Niveles séricos de fenobarbital (q6-12 meses; ideal 20-35 μg/ml)",
      "Bilis ácidas y perfiles hepáticos",
      "Función tiroidea (T4 total disminuye artificialmente)"
    ],
    instrucciones_manejo: "Retirar de forma gradual: reducir 25% de la dosis original cada mes.",
    sobredosis: {
      signos: ["Depresión respiratoria severa", "Coma", "Hipotensión"],
      tratamiento: "Soporte respiratorio y cardiovascular. No existe antídoto específico."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina / Cloranfenicol", efecto: "Aumentan los niveles de fenobarbital.", severidad: "Importante" },
      { farmaco: "Corticosteroides / Teofilina", efecto: "Fenobarbital acelera su metabolismo, bajando su efecto.", severidad: "Moderada" },
      { farmaco: "Otros depresores del SNC", efecto: "Sedación aditiva marcada.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Aumenta la inhibición sináptica al actuar sobre el receptor GABA-A y bloquea la liberación de glutamato mediada por AMPA.",
    farmacocinetica: "Metabolismo hepático extenso (auto-inducción microsomal). Excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "12.5 mg a 100 mg", valor_concentracion: 60, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "40 mg/ml (4%)", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "200 mg/ml", valor_concentracion: 200, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};