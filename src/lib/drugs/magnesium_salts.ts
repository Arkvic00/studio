import type { Drug } from '@/lib/types';

export const magnesiumSaltsDrug: Drug = {
  id: "magnesium_salts",
  meta_data: {
    nombre_generico: "Sales de Magnesio (Sulfato de Magnesio)",
    nombres_comerciales: ["Magnesium sulphate injection BP"],
    grupo_farmacologico: "Suplemento mineral; Antiarrítmico",
    status_regulatorio: "POM-VPS, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Cofactor esencial en sistemas enzimáticos y mantenimiento de gradientes iónicos.",
      "Crucial para la excitación muscular y transmisión neurológica.",
      "Diluir siempre a una solución al 20% o menor antes de su uso.",
      "Uso de emergencia en arritmias ventriculares refractarias (especialmente si hay hipopotasemia).",
      "Monitorizar el magnesio sérico (30-35% unido a proteínas)."
    ],
    usos_principales: "Tratamiento de arritmias ventriculares refractarias, hipomagnesemia y como terapia adyuvante en tétanos severo.",
    inicio_accion: "Inmediato (IV)",
    duracion_efecto: "Corta; requiere infusión o dosis repetidas para repleción de depósitos"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario para situaciones críticas.",
    "Requiere monitoreo constante del ritmo cardíaco.",
    "El veterinario vigilará la fuerza muscular y la respiración del animal.",
    "Informe si nota que su mascota parece muy débil o somnolienta tras la dosis."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Arritmias ventriculares (Emergencia vital)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.225,
          dosis_min: 0.15,
          dosis_max: 0.3,
          unidad_calculo: "mEq/kg"
        },
        frecuencia: { texto_ui: "Administrar en 5-15 minutos", intervalo_horas: 0 },
        notas_tecnicas: "Usar cuando las arritmias no responden a lidocaína o procainamida."
      },
      {
        indicacion: "Repleción de magnesio (Deficiencia)",
        vias: ["IV (CRI)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.875,
          dosis_min: 0.75,
          dosis_max: 1.0,
          unidad_calculo: "mEq/kg/día"
        },
        frecuencia: { texto_ui: "Primeras 24-48h, luego bajar a 0.3-0.5 mEq/kg/día", intervalo_horas: 24 },
        notas_tecnicas: "Administrar diluido en Dextrosa al 5%. Reducir suplementos de potasio para evitar hiperpotasemia."
      }
    ],
    gato: [
      {
        indicacion: "Arritmias ventriculares / Deficiencia",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.225,
          dosis_min: 0.15,
          dosis_max: 0.3,
          unidad_calculo: "mEq/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Bloqueo cardíaco.",
      "Daño miocárdico severo.",
      "Insuficiencia renal significativa (el magnesio se excreta vía renal)."
    ],
    efectos_adversos: [
      "Somnolencia y depresión del SNC (en sobredosis).",
      "Debilidad muscular severa.",
      "Bradicardia e hipotensión.",
      "Depresión respiratoria.",
      "Paro cardíaco (niveles muy altos).",
      "Prolongación del intervalo Q-T."
    ],
    monitoreo_recomendado: [
      "ECG continuo (intervalo Q-T)",
      "Niveles de magnesio sérico",
      "Esfuerzo respiratorio",
      "Fuerza muscular (reflejos patelares)"
    ],
    instrucciones_manejo: "Tener preparado Gluconato de Calcio IV como antídoto para sobredosis. Diluir soluciones concentradas.",
    sobredosis: {
      signos: ["Debilidad muscular extrema", "Coma", "Paro respiratorio"],
      treatment: "Cese inmediato. Soporte ventilatorio. Administrar Gluconato de Calcio IV (antagonista)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Digitálicos (Digoxina)", efecto: "Riesgo de trastornos de conducción severos. Usar con extrema precaución.", severidad: "Grave" },
      { farmaco: "Bloqueadores neuromusculares", efecto: "Magnesio potencia significativamente el bloqueo neuromuscular.", severidad: "Importante" },
      { farmaco: "Depresores del SNC (Barbitúricos)", efecto: "Efectos sedantes aditivos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Catión intracelular esencial. Estabiliza membranas excitables y es cofactor en el transporte iónico (Na+/K+ ATPasa).",
    farmacocinetica: "Excreción renal proporcional a los niveles séricos."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "25% (1 mEq/ml) o 50% (2 mEq/ml)", valor_concentracion: 250, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
