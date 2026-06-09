import type { Drug } from '@/lib/types';

export const acetazolamidaDrug: Drug = {
  id: "acetazolamida",
  meta_data: {
    nombre_generico: "Acetazolamida",
    nombres_comerciales: ["Diamox", "Diamox SR"],
    grupo_farmacologico: "Inhibidor de la anhidrasa carbónica sistémico",
    status_regulatorio: "POM. Uso extra-label en veterinaria."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor de la anhidrasa carbónica que reduce la producción de humor acuoso y LCR.",
      "Uso principal actual: Manejo del Síndrome de Caída Episódica en el Cavalier King Charles Spaniel (CKCS).",
      "Ya no se recomienda como primera línea para glaucoma canino.",
      "En medicina de peces, se usa para tratar la enfermedad de la burbuja de gas."
    ],
    usos_principales: "Tratamiento de discinesias paroxísticas (caída episódica) en CKCS. Enfermedad de la burbuja de gas en caballitos de mar y otros peces.",
    inicio_accion: "1-2 horas",
    duracion_efecto: "8-12 horas"
  },
  informacion_cliente: [
    "Monitorear si el animal muestra debilidad o jadeo excesivo.",
    "Puede causar un aumento en la frecuencia urinaria.",
    "Si no hay mejoría en el CKCS tras 2 semanas, el tratamiento debe suspenderse.",
    "Nunca administrar a gatos sin supervisión extrema (muy sensibles)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Síndrome de Caída Episódica (CKCS)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 4,
          dosis_max: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Utilizar cuando los episodios son refractarios a benzodiacepinas. Evaluar respuesta a las 2 semanas."
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "mg"
        },
        frecuencia: {
          texto_ui: "EVITAR USO",
          intervalo_horas: 0
        },
        notas_tecnicas: "Los gatos son particularmente susceptibles a los efectos adversos sistémicos de este fármaco."
      }
    ],
    peces: [
      {
        indicacion: "Enfermedad de la Burbuja de Gas (Caballitos de mar)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 6,
          unidad_calculo: "mg/L"
        },
        frecuencia: {
          texto_ui: "Cambio diario por 4-8 días",
          intervalo_horas: 24
        },
        notas_tecnicas: "Si se usan tabletas trituradas, se recomienda usar filtros de calcetín de 100 micras."
      },
      {
        indicacion: "Burbuja de Gas Ocular (Otros peces)",
        vias: ["Inyección peribulbar"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dosis única",
          intervalo_horas: 0
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Alta susceptibilidad).",
      "Perros anoréxicos.",
      "Disfunción hepática o renal severa.",
      "Hipersensibilidad a las sulfonamidas."
    ],
    efectos_adversos: [
      "Debilidad muscular.",
      "Alteraciones GI (vómito, diarrea).",
      "Acidosis metabólica.",
      "Hipopotasemia (depleción de potasio).",
      "En peces: Alteración de la flotabilidad por interferencia con la vejiga natatoria."
    ],
    monitoreo_recomendado: [
      "Electrolitos (especialmente Potasio)",
      "pH sanguíneo",
      "Función renal"
    ],
    instrucciones_manejo: "Precauciones normales. En inmersión para peces, filtrar residuos de tabletas trituradas.",
    sobredosis: {
      signos: ["Desequilibrio electrolítico severo", "Acidosis", "Letargo"],
      tratamiento: "Corrección de electrolitos y soporte de fluidos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides", efecto: "Exacerban la pérdida de potasio (hipopotasemia)", severidad: "Grave" },
      { farmaco: "Fármacos alcalinizantes", efecto: "La acetazolamida alcaliniza la orina, alterando la excreción de otros fármacos", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la enzima anhidrasa carbónica, reduciendo la formación de iones H+ y bicarbonato, lo que disminuye la secreción de líquidos corporales.",
    farmacocinetica: "Se excreta principalmente por vía renal. Altera el pH urinario hacia la alcalinidad."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta / Cápsula",
      concentracion_texto: "250 mg",
      valor_concentracion: 250,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Vial inyectable",
      concentracion_texto: "500 mg (Polvo)",
      valor_concentracion: 500,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
