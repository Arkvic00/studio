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
      "Inhibidor de la anhidrasa carbónica que alcaliniza la orina.",
      "Uso principal: síndrome de caída episódica en CKCS.",
      "Si no hay respuesta en 2 semanas (c/12h), suspender el tratamiento.",
      "Tratamiento de elección para la enfermedad de la burbuja de gas en caballitos de mar.",
      "Ya no se usa para glaucoma canino."
    ],
    usos_principales: "Discinesias paroxísticas (CKCS) y enfermedad de la burbuja de gas (peces).",
    inicio_accion: "1-2 horas",
    duracion_efecto: "8-12 horas"
  },
  informacion_cliente: [
    "Vigilar debilidad extrema o cambios en la respiración.",
    "En acuarios, usar filtros de calcetín de 100 micras para remover compuestos de las tabletas trituradas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Perros CKCS: Síndrome de Caída Episódica",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 6, dosis_min: 4, dosis_max: 8, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8-12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Gatos: ¡EVITAR!",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "mg" },
        notas_tecnicas: "Los gatos son altamente susceptibles a los efectos adversos de los inhibidores sistémicos de la anhidrasa carbónica."
      }
    ],
    peces: [
      {
        indicacion: "Caballitos de mar (Seahorses): Enf. Burbuja de Gas",
        vias: ["Inmersión"],
        math: { tipo_calculo: "fija", dosis_recomendada: 6, unidad_calculo: "mg/l" },
        frecuencia: { texto_ui: "Cambio diario por 4-8 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Caballitos de mar (Seahorses): Enf. Burbuja de Gas",
        vias: ["IM", "Intracelómica"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 3.75, dosis_min: 2.5, dosis_max: 5.0, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 3-7 días (Máx 3 dosis)", intervalo_horas: 72 }
      },
      {
        indicacion: "Otras especies de peces: Burbuja de gas ocular",
        vias: ["Inyección peribulbar"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 6, unidad_calculo: "mg/kg" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perros anoréxicos.",
      "Disfunción hepática o renal.",
      "Hipersensibilidad a las sulfonamidas.",
      "Gatos (evitar)."
    ],
    efectos_adversos: [
      "Debilidad, trastornos GI (anorexia, vómito, diarrea).",
      "Acidosis metabólica y hipopotasemia.",
      "En peces: Alteración de la flotabilidad normal y mortalidad en dosis altas."
    ],
    monitoreo_recomendado: [
      "Electrolitos (Potasio)",
      "Estado ácido-base",
      "Flotabilidad en peces"
    ],
    instrucciones_manejo: "Precauciones normales.",
    sobredosis: {
      signos: ["Signos neurológicos", "Desequilibrio electrolítico severo"],
      treatment: "Soporte."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides", efecto: "Exacerban la pérdida de potasio.", severidad: "Importante" },
      { farmaco: "Fármacos pH-dependientes", efecto: "La alcalinización de la orina afecta su excreción.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor sistémico de la enzima anhidrasa carbónica.",
    farmacocinetica: "Alcaliniza la orina, lo que puede aumentar la excreción de ácidos débiles y disminuir la de bases débiles."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "500 mg (vial en polvo)", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta / Cápsula", concentracion_texto: "250 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true }
  ]
};
