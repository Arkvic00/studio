import type { Drug } from '@/lib/types';

export const salbutamolDrug: Drug = {
  id: "salbutamol",
  meta_data: {
    nombre_generico: "Salbutamol (Albuterol)",
    nombres_comerciales: ["Ventolin"],
    grupo_farmacologico: "Agonista beta-2 adrenérgico; Broncodilatador",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Relaja el músculo liso bronquial mediante la activación de receptores beta-2.",
      "Efecto broncodilatador casi inmediato.",
      "Tratamiento de elección para crisis agudas de broncoespasmo (asma).",
      "Uso preferente por inhalación para minimizar efectos cardiovasculares.",
      "Riesgo de taquicardia y temblores en dosis altas o vía oral."
    ],
    usos_principales: "Alivio rápido de la bronconstricción en asma felina y bronquitis crónica canina.",
    inicio_accion: "Inmediato (5-10 min)",
    duracion_efecto: "4 a 6 horas"
  },
  informacion_cliente: [
    "Es un medicamento de rescate; úselo cuando su mascota tenga dificultad para respirar.",
    "Requiere el uso de una cámara espaciadora (ej. AeroKat).",
    "El animal puede parecer un poco inquieto o tener el corazón rápido tras el uso.",
    "No exceder el número de pulsaciones recomendadas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Broncoespasmo agudo",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 100,
          unidad_calculo: "μg (1 pulsación)"
        },
        frecuencia: { texto_ui: "Cada 4 a 6 horas si es necesario", intervalo_horas: 4 }
      }
    ],
    gato: [
      {
        indicacion: "Crisis de asma (Rescate)",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 100,
          unidad_calculo: "μg (1 pulsación)"
        },
        frecuencia: { texto_ui: "Cada 4 a 6 horas (máximo q30min por 4 horas en crisis)", intervalo_horas: 4 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Enfermedad cardíaca severa (arritmias).", "Hipertiroidismo no controlado.", "Hipopotasemia preexistente."],
    efectos_adversos: ["Taquicardia.", "Temblores musculares.", "Hipopotasemia (en uso frecuente).", "Agitación."],
    monitoreo_recomendado: ["Frecuencia cardíaca", "Esfuerzo respiratorio", "Niveles de potasio en crisis"],
    instrucciones_manejo: "Agitar bien antes de usar. Limpiar la cámara espaciadora regularmente.",
    sobredosis: {
      signos: ["Taicardia severa", "Vómitos", "Hipopotasemia profunda"],
      treatment: "Cese de administración; beta-bloqueantes selectivos (atenolol) en casos críticos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Beta-bloqueadores", efecto: "Antagonizan el efecto broncodilatador.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista selectivo de los receptores adrenérgicos beta-2 en los pulmones.",
    farmacocinetica: "Efecto local tras inhalación; el resto se absorbe y metaboliza en el hígado."
  },
  presentaciones_comerciales: [
    { tipo: "Inhalador (MDI)", concentracion_texto: "100 μg por pulsación", valor_concentracion: 100, unidad_concentracion: "μg" }
  ]
};