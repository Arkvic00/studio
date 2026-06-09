import type { Drug } from '@/lib/types';

export const tamsulosinDrug: Drug = {
  id: "tamsulosin",
  meta_data: {
    nombre_generico: "Tamsulosina",
    nombres_comerciales: ["Flomax relief", "Flomaxtra"],
    grupo_farmacologico: "Antagonista alfa-1 adrenérgico selectivo",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador alfa-1 altamente selectivo para el tracto urinario inferior.",
      "Relaja el músculo liso de la próstata, uretra y cuello vesical.",
      "Menor impacto sobre la presión arterial sistémica que prazosina.",
      "Ayuda en el paso de cálculos uretrales (urolitos).",
      "Las cápsulas no deben abrirse (liberación modificada)."
    ],
    usos_principales: "Tratamiento de la disinergia de reflejos, espasmo uretral y ayuda en la expulsión de cálculos urinarios.",
    inicio_accion: "Rápido (efecto en horas)",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota parece muy débil o se marea (hipotensión rara).",
    "No triture ni abra las cápsulas; deben tragarse enteras.",
    "El medicamento ayuda a que el animal orine con más facilidad.",
    "Informe si nota que su mascota deja de orinar por completo (obstrucción)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Relajación uretral / Disinergia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas (puede aumentarse a q12h)",
          intervalo_horas: 24
        },
        notas_tecnicas: "Máximo 0.4 mg por perro al día. Requiere formulación magistral para dosis exactas en perros pequeños."
      }
    ],
    gato: [
      {
        indicacion: "Espasmo uretral / Ayuda en cálculos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.005,
          dosis_min: 0.004,
          dosis_max: 0.006,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipotensión sistémica previa.",
      "Insuficiencia renal o hepática severa."
    ],
    efectos_adversos: [
      "Hipotensión (inusual a dosis bajas).",
      "Letargo.",
      "Vómitos y diarrea leves."
    ],
    monitoreo_recomendado: [
      "Presión arterial",
      "Facilidad y volumen de micción"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Hipotensión profunda", "Colapso"],
      tratamiento: "Soporte de volumen con fluidos isotónicos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros bloqueadores alfa / Sildenafil", efecto: "Riesgo de hipotensión severa.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista selectivo de los receptores alfa-1A y alfa-1D presentes en la uretra y próstata.",
    farmacocinetica: "Absorción oral lenta. Metabolismo hepático."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula de liberación modificada",
      concentracion_texto: "0.4 mg",
      valor_concentracion: 0.4,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
