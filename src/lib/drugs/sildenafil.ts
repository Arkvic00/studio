import type { Drug } from '@/lib/types';

export const sildenafilDrug: Drug = {
  id: "sildenafil",
  meta_data: {
    nombre_generico: "Sildenafil",
    nombres_comerciales: ["Revatio", "Viagra"],
    grupo_farmacologico: "Vasodilatador de la vasculatura pulmonar (Inhibidor selectivo de PDE-V)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la fosfodiesterasa tipo V, aumentando los niveles de cGMP en los vasos pulmonares.",
      "Provoca una vasodilatación selectiva de la arteria pulmonar.",
      "Mejora significativamente la calidad de vida y tolerancia al ejercicio.",
      "No reduce necesariamente las mediciones ecocardiográficas de forma drástica, pero sí el impacto clínico."
    ],
    usos_principales: "Tratamiento de la hipertensión arterial pulmonar en perros y gatos.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 24 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota se marea o parece muy débil (posible presión baja).",
    "No administrar junto con nitratos (ej. nitroglicerina) ya que la caída de presión puede ser fatal.",
    "El tratamiento suele ser a largo plazo.",
    "Existen formulaciones pediátricas o magistrales para facilitar la dosis en animales pequeños."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipertensión Pulmonar",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.5,
          dosis_max: 2.7,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 24 horas (Mediana sugerida: 3 mg/kg/día)",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Hipertensión Pulmonar",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipotensión sistémica.",
      "Insuficiencia hepática o renal severa.",
      "Trastornos de la coagulación.",
      "Uso simultáneo de nitratos."
    ],
    efectos_adversos: [
      "Vómitos.",
      "Mareos y debilidad.",
      "Aumento de la presión intraocular (precaución en glaucoma).",
      "Rubor cutáneo."
    ],
    monitoreo_recomendado: [
      "Presión arterial sistémica",
      "Estado de actividad y fatiga",
      "Presión intraocular"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Hipotensión profunda", "Taquicardia", "Colapso"],
      tratamiento: "Soporte circulatorio con fluidoterapia y agentes vasopresores si es necesario."
    },
    interacciones_farmacologicas: [
      { farmaco: "Nitratos (Nitroglicerina)", efecto: "Riesgo extremo de hipotensión fatal. NO COMBINAR.", severidad: "Grave" },
      { farmaco: "Bloqueadores alfa-adrenérgicos", efecto: "Riesgo de hipotensión severa al inicio del tratamiento.", severidad: "Importante" },
      { farmaco: "Cimetidina / Eritromicina / Itraconazol", efecto: "Aumentan los niveles plasmáticos de sildenafil.", severidad: "Moderada" },
      { farmaco: "Fenobarbital", efecto: "Puede aumentar el aclaramiento de sildenafil.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la fosfodiesterasa-5 que previene la degradación de cGMP, mediador de la relajación del músculo liso mediada por óxido nítrico.",
    farmacocinetica: "Absorción oral rápida. Metabolismo hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "20 mg, 25 mg, 50 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "0.8 mg/ml", valor_concentracion: 0.8, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};