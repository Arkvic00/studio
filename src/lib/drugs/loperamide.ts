import type { Drug } from '@/lib/types';

export const loperamideDrug: Drug = {
  id: "loperamide",
  meta_data: {
    nombre_generico: "Loperamida",
    nombres_comerciales: ["Imodium", "Norimode", "Diah-Limit"],
    grupo_farmacologico: "Agonista opioide antidiarréico",
    status_regulatorio: "POM, P, GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agonista opioide que altera la motilidad GI actuando en el plexo mientérico.",
      "Normalmente carece de acción central, excepto en razas sensibles.",
      "Útil en diarreas no específicas agudas y crónicas.",
      "En aves, se usa para edema cerebral y fallo renal anúrico.",
      "En conejos, usar por periodos muy cortos para evitar estasis GI."
    ],
    usos_principales: "Manejo de diarrea no específica, síndrome de intestino irritable y problemas de motilidad severos.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Informe si su mascota tiene antecedentes de ser sensible a la ivermectina (especialmente Collies).",
    "Puede causar estreñimiento; suspenda el uso si las heces se vuelven muy duras.",
    "En gatos, puede causar una respuesta de excitación en raras ocasiones.",
    "No usar si sospecha de una obstrucción intestinal."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Diarrea / SII",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.12,
          dosis_min: 0.04,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "¡ALERTA!: No usar en Collies o razas con mutación MDR1 (ABCB1) por riesgo de sedación profunda fatal."
      }
    ],
    gato: [
      {
        indicacion: "Diarrea",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          dosis_min: 0.04,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Usar con precaución debido al riesgo de excitabilidad."
      }
    ],
    huron: [
      {
        indicacion: "Diarrea",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Diarrea severa",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          dosis_min: 0.04,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Usar por el menor tiempo posible para evitar estasis gastrointestinal."
      }
    ],
    roedores: [
      {
        indicacion: "Diarrea",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    primates: [
      {
        indicacion: "Diarrea",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.04,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción intestinal.",
      "Mutación del gen MDR1 (Collies y razas relacionadas).",
      "Diarreas infecciosas por toxinas (donde se requiere tránsito)."
    ],
    efectos_adversos: [
      "Estreñimiento.",
      "Sedación profunda en razas sensibles.",
      "Excitabilidad (especialmente en gatos)."
    ],
    monitoreo_recomendado: [
      "Frecuencia y consistencia de las heces",
      "Estado de alerta"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Sedación", "Coma", "Estreñimiento severo"],
      tratamiento: "Naloxona como antagonista; soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros fármacos que reducen motilidad", efecto: "Efecto aditivo peligroso.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a los receptores opioides en la pared intestinal para inhibir la liberación de acetilcolina y prostaglandinas, reduciendo la motilidad propulsiva.",
    farmacocinetica: "Sustrato de la P-glicoproteína; en animales normales no cruza la barrera hematoencefálica."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula/Tableta", concentracion_texto: "2 mg", valor_concentracion: 2, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Jarabe oral", concentracion_texto: "0.2 mg/ml", valor_concentracion: 0.2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
