import type { Drug } from '@/lib/types';

export const telmisartanDrug: Drug = {
  id: "telmisartan",
  meta_data: {
    nombre_generico: "Telmisartán",
    nombres_comerciales: ["Semintra"],
    grupo_farmacologico: "Antagonista de receptores de angiotensina II (ARA II)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador selectivo del receptor AT1 de la angiotensina II.",
      "Reduce la presión arterial y la proteinuria.",
      "Tan efectivo como el benazepril en el control de la proteinuria felina.",
      "Efecto protector sobre el parénquima renal al reducir la presión intraglomerular.",
      "Formulación líquida de excelente palatabilidad para gatos."
    ],
    usos_principales: "Reducción de la proteinuria asociada a la enfermedad renal crónica e hipertensión sistémica en gatos.",
    inicio_accion: "Rápido",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Informe si nota vómitos o si su gato deja de comer (efectos GI leves comunes).",
    "Se requieren análisis de sangre periódicos para vigilar los riñones.",
    "Medicamento para uso a largo plazo; no suspenda sin consultar.",
    "No usar en gatas gestantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Proteinuria / Hipertensión (Uso extra-label)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Proteinuria (IRC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Hipertensión sistémica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación y lactancia.",
      "Animales menores de 6 meses.",
      "Hipotensión severa."
    ],
    efectos_adversos: [
      "Regurgitación y vómitos.",
      "Diarrea.",
      "Elevación transitoria de enzimas hepáticas.",
      "Descenso leve de la presión arterial."
    ],
    monitoreo_recomendado: [
      "Presión arterial sistémica regularmente",
      "Creatinina y BUN séricos",
      "Ratio UPC (Proteína/Creatinina urinaria)"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Hipotensión", "Aumento de Urea/Creatinina"],
      tratamiento: "Soporte de volumen con fluidos isotónicos."
    },
    interacciones_farmacologicas: [
      { farmaco: "IECAs (Benazepril)", efecto: "Evitar uso conjunto; riesgo de insuficiencia renal aguda.", severidad: "Grave" },
      { farmaco: "Amlodipino", efecto: "Generalmente bien tolerados en combinación.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Desplaza a la angiotensina II de su sitio de unión en el receptor AT1, bloqueando los efectos vasoconstrictores y de liberación de aldosterona.",
    farmacocinetica: "Eliminación fecal predominante (>95%)."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución oral",
      concentracion_texto: "4 mg/ml, 10 mg/ml",
      valor_concentracion: 4,
      unit_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
