import type { Drug } from '@/lib/types';

export const acarbosaDrug: Drug = {
  id: "acarbosa",
  meta_data: {
    nombre_generico: "Acarbosa",
    nombres_comerciales: ["Precose", "Glucobay"],
    grupo_farmacologico: "Agente antidiabético, inhibidor de la alfa-glucosidasa",
    status_regulatorio: "Uso extra-label en perros y gatos; Aprobado por la FDA para humanos."
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente antihiperglucémico que reduce la tasa y cantidad de glucosa absorbida en el intestino después de una comida.",
      "Útil en perros y gatos con hiperglucemia leve.",
      "Poco probable que sea eficaz como terapia única para la diabetes mellitus.",
      "Debe administrarse con las comidas (preferiblemente justo antes de alimentar)."
    ],
    usos_principales: "Reducción de concentraciones de glucosa en sangre en casos de hiperglucemia leve a moderada (rango 250-350 mg/dL) en perros y gatos con diabetes mellitus no dependiente de insulina, y como tratamiento adyuvante en diabetes dependiente de insulina.",
    inicio_accion: "Inmediato (actúa en el lumen intestinal con la ingesta)",
    duracion_efecto: "Limitado a la duración de la digestión de la comida"
  },
  informacion_cliente: [
    "Dar el medicamento justo antes de alimentar al animal para mejores resultados.",
    "Las tabletas pueden dividirse o triturarse y mezclarse con la comida.",
    "Los efectos secundarios más probables son diarrea y/o gases.",
    "No causa hipoglucemia por sí solo, pero puede contribuir a ella si se usa con otros fármacos (como insulina)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Tratamiento adyuvante para diabetes mellitus (Extra-label)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 18.75,
          dosis_min: 12.5,
          dosis_max: 100,
          tope_maximo_mg: 100,
          unidad_calculo: "mg/perro"
        },
        frecuencia: {
          texto_ui: "Con cada comida (usualmente dos veces al día)",
          intervalo_horas: 12
        },
        notas_tecnicas: "Dosis inicial de 12.5-25 mg por perro (NO por kg). Si la respuesta es inadecuada tras 2 semanas, titular hasta 50 mg/perro. En perros >10-25 kg, considerar hasta 100 mg/perro."
      }
    ],
    gato: [
      {
        indicacion: "Tratamiento adyuvante para diabetes mellitus (Extra-label)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 12.5,
          dosis_min: 12.5,
          dosis_max: 12.5,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Dos veces al día con la comida",
          intervalo_horas: 12
        },
        notas_tecnicas: "Ineficaz en gatos sanos alimentados con dieta baja en carbohidratos. Dar justo antes de comer."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida.",
      "Cetoacidosis diabética.",
      "Enfermedad inflamatoria intestinal (IBD) o ulceración colónica.",
      "Obstrucción intestinal parcial o predisposición.",
      "Enfermedad intestinal crónica con trastornos de digestión/absorción.",
      "Pacientes con bajo peso o donde la formación excesiva de gases sea perjudicial."
    ],
    efectos_adversos: [
      "Flatulencia.",
      "Heces blandas o acuosas.",
      "Diarrea.",
      "Pérdida de peso (en perros).",
      "Aumento de transaminasas hepáticas (raro)."
    ],
    monitoreo_recomendado: [
      "Glucosa en sangre postprandial",
      "Enzimas hepáticas (ALT, AST) en uso crónico"
    ],
    sobredosis: {
      signos: ["Diarrea", "Flatulencia"],
      tratamiento: "No suele ser necesario. Si hay hipoglucemia por otros agentes, usar glucosa parenteral o dextrosa oral (la absorción de sacarosa está inhibida)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Carbón activado", efecto: "Reduce la eficacia de la acarbosa", severidad: "Moderada" },
      { farmaco: "Digoxina", efecto: "Reduce concentraciones de digoxina en sangre", severidad: "Moderada" },
      { farmaco: "Insulina / Sulfonilureas", efecto: "Aumentan el riesgo de hipoglucemia", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibibe competitivamente la alfa-glucosidasa intestinal, retrasando la digestión y absorción de carbohidratos.",
    farmacocinetica: "Mínima absorción sistémica. Metabolismo local por bacterias intestinales."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "25 mg, 50 mg, 100 mg",
      valor_concentracion: 25,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
