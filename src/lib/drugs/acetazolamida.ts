import type { Drug } from '@/lib/types';

export const acetazolamidaDrug: Drug = {
  id: "acetazolamida",
  meta_data: {
    nombre_generico: "Acetazolamida",
    nombres_comerciales: ["Diamox", "Diamox SR"],
    grupo_farmacologico: "Inhibidor de la anhidrasa carbónica sistémico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Utilizado para el manejo del síndrome de caída episódica en Cavalier King Charles Spaniel (CKCS).",
      "Si no hay respuesta favorable tras 2 semanas (c/12h), suspender.",
      "En peces, trata la enfermedad de la burbuja de gas.",
      "Ya no se utiliza para el glaucoma canino."
    ],
    usos_principales: "Tratamiento de discinesias paroxísticas (CKCS) y enfermedad de la burbuja de gas en peces (caballitos de mar).",
    inicio_accion: "1-2 horas",
    duracion_efecto: "8-12 horas"
  },
  informacion_cliente: [
    "Monitorear debilidad o cambios en el patrón respiratorio.",
    "En peces, se recomienda usar filtros de calcetín de 100 micras para eliminar compuestos de las tabletas trituradas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Síndrome de Caída Episódica (CKCS)",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 6, dosis_min: 4, dosis_max: 8, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8-12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "¡EVITAR!",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "mg" },
        notas_tecnicas: "Gatos son particularmente susceptibles a efectos adversos; evitar."
      }
    ],
    peces: [
      {
        indicacion: "Enfermedad de la Burbuja de Gas (Caballitos de mar)",
        vias: ["Inmersión"],
        math: { tipo_calculo: "fija", dosis_recomendada: 6, unidad_calculo: "mg/l" },
        frecuencia: { texto_ui: "Cambio diario por 4-8 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Enfermedad de la Burbuja de Gas (Caballitos de mar)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 3.75, dosis_min: 2.5, dosis_max: 5.0, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 3-7 días (máx 3 dosis)", intervalo_horas: 72 }
      },
      {
        indicacion: "Burbuja de Gas Ocular (Otras especies)",
        vias: ["Inyección peribulbar"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 6, unidad_calculo: "mg/kg" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Evitar en perros anoréxicos.",
      "Disfunción hepática o renal.",
      "Hipersensibilidad a las sulfonamidas.",
      "Gatos (evitar)."
    ],
    efectos_adversos: [
      "Debilidad, trastornos GI (vómito, diarrea).",
      "Acidosis metabólica y diuresis.",
      "Depleción de potasio (hipopotasemia).",
      "En peces: Alteración de la flotabilidad normal."
    ],
    monitoreo_recomendado: [
      "Niveles de Potasio",
      "Estado ácido-base",
      "Función renal"
    ],
    instrucciones_manejo: "Precauciones normales.",
    sobredosis: {
      signos: ["Signos neurológicos", "Mortalidad en peces con dosis altas"],
      tratamiento: "Soporte y corrección de electrolitos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides", efecto: "Exacerban la pérdida de potasio", severidad: "Importante" },
      { farmaco: "Fármacos pH-dependientes", efecto: "La alcalinización de la orina afecta la tasa de excreción", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor sistémico de la anhidrasa carbónica.",
    farmacocinetica: "Alcaliniza la orina, lo que altera la excreción de otros fármacos (bases débiles disminuyen, ácidos débiles aumentan)."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "500 mg (vial en polvo)", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta / Cápsula", concentracion_texto: "250 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true }
  ]
};
