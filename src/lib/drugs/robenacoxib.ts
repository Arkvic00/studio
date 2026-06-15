import type { Drug } from '@/lib/types';

export const robenacoxibDrug: Drug = {
  id: "robenacoxib",
  meta_data: {
    nombre_generico: "Robenacoxib",
    nombres_comerciales: ["Onsior"],
    grupo_farmacologico: "AINE (Inhibidor selectivo COX-2)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor selectivo de la ciclooxigenasa-2 (COX-2).",
      "Persiste más tiempo en el sitio de inflamación que en la sangre.",
      "Aprobado para uso a corto plazo (hasta 3-6 días) en gatos y perros.",
      "Muy buena palatabilidad en gatos."
    ],
    usos_principales: "Tratamiento del dolor y la inflamación postoperatoria y osteoartritis.",
    inicio_accion: "Rápido (pico en 1h)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "No administrar con otros antiinflamatorios o corticoides.",
    "Asegúrese de que su mascota esté bien hidratada.",
    "Informe inmediatamente si nota vómitos, diarrea o pérdida de apetito."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dolor e Inflamación",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Dolor e Inflamación",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 2.4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas (máx 6 días)", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Deshidratación.", "Hipotensión.", "Úlceras GI.", "Fallo renal o hepático severo."],
    efectos_adversos: ["Vómitos", "Diarrea", "Anorexia"],
    monitoreo_recomendado: ["Función renal en uso repetido"],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Vómitos", "Diarrea hemorrágica"],
      tratamiento: "Protectores gástricos y fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Corticoides", efecto: "Aumenta drásticamente riesgo de úlceras.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibición selectiva de la enzima COX-2, reduciendo la síntesis de prostaglandinas proinflamatorias.",
    farmacocinetica: "Vida media corta en plasma, pero acumulación en exudado inflamatorio."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta masticable", concentracion_texto: "5 mg, 10 mg, 20 mg, 40 mg", valor_concentracion: 6, unidad_concentracion: "mg" },
    { tipo: "Inyectable", concentracion_texto: "20 mg/ml", valor_concentracion: 20, unidad_concentracion: "mg/ml" }
  ]
};