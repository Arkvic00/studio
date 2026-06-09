import type { Drug } from '@/lib/types';

export const furosemidaDrug: Drug = {
  id: "furosemida",
  meta_data: {
    nombre_generico: "Furosemida",
    nombres_comerciales: ["Dimazon", "Frusecare", "Frusedale", "Libeo", "Frusol"],
    grupo_farmacologico: "Diurético de asa",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe el cotransportador Na+/K+/Cl- en el asa de Henle.",
      "Provoca una potente excreción de sodio, potasio, cloro y agua.",
      "Aumenta el flujo sanguíneo renal y la tasa de filtración glomerular.",
      "Tratamiento de elección para el edema pulmonar cardiogénico.",
      "En aves, es efectivo a pesar de la carencia de asa de Henle en la mayoría de nefronas."
    ],
    usos_principales: "Manejo de insuficiencia cardíaca congestiva (aguda y crónica), hipercalcemia y promoción de la diuresis en fallo renal agudo.",
    inicio_accion: "Inmediato (IV); 30-60 min (PO)",
    duracion_efecto: "4 a 6 horas"
  },
  informacion_cliente: [
    "Su mascota beberá y orinará mucho más de lo normal; es un efecto esperado.",
    "Asegúrese de que siempre tenga agua fresca disponible, a menos que se indique lo contrario.",
    "Informe si nota debilidad extrema, falta de apetito o colapso.",
    "No suspenda el medicamento sin consultar, ya que puede causar una crisis respiratoria."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Falla Cardíaca Congestiva (Aguda)",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1.0,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 1 a 4 horas según respuesta", intervalo_horas: 1 }
      },
      {
        indicacion: "Falla Cardíaca Congestiva (Crónica)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "La meta es la dosis mínima efectiva. Si se requieren >12 mg/kg/día, considerar torasemida o añadir tiazidas."
      },
      {
        indicacion: "Hipercalcemia",
        vias: ["IV", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Falla Cardíaca Congestiva (Aguda)",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Los gatos son más sensibles a la deshidratación. Usar el extremo inferior del rango."
      },
      {
        indicacion: "Falla Cardíaca Congestiva (Crónica)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 48 horas", intervalo_horas: 24 }
      }
    ],
    huron: [
      {
        indicacion: "Falla cardíaca",
        vias: ["IV", "IM", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 1.0,
          dosis_max: 4.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Edema pulmonar (Agudo)",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 1,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 a 6 horas inicial", intervalo_horas: 4 }
      },
      {
        indicacion: "Mantenimiento crónico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Insuficiencia cardíaca",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 1,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 a 6 horas inicial", intervalo_horas: 4 }
      }
    ],
    ave: [
      {
        indicacion: "Edema / Falla cardíaca",
        vias: ["IM", "SC", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.05,
          dosis_min: 0.1,
          dosis_max: 6.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 24 horas", intervalo_horas: 12 }
      }
    ],
    reptil: [
      {
        indicacion: "Efecto diurético",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Anuria (ausencia de producción de orina).",
      "Deshidratación severa.",
      "Derrame pericárdico con taponamiento confirmado."
    ],
    contraindicaciones_especie: {
      "Ave": "¡ALERTA!: No usar en aves deshidratadas o con niveles altos de ácido úrico plasmático."
    },
    efectos_adversos: [
      "Hipopotasemia (niveles bajos de potasio).",
      "Hipomagnesemia e hipocalcemia.",
      "Ototoxicidad (especialmente en gatos).",
      "Azotemia prerrenal.",
      "Deshidratación.",
      "Alcalosis metabólica."
    ],
    monitoreo_recomendado: [
      "Frecuencia y esfuerzo respiratorio",
      "Función renal (Creatinina/BUN)",
      "Electrolitos séricos (Potasio)",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Observar precauciones normales para inyectables.",
    sobredosis: {
      signos: ["Deshidratación severa", "Colapso cardiovascular", "Debilidad muscular profunda"],
      tratamiento: "Fluidoterapia con cristaloides isotónicos y suplementación de potasio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos", efecto: "Aumenta drásticamente el riesgo de nefrotoxicidad y ototoxicidad.", severidad: "Grave" },
      { farmaco: "Digoxina", efecto: "La hipopotasemia inducida por furosemida aumenta el riesgo de toxicidad por digoxina.", severidad: "Importante" },
      { farmaco: "AINEs", efecto: "Reducen la eficacia diurética y aumentan el riesgo de daño renal.", severidad: "Importante" },
      { farmaco: "Corticosteroides / Teofilina", efecto: "Aumentan el riesgo de hipopotasemia.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor del cotransportador Na+/K+/2Cl- en la rama ascendente gruesa del asa de Henle.",
    farmacocinetica: "Metabolismo hepático y excreción renal. La biodisponibilidad oral es variable (~70% en perros)."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "50 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "10 mg, 20 mg, 40 mg, 1 g", valor_concentracion: 40, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
